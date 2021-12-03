---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionErrorReport
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionerrorreport
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionErrorReport

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet returns the list of all the team mapping error reports. It can also return the configuration details of one mapping error report with it ID provided.

## SYNTAX

```
Get-CsTeamsShiftsConnectionErrorReport [[-ErrorReportId] <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing team mapping error reports. It can also return the configuration details for a given mapping result.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport
```
```output
Code               CreatedAt              Culture Id                                   IntermediateIncident Message                                           Operation                            Parameter   Procedure       ResolvedAt revisitIntervalInMinutes
----               ---------              ------- --                                   -------------------- -------                                           ---------                            ---------   ---------       ---------- --
UserMappingError   11/30/2021 11:54:47 PM en-US   ec58cf47-0bb3-4c89-b9a6-e724278b57c9 2215                 WfmConnector_Report_UserMappingErrorMessageCode   UserMappingHandler                   {9, 0, 39}  MapUsers                   15
UserMappingError   11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  WfmConnector_Report_UserMappingErrorMessageCode   UserMappingHandler                   {5, 0, 19}  MapUsers                   15
UserMappingError   11/30/2021 11:54:54 PM en-US   52f6e9bf-1258-4c2b-8af2-3aca159e98b3 740                  WfmConnector_Report_UserMappingErrorMessageCode   UserMappingHandler                   {1, 2, 24}  MapUsers                   15
UserMappingError   11/30/2021 11:55:43 PM en-US   d0b7311f-823d-44e0-9171-f30eb6869335 2219                 WfmConnector_Report_UserMappingErrorMessageCode   UserMappingHandler                   {7, 1, 37}  MapUsers                   15
UserMappingError   11/30/2021 11:55:46 PM en-US   e980e667-65b3-4b00-b756-fbf974537ee9 2218                 WfmConnector_Report_UserMappingErrorMessageCode   UserMappingHandler                   {11, 2, 1}  MapUsers                   15
```

Returns the list of all the error reports.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -Id 18b3e490-e6ed-4c2e-9925-47e36609dff3
```
```output
Code             CreatedAt              Culture Id                                   IntermediateIncident Message                                         Operation          Parameter  Procedure ResolvedAt RevisitIntervalInMinute Revisit
                                                                                                                                                                                                                                     edAt
----             ---------              ------- --                                   -------------------- -------                                         ---------          ---------  --------- ---------- ----------------------- -------
UserMappingError 11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  WfmConnector_Report_UserMappingErrorMessageCode UserMappingHandler {5, 0, 19} MapUsers             15
```

Returns the error report with ID `18b3e490-e6ed-4c2e-9925-47e36609dff3`.

## PARAMETERS

### -Id

The ID of the error report.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-CsTeamsShiftsConnectionErrorReport](Remove-CsTeamsShiftsConnectionErrorReport.md)
