---
applicable: Exchange Online
external help file: ExchangeOnlineManagementBeta-help.xml
Locale: en-US
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/connect-defenderforoffice365
schema: 2.0.0
title: Connect-DefenderForOffice365
---

# Connect-DefenderForOffice365

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the **Connect-DefenderForOffice365** cmdlet to connect to [Microsoft Defender for Office 365 PowerShell](https://learn.microsoft.com/powershell/exchange/defender-office-365-powershell-overview), a security-focused subset of Exchange Online PowerShell cmdlets for customers who use [Defender Unified role-based access control (RBAC)](https://learn.microsoft.com/defender-xdr/manage-rbac) permissions in the Microsoft Defender portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Connect-DefenderForOffice365
 [[-ConnectionUri] <String>]
 [[-AzureADAuthorizationEndpointUri] <String>]
 [[-DelegatedOrganization] <String>]
 [[-PSSessionOption] <PSSessionOption>]
 [-BypassMailboxAnchoring]
 [[-Prefix] <String>]
 [[-CommandName] <String[]>]
 [[-FormatTypeName] <String[]>]
 [-ShowBanner]
 [-DisableWAM]
 [[-AccessToken] <String>]
 [[-EXOModuleBasePath] <String>]
 [-UserPrincipalName <String>]
 [-Credential <PSCredential>]
 [-Certificate <X509Certificate2>]
 [-CertificateFilePath <String>]
 [-CertificatePassword <SecureString>]
 [-AppId <String>]
 [-Organization <String>]
 [-EnableErrorReporting]
 [-LogDirectoryPath <String>]
 [-LogLevel <LogLevel>]
 [-CertificateThumbprint <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet instead of **Connect-ExchangeOnline** to manage features in the Defender portal when the **Email & collaboration** workload is active in Defender Unified RBAC. The available cmdlets are based on the user's effective Unified RBAC permissions.

If you open connections to multiple PowerShell environments in the same PowerShell window, cmdlets from the most recent connection take precedence. Use separate PowerShell windows or the _Prefix_ parameter to avoid cmdlet name conflicts.

For detailed connection instructions, including prerequisites and supported environments, see [Connect to Microsoft Defender for Office 365 PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-defender-for-office-365-powershell).

## EXAMPLES

### Example 1
```powershell
Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.com
```

This example connects to Defender for Office 365 PowerShell by using modern authentication, with or without multifactor authentication (MFA).

### Example 2
```powershell
Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.us -ConnectionUri https://ps.security.protection.office365.us/PowerShell-LiveId -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/organizations
```

This example connects to Defender for Office 365 PowerShell in a Microsoft 365 GCC High organization.

### Example 3
```powershell
Connect-DefenderForOffice365 -AppId 36ee4c6c-0812-40a2-b820-b22ebd02bce3 -CertificateThumbprint 012THISISADEMOTHUMBPRINT -Organization contoso.onmicrosoft.com
```

This example connects in an unattended scripting scenario by using certificate-based authentication.

### Example 4
```powershell
Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.com -DelegatedOrganization adatum.onmicrosoft.com -AzureADAuthorizationEndpointUri https://login.microsoftonline.com/adatum.onmicrosoft.com
```

This example connects to a customer organization by using delegated administration.

## PARAMETERS

### -AccessToken

> Applicable: Exchange Online

The _AccessToken_ parameter specifies the OAuth JSON Web Token (JWT) used to connect to Defender for Office 365 PowerShell.

Depending on the type of access token, use this parameter with the _Organization_, _DelegatedOrganization_, or _UserPrincipalName_ parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppId

> Applicable: Exchange Online

The _AppId_ parameter specifies the application ID of the service principal used in certificate-based authentication (CBA). A valid value is the application ID GUID.

For more information, see [App-only authentication for unattended scripts](https://aka.ms/exo-cba).

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

### -AzureADAuthorizationEndpointUri

> Applicable: Exchange Online

The _AzureADAuthorizationEndpointUri_ parameter specifies the Microsoft Entra authorization endpoint that can issue OAuth 2.0 access tokens. The supported values are:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The default value is `https://login.microsoftonline.com/organizations`.
- Microsoft 365 GCC High or Microsoft 365 DoD: `https://login.microsoftonline.us/organizations`.

The URI value ending in `/organizations` allows only work or school accounts.

If you use the _UserPrincipalName_ parameter, you typically don't need to use this parameter in the default environment.

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

### -BypassMailboxAnchoring

> Applicable: Exchange Online

The _BypassMailboxAnchoring_ switch bypasses the mailbox anchoring hint. You don't need to specify a value with this switch.

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

### -Certificate

> Applicable: Exchange Online

The _Certificate_ parameter specifies the certificate used for CBA. A valid value is the X509Certificate2 object value of the certificate.

Don't use this parameter with the _CertificateFilePath_ or _CertificateThumbprint_ parameters.

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

The _CertificateFilePath_ parameter specifies the certificate file used for CBA. Use the _CertificatePassword_ parameter with this parameter.

Don't use this parameter with the _Certificate_ or _CertificateThumbprint_ parameters.

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

The _CertificatePassword_ parameter specifies the password required to open the certificate file identified by the _CertificateFilePath_ parameter.

You can use a SecureString variable or `(Get-Credential).Password` as the value.

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

The _CertificateThumbprint_ parameter specifies the certificate used for CBA. A valid value is the thumbprint of the certificate.

Don't use this parameter with the _Certificate_ or _CertificateFilePath_ parameters.

**Note**: This parameter is supported only in Microsoft Windows.

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

### -CommandName

> Applicable: Exchange Online

The _CommandName_ parameter specifies the comma-separated list of commands to import into the session. Reducing the number of imported cmdlets improves performance and reduces the memory footprint.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionUri

> Applicable: Exchange Online

The _ConnectionUri_ parameter specifies the connection endpoint for the PowerShell session. The supported values are:

- Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The default value is `https://ps.security.protection.outlook.com/PowerShell-LiveId`.
- Microsoft 365 GCC High or Microsoft 365 DoD: `https://ps.security.protection.office365.us/PowerShell-LiveId`.

Defender for Office 365 PowerShell isn't currently available in Office 365 operated by 21Vianet or EU sovereign cloud environments.

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

### -Credential

> Applicable: Exchange Online

The _Credential_ parameter specifies the username and password used to connect. Don't use this parameter for accounts that use MFA.

Before you run the command, store the username and password in a variable, for example, `$UserCredential = Get-Credential`. Use the variable name as the value of this parameter.

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

### -DelegatedOrganization

> Applicable: Exchange Online

The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage. Use the primary `.onmicrosoft.com` domain or tenant ID of the customer organization.

After you authenticate, all operations in the session are performed in the customer organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableWAM

> Applicable: Exchange Online

The _DisableWAM_ switch disables Web Account Manager (WAM). You don't need to specify a value with this switch.

Use this switch only if you encounter WAM-related issues during sign in.

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

The _EnableErrorReporting_ switch enables error reporting. You don't need to specify a value with this switch.

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

The _EXOModuleBasePath_ parameter specifies the folder where the local temporary copy of the module is stored. Enclose values that contain spaces in quotation marks.

By default, the temporary module is stored in the `%TMP%` folder.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormatTypeName

> Applicable: Exchange Online

The _FormatTypeName_ parameter specifies the output format of the cmdlet.

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

### -LogDirectoryPath

> Applicable: Exchange Online

The _LogDirectoryPath_ parameter specifies the location of the log files. The default location is `%TMP%\EXOCmdletTelemetry\EXOCmdletTelemetry-yyyymmdd-hhmmss.csv`.

Enclose values that contain spaces in quotation marks.

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

The _LogLevel_ parameter specifies the logging level. Valid values are `Default` and `All`.

```yaml
Type: LogLevel
Parameter Sets: (All)
Aliases:
Accepted values: Default, All

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Online

The _Organization_ parameter specifies the organization when you connect by using CBA. Use the primary `.onmicrosoft.com` domain of the organization.

App-only Defender for Office 365 PowerShell connections use Microsoft Entra role assignments. Unified RBAC role assignments for service principals aren't currently supported.

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

### -PSSessionOption

> Applicable: Exchange Online

The _PSSessionOption_ parameter specifies the PowerShell session options to use in the connection.

Store the output of a **New-PSSessionOption** command in a variable, and use the variable as the value of this parameter.

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

### -Prefix

> Applicable: Exchange Online

The _Prefix_ parameter specifies text to add to the names of imported cmdlets. For example, **Get-SafeLinksPolicy** becomes **Get-ContosoSafeLinksPolicy** when you use the value `Contoso`.

Use this parameter to avoid cmdlet name conflicts when you connect to multiple PowerShell environments in the same PowerShell window.

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

### -ShowBanner

> Applicable: Exchange Online

The _ShowBanner_ switch shows or hides the banner message displayed when you connect.

- To show the banner, don't use this switch.
- To hide the banner, use `-ShowBanner:$false`.

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

### -UserPrincipalName

> Applicable: Exchange Online

The _UserPrincipalName_ parameter specifies the account that you want to use to connect, for example, `admin@contoso.com`. This parameter lets you skip entering a username in the authentication prompt.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Connect to Microsoft Defender for Office 365 PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-defender-for-office-365-powershell)

[Microsoft Defender for Office 365 PowerShell overview](https://learn.microsoft.com/powershell/exchange/defender-office-365-powershell-overview)

[Connect-ExchangeOnline](https://learn.microsoft.com/powershell/module/exchangepowershell/connect-exchangeonline)

[Connect-IPPSSession](https://learn.microsoft.com/powershell/module/exchangepowershell/connect-ippssession)

[Disconnect-ExchangeOnline](https://learn.microsoft.com/powershell/module/exchangepowershell/disconnect-exchangeonline)
