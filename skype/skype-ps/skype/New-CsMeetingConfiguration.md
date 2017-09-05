---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsMeetingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new collection of meeting configuration settings at the site or service scope.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, in addition to controlling how (or even if) anonymous users and dial-in conferencing users can join these meetings.

**Below Content Applies To:** Lync Server 2013

Creates a new collection of meeting configuration settings at the site or service scope.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, in addition to controlling how (or even if) anonymous users and dial-in conferencing users can join these meetings.
Note that these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking the Meet Now option in Microsoft Lync.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new collection of meeting configuration settings at the site or service scope.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, in addition to controlling how (or even if) anonymous users and dial-in conferencing users can join these meetings.
Note that these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking the Meet Now option in Skype for Business.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsMeetingConfiguration [-Identity] <XdsIdentity> [-AdmitAnonymousUsersByDefault <Boolean>]
 [-AssignedConferenceTypeByDefault <Boolean>] [-DesignateAsPresenter <DesignateAsPresenter>]
 [-EnableAssignedConferenceType <Boolean>] [-PstnCallersBypassLobby <Boolean>] [-Force] [-InMemory]
 [-Tenant <Guid>] [-WhatIf] [-Confirm] [-CustomFooterText <String>] [-HelpURL <String>] [-LegalURL <String>]
 [-LogoURL <String>] [-RequireRoomSystemsAuthorization <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Meetings (also called "conferences") are an integral part of Microsoft Lync Server 2010.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create and to determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

The New-CsMeetingConfiguration cmdlet enables you to create new meeting configuration collections at either the site or the service scope (albeit only for the User Services).
Meeting settings cannot be created at the global scope because there is already a global collection of meeting settings.

Note that each site or service can only have, at most, one collection of meeting configuration settings.
If you try to create new settings for the Redmond site, and the Redmond site already has a collection of meeting configuration settings, then your command will fail.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsMeetingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsMeetingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Meetings (also called "conferences") are an integral part of Lync Server.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create and to determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

As noted previously, these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking Meet Now in Microsoft Lync.
When you create a meeting by clicking Meet Now, participant access is automatically open to all everyone, and anonymous users can join the meeting without having to wait in the lobby.
This will occur regardless of how you have configured your meeting settings using the CsMeetingConfiguration cmdlets.

The New-CsMeetingConfiguration cmdlet enables you to create new meeting configuration collections at either the site or the service scope (albeit only for the User Services).
Meeting settings cannot be created at the global scope because there is already a global collection of meeting settings.

Note that each site or service can only have, at most, one collection of meeting configuration settings.
If you try to create new settings for the Redmond site, and the Redmond site already has a collection of meeting configuration settings, then your command will fail.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsMeetingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsMeetingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Meetings (also called "conferences") are an integral part of Skype for Business Server 2015.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create and to determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

As noted previously, these settings only affect scheduled meetings; they do not affect ad-hoc meetings created by clicking Meet Now in Microsoft Lync.
When you create a meeting by clicking Meet Now, participant access is automatically open to all everyone, and anonymous users can join the meeting without having to wait in the lobby.
This will occur regardless of how you have configured your meeting settings using the CsMeetingConfiguration cmdlets.

The New-CsMeetingConfiguration cmdlet enables you to create new meeting configuration collections at either the site or the service scope (albeit only for the User Services).
Meeting settings cannot be created at the global scope because there is already a global collection of meeting settings.

Note that each site or service can only have, at most, one collection of meeting configuration settings.
If you try to create new settings for the Redmond site, and the Redmond site already has a collection of meeting configuration settings, then your command will fail.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsMeetingConfiguration -Identity site:Redmond -EnableAssignedConferenceType $False -AssignedConferenceTypeByDefault $False -AdmitAnonymousUsersByDefault $False
```

The preceding command creates a new collection of meeting configuration settings for the Redmond site (-Identity site:Redmond).
In addition to specifying the Identity, three optional parameters are included in this command: EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AdmitAnonymousUsersByDefault.
In all three cases, these parameters are set to False.
That means that public meeting types will be disabled; the default meeting type will not be set to public meeting; and anonymous users will not be admitted to meetings by default.

Note that this command will fail if a collection of meeting configuration settings with the Identity site:Redmond already exists.
That's because only one collection of meeting configuration settings can be applied to a given site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new collection of meeting configuration settings for the Redmond site (-Identity site:Redmond).
In addition to specifying the Identity, three optional parameters are included in this command: EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AdmitAnonymousUsersByDefault.
In all three cases, these parameters are set to False.
That means that public meeting types will be disabled; the default meeting type will not be set to public meeting; and anonymous users will not be admitted to meetings by default.

Note that this command will fail if a collection of meeting configuration settings with the Identity site:Redmond already exists.
That's because only one collection of meeting configuration settings can be applied to a given site.

New-CsMeetingConfiguration -Identity site:Redmond -EnableAssignedConferenceType $False -AssignedConferenceTypeByDefault $False -AdmitAnonymousUsersByDefault $False

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new collection of meeting configuration settings for the Redmond site (-Identity site:Redmond).
In addition to specifying the Identity, three optional parameters are included in this command: EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AdmitAnonymousUsersByDefault.
In all three cases, these parameters are set to False.
That means that public meeting types will be disabled; the default meeting type will not be set to public meeting; and anonymous users will not be admitted to meetings by default.

Note that this command will fail if a collection of meeting configuration settings with the Identity site:Redmond already exists.
That's because only one collection of meeting configuration settings can be applied to a given site.

New-CsMeetingConfiguration -Identity site:Redmond -EnableAssignedConferenceType $False -AssignedConferenceTypeByDefault $False -AdmitAnonymousUsersByDefault $False

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsMeetingConfiguration -Identity site:Redmond -InMemory
$x.EnableAssignedConferenceType = $False 
$x.AssignedConferenceTypeByDefault = $False 
$x.AdmitAnonymousUsersByDefault = $False
Set-CsMeetingConfiguration -Instance $x
```

Example 2 shows an alternate way to create a new collection of meeting configuration settings for the Redmond site; in this case, the settings are initially created in memory only, and are only later applied to the site.
To do this, the first command in the example uses New-CsMeetingConfiguration to create new meeting settings for the Redmond site.
The InMemory parameter is added to the end of the command to ensure that these new settings are created in memory only, and are not immediately applied to the Redmond site.
(Because these settings exist only in memory, they must be stored in a variable.
In this example, they are stored in a variable named $x.)

After these virtual meeting settings have been created, commands 2, 3, and 4 are used to modify properties of those settings (EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AndmitAnonymousUsersByDefault).
In the final command, Set-CsMeetingConfiguration and the Instance parameter are used to actually apply the virtual settings to the Redmond site.
Note that this final step is crucial: if you do not call Set-CsMeetingConfiguration, the new meeting configuration settings will never be applied to the Redmond site.
Instead, your virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 shows an alternate way to create a new collection of meeting configuration settings for the Redmond site; in this case, the settings are initially created in memory only, and are only later applied to the site.
To do this, the first command in the example uses New-CsMeetingConfiguration to create new meeting settings for the Redmond site.
The InMemory parameter is added to the end of the command to ensure that these new settings are created in memory only, and are not immediately applied to the Redmond site.
(Because these settings exist only in memory, they must be stored in a variable.
In this example, they are stored in a variable named $x.)

After these virtual meeting settings have been created, commands 2, 3, and 4 are used to modify properties of those settings (EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AdmitAnonymousUsersByDefault).
In the final command, Set-CsMeetingConfiguration and the Instance parameter are used to actually apply the virtual settings to the Redmond site.
Note that this final step is crucial: if you do not call Set-CsMeetingConfiguration, the new meeting configuration settings will never be applied to the Redmond site.
Instead, your virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsMeetingConfiguration -Identity site:Redmond -InMemory

$x.EnableAssignedConferenceType = $False

$x.AssignedConferenceTypeByDefault = $False

$x.AdmitAnonymousUsersByDefault = $False

Set-CsMeetingConfiguration -Instance $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 shows an alternate way to create a new collection of meeting configuration settings for the Redmond site; in this case, the settings are initially created in memory only, and are only later applied to the site.
To do this, the first command in the example uses the New-CsMeetingConfiguration cmdlet to create new meeting settings for the Redmond site.
The InMemory parameter is added to the end of the command to ensure that these new settings are created in memory only, and are not immediately applied to the Redmond site.
(Because these settings exist only in memory, they must be stored in a variable.
In this example, they are stored in a variable named $x.)

After these virtual meeting settings have been created, commands 2, 3, and 4 are used to modify properties of those settings (EnableAssignedConferenceType, AssignedConferenceTypeByDefault, and AdmitAnonymousUsersByDefault).
In the final command, the Set-CsMeetingConfiguration cmdlet and the Instance parameter are used to actually apply the virtual settings to the Redmond site.
Note that this final step is crucial: if you do not call the Set-CsMeetingConfiguration cmdlet, the new meeting configuration settings will never be applied to the Redmond site.
Instead, your virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsMeetingConfiguration -Identity site:Redmond -InMemory

$x.EnableAssignedConferenceType = $False

$x.AssignedConferenceTypeByDefault = $False

$x.AdmitAnonymousUsersByDefault = $False

Set-CsMeetingConfiguration -Instance $x

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the new collection of meeting configuration settings.
Meeting configuration settings can only be created at the site or service scope.
To create new settings at the site scope, use syntax similar to this: -Identity "site:Redmond".
To create new settings at the service scope, use syntax like this: -Identity "service:UserServer:atl-cs-001.litwareinc.com".

Note that the call to New-CsMeetingConfiguration will fail if the specified site or service already has a collection of meeting configuration settings.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the new collection of meeting configuration settings.
Meeting configuration settings can only be created at the site or service scope.
To create new settings at the site scope, use syntax similar to this: -Identity "site:Redmond".
To create new settings at the service scope, use syntax like this: -Identity "service:UserServer:atl-cs-001.litwareinc.com".

Note that the call to the New-CsMeetingConfiguration cmdlet will fail if the specified site or service already has a collection of meeting configuration settings.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdmitAnonymousUsersByDefault
Determines whether meetings will, by default, allow attendance by anonymous users (that is, unauthenticated users).
Set this value to True if you would like new meetings to allow for attendance by anonymous users by default.
Set this value to False if you would prefer that, by default, new meetings do not allow for attendance by anonymous users.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignateAsPresenter
Indicates which users (besides the meeting organizer) are automatically designated as presenters when they join a meeting.
Valid choices are: None; Company; and Everyone.
By default, DesignateAsPresenter is set to Company, meaning everyone in your organization has presenter rights the moment they join a meeting.

```yaml
Type: DesignateAsPresenter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnCallersBypassLobby
Indicates whether users dialing in over a public switched telephone network (PSTN) phone line should automatically be admitted to a meeting.
If set to True PSTN callers will automatically be admitted to the meeting.
If set to False PSTN callers will initially be routed to the conference lobby.
At that point, they will be put on hold until a conference presenter grants them access to the meeting.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
**Below Content Applies To:** Lync Server 2010

This parameter is not used with the on-premises version of Lync Server 2010.



**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which the new meeting configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new meeting configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireRoomSystemsAuthorization
**Below Content Applies To:** Lync Server 2013

When set to True ($True) all users must be authenticated before they can join a meeting using the Lync Room System.
The default value is False ($False).



**Below Content Applies To:** Skype for Business Server 2015

When set to True ($True) all users must be authenticated before they can join a meeting using the Skype for Business Room System.
The default value is False ($False).



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
New-CsMeetingConfiguration does not accept pipelined data.

###  
None.
The New-CsMeetingConfiguration cmdlet does not accept pipelined data.

## OUTPUTS

###  
New-CsMeetingConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

###  
The New-CsMeetingConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0043c9e7-83c6-4f07-88d2-7018c65c1654(OCS.14).aspx)

[Get-CsMeetingConfiguration]()

[Remove-CsMeetingConfiguration]()

[Set-CsMeetingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/0043c9e7-83c6-4f07-88d2-7018c65c1654(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0043c9e7-83c6-4f07-88d2-7018c65c1654(OCS.16).aspx)

