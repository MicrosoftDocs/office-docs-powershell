---
applicable: Skype for Business Server 2019, Skype for Business Server 2015, Lync Server 2013, Lync Server 2010,
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/new-csconferencingpolicy
schema: 2.0.0
---

# New-CsConferencingPolicy

## SYNOPSIS

Creates a new conferencing policy for your organization. Conferencing policy determines the features and capabilities that can be used in a conference as well as in a broadcast meeting; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.



## SYNTAX

```
New-CsConferencingPolicy [-Tenant <System.Guid>] [-AllowIPAudio <Boolean>] [-AllowIPVideo <Boolean>]
 [-AllowMultiView <Boolean>] [-Description <String>] [-AllowParticipantControl <Boolean>]
 [-AllowAnnotations <Boolean>] [-DisablePowerPointAnnotations <Boolean>]
 [-AllowUserToScheduleMeetingsWithAppSharing <Boolean>] [-ApplicationSharingMode <String>]
 [-AllowNonEnterpriseVoiceUsersToDialOut <Boolean>] [-AllowAnonymousUsersToDialOut <Boolean>]
 [-AllowAnonymousParticipantsInMeetings <Boolean>] [-AllowFederatedParticipantJoinAsSameEnterprise <Boolean>]
 [-AllowExternalUsersToSaveContent <Boolean>] [-AllowExternalUserControl <Boolean>]
 [-AllowExternalUsersToRecordMeeting <Boolean>] [-AllowPolls <Boolean>] [-AllowSharedNotes <Boolean>]
 [-AllowQandA <Boolean>] [-AllowOfficeContent <Boolean>] [-EnableDialInConferencing <Boolean>]
 [-EnableAppDesktopSharing <EnableAppDesktopSharing>] [-AllowConferenceRecording <Boolean>]
 [-EnableP2PRecording <Boolean>] [-EnableFileTransfer <Boolean>] [-EnableP2PFileTransfer <Boolean>]
 [-EnableP2PVideo <Boolean>] [-AllowLargeMeetings <Boolean>]
 [-EnableOnlineMeetingPromptForLyncResources <Boolean>] [-EnableDataCollaboration <Boolean>]
 [-MaxVideoConferenceResolution <MaxVideoConferenceResolution>] [-MaxMeetingSize <UInt32>]
 [-AudioBitRateKb <UInt32>] [-VideoBitRateKb <Int64>] [-AppSharingBitRateKb <Int64>]
 [-FileTransferBitRateKb <Int64>] [-TotalReceiveVideoBitRateKb <Int64>] [-EnableMultiViewJoin <Boolean>]
 [-CloudRecordingServiceSupport <CloudRecordingServiceSupport>] [-EnableReliableConferenceDeletion <Boolean>]
 [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```
## DESCRIPTION

Conferencing is an important part of Skype for Business Online and Skype for Business Server: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

In Skype for Business Online and Skype for Business Server, conferences are managed using conferencing policy. Conferencing policy determines the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting. In Skype for Business Online, conferencing policy also governs certain aspects of broadcast meetings, in particular, the video bit rate.

 - In Skype for Business Online, conferencing policy is managed on a per-user basis.  Skype for Business Online provides several built-in conferencing policy instances, and if needed administrators, can create their own policy instances as well, using the New-CsConferencingPolicy cmdlet.
 - In Skype for Business Server, conferencing policies can be created at either the site or the per-user scope. If you need to modify  property values of the global conferencing policy, use the Set-CsConferencingPolicy cmdlet.

The following parameters are not applicable to Skype for Business Online: ApplicationSharingMode, AudioBitRateKb, Description, EnableMultiViewJoin, EnableOnlineMeetingPromptForLyncResources, EnableReliableConferenceDeletion, FileTransferBitRateKb, Force, Identity, InMemory, MaxMeetingSize, MaxVideoConferenceResolution, PipelineVariable, Tenant, and TotalReceiveVideoBitRateKb.



## EXAMPLES

### EXAMPLE 1: Create a new conferencing policy with per user scope (Skype for Business Online, Skype for Business Server)
```
New-CsConferencingPolicy -Identity SalesConferencingPolicy -MaxMeetingSize 50
```

The command shown in Example 1 uses the New-CsConferencingPolicy cmdlet to create a new conferencing policy with the Identity SalesConferencingPolicy.  This policy will use all the default values for a conferencing policy except one: MaxMeetingSize; in this example, the maximum size for a meeting will be set to 50 instead of the default value of 250.


### EXAMPLE 2: Create a new conferencing policy with per site scope (Skype for Business Server)
```
New-CsConferencingPolicy -Identity site:Redmond -MaxMeetingSize 100 -AllowParticipantControl $False
```

In Example 2, the New-CsConferencingPolicy cmdlet is used to create a conferencing policy with the Identity site:Redmond.
In this example two different property values are configured: MaxMeetingSize is set to 100 and AllowParticipantControl is set to False.
All other policy properties will use the default values.


## PARAMETERS

### -AllowAnnotations

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not participants are allowed to make on-screen annotations on any content shared during the meeting; in addition, this setting determines whether or not whiteboarding is allowed in the conference.
The default value is True.

Note that annotations are not archived along with other meeting content.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will include annotations.
However, the user can participate in other conferences where annotations are allowed.





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

### -AllowAnonymousParticipantsInMeetings

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether anonymous users are allowed to participate in the meeting.
If set to False then only authenticated users (that is, users logged on to your Active Directory Domain Services or the Active Directory of a federated partner) are allowed to attend the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants.
However, the user can take part in other conferences where anonymous participants are allowed.



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

### -AllowAnonymousUsersToDialOut

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not anonymous users (unauthenticated users) are allowed to join a conference using dial-out phoning.
With dial-out phoning, the conferencing server telephones the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even if this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants to join the conference via dial-out phoning.
However, the user can take part in other conferences where anonymous users can join via dial out.

The default value is False.





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

### -AllowConferenceRecording

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether users are allowed to record the meeting.
The default value is False.

This setting applies to all users taking part in the conference.



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

### -AllowExternalUserControl

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether external users (either anonymous users or federated users) are allowed to take control of shared applications or desktops.
The default value is False.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to give up control of a shared application or desktop to an external user while other users might not be allowed to give up control.


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

### -AllowExternalUsersToRecordMeeting

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether external users (either anonymous users or federated users) are allowed to record the meeting.
The default value is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to record conferences.
However, the user can take part in other conferences where external users are allowed to record meetings.

Note that this setting takes effect only if the AllowConferenceRecording property is set to True.



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

### -AllowExternalUsersToSaveContent

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether external users (that is, users not currently logged-on to your network) are allowed to save handouts, slides, and other meeting content.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to save content.
However, the user can take part in other conferences where external users are allowed to save content.




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

### -AllowFederatedParticipantJoinAsSameEnterprise

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True ($True), allows federated meeting participants to join the meeting as though they were internal users rather than external users.

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

### -AllowIPAudio

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not computer audio is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP audio.
However, the user can take part in other conferences where IP audio is allowed.


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

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not computer video is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP video.
However, the user can take part in other conferences where IP video is allowed.



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

### -AllowLargeMeetings

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True, all online meetings are treated as "large meeting." With a large meeting, restrictions are placed on the number of notifications that are sent to participants as well as the size of the meeting roster that is transmitted by default.

The default value is False ($False).


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

### -AllowMultiView

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) enables users to schedule conferences that allow multiview; that is, clients can receive multiple video streams during a given conference.
This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy can include multiview.
However, the user can participate in other conferences where multiview is allowed.


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

### -AllowNonEnterpriseVoiceUsersToDialOut

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfficeContent

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to False, prevents users from using Office content in their conferences.

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

### -AllowParticipantControl

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not meeting participants are allowed to take control of applications or desktops shared during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow participant control.
However, the user can take part in other conferences where participant control is allowed.



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

### -AllowPolls

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not users are allowed to conduct online polls during a meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow polls.
However, the user can take part in other conferences where polls are allowed.



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

### -AllowQandA

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) the user will be able to include the Questions and Answers Manager in any online conference that he or she organizes.
When set to False, the user will be prohibited from including Questions and Answers Manager in any of his or her conferences.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow the use of the Questions and Answers Manager.
However, the user can make use of the Questions and Answers Manager in other conferences where polls are allowed.

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

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) any open OneNote notebooks linked to the conference will automatically be updated with information such as conference participants and details about content shared during the conference.




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

### -AllowUserToScheduleMeetingsWithAppSharing

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not users are allowed to organize meetings that include application sharing.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow application sharing.
However, the user can take part in other conferences where application sharing is allowed.



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

### -ApplicationSharingMode

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Determines the protocol used for screen sharing - VbSS vs RDP.  This parameter is used only in SfB Server.  To disable VbSS for a user, use the value "RDP".

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

### -AppSharingBitRateKb

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Bit rate (in kilobits) used for application sharing.
The default value is 50000.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioBitRateKb

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Bit rate (in kilobits) used for audio transmissions.
The audio bit rate can be any whole number between 20 and 200, inclusive; the default value is 200.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.



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

### -CloudRecordingServiceSupport

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: CloudRecordingServiceSupport
Parameter Sets: (All)
Aliases: 
Accepted values: NotSupported, Supported, Required

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Enables administrators to provider explanatory text about the conferencing policy.
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

### -DisablePowerPointAnnotations

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True ($True) users will not be able to add annotations to PowerPoint slides used in a conference.
However (depending on the value of the AllowAnnotations property), users will still have access to other whiteboarding features.
The default value is False, meaning that PowerPoint annotations are allowed.


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

### -EnableAppDesktopSharing

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether participants are allowed to share applications (or their desktop) during the course of a meeting.
Allowed values are:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDataCollaboration

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether users can organize meetings that include data collaboration activities such as whiteboarding and annotations.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow data collaboration.
However, the user can take part in other conferences where data collaboration is allowed.



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

### -EnableDialInConferencing

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether users are able to join the meeting by dialing in with a public switched telephone network (PSTN) telephone.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow dial-in conferencing.
However, the user can take part in other conferences where dial-in conferencing is allowed.


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

### -EnableFileTransfer

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether file transfers to all the meeting participants are allowed during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow file transfers.
However, the user can take part in other conferences where file transfers are allowed.



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

### -EnableMultiViewJoin

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

When set to True (the default value) clients will attempt to join a conference using multiview (which allows the client to receive multiple video streams during the conference).
This parameter will be ignored if multiview is not allowed in the conference being joined.
This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to have multiple video streams while other users in the same conference might not.



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

### -EnableOnlineMeetingPromptForLyncResources

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

When set to True, users will be prompted any time they schedule a meeting in Outlook that includes invitees (such as a meeting room) that would benefit from having the meeting held online.
The default value is False.

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

### -EnableP2PFileTransfer

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether peer-to-peer file transfers (that is, file transfers that do not involve all participants) are allowed during the meeting.
The default value is True.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to transfer files while the other user is not.



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

### -EnableP2PRecording

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

If True, users will be able to record peer-to-peer conferencing sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to record the session while the other user is not.

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

### -EnableP2PVideo

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

If True, users will be able to take part in peer-to-peer video conferencing sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to use video the session while the other user is not.



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

### -EnableReliableConferenceDeletion

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: $true | $false

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

### -FileTransferBitRateKb

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Bit rate (in kilobits) used for file transfers.
The default value is 50000.



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.


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

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the conferencing policy to be created.
In Skype for Business Server, Conferencing policies can be created at the site or per-user scopes. In Skype for Business Online, Conferencing policies can created on a per-user scope only.
To create a site policy, use syntax similar to this: `-Identity site:Redmond.`
To create a per-user policy, use syntax similar to this: `-Identity SalesConferencingPolicy.`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -MaxMeetingSize

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates the maximum number of people who are allowed to attend a meeting.
After the maximum number of participants has been reached, anyone else who tries to join the meeting will be turned away with the notice that the meeting is full.
The number of participants specified in this value can be any 32-bit whole number (any value between 1 and 4,294,967,295), but the recommended size is between 2 and 250, inclusive; the default value is 250.

250 is the maximum for shared pool deployments, based on Microsoft testing.
For information about supporting meeting with more than 250 participants, see "Microsoft Lync Server 2010 Support for Large Meetings" at https://go.microsoft.com/fwlink/p/?linkId=242073 (https://go.microsoft.com/fwlink/p/?linkId=242073).

This setting applies to the user who organizes the conference: no conference created by a user affected by this policy will allow more than the specified number of participants.
However, the user can take part in other conferences where additional participants are allowed.


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

### -MaxVideoConferenceResolution

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new conferencing policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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

### -TotalReceiveVideoBitRateKb

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Indicates the maximum allowed bitrate (in kilobytes per second) for all the video used in a conference; that is, the combined total for all the video streams.
The default value is 50000 kilobytes per second.



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoBitRateKb

> Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015, Lync Server 2013, Lync Server 2010, 

Bit rate (in kilobits) used for video transmissions.
The default value is 400.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions. In Skype for Business Online, this setting is also enforced for producers of Skype for Business Online Broadcast meetings.

**Note:** As a result of unprecedented demand for video conferencing during the COVID-19 situation, when creating policies in Skype for Business Online, this setting cannot be changed from its default value. If you are using broadcast meeting functionality and require a a higher video bit rate, please contact your Technical Account Manager or Support to request this change.



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.



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

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.



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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

###  
None.
The New-CsConferencingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

### System.Object

###  
The New-CsConferencingPolicy cmdlet creates a new instance of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

## NOTES

## RELATED LINKS

[Get-CsConferencingPolicy](Get-CsConferencingPolicy.md)

[Grant-CsConferencingPolicy](Grant-CsConferencingPolicy.md)

[Remove-CsConferencingPolicy](Remove-CsConferencingPolicy.md)

[Set-CsConferencingPolicy](Set-CsConferencingPolicy.md)
