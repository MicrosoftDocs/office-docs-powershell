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
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://rdocs.microsoft.com/powershell/exchange/exchange-online/connect-to-exchange-online-powershell-v2).

Use the Connect-ExchangeOnline cmdlet in the Exchange Online PowerShell V2 module to connect to an Exchange Online organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

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


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
{{ Navin's test code }}
```

{{ Add example description here }}

## PARAMETERS

### -AzureADAuthorizationEndpointUri
Azure AD Authorization endpoint Uri that can issue the OAuth2 access tokens

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
Switch to bypass use of mailbox anchoring hint.

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
Connection Uri for the Remote PowerShell endpoint

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
{{ Fill Credential Description }}

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
The PSSessionOption parameter specifies PowerShell session options to use in your connection to Exchange Online. You store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable (for example, `$Options = New-PSSessionOption <Settings>`), and you use the variable name as the value for this parameter (for example, $Options).

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/connect-exchangeonline)
