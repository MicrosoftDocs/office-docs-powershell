---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline
applicable: Exchange Online
title: Connect-ExchangeOnline
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Connect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Connect-ExchangeOnline cmdlet in the Exchange Online PowerShell module to connect to Exchange Online PowerShell using modern authentication. This cmdlet works for MFA or non-MFA enabled accounts.

To connect to other PowerShell environments (for example, Security & Compliance PowerShell or standalone Exchange Online Protection PowerShell), use the [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession) cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
 [-AppId <String>]
 [-BypassMailboxAnchoring]
 [-Certificate <X509Certificate2>]
 [-CertificateFilePath <String>]
 [-CertificatePassword <SecureString>]
 [-CertificateThumbprint <String>]
 [-Credential <PSCredential>]
 [-Device]
 [-EnableErrorReporting]
 [-InlineCredential]
 [-LogDirectoryPath <String>]
 [-LogLevel <LogLevel>]
 [-ManagedIdentity]
 [-ManagedIdentityAccountId <String>]
 [-Organization <String>]
 [-PageSize <UInt32>]
 [-ShowBanner]
 [-ShowProgress <Boolean>]
 [-SkipLoadingFormatData]
 [-TrackPerformance <Boolean>]
 [-UseMultithreading <Boolean>]
 [-UserPrincipalName <String>]
 [-UseRPSSession]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a PowerShell connection to your Exchange Online organization. You can use this cmdlet to authenticate for REST API-backed cmdlets in the Exchange Online PowerShell V3 module and also for all existing Exchange Online PowerShell cmdlets (remote PowerShell cmdlets).

## EXAMPLES

### Example 1
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com
```

This example connects to Exchange Online PowerShell using modern authentication, with or without multi-factor authentication (MFA). We aren't using the UseRPSSession parameter, so the connection uses REST and doesn't require Basic authentication to be enabled in WinRM on the local computer.

### Example 2
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com -UseRPSSession
```

This example connects to Exchange Online PowerShell using modern authentication, with or without MFA. We're using the UseRPSSession parameter, so the connection requires Basic authentication to be enabled in WinRM on the local computer.

### Example 3
```powershell
Connect-ExchangeOnline -AppId <%App_id%> -CertificateFilePath "C:\users\navin\Documents\TestCert.pfx" -Organization "contoso.onmicrosoft.com"
```

This example connects to Exchange Online PowerShell in an unattended scripting scenario using the public key of a certificate.

### Example 4
```powershell
Connect-ExchangeOnline -AppId <%App_id%> -CertificateThumbprint <%Thumbprint string of certificate%> -Organization "contoso.onmicrosoft.com"
```

This example connects to Exchange Online PowerShell in an unattended scripting scenario using a certificate thumbprint.

### Example 5
```powershell
Connect-ExchangeOnline -AppId <%App_id%> -Certificate <%X509Certificate2 object%> -Organization "contoso.onmicrosoft.com"
```

This example connects to Exchange Online PowerShell in an unattended scripting scenario using a certificate file. This method is best suited for scenarios where the certificate is stored in remote machines and fetched at runtime. For example, the certificate is stored in the Azure Key Vault.

### Example 6
```powershell
Connect-ExchangeOnline -Device
```

In PowerShell 7.0.3 or later using version 2.0.4 or later of the module, this example connects to Exchange Online PowerShell in interactive scripting scenarios on computers that don't have web browsers.

The command returns a URL and unique code that's tied to the session. You need to open the URL in a browser on any computer, and then enter the unique code. After you complete the login in the web browser, the session in the Powershell 7 window is authenticated via the regular Azure AD authentication flow, and the Exchange Online cmdlets are imported after few seconds.

### Example 7
```powershell
Connect-ExchangeOnline -InlineCredential
```

In PowerShell 7.0.3 or later using version 2.0.4 or later of the module, this example connects to Exchange Online PowerShell in interactive scripting scenarios by passing credentials directly in the PowerShell window.

## PARAMETERS

### -ConnectionUri
**Note**: If you use the ExchangeEnvironmentName parameter, you don't need to use the AzureADAuthorizationEndpointUri or ConnectionUri parameters.

The ConnectionUri parameter specifies the connection endpoint for the remote Exchange Online PowerShell session. The following Exchange Online PowerShell environments and related values are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://outlook.office365.com/powershell-liveid/`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `https://outlook.office.de/PowerShell-LiveID`
- Office 365 operated by 21Vianet: `https://partner.outlook.cn/PowerShell`
- Microsoft 365 GCC High: `https://outlook.office365.us/powershell-liveID`
- Microsoft 365 DoD: `https://webmail.apps.mil/powershell-liveID`

**Note**: If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for Exchange Online Protection, use this cmdlet without the _ConnectionUri_ parameter to connect to EOP PowerShell (the same connection instructions as Exchange Online PowerShell in Microsoft 365 or Microsoft GCC).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureADAuthorizationEndpointUri
**Note**: If you use the ExchangeEnvironmentName parameter, you don't need to use the AzureADAuthorizationEndpointUri or ConnectionUri parameters.

The AzureADAuthorizationEndpointUri parameter specifies the Azure AD Authorization endpoint that can issue OAuth2 access tokens. The following Exchange Online PowerShell environments and related values are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://login.microsoftonline.com/common`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `https://login.microsoftonline.de/common`
- Microsoft 365 GCC High or Microsoft 365 DoD: `https://login.microsoftonline.us/common`

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

**Note**: MFA authentication or federated authentication isn't available in Office 365 operated by 21Vianet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeEnvironmentName
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
Applicable: Exchange Online

Required: False
Position: 2
Default value: O365Default
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSSessionOption
The PSSessionOption parameter specifies the PowerShell session options to use in your connection to Exchange Online. You store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable, for example:

`$Options = New-PSSessionOption <Settings>`

And you use the variable name as the value for this parameter (for example, `$Options`).

```yaml
Type: PSSessionOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegatedOrganization
The DelegatedOrganization parameter specifies the customer organization that you want to manage (for example, contosoelectronics.onmicrosoft.com). This parameter only works if the customer organization has agreed to your delegated management via the CSP program.

After you successfully authenticate, the cmdlets in this session are mapped to the customer organization, and all operations in this session are done on the customer organization.

**Note**: Use an .onmicrosoft.com domain for the parameter value. Not doing so might result in permission-related issues when you run commands in the app context. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prefix
The Prefix parameter specifies a text value to add to the beginning of remote PowerShell cmdlet names when you connect.

- You can't use spaces or special characters like underscores or asterisks.
- You can't use the value EXO. This value is reserved for the nine special **Get-EXO\*** cmdlets in the module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommandName
The CommandName parameter specifies the comma separated list of commands to import into the session. Use this parameter for applications or scripts that use a specific set of cmdlets. Reducing the number of cmdlets in the session helps improve performance and reduces the memory footprint of the application or script.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormatTypeName
The FormatTypeName parameter specifies the output format of the cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppId
The AppId parameter specifies the application ID of the service principal that's used in certificate based authentication (CBA). A valid value is the GUID of the application ID (service principal). For example, `36ee4c6c-0812-40a2-b820-b22ebd02bce3`.

For more information, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassMailboxAnchoring
The BypassMailboxAnchoring switch bypasses the use of the mailbox anchoring hint. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Certificate
The Certificate parameter specifies the certificate that's used for certificate-based authentication (CBA). A valid value is the X509Certificate2 object value of the certificate.

Don't use this parameter with the CertificateFilePath or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateFilePath
The CertificateFilePath parameter specifies the certificate that's used for CBA. A valid value is the complete public path to the certificate file.

Don't use this parameter with the Certificate or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificatePassword
The CertificatePassword parameter specifies the password that's required to open the certificate file when you use the CertificateFilePath parameter to identify the certificate that's used for CBA.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
The CertificateThumbprint parameter specifies the certificate that's used for CBA. A valid value is the thumbprint value of the certificate. For example, `83213AEAC56D61C97AEE5C1528F4AC5EBA7321C1`.

Don't use this parameter with the Certificate or CertificateFilePath parameters.

**Note**: The CertificateThumbprint parameter is supported only in Microsoft Windows.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the username and password that's used to connect to Exchange Online PowerShell. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. Don't use this parameter for accounts that use multi-factor authentication (MFA).

Before you run the Connect-ExchangeOnline command, store the username and password in a variable (for example, `$UserCredential = Get-Credential`). Then, use the variable name (`$UserCredential`) for this parameter.

After the Connect-ExchangeOnline command is complete, the password key in the variable is emptied.

To specify the password for a certificate file, don't use this parameter; use the CertificatePassword parameter instead.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Device
**Note**: This parameter is available in version 2.0.4 or later of the module, and only in PowerShell 7.

The Device switch specifies whether to authenticate interactively computers that don't have web browsers to support single sign-on (SSO). You don't need to specify a value with this switch.

The command returns a URL and unique code that's tied to the session. You need to open the URL in a browser on any computer, and then enter the unique code. After you complete the login in the web browser, the session in the Powershell 7 window is authenticated via the regular Azure AD authentication flow, and the Exchange Online cmdlets are imported after few seconds.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableErrorReporting
The EnableErrorReporting switch specifies whether to enable error reporting. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InlineCredential
**Note**: This parameter is available in version 2.0.4 or later of the module, and only in PowerShell 7.

The InlineCredential switch specifies whether to pass credentials directly in the Windows PowerShell window. You don't need to specify a value with this switch.

This switch is similar to the Credential parameter, but with added security. The InlineCredential switch doesn't require you to store the credentials locally in the script, and you can enter credentials directly in an interactive PowerShell session.

This switch does not work with accounts that use MFA.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogDirectoryPath
The LogDirectoryPath parameter specifies the location of the log files. The default location is `%TMP%\EXOCmdletTelemetry\EXOCmdletTelemetry-yyyymmdd-hhmmss.csv`.

If you specify a custom location and filename that contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel
The LogLevel parameter specifies the logging level. Valid values are Default and All.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedIdentity
**Note**: This parameter is available in version 2.0.6-Preview7 or later of the module.

The ManagedIdentity switch connects to Exchange Online using a system-assigned or user-assigned managed identity. You don't need to specify a value with this switch.

Managed identity is currently supported for Azure Virtual Machines, Virtual Machine Scale Sets and Azure Functions.

You must use this switch with the Organization parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedIdentityAccountId
**Note**: This parameter is available in version 2.0.6-Preview7 or later of the module.

The ManagedIdentityAccountId parameter specifies the application ID of the service principal that corresponds to the user-assigned managed identity that's used for authentication.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
The Organization parameter specifies the organization that's used in CBA or with the ManagedIdentity parameter. Be sure to use an .onmicrosoft.com domain for the parameter value. Otherwise, you might encounter cryptic permission issues when you run commands in the app context.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 1000. The default value is 1000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowBanner
The ShowBanner switch shows or hides the banner message that's displayed when you run Connect-ExchangeOnline. You don't need to specify a value with this switch.

- To show the banner, you don't need to use this switch (the banner is displayed by default).
- To hide the banner, use this exact syntax: `-ShowBanner:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowProgress
The ShowProgress parameter specifies whether to show or hide the progress bar of imported cmdlets when you connect. Valid values are:

- $true: The progress bar is displayed. This is the default value.
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

### -SkipLoadingFormatData
**Note**: This parameter is available in version 2.0.6-Preview8 or later of the module.

The SkipLoadingFormatData switch avoids downloading the format data. You don't need to specify a value with this switch.

When you use this switch, the output of any Exchange cmdlet will be unformatted.

This switch does not work with the UseRPSSession switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrackPerformance
The TrackPerformance parameter measures additional events (for example, CPU load and memory consumed). Valid values are:

- $true: Performance tracking is enabled.
- $false: Performance tracking is disabled. This is the default value.

This parameter only when works when logging is enabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMultithreading
The UseMultithreading parameter specifies whether to disable or enable multi-threading in the Exchange Online PowerShell module. Valid values are:

- $true: Enable multi-threading. This is the default value.
- $false: Disable multi-threading. This value will degrade the performance of the nine special **Get-EXO\*** cmdlets in the module.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip entering a username in the modern authentication credentials prompt (you're prompted to enter a password).

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseRPSSession
This parameter is available in version 2.0.6-Preview3 or later of the module.

The UseRPSSession switch allows you to connect to Exchange Online PowerShell using traditional remote PowerShell access to all cmdlets. You don't need to specify a value with this switch.

This switch requires that Basic authentication is enabled in WinRM on the local computer. For more information, see [Prerequisites in the Exchange Online PowerShell module](https://aka.ms/exov3-module#turn-on-basic-authentication-in-winrm).

If you don't use this switch, Basic authentication in WinRM is not required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
