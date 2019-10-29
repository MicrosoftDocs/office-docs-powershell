---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Connect-ExchangeOnline
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Connect-ExchangeOnline

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2?branch=ExORestModule-chrisda).

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
 [-DoLogErrorMessage]
 [-EnableEXOTelemetry]
 [[-ExchangeEnvironmentName] <ExchangeEnvironment>]
 [-LogDirectoryPath <String>]
 [-PageSize <UInt32>]
 [[-PSSessionOption] <PSSessionOption>]
 [-ShowProgress <$true | $ false>]
 [-TrackPerformance <$true | $ false>]
 [-UseMultithreading <$true | $ false>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Though the Exchange Online PowerShell V2 module contains a set of ~10 new REST API backed CMDLETs and all the older remote PowerShell cmdlets, this single Connect cmdlet allows you to establish a remote PowerShell session and authenticate for the new ExO V2 module cmdlets.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
UserCredential = Get-Credential
Connect-ExchangeOnline -Credential $UserCredential
```

The first command gets the user credentials and stores them in the $Credential variable.

The second command connects the current PowerShell session using the credentials in the $Credential. Note that after the second command is complete, the password key in the $Credential variable becomes empty.

After the Connect-ExchangeOnline command is successful, you can run ExO V2 module cmdlets and older remote PowerShell cmdlets.

## PARAMETERS

### -AzureADAuthorizationEndpointUri
The AzureADAuthorizationEndpointUri parameter specifies the Azure AD Authorization endpoint Uri that can issue the OAuth2 access tokens.

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
The BypassMailboxAnchoring switch bypassing the use of the mailbox anchoring hint. You don't need to specify a value with this switch.

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
The ConnectionUri parameter specifies the connection endpoint for the Remote PowerShell endpoint.

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
The DelegatedOrganization parameter specifies the domain name of the organization to connect to as a delegated admin (for example, contoso.onmicrosoft.com).

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

### -DoLogErrorMessage
The DoLogErrorMessage switch disables error message logging in the telemetry file when you use the EnableEXOTelemetry switch. You don't need to specify a value with this switch.

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

### -EnableEXOTelemetry
The EnableEXOTelemetry switch enables the collection of telemetry on Exchange cmdlets. You don't need to specify a value with this switch.

You can use the LogDirectoryPath parameter to specify the location of the telemetry data.

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
Exchange Environment name

```yaml
Type: ExchangeEnvironment
Parameter Sets: (All)
Aliases:
Accepted values: O365Default, O365GermanyCloud, O365USGovGCCHigh, O365USGovDoD, O365China
Applicable: Exchange Online
Required: False
Position: 3
Default value: O365Default
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogDirectoryPath
The LogDirectoryPath parameter specifies the location of the telemetry data. The default location is %TMP%\EXOCmdletTelemetry\EXOCmdletTelemetry-yyyymmdd-hhmmss.csv.

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

### -PSSessionOption
The PSSessionOption parameter specifies the PowerShell session options to use in your connection to Exchange Online. You store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable (for example, `$Options = New-PSSessionOption <Settings>`), and you use the variable name as the value for this parameter (for example, $Options).

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

### -ShowProgress
{{ Fill ShowProgress Description }}

```yaml
Type: $true | $ false
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
Type: $true | $ false
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
{{ Fill UseMultithreading Description }}

```yaml
Type: $true | $ false
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
{{ Fill UserPrincipalName Description }}

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/connect-exchangeonline)
