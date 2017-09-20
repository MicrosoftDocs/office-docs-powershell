---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsDialInConferencingConfiguration
schema: 2.0.0
---

# Set-CsDialInConferencingConfiguration

## SYNOPSIS
Modifies settings that determine how Skype for Business Server responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsDialInConferencingConfiguration [[-Identity] <XdsIdentity>] [-EnableNameRecording <Boolean>] [-Force]
 [-WhatIf] [-Confirm] [-EntryExitAnnouncementsEnabledByDefault <Boolean>]
 [-EntryExitAnnouncementsType <EntryExitAnnouncementsType>] [-AllowAnonymousPstnActivation <Boolean>]
 [-PinAuthType <String>] [<CommonParameters>]
```

### Instance
```
Set-CsDialInConferencingConfiguration [-Instance <PSObject>] [-EnableNameRecording <Boolean>] [-Force]
 [-WhatIf] [-Confirm] [-EntryExitAnnouncementsEnabledByDefault <Boolean>]
 [-EntryExitAnnouncementsType <EntryExitAnnouncementsType>] [-AllowAnonymousPstnActivation <Boolean>]
 [-PinAuthType <String>] [<CommonParameters>]
```

## DESCRIPTION
When users join (or leave) a dial-in conference Skype for Business Server can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Skype for Business Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
When you first install Skype for Business Server, the only dial-in conferencing configuration settings you will have are the ones at the global scope; however, you can create new settings at the site scope by using the `New-CsDialInConferencingConfiguration` cmdlet.
In addition, you can modify any of these configuration settings (at either the global or site scopes) by using the `Set-CsDialInConferencingConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsDialInConferencingConfiguration -Identity site:Redmond -EntryExitAnnouncementsType "ToneOnly"
```

The command shown in Example 1 modifies the EntryExitAnnoucements property for the dial-in configuration settings for the Redmond site.
In this case, the EntryExitAnnouncementsType property is set to ToneOnly.


### -------------------------- Example 2 ------------------------
```
Get-CsDialInConferencingConfiguration | Set-CsDialInConferencingConfiguration -EnableNameRecording $True
```

Example 2 modifies all the dial-in conferencing configurations settings in use in the organization.
To do this, the command first uses the `Get-CsDialInConferencingConfiguration` cmdlet to return a collection of all dial-in conferencing settings.
That collection is then piped to the `Set-CsDialInConferencingConfiguration` cmdlet, which sets the EnableNameRecording property for each item in the collection to True ($True).


### -------------------------- Example 3 ------------------------
```
Get-CsDialInConferencingConfiguration -Filter "site:*" | Set-CsDialInConferencingConfiguration -EnableNameRecording $True -EntryExitAnnouncementsType "UseNames"
```

Example 3 modifies all the dial-in conferencing settings that have been configured at the site scope.
To carry out this task, the command first uses the `Get-CsDialInConferencingConfiguration` cmdlet and the Filter parameter to return a collection of all the settings configured at the site scope; the filter value "site:*" restricts returned data to settings that have an Identity beginning with the string value "site:".
That filtered collection is then piped to the `Set-CsDialInConferencingConfiguration` cmdlet, which modifies the EnableNameRecording property and the EntryExitAnnouncementsType property for each item in the collection.
When the command finishes running, all the dial-in conferencing settings configured at the site scope will have their EnableNameRecording property set to True and their EntryExitAnnoucements property set to "UseNames".


## PARAMETERS

### -Identity
Indicates the Identity of the dial-in conferencing configuration settings to be modified.
To refer to the global settings, use this syntax: `-Identity global`.
To refer to site settings, use syntax similar to this: `-Identity site:Redmond`.
Note that you cannot use wildcards when specifying an Identity.

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EnableNameRecording
Determines whether or not users are asked to record their name before entering the conference.
Set to True to enable name recording; set to False to bypass name recording.
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

### -EntryExitAnnouncementsEnabledByDefault
If set to True announcements will be played each time a participant enters or exits a conference.
If set to False (the default value), entry and exit announcements will not be played.


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

### -EntryExitAnnouncementsType
Indicates the action taken by the system any time a participant enters or leaves a conference.
(Announcements are made only if the EntryExitAnnouncementsEnabledByDefault is set to True.) Valid values are:

UseNames.
The person's name is announced any time her or she enters or leaves a conference (for example, "Ken Myer is exiting the conference").

ToneOnly.
A tone is played any time a participant enters or leaves a conference.

The default value is UseNames.


```yaml
Type: EntryExitAnnouncementsType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousPstnActivation
Specifies whether unauthenticated callers can start a meeting if they are the first person to join.
An unauthenticated caller is defined as a participant who joins a meeting over the phone and doesn't provide a PIN when joining the meeting.
$True to allow anonymous activation, otherwise $False.
The default is $False.

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

### -PinAuthType
Specifies which users are allowed to use PIN authentication.
Allowed values are:

Everyone

OrganizerOnly

```yaml
Type: String
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
Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.
The `Set-CSDialInConferencingConfiguration` cmdlet accepts pipelined instances of the dial-in conferencing configuration object.

## OUTPUTS

###  
The `Set-CsDialInConferencingConfiguration` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingConfiguration]()

[New-CsDialInConferencingConfiguration]()

[Remove-CsDialInConferencingConfiguration]()
