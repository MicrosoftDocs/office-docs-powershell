---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsUserServicesConfiguration
schema: 2.0.0
---

# New-CsUserServicesConfiguration

## SYNOPSIS
Creates a new collection of User Services configuration settings.
The User Services service is used to help maintain presence information and manage conferencing.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsUserServicesConfiguration [-Identity] <XdsIdentity> [-AnonymousUserGracePeriod <TimeSpan>]
 [-DeactivationGracePeriod <TimeSpan>] [-DefaultSubscriptionExpiration <Int64>]
 [-MaintenanceTimeOfDay <DateTime>] [-MaxContacts <UInt16>] [-MaxPersonalNotes <UInt32>]
 [-MaxScheduledMeetingsPerOrganizer <UInt32>] [-MaxSubscriptionExpiration <Int64>] [-MaxSubscriptions <UInt16>]
 [-SubscribeToCollapsedDG <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-MinSubscriptionExpiration <Int64>] [-PresenceProviders <PSListModifier>]
 [-AllowNonRoomSystemNotification <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services configuration settings at the global, site and service scope.
(Note that the only service that can host User Services configuration settings is the User Services service itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time and the length of time that a given meeting can remain active.

The `New-CsUserServicesConfiguration` cmdlet provides a way for administrators to create a new collection of User Services configuration settings at the site or service scope.
(New collections cannot be created at the global scope.) Note that any given site or service can only have, at most, a single collection of User Services configuration settings.
Your command will fail if you try to create settings for, say, the Redmond site and that site already hosts a collection of User Services configuration settings.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsUserServicesConfiguration -Identity site:Redmond -MaxContacts 500 -MaintenanceTimeOfDay "11:00 PM"
```

The command shown in Example 1 creates a new collection of User Services configuration settings for the Redmond site (`-Identity site:Redmond`).
In addition to specifying the Identity, the command also sets the maximum number of contacts (-MaxContacts 500) and the time of day when maintenance occurs (`-MaintenanceTimeOfDay "11:00 PM"`).
Note that this command will fail if User Services settings have already been configured for the Redmond site.
That is because you are limited to one collection of settings per site.


### -------------------------- Example 2 ------------------------
```
$x = New-CsUserServicesConfiguration -Identity site:Redmond -InMemory

$x.MaxContacts = 500

$x.MaintenanceTimeOfDay = "11:00 PM"

Set-CsUserServicesConfiguration -Instance $x
```

Example 2 also creates a new collection of User Services configuration settings for the Redmond site.
However, in this example the collection is initially created in memory and is only later applied to the Redmond site.
To do this, the first command in the example uses the `New-CsUserServicesConfiguration` cmdlet and the InMemory parameter to create a new collection (with the Identity site:Redmond) that exists only in memory.
Because this collection exists only in memory, the User Services object must be stored in a variable.
In this case, that's a variable named $x.

After the virtual collection has been created, commands 2 and 3 are used to modify the values of the MaxContacts and the MaintenanceTimeOfDay properties.
The final command in the example then uses the `Set-CsUserServicesConfiguration` cmdlet to transform these virtual settings into an actual collection of User Services configuration settings applied to the Redmond site.
This final step is crucial: if you do not call the `Set-CsUserServicesConfiguration` cmdlet no settings will be applied to the Redmond site and your virtual settings will disappear as soon as you terminate your Windows PowerShell session or delete the variable $x.


## PARAMETERS

### -Identity
Unique identifier for the User Services configuration settings to be created.
To create settings at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To create settings at the service level, use syntax like this:

`-Identity service:UserServer:atl-cs-001.litwareinc.com`


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

### -AnonymousUserGracePeriod
Represents the amount of time an anonymous (unauthenticated) user can remain in a meeting without an authenticated user being present in that same meeting.
For example, if this value is set to 15 minutes an anonymous user can stay in the meeting for, at most, 15 minutes before an authenticated user must join.
If an authenticated user does not join before the grace period expires then the anonymous user will be removed from the meeting.
This setting applies to both scheduled meetings and to ad-hoc meetings created by clicking Meet Now in Microsoft Lync.

The AnonymousUserGracePeriod must be specified using the following format: days.hours:minutes:seconds (for example, 0.00:30:00 for 30 minutes).
The grace period can be set to any value between 0 second and 1 day; the default value is 90 minutes (01:30:00).


```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeactivationGracePeriod
The maximum amount of time that a meeting can remain active.
This value must be specified using the following format: days.hours:minutes:seconds.
For example, to enable a meeting to last for 60 hours you would use this format: 2.12:00:00 (2 days.
12 hours: 00 minutes: 00 seconds.)

The DeactivationGracePeriod must be between 8 hours and 365 days, inclusive.
The default value is 1 day (1.00:00:00).

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultSubscriptionExpiration
Subscriptions are created any time a user makes a request for data such as presence information.
When the request is made, the user (or, more correctly, the user's client application) can request the length of time that the subscription remains valid before it must be renewed.
If no such request is issued, then the subscription is set to the value specified by the DefaultSubscriptionExpiration property.

The default subscription time must be expressed as an integer value between 300 seconds (5 minutes) and 86400 seconds (24 hours), inclusive.
The default value is 28800 seconds (8 hours).

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaintenanceTimeOfDay
Indicates the time of day when regularly-scheduled database maintenance (such as the purging of outdated records) takes place.
This value must be specified as a date-time value.
You can use either the 24-hour format (for example, "14:00") or the 12-hour format (for example, "2:00 PM").

The default value for MaintenanceTimeOfDay is 1:00 AM (01:00:00).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxContacts
The maximum number of contacts a user can have; the default value is 250.
The MaxContacts property represents the absolute maximum number of contacts a user can have.
However, you can use the CsClientPolicy cmdlets to limit certain users to a maximum number of contacts lower than the value of MaxContacts.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPersonalNotes
Indicates the maximum number of personal notes that are stored in the user's note history.
By default, the last 3 personal notes are maintained in the note history.
The maximum number of notes that can be maintained in the history is 10.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxScheduledMeetingsPerOrganizer
The maximum number of meetings that a single user can serve as organizer for at a given time.
The default value is 1000.
This means that, if a user is already the organizer for 1000 meetings, his or her attempt to schedule a new meeting (meeting number 1001) will fail.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSubscriptionExpiration
Subscriptions are created any time a user makes a request for data such as presence information.
When the request is made, the user (or, more correctly, the user's client application) can request the length of time that the subscription remains valid before it must be renewed.
The MaxSubscriptionExpiration property represents the maximum amount of time that clients can be granted.
For example, if the maximum time is set to 28800 seconds and a client requests a timeout interval of 86400 seconds, the client will be given the maximum allowed expiration period: 28800 seconds.

The maximum subscription time must be expressed as an integer value between 300 seconds (5 minutes) and 86400 seconds (24 hours), inclusive.
The default value is 43200 seconds (12 hours).

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSubscriptions
The maximum number of SIP subscribe dialogs that a user can have open at any one time.
A subscribe dialog represents a request for SIP resources.
The default value is 200.


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscribeToCollapsedDG
If set to True (the default value), client applications will be allowed to subscribe to distribution groups that are not currently expanded in the Contacts list.
This enables the client to maintain up-to-minute presence information for each member of the group.
If set to False, client applications will not be allowed to subscribe to "collapsed" groups.

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
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -MinSubscriptionExpiration
Subscriptions are created any time a user makes a request for data such as presence information.
When the request is made, the user (or, more correctly, the user's client application) can request the length of time that the subscription remains valid before it must be renewed.
The MinSubscriptionExpiration property represents the minimum amount of time that clients can be granted.
For example, if the minimum time is set to 1200 seconds and a client requests a timeout interval of 200 seconds, the client will be given the minimum allowed expiration period: 1200 seconds.

The minimum subscription time must be expressed as an integer value between 300 seconds (5 minutes) and 86400 seconds (24 hours), inclusive.
The default value is 1200 seconds (20 minutes).


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PresenceProviders
Collection of presence providers for the new User Service configuration settings.
Presence providers are best added to a collection of User Service configuration settings by using the `New-CsPresenceProvider` cmdlet.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNonRoomSystemNotification
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
The `New-CsUserServicesConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsUserServicesConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

## NOTES

## RELATED LINKS

[Get-CsUserServicesConfiguration](Get-CsUserServicesConfiguration.md)

[Remove-CsUserServicesConfiguration](Remove-CsUserServicesConfiguration.md)

[Set-CsUserServicesConfiguration](Set-CsUserServicesConfiguration.md)
