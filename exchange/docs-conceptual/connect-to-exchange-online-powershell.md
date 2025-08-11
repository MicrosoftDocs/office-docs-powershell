---
title: Connect to Exchange Online PowerShell
author: chrisda
manager: orspodek
ms.date: 07/11/2025
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
description: "Learn how to use the Exchange Online PowerShell V3 module to connect to Exchange Online PowerShell with modern authentication and/or multifactor authentication (MFA)."
---

# Connect to Exchange Online PowerShell

This article contains instructions for how to connect to Exchange Online PowerShell using the Exchange Online PowerShell module with or without multifactor authentication (MFA).

> [!TIP]
> The connection instructions in this article also apply to Exchange Online Protection PowerShell for cloud protection of on-premises email environments without cloud mailboxes.

The Exchange Online PowerShell module uses modern authentication for connecting to Exchange Online PowerShell and Security & Compliance PowerShell. For more information about the Exchange Online PowerShell module, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

To connect to Exchange Online PowerShell for automation, see [App-only authentication for unattended scripts](app-only-auth-powershell-v2.md) and [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).

To connect to Exchange Online PowerShell from C#, see [Use C# to connect to Exchange Online PowerShell](connect-to-exo-powershell-c-sharp.md).

## What do you need to know before you begin?

- The requirements for installing and using the module are described in [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

- REST API connections in the Exchange Online PowerShell V3 module require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).

- After you connect, role-based access control (RBAC) controls the cmdlets and parameters that you have or don't have access to. For more information, see [Permissions in Exchange Online](/exchange/permissions-exo/permissions-exo).

  To find the permissions that are required to run specific Exchange Online cmdlets, see [Find the permissions required to run any Exchange cmdlet](find-exchange-cmdlet-permissions.md).

## Step 1: Load the Exchange Online PowerShell module

> [!NOTE]
> If the module is already installed, you can typically skip this step and run **Connect-ExchangeOnline** without manually loading the module first.

After you [install the module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module), open a PowerShell window and load the module by running the following command:

```powershell
Import-Module ExchangeOnlineManagement
```

## Step 2: Connect and authenticate

> [!NOTE]
> Connect commands likely fail if the profile path of the account that you used to connect contains special PowerShell characters (for example, `$`). The workaround is to connect using a different account that doesn't have special characters in the profile path.

The command that you need to run uses the following syntax:

```powershell
Connect-ExchangeOnline [-UserPrincipalName <UPN>] [-ExchangeEnvironmentName <Value>] [-ShowBanner:$false] [-LoadCmdletHelp] [-DelegatedOrganization <String>] [-SkipLoadingFormatData] [-DisableWAM]
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](/powershell/module/exchangepowershell/connect-exchangeonline).

- _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.onmicrosoft.com`).

- When you use the _ExchangeEnvironmentName_ parameter, you don't need use the _ConnectionUri_ or _AzureADAuthorizationEndPointUrl_ parameters. Common values for the _ExchangeEnvironmentName_ parameter are described in the following table:

  |Environment|Value|
  |---|---|
  |Microsoft 365 or Microsoft 365 GCC|n/a<sup>\*</sup>|
  |Microsoft 365 GCC High|`O365USGovGCCHigh`|
  |Microsoft 365 DoD|`O365USGovDoD`|
  |Office 365 Germany|`O365GermanyCloud`|
  |Office 365 operated by 21Vianet|`O365China`|

  <sup>\*</sup> The required value `O365Default` is also the default value, so you don't need to use the _ExchangeEnvironmentName_ parameter in Microsoft 365 or Microsoft 365 GCC environments.

- In version 3.7.0 or later, command line help for Exchange Online PowerShell cmdlets is no longer loaded by default. Use the _LoadCmdletHelp_ switch so help for Exchange Online PowerShell cmdlets is available to the **Get-Help** cmdlet.

- The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage as an authorized Microsoft Partner. For more information, see the [connection examples later in this article](#connect-to-exchange-online-powershell-in-customer-organizations).

- Depending on the nature of your organization, you might be able to omit the _UserPrincipalName_ parameter in the connection command. Instead, you enter the username and password or select stored credentials after you run the **Connect-ExchangeOnline** command. If it doesn't work, then you need to use the _UserPrincipalName_ parameter.

- If you aren't using MFA, you should be able to use the _Credential_ parameter instead of the _UserPrincipalName_ parameter. First, run the command `$Credential = Get-Credential`, enter your username and password, and then use the variable name for the _Credential_ parameter (`-Credential $Credential`). If it doesn't work, then you need to use the _UserPrincipalName_ parameter.

- Use the _SkipLoadingFormatData_ switch to avoid errors when connecting to Exchange Online PowerShell from within a Windows service.

- PowerShell 7 requires version 2.0.4 or later.

- In version 3.7.2 or later, the _DisableWAM_ switch is available to disable Web Account Manager (WAM) if you get WAM-related connection errors.

The connection examples in the following sections use modern authentication, and are incapable of using Basic authentication.

### Connect to Exchange Online PowerShell with an interactive sign in prompt

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

2. In the sign-in window that opens, enter your password, and then select **Sign in**.

   ![Enter your password in the Sign in to your account window.](media/connect-exo-password-prompt.png)

   > [!NOTE]
   > In PowerShell 7, browser-based single sign-on (SSO) is used by default, so the sign-in prompt opens in your default web browser instead of a standalone dialog.

3. **MFA only**: A verification code is generated and delivered based on the response option configured for your account (for example, a text message or the Microsoft Authenticator app on your device).

   In the verification window that opens, enter the verification code, and then select **Verify**.

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

  4. In the confirmation prompt, select **Continue**. The next message should indicate success, and you can close the browser or tab.

  5. The command from step 1 continues to connect you to Exchange Online PowerShell.

### Connect to Exchange Online PowerShell without a sign in prompt (unattended scripts)

For complete instructions, see [App-only authentication for unattended scripts in Exchange Online PowerShell and Security & Compliance PowerShell](app-only-auth-powershell-v2.md).

### Connect to Exchange Online PowerShell in customer organizations

For more information about partners and customer organizations, see the following articles:

- [What is the Cloud Solution Provider (CSP) program?](/partner-center/csp-overview).
- [Introduction to granular delegated admin privileges (GDAP)](/partner-center/gdap-introduction)

This example connects to customer organizations in the following scenarios:

- Connect to a customer organization using a CSP account.
- Connect to a customer organization using a GDAP.
- Connect to a customer organization as a guest.

  ```powershell
  Connect-ExchangeOnline -UserPrincipalName navin@contoso.onmicrosoft.com -DelegatedOrganization adatum.onmicrosoft.com
  ```

### Connect to Exchange Online PowerShell using managed identity

For more information, see [Use Azure managed identities to connect to Exchange Online PowerShell](connect-exo-powershell-managed-identity.md).

- System-assigned managed identity:

  ```powershell
  Connect-ExchangeOnline -ManagedIdentity -Organization "cohovinyard.onmicrosoft.com"
  ```

- User-assigned assigned managed identity:

  ```powershell
  Connect-ExchangeOnline -ManagedIdentity -Organization "constoso.onmicrosoft.com" -ManagedIdentityAccountId <ManagedIdentityAccountIdGuid>
  ```

## Step 3: Disconnect when you're finished

Be sure to disconnect the session when you're finished. If you close the PowerShell window without disconnecting the session, you could use up all the sessions available to you, and you need to wait for the sessions to expire. To disconnect the session, run the following command:

```powershell
Disconnect-ExchangeOnline
```

To silently disconnect without a confirmation prompt, run the following command:

```powershell
Disconnect-ExchangeOnline -Confirm:$false
```

> [!NOTE]
> The disconnect command likely fails if the profile path of the account that you used to connect contains special PowerShell characters (for example, `$`). The workaround is to connect using a different account that doesn't have special characters in the profile path.

## How do you know you connected successfully?

If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online PowerShell cmdlet, for example, **Get-AcceptedDomain**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the connection steps again and pay close attention to the username and password that you use.

- The account that you use to connect to must be enabled for PowerShell access. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- If your organization uses federated authentication, and your identity provider (IDP) and/or security token service (STS) isn't publicly available, you can't use a federated account to connect to Exchange Online PowerShell. Instead, create and use a nonfederated account in Microsoft 365 to connect to Exchange Online PowerShell.

- REST-based connections to Exchange Online PowerShell require the PowerShellGet module. By dependency, the PowerShellGet module requires the PackageManagement module. You get errors if you try to connect without having both modules installed. For example, you might see the following error:

  > The term 'Update-ModuleManifest' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.

  For more information about the PowerShellGet and PackageManagement module requirements, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).

- After you connect, you might receive an error that looks like this:

  > Could not load file or assembly 'System.IdentityModel.Tokens.Jwt,Version=\<Version\>, Culture=neutral, PublicKeyToken=\<TokenValue\>'. Could not find or load a specific file.

  This error happens when the Exchange Online PowerShell module conflicts with another module imported into the runspace. Try connecting in a new Windows PowerShell window before importing other modules.

## Appendix: Comparison of old and new connection methods

This section attempts to compare older connection methods the Exchange Online PowerShell module replaced. The Basic authentication and OAuth token procedures are included for historical reference only and are no longer supported.

### Connect without multifactor authentication

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

### Connect with multifactor authentication

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

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect to a customer organization as a guest

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

  $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/PowerShell-LiveID/?DelegatedOrg=delegated.onmicrosoft.com&BasicAuthToOAuthConversion=true&email=SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@delegated.onmicrosoft.com -Credential $o365cred -Authentication Basic -AllowRedirection

  Import-PSSession $Session
  ```

### Connect to run unattended scripts

- **Exchange Online PowerShell module**:

  - **Certificate thumbprint**:

    > [!NOTE]
    > The CertificateThumbprint parameter is supported only in Microsoft Windows.

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
