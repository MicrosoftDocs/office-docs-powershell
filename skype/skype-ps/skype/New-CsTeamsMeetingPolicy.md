---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamsmeetingpolicy
applicable: Skype for Business Online
title: New-CsTeamsMeetingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTeamsMeetingPolicy

## SYNOPSIS
 The CsTeamsMeetingPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting. It also helps determine how meetings deal with anonymous or external users.
## SYNTAX

```
New-CsTeamsMeetingPolicy [-Tenant <Guid>] [-Description <String>]
 [-AllowChannelMeetingScheduling <Boolean>] [-AllowMeetNow <Boolean>] [-AllowIPVideo <Boolean>]
 [-AllowAnonymousUsersToDialOut <Boolean>] [-AllowAnonymousUsersToStartMeeting <Boolean>]
 [-AllowPrivateMeetingScheduling <Boolean>] [-AutoAdmittedUsers <String>] [-AllowCloudRecording <Boolean>]
 [-AllowOutlookAddIn <Boolean>] [-AllowPowerPointSharing <Boolean>]
 [-AllowParticipantGiveRequestControl <Boolean>] [-AllowExternalParticipantGiveRequestControl <Boolean>]
 [-AllowSharedNotes <Boolean>] [-AllowWhiteboard <Boolean>] [-AllowTranscription <Boolean>]
 [-MediaBitRateKb <UInt32>] [-ScreenSharingMode <String>] [-PreferredMeetingProviderForIslandsMode <String>]
 [-VideoFiltersMode <String>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsMeetingPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting. It also helps determine how meetings deal with anonymous or external users.

The New-CsTeamsMeetingPolicy cmdlet allows administrators to define new meeting policies that can be assigned to particular users to control Teams features related to meetings.
## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsTeamsMeetingPolicy -Identity SalesMeetingPolicy -AllowTranscription $True
```

The command shown in Example 1 uses the New-CsTeamsMeetingPolicy cmdlet to create a new meeting policy with the Identity SalesMeetingPolicy.
This policy will use all the default values for a meeting policy except one: AllowTranscription; in this example, meetings for users with this policy can include real time or post meeting captions and transcriptions.


### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsTeamsMeetingPolicy -Identity HrMeetingPolicy -AutoAdmittedUsers "Everyone" -AllowMeetNow $False
```

In Example 2, the New-CsTeamsMeetingPolicy cmdlet is used to create a meeting policy with the Identity HrMeetingPolicy.
In this example two different property values are configured: AutoAdmittedUsers is set to Everyone and AllowMeetNow is set to False.
All other policy properties will use the default values.


## PARAMETERS

### -AllowAnonymousUsersToDialOut
Determines whether anonymous users are allowed to dial out to a PSTN number. Set this to TRUE to allow anonymous users to dial out. Set this to FALSE to prohibit anonymous users from dialing out.

> [!NOTE]
> This parameter is temporarily disabled.

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

### -AllowAnonymousUsersToStartMeeting
Determines whether anonymous users can initiate a meeting. Set this to TRUE to allow anonymous users to initiate a meeting. Set this to FALSE to prohibit them from initiating a meeting

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

### -AllowChannelMeetingScheduling
Determines whether a user can schedule channel meetings. Set this to TRUE to allow a user to schedule channel meetings. Set this to FALSE to prohibit the user from scheduling channel meetings. Note this only restricts from scheduling and not from joining a meeting scheduled by another user.

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

### -AllowCloudRecording
Determines whether cloud recording is allowed in a user's meetings. Set this to TRUE to allow the user to be able to record meetings. Set this to FALSE to prohibit the user from recording meetings

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

### -AllowExternalParticipantGiveRequestControl
Determines whether external participants can request or give control of screen sharing during meetings scheduled by this user. Set this to TRUE to allow the user to be able to give or request control. Set this to FALSE to prohibit an external user from giving or requesting control in a meeting

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

### -AllowIPVideo
Determines whether video is enabled in  a user's meetings or calls. Set this to TRUE to allow the user to share their video. Set this to FALSE to prohibit the user from sharing their video

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

### -AllowMeetNow
Determines whether a user can start ad-hoc meetings. Set this to TRUE to allow a user to start ad-hoc meetings. Set this to FALSE to prohibit the user from starting ad-hoc meetings. 

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

### -AllowOutlookAddIn
Determines whether a user can schedule Teams Meetings in Outlook desktop client. Set this to TRUE to allow the user to be able to schedule Teams meetings in Outlook client. Set this to FALSE to prohibit a user from scheduling Teams meeting in Outlook client 

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

### -AllowParticipantGiveRequestControl
Determines whether participants can request or give control of screen sharing during meetings scheduled by this user. Set this to TRUE to allow the user to be able to give or request control. Set this to FALSE to prohibit the user from giving, requesting control in a meeting

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

### -AllowPowerPointSharing
Determines whether Powerpoint sharing is allowed in a user's meetings. Set this to TRUE to allow. Set this to FALSE to prohibit

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

### -AllowPrivateMeetingScheduling
Determines whether a user can schedule private meetings. Set this to TRUE to allow a user to schedule private meetings. Set this to FALSE to prohibit the user from scheduling private meetings. Note this only restricts from scheduling and not from joining a meeting scheduled by another user 

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

### -AllowSharedNotes
Determines whether users are allowed to take shared notes.  Set this to TRUE to allow. Set this to FALSE to prohibit

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

### -AllowTranscription
Determines whether real-time and/or post-meeting captions and transcriptions are allowed in a user's meetings.  Set this to TRUE to allow. Set this to FALSE to prohibit

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

### -AllowWhiteboard
Determines whether whiteboard is allowed in a user's meetings. Set this to TRUE to allow. Set this to FALSE to prohibit

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

### -AutoAdmittedUsers
Determines what types of participants will automatically be added to meetings organized by this user. Set this to EveryoneInCompany if you would like meetings to place every external user in the lobby but allow all users in the company to join the meeting immediately. Set this to Everyone if you'd like to admit anonymous users by default. Set this to EveryoneInSameAndFederatedCompany if you would like meetings to allow federated users to join like your company's users, but place all other external users in a lobby.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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
Enables administrators to provide explanatory text about the meeting policy.
For example, the Description might indicate the users the policy should be assigned to.

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

### -Force
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity
Specify the name of the policy being created.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet’s matching Set-.

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

### -MediaBitRateKb
Determines the media bit rate for audio/video/app sharing transmissions in meetings.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScreenSharingMode
Determines the mode in which a user can share a screen in calls or meetings. Set this to SingleApplication to allow the user to share an  application at a given point in time. Set this to EntireScreen to allow the user to share anything on their screens. Set this to Disabled to prohibit the user from sharing their screens.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
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

### -PreferredMeetingProviderForIslandsMode
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: TeamsAndSfb
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoFiltersMode
Determines the background effects that a user can configure in the Teams client. Possible values are:

- NoFilters: No filters are available.
- BlurOnly: Background blur is the only option available (requires a processor with AVX2 support, see [Hardware requirements for Microsoft Teams](https://docs.microsoft.com/microsoftteams/hardware-requirements-for-the-teams-app) for more information).
- BlurAndDefaultBackgrounds: Background blur and a list of pre-selected images are available.
- AllFilters: All filters are available, including custom images. This is the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: AllFilters
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

