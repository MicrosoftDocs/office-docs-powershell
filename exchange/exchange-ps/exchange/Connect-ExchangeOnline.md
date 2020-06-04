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
monikerRange: "exchonline-ps"
---

# Connect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Connect-ExchangeOnline cmdlet in the Exchange Online PowerShell V2 module to connect to an Exchange Online organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Connect-ExchangeOnline
 [[-AzureADAuthorizationEndpointUri] <String>]
 [-BypassMailboxAnchoring]
 [[-ConnectionUri] <String>]
 [-Credential <PSCredential>]
 [[-DelegatedOrganization] <String>]
 [-EnableErrorReporting]
 [[-ExchangeEnvironmentName] <ExchangeEnvironment>]
 [-LogDirectoryPath <String>]
 [-LogLevel <String>]
 [-PageSize <UInt32>]
 [-Prefix <String>]
 [[-PSSessionOption] <PSSessionOption>]
 [ShowBanner]
 [-ShowProgress <Boolean>]
 [-TrackPerformance <Boolean>]
 [-UseMultithreading <Boolean>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a remote PowerShell connection to your Exchange Online organization. You can use this cmdlet to authenticate for the new REST API-backed cmdlets in the Exchange Online PowerShell V2 module, and also for all existing Exchange Online PowerShell cmdlets (remote PowerShell cmdlets).

## EXAMPLES

### Example 1
```powershell
$UserCredential = Get-Credential
Connect-ExchangeOnline -Credential $UserCredential
```

The first command gets the user credentials and stores them in the $UserCredential variable.

The second command connects the current PowerShell session using the credentials in the $UserCredential, which isn't MFA enabled. Note that after the second command is complete, the password key in the $UserCredential variable becomes empty.

After the Connect-ExchangeOnline command is successful, you can run ExO V2 module cmdlets and older remote PowerShell cmdlets.

### Example 2
```powershell
Connect-ExchangeOnline -UserPrincipalName chris@contoso.com -ShowProgress $true
```

This command connects the current PowerShell session using chris@contoso.com account, which is MFA enabled.

After the Connect-ExchangeOnline command is successful, you can run ExO V2 module cmdlets and older remote PowerShell cmdlets.

## PARAMETERS

### -AzureADAuthorizationEndpointUri
The AzureADAuthorizationEndpointUri parameter specifies the Azure AD Authorization endpoint Uri that can issue OAuth2 access tokens.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 2
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

### -ConnectionUri
The ConnectionUri parameter specifies the connection endpoint for the remote PowerShell session.

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

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).

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

### -DelegatedOrganization
The DelegatedOrganization parameter specifies the customer organization that you want to manage (for example, contosoelectronics.onmicrosoft.com). This parameter only works if the customer organization has agreed to your delegated management via the CSP program.

After you successfully authenticate, the cmdlets in this session are mapped to the customer organization, and all operations in this session are done on the customer organization.

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

### -EnableErrorReporting
The EnableErrorReporting switch enables logging errors to a local file. You don't need to specify a value with this switch.

By default, it creates 2 files in the %TMP% folder. You can use the LogDirectoryPath parameter to specify the location of the log files.

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

### -ExchangeEnvironmentName
The ExchangeEnvironmentName specifies the Exchange Online environment. Valid values are:

- O365China

- O365Default (this is the default value)

- O365GermanyCloud

- O365USGovDoD

- O365USGovGCCHigh

```yaml
Type: ExchangeEnvironment
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 3
Default value: O365Default
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogDirectoryPath
The LogDirectoryPath parameter specifies the location of the log files. The default location is %TMP%\EXOCmdletTelemetry\EXOCmdletTelemetry-yyyymmdd-hhmmss.csv.

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
The LogLevel parameter specifies the logging level. Possible values are Default and All.

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
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

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

### -Prefix
The Prefix parameter specifies an alias to add to nouns in the names of older remote PowerShell cmdlets (cmdlet with nouns that don't already start with EXO). A valid value is a text string without spaces, and you can't use the value EXO (this prefix is reserved for PowerShell V2 module cmdlets).

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
The PSSessionOption parameter specifies the PowerShell session options to use in your connection to Exchange Online. You store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable, for example:

`$Options = New-PSSessionOption <Settings>`

And you use the variable name as the value for this parameter (for example, $Options).

```yaml
Type: PSSessionOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowBanner
The ShowBanner switch shows or hides the banner message that's displayed when you run Connect-ExchangeOnline. You don't need to specify a value with this switch.

To show the banner, you don't need to use this switch (the banner is displayed by default).

To hide the banner, use this exact syntax: `-ShowBanner:$false`.

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
The ShowProgress parameter shows a visual progress bar in the PowerShell client module. The progress bar shows number of objects received and total number of objects requested. Valid values are:

- $true: The progress bar is displayed.

- $false: The progress bar isn't displayed.

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
{{ Fill TrackPerformance Description }}

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
The UseMultithreading parameter specifies whether to disable or enable multi-threading in the EXO V2 module Valid values are:

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
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip the first screen in authentication prompt.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
