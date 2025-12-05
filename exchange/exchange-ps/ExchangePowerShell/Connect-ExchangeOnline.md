---
applicable: Exchange Online
author: chrisda
external help file: ExchangeOnlineManagement-help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/connect-exchangeonline
schema: 2.0.0
title: Connect-ExchangeOnline
---

# Connect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Connect-ExchangeOnline cmdlet in the Exchange Online PowerShell module to use modern authentication to connect to Exchange Online PowerShell or Exchange Online Protection PowerShell for cloud protection of on-premises email environments. This cmdlet works for accounts with or without multi-factor authentication (MFA).

To connect to Security & Compliance PowerShell, use the [Connect-IPPSSession](https://learn.microsoft.com/powershell/module/exchangepowershell/connect-ippssession) cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Connect-ExchangeOnline
 [[-ConnectionUri] <String>]
 [[-AzureADAuthorizationEndpointUri] <String>]
 [[-ExchangeEnvironmentName] <ExchangeEnvironment>]
 [[-PSSessionOption] <PSSessionOption>]
 [[-DelegatedOrganization] <String>]
 [[-Prefix] <String>]
 [[-CommandName] <String[]>]
 [[-FormatTypeName] <String[]>]
 [-AccessToken <String>]
 [-AppId <String>]
 [-BypassMailboxAnchoring]
 [-Certificate <X509Certificate2>]
 [-CertificateFilePath <String>]
 [-CertificatePassword <SecureString>]
 [-CertificateThumbprint <String>]
 [-Credential <PSCredential>]
 [-Device]
 [-DisableWAM]
 [-EnableErrorReporting]
 [-EXOModuleBasePath <String>]
 [-InlineCredential]
 [-LoadCmdletHelp]
 [-LogDirectoryPath <String>]
 [-LogLevel <LogLevel>]
 [-ManagedIdentity]
 [-ManagedIdentityAccountId <String>]
 [-Organization <String>]
 [-PageSize <UInt32>]
 [-ShowBanner]
 [-ShowProgress <Boolean>]
 [-SigningCertificate <X509Certificate2>]
 [-SkipLoadingCmdletHelp]
 [-SkipLoadingFormatData]
 [-TrackPerformance <Boolean>]
 [-UseMultithreading <Boolean>]
 [-UserPrincipalName <String>]
 [-UseRPSSession]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a PowerShell connection to your Exchange Online organization.

Connect commands will likely fail if the profile path of the account that you used to connect contains special PowerShell characters (for example, `$`). The workaround is to connect using a different account that doesn't have special characters in the profile path.

## EXAMPLES

### Example 1
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com
```

This example connects to Exchange Online PowerShell using modern authentication, with or without multi-factor authentication (MFA). The connection uses REST API mode and doesn't require Basic authentication to be enabled in WinRM on the local computer.

### Example 2
```powershell
Connect-ExchangeOnline -AppId <%App_id%> -CertificateThumbprint <%Thumbprint string of certificate%> -Organization "contoso.onmicrosoft.com"
```

This example connects to Exchange Online PowerShell in an unattended scripting scenario using a certificate thumbprint.

### Example 3
```powershell
Connect-ExchangeOnline -AppId <%App_id%> -Certificate <%X509Certificate2 object%> -Organization "contoso.onmicrosoft.com"
```

This example connects to Exchange Online PowerShell in an unattended scripting scenario using a certificate file. This method is best suited for scenarios where the certificate is stored in remote machines and fetched at runtime. For example, the certificate is stored in the Azure Key Vault.

### Example 4
```powershell
Connect-ExchangeOnline -Device
```

In PowerShell 7.0.3 or later using version 2.0.4 or later of the module, this example connects to Exchange Online PowerShell in interactive scripting scenarios on computers that don't have web browsers.

The command returns a URL and unique code that's tied to the session. You need to open the URL in a browser on any computer, and then enter the unique code. After you complete the login in the web browser, the session in the Powershell 7 window is authenticated via the regular Microsoft Entra authentication flow, and the Exchange Online cmdlets are imported after few seconds.

### Example 6
```powershell
Connect-ExchangeOnline -InlineCredential
```

In PowerShell 7.0.3 or later using version 2.0.4 or later of the module, this example connects to Exchange Online PowerShell in interactive scripting scenarios by passing credentials directly in the PowerShell window.

## PARAMETERS

### -ConnectionUri

> Applicable: Exchange Online

**Note**: If you use the ExchangeEnvironmentName parameter, you don't need to use the AzureADAuthorizationEndpointUri or ConnectionUri parameters.

The ConnectionUri parameter specifies the connection endpoint for the PowerShell session. The following Exchange Online PowerShell environments and related values are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://outlook.office365.com/powershell-liveid/`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `https://outlook.office.de/PowerShell-LiveID`
- Office 365 operated by 21Vianet: `https://partner.outlook.cn/PowerShell`
- Microsoft 365 GCC High: `https://outlook.office365.us/powershell-liveID`
- Microsoft 365 DoD: `https://webmail.apps.mil/powershell-liveID`

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureADAuthorizationEndpointUri

> Applicable: Exchange Online

**Note**: If you use the ExchangeEnvironmentName parameter, you don't need to use the AzureADAuthorizationEndpointUri or ConnectionUri parameters.

The AzureADAuthorizationEndpointUri parameter specifies the Microsoft Entra Authorization endpoint that can issue OAuth2 access tokens. The following Exchange Online PowerShell environments and related values are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://login.microsoftonline.com/organizations` or `https://login.microsoftonline.com/common`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `https://login.microsoftonline.de/organizations` or `https://login.microsoftonline.de/common`
- Microsoft 365 GCC High or Microsoft 365 DoD: `https://login.microsoftonline.us/organizations` or `https://login.microsoftonline.us/common`

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

If you use the URI value ending in `/organizations`, only work or school accounts are allowed. Users aren't prompted to choose between personal accounts and work or school accounts. We recommend the `/organizations` URI value in enterprise scenarios where consumer accounts should be excluded.

**Note**: MFA authentication or federated authentication isn't available in Office 365 operated by 21Vianet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeEnvironmentName

> Applicable: Exchange Online

The ExchangeEnvironmentName specifies the Exchange Online environment and eliminates the need to use the AzureADAuthorizationEndpointUri and ConnectionUri parameters. The following Exchange Online PowerShell environments are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `O365Default`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `O365GermanyCloud`
- Office 365 operated by 21Vianet: `O365China`
- Microsoft 365 GCC High: `O365USGovGCCHigh`
- Microsoft 365 DoD: `O365USGovDoD`

```yaml
Type: ExchangeEnvironment
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: O365Default
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSSessionOption

> Applicable: Exchange Online

**Note**: This parameter doesn't work in REST API connections.

The PSSessionOption parameter specifies the PowerShell session options to use in your connection to Exchange Online. This parameter works only if you also use the UseRPSSession switch in the same command.

Store the output of the [New-PSSessionOption](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable (for example, `$PSOptions = New-PSSessionOption <Settings>`), and use the variable name as the value for this parameter (for example, `$PSOptions`).

```yaml
Type: PSSessionOption
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegatedOrganization

> Applicable: Exchange Online

The DelegatedOrganization parameter specifies the customer organization that you want to manage. A valid value for this parameter is the primary .onmicrosoft.com domain or tenant ID of the customer organization.

This parameter works only if the customer organization has agreed to your delegated management via the CSP program.

After you successfully authenticate, the cmdlets in this session are mapped to the customer organization, and all operations in this session are done on the customer organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prefix

> Applicable: Exchange Online

The Prefix parameter specifies a text value to add to the names of Exchange Online PowerShell cmdlets when you connect. For example, Get-InboundConnector becomes Get-ContosoInboundConnector when you use the value Contoso for this parameter.

- The Prefix value can't contain spaces or special characters like underscores or asterisks.
- You can't use the Prefix value EXO. That value is reserved for the nine exclusive **Get-EXO\*** cmdlets that are built into the module.
- The Prefix parameter affects only imported Exchange Online cmdlet names. It doesn't affect the names of cmdlets that are built into the module (for example, Disconnect-ExchangeOnline).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommandName

> Applicable: Exchange Online

The CommandName parameter specifies the comma separated list of commands to import into the session. Use this parameter for applications or scripts that use a specific set of cmdlets. Reducing the number of cmdlets in the session helps improve performance and reduces the memory footprint of the application or script.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormatTypeName

> Applicable: Exchange Online

The FormatTypeName parameter specifies the output format of the cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessToken

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.1.0-Preview1 or later.

The AccessToken parameter specifies the OAuth JSON Web Token (JWT) that's used to connect to Exchange Online.

Depending on the type of access token, you need to use this parameter with the Organization, DelegatedOrganization, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppId

> Applicable: Exchange Online

The AppId parameter specifies the application ID of the service principal that's used in certificate based authentication (CBA). A valid value is the GUID of the application ID (service principal). For example, `36ee4c6c-0812-40a2-b820-b22ebd02bce3`.

For more information, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassMailboxAnchoring

> Applicable: Exchange Online

The BypassMailboxAnchoring switch bypasses the use of the mailbox anchoring hint. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Certificate

> Applicable: Exchange Online

The Certificate parameter specifies the certificate that's used for certificate-based authentication (CBA). A valid value is the X509Certificate2 object value of the certificate.

Don't use this parameter with the CertificateFilePath or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateFilePath

> Applicable: Exchange Online

The CertificateFilePath parameter specifies the certificate that's used for CBA. A valid value is the complete public path to the certificate file. Use the CertificatePassword parameter with this parameter.

Don't use this parameter with the Certificate or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificatePassword

> Applicable: Exchange Online

The CertificatePassword parameter specifies the password that's required to open the certificate file when you use the CertificateFilePath parameter to identify the certificate that's used for CBA.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

**Note**: Using a **ConvertTo-SecureString** command to store the password of the certificate locally defeats the purpose of a secure connection method for automation scenarios. Using a **Get-Credential** command to prompt you for the password of the certificate securely isn't ideal for automation scenarios. In other words, there's really no automated _and_ secure way to connect using a local certificate.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint

> Applicable: Exchange Online

The CertificateThumbprint parameter specifies the certificate that's used for CBA. A valid value is the thumbprint value of the certificate. For example, `83213AEAC56D61C97AEE5C1528F4AC5EBA7321C1`.

Don't use this parameter with the Certificate or CertificateFilePath parameters.

**Note**: The CertificateThumbprint parameter is supported only in Microsoft Windows.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential

> Applicable: Exchange Online

The Credential parameter specifies the username and password that's used to connect to Exchange Online PowerShell. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. Don't use this parameter for accounts that use multi-factor authentication (MFA).

Before you run the Connect-ExchangeOnline command, store the username and password in a variable (for example, `$UserCredential = Get-Credential`). Then, use the variable name (`$UserCredential`) for this parameter.

After the Connect-ExchangeOnline command is complete, the password key in the variable is emptied.

To specify the password for a certificate file, don't use this parameter; use the CertificatePassword parameter instead.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Device

> Applicable: Exchange Online

**Note**: This parameter is available in module version 2.0.4-Preview6 or later, and only in PowerShell 7.

The Device switch is typically used on computers without web browsers. You don't need to specify a value with this switch.

Using this switch results in an on-screen message that contains the URL <https://microsoft.com/devicelogin> and a unique code. On any other device with a web browser and internet access, open the URL, enter the unique code, and enter your credentials in the subsequent pages.

If your login was successful, the PowerShell connection continues.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableWAM

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.7.2-Preview1 or later.

The DisableWAM switch disables Web Account Manager (WAM). You don't need to specify a value with this switch.

Starting in version 3.7.0, WAM is enabled by default when connecting to Exchange Online. If you encounter WAM-related issues during sign in, you can use this switch to disable WAM.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableErrorReporting

> Applicable: Exchange Online

The EnableErrorReporting switch specifies whether to enable error reporting. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EXOModuleBasePath

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.9.1-Preview1 or later.

The EXOModuleBasePath parameter specifies the folder where the local temporary copy of the Exchange Online PowerShell module is stored. If the value contains spaces, enclose the value in quotation marks (").

Connect-ExchangeOnline commands store a temporary copy of the Exchange Online module locally on the client for session connectivity. By default, the temporary copy of the module is stored in the %TMP% folder (by default, `C:\Users\<UserName>\AppData\Local\Temp`).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InlineCredential

> Applicable: Exchange Online

**Note**: This parameter is available in module version 2.0.4-Preview6 or later, and only in PowerShell 7.

The InlineCredential switch specifies whether to pass credentials directly in the Windows PowerShell window. You don't need to specify a value with this switch.

This switch is similar to the Credential parameter, but with added security. The InlineCredential switch doesn't require you to store the credentials locally in the script, and you can enter credentials directly in an interactive PowerShell session.

This switch does not work with accounts that use MFA.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoadCmdletHelp

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.7.0-Preview1 or later.

The LoadCmdletHelp switch downloads cmdlet help files for the Get-Help cmdlet in REST API connections. You don't need to specify a value with this switch.

Starting in v3.7.0-Preview1, help files for the command line aren't downloaded by default. Use this switch to download the files for cmdlet help at the command line.

**Tip**: This parameter replaces the SkipLoadingCmdletHelp parameter. The SkipLoadingCmdletHelp parameter is no longer required and no longer works, because cmdlet help files are no longer downloaded by default.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogDirectoryPath

> Applicable: Exchange Online

The LogDirectoryPath parameter specifies the location of the log files. The default location is `%TMP%\EXOCmdletTelemetry\EXOCmdletTelemetry-yyyymmdd-hhmmss.csv`.

If you specify a custom location and filename that contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel

> Applicable: Exchange Online

The LogLevel parameter specifies the logging level. Valid values are Default and All.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedIdentity

> Applicable: Exchange Online

The ManagedIdentity switch specifies that you're using managed identity to connect. You don't need to specify a value with this switch.

Managed identity connections are currently supported for the following types of Azure resources:

- Azure Automation runbooks
- Azure Virtual Machines
- Azure Virtual Machine Scale Sets
- Azure Functions

You must use this switch with the Organization parameter.

For user-assigned managed identity, you must also use this switch with the ManagedIdentityAccountId parameter.

For more information about connecting with managed identity, see [Use Azure managed identities to connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-exo-powershell-managed-identity).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedIdentityAccountId

> Applicable: Exchange Online

The ManagedIdentityAccountId parameter specifies the user-assigned managed identity that you're using to connect. A valid value for this parameter is the application ID (GUID) of the service principal that corresponds to the user-assigned managed identity in Azure.

You must use this parameter with the Organization parameter and the ManagedIdentity switch.

For more information about connecting with managed identity, see [Use Azure managed identities to connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-exo-powershell-managed-identity).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Online

The Organization parameter specifies the organization when you connect using CBA or managed identity. A valid value for this parameter is the primary .onmicrosoft.com domain or tenant ID of the organization.

For more information about connecting with CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

For more information about connecting with managed identity, see [Use Azure managed identities to connect to Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-exo-powershell-managed-identity).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 1000. The default value is 1000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowBanner

> Applicable: Exchange Online

The ShowBanner switch shows or hides the banner message that's displayed when you run Connect-ExchangeOnline. You don't need to specify a value with this switch.

- To show the banner, you don't need to use this switch (the banner is displayed by default).
- To hide the banner, use this exact syntax: `-ShowBanner:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowProgress

> Applicable: Exchange Online

The ShowProgress parameter specifies whether to show or hide the progress bar of imported cmdlets when you connect. Valid values are:

- $true: The progress bar is displayed. This value is the default.
- $false: Currently, this value has no effect.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SigningCertificate

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.2.0-Preview4 or later.

The SigningCertificate parameter specifies the client certificate that's used to sign the format files (\*.Format.ps1xml) or script module files (.psm1) in the temporary module that Connect-ExchangeOnline creates.

A valid value for this parameter is a variable that contains the certificate, or a command or expression that gets the certificate.

To find the certificate, use the Get-PfxCertificate cmdlet in the Microsoft.PowerShell.Security module or use the Get-ChildItem cmdlet in the certificate (Cert:) drive. If the certificate isn't valid or doesn't have sufficient authority, the command will fail.

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipLoadingCmdletHelp

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.3.0-Preview1 or later.

In version 3.7.0-Preview1 or later, this parameter is replaced by the LoadCmdletHelp parameter. The SkipLoadingCmdletHelp parameter is no longer required and no longer does anything, because cmdlet help files are no longer downloaded by default.

The SkipLoadingCmdletHelp switch prevents downloading the cmdlet help files for the Get-Help cmdlet in REST API connections. You don't need to specify a value with this switch.

When you use this switch, you don't get local help files for any cmdlet at the command line.

This switch doesn't work with the UseRPSSession switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipLoadingFormatData

> Applicable: Exchange Online

The SkipLoadingFormatData switch prevents downloading the format data for REST API connections. You don't need to specify a value with this switch.

When you use this switch, the output of any Exchange cmdlet is unformatted.

Use this switch to avoid errors when connecting to Exchange Online PowerShell from within a Windows service or the Windows PowerShell SDK.

This switch doesn't work with the UseRPSSession switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrackPerformance

> Applicable: Exchange Online

The TrackPerformance parameter measures additional events (for example, CPU load and memory consumed). Valid values are:

- $true: Performance tracking is enabled.
- $false: Performance tracking is disabled. This value is the default.

This parameter works only when logging is enabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMultithreading

> Applicable: Exchange Online

The UseMultithreading parameter specifies whether to disable or enable multi-threading in the Exchange Online PowerShell module. Valid values are:

- $true: Enable multi-threading. This value is the default.
- $false: Disable multi-threading. This value degrades the performance of the nine exclusive **Get-EXO\*** cmdlets in the module.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter specifies the account that you want to use to connect (for example, `navin@contoso.onmicrosoft.com`). Using this parameter allows you to skip entering a username in the modern authentication credentials prompt (you're prompted to enter a password).

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseRPSSession

> Applicable: Exchange Online

**Note**: Remote PowerShell connections to Exchange Online PowerShell are deprecated. For more information, see [Deprecation of Remote PowerShell in Exchange Online](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692).

The UseRPSSession switch allows you to connect to Exchange Online PowerShell using traditional remote PowerShell access to all cmdlets. You don't need to specify a value with this switch.

If you don't use this switch, REST API mode is used for the connection, so Basic authentication in WinRM isn't required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
