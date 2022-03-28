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

This cmdlet returns the list of all the team mapping error reports. It can also return the configuration details of one mapping error report with its ID provided or other filter parameters.

## SYNTAX

```
Get-CsTeamsShiftsConnectionErrorReport [[-Activeness] <String>] [[-ConnectorInstanceId] <String>] [[-TeamId] <String>] [[-Operation] <String>] [[-Code] <String>] [[-Procedure] <String>] [[-Before] <String>] [[-After] <String>] [<CommonParameters>]
```

```
Get-CsTeamsShiftsConnectionErrorReport [[-ErrorReportId] <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing team mapping error reports. It can also return the configuration details for mapping result with given ID or other filters.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport
```
```output
Code               CreatedAt              Culture Id                                   IntermediateIncident Message                                                                                         Operation                            Parameter   Procedure       ResolvedAt revisitIntervalInMinutes
----               ---------              ------- --                                   -------------------- -------                                                                                         ---------                            ---------   ---------       ---------- --
UserMappingError   11/30/2021 11:54:47 PM en-US   ec58cf47-0bb3-4c89-b9a6-e724278b57c9 2215                 Unable to map all users: 10 succeeded, 1 failed for Graph users, and 15 failed for Wfm users.   UserMappingHandler                   {9, 0, 39}  MapUsers                   15
UserMappingError   11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  Unable to map all users: 15 succeeded, 2 failed for Graph users, and 12 failed for Wfm users.   UserMappingHandler                   {5, 0, 19}  MapUsers                   15
UserMappingError   11/30/2021 11:54:54 PM en-US   52f6e9bf-1258-4c2b-8af2-3aca159e98b3 740                  Unable to map all users: 12 succeeded, 3 failed for Graph users, and 11 failed for Wfm users.   UserMappingHandler                   {1, 2, 24}  MapUsers                   15
UserMappingError   11/30/2021 11:55:43 PM en-US   d0b7311f-823d-44e0-9171-f30eb6869335 2219                 Unable to map all users: 9 succeeded, 5 failed for Graph users, and 18 failed for Wfm users.    UserMappingHandler                   {7, 1, 37}  MapUsers                   15
UserMappingError   11/30/2021 11:55:46 PM en-US   e980e667-65b3-4b00-b756-fbf974537ee9 2218                 Unable to map all users: 22 succeeded, 4 failed for Graph users, and 19 failed for Wfm users.   UserMappingHandler                   {11, 2, 1}  MapUsers                   15
```

Returns the list of all the error reports.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -ErrorReportId 18b3e490-e6ed-4c2e-9925-47e36609dff3
```
```output
Code             CreatedAt              Culture Id                                   IntermediateIncident Message                                                                                        Operation          Parameter  Procedure ResolvedAt RevisitIntervalInMinute RevisitedAt
----             ---------              ------- --                                   -------------------- -------                                                                                        ---------          ---------  --------- ---------- ----------------------- -------
UserMappingError 11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  Unable to map all users: 15 succeeded, 2 failed for Graph users, and 12 failed for Wfm users.  UserMappingHandler {5, 0, 19} MapUsers             15
```

Returns the error report with ID `18b3e490-e6ed-4c2e-9925-47e36609dff3`.

### Example 3
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -Code UserMappingError
```
```output
Code             CreatedAt              Culture Id                                   IntermediateIncident Message
----             ---------              ------- --                                   -------------------- -------
UserMappingError 11/30/2021 11:54:47 PM en-US   ec58cf47-0bb3-4c89-b9a6-e724278b57c9 2217                 Unable to map all users: 9 succeeded, 5 failed for Graph users, and 8 failed for Wfm users.
UserMappingError 11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  Unable to map all users: 15 succeeded, 2 failed for Graph users, and 12 failed for Wfm users.
UserMappingError 11/30/2021 11:54:54 PM en-US   52f6e9bf-1258-4c2b-8af2-3aca159e98b3 1776                 Unable to map all users: 6 succeeded, 2 failed for Graph users, and 3 failed for Wfm users.
UserMappingError 11/30/2021 11:55:43 PM en-US   d0b7311f-823d-44e0-9171-f30eb6869335 5319                 Unable to map all users: 7 succeeded, 3 failed for Graph users, and 2 failed for Wfm users.
```

Returns the error report with error code `UserMappingError`.

### Example 4
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -Operation UserMappingHandler
```
```output
Code             CreatedAt              Culture Id                                   IntermediateIncident Message                                                                                       Operation          Parameter   Procedure ResolvedAt           RevisitIntervalInMinute
----             ---------              ------- --                                   -------------------- -------                                                                                       ---------          ---------   --------- ----------           --------------------
UserMappingError 11/30/2021 11:54:47 PM en-US   ec58cf47-0bb3-4c89-b9a6-e724278b57c9 2217                 Unable to map all users: 9 succeeded, 5 failed for Graph users, and 8 failed for Wfm users.   UserMappingHandler {9, 0, 39}  MapUsers  12/3/2021 8:00:20 PM 15
UserMappingError 11/30/2021 11:54:47 PM en-US   18b3e490-e6ed-4c2e-9925-47e36609dff3 938                  Unable to map all users: 15 succeeded, 2 failed for Graph users, and 12 failed for Wfm users. UserMappingHandler {5, 0, 19}  MapUsers                       15
UserMappingError 11/30/2021 11:54:54 PM en-US   52f6e9bf-1258-4c2b-8af2-3aca159e98b3 1776                 Unable to map all users: 6 succeeded, 2 failed for Graph users, and 3 failed for Wfm users.   UserMappingHandler {1, 2, 24}  MapUsers                       15
```

Returns the error report with operation `UserMappingHandler`.

### Example 5
```powershell
PS C:\> Get-CsTeamsShiftsConnectionErrorReport -After 2021-12-01T19:11:39.073Z
```
```output
Code                CreatedAt             Culture Id                                   IntermediateIncident Message                                                                                       Operation                            Parameter   Procedure                ResolvedAt
----                ---------             ------- --                                   -------------------- -------                                                                                       ---------                            ---------   ---------                ----
UserMappingError    12/1/2021 3:47:55 PM  en-US   82e59bc0-fb69-49f4-830b-19ac3b1f66d7 4796                 Unable to map all users: 6 succeeded, 2 failed for Graph users, and 3 failed for Wfm users.   UserMappingHandler                   {4, 0, 20}  MapUsers
UserMappingError    12/1/2021 11:04:34 PM en-US   f5423691-4fc7-46db-b962-fbcad322c56d 12                   Unable to map all users: 9 succeeded, 3 failed for Graph users, and 5 failed for Wfm users.   UserMappingHandler                   {13, 2, 12} MapUsers
UserMappingError    12/2/2021 4:33:06 AM  en-US   595f7789-0254-4a11-841d-d9b062515d2f 4383                 Unable to map all users: 4 succeeded, 5 failed for Graph users, and 8 failed for Wfm users.   UserMappingHandler                   {4, 0, 20}  MapUsers
```

Returns the error report created after `2021-12-01T19:11:39.073Z`.

## PARAMETERS

### -ErrorReportId

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

### -Activeness

The flag indicating results should have which activeness.
Set this to `ActiveOnly` to get Error reports that are not resolved.
Set this to `InactiveOnly` to get Error reports that are resolved.
Set this to `Both` to get both active and inactive Error reports.

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

### -ConnectorInstanceId

The UUID of a connector instance.

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

### -TeamId

The UUID of a team in Graph.

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

### -Operation

The name of the action of the controller or the name of the command.

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

### -Procedure

The name of the executing function or procedure.

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

### -Code

The enum value of error code, human readable string defined in codebase.

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

### -Before

The timestamp indicating results should be before which date and time.

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

### -After

The timestamp indicating results should be after which date and time.

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

[Disable-CsTeamsShiftsConnectionErrorReport](Disable-CsTeamsShiftsConnectionErrorReport.md)
