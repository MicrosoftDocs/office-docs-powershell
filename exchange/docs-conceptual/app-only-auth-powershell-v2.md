---
title: App-only authentication
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer: navgupta
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
ROBOTS: NOINDEX, NOFOLLOW
description: "Learn about using the Exchange Online V2 module in scripts and other long-running tasks with modern authentication and app-only authentication."
---

# App-only authentication for unattended scripts in the EXO V2 module

> [!NOTE]
> This feature is currently in Public Preview, and is available in the `2.0.3-Preview` release of Exchange Online PowerShell V2 Module. For instruction on how to install or update to this version of the module, see [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module).

Auditing and reporting scenarios in Exchange Online often involve scripts that run unattended. In most cases, these unattended scripts access Exchange Online PowerShell using Basic authentication (a username and password). Even when the connection to Exchange Online PowerShell uses modern authentication, the credentials are stored in a local file or a secret vault that's accessed at run-time.

Because storing user credentials locally is not a safe practice, we're releasing this feature to support authentication for unattended scripts (automation) scenarios using AzureAD applications and self-signed certificates.

The following examples show how to use the Exchange Online PowerShell V2 module with app-only authentication:

- Connect using a local certificate:

  ```powershell
  Connect-ExchangeOnline -CertificateFilePath "C:\Users\johndoe\Desktop\automation-cert.pfx" -CertificatePassword (ConvertTo-SecureString -String "<My Password>" -AsPlainText -Force) -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
  ```

- Connect using a certificate thumbprint:

  ```powershell
  Connect-ExchangeOnline -CertificateThumbPrint "012THISISADEMOTHUMBPRINT" -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
  ```

  When you use the _CertificateThumbPrint_ parameter, the certificate needs to be installed on the computer where you are running the command. The certificate should be installed in the user certificate store.

## How does it work?

The EXO V2 module uses the Active Directory Authentication Library to fetch an app-only token using the application Id, tenant Id (organization), and certificate thumbprint. The application object provisioned inside Azure AD has a Directory Role assigned to it, which is returned in the access token. Exchange Online configures the session RBAC using the directory role information that's available in the token.

## Setup app-only authentication

An initial onboarding is required for authentication using application objects. Application and service principal are used interchangeably, but an application is like a class object while a service principal is like an instance of the class. You can learn more about this at [Application and service principal objects in Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/app-objects-and-service-principals).

For a detailed visual flow about creating applications in Azure AD, see <https://aka.ms/azuread-app>.

1. Register the application in Azure AD at <https://portal.azure.com>.

2. Assign permissions to access Exchange Online.

   An application object has the default permission `User.Read`. For the application object to access Exchange Online resources, it needs to have the Application permission `Exchange.ManageAsApp`.

3. Attach a certificate.

   - For app-only authentication in Azure AD,  you typically use a certificate to request access. Anyone who has the certificate and its private key can use the app, and the permissions granted to the app.

   - Create and configure a self-signed X.509 certificate, which will be used to authenticate your Application against Azure AD, while requesting the app-only access token.

   - This is similar to generating a password for user accounts. The certificate can be self-signed as well. See the [Appendix](#step-3-generate-a-self-signed-certificate) section later in this topic for instructions for generating certificates in PowerShell.
   
     > [!NOTE]
     > Cryptography: Next Generation (CNG) certificates are not supported for app-only authentication with Exchange. CNG certificates are created by default in modern Windows versions. You must use a certificate from a CSP key provider. The [Appendix](#step-3-generate-a-self-signed-certificate) section covers two supported methods to create a CSP certificate.

4. Assign RBAC roles

   The application needs to have the appropriate RBAC roles assigned. Because the apps are provisioned in Azure AD, you can use any of the built-in roles. The following roles are supported:

   - Global administrator
   - Compliance administrator
   - Security reader
   - Security administrator
   - Helpdesk administrator
   - Exchange administrator
   - Global Reader

## Appendix

## Step 1: Application registration in Azure AD

If you encounter problems, check the [required permssions](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#required-permissions) to verify that your account can create the identity.

1. Go to the Azure AD portal at <https://portal.azure.com/> and sign in with your Azure AD account.

2. Under **Manage Azure Active Directory**, click **View**.

3. Under **Manage**, select **App registrations** and then click **New registration**.

4. In the **Register an application** page that appears, configure the following settings:

   - **Name**: Enter something descriptive.

   - **Supported account types**: Select **Accounts in this organizational directory only (Microsoft)**.

   - **Redirect URI (optional)**: In the first box, select **Web**. In the second box, enter the URI where the access token is sent.

     Note that you can't create credentials for [native applications](https://docs.microsoft.com/azure/active-directory/manage-apps/application-proxy-configure-native-client-application), because you can't use that type for automated applications.

   ![Register an application](media/app-only-auth-register-app.png)

   When you're finished, click **Register**.

   Leave the page that appears open. You'll use it in the next step.

## Step 2: Assign API permissions to the application

You need to assign the API permission `Exchange.ManageAsApp` so the application can manage Exchange Online. API permissions are required because they have consent flow enabled, which allows auditing (directory roles don't have consent flow).

1. Select **API permissions**.

2. In the **Configured permissions** page that appears, click **Add permission**.

3. In the flyout that appears, select **Exchange**.

   ![Select Exchange API permssions](media/app-only-auth-exchange-api-perms.png)

4. In the flyout that appears, click **Application permissions**.

5. In the **Select permissions** section that appears on the page, expand **Exchange** and select **Exchange.ManageAsApp**

   ![Select Exchange API permssions](media/app-only-auth-exchange-manageasapp.png)

   When you're finished, click **Add permissions**.

6. Back on the **Configured permissions** page that appears, click **Grant admin consent for <\tenant name\>**, and select **Yes** in the dialog that appears.

7. Close the flyout when you're finished.

## Step 3: Generate a self-signed certificate

Create a self-signed x.509 certificate using one of the following methods:

- Use the [Create-SelfSignedCertificate script](https://github.com/SharePoint/PnP-Partner-Pack/blob/master/scripts/Create-SelfSignedCertificate.ps1):

  ```powershell
  .\Create-SelfSignedCertificate.ps1 -CommonName "MyCompanyName" -StartDate 2020-04-01 -EndDate 2022-04-01
  ```

- Use the **makecert.exe** tool from the Windows SDK.

## Step 4: Attach the certificate to the Azure AD application

After you register the certificate with your application, you can use the public key (.pfx file) or the thumbprint for authentication.

1. In the Azure AD portal under **Manage Azure Active Directory**, click **View**.

2. Under **Manage**, select **App registrations**.

3. On the **App registrations** page that appears, select your application.

4. Under **Manage**, select **Certificates & secrets**.

5. On the **Certificates & secrets** page that opens, click **Upload certificate**.

   ![Click Upload certificate](media/app-only-auth-upload-cert.png)

6. In the dialog that appears, browse to the self-signed certificate you created in the previous Step, and then click **Add**.

## Step 5: Assign a role to the application

Azure AD has more than 50 admin roles available. For app-only authentication in Exchange Online, we currently support the previously mentioned roles:

- Global administrator
- Compliance administrator
- Security reader
- Security administrator
- Helpdesk administrator
- Exchange administrator
- Global Reader

1. In the Azure AD portal under **Manage Azure Active Directory**, click **View**.

2. Under **Manage**, select **Roles and administrators**.

3. Select one of the supported roles. On the **Assignments** page that appears, click **Add assignments**

4. In the **Add assignments** flyout that appears, find and select the application, and then click **Add**.

   ![Add a role assignment](media/app-only-auth-role-assignment.png)
