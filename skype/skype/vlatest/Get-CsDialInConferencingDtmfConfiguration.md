---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsDialInConferencingDtmfConfiguration

## SYNOPSIS
Returns the dual-tone multifrequency (DTMF) signaling settings used for dial-in conferencing.
DTMF enables users who dial in to a conference to control conference settings (such as muting and unmuting themselves or locking and unlocking the conference) by using the keypad on their telephone.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDialInConferencingDtmfConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDialInConferencingDtmfConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to join conferences by dialing in over the telephone.
Dial-in users are not able to view video or exchange instant messages with other conference attendees, but they are able to fully participate in the audio portion of the meeting.

In addition to being able to join a conference, users are also able to manage selected portions of that conference by using their telephone keypad.
(The specific conference settings users can and cannot manage depend on whether or not the user is a presenter.) For example, by default users can press the 6 key on their keypad to mute or unmute themselves.
Participants can privately play the names of all the other people attending the meeting, while presenters can do such things as mute and unmute all the meeting participants and enable/disable the announcement that is played any time someone joins or leaves a conference.

The ability to make selections using a telephone keypad is known as dual-tone multifrequency (DTMF) signaling: if you have ever dialed a phone number and been instructed to do something along the order of "Press 1 for English or press 2 for Spanish," then you have used DTMF signaling.
The Get-CsDialInConferencingDtmfConfiguration cmdlet enables you to retrieve a list of all the available DTMF commands as well as the keys used to carry out those commands.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDialInConferencingDtmfConfiguration -Identity site:Redmond
```

The command show in Example 1 returns the DTMF settings for the Redmond site.

### -------------------------- Example 2 --------------------------
```
Get-CsDialInConferencingDtmfConfiguration | Select-Object Identity, HelpCommand
```

Example 2 returns a collection of all the DTMF settings, and then, for each item in the collection, displays the value of the key to be pressed in order to privately play a description of DTMF commands.
To do this, the Get-CsDialInConferencingDtmfConfiguration cmdlet is called in order to return a collection of all the property values for all the DTMF settings currently in use in the organization.
That collection is then piped to the Select-Object cmdlet, which picks two properties (Identity and HelpCommand) to be displayed on the screen.

### -------------------------- Example 3 --------------------------
```
Get-CsDialInConferencingDtmfConfiguration -Filter "site:*"
```

The command shown in Example 3 returns all the DTMF settings that have been configured at the site scope.
This is done by including the Filter parameter and the filter value "site:*".
That filter value limits the returned data to settings that have an Identity that begins with the characters "site:".
By definition, those are settings configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsDialInConferencingDtmfConfiguration | Where-Object {$_.AdmitAll -ne 8}
```

Example 4 returns all the DTMF configuration settings where the AdmitAll property is not equal to 8 (the default value).
To accomplish this task, the Get-CsDialInConferencingDtmfConfiguration cmdlet is first called without any parameters in order to return a collection of all the DTMF settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AdmitAll property is not equal to 8.


## PARAMETERS

### -Identity
Indicates the unique identifier for the collection of DTMF settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then use the Filter parameter instead.

If this parameter is not specified, then the Get-CsDialInConferencingDtmfConfiguration cmdlet returns a collection of all the DTMF configuration settings in use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters in order to return a collection (or collections) of DTMF configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter for), use this syntax: -Filter *EMEA*.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the DTMF configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingDtmfConfiguration


## NOTES


## RELATED LINKS

[New-CsDialInConferencingDtmfConfiguration]()

[Remove-CsDialInConferencingDtmfConfiguration]()

[Set-CsDialInConferencingDtmfConfiguration]()