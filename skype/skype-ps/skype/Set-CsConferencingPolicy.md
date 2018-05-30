---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsConferencingPolicy
schema: 2.0.0
---

# Set-CsConferencingPolicy

## SYNOPSIS
Modifies an existing conferencing policy.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsConferencingPolicy [[-Identity] <XdsIdentity>] [-AllowAnnotations <Boolean>]
 [-AllowAnonymousParticipantsInMeetings <Boolean>] [-AllowAnonymousUsersToDialOut <Boolean>]
 [-AllowConferenceRecording <Boolean>] [-AllowExternalUserControl <Boolean>]
 [-AllowExternalUsersToSaveContent <Boolean>] [-AllowIPAudio <Boolean>] [-AllowIPVideo <Boolean>]
 [-AllowParticipantControl <Boolean>] [-AllowPolls <Boolean>]
 [-AllowUserToScheduleMeetingsWithAppSharing <Boolean>] [-Description <String>]
 [-EnableAppDesktopSharing <EnableAppDesktopSharing>] [-EnableDataCollaboration <Boolean>]
 [-EnableDialInConferencing <Boolean>] [-EnableFileTransfer <Boolean>] [-EnableP2PFileTransfer <Boolean>]
 [-EnableP2PRecording <Boolean>] [-EnableP2PVideo <Boolean>] [-MaxMeetingSize <UInt32>]
 [-MaxVideoConferenceResolution <MaxVideoConferenceResolution>] [-Force] [-WhatIf] [-Confirm]
 [-AllowExternalUsersToRecordMeeting <Boolean>] [-AppSharingBitRateKb <Int64>] [-AudioBitRateKb <UInt32>]
 [-FileTransferBitRateKb <Int64>] [-VideoBitRateKb <Int64>] [-AllowLargeMeetings <Boolean>]
 [-AllowMultiView <Boolean>] [-AllowNonEnterpriseVoiceUsersToDialOut <Boolean>] [-AllowSharedNotes <Boolean>]
 [-DisablePowerPointAnnotations <Boolean>] [-EnableMultiViewJoin <Boolean>]
 [-TotalReceiveVideoBitRateKb <Int64>] [-AllowFederatedParticipantJoinAsSameEnterprise <Boolean>]
 [-AllowOfficeContent <Boolean>] [-AllowQandA <Boolean>] [-EnableOnlineMeetingPromptForLyncResources <Boolean>]
 [-Tenant <Guid>] [-ApplicationSharingMode <String>] [<CommonParameters>]
```

### Instance
```
Set-CsConferencingPolicy [-Instance <PSObject>] [-AllowAnnotations <Boolean>]
 [-AllowAnonymousParticipantsInMeetings <Boolean>] [-AllowAnonymousUsersToDialOut <Boolean>]
 [-AllowConferenceRecording <Boolean>] [-AllowExternalUserControl <Boolean>]
 [-AllowExternalUsersToSaveContent <Boolean>] [-AllowIPAudio <Boolean>] [-AllowIPVideo <Boolean>]
 [-AllowParticipantControl <Boolean>] [-AllowPolls <Boolean>]
 [-AllowUserToScheduleMeetingsWithAppSharing <Boolean>] [-Description <String>]
 [-EnableAppDesktopSharing <EnableAppDesktopSharing>] [-EnableDataCollaboration <Boolean>]
 [-EnableDialInConferencing <Boolean>] [-EnableFileTransfer <Boolean>] [-EnableP2PFileTransfer <Boolean>]
 [-EnableP2PRecording <Boolean>] [-EnableP2PVideo <Boolean>] [-MaxMeetingSize <UInt32>]
 [-MaxVideoConferenceResolution <MaxVideoConferenceResolution>] [-Force] [-WhatIf] [-Confirm]
 [-AllowExternalUsersToRecordMeeting <Boolean>] [-AppSharingBitRateKb <Int64>] [-AudioBitRateKb <UInt32>]
 [-FileTransferBitRateKb <Int64>] [-VideoBitRateKb <Int64>] [-AllowLargeMeetings <Boolean>]
 [-AllowMultiView <Boolean>] [-AllowNonEnterpriseVoiceUsersToDialOut <Boolean>] [-AllowSharedNotes <Boolean>]
 [-DisablePowerPointAnnotations <Boolean>] [-EnableMultiViewJoin <Boolean>]
 [-TotalReceiveVideoBitRateKb <Int64>] [-AllowFederatedParticipantJoinAsSameEnterprise <Boolean>]
 [-AllowOfficeContent <Boolean>] [-AllowQandA <Boolean>] [-EnableOnlineMeetingPromptForLyncResources <Boolean>]
 [-Tenant <Guid>] [-ApplicationSharingMode <String>] [<CommonParameters>]
```

###  (Default)
```
Set-CsConferencingPolicy [[-Identity] <Object>] [-AllowAnnotations <Object>]
 [-AllowAnonymousParticipantsInMeetings <Object>] [-AllowAnonymousUsersToDialOut <Object>]
 [-AllowConferenceRecording <Object>] [-AllowExternalUserControl <Object>]
 [-AllowExternalUsersToRecordMeeting <Object>] [-AllowExternalUsersToSaveContent <Object>]
 [-AllowFederatedParticipantJoinAsSameEnterprise <Object>] [-AllowIPAudio <Object>] [-AllowIPVideo <Object>]
 [-AllowLargeMeetings <Object>] [-AllowMultiView <Object>] [-AllowNonEnterpriseVoiceUsersToDialOut <Object>]
 [-AllowOfficeContent <Object>] [-AllowParticipantControl <Object>] [-AllowPolls <Object>]
 [-AllowQandA <Object>] [-AllowSharedNotes <Object>] [-AllowUserToScheduleMeetingsWithAppSharing <Object>]
 [-ApplicationSharingMode <Object>] [-AppSharingBitRateKb <Object>] [-AudioBitRateKb <Object>]
 [-BypassDualWrite <Object>] [-CloudRecordingServiceSupport <Object>] [-Confirm] [-Description <Object>]
 [-DisablePowerPointAnnotations <Object>] [-EnableAppDesktopSharing <Object>]
 [-EnableDataCollaboration <Object>] [-EnableDialInConferencing <Object>] [-EnableFileTransfer <Object>]
 [-EnableMultiViewJoin <Object>] [-EnableOnlineMeetingPromptForLyncResources <Object>]
 [-EnableP2PFileTransfer <Object>] [-EnableP2PRecording <Object>] [-EnableP2PVideo <Object>]
 [-EnableReliableConferenceDeletion <Object>] [-FileTransferBitRateKb <Object>] [-Force] [-Instance <Object>]
 [-MaxMeetingSize <Object>] [-MaxVideoConferenceResolution <Object>] [-Tenant <Object>]
 [-TotalReceiveVideoBitRateKb <Object>] [-VideoBitRateKb <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Conferencing is an important part of Skype for Business Server: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Skype for Business Server conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

Policy property values can be configured at the time a policy is created.
In addition to that, you can, at any time, use the `Set-CsConferencingPolicy` cmdlet to modify the property values of an existing policy.

The following parameters are not applicable to Skype for Business Online: ApplicationSharingMode, AsJob, AudioBitRateKb, Description, EnableMultiViewJoin, EnableOnlineMeetingPromptForLyncResources, EnableReliableConferenceDeletion, FileTransferBitRateKb, Force, Identity, Instance, MaxMeetingSize, MaxVideoConferenceResolution, PipelineVariable, Tenant, and TotalReceiveVideoBitRateKb

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsConferencingPolicy -Identity SalesConferencingPolicy -AllowConferenceRecording $False
```

The command shown in Example 1 modifies a property value of the conferencing policy SalesConferencingPolicy; in particular, the command sets the value of the AllowConferenceRecording property to False.
To do this, the `Set-CsConferencingPolicy` cmdlet is called along with the Identity parameter and the AllowConferenceRecording parameter.


### -------------------------- Example 2 --------------------------
```
Get-CsConferencingPolicy | Set-CsConferencingPolicy -AllowAnonymousParticipantsInMeetings $False -EnableDialInConferencing $False
```

In Example 2, the same two property values -- AllowAnonymousParticipantsInMeetings and EnableDialInConferencing -- are modified for all the conferencing policies configured for use in the organization.
To do this, the command first uses the `Get-CsConferencingPolicy` cmdlet to return a collection of all the available conferencing policies.
That collection is then piped to the `Set-CsConferencingPolicy` cmdlet, which sets the value of both the AllowAnonymousParticipantsInMeetings and EnableDialInConferencing properties to False for each policy in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsConferencingPolicy -Filter "site:*" | Set-CsConferencingPolicy -MaxVideoConferenceResolution CIF
```

The command shown in Example 3 modifies the MaxVideoConferenceResolution property for all the conferencing policies that have been configured at the site scope.
To accomplish this task the command first calls the `Get-CsConferencingPolicy` cmdlet and the Filter parameter; the filter value "site:*" restricts the returned data to policies configured at the site scope.
This filtered collection is then piped to the `Set-CsConferencingPolicy` cmdlet, which sets the MaxVideoConferenceResolution property for each policy in the collection to "CIF".


### -------------------------- Example 4 --------------------------
```
Get-CsConferencingPolicy | Where-Object {$_.MaxMeetingSize -gt 100} | Set-CsConferencingPolicy -MaxMeetingSize 100
```

Example 4 retrieves all the policies where the maximum meeting size is greater than (-gt) 100 and then changes the value of the associated property (MaxMeetingSize) to 100.
To do this the command first calls the `Get-CsConferencingPolicy` cmdlet to return a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which picks out only those policies that have a MaxMeetingSize greater than 100.
The filtered collection is then piped to the `Set-CsConferencingPolicy` cmdlet, which takes each policy in the collection and sets the MaxMeetingSize property to 100.


## PARAMETERS

### -Identity
Unique identifier for the conferencing policy to be modified.
Conferencing policies can be configured at the global, site, or per-user scopes.
To modify the global policy, use this syntax: `-Identity global`.
To modify a site policy, use syntax similar to this: `-Identity site:Redmond`.
To modify a per-user policy, use syntax similar to this: `-Identity SalesConferencingPolicy`.

Note that wildcards are not allowed when specifying an Identity.
If you do not specify an Identity the `Set-CsConferencingPolicy` cmdlet will automatically modify the global conferencing policy.


```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowAnnotations
Indicates whether or not participants are allowed to make on-screen annotations on any content shared during the meeting; in addition, this setting determines whether or not whiteboarding is allowed in the conference.
The default value is True.

Note that annotations are not archived along with other meeting content.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will include annotations.
However, the user can participate in other conferences where annotations are allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousParticipantsInMeetings
Indicates whether anonymous users are allowed to participate in the meeting.
If set to False then only authenticated users (that is, users logged on to your Active Directory Domain Services or the Active Directory of a federated partner) are allowed to attend the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants.
However, the user can take part in other conferences where anonymous participants are allowed.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousUsersToDialOut
Indicates whether or not anonymous users (for example, unauthenticated users) are allowed to join a conference using dial-out phoning.
With dial-out phoning the conferencing server will telephone the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even when this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants to join the conference by dialing out; however, the user can take part in other conferences where anonymous users can join by dialing out.

The default value is False ($False).


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConferenceRecording
Indicates whether users are allowed to record the meeting.
The default value is False.

This setting applies to all users taking part in the conference.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUserControl
Indicates whether external users (either anonymous users or federated) are allowed to take control of shared applications or desktops.
The default value is False.

This setting is enforced at the per-user level and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to give up control of a shared application or desktop to an external user while other users might not be allowed to give up control.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUsersToSaveContent
Indicates whether external users (that is, users not currently logged-on to your network) are allowed to save handouts, slides and other meeting content.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to save content.
However, the user can take part in other conferences where external users are allowed to save content.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIPAudio
Indicates whether or not computer audio is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP audio.
However, the user can take part in other conferences where IP audio is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIPVideo
Indicates whether or not computer video is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP video.
However, the user can take part in other conferences where IP video is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowParticipantControl
Indicates whether or not meeting participants are allowed to take control of applications or desktops shared during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow participant control.
However, the user can take part in other conferences where participant control is allowed.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPolls
Indicates whether or not users are allowed to conduct online polls during a meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow polls.
However, the user can take part in other conferences where polls are allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserToScheduleMeetingsWithAppSharing
Indicates whether or not users are allowed to organize meetings that include application sharing.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow application sharing.
However, the user can take part in other conferences where application sharing is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional text about the conferencing policy.
For example, the Description might indicate the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAppDesktopSharing
Indicates whether participants are allowed to share applications (or their desktop) during the course of a meeting.
Allowed values include:

Desktop.
Users are allowed to share their entire desktop.

SingleApplication.
Users are allowed to share a single application.

None.
Users are not allowed to share applications or their desktop.

This setting is enforced at the per-user level.
That means that some users in a conference might be allowed to share their desktop or applications while other users in the same conference might not be allowed to do so.

The default value is Desktop.

```yaml
Type: EnableAppDesktopSharing
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDataCollaboration
Indicates whether users can organize meetings that include data collaboration activities such as whiteboarding and annotations.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow data collaboration.
However, the user can take part in other conferences where data collaboration is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDialInConferencing
Indicates whether users are able to join the meeting by dialing in with a public switched telephone network (PSTN) telephone.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow dial-in conferencing.
However, the user can take part in other conferences where dial-in conferencing is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFileTransfer
Indicates whether file transfers to all the meeting participants are allowed during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow file transfers.
However, the user can take part in other conferences where file transfers are allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PFileTransfer
Indicates whether peer-to-peer file transfers (that is, file transfers that do not involve all participants) are allowed during the meeting.
The default value is True ($True).

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to transfer files while the other user is not.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PRecording
Deprecated - Do Not Use

If True, users will be able to record peer-to-peer communication sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to record the session while the other user is not.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PVideo
If True, users will be able to take part in peer-to-peer video communication sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to use video while the other user is not.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMeetingSize
Indicates the maximum number of people who are allowed to attend a meeting.
After the maximum number of participants has been reached anyone else who tries to join the meeting will be turned away with the notice that the meeting is full.
The number of participants specified in this value can be any 32-bit whole number (any value between 1 and 4,294,967,295), but the recommended size is between 2 and 250, inclusive; the default value is 250.

250 is the maximum for shared pool deployments, based on Microsoft testing.
For information about supporting meeting with more than 250 participants, see "Microsoft Lync Server 2010 Support for Large Meetings" at http://go.microsoft.com/fwlink/p/?linkId=242073 (http://go.microsoft.com/fwlink/p/?linkId=242073).

This setting applies to the user who organizes the conference: no conference created by a user affected by this policy will allow more than the specified number of participants.
However, the user can take part in other conferences where additional participants are allowed.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVideoConferenceResolution
Indicates the maximum resolution for meeting video.
Allowed values are:

CIF.
Common Intermediate Format (CIF) has a resolution of 352 pixels by 288 pixels.

VGA.
VGA has a resolution of 640 pixels by 480 pixels.

The default value is VGA.

```yaml
Type: MaxVideoConferenceResolution
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUsersToRecordMeeting
Indicates whether external users (either anonymous users or federated users) are allowed to record the meeting.
The default value is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to record conferences.
However, the user can take part in other conferences where external users are allowed to record meetings.

Note that this setting takes effect only if the AllowConferenceRecording property is set to True.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingBitRateKb
Bit rate (in kilobits) used for application sharing.
The default value is 50000.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioBitRateKb
Bit rate (in kilobits) used for audio transmissions.
The audio bit rate can be any whole number between 20 and 200, inclusive; the default value is 200.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileTransferBitRateKb
Bit rate (in kilobits) used for file transfers.
The default value is 50000.

This setting is enforced at the per-user level and for both conferences and peer-to-peer communication sessions.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoBitRateKb
Bit rate (in kilobits) used for video transmissions.
The default value is 50000.

This setting is enforced at the per-user level and for both conferences and peer-to-peer communication sessions.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLargeMeetings
When set to True, all online meetings are treated as "large meeting." With a large meeting, restrictions are placed on the number of notifications that are sent to participants as well as the size of the meeting roster that is transmitted by default.

The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMultiView
When set to True (the default value) enables users to schedule conferences that allow multiview; that is, clients can receive multiple video streams during a given conference.
This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy can include multiview.
However, the user can participate in other conferences where multiview is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNonEnterpriseVoiceUsersToDialOut
Indicates whether or users who have not been enabled for Enterprise Voice are allowed to join a conference using dial-out phoning.
With dial-out phoning the conferencing server will telephone the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even when this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow users who have not been enabled for Enterprise Voice to join the conference via dial-out phoning.
However, the user can take part in other conferences where users who have not been enabled for Enterprise Voice can join via dial out.

The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSharedNotes
When set to True (the default value) any open OneNote notebooks linked to the conference will automatically be updated with information such as conference participants and details about content shared during the conference.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePowerPointAnnotations
When set to True ($True) users will not be able to add annotations to PowerPoint slides used in a conference.
However (depending on the value of the AllowAnnotations property), users will still have access to other whiteboarding features.
The default value is False, meaning that PowerPoint annotations are allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMultiViewJoin
When set to True (the default value) clients will attempt to join a conference using multiview (which allows the client to receive multiple video streams during the conference).
This parameter will be ignored if multiview is not allowed in the conference being joined.
This setting is enforced at the per-user level and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to have multiple video streams while other users in the same conference might not.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalReceiveVideoBitRateKb
Indicates the maximum allowed bitrate (in kilobytes per second) for all the video used in a conference; that is, the combined total for all the video streams.
The default value is 50000 kilobits per second.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowFederatedParticipantJoinAsSameEnterprise
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfficeContent
When set to False, prevents users from using Office content in their conferences.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowQandA
When set to True (the default value) the user will be able to include the Questions and Answers Manager in any online conference that he or she organizes.
When set to False, the user will be prohibited from including Questions and Answers Manager in any of his or her conferences.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow the use of the Questions and Answers Manager.
However, the user can make use of the Questions and Answers Manager in other conferences where polls are allowed.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationSharingMode
Determines the protocol used for screen sharing - VbSS vs RDP.  This parameter is used only in SfB Server.  To disable VbSS, use the value "RDP".


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloudRecordingServiceSupport
PARAMVALUE: NotSupported | Supported | Required

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOnlineMeetingPromptForLyncResources
When set to True, users will be prompted any time they schedule a meeting in Outlook that includes invitees (such as a meeting room) that would benefit from having the meeting held online.
The default value is False.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableReliableConferenceDeletion
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the conferencing policy is being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.
The `Set-CsConferencingPolicy` cmdlet accepts pipelined instances of the meeting policy object.

## OUTPUTS

###  
The `Set-CsConferencingPolicy` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsConferencingPolicy](Get-CsConferencingPolicy.md)

[Grant-CsConferencingPolicy](Grant-CsConferencingPolicy.md)

[New-CsConferencingPolicy](New-CsConferencingPolicy.md)

[Remove-CsConferencingPolicy](Remove-CsConferencingPolicy.md)

