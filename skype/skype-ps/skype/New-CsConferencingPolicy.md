---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: New-CsConferencingPolicy
schema: 2.0.0
---

# New-CsConferencingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new conferencing policy for use in your organization.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new conferencing policy for use in your organization.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

New-CsConferencingPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-AllowIPAudio \<bool\>\] \[-AllowIPVideo \<bool\>\] \[-AllowMultiView \<bool\>\] \[-Description \<string\>\] \[-AllowParticipantControl \<bool\>\] \[-AllowAnnotations \<bool\>\] \[-DisablePowerPointAnnotations \<bool\>\] \[-AllowUserToScheduleMeetingsWithAppSharing \<bool\>\] \[-ApplicationSharingMode \<string\>\] \[-AllowNonEnterpriseVoiceUsersToDialOut \<bool\>\] \[-AllowAnonymousUsersToDialOut \<bool\>\] \[-AllowAnonymousParticipantsInMeetings \<bool\>\] \[-AllowFederatedParticipantJoinAsSameEnterprise \<bool\>\] \[-AllowExternalUsersToSaveContent \<bool\>\] \[-AllowExternalUserControl \<bool\>\] \[-AllowExternalUsersToRecordMeeting \<bool\>\] \[-AllowPolls \<bool\>\] \[-AllowSharedNotes \<bool\>\] \[-AllowQandA \<bool\>\] \[-AllowOfficeContent \<bool\>\] \[-EnableDialInConferencing \<bool\>\] \[-EnableAppDesktopSharing \<EnableAppDesktopSharing\>\] \[-AllowConferenceRecording \<bool\>\] \[-EnableP2PRecording \<bool\>\] \[-EnableFileTransfer \<bool\>\] \[-EnableP2PFileTransfer \<bool\>\] \[-EnableP2PVideo \<bool\>\] \[-AllowLargeMeetings \<bool\>\] \[-EnableOnlineMeetingPromptForLyncResources \<bool\>\] \[-EnableDataCollaboration \<bool\>\] \[-MaxVideoConferenceResolution \<MaxVideoConferenceResolution\>\] \[-MaxMeetingSize \<uint32\>\] \[-AudioBitRateKb \<uint32\>\] \[-VideoBitRateKb \<long\>\] \[-AppSharingBitRateKb \<long\>\] \[-FileTransferBitRateKb \<long\>\] \[-TotalReceiveVideoBitRateKb \<long\>\] \[-EnableMultiViewJoin \<bool\>\] \[-CloudRecordingServiceSupport \<CloudRecordingServiceSupport\>\] \[-EnableReliableConferenceDeletion \<bool\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

```
New-CsConferencingPolicy [-Identity] <XdsIdentity> [-AllowAnnotations <Boolean>]
 [-AllowAnonymousParticipantsInMeetings <Boolean>] [-AllowAnonymousUsersToDialOut <Boolean>]
 [-AllowConferenceRecording <Boolean>] [-AllowExternalUserControl <Boolean>]
 [-AllowExternalUsersToSaveContent <Boolean>] [-AllowIPAudio <Boolean>] [-AllowIPVideo <Boolean>]
 [-AllowParticipantControl <Boolean>] [-AllowPolls <Boolean>]
 [-AllowUserToScheduleMeetingsWithAppSharing <Boolean>] [-Description <String>]
 [-EnableAppDesktopSharing <EnableAppDesktopSharing>] [-EnableDataCollaboration <Boolean>]
 [-EnableDialInConferencing <Boolean>] [-EnableFileTransfer <Boolean>] [-EnableP2PFileTransfer <Boolean>]
 [-EnableP2PRecording <Boolean>] [-EnableP2PVideo <Boolean>] [-MaxMeetingSize <UInt32>]
 [-MaxVideoConferenceResolution <MaxVideoConferenceResolution>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-AllowExternalUsersToRecordMeeting <Boolean>] [-AppSharingBitRateKb <Int64>] [-AudioBitRateKb <UInt32>]
 [-FileTransferBitRateKb <Int64>] [-VideoBitRateKb <Int64>] [-AllowLargeMeetings <Boolean>]
 [-AllowMultiView <Boolean>] [-AllowNonEnterpriseVoiceUsersToDialOut <Boolean>] [-AllowSharedNotes <Boolean>]
 [-DisablePowerPointAnnotations <Boolean>] [-EnableMultiViewJoin <Boolean>]
 [-TotalReceiveVideoBitRateKb <Int64>] [-AllowFederatedParticipantJoinAsSameEnterprise <Object>]
 [-AllowOfficeContent <Object>] [-AllowQandA <Object>] [-ApplicationSharingMode <Object>]
 [-BypassDualWrite <Object>] [-CloudRecordingServiceSupport <Object>]
 [-EnableOnlineMeetingPromptForLyncResources <Object>] [-EnableReliableConferenceDeletion <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Conferencing is an important part of Microsoft Lync Server 2010: conferencing enables groups of users (as few as two people to as many as 250 people) to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server 2010, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

The New-CsConferencingPolicy cmdlet enables you to create new conferencing policies at either the site or the per-user scope.
You cannot create a new global policy because the global policy already exists.
However, you can modify the property values of the global policy by using Set-CsConferencingPolicy.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsConferencingPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsConferencingPolicy"}

**Below Content Applies To:** Lync Server 2013

Conferencing is an important part of Lync Server: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

The New-CsConferencingPolicy cmdlet enables you to create new conferencing policies at either the site or the per-user scope.
You cannot create a new global policy because the global policy already exists.
However, you can modify the property values of the global policy by using Set-CsConferencingPolicy.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsConferencingPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsConferencingPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Conferencing is an important part of Skype for Business Server 2015: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be occasional legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Needing to manage conferencing settings is one thing; actually managing these settings is another.
In Skype for Business Server 2015, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

The New-CsConferencingPolicy cmdlet enables you to create new conferencing policies at either the site or the per-user scope.
You cannot create a new global policy because the global policy already exists.
However, you can modify the property values of the global policy by using the Set-CsConferencingPolicy cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsConferencingPolicy -Identity SalesConferencingPolicy -MaxMeetingSize 50
```

The preceding command uses New-CsConferencingPolicy to create a new conferencing policy with the Identity SalesConferencingPolicy.
This policy will use all the default values for a conferencing policy except one: MaxMeetingSize; in this example, the maximum size for a meeting will be set to 50 instead of the default value of 250.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 uses New-CsConferencingPolicy to create a new conferencing policy with the Identity SalesConferencingPolicy.
This policy will use all the default values for a conferencing policy except one: MaxMeetingSize; in this example, the maximum size for a meeting will be set to 50 instead of the default value of 250.

New-CsConferencingPolicy -Identity SalesConferencingPolicy -MaxMeetingSize 50

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 uses the New-CsConferencingPolicy cmdlet to create a new conferencing policy with the Identity SalesConferencingPolicy.
This policy will use all the default values for a conferencing policy except one: MaxMeetingSize; in this example, the maximum size for a meeting will be set to 50 instead of the default value of 250.

New-CsConferencingPolicy -Identity SalesConferencingPolicy -MaxMeetingSize 50

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsConferencingPolicy -Identity site:Redmond -MaxMeetingSize 100 -AllowParticipantControl $False
```

In Example 2, New-CsConferencingPolicy is used to create a conferencing policy with the Identity site:Redmond.
In this example two different property values are configured: MaxMeetingSize is set to 100 and AllowParticipantControl is set to False.
All other policy properties will use the default values.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, New-CsConferencingPolicy is used to create a conferencing policy with the Identity site:Redmond.
In this example two different property values are configured: MaxMeetingSize is set to 100 and AllowParticipantControl is set to False.
All other policy properties will use the default values.

New-CsConferencingPolicy -Identity site:Redmond -MaxMeetingSize 100 -AllowParticipantControl $False

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the New-CsConferencingPolicy cmdlet is used to create a conferencing policy with the Identity site:Redmond.
In this example two different property values are configured: MaxMeetingSize is set to 100 and AllowParticipantControl is set to False.
All other policy properties will use the default values.

New-CsConferencingPolicy -Identity site:Redmond -MaxMeetingSize 100 -AllowParticipantControl $False

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique identifier for the conferencing policy to be created.
Conferencing policies can be created at the site or per-user scopes.
To create a site policy, use syntax similar to this: -Identity site:Redmond.
To create a per-user policy, use syntax similar to this: -Identity SalesConferencingPolicy.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnnotations
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not participants are allowed to make on-screen annotations on any content shared during the meeting; in addition, this setting determines whether or not whiteboarding is allowed in the conference.
The default value is True.

Note that annotations are not archived along with other meeting content.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will include annotations.
However, the user can participate in other conferences where annotations are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowAnnotations Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousParticipantsInMeetings
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates whether anonymous users are allowed to participate in the meeting.
If set to False then only authenticated users (that is, users logged on to your Active Directory Domain Services (AD DS) or the Active Directory of a federated partner) are allowed to attend the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants.
However, the user can take part in other conferences where anonymous participants are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowAnonymousParticipantsInMeetings Description}}



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether anonymous users are allowed to participate in the meeting.
If set to False then only authenticated users (that is, users logged on to your Active Directory Domain Services or the Active Directory of a federated partner) are allowed to attend the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants.
However, the user can take part in other conferences where anonymous participants are allowed.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousUsersToDialOut
**Below Content Applies To:** Lync Server 2010

Indicates whether or not anonymous users (unauthenticated users) are allowed to join a conference using dial-out phoning.
With dial-out phoning, the conferencing server telephones the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even if this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants to dial out.
However, the user can take part in other conferences where anonymous users can dial out.

The default value is False.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates whether or not anonymous users (unauthenticated users) are allowed to join a conference using dial-out phoning.
With dial-out phoning, the conferencing server telephones the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even if this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow anonymous participants to join the conference via dial-out phoning.
However, the user can take part in other conferences where anonymous users can join via dial out.

The default value is False.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowAnonymousUsersToDialOut Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConferenceRecording
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether users are allowed to record the meeting.
The default value is False.

This setting applies to all users taking part in the conference.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowConferenceRecording Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUserControl
**Below Content Applies To:** Lync Server 2010

Indicates whether external users (either anonymous users or federated users) are allowed to take control of shared applications or desktops.
The default value is False.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication settings.
That means that some users in a session might be allowed to give up control of a shared application or desktop to an external user while other users might not be allowed to give up control.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates whether external users (either anonymous users or federated users) are allowed to take control of shared applications or desktops.
The default value is False.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to give up control of a shared application or desktop to an external user while other users might not be allowed to give up control.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowExternalUserControl Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUsersToSaveContent
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether external users (that is, users not currently logged-on to your network) are allowed to save handouts, slides, and other meeting content.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to save content.
However, the user can take part in other conferences where external users are allowed to save content.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowExternalUsersToSaveContent Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIPAudio
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not computer audio is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP audio.
However, the user can take part in other conferences where IP audio is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowIPAudio Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIPVideo
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not computer video is allowed in the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow IP video.
However, the user can take part in other conferences where IP video is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowIPVideo Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowParticipantControl
**Below Content Applies To:** Lync Server 2010

Indicates whether or not meeting participants are allowed to take control of applications shared during the meeting.
The default value is True.

The setting is enforced at the per-user level and applies to both conferences and peer-to-peer communication sessions.
That means that some users in a conference might be allowed to take control of a shared application or desktop while other users in that same conference might not be allowed to do so.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates whether or not meeting participants are allowed to take control of applications or desktops shared during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow participant control.
However, the user can take part in other conferences where participant control is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowParticipantControl Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPolls
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not users are allowed to conduct online polls during a meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow polls.
However, the user can take part in other conferences where polls are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowPolls Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserToScheduleMeetingsWithAppSharing
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether or not users are allowed to organize meetings that include application sharing.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow application sharing.
However, the user can take part in other conferences where application sharing is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowUserToScheduleMeetingsWithAppSharing Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables administrators to provider explanatory text about the conferencing policy.
For example, the Description might indicate the users the policy should be assigned to.



**Below Content Applies To:** Skype for Business Online

{{Fill Description Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAppDesktopSharing
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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



**Below Content Applies To:** Skype for Business Online

{{Fill EnableAppDesktopSharing Description}}



```yaml
Type: EnableAppDesktopSharing
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDataCollaboration
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether users can organize meetings that include data collaboration activities such as whiteboarding and annotations.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow data collaboration.
However, the user can take part in other conferences where data collaboration is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableDataCollaboration Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDialInConferencing
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether users are able to join the meeting by dialing in with a public switched telephone network (PSTN) telephone.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow dial-in conferencing.
However, the user can take part in other conferences where dial-in conferencing is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableDialInConferencing Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFileTransfer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether file transfers to all the meeting participants are allowed during the meeting.
The default value is True.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow file transfers.
However, the user can take part in other conferences where file transfers are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableFileTransfer Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PFileTransfer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether peer-to-peer file transfers (that is, file transfers that do not involve all participants) are allowed during the meeting.
The default value is True.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to transfer files while the other user is not.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableP2PFileTransfer Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PRecording
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

If True, users will be able to record peer-to-peer conferencing sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to record the session while the other user is not.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableP2PRecording Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableP2PVideo
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

If True, users will be able to take part in peer-to-peer video conferencing sessions.
The default value is False.

This setting is enforced at the per-user level.
That means that one user in a peer-to-peer communication session might be allowed to use video the session while the other user is not.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableP2PVideo Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMeetingSize
**Below Content Applies To:** Lync Server 2010

Indicates the maximum number of people who are allowed to attend a meeting.
After the maximum number of participants has been reached, anyone else who tries to join the meeting will be turned away with the notice that the meeting is full.
The maximum number of participants can be any whole number between 2 and 250, inclusive; the default value is 250.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow more than the specified number of participants.
However, the user can take part in other conferences where additional participants are allowed.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates the maximum number of people who are allowed to attend a meeting.
After the maximum number of participants has been reached, anyone else who tries to join the meeting will be turned away with the notice that the meeting is full.
The number of participants specified in this value can be any 32-bit whole number (any value between 1 and 4,294,967,295), but the recommended size is between 2 and 250, inclusive; the default value is 250.

250 is the maximum for shared pool deployments, based on Microsoft testing.
For information about supporting meeting with more than 250 participants, see "Microsoft Lync Server 2010 Support for Large Meetings" at http://go.microsoft.com/fwlink/p/?linkId=242073 (http://go.microsoft.com/fwlink/p/?linkId=242073).

This setting applies to the user who organizes the conference: no conference created by a user affected by this policy will allow more than the specified number of participants.
However, the user can take part in other conferences where additional participants are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill MaxMeetingSize Description}}



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVideoConferenceResolution
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates the maximum resolution for meeting video.
Allowed values are:

CIF.
Common Intermediate Format (CIF) has a resolution of 352 pixels by 288 pixels.

VGA.
VGA has a resolution of 640 pixels by 480 pixels.

The default value is VGA.



**Below Content Applies To:** Skype for Business Online

{{Fill MaxVideoConferenceResolution Description}}



```yaml
Type: MaxVideoConferenceResolution
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill InMemory Description}}



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalUsersToRecordMeeting
**Below Content Applies To:** Lync Server 2010, Skype for Business Online

{{Fill AllowExternalUsersToRecordMeeting Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates whether external users (either anonymous users or federated users) are allowed to record the meeting.
The default value is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow external users to record conferences.
However, the user can take part in other conferences where external users are allowed to record meetings.

Note that this setting takes effect only if the AllowConferenceRecording property is set to True.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingBitRateKb
**Below Content Applies To:** Lync Server 2010

Bit rate (in kilobytes) used for application sharing.
The default value is 50000.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Bit rate (in kilobits) used for application sharing.
The default value is 50000.



**Below Content Applies To:** Skype for Business Online

{{Fill AppSharingBitRateKb Description}}



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioBitRateKb
**Below Content Applies To:** Lync Server 2010

Bit rate (in kilobytes) used for audio transmissions.
The audio bit rate can be any whole number between 20 and 200, inclusive; the default value is 200.



**Below Content Applies To:** Lync Server 2013

Bit rate (in kilobits) used for audio transmissions.
The audio bit rate can be any whole number between 20 and 200, inclusive; the default value is 200.



**Below Content Applies To:** Skype for Business Online

{{Fill AudioBitRateKb Description}}



**Below Content Applies To:** Skype for Business Server 2015

Bit rate (in kilobits) used for audio transmissions.
The audio bit rate can be any whole number between 20 and 200, inclusive; the default value is 200.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileTransferBitRateKb
**Below Content Applies To:** Lync Server 2010

Bit rate (in kilobytes) used for file transfers.
The default value is 50000.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Bit rate (in kilobits) used for file transfers.
The default value is 50000.



**Below Content Applies To:** Skype for Business Online

{{Fill FileTransferBitRateKb Description}}



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoBitRateKb
**Below Content Applies To:** Lync Server 2010

Bit rate (in kilobytes) used for video transmissions.
The default value is 50000.



**Below Content Applies To:** Lync Server 2013

Bit rate (in kilobits) used for video transmissions.
The default value is 50000.



**Below Content Applies To:** Skype for Business Online

{{Fill VideoBitRateKb Description}}



**Below Content Applies To:** Skype for Business Server 2015

Bit rate (in kilobits) used for video transmissions.
The default value is 50000.

This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLargeMeetings
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True, all online meetings are treated as "large meeting." With a large meeting, restrictions are placed on the number of notifications that are sent to participants as well as the size of the meeting roster that is transmitted by default.

The default value is False ($False).



**Below Content Applies To:** Skype for Business Online

{{Fill AllowLargeMeetings Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMultiView
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True (the default value) enables users to schedule conferences that allow multiview; that is, clients can receive multiple video streams during a given conference.
This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy can include multiview.
However, the user can participate in other conferences where multiview is allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowMultiView Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNonEnterpriseVoiceUsersToDialOut
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Indicates whether or users who have not been enabled for Enterprise Voice are allowed to join a conference using dial-out phoning.
With dial-out phoning the conferencing server will telephone the user; when the user answers the phone, he or she will be joined to the conference.

Note that dial-in conferencing is allowed even when this setting is False.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow users who have not been enabled for Enterprise Voice to join the conference via dial-out phoning.
However, the user can take part in other conferences where users who have not been enabled for Enterprise Voice can join via dial out.

The default value is False ($False).



**Below Content Applies To:** Skype for Business Online

{{Fill AllowNonEnterpriseVoiceUsersToDialOut Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSharedNotes
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True (the default value) any open OneNote notebooks linked to the conference will automatically be updated with information such as conference participants and details about content shared during the conference.



**Below Content Applies To:** Skype for Business Online

{{Fill AllowSharedNotes Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePowerPointAnnotations
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True ($True) users will not be able to add annotations to PowerPoint slides used in a conference.
However (depending on the value of the AllowAnnotations property), users will still have access to other whiteboarding features.
The default value is False, meaning that PowerPoint annotations are allowed.



**Below Content Applies To:** Skype for Business Online

{{Fill DisablePowerPointAnnotations Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMultiViewJoin
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True (the default value) clients will attempt to join a conference using multiview (which allows the client to receive multiple video streams during the conference).
This parameter will be ignored if multiview is not allowed in the conference being joined.
This setting is enforced at the per-user level, and for both conferences and peer-to-peer communication sessions.
That means that some users in a session might be allowed to have multiple video streams while other users in the same conference might not.



**Below Content Applies To:** Skype for Business Online

{{Fill EnableMultiViewJoin Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalReceiveVideoBitRateKb
**Below Content Applies To:** Lync Server 2013

Indicates the maximum allowed bitrate (in kilobytes per second) for all the video used in a conference; that is, the combined total for all the video streams.
The default value is 6000 kilobytes per second.



**Below Content Applies To:** Skype for Business Online

{{Fill TotalReceiveVideoBitRateKb Description}}



**Below Content Applies To:** Skype for Business Server 2015

Indicates the maximum allowed bitrate (in kilobytes per second) for all the video used in a conference; that is, the combined total for all the video streams.
The default value is 50000 kilobytes per second.



```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowFederatedParticipantJoinAsSameEnterprise
**Below Content Applies To:** Skype for Business Online

{{Fill AllowFederatedParticipantJoinAsSameEnterprise Description}}



**Below Content Applies To:** Skype for Business Server 2015

When set to True ($True), allows federated meeting participants to join the meeting as though they were internal users rather than external users.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfficeContent
**Below Content Applies To:** Skype for Business Online

{{Fill AllowOfficeContent Description}}



**Below Content Applies To:** Skype for Business Server 2015

When set to False, prevents users from using Office content in their conferences.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowQandA
**Below Content Applies To:** Skype for Business Online

{{Fill AllowQandA Description}}



**Below Content Applies To:** Skype for Business Server 2015

When set to True (the default value) the user will be able to include the Questions and Answers Manager in any online conference that he or she organizes.
When set to False, the user will be prohibited from including Questions and Answers Manager in any of his or her conferences.

This setting applies to the user who organizes the conference: if set to False, no conference created by a user affected by this policy will allow the use of the Questions and Answers Manager.
However, the user can make use of the Questions and Answers Manager in other conferences where polls are allowed.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationSharingMode
{{Fill ApplicationSharingMode Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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
{{Fill CloudRecordingServiceSupport Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Accepted values: NotSupported, Supported, Required
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOnlineMeetingPromptForLyncResources
**Below Content Applies To:** Skype for Business Online

{{Fill EnableOnlineMeetingPromptForLyncResources Description}}



**Below Content Applies To:** Skype for Business Server 2015

When set to True, users will be prompted any time they schedule a meeting in Outlook that includes invitees (such as a meeting room) that would benefit from having the meeting held online.
The default value is False.



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableReliableConferenceDeletion
{{Fill EnableReliableConferenceDeletion Description}}

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
**Below Content Applies To:** Skype for Business Online

{{Fill Tenant Description}}



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new conferencing policy is being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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
None.
New-CsConferencingPolicy does not accept pipelined input.

### None

###  
None.
The New-CsConferencingPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsConferencingPolicy creates a new instance of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

### System.Object

###  
The New-CsConferencingPolicy cmdlet creates a new instance of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f343bfcc-f296-4935-aa4c-94658dacace7(OCS.14).aspx)

[Get-CsConferencingPolicy]()

[Grant-CsConferencingPolicy]()

[Remove-CsConferencingPolicy]()

[Set-CsConferencingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/f343bfcc-f296-4935-aa4c-94658dacace7(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f343bfcc-f296-4935-aa4c-94658dacace7(OCS.16).aspx)

