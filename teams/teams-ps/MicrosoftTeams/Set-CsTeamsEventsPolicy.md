---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.date: 04/23/2025
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy
schema: 2.0.0
title: Set-CsTeamsEventsPolicy
---

# Set-CsTeamsEventsPolicy

## SYNOPSIS
This cmdlet allows you to configure options for customizing Teams events experiences. Note that this policy is currently still in preview.

## SYNTAX

```
Set-CsTeamsEventsPolicy [-AllowWebinars <String>] [-EventAccessType <String>] [-AllowTownhalls <String>] [-ImmersiveEvents <String>]
 [-TownhallEventAttendeeAccess <String>] [-AllowEmailEditing <String>] [-AllowedQuestionTypesInRegistrationForm <String>]
 [-AllowEventIntegrations <Boolean>] [-AllowedWebinarTypesForRecordingPublish <String>]
 [-AllowedTownhallTypesForRecordingPublish <String>] [-TownhallChatExperience <String>] [-Description <String>]
 [-RecordingForTownhall <String>] [-RecordingForWebinar <String>] [-TranscriptionForTownhall <String>] [-TranscriptionForWebinar <String>]
 [-UseMicrosoftECDN <Boolean>] [-BroadcastPremiumApps <String>] [-TownhallMaxResolution <String>] [-HighBitrateForTownhall <String>] [-AllowEngagementReport <String>]
 [-InfoShownInReportMode <String>] [-Registration <String>]
```

## DESCRIPTION
User-level policy for tenant admin to configure options for customizing Teams events experiences. Use this cmdlet to update an existing policy.

## EXAMPLES

### Example 1
```powershell
Set-CsTeamsEventsPolicy -Identity Global -AllowWebinars Disabled
```

The command shown in Example 1 sets the value of the Default (Global) Events Policy in the organization to disable webinars, and leaves all other parameters the same.

## PARAMETERS

### -AllowedQuestionTypesInRegistrationForm
This setting governs which users in a tenant can add which registration form questions to an event registration page for attendees to answer when registering for the event.

Possible values are:
DefaultOnly, DefaultAndPredefinedOnly, AllQuestions.

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

### -AllowedTownhallTypesForRecordingPublish
This setting describes how IT admins can control which types of events optimized for large audiences can have their recordings published.

Possible values are:
None, InviteOnly, EveryoneInCompanyIncludingGuests, Everyone.

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

### -AllowedWebinarTypesForRecordingPublish
This setting describes how IT admins can control which types of events up to 1,000 attendees can have their recordings published.

Possible values are:
None, InviteOnly, EveryoneInCompanyIncludingGuests, Everyone.

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

### -AllowEmailEditing
This setting governs if a user is allowed to edit the communication emails in their events.
Possible values are:
 - **Enabled**: Enables editing of communication emails.
 - **Disabled**: Disables editing of communication emails.

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

### -AllowEventIntegrations
This setting governs access to the integrations tab in the event creation workflow.

Possible values
true, false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTownhalls
This setting governs if a user can create an event optimized for large audiences using Teams Events.
Possible values are:
 - **Enabled**: Enables the **Optimize for Large Audience** option for organizers when scheduling an event.
 - **Disabled**: Disables the **Optimize for Large Audience** option for organizers scheduling an event.

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

### -AllowWebinars
This setting governs if a user can create an event up to 1,000 attendees using Teams Events.
Possible values are:
 - **Enabled**: Enables creating events up to 1,000 attendees (previously webinars).
 - **Disabled**: Disables creating events up to 1,000 attendees (previously webinars).

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

### -BroadcastPremiumApps
This setting governs if an organizer of an event optimized for a large audience may add an app that is accessible by everyone, including attendees, to the event. This does not include control over apps (such as the AI Producer and Custom Streaming Apps) that are only accessible by the Event group.
 
Please note, only certain apps, such as Polls, are supported for everyone in events optimized for large audiences. 

Possible values are:
- **Enabled**: An organizer of a broadcast style event can add Apps such as Polls
- **Disabled**: An organizer of a broadcast style event CANNOT add Apps as Polls

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowEngagementReport
Controls whether attendance and engagement reports are allowed for events.

Possible values are:

- **Enabled**: On, but organizers can turn it off.
- **Disabled**: Off, but organizers can turn it on.
- **ForceEnabled**: On. Organizers cannot turn off attendance and engagement reports.
- **ForceDisabled**: Off. Organizers cannot view or download attendance and engagement reports.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -InfoShownInReportMode
Controls what information is shown in attendance reports.

Possible values are:

- **FullInformation**: Full attendee information is shown in the report.
- **IdentityOnly**: Only attendee identity is shown in the report.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: FullInformation
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch does not work with this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch does not work with this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany a Teams Events policy.

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

### -Description
Enables administrators to provide explanatory text to accompany a Teams Events policy.

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

### -Description
Enables administrators to provide explanatory text to accompany a Teams Events policy.

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

### -EventAccessType

This setting governs which users can access the event registration page or the event site to register for events up to 1,000 attendees. It also governs which user type is allowed to join the session/s in the event.
Possible values are:
 - **Everyone**: Enables creating events to allow in-tenant, guests, federated, and anonymous (external to the tenant) users to register and join the event.
 - **EveryoneInCompanyExcludingGuests**: Enables creating events to allow only in-tenant users to register and join the event.

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

### -Identity
Unique identifier assigned to the Teams Events policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmersiveEvents
This setting governs if a user can create Immersive Events using Teams Events.
Possible values are:
 - **Enabled**: Enables creating Immersive Events.
 - **Disabled**: Disables creating Immersive Events.
```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordingForTownhall
Determines whether recording is allowed in an event optimized for a large audience.

Possible values are:
 - **Enabled**: Allow recording in events optimized for large audiences.
 - **Disabled**: Prohibit recording in events optimized for large audiences.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordingForWebinar
Determines whether recording is allowed in events up to 1,000 attendees.

Possible values are:
 - **Enabled**: Allow recording in events up to 1,000 attendees.
 - **Disabled**: Prohibit recording in events up to 1,000 attendees.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -TownhallChatExperience
This setting governs whether the user can enable the Comment Stream chat experience for an event optimized for a large audience.

Possible values are: Optimized, None.

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

### -TownhallEventAttendeeAccess
This setting governs what identity types may attend or register for an event optimized for a large audience that is scheduled by a particular person or group that is assigned this policy.
Possible values are:
 - **Everyone**: Anyone with the join link may enter or register for the event.
 - **EveryoneInOrganizationAndGuests**: Only those who are Guests to the tenant, MTO users, and internal AAD users may enter or register for the event.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Everyone
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranscriptionForTownhall
Determines whether transcriptions are allowed in a events optimized for a large audience.

Possible values are:
 - **Enabled**: Allow transcriptions in events optimized for a large audience.
 - **Disabled**: Prohibit transcriptions in events optimized for a large audience.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranscriptionForWebinar
Determines whether transcriptions are allowed in events up to 1,000 attendees.

Possible values are:
 - **Enabled**: Allow transcriptions in events up to 1,000 attendees.
 - **Disabled**: Prohibit transcriptions in events up to 1,000 attendees.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMicrosoftECDN
This setting governs whether the admin disables this property and prevents the organizers from creating events optimized for a large audience that use Microsoft eCDN even though they have been assigned a Teams Premium license.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TownhallMaxResolution
This policy sets the maximum video resolution supported in events optimized for a large audience.

Possible values are:
- **Max720p**: Events optimized for a large audience support video resolution up to 720p.
- **Max1080p**: Events optimized for a large audience support video resolution up to 1080p.
- **MicrosoftManaged**: Events optimized for a large audience will support video resolution up to 720p except for those customers whose networks have been assessed by Microsoft to support up to 1080p."

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: MicrosoftManaged
Accept pipeline input: False
Accept wildcard characters: False
```

### -HighBitrateForTownhall
This policy controls whether high-bitrate streaming is enabled for events optimized for a large audience.

Possible values are:
- **Enabled**: Enables high bitrate for events optimized for a large audience.
- **Disabled**: Disables high bitrate for events optimized for a large audience.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Registration
This setting governs whether registration is enabled or disabled for events.

Possible values are:

- **Enabled**: Enables registration for events.
- **Disabled**: Disables registration for events.

> [!NOTE]
> This feature has not been fully released yet, so the setting will have no effect.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```


### -WhatIf
The WhatIf switch does not work with this cmdlet.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
