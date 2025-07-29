---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/get-csusersettingspageconfiguration
schema: 2.0.0
title: Get-CsUserSettingsPageConfiguration
---

# Get-CsUserSettingsPageConfiguration

## SYNOPSIS
This command is used to get the current URI for setting PSTN calling and voice mail related settings.

## SYNTAX

### Identity (Default)
```
Get-CsUserSettingsPageConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsUserSettingsPageConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This command is used to get the current URI for setting PSTN calling and voice mail related settings. The Skype for Business Administrator may choose to update these URI based on their configured PSTN calling and Voice mail services using Set-CsUserSettingsPageConfiguration:
- PstnCallingUri: The URI of the PstnCalling User settings page
- VoicemailUri: The URI of the Voicemail tab in User Settings Portal


## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsUserSettingsPageConfiguration
```

This example is used to retrieve the Global User Settings Page Configuration.

## PARAMETERS

### -Filter
The Filter parameter allows you to limit the number of results based on filters you specify.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter is a unique identifier that designates the scope.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the user pool information from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
