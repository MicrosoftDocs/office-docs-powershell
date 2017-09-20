---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsAnnouncement
schema: 2.0.0
---

# Set-CsAnnouncement

## SYNOPSIS
Modifies the property values of an existing Skype for Business Server announcement.
Announcements are played when users dial a valid but unassigned phone number.
An announcement can be a message (such as "This number is temporarily out of service") or a busy signal.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsAnnouncement [[-Identity] <XdsIdentity>] [-Name <String>] [-AudioFilePrompt <String>]
 [-TextToSpeechPrompt <String>] [-Language <String>] [-TargetUri <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsAnnouncement [-Instance <PSObject>] [-Name <String>] [-AudioFilePrompt <String>]
 [-TextToSpeechPrompt <String>] [-Language <String>] [-TargetUri <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
An organization can own phone numbers that are not assigned to users or phones, but that are still valid numbers that can be called.
By default when someone dials one of those numbers, that person will receive a busy signal and the call may result in an error returned to the SIP client.
By applying announcement settings to unassigned numbers, administrators have the option of playing a message, returning a busy signal, or redirecting the call.
This cmdlet modifies these announcement settings.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Get-CsAnnouncement | Where-Object {$_.Name -eq "Help Desk Announcement"} | Set-CsAnnouncement -AudioFilePrompt "helpdesk.wav"
```

The command shown in Example 1 assigns a new audio file to the Help Desk announcement.
To perform this task, the command first uses the `Get-CsAnnouncement` cmdlet, without any parameters, to return a collection of all the announcements currently available.
This collection is then piped to the `Where-Object` cmdlet, which picks the one announcement where the Name is equal to (-eq) "Help Desk Announcement".
In turn, that announcement is then piped to the `Set-CsAnnouncement` cmdlet, which sets the value of the AudioFilePrompt property to helpdesk.wav.

Note that if this announcement already has a TextToSpeechPrompt value assigned to it, this command will generate a warning that the TextToSpeechPrompt value will be ignored.


### -------------------------- Example 2 ------------------------
```
Get-CsAnnouncement | Where-Object {$_.Name -eq "Help Desk Announcement"} | Set-CsAnnouncement -TextToSpeechPrompt $Null
```

In Example 2, the TextToSpeechPrompt property for the announcement Help Desk Announcement is set to a null value; this effectively erases the property value.
To do this, the command first uses the `Get-CsAnnouncement` cmdlet to return a collection of all the announcements currently available.
This collection is then piped to the `Where-Object` cmdlet, which selects the announcement where the Name is equal to (-eq) "Help Desk Announcement".
This announcement is then piped to the `Set-CsAnnouncement` cmdlet, which sets the TextToSpeechPrompt property to a null value ($Null).


### -------------------------- Example 3 ------------------------
```
Get-CsAnnouncement | Where-Object {$_.Name -eq "Help Desk Announcement"} | Set-CsAnnouncement -TargetUri "sip:kmyer@litwareinc.com;opaque=app:voicemail"
```

This example updates the TargetUri for the Announcement with the name Help Desk Announcement.
The command first uses the `Get-CsAnnouncement` cmdlet to return a collection of all the announcements currently available.
This collection is then piped to the `Where-Object` cmdlet, which selects the announcement where the Name is equal to (-eq) "Help Desk Announcement".
This announcement is then piped to the `Set-CsAnnouncement` cmdlet, which sets the TargetUri property to a voice mail location (sip:kmyer@litwareinc.com;opaque=app:voicemail).


## PARAMETERS

### -Identity
A unique identifier for the Announcement.
This value will always be in the format \<serviceID\>/\<GUID\>, where serviceID is the Identity of the Application Server running the Announcement service and GUID is a globally unique identifier associated with these announcement settings.
For example: ApplicationServer:redmond.litwareinc.com/bef5fa3b-3c97-4af0-abe7-611deee7616c.

Because GUIDs can be difficult to enter correctly at the command line, you'll most likely retrieve announcements by using the `Get-CsAnnouncement` cmdlet and pipe them to the `Set-CsAnnouncement` cmdlet for modification.
(For details, see the Examples section.)

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
A reference to the Announcement object you want to change.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.AnnouncementServiceSettings.Announcement, which can be retrieved by calling the `Get-CsAnnouncement` cmdlet.

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

### -Name
Enter a value for this parameter to change the name of the announcement.
Names must be unique within a service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFilePrompt
The name of the audio file to be played for the announcement.
Audio files are stored in the File Store.
To save an audio file to the File Store, use the `Import-CsAnnouncementFile` cmdlet.

Valid file types: WAV and WMA

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TextToSpeechPrompt
A text-to-speech (TTS) prompt.
This is a string that will be converted to audio and played as the announcement.

If both AudioFilePrompt and TextToSpeechPrompt are specified for a single announcement, you will receive a warning that the audio file will take precedence and the TTS prompt will be ignored.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The language in which the TTS prompt will be played.
If a value is entered for TextToSpeechPrompt this parameter is required.

Values are entered as a string representing the language and locale to be used.
The following is a list of valid values, followed by the language and locale in parentheses: ca-ES (Catalan, Spain); da-DK (Danish, Denmark); de-DE (German, Germany); en-AU (English, Australia); en-CA (English, Canada); en-GB (English, United Kingdom); en-IN (English, India); en-US (English, United States); es-ES (Spanish, Spain); es-MX (Spanish, Mexico); fi-FI (Finnish, Finland); fr-CA (French, Canada); fr-FR (French, France); it-IT (Italian, Italy); ja-JP (Japanese, Japan); ko-KR (Korean, Korea); nb-NO (Norwegian, Bokmal, Norway); nl-NL (Dutch, Netherlands); pl-PL (Polish, Poland); pt-BR (Portuguese, Brazil); pt-PT (Portuguese, Portugal); ru-RU (Russian, Russia); sv-SE (Swedish, Sweden); zh-CN (Chinese, People's Republic of China); zh-HK (Chinese, Hong Kong SAR); zh-TW (Chinese, Taiwan)


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
The URI to which the caller will be transferred after the announcement has been played.
This value must be a SIP address entered in the format sip: followed by the SIP address.
For example, sip:kmyer@litwareinc.com.
Note that the SIP address can also be a telephone number or voice mail, for example sip:+14255551212@litwareinc.com;user=phone for a phone number or sip:kmyer@litwareinc.com;opaque=app:voicemail for voice mail.

```yaml
Type: String
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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Microsoft.Rtc.Management.WritableConfig.Settings.AnnouncementServiceSettings.Announcement object.
Accepts pipelined input of announcement objects.

## OUTPUTS

###  
The `Set-CsAnnouncement` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AnnouncementServiceSettings.Announcement object.

## NOTES

## RELATED LINKS

[New-CsAnnouncement]()

[Remove-CsAnnouncement]()

[Get-CsAnnouncement]()

[Import-CsAnnouncementFile]()
