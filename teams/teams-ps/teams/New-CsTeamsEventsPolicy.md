---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamseventspolicy
schema: 2.0.0
ms.date: 11/12/2024
---

# New-CsTeamsEventsPolicy

## SYNOPSIS
This cmdlet allows you to create a new TeamsEventsPolicy instance and set its properties. Note that this policy is currently still in preview.

## SYNTAX

```
New-CsTeamsEventsPolicy [-Identity] <String> [-AllowWebinars <String>] [-AllowTownhalls <String>] [-AllowEmailEditing <String>] [-Description <String>]
[-RecordingForTownhall <String>] [-RecordingForWebinar <String>]
[-TranscriptionForTownhall <String>] [-TranscriptionForWebinar <String>]
[-UseMicrosoftECDN <String>] [-EventAccessType <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
[-ImmersiveEvents <String>]
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
