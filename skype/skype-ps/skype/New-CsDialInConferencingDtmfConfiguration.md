---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsDialInConferencingDtmfConfiguration
schema: 2.0.0
---

# New-CsDialInConferencingDtmfConfiguration

## SYNOPSIS

Creates a new collection of dual-tone multifrequency (DTMF) signaling settings used for dial-in conferencing.
DTMF enables users who dial in to a conference to control conference settings (such as muting and unmuting themselves or locking and unlocking the conference) by using the keypad on their telephone.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDialInConferencingDtmfConfiguration [-Identity] <XdsIdentity> [-AdmitAll <String>]
 [-AudienceMuteCommand <String>] [-CommandCharacter <String>] [-EnableDisableAnnouncementsCommand <String>]
 [-HelpCommand <String>] [-LockUnlockConferenceCommand <String>] [-MuteUnmuteCommand <String>]
 [-PrivateRollCallCommand <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-OperatorLineUri <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable or disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections like these using a telephone keypad is known as dual-tone multi-frequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.

When you install Skype for Business Server, a global collection of DTMF settings is created for you.
In addition to those global settings, you can use the New-CSDialInConferencingDtmfConfiguration cmdlet to create custom settings on a site-by-site basis.
For example, you can create a new collection of settings for the Redmond site (and only the Redmond site) that uses the 4 key instead of the 6 key as the mute/unmute key.
Note that any settings you configure at the site scope take precedence over the settings configured at the global scope.
As a result, users in the Redmond site will use the 4 key as the mute/unmute key even though the global settings use the 6 key for muting and unmuting.

You can have only one collection of DTMF settings and one global collection per site.
For example, suppose you already have a collection with the Identity site:Redmond and you then try to run this command:

`New- CSDialInConferencingDtmfConfiguration -Identity site:Redmond`

That command will fail, because the site:Redmond collection already exists.
If you want to modify the settings for the Redmond site, either use the Set-CSDialInConferencingDtmfConfiguration cmdlet, or remove the existing collection and then create a new collection that uses the Identity site:Redmond.

When configuring values for the DTMF commands, keep two things in mind.
First, you can only use the numeric keys 0 through 9 and the asterisk (*); any other keys that might be found on your keypad (such as the # key) are not allowed.
(With one exception: the CommandCharacter key accepts only the * key or the # key.) Second, commands must be assigned unique keys; for example, the 4 key cannot be used both to mute and unmute yourself and to lock and unlock a conference.
That means that, when modifying the keys assigned to a command, you might need to swap the keys used by two different commands.
For example, if you want to assign the 4 key to EnableDisableAnnouncementsCommand (default value: 9), then you should, in the same command, assign the 9 key to AudienceMuteCommand.

To disable a command, set its value to Null ($Null).



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CSDialInConferencingDtmfConfiguration -Identity site:Redmond -MuteUnmuteCommand 4 -AudienceMuteCommand 6
```

The command shown in Example 1 creates a new set of DTMF configuration settings for the Redmond site.
In this example, the MuteUnmuteCommand property is set to 4 and the AudienceMuteCommand property is set to 6.



### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CSDialInConferencingDtmfConfiguration -Identity site:Redmond -AdmitAll $Null
```

Example 2 creates a new set of DTMF configuration settings for the Redmond site.
In this example, the AdmitAll property is disabled; that's done by using the AdmitAll parameter and setting the parameter value to null.


### -------------------------- EXAMPLE 3 --------------------------
```
$x = New-CSDialInConferencingDtmfConfiguration -Identity site:Redmond -InMemory

$x.AdmitAll = $Null

$x.MuteUnmuteCommand = 4

$x.AudienceMuteCommand = 6

Set-CSDialInConferencingDtmfConfiguration -Instance $x
```

Example 3 shows how you can use the InMemory parameter to create an in-memory-only instance of a DTMF configuration settings collection, modify those settings, and then use the Set-CSDialInConferencingDtmfConfiguration cmdlet to create an actual collection with the Identity site:Redmond.
To do this, the first command in the example creates a new in-memory-only instance of a DTMF configuration settings collection, storing that instance in a variable named $x.
These settings will exist only in memory; if you close Windows PowerShell or delete the variable $x the settings will disappear and will never be applied to the Redmond site.

The next 3 commands modify properties of this "virtual" DTMF settings collection: commands 2, 3, and 4 assign new values to AdmitAll, MuteUnmuteCommand, and AudienceMuteCommand, respectively.
The final command then uses the Set-CSDialInConferencingDtmfConfiguration cmdlet and the Instance parameter to transform the virtual settings stored in $x into an actual collection of settings configured for the Redmond site.



## PARAMETERS

### -Identity
Unique identifier to be assigned to the new collection of DTMF configuration settings.
Because you can only create new collections at the site scope, the Identity will always be the prefix "site:" followed by the site name; for example "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdmitAll
Indicates the key to be pressed in order to allow all the users in the lobby to immediately join the conference.
The default value is 8.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudienceMuteCommand
Indicates the key a presenter can press to mute or unmute everyone else in the conference (that is, everyone other than the presenter will be muted or unmuted).
The default key is 4.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommandCharacter
Indicates the key to be pressed at the beginning of a command.
The default key is the asterisk (*).
The only other allowed value is #.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDisableAnnouncementsCommand
Indicates the key to be pressed to enable or disable announcements each time someone joins or leaves the conference.
The default key is 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HelpCommand
Indicates the key to be pressed in order to privately play a description of all the DTMF commands.
The default key is 1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockUnlockConferenceCommand
Indicates the key to be pressed to lock or unlock a conference.
If a conference is locked, then no new participants will be allowed to join that conference, at least not until the conference has been unlocked.
The default key is 7.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MuteUnmuteCommand

Indicates the key to be pressed to mute or unmute yourself; the same key is used to toggle back and forth between muting and unmuting.
The default key is 6.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrivateRollCallCommand
Indicates the key to be pressed to privately play the name of each conference participant.
The default key is 3.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### -OperatorLineUri
Phone number that the dial-in conferencing auto-attendant will connect a PSTN user to any time that user presses *0 on their telephone keypad.
Pressing *0 is designed to connect dial-in conferencing users to operator assistance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsDialInConferencingDtmfConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingDtmfConfiguration](Get-CsDialInConferencingDtmfConfiguration.md)

[Remove-CsDialInConferencingDtmfConfiguration](Remove-CsDialInConferencingDtmfConfiguration.md)

[Set-CsDialInConferencingDtmfConfiguration](Set-CsDialInConferencingDtmfConfiguration.md)


