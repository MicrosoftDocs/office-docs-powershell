---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Set-CsMeetingConfiguration
schema: 2.0.0
---

# Set-CsMeetingConfiguration

## SYNOPSIS
`Set-CsMeetingConfiguration` enables you to modify the meeting configuration settings currently in use in your organization.
Meeting configuration settings help dictate the type of meetings (also called conferences) that users can create, and also control how (or even if) anonymous users and dial-in conferencing users can join these meetings.
Note that these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking the Meet Now option in Skype for Business.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsMeetingConfiguration [[-Identity] <XdsIdentity>] [-AdmitAnonymousUsersByDefault <Boolean>]
 [-AssignedConferenceTypeByDefault <Boolean>] [-DesignateAsPresenter <DesignateAsPresenter>]
 [-EnableAssignedConferenceType <Boolean>] [-PstnCallersBypassLobby <Boolean>] [-Force] [-Tenant <Guid>]
 [-WhatIf] [-Confirm] [-CustomFooterText <String>] [-HelpURL <String>] [-LegalURL <String>] [-LogoURL <String>]
 [-RequireRoomSystemsAuthorization <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsMeetingConfiguration [-Instance <PSObject>] [-AdmitAnonymousUsersByDefault <Boolean>]
 [-AssignedConferenceTypeByDefault <Boolean>] [-DesignateAsPresenter <DesignateAsPresenter>]
 [-EnableAssignedConferenceType <Boolean>] [-PstnCallersBypassLobby <Boolean>] [-Force] [-Tenant <Guid>]
 [-WhatIf] [-Confirm] [-CustomFooterText <String>] [-HelpURL <String>] [-LegalURL <String>] [-LogoURL <String>]
 [-RequireRoomSystemsAuthorization <Boolean>] [<CommonParameters>]
```

###  (Default)
```
Set-CsMeetingConfiguration [[-Identity] <Object>] [-AdmitAnonymousUsersByDefault <Object>]
 [-AllowCloudRecordingService <Object>] [-AllowConferenceRecording <Object>]
 [-AssignedConferenceTypeByDefault <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-CustomFooterText <Object>] [-DesignateAsPresenter <Object>] [-EnableAssignedConferenceType <Object>]
 [-EnableMeetingReport <Object>] [-Force] [-HelpURL <Object>] [-Instance <Object>] [-LegalURL <Object>]
 [-LogoURL <Object>] [-PstnCallersBypassLobby <Object>] [-RequireRoomSystemsAuthorization <Object>]
 [-Tenant <Object>] [-UserUriFormatForStUser <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Meetings (also called conferences) are an integral part of Skype for Business Server.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create and to determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

As noted previously, these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking Meet Now in Microsoft Lync.
When you create a meeting by clicking Meet Now, participant access is automatically open to all everyone and anonymous users can join the meeting without having to wait in the lobby.
This will occur regardless of how you have configured your meeting settings using the CsMeetingConfiguration cmdlets.

The `Set-CsMeetingConfiguration` cmdlet enables you to modify any of the meeting configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsMeetingConfiguration -Identity site:Redmond -DesignateAsPresenter Everyone
```

The command shown in Example 1 modifies the meeting configuration settings assigned to the Redmond site (-Identity site:Redmond).
In this case, the value of the DesignateAsPresenter property is set to Everyone.


### -------------------------- Example 2 ------------------------
```
Get-CsMeetingConfiguration | Set-CsMeetingConfiguration -DesignateAsPresenter Everyone
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the value of the DesignateAsPresenter property is modified for all the meeting configuration settings in use in the organization.
To do this, the `Get-CsMeetingConfiguration` cmdlet is called without any parameters in order to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to the `Set-CsMeetingConfiguration` cmdlet, which modifies the DesignateAsPresenter property for each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $False} | Set-CsMeetingConfiguration -PstnCallersBypassLobby $True
```

In Example 3, all the meeting configuration settings that do not allow the default admission of anonymous users are modified.
To perform this task, the command first calls the `Get-CsMeetingConfiguration` cmdlet to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the AdmitAnonymousUsersByDefault property is equal to False.
In turn, this filtered collection is piped to the `Set-CsMeetingConfiguration` cmdlet, which takes each item in the collection and sets the PstnCallersBypassLobby property to True.


## PARAMETERS

### -Identity
Indicates the unique identifier for the collection of meeting configuration settings you want to modify.
To refer to the global settings, use this syntax: `-Identity global`.
To refer to a collection configured at the site scope, use syntax similar to this: `-Identity "site:Redmond"`.
Settings configured at the service scope can be referenced using syntax like this: `-Identity "service:UserServer:atl-cs-001.litwareinc.com"`.

If this parameter is not specified, then the `Set-CsMeetingConfiguration` cmdlet will modify the global settings.


```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AdmitAnonymousUsersByDefault
Determines whether meetings will, by default, allow attendance by anonymous users (that is, by unauthenticated users).
Set this value to True if you would like new meetings to allow for attendance by anonymous users by default.
Set this value to False if you would prefer that, by default, new meetings do not allow for attendance by anonymous users.
The default value is True.

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

### -AssignedConferenceTypeByDefault
Determines whether new meetings will be configured, by default, as public meetings.
Set this value to True to use public meetings by default; set this value to False to use private meetings by default.
The default value is True.

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

### -DesignateAsPresenter
Indicates which users (besides the meeting organizer) are automatically designated as presenters when they join a meeting.
Valid choices are: None; Company and Everyone.
By default, DesignateAsPresenter is set to Company, meaning everyone in your organization will have presenter rights the moment they join a meeting.

```yaml
Type: DesignateAsPresenter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAssignedConferenceType
Indicates whether users are allowed to schedule public meetings.
With a public meeting, the conference ID and the meeting link remain consistent each time the meeting is held.
With a private meeting, the conference ID and meeting link change from meeting to meeting.
The default value is True.

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

### -PstnCallersBypassLobby
Indicates whether users dialing in over a public switched telephone network (PSTN) phone line should automatically be admitted to a meeting.
If set to True ($True), PSTN callers will automatically be admitted to the meeting.
If set to False ($False), then PSTN callers will initially be routed to the conference lobby.
At that point, they will have to wait, on hold, until a conference presenter grants them access to the meeting.
The default value is True.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Tenant
Globally unique identifier (GUID) of the Office 365 tenant account whose meeting configuration settings are being modified.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.


```yaml
Type: Guid
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
Describes what would happen if you executed the command without actually executing the command.

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
Prompts you for confirmation before executing the command.

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

### -CustomFooterText
Text to be used on custom meeting invitations.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HelpURL
URL to a website where users can obtain assistance on joining the meeting.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegalURL
URL to a website containing legal information and meeting disclaimers.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogoURL
URL for the image to be used on custom meeting invitations.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireRoomSystemsAuthorization
When set to True ($True) all users must be authenticated before they can join a meeting using the Skype for Business Room System.
The default value is False ($False).


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

### -AllowCloudRecordingService
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

### -AllowConferenceRecording
Determines whether or not users are allowed to record conference proceedings.
The default value is True.

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

### -EnableMeetingReport
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

### -UserUriFormatForStUser
PARAMVALUE: String

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
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.
The `Set-CsMeetingConfiguration` cmdlet accepts pipelined instances of the meeting configuration object.

## OUTPUTS

###  
The `Set-CsMeetingConfiguration` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsMeetingConfiguration](Get-CsMeetingConfiguration.md)

[New-CsMeetingConfiguration](New-CsMeetingConfiguration.md)

[Remove-CsMeetingConfiguration](Remove-CsMeetingConfiguration.md)

[Update-CsTenantMeetingUrl](Update-CsTenantMeetingUrl.md)
