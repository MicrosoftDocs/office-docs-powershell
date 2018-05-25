---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsDialInConferencingDtmfConfiguration
schema: 2.0.0
---

# Remove-CsDialInConferencingDtmfConfiguration

## SYNOPSIS
Removes an existing collection of dual-tone multifrequency (DTMF) signaling settings used for dial-in conferencing.
DTMF enables users who dial in to a conference to control conference settings (such as muting and unmuting themselves or locking and unlocking the conference) by using the keypad on their telephone.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsDialInConferencingDtmfConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable/disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections like these by using a telephone keypad is known as dual-tone multifrequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.

When you install Skype for Business Server, a global collection of DTMF settings is created for you.
In addition to those global settings, you can use the `New-CSDialInConferencingDtmfConfiguration` cmdlet to create custom settings on a site-by-site basis.
Settings you create at the site scope can later be removed by using the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet.
When you remove DTMF settings applied at the site scope, users in the affected site will automatically fall under the jurisdiction of the global DTMF configuration settings.

You can also run the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet against the global settings.
If you do that, however, the global settings will not be removed; that's because you cannot remove the global DTMF settings.
Instead, the properties in the global settings will be reset to their default values.
For example, suppose you have modified the global settings to make the 4 key the mute/unmute key.
If you now run the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet against the global settings, the value of the mute/unmute key will be reset to the default value 6.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CSDialInConferencingDtmfConfiguration -Identity site:Redmond
```

Example 1 deletes the collection of DTMF configuration settings that has the Identity site:Redmond.


### -------------------------- Example 2 ------------------------
```
Get-CSDialInConferencingDtmfConfiguration -Filter "site:*" | Remove-CSDialInConferencingDtmfConfiguration
```

The command shown in Example 2 deletes all the DTMF settings that have been configured at the site scope.
To perform this task, the command first uses the `Get-CSDialInConferencingDtmfConfiguration` cmdlet and the Filter parameter to return a collection of all the DTMF settings that have been configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.
This filtered collection is then piped to the `Remove-CSDialInConferencingConfiguration` cmdlet, which removes each item in that collection.


### -------------------------- Example 3 ------------------------
```
Get-CSDialInConferencingDtmfConfiguration | Where-Object {$_.PrivateRollCallCommand -eq $Null} | Remove-CSDialInConferencingDtmfConfiguration
```

In Example 3, the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet is used to delete all the DTMF settings where the PrivateRollCallCommand property is equal to a null value.
(That is, where the private roll call command has been disabled.) To do this, the command first uses the `Get-CSDialInConferencingDtmfConfiguration` cmdlet to return a collection of all the DTMF settings currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where PrivateRollCallCommand is equal to a null value.
The filtered collection is then piped to the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the collection of DTMF settings to be removed.
To "remove" the global settings, use this syntax: `-Identity global`.
(As noted earlier, you cannot actually remove the global setting; all you can do is reset the properties to their default values.) To remove a collection configured at the site scope, use syntax similar to this: `-Identity site:Redmond`.
You cannot use wildcards when specifying an Identity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsDialInConferencingDtmfConfiguration` cmdlet accepts pipelined instances of the dial-in conference DTMF configuration object.

## OUTPUTS

###  
None.
Instead, the `Remove-CSDialInConferencingDtmfConfiguration` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingDtmfConfiguration](Get-CsDialInConferencingDtmfConfiguration.md)

[New-CsDialInConferencingDtmfConfiguration](New-CsDialInConferencingDtmfConfiguration.md)

[Set-CsDialInConferencingDtmfConfiguration](Set-CsDialInConferencingDtmfConfiguration.md)

