---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline
applicable: Exchange Online
title: Connect-ExchangeOnline
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
---

# Connect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Connect-ExchangeOnline cmdlet in the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell using modern authentication. This cmdlet works for MFA or non-MFA enabled accounts.

To connect to other PowerShell environments (for example, Security & Compliance Center PowerShell or standalone Exchange Online Protection PowerShell), use the [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession) cmdlet.

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
 [-Organization <String>]
 [-PageSize <UInt32>]
 [-ShowBanner]
 [-ShowProgress <Boolean>]
 [-TrackPerformance <Boolean>]
 [-UseMultithreading <Boolean>]
 [-UserPrincipalName <String>]
 [-UseRPSSession]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a remote PowerShell connection to your Exchange Online organization. You can use this cmdlet to authenticate for the new REST API-backed cmdlets in the Exchange Online PowerShell V2 module, and also for all existing Exchange Online PowerShell cmdlets (remote PowerShell cmdlets).

For details about the current and past public versions of the EXO V2 module, see [Release notes](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2#release-notes). This topic is written for the current public version. Features or parameters that are only available in a Preview version of the module are specifically noted.

## EXAMPLES

### Example 1
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com
```

This example connects to Exchange Online PowerShell using modern authentication, with or without multi-factor authentication (MFA). We aren't using the UseRPSSession parameter, so the connection uses REST and doesn't require Basic authentication to be enabled in WinROM on the local computer. But, only the subset of frequently used REST API parameters are available.

### Example 2
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com -UseRPSSession
```

This example connects to Exchange Online PowerShell using modern authentication, with or without MFA. We're using the UseRPSSession parameter, so the connection requires Basic authentication to be enabled in WinRM on the local computer. But, all Exchange Online PowerShell cmdlets are available using traditional remote PowerShell access.

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

In PowerShell 7.0.3 or later using the EXO V2 module version 2.0.4 or later, this example connects to Exchange Online PowerShell in interactive scripting scenarios on computers that don't have web browsers.

The command returns a URL and unique code that's tied to the session. You need to open the URL in a browser on any computer, and then enter the unique code. After you complete the login in the web browser, the session in the Powershell 7 window is authenticated via the regular Azure AD authentication flow, and the Exchange Online cmdlets are imported after few seconds.

### Example 7
```powershell
Connect-ExchangeOnline -InlineCredential
```

In PowerShell 7.0.3 or later using the EXO V2 module version 2.0.4 or later, this example connects to Exchange Online PowerShell in interactive scripting scenarios by passing credentials directly in the PowerShell window.

## PARAMETERS

### -ConnectionUri
**Note**: If you use the ExchangeEnvironmentName parameter, you don't need to use the AzureADAuthorizationEndpointUri or ConnectionUri parameters.

The ConnectionUri parameter specifies the connection endpoint for the remote Exchange Online PowerShell session. The following Exchange Online PowerShell environments and related values are supported:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://outlook.office365.com/powershell-liveid/`, but that's also the default value, so you don't need to use this parameter.
- Office 365 Germany: `https://outlook.office.de/PowerShell-LiveID`
- Office 365 operated by 21Vianet: `https://partner.outlook.cn/PowerShell`
- Microsoft 365 GCC High: `https://outlook.office365.us/powershell-liveid`
- Microsoft 365 DoD: `https://webmail.apps.mil/powershell-liveid`

**Note**: If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for Exchange Online Protection, use the this cmdlet without the _ConnectionUri_ parameter to connect to EOP PowerShell (the same connection instructions as Exchange Online PowerShell in Microsoft 365 or Microsoft GCC).

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
The Prefix parameter specifies an alias to add to nouns in the names of older remote PowerShell cmdlets (cmdlet with nouns that don't already start with EXO). A valid value is a text string without spaces or special characters like underscrores, asterisks etc, and you can't use the value EXO (this prefix is reserved for PowerShell V2 module cmdlets).

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

For more information, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

This parameter uses the syntax `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable name (`$password`) for this parameter.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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
**Note**: This parameter is available only in version 2.0.4 or later, and only in PowerShell 7.

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
**Note**: This parameter is available only in version 2.0.4 or later, and only in PowerShell 7.

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

### -Organization
The Organization parameter specifies the organization that's used in CBA. Be sure to use an .onmicrosoft.com domain for the parameter value. Otherwise, you might encounter cryptic permission issues when you run commands in the app context.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
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
The UseMultithreading parameter specifies whether to disable or enable multi-threading in the EXO V2 module. Valid values are:

- $true: Enable multi-threading. This is the default value.
- $false: Disable multi-threading. Note this value will degrade performance of V2 cmdlets.

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
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip the username dialog in the modern authentication prompt for credentials (you only need to enter your password).

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
This parameter is available in version 2.0.6-Preview3 or later of the Exchange Online V2 module.

The UseRPSSession switch allows you to connect to Exchange Online PowerShell using traditional remote PowerShell access to all cmdlets. You don't need to specify a value with this switch.

This switch requires that Basic authentication is enabled in WinRM on the local computer. For more information, see [Prerequisites in the EXO V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2#prerequisites-for-the-exo-v2-module).

If you don't use this switch, Basic authentication in WinRM is not required, but only the subset of frequently used REST API cmdlets are available.

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
