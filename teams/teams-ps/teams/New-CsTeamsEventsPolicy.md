---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamseventspolicy
title: New-CsTeamsEventsPolicy
schema: 2.0.0
ms.date: 04/22/2025
---

# New-CsTeamsEventsPolicy

## SYNOPSIS
This cmdlet allows you to create a new TeamsEventsPolicy instance and set its properties. Note that this policy is currently still in preview.

## SYNTAX

```powershell
New-CsTeamsEventsPolicy [-Identity] <String> [-AllowWebinars <String>] [-AllowTownhalls <String>] [-AllowEmailEditing <String>] [-Description <String>]
[-TownhallEventAttendeeAccess <String>] [-RecordingForTownhall <String>] [-RecordingForWebinar <String>]
[-TranscriptionForTownhall <String>] [-TranscriptionForWebinar <String>] [-AllowEventIntegrations <Boolean>] [-TownhallChatExperience <String>]
[-UseMicrosoftECDN <String>] [-EventAccessType <String>] [-ParticipantSlideControl <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsEventsPolicy is used to configure options for customizing Teams Events experiences.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsEventsPolicy -Identity DisablePublicWebinars -AllowWebinars Enabled -EventAccessType EveryoneInCompanyExcludingGuests
```

The command shown in Example 1 creates a new per-user Teams Events policy with the Identity DisablePublicWebinars. This policy disables a user from creating public webinars.

### Example 2
```powershell
PS C:\> New-CsTeamsEventsPolicy -Identity DisableWebinars -AllowWebinars Disabled
```

The command shown in Example 2 creates a new per-user Teams Events policy with the Identity DisableWebinars. This policy disables a user from creating webinars.

## PARAMETERS

### -AllowWebinars
This setting governs if a user can create webinars using Teams Events.
Possible values are:
 - **Enabled**: Enables creating webinars.
 - **Disabled**: Disables creating webinars.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMicrosoftECDN
This setting governs whether the admin disables this property and prevents the organizers from creating town halls that use Microsoft eCDN even though they have been assigned a Teams Premium license.

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

### -AllowTownhalls
This setting governs if a user can create town halls using Teams Events.
Possible values are:
 - **Enabled**: Enables creating town halls.
 - **Disabled**: Disables creating town hall.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -TownhallEventAttendeeAccess
This setting governs what identity types may attend a Town hall that is scheduled by a particular person or group that is assigned this policy.
Possible values are:
 - **Everyone**: Anyone with the join link may enter the event.
 - **EveryoneInOrganizationAndGuests**: Only those who are Guests to the tenant, MTO users, and internal AAD users may enter the event.

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

### -AllowEmailEditing
This setting governs if a user is allowed to edit the communication emails in Teams Town Hall or Teams Webinar events.
Possible values are:
 - **Enabled**: Enables editing of communication emails.
 - **Disabled**: Disables editing of communication emails.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventAccessType
This setting governs which users can access the Town hall event and access the event registration page or the event site to register for a Webinar. It also governs which user type is allowed to join the session or sessions in the event for both event types.

Possible values are:
 - **Everyone**: Enables creating events to allow in-tenant, guests, federated, and anonymous (external to the tenant) users to register and join the event.

 - **EveryoneInCompanyExcludingGuests**: For Webinar - enables creating events to allow only in-tenant users to register and join the event. For Town hall - enables creating events to allow only in-tenant users to join the event (Note: for Town hall, in-tenant users include guests; this parameter will disable public Town halls).

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

### -AllowedQuestionTypesInRegistrationForm
This setting governs which users in a tenant can add which registration form questions to an event registration page for attendees to answer when registering for the event.

Possible values are: DefaultOnly, DefaultAndPredefinedOnly, AllQuestions.

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
This setting governs which types of town halls can have their recordings published.

Possible values are: None, InviteOnly, EveryoneInCompanyIncludingGuests, Everyone.

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
This setting governs which types of webinars can have their recordings published.

Possible values are: None, InviteOnly, EveryoneInCompanyIncludingGuests, Everyone.

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

### -RecordingForTownhall
Determines whether recording is allowed in a user's townhall.
Possible values are:
 - **Enabled**: Allow recording in user's townhalls.
 - **Disabled**: Prohibit recording in user's townhalls.
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
Determines whether recording is allowed in a user's webinar.
Possible values are:
 - **Enabled**: Allow recording in user's webinars.
 - **Disabled**: Prohibit recording in user's webinars.
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
### -TranscriptionForTownhall
Determines whether transcriptions are allowed in a user's townhall.
Possible values are:
 - **Enabled**: Allow transcriptions in user's townhalls.
 - **Disabled**: Prohibit transcriptions in user's townhalls.
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
Determines whether transcriptions are allowed in a user's webinar.
Possible values are:
 - **Enabled**: Allow transcriptions in user's webinars.
 - **Disabled**: Prohibit transcriptions in user's webinars.
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

### -AllowEventIntegrations
This setting governs the access to the integrations tab in the event creation workflow.

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

### -TownhallChatExperience
This setting governs if the user can enable the Comment Stream chat experience for Townhalls.

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

### -ParticipantSlideControl
This setting governs whether participants can give control of presentation slides during meetings scheduled by this user. Set the type of users you want to be able to give control and be given control of presentation slides in meetings. Users excluded from the selected group will be prohibitted from giving control, or being given control, in a meeting.

Possible values are:
 - **Everyone**: Anyone with the join link may enter the event.
 - **EveryoneInOrganization**: Only internal AAD users and Multi-Tenant Organization (MTO) users can give or take control.
 - **EveryoneInOrganizationAndGuests**: Only those who are Guests to the tenant, MTO users, and internal AAD users may enter the event.
 - **None**: No one in the meeting can give or take control.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: EveryoneInOrganization
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

### -Identity
Unique identifier assigned to the Teams Events policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
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
