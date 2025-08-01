---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/start-csexmeetingmigration
applicable: Microsoft Teams
title: Start-CsExMeetingMigration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Start-CsExMeetingMigration

## SYNOPSIS
This cmdlet manually trigger a meeting migration request for the specified user.

## SYNTAX

```
Start-CsExMeetingMigration [-SourceMeetingType <MmsSourceMeetingTypes>] [-TargetMeetingType <MmsTargetMeetingTypes>] [-Identity] <UserIdParameter> [<CommonParameters>]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users.
MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings.

Also, with `Start-CsExMeetingMigration` cmdlet, you can start a meeting migration manually. For more information about requirements of the Meeting Migration Service (MMS), see [Using the Meeting Migration Service (MMS)](https://learn.microsoft.com/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-CsExMeetingMigration -Identity ashaw@contoso.com -TargetMeetingType Teams
```

This example below shows how to initiate meeting migration for user ashaw@contoso.com so that all meetings are migrated to Teams.

## PARAMETERS

### -Identity
Specifies the Identity of the user account to be modified. A user identity can be specified by using one of four formats:
1. The user's SIP address
2. The user's user principal name (UPN)
3. The user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer)
4. The user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMeetingType
The possible values are:
* **All:** indicates that both Skype for Business meetings and Teams meetings should be updated. This is the **default value**.
* **SfB:** indicates that only Skype for Business meetings (whether on-premises or online) should be updated.
* **Teams:** indicates that only Teams meetings should be updated.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: All
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMeetingType
The possible values are:
* **Current:** specifies that Skype for Business meetings remain Skype for Business meetings and Teams meetings remain Teams meetings. However audio conferencing coordinates might be changed, and any on-premises Skype for Business meetings would be migrated to Skype for Business Online. This is the **default value**.
* **Teams:** specifies that any existing meeting must be migrated to Teams, regardless of whether the meeting is hosted in Skype for Business online or on-premises, and regardless of whether any audio conferencing updates are required.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Current
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Using the Meeting Migration Service (MMS)](https://learn.microsoft.com/SkypeForBusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)

[Get-CsMeetingMigrationStatus](https://learn.microsoft.com/powershell/module/teams/get-csmeetingmigrationstatus)

[Set-CsTenantMigrationConfiguration](https://learn.microsoft.com/powershell/module/teams/set-cstenantmigrationconfiguration)

[Get-CsTenantMigrationConfiguration](https://learn.microsoft.com/powershell/module/teams/get-cstenantmigrationconfiguration)
