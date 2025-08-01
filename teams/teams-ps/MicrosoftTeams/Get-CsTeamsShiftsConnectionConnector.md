---
author: gucsun
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
manager: navinth
Module Name: MicrosoftTeams
ms.author: gucsun
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsshiftsconnectionconnector
schema: 2.0.0
title: Get-CsTeamsShiftsConnectionConnector
---

# Get-CsTeamsShiftsConnectionConnector

## SYNOPSIS

This cmdlet supports retrieving the available Shifts Connectors.

## SYNTAX

```
Get-CsTeamsShiftsConnectionConnector [<CommonParameters>]
```

## DESCRIPTION

This cmdlet shows the available list of Shifts Connectors that can be used to synchronize a third-party workforce management system with Teams and the types of data that can be synchronized.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionConnector | Format-List
```
```
Id                                       : 6A51B888-FF44-4FEA-82E1-839401E9CD74
Name                                     : Contoso V1
SupportedSyncScenarioOfferShiftRequest   : {Disabled, FromWfmToShifts, TwoWay}
SupportedSyncScenarioOpenShift           : {Disabled, FromWfmToShifts}
SupportedSyncScenarioOpenShiftRequest    : {Disabled, FromWfmToShifts, TwoWay}
SupportedSyncScenarioShift               : {Disabled, FromWfmToShifts}
SupportedSyncScenarioSwapRequest         : {Disabled, FromWfmToShifts, TwoWay}
SupportedSyncScenarioTimeCard            : {Disabled, FromWfmToShifts, TwoWay}
SupportedSyncScenarioTimeOff             : {Disabled, FromWfmToShifts}
SupportedSyncScenarioTimeOffRequest      : {Disabled, FromWfmToShifts, TwoWay}
SupportedSyncScenarioUserShiftPreference : {Disabled, FromWfmToShifts, TwoWay}
Version                                  : 2020.3 - 2021.1
```
Get the list of Shifts Connectors available on the tenant.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnection](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsshiftsconnection)

[New-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsshiftsconnectioninstance)

[Set-CsTeamsShiftsConnectionInstance](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsshiftsconnectioninstance)

[Test-CsTeamsShiftsConnectionValidate](https://learn.microsoft.com/powershell/module/microsoftteams/test-csteamsshiftsconnectionvalidate)
