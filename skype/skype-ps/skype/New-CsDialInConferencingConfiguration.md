---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsDialInConferencingConfiguration
schema: 2.0.0
---

# New-CsDialInConferencingConfiguration

## SYNOPSIS

Creates a new collection of dial-in conferencing configuration settings.
These settings determine how Skype for Business Server responds when users join or leave a dial-in conference.
In particular, information is returned regarding whether or not participants are required to record their name when joining a conference, and how (or if) the system announces that someone has joined or left the call.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDialInConferencingConfiguration [-Identity] <XdsIdentity> [-EnableNameRecording <Boolean>]
 [-EntryExitAnnouncementsEnabledByDefault <Boolean>] [-EntryExitAnnouncementsType <EntryExitAnnouncementsType>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm] [-AllowAnonymousPstnActivation <Boolean>] [-PinAuthType <String>]
 [<CommonParameters>]
```

## DESCRIPTION

When users join (or leave) a dial-in conference, Skype for Business Server can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference.
Likewise, administrators can decide whether they want to have Skype for Business Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) When you first install Skype for Business Server, the only dial-in conferencing configuration settings you will have are the ones at the global scope; however, you can create new settings at the site scope by using the New-CSDialInConferencingConfiguration cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CSDialInConferencingConfiguration -Identity site:Redmond -EnableNameRecording $False
```

The command shown in Example 1 creates a new collection of dial-in conferencing configuration settings that are applied to the Redmond site.
In addition, the optional parameter EnableNameRecording is included in order to set the EnableNameRecording property to False.


### -------------------------- EXAMPLE 2 -------------------------- 
```
$x = New-CSDialInConferencingConfiguration -Identity site:Redmond -InMemory

$x.EnableNameRecording = $False

Set-CSDialInConferencingConfiguration -Instance $x
```

In Example 2 the InMemory parameter is used to create a new collection of dial-in conferencing configuration settings that initially exist only in memory.
To do this, the example first calls the New-CSDialInConferencingConfiguration cmdlet, and the InMemory parameter to create a virtual settings collection that is stored in the variable $x.
(Note that this collection is given the Identity site:Redmond.) After creating the virtual collection, line 2 is used to modify the value of the EnableNameRecording property.
Finally, line 3 in the example calls the Set-CSDialInConferencingConfiguration cmdlet to transform the virtual configuration settings stored in $x into an actual collection of settings applied to the Redmond site.

## PARAMETERS

### -Identity
Indicates the Identity of the dial-in conferencing configuration settings to be created.
Because these settings can only be created at the site scope, use syntax similar to this, with the prefix "site:" followed by the name of the site: `-Identity site:Redmond.`

Note that there can only be one set of dial-in conferencing configuration settings per site.
The sample command will fail if a collection of settings with the Identity site:Redmond already exists.

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

### -EnableNameRecording
Determines whether or not users are asked to record their name before entering the conference.
Set to True ($True) to require name recording; set to False ($False) to bypass name recording.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryExitAnnouncementsType
Indicates the action taken by the system any time a participant enters or leaves a conference.
Valid values are:

UseNames.
The person's name is announced any time he or she enters or leaves a conference (for example, "Ken Myer is exiting the conference").

ToneOnly.
A tone is played any time a participant enters or leaves a conference.

The default value is UseNames.
Note that announcements are played only if the EntryExitAnnouncementsEnabledByDefault property is set to True.

```yaml
Type: EntryExitAnnouncementsType
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

### -AllowAnonymousPstnActivation
Specifies whether unauthenticated callers can start a meeting if they are the first person to join.
An unauthenticated caller is defined as a participant who joins a meeting over the phone and doesn't provide a PIN when joining the meeting.
$True to allow anonymous activation, otherwise $False.
The default is $False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The New-CsDialInConferencingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingConfiguration](Get-CsDialInConferencingConfiguration.md)

[Remove-CsDialInConferencingConfiguration](Remove-CsDialInConferencingConfiguration.md)

[Set-CsDialInConferencingConfiguration](Set-CsDialInConferencingConfiguration.md)


