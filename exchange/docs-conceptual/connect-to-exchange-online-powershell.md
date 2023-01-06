---
title: Connect to Exchange Online PowerShell
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to use the Exchange Online PowerShell V2 module or V3 module to connect to Exchange Online PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online PowerShell

This article contains instructions for how to connect to Exchange Online PowerShell using the Exchange Online PowerShell module with or without multi-factor authentication (MFA).

The Exchange Online PowerShell module uses modern authentication for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the Exchange Online PowerShell module, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

> [!NOTE]
> Version 2.0.5 and earlier is known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).

To connect to Exchange Online PowerShell for automation, see [App-only authentication for unattended scripts](app-only-auth-powershell-v2.md) and [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).

To connect to Exchange Online PowerShell from C#, see [Use C# to connect to Exchange Online PowerShell](connect-to-exo-powershell-c-sharp.md).

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-deprecation-in-exchange-online-september/ba-p/3609437), see [Basic auth - Connect to Exchange Online PowerShell](basic-auth-connect-to-exo-powershell.md).

To use the older Exchange Online Remote PowerShell Module to connect to Exchange Online PowerShell using MFA, see [V1 module - Connect to Exchange Online PowerShell using MFA](v1-module-mfa-connect-to-exo-powershell.md). This older version of the module will eventually be retired.

## What do you need to know before you begin?

- The requirements for installing and using the module are described in [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

  > [!NOTE]
  > If you're using the EXO V3 module (v3.0.0 or v2.0.6-PreviewX) and you don't use the _UseRPSSession_ switch in the **Connect-ExchangeOnline** command, you'll have access to REST API cmdlets _only_. For more information, see [Updates for version 3.0.0 (the EXO V3 module)](exchange-online-powershell-v2.md#updates-for-version-300-the-exo-v3-module).
  >
  > Remote PowerShell support in Exchange Online PowerShell will be deprecated. For more information, see [Announcing Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell](https://aka.ms/RPSDeprecation).

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in Exchange Online](/exchange/permissions-exo/permissions-exo).

  To find the permissions that are required to run specific Exchange Online cmdlets, see [Find the permissions required to run any Exchange cmdlet](find-exchange-cmdlet-permissions.md).

- If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for Exchange Online Protection (EOP), your EOP PowerShell connection instructions are the same as Exchange Online PowerShell as described in this article.

> [!TIP]
> Having problems? Ask in the [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542) forum.

## Step 1: Load the Exchange Online PowerShell module

> [!NOTE]
> If the module is already installed, you can typically skip this step and run **Connect-ExchangeOnline** without manually loading the module first.

After you've [installed the module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module), open a PowerShell window and load the module by running the following command:

```powershell
Import-Module ExchangeOnlineManagement
```

## Step 2: Connect and authenticate

The command that you need to run uses the following syntax:

```powershell
Connect-ExchangeOnline -UserPrincipalName <UPN> [-UseRPSSession] [-ExchangeEnvironmentName <Value>] [-ShowBanner:$false] [-DelegatedOrganization <String>] [-PSSessionOption $ProxyOptions]
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](/powershell/module/exchange/connect-exchangeonline).

**Notes**:

- _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.onmicrosoft.com`).

- With the EXO V3 module (v3.0.0 or v2.0.6-PreviewX), if you don't use the _UseRPSSession_ switch, you're using REST API cmdlets only. For more information, see [Updates for version 3.0.0 (the EXO V3 module)](exchange-online-powershell-v2.md#updates-for-version-300-the-exo-v3-module).

- When you use the _ExchangeEnvironmentName_ parameter, you don't need use the _ConnectionUri_ or _AzureADAuthorizationEndPointUrl_ parameters. Common values for the _ExchangeEnvironmentName_ parameter are described in the following table:

  |Environment|Value|
  |---|---|
  |Microsoft 365 or Microsoft 365 GCC|n/a<sup>\*</sup>|
  |Microsoft 365 GCC High|`O365USGovGCCHigh`|
  |Microsoft 365 DoD|`O365USGovDoD`|
  |Office 365 Germany|`O365GermanyCloud`|
  |Office 365 operated by 21Vianet|`O365China`|

  <sup>\*</sup> The required value `O365Default` is also the default value, so you don't need to use the _ExchangeEnvironmentName_ parameter in Microsoft 365 or Microsoft 365 GCC environments.

- The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage as an authorized Microsoft Partner. For more information, see the [connection examples later in this article](#connect-to-exchange-online-powershell-in-customer-organizations).

- If you're behind a proxy server, you can use the _PSSessionOption_ parameter in the connection command, but only if you also use the _UseRPSSession_ switch. First, run this command: `$ProxyOptions = New-PSSessionOption -ProxyAccessType <Value>`, where \<Value\> is `IEConfig`, `WinHttpConfig`, or `AutoDetect`. Then, use the value `$ProxyOptions` for the _PSSessionOption_ parameter. For more information, see [New-PSSessionOption](/powershell/module/microsoft.powershell.core/new-pssessionoption).

- Depending on the nature of your organization, you might be able to omit the _UserPrincipalName_ parameter in the connection command. Instead, you enter the username and password or select stored credentials after you run the **Connect-ExchangeOnline** command. If it doesn't work, then you need to use the _UserPrincipalName_ parameter.

- If you aren't using MFA, you should be able to use the _Credential_ parameter instead of the _UserPrincipalName_ parameter. First, run the command `$Credential = Get-Credential`, enter your username and password, and then use the variable name for the _Credential_ parameter (`-Credential $Credential`). If it doesn't work, then you need to use the _UserPrincipalName_ parameter.

- Using the module in PowerShell 7 requires version 2.0.4 or later.

The connection examples in the following sections use modern authentication, and are incapable of using Basic authentication.

### Connect to Exchange Online PowerShell with an interactive login prompt

1. The following examples work in Windows PowerShell 5.1 and PowerShell 7 for accounts with or without MFA:

   - **This example connects to Exchange Online PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

     ```powershell
     Connect-ExchangeOnline -UserPrincipalName navin@contoso.onmicrosoft.com
     ```

   - **This example connects to Exchange Online PowerShell in a Microsoft GCC High organization**:

     ```powershell
     Connect-ExchangeOnline -UserPrincipalName laura@blueyonderairlines.us -ExchangeEnvironmentName O365USGovGCCHigh
     ```

   - **This example connects to Exchange Online PowerShell in a Microsoft 365 DoD organization**:

     ```powershell
     Connect-ExchangeOnline -UserPrincipalName julia@adatum.mil -ExchangeEnvironmentName O365USGovDoD
     ```

   - **This example connects to Exchange Online PowerShell in an Office 365 Germany organization**:

     ```powershell
     Connect-ExchangeOnline -UserPrincipalName lukas@fabrikam.de -ExchangeEnvironmentName O365GermanyCloud
     ```

2. In the sign-in window that opens, enter your password, and then click **Sign in**.

   ![Enter your password in the Sign in to your account window.](media/connect-exo-password-prompt.png)

   > [!NOTE]
   > In PowerShell 7, browser-based single sign-on (SSO) is used by default, so the sign-in prompt opens in your default web browser instead of a standalone dialog.

3. **MFA only**: A verification code is generated and delivered based on the response option that's configured for your account (for example, a text message or the Microsoft Authenticator app on your device).

   In the verification window that opens, enter the verification code, and then click **Verify**.

   ![Enter your verification code in the Sign in to your account window.](media/connect-exo-mfa-verify-prompt.png)

#### PowerShell 7 exclusive connection methods

- In PowerShell 7 for **accounts without MFA**, this example prompts for credentials within the PowerShell window:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName navin@contoso.onmicrosoft.com -InlineCredential
  ```

- In PowerShell 7 for accounts with or without MFA, this example uses another computer to authenticate and complete the connection. Typically, you use this method on computers that don't have web browsers (users are unable to enter their credentials in PowerShell 7):

  1. Run the following command on the computer where you want to connect:

     ```powershell
     Connect-ExchangeOnline -Device
     ```

     The connection command waits at following output:

     > To sign in, use a web browser to open the page <https://microsoft.com/devicelogin> and enter the code \<XXXXXXXXX\> to authenticate.

     Note the \<XXXXXXXXX\> code value.

  2. On any other device with a web browser and internet access, open <https://microsoft.com/devicelogin> and enter the \<XXXXXXXXX\> code value from the previous step.

  3. Enter your credentials on the resulting pages.
  
  4. In the confirmation prompt, click **Continue**. The next message should indicate success, and you can close the browser or tab.

  5. The command from step 1 continues to connect you to Exchange Online PowerShell.

### Connect to Exchange Online PowerShell without a login prompt (unattended scripts)

For complete instructions, see [App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell](app-only-auth-powershell-v2.md).

> [!IMPORTANT]
> The following example also connects without a login prompt, but the credentials are stored locally, so this method is not secure. Consider using this method only for brief testing purposes.

```powershell
$secpasswd = ConvertTo-SecureString -String '<YourPasswordHere>' -AsPlainText -Force 

$o365cred = New-Object System.Management.Automation.PSCredential ("navin@contoso.onmicrosoft.com", $secpasswd) 

Connect-ExchangeOnline -Credential $o365cred
```

### Connect to Exchange Online PowerShell in customer organizations

For more information about partners and customer organizations, see the following topics:

- [What is the Cloud Solution Provider (CSP) program?](/partner-center/csp-overview).
- [Introduction to granular delegated admin privileges (GDAP)](/partner-center/gdap-introduction)

This example connects to customer organizations in the following scenarios:

- Connect to a customer organization using a CSP account.
- Connect to a customer organization using a GDAP.
- Connect to a customer organization as a guest user.

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName navin@contoso.onmicrosoft.com -DelegatedOrganization adatum.onmicrosoft.com
  ```

### Connect to Exchange Online PowerShell using managed identity

Managed identity is currently supported for Azure Virtual Machines, Virtual Machine Scale Sets, and Azure Functions. For more information about managed identity, see [What are managed identities for Azure resources?](/azure/active-directory/managed-identities-azure-resources/overview).

- System-assigned managed identity:

  ```powershell
  Connect-ExchangeOnline -ManagedIdentity -Organization "cohovinyard.onmicrosoft.com"
  ```

- User-assigned assigned managed identity:

  ```powershell
  Connect-ExchangeOnline -ManagedIdentity -Organization "constoso.onmicrosoft.com" -ManagedIdentityAccountId <ManagedIdentityAccountIdGuid>
  ```

## Step 3: Disconnect when you're finished

Be sure to disconnect the session when you're finished. If you close the PowerShell window without disconnecting the session, you could use up all the sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

To silently disconnect without a confirmation prompt, run the following command:

```powershell
Disconnect-ExchangeOnline -Confirm:$false
```

## How do you know you've connected successfully?

If you don't receive any errors, you've connected successfully. A quick test is to run an Exchange Online PowerShell cmdlet, for example, **Get-AcceptedDomain**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the connection steps again and pay close attention to the username and password that you use.

- To help prevent denial-of-service (DoS) attacks, when you connect using the _UseRPSSession_ switch, you're limited to five open connections to Exchange Online PowerShell.

- The account that you use to connect to must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- If your organization uses federated authentication, and your identity provider (IDP) and/or security token service (STS) isn't publicly available, you can't use a federated account to connect to Exchange Online PowerShell. Instead, create and use a non-federated account in Microsoft 365 to connect to Exchange Online PowerShell.

## Appendix: Comparison of old and new connection methods

This section attempts to compare older connection methods that have been replaced by the Exchange Online PowerShell module. The Basic authentication and OAuth token procedures are included for historical reference only and are no longer supported.

### Connect without multi-factor authentication

- **Exchange Online PowerShell module with interactive credential prompt**:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName admin@contoso.onmicrosoft.com
  ```

- **Exchange Online PowerShell module without interactive credential prompt**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  Connect-ExchangeOnline -Credential $o365cred
  ```

- **Basic authentication**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/ -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

- **New-PSSession with OAuth token**:

  ```powershell
  $oauthTokenAsPassword = ConvertTo-SecureString '<EncodedOAuthToken>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $oauthTokenAsPassword)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?BasicAuthToOAuthConversion=true -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect with multi-factor authentication

- **Exchange Online PowerShell module with interactive credential prompt**:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName admin@contoso.onmicrosoft.com
  ```

- **Basic authentication**: Not available.

- **New-PSSession with OAuth token**: Not available.

### Connect to a customer organization with a CSP account

- **Exchange Online PowerShell module**:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName admin@contoso.onmicrosoft.com -DelegatedOrganization delegated.onmicrosoft.com
  ```

- **Basic authentication**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

- **New-PSSession with OAuth token**:

  ```powershell
  $oauthTokenAsPassword = ConvertTo-SecureString '<EncodedOAuthToken>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $oauthTokenAsPassword)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/? DelegatedOrg=delegated.onmicrosoft.com&BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect to a customer organization using GDAP

- **Exchange Online PowerShell module**:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName admin@contoso.onmicrosoft.com -DelegatedOrganization delegated.onmicrosoft.com
  ```

- **Basic authentication**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

- **New-PSSession with OAuth token**:

  ```powershell
  $oauthTokenAsPassword = ConvertTo-SecureString '<EncodedOAuthToken>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $oauthTokenAsPassword)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/? DelegatedOrg=delegated.onmicrosoft.com&BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect to a customer organization as a guest user

- **Exchange Online PowerShell module**:

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName admin@contoso.onmicrosoft.com -DelegatedOrganization delegated.onmicrosoft.com
  ```

- **Basic authentication**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

- **New-PSSession with OAuth token**:

  ```powershell
  $oauthTokenAsPassword = ConvertTo-SecureString "<EncodedOAuthToken>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $oauthTokenAsPassword)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect to run unattended scripts

- **Exchange Online PowerShell module**:

  - **Certificate thumbprint**:

    ```powershell
    Connect-ExchangeOnline -CertificateThumbPrint "012THISISADEMOTHUMBPRINT" -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contoso.onmicrosoft.com"
    ```

  - **Certificate object**:

    ```powershell
    Connect-ExchangeOnline -Certificate <%X509Certificate2Object%> -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contoso.onmicrosoft.com"
    ```

  - **Certificate file**:

    ```powershell
    Connect-ExchangeOnline -CertificateFilePath "C:\Users\navin\Desktop\automation-cert.pfx" -CertificatePassword (ConvertTo-SecureString -String "<Password>" -AsPlainText -Force) -AppID "36ee4c6c-0812-40a2-b820-b22ebd02bce3" -Organization "contoso.onmicrosoft.com"
    ```

  For more information, see [App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell](app-only-auth-powershell-v2.md).

- **Basic authentication**:

  ```powershell
  $secpasswd = ConvertTo-SecureString '<Password>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $secpasswd)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/ -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

- **New-PSSession with OAuth token**:

  ```powershell
  $oauthTokenAsPassword = ConvertTo-SecureString '<EncodedOAuthToken>' -AsPlainText -Force

  $o365cred = New-Object System.Management.Automation.PSCredential ("admin@contoso.onmicrosoft.com", $oauthTokenAsPassword)

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@contoso.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect using managed identity

- **Exchange Online PowerShell module**:

  - **System-assigned managed identity**:

    ```powershell
    Connect-ExchangeOnline -ManagedIdentity -Organization "contoso.onmicrosoft.com"
    ```

  - **User-assigned managed identity**:

    ```powershell
    Connect-ExchangeOnline -ManagedIdentity -Organization "contoso.onmicrosoft.com" -ManagedIdentityAccountId <UserAssignedManagedIdentityPrincipalIdValue>
    ```

  For more information, see [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).

- **Basic authentication**: Not available.

- **New-PSSession with OAuth token**: Not available.
