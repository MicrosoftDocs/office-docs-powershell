---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionConnector
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionconnector
schema: 2.0.0
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
PS C:\> Get-CsTeamsShiftsConnectionConnector
```
```
Id                                   Name           SupportedScenario                                      Version         WfiSupportedScenario
--                                   ----           -----------------                                      -------         --------------------
6A51B888-FF44-4FEA-82E1-839401E9CD74 Contoso V1	  {Shift, SwapRequest, UserShiftPreferences, OpenShift...} 2020.3 - 2021.1 {SwapRequest, OpenShiftRequest, TimeOffRequest}
```
Get the list of Shifts Connectors available on the tenant.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Test-CsTeamsShiftsConnectionValidate](Test-CsTeamsShiftsConnectionValidate.md)
