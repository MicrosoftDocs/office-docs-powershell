---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-csmeetingmigrationstatus
schema: 2.0.0
title: Get-CsMeetingMigrationStatus
---

# Get-CsMeetingMigrationStatus

## SYNOPSIS
You use the `Get-CsMeetingMigrationStatus` cmdlet to check the status of meeting migrations.

## SYNTAX
```
Get-CsMeetingMigrationStatus [[-Identity] <UserIdParameter>] [-EndTime <DateTime>] [-StartTime <DateTime>] [-SummaryOnly] [-State <StateType>] [<CommonParameters>]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users. MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings.

You can use the `Get-CsMeetingMigrationStatus` cmdlet to check the status of meeting migrations.

## EXAMPLES

### Example 1
```
Get-CsMeetingMigrationStatus -SummaryOnly
```

This example is used to get a summary status of all MMS migrations.

### Example 2
```
Get-CsMeetingMigrationStatus -Identity "ashaw@contoso.com"
```

This example gets the meeting migration status for user ashaw@contoso.com.

## PARAMETERS

### -EndTime
Specifies the end date of the date range.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
Specifies the start date of the date range.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
With this parameter you can filter by migration state. Possible values are:

- Pending
- InProgress
- Failed
- Succeeded

```yaml
Type: StateType
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SummaryOnly
Specified that you want a summary status of MMS migrations returned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
CorrelationId     : 849d3e3b-3e1d-465f-8dde-785aa9e3f856
CreateDate        : 2024-04-27T00:24:00.1442688Z
FailedMeeting     : 0
InvitesUpdate     : 0
LastMessage       :
MigrationType     : AllToTeams
ModifiedDate      : 2024-04-27T00:24:00.1442688Z
RetryCount        : 0
State             : Pending
SucceededMeeting  : 0
TotalMeeting      : 0
UserId            : 27c6ee67-c71d-4386-bf84-ebfdc7c3a171
UserPrincipalName : syntest1-prod@TESTTESTMMSSYNTHETICUSWESTT.onmicrosoft.com

where **MigrationType** can have the following values:

- **SfbToTeams** (Skype for Business On-prem to Teams)
- **TeamsToTeams** (Teams to Teams)
- **ToSameType** (Same source and target meeting types)
- **AllToTeams** (All types to Teams)

## RELATED LINKS
[Get-CsTenantMigrationConfiguration](https://learn.microsoft.com/powershell/module/teams/get-cstenantmigrationconfiguration)

[Get-CsOnlineDialInConferencingTenantSettings](https://learn.microsoft.com/powershell/module/teams/get-csonlinedialinconferencingtenantsettings)

[Start-CsExMeetingMigration](https://learn.microsoft.com/powershell/module/teams/start-csexmeetingmigration)
