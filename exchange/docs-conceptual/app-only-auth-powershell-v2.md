---
title: App-only authentication in Exchange Online PowerShell and Security & Compliance PowerShell
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date: 5/3/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about using the Exchange Online PowerShell V2 module and V3 module in scripts and other long-running tasks with modern authentication and app-only authentication (also known a certificate based authentication or CBA)."
---

# App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell

Auditing and reporting scenarios in Microsoft 365 often involve unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell. In the past, unattended sign in required you to store the username and password in a local file or in a secret vault that's accessed at run-time. But, as we all know, storing user credentials locally is not a good security practice.

Certificate based authentication (CBA) or app-only authentication as described in this article supports unattended script and automation scenarios by using Azure AD apps and self-signed certificates.

> [!NOTE]
>
> - Did you know that you can connect to Exchange Online PowerShell using managed identities in Azure? Check out [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).
>
> - The features and procedures described in this article require the following versions of the Exchange Online PowerShell module:
>   - **Exchange Online PowerShell (Connect-ExchangeOnline)**: Version 2.0.3 or later.
>   - **Security & Compliance PowerShell (Connect-IPPSSession)**: Version 3.0.0 or later.
>
>   For instructions on how to install or update the module, see [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module). For instructions on how to use the module in Azure automation, see [Manage modules in Azure Automation](/azure/automation/shared-resources/modules).
>
> - Version 2.0.5 and earlier is known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).
>
> - In Exchange Online PowerShell, you can't use the procedures in this article with the following Microsoft 365 Group cmdlets:
>   - [New-UnifiedGroup](/powershell/module/exchange/new-unifiedgroup)
>   - [Remove-UnifiedGroup](/powershell/module/exchange/remove-unifiedgroup)
>   - [Set-UnifiedGroup](/powershell/module/exchange/set-unifiedgroup)
>   - [Remove-UnifiedGroupLinks](/powershell/module/exchange/remove-unifiedgrouplinks)
>   - [Add-UnifiedGroupLinks](/powershell/module/exchange/add-unifiedgrouplinks)
>
>   You can use Microsoft Graph to replace most of the functionality from those cmdlets. For more information, see [Working with groups in Microsoft Graph](/graph/api/resources/groups-overview).
>
> - Delegated scenarios are supported in Exchange Online. The recommended method for connecting with delegation is using GDAP and App Consent. For more information, see [Use the Exchange Online PowerShell v3 Module with GDAP and App Consent](/powershell/partnercenter/exchange-online-gdap-app). You can also use multi-tenant applications when CSP relationships are not created with the customer. The required steps for using multi-tenant applications are called out within the regular instructions in this article.
>
> - If the procedures in this article don't work for you, verify that you don't have Beta versions of the PackageManagement or PowerShellGet modules installed by running the following command: `Get-InstalledModule PackageManagement -AllVersions; Get-InstalledModule PowerShellGet -AllVersions`.

## How does it work?

The Exchange Online PowerShell module uses the Active Directory Authentication Library to fetch an app-only token using the application Id, tenant Id (organization), and certificate thumbprint. The application object provisioned inside Azure AD has a Directory Role assigned to it, which is returned in the access token. The session's role based access control (RBAC) is configured using the directory role information that's available in the token.

## Connection examples

The following examples show how to use the Exchange Online PowerShell module with app-only authentication:

> [!IMPORTANT]
> In the following connection commands, use the primary `.onmicrosoft.com` domain for your organization as the value of the _Organization_ parameter.
>
> The following connection commands have many of the same options available as described in [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md) and [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md). For example:
>
> - You can use REST API cmdlets or original remote PowerShell cmdlets. For more information, see [Updates for the EXO V3 module)](exchange-online-powershell-v2.md#updates-for-the-exo-v3-module).
>
>   Remote PowerShell support in Exchange Online PowerShell will be deprecated. For more information, see [Announcing Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell](https://aka.ms/RPSDeprecation).
>
> - Microsoft 365 GCC High or Microsoft 365 DoD environments require the following additional parameters and values:
>   - **Connect-ExchangeOnline in GCC High**: `-ExchangeEnvironmentName O365USGovGCCHigh`.
>   - **Connect-IPPSSession in GCC High**: `-ConnectionUri https://ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/common`.
>   - **Connect-ExchangeOnline in DoD**: `-ExchangeEnvironmentName O365USGovDoD`.
>   - **Connect-IPPSSession in DoD**: `-ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/common`.
>
> - If a **Connect-IPPSSession** command presents a login prompt, run the command: `$Global:IsWindows = $true` before the **Connect-IPPSSession** command.

- **Connect using a certificate thumbprint**:

  The certificate needs to be installed on the computer where you're running the command. The certificate should be installed in the user certificate store.

  - <u>Exchange Online PowerShell</u>:

    ```powershell
    Connect-ExchangeOnline -CertificateThumbPrint "012THISISADEMOTHUMBPRINT" -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

  - <u>Security & Compliance PowerShell</u>:

    ```powershell
    Connect-IPPSSession -CertificateThumbPrint "012THISISADEMOTHUMBPRINT" -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

- **Connect using a certificate object**:

  The certificate does not need to be installed on the computer where you're running the command. You can store the certificate object remotely. The certificate is fetched when the script is run.

  - <u>Exchange Online PowerShell</u>:

    ```powershell
    Connect-ExchangeOnline -Certificate <%X509Certificate2 Object%> -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

  - <u>Security & Compliance PowerShell</u>:

    ```powershell
    Connect-IPPSSession -Certificate <%X509Certificate2 Object%> -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

- **Connect using a local certificate**:

  > [!NOTE]
  > Using a **ConvertTo-SecureString** command to store the password of the certificate locally defeats the purpose of a secure connection method for automation scenarios. Using a **Get-Credential** command to prompt you for the password of the certificate securely isn't ideal for automation scenarios. In other words, there's really no automated _and_ secure way to connect using a local certificate.

  - <u>Exchange Online PowerShell</u>:

    ```powershell
    Connect-ExchangeOnline -CertificateFilePath "C:\Users\navin\Desktop\automation-cert.pfx" -CertificatePassword (Get-Credential).password -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

  - <u>Security & Compliance PowerShell</u>:

     ```powershell
    Connect-IPPSSession -CertificateFilePath "C:\Users\navin\Desktop\automation-cert.pfx" -CertificatePassword (Get-Credential).password -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contosoelectronics.onmicrosoft.com"
    ```

## Set up app-only authentication

An initial onboarding is required for authentication using application objects. Application and service principal are used interchangeably, but an application is like a class object while a service principal is like an instance of the class. You can learn more about this at [Application and service principal objects in Azure Active Directory](/azure/active-directory/develop/app-objects-and-service-principals).

For a detailed visual flow about creating applications in Azure AD, see <https://aka.ms/azuread-app>.

1. [Register the application in Azure AD](#step-1-register-the-application-in-azure-ad).

2. [Assign API permissions to the application](#step-2-assign-api-permissions-to-the-application).

   An application object has the default permission `User.Read`. For the application object to access resources, it needs to have the Application permission `Exchange.ManageAsApp`.

3. [Generate a self-signed certificate](#step-3-generate-a-self-signed-certificate)

   - For app-only authentication in Azure AD,  you typically use a certificate to request access. Anyone who has the certificate and its private key can use the app, and the permissions granted to the app.

   - Create and configure a self-signed X.509 certificate, which will be used to authenticate your Application against Azure AD, while requesting the app-only access token.

   - This is similar to generating a password for user accounts. The certificate can be self-signed as well. See the [Appendix](#step-3-generate-a-self-signed-certificate) section later in this article for instructions for generating certificates in PowerShell.

     > [!NOTE]
     > Cryptography: Next Generation (CNG) certificates are not supported for app-only authentication with Exchange. CNG certificates are created by default in modern Windows versions. You must use a certificate from a CSP key provider. The [Appendix](#step-3-generate-a-self-signed-certificate) section covers two supported methods to create a CSP certificate.

4. [Attach the certificate to the Azure AD application](#step-4-attach-the-certificate-to-the-azure-ad-application)

5. [Assign Azure AD roles to the application](#step-5-assign-azure-ad-roles-to-the-application)

   The application needs to have the appropriate RBAC roles assigned. Because the apps are provisioned in Azure AD, you can use any of the supported built-in roles.

### Step 1: Register the application in Azure AD

> [!NOTE]
> If you encounter problems, check the [required permissions](/azure/active-directory/develop/howto-create-service-principal-portal#required-permissions) to verify that your account can create the identity.

1. Open the Azure AD portal at <https://portal.azure.com/>.

2. In the **Search** box at the top of the page, start typing **App registrations**, and then select **App registrations** from the results in the **Services** section.

   ![Screenshot that shows App registrations in the Search results on the home page of the Azure portal.](media/exo-app-only-auth-find-app-registrations.png)

   Or, to go directly to the **App registrations** page, use <https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade>.

3. On the **App registrations** page, click **New registration**.

   ![Select New registration on the App registrations page.](media/exo-app-only-auth-new-app-registration.png)

   On the **Register an application** page that opens, configure the following settings:

   - **Name**: Enter something descriptive. For example, ExO PowerShell CBA.

   - **Supported account types**: Verify that **Accounts in this organizational directory only (\<YourOrganizationName\> only - Single tenant)** is selected.

     > [!NOTE]
     > To make the application multi-tenant for **Exchange Online** delegated scenarios, select the value **Accounts in any organizational directory (Any Azure AD directory - Multitenant)**.

   - **Redirect URI (optional)**: In the first box, verify that **Web** is selected. In the second box, enter the URI where the access token is sent.

     > [!NOTE]
     > You can't create credentials for [native applications](/azure/active-directory/manage-apps/application-proxy-configure-native-client-application), because you can't use that type for automated applications.

     ![Register an application.](media/exo-app-only-auth-register-app.png)

   When you're finished, click **Register**.

4. Leave the app page that you return to open. You'll use it in the next step.

### Step 2: Assign API permissions to the application

> [!NOTE]
> The procedures in this section replace any default permissions that were automatically configured for the new app. The app doesn't need the default permissions that were replaced.

1. On the app page under **Management**, select **Manifest**.

   ![Select Manifest on the application properties page.](media/exo-app-only-auth-select-manifest.png)

2. On the **Manifest** page that opens, find the `requiredResourceAccess` entry (on or about line 47).

   Modify the `resourceAppId`, `resourceAccess id`, and `resourceAccess type` values as shown in the following code snippet:

   ```json
   "requiredResourceAccess": [
      {
         "resourceAppId": "00000002-0000-0ff1-ce00-000000000000",
         "resourceAccess": [
            {
               "id": "dc50a0fb-09a3-484d-be87-e023b12c6440",
               "type": "Role"
            }
         ]
      }
   ],
   ```

   > [!NOTE]
   > Microsoft 365 GCC High or DoD environments have access to Security & Compliance PowerShell only. Use the following values for `resourceAppId`, `resourceAccess id`, and `resourceAccess type`:
   >
   > ```json
   > "requiredResourceAccess": [
   >    {
   >      "resourceAppId": "00000007-0000-0ff1-ce00-000000000000",
   >      "resourceAccess": [
   >         {
   >            "id": "455e5cd2-84e8-4751-8344-5672145dfa17",
   >            "type": "Role"
   >         }
   >      ]
   >    }
   > ],
   > ```

   When you're finished, click **Save**.

3. Still on the **Manifest** page, under **Management**, select **API permissions**.

   ![Select API permissions on the application properties page.](media/exo-app-only-auth-select-api-permissions.png)

   On the **API permissions** page that opens, do the following steps:

   - **API / Permissions name**: Verify the value **Exchange.ManageAsApp** is shown.

     > [!NOTE]
     > If necessary, search for **Office 365 Exchange** under **APIs my organization uses** on the **Request API Permissions** page.

   - **Status**: The current incorrect value is **Not granted for \<Organization\>**, and this value needs to be changed.

     ![Original incorrect API permissions.](media/exo-app-only-auth-original-permissions.png)

     Select **Grant admin consent for \<Organization\>**, read the confirmation dialog that opens, and then click **Yes**.

     The **Status** value should now be **Granted for \<Organization\>**.

     ![Admin consent granted.](media/exo-app-only-auth-admin-consent-granted.png)

4. Close the current **API permissions** page (not the browser tab) to return to the **App registrations** page. You'll use it in an upcoming step.

### Step 3: Generate a self-signed certificate

Create a self-signed x.509 certificate using one of the following methods:

- (Recommended) Use the [New-SelfSignedCertificate](/powershell/module/pki/new-selfsignedcertificate), [Export-Certificate](/powershell/module/pki/export-certificate) and [Export-PfxCertificate](/powershell/module/pki/export-pfxcertificate) cmdlets in an elevated (run as administrator) Windows PowerShell session to request a self-signed certificate and export it to `.cer` and `.pfx` (SHA1 by default). For example:

  ```powershell
  # Create certificate
  $mycert = New-SelfSignedCertificate -DnsName "contoso.org" -CertStoreLocation "cert:\CurrentUser\My" -NotAfter (Get-Date).AddYears(1) -KeySpec KeyExchange

  # Export certificate to .pfx file
  $mycert | Export-PfxCertificate -FilePath mycert.pfx -Password (Get-Credential).password

  # Export certificate to .cer file
  $mycert | Export-Certificate -FilePath mycert.cer
  ```

- Use the [Create-SelfSignedCertificate script](https://github.com/SharePoint/PnP-Partner-Pack/blob/master/scripts/Create-SelfSignedCertificate.ps1) script to generate SHA1 certificates.

  ```powershell
  .\Create-SelfSignedCertificate.ps1 -CommonName "MyCompanyName" -StartDate 2021-01-06 -EndDate 2022-01-06
  ```

### Step 4: Attach the certificate to the Azure AD application

After you register the certificate with your application, you can use the private key (`.pfx` file) or the thumbprint for authentication.

1. On the **Owned applications** tab on the **Apps registration** page from the end of [Step 2](#step-2-assign-api-permissions-to-the-application), select your application.

   If you need to get back to **Apps registration** page, use <https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps>, verify the **Owned applications** tab is selected, and then select your application.

   ![Apps registration page where you select your app.](media/exo-app-only-auth-app-registration-page.png)

2. On the application page that opens, under **Manage**, select **Certificates & secrets**.

   ![Select Certificates & Secrets on the application properties page.](media/exo-app-only-auth-select-certificates-and-secrets.png)

3. On the **Certificates & secrets** page that opens, click **Upload certificate**.

   ![Select Upload certificate on the Certificates & secrets page.](media/exo-app-only-auth-select-upload-certificate.png)

   In the dialog that opens, browse to the self-signed certificate (`.cer` file) that you created in [Step 3](#step-3-generate-a-self-signed-certificate).

   ![Browse to the certificate and then click Add.](media/exo-app-only-auth-upload-certificate-dialog.png)

   When you're finished, click **Add**.

   The certificate is now shown in the **Certificates** section.

   ![Application page showing that the certificate was added.](media/exo-app-only-auth-certificate-successfully-added.png)

4. Close the current **Certificates & secrets** page, and then the **App registrations** page to return to the main <https://portal.azure.com/> page. You'll use it in the next step.

### Step 4b: Exchange Online delegated scenarios only: Grant admin consent for the multi-tenant app

If you made the application multi-tenant for **Exchange Online** delegated scenarios in [Step 1](#step-1-register-the-application-in-azure-ad), you need to grant admin consent to the Exchange.ManageAsApp permission so the application can run cmdlets in Exchange Online **in each tenant organization**. To do this, generate an admin consent URL for each customer tenant. Before anyone uses the multi-tenant application to connect to Exchange Online in the tenant organization, an admin in the customer tenant should open the following URL:

`https://login.microsoftonline.com/<tenant-id>/adminconsent?client_id=<client-id>&scope=https://outlook.office365.com/.default`

- `<tenant-id>` is the customer's tenant ID.
- `<client-id>` is the ID of the multi-tenant application.
- The default scope is used to grant application permissions.

For more information about the URL syntax, see [Request the permissions from a directory admin](/azure/active-directory/develop/v2-admin-consent#request-the-permissions-from-a-directory-admin).

### Step 5: Assign Azure AD roles to the application

You have two options:

- **Assign Azure AD roles to the application**: This method is supported in Exchange Online PowerShell and Security & Compliance PowerShell.
- **Assign custom Exchange Online role groups to the application using service principals**: This method is supported only when you connect in [REST API mode](exchange-online-powershell-v2.md#updates-for-the-exo-v3-module).

> [!NOTE]
> You can also combine both methods to assign permissions. For example, you can use Azure AD roles for the "Exchange Recipient Administrator" role and also assign your custom RBAC role to extend the permissions.
>
> For multi-tenant applications in **Exchange Online** delegated scenarios, you need to assign permissions in each customer tenant.

#### Assign Azure AD roles to the application

The supported Azure AD roles are described in the following table:

|Role|Exchange Online<br>PowerShell|Security & Compliance<br>PowerShell|
|---|:---:|:---:|
|[Compliance Administrator](/azure/active-directory/roles/permissions-reference#compliance-administrator)|✔|✔|
|[Exchange Administrator](/azure/active-directory/roles/permissions-reference#exchange-administrator)<sup>\*</sup>|✔||
|[Exchange Recipient Administrator](/azure/active-directory/roles/permissions-reference#exchange-recipient-administrator)|✔||
|[Global Administrator](/azure/active-directory/roles/permissions-reference#global-administrator)<sup>\*</sup>|✔|✔|
|[Global Reader](/azure/active-directory/roles/permissions-reference#global-reader)|✔|✔|
|[Helpdesk Administrator](/azure/active-directory/roles/permissions-reference#helpdesk-administrator)|✔||
|[Security Administrator](/azure/active-directory/roles/permissions-reference#security-administrator)<sup>\*</sup>|✔|✔|
|[Security Reader](/azure/active-directory/roles/permissions-reference#security-reader)|✔|✔|

> <sup>\*</sup> The Global Administrator and Exchange Administrator roles provide the required permissions for any task in Exchange Online PowerShell. For example:
>
> - Recipient management.
> - Security and protection features. For example, anti-spam, anti-malware, anti-phishing, and the associated reports.
>
> The Security Administrator role does not have the necessary permissions for those same tasks.

For general instructions about assigning roles in Azure AD, see [View and assign administrator roles in Azure Active Directory](/azure/active-directory/roles/manage-roles-portal).

> [!NOTE]
> The following steps are slightly different for Exchange Online PowerShell vs. Security & Compliance PowerShell. The steps for both environments are shown. To configure roles for both environments, repeat the steps in this section.

1. In Azure AD portal at <https://portal.azure.com/>, start typing **roles and administrators** in the **Search** box at the top of the page, and then select **Azure AD roles and administrators** from the results in the **Services** section.

   ![Screenshot that shows Azure AD roles and administrators in the Search results on the on the home page of the Azure portal.](media/exo-app-only-auth-find-roles-and-administrators.png)

   Or, to go directly to the **Azure AD roles and administrators** page, use <https://portal.azure.com/#view/Microsoft_AAD_IAM/AllRolesBlade>.

2. On the **Roles and administrators** page that opens, find and select one of the supported roles by _clicking on the name of the role_ (not the check box) in the results.

   - **Exchange Online PowerShell**: For example, find and select the **Exchange administrator** role.

     ![Find and select a supported Exchange Online PowerShell role by clicking on the role name.](media/exo-app-only-auth-find-and-select-supported-role.png)

   - **Security & Compliance PowerShell**: For example, find and select the **Compliance Administrator** role.

     ![Find and select a supported Security & Compliance PowerShell role by clicking on the role name.](media/exo-app-only-auth-find-and-select-supported-role-scc.png)

3. On the **Assignments** page that opens, click **Add assignments**.

   - **Exchange Online PowerShell**:

     ![Select Add assignments on the role assignments page for Exchange Online PowerShell.](media/exo-app-only-auth-role-assignments-click-add-assignments.png)

   - **Security & Compliance PowerShell**:

     ![Select Add assignments on the role assignments page for Security & Compliance PowerShell.](media/exo-app-only-auth-role-assignments-click-add-assignments-scc.png)

4. In the **Add assignments** flyout that opens, find and select the app that you created in [Step 1](#step-1-register-the-application-in-azure-ad).

   ![Find and select your app on the Add assignments flyout.](media/exo-app-only-auth-find-add-select-app-for-assignment.png)

   When you're finished, click **Add**.

5. Back on the **Assignments** page, verify that the role has been assigned to the app.

   - **Exchange Online PowerShell**:

     ![The role assignments page after to added the app to the role for Exchange Online PowerShell.](media/exo-app-only-auth-app-assigned-to-role.png)

   - **Security & Compliance PowerShell**:

     ![The role assignments page after to added the app to the role for Security & Compliance PowerShell.](media/exo-app-only-auth-app-assigned-to-role-scc.png)

#### Assign custom Exchange Online role groups to the application using service principals

> [!NOTE]
> You need to connect to Exchange Online PowerShell or Security & Compliance PowerShell _before_ completing steps to create a new service principal. Creating a new service principal without connecting to PowerShell won't work (your Azure App ID and Object ID is needed to create the new service principal).
>
> This method is supported only when you connect in [REST API mode](exchange-online-powershell-v2.md#updates-for-the-exo-v3-module).

For information about creating custom role groups, see [Create role groups](/exchange/permissions-exo/role-groups#create-role-groups). The custom role group that you assign to the application can contain any combination of built-in and custom roles.

To assign custom role groups to the application using service principals, do the following steps:

1. In [Azure Active Directory PowerShell for Graph](/powershell/azure/active-directory/install-adv2), run the following command to store the details of the Azure application that you registered in [Step 1](#step-1-register-the-application-in-azure-ad) in a variable:

   ```powershell
   $<VariableName1> = Get-AzureADServicePrincipal -SearchString "<AppName>"
   ```

   For example:

   ```powershell
   $AADApp = Get-AzureADServicePrincipal -SearchString "ExO PowerShell CBA"
   ```

   For detailed syntax and parameter information, see [Get-AzureADServicePrincipal](/powershell/module/azuread/get-azureadserviceprincipal).

2. In the same PowerShell window, connect to [Exchange Online PowerShell](connect-to-exchange-online-powershell.md) or [Security & Compliance PowerShell](connect-to-scc-powershell.md) and run the following commands to:
   - Create a service principal object for the Azure application.
   - Store the details of the service principal in a variable.

   ```powershell
   New-ServicePrincipal -AppId $<VariableName1>.AppId -ServiceId $<VariableName1>.ObjectId -DisplayName "<Descriptive Name>"

   $<VariableName2> = Get-ServicePrincipal -Identity "<Descriptive Name>"
   ```

   For example:

   ```powershell
   New-ServicePrincipal -AppId $AADApp.AppId -ServiceId $AADApp.ObjectId -DisplayName "SP for Azure App ExO PowerShell CBA"

   $SP = Get-ServicePrincipal -Identity "SP for Azure App ExO PowerShell CBA"
   ```

   For detailed syntax and parameter information, see [New-ServicePrincipal](/powershell/module/exchange/new-serviceprincipal).

3. In Exchange Online PowerShell or Security & Compliance PowerShell, run the following command to add the service principal as a member of the custom role group:

   ```powershell
   Add-RoleGroupMember -Identity "<CustomRoleGroupName>" -Member <$<VariableName2>.Identity | $<VariableName2>.ServiceId | $<VariableName2>.Id>
   ```

   For example:

   ```powershell
   Add-RoleGroupMember -Identity "Contoso View-Only Recipients" -Member $SP.Identity
   ```

   For detailed syntax and parameter information, see [Add-RoleGroupMember](/powershell/module/exchange/add-rolegroupmember).
