---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDialInConferencingDtmfConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing collection of dual-tone multifrequency (DTMF) signaling settings used for dial-in conferencing.
DTMF enables users who dial in to a conference to control conference settings (such as muting and unmuting themselves or locking and unlocking the conference) by using the keypad on their telephone.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an existing collection of dual-tone multifrequency (DTMF) signaling settings used for dial-in conferencing.
DTMF enables users who dial in to a conference to control conference settings (such as muting and unmuting themselves or locking and unlocking the conference) by using the keypad on their telephone.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDialInConferencingDtmfConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable/disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections like these by using a telephone keypad is known as dual-tone multifrequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.

When you install Lync Server 2010, a global collection of DTMF settings is created for you.
In addition to those global settings, you can use the New-CSDialInConferencingDtmfConfiguration cmdlet to create custom settings on a site-by-site basis.
Settings you create at the site scope can later be removed by using the Remove-CSDialInConferencingDtmfConfiguration cmdlet.
When you remove DTMF settings applied at the site scope, users in the affected site will automatically fall under the jurisdiction of the global DTMF configuration settings.

You can also run Remove-CSDialInConferencingDtmfConfiguration against the global settings.
If you do that, however, the global settings will not be removed; that's because you cannot remove the global DTMF settings.
Instead, the properties in the global settings will be reset to their default values.
For example, suppose you have modified the global settings to make the 4 key the mute/unmute key.
If you now run Remove-CSDialInConferencingDtmfConfiguration against the global settings, the value of the mute/unmute key will be reset to the default value 6.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDialInConferencingDtmfConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDialInConferencingDtmfConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable/disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections like these by using a telephone keypad is known as dual-tone multifrequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.

When you install Lync Server, a global collection of DTMF settings is created for you.
In addition to those global settings, you can use the New-CSDialInConferencingDtmfConfiguration cmdlet to create custom settings on a site-by-site basis.
Settings you create at the site scope can later be removed by using the Remove-CSDialInConferencingDtmfConfiguration cmdlet.
When you remove DTMF settings applied at the site scope, users in the affected site will automatically fall under the jurisdiction of the global DTMF configuration settings.

You can also run Remove-CSDialInConferencingDtmfConfiguration against the global settings.
If you do that, however, the global settings will not be removed; that's because you cannot remove the global DTMF settings.
Instead, the properties in the global settings will be reset to their default values.
For example, suppose you have modified the global settings to make the 4 key the mute/unmute key.
If you now run Remove-CSDialInConferencingDtmfConfiguration against the global settings, the value of the mute/unmute key will be reset to the default value 6.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDialInConferencingDtmfConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDialInConferencingDtmfConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable/disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections like these by using a telephone keypad is known as dual-tone multifrequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.

When you install Skype for Business Server 2015, a global collection of DTMF settings is created for you.
In addition to those global settings, you can use the New-CSDialInConferencingDtmfConfiguration cmdlet to create custom settings on a site-by-site basis.
Settings you create at the site scope can later be removed by using the Remove-CSDialInConferencingDtmfConfiguration cmdlet.
When you remove DTMF settings applied at the site scope, users in the affected site will automatically fall under the jurisdiction of the global DTMF configuration settings.

You can also run the Remove-CSDialInConferencingDtmfConfiguration cmdlet against the global settings.
If you do that, however, the global settings will not be removed; that's because you cannot remove the global DTMF settings.
Instead, the properties in the global settings will be reset to their default values.
For example, suppose you have modified the global settings to make the 4 key the mute/unmute key.
If you now run the Remove-CSDialInConferencingDtmfConfiguration cmdlet against the global settings, the value of the mute/unmute key will be reset to the default value 6.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CSDialInConferencingDtmfConfiguration -Identity site:Redmond
```

The preceding command deletes the collection of DTMF configuration settings that has the Identity site:Redmond.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the collection of DTMF configuration settings that has the Identity site:Redmond.

Remove-CSDialInConferencingDtmfConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the collection of DTMF configuration settings that has the Identity site:Redmond.

Remove-CSDialInConferencingDtmfConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CSDialInConferencingDtmfConfiguration -Filter "site:*" | Remove-CSDialInConferencingDtmfConfiguration
```

The command shown in Example 2 deletes all the DTMF settings that have been configured at the site scope.
To perform this task, the command first uses Get-CSDialInConferencingDtmfConfiguration and the Filter parameter to return a collection of all the DTMF settings that have been configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.
This filtered collection is then piped to Remove-CSDialInConferencingConfiguration, which removes each item in that collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 deletes all the DTMF settings that have been configured at the site scope.
To perform this task, the command first uses Get-CSDialInConferencingDtmfConfiguration and the Filter parameter to return a collection of all the DTMF settings that have been configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.
This filtered collection is then piped to Remove-CSDialInConferencingConfiguration, which removes each item in that collection.

Get-CSDialInConferencingDtmfConfiguration -Filter "site:*" | Remove-CSDialInConferencingDtmfConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 deletes all the DTMF settings that have been configured at the site scope.
To perform this task, the command first uses the Get-CSDialInConferencingDtmfConfiguration cmdlet and the Filter parameter to return a collection of all the DTMF settings that have been configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.
This filtered collection is then piped to the Remove-CSDialInConferencingConfiguration cmdlet, which removes each item in that collection.

Get-CSDialInConferencingDtmfConfiguration -Filter "site:*" | Remove-CSDialInConferencingDtmfConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CSDialInConferencingDtmfConfiguration | Where-Object {$_.PrivateRollCallCommand -eq $Null} | Remove-CSDialInConferencingDtmfConfiguration
```

In Example 3, Remove-CSDialInConferencingDtmfConfiguration is used to delete all the DTMF settings where the PrivateRollCallCommand property is equal to a null value.
(That is, where the private roll call command has been disabled.) To do this, the command first uses Get-CSDialInConferencingDtmfConfiguration to return a collection of all the DTMF settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where PrivateRollCallCommand is equal to a null value.
The filtered collection is then piped to Remove-CSDialInConferencingDtmfConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, Remove-CSDialInConferencingDtmfConfiguration is used to delete all the DTMF settings where the PrivateRollCallCommand property is equal to a null value.
(That is, where the private roll call command has been disabled.) To do this, the command first uses Get-CSDialInConferencingDtmfConfiguration to return a collection of all the DTMF settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where PrivateRollCallCommand is equal to a null value.
The filtered collection is then piped to Remove-CSDialInConferencingDtmfConfiguration, which deletes each item in the collection.

Get-CSDialInConferencingDtmfConfiguration | Where-Object {$_.PrivateRollCallCommand -eq $Null} | Remove-CSDialInConferencingDtmfConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Remove-CSDialInConferencingDtmfConfiguration cmdlet is used to delete all the DTMF settings where the PrivateRollCallCommand property is equal to a null value.
(That is, where the private roll call command has been disabled.) To do this, the command first uses the Get-CSDialInConferencingDtmfConfiguration cmdlet to return a collection of all the DTMF settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where PrivateRollCallCommand is equal to a null value.
The filtered collection is then piped to the Remove-CSDialInConferencingDtmfConfiguration cmdlet, which deletes each item in the collection.

Get-CSDialInConferencingDtmfConfiguration | Where-Object {$_.PrivateRollCallCommand -eq $Null} | Remove-CSDialInConferencingDtmfConfiguration

## PARAMETERS

### -Identity
Unique identifier for the collection of DTMF settings to be removed.
To "remove" the global settings, use this syntax: -Identity global.
(As noted earlier, you cannot actually remove the global setting; all you can do is reset the properties to their default values.) To remove a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.
Remove-CsDialInConferencingDtmfConfiguration accepts pipelined instances of the dial-in conference DTMF configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.
The Remove-CsDialInConferencingDtmfConfiguration cmdlet accepts pipelined instances of the dial-in conference DTMF configuration object.

## OUTPUTS

###  
None.
Instead, Remove-CSDialInConferencingDtmfConfiguration deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.

###  
None.
Instead, the Remove-CSDialInConferencingDtmfConfiguration cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3cd6313c-fd0a-4fb2-bacd-b1bdf2a59430(OCS.14).aspx)

[Get-CsDialInConferencingDtmfConfiguration]()

[New-CsDialInConferencingDtmfConfiguration]()

[Set-CsDialInConferencingDtmfConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/3cd6313c-fd0a-4fb2-bacd-b1bdf2a59430(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3cd6313c-fd0a-4fb2-bacd-b1bdf2a59430(OCS.16).aspx)

