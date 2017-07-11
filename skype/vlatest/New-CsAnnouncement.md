---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsAnnouncement

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new Microsoft Lync Server 2010 announcement.
Announcements are played when users dial a valid but unassigned phone number.
An announcement can be a message (such as "This number is temporarily out of service") or a busy signal.

Below Content Applies To: Lync Server 2013

Creates a new Lync Server announcement.
Announcements are played when users dial a valid but unassigned phone number.
An announcement can be a message (such as "This number is temporarily out of service") or a busy signal.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Creates a new Skype for Business Server 2015 announcement.
Announcements are played when users dial a valid but unassigned phone number.
An announcement can be a message (such as "This number is temporarily out of service") or a busy signal.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsAnnouncement [-Identity] <XdsIdentity> -Name <String> [-AudioFilePrompt <String>] [-Language <String>]
 [-TargetUri <String>] [-TextToSpeechPrompt <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsAnnouncement -Parent <String> -Name <String> [-AudioFilePrompt <String>] [-Language <String>]
 [-TargetUri <String>] [-TextToSpeechPrompt <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

An organization can own phone numbers that are not assigned to users or phones, but that are still valid numbers that can be called.
By default when someone dials one of those numbers, that person will receive a busy signal and the call may result in an error returned to the SIP client.
By applying announcement settings to unassigned numbers, administrators have the option of playing a message, returning a busy signal, or redirecting the call.
This cmdlet creates these announcement settings.

You can assign announcements to unassigned numbers by calling the New-CsUnassignedNumber or Set-CsUnassignedNumber cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAnnouncement cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsAnnouncement"}

Below Content Applies To: Skype for Business Server 2015

An organization can own phone numbers that are not assigned to users or phones, but that are still valid numbers that can be called.
By default when someone dials one of those numbers, that person will receive a busy signal and the call may result in an error returned to the SIP client.
By applying announcement settings to unassigned numbers, administrators have the option of playing a message, returning a busy signal, or redirecting the call.
This cmdlet creates these announcement settings.

You can assign announcements to unassigned numbers by calling the New-CsUnassignedNumber or the Set-CsUnassignedNumber cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Help Desk Announcement" -TextToSpeechPrompt "Welcome to the Help Desk." -Language "en-US"
```

Example 1 demonstrates how you can create a new announcement that will play a TTS prompt in U.S.
English.
The first parameter we specify is Identity.
The Identity must be at the service scope, followed by the service ID of the Application Server (ApplicationServer:redmond.litwareinc.com).
Next we give the announcement a Name, in this case Help Desk Announcement.
To assign a TTS prompt to this announcement we use the TextToSpeechPrompt parameter followed by a string with the announcement text.
When a TTS prompt is used for an announcement you must specify a language, which we do here by including the Language parameter followed by a string representing U.S.
English (en-US).

Note that announcement identities are composed of two parts: the service where the announcement is to be stored, and a 36-character GUID (globally unique identifier).
You will see the full Identity after you create the new announcement, the GUID is generated and applied automatically.
That Identity will be similar to this: service:ApplicationServer:redmond.litwareinc.com/1951f734-c80f-4fb2-965d-51807c792b90.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 demonstrates how you can create a new announcement that will play a TTS prompt in U.S.
English.
The first parameter we specify is Identity.
The Identity must be at the service scope, followed by the service ID of the Application Server (ApplicationServer:redmond.litwareinc.com).
Next we give the announcement a Name, in this case Help Desk Announcement.
To assign a TTS prompt to this announcement we use the TextToSpeechPrompt parameter followed by a string with the announcement text.
When a TTS prompt is used for an announcement you must specify a language, which we do here by including the Language parameter followed by a string representing U.S.
English (en-US).

Note that announcement identities are composed of two parts: the service where the announcement is to be stored, and a 36-character GUID (globally unique identifier).
You will see the full Identity after you create the new announcement, the GUID is generated and applied automatically.
That Identity will be similar to this: service:ApplicationServer:redmond.litwareinc.com/1951f734-c80f-4fb2-965d-51807c792b90.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Help Desk Announcement" -TextToSpeechPrompt "Welcome to the Help Desk." -Language "en-US"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 demonstrates how you can create a new announcement that will play a TTS prompt in U.S.
English.
The first parameter we specify is Identity.
The Identity must be at the service scope, followed by the service ID of the Application Server (ApplicationServer:redmond.litwareinc.com).
Next we give the announcement a Name, in this case Help Desk Announcement.
To assign a TTS prompt to this announcement we use the TextToSpeechPrompt parameter followed by a string with the announcement text.
When a TTS prompt is used for an announcement you must specify a language, which we do here by including the Language parameter followed by a string representing U.S.
English (en-US).

Note that announcement identities are composed of two parts: the service where the announcement is to be stored, and a 36-character GUID (globally unique identifier).
You will see the full Identity after you create the new announcement; the GUID is generated and applied automatically.
That Identity will be similar to this: service:ApplicationServer:redmond.litwareinc.com/1951f734-c80f-4fb2-965d-51807c792b90.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Help Desk Announcement" -TextToSpeechPrompt "Welcome to the Help Desk." -Language "en-US"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Welcome Announcement" -AudioFilePrompt "WelcomeMessage.wav"
```

Example 2 is similar to Example 1 in that we begin by entering the required parameters, Identity and Name.
In this example, however, instead of a TTS prompt, we want the announcement to play an audio file.
To do that we include the AudioFilePrompt parameter and pass it a string containing the name of the audio file (WelcomeMessage.wav).
This file must be in the File Store in order for this announcement to play.
You can add audio files to the File Store by calling the Import-CsAnnouncementFile cmdlet.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is similar to Example 1 in that we begin by entering the required parameters, Identity and Name.
In this example, however, instead of a TTS prompt, we want the announcement to play an audio file.
To do that we include the AudioFilePrompt parameter and pass it a string containing the name of the audio file (WelcomeMessage.wav).
This file must be in the File Store in order for this announcement to play.
You can add audio files to the File Store by calling the Import-CsAnnouncementFile cmdlet.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Welcome Announcement" -AudioFilePrompt "WelcomeMessage.wav"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is similar to Example 1 in that we begin by entering the required parameters, Identity and Name.
In this example, however, instead of a TTS prompt, we want the announcement to play an audio file.
To do that we include the AudioFilePrompt parameter and pass it a string containing the name of the audio file (WelcomeMessage.wav).
This file must be in the File Store in order for this announcement to play.
You can add audio files to the File Store by calling the Import-CsAnnouncementFile cmdlet.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Welcome Announcement" -AudioFilePrompt "WelcomeMessage.wav"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri sip:kmyer@litwareinc.com
```

Like Example 2, this example creates an announcement that plays an audio file when the number is reached.
However, in this example in addition to the Identity, Name, and AudioFilePrompt parameters, we also specify the TargetUri parameter.
We pass this parameter the SIP URI of the user or phone to which the caller will be forwarded after the announcement has been played.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Like Example 2, this example creates an announcement that plays an audio file when the number is reached.
However, in this example in addition to the Identity, Name, and AudioFilePrompt parameters, we also specify the TargetUri parameter.
We pass this parameter the SIP URI of the user or phone to which the caller will be forwarded after the announcement has been played.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri sip:kmyer@litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Like Example 2, this example creates an announcement that plays an audio file when the number is reached.
However, in this example in addition to the Identity, Name, and AudioFilePrompt parameters, we also specify the TargetUri parameter.
We pass this parameter the SIP URI of the user or phone to which the caller will be forwarded after the announcement has been played.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri sip:kmyer@litwareinc.com

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri "sip:+14255551212@litwareinc.com;user=phone"
```

Example 4 is identical to Example 3 except that instead of forwarding the call based on a user's SIP address, the call is forwarded to a phone number.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 is identical to Example 3 except that instead of forwarding the call based on a user's SIP address, the call is forwarded to a phone number.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri "sip:+14255551212@litwareinc.com;user=phone"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 is identical to Example 3 except that instead of forwarding the call based on a user's SIP address, the call is forwarded to a phone number.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Forward Announcement" -AudioFilePrompt "WelcomeMessage.wav" -TargetUri "sip:+14255551212@litwareinc.com;user=phone"

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Busy"
```

In this example we don't specify a prompt or a target URI, we include only an Identity and a Name.
That means the caller will hear a busy signal when a call to an unassigned number associated with this announcement is connected.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In this example we don't specify a prompt or a target URI, we include only an Identity and a Name.
That means the caller will hear a busy signal when a call to an unassigned number associated with this announcement is connected.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Busy"

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In this example we don't specify a prompt or a target URI, we include only an Identity and a Name.
That means the caller will hear a busy signal when a call to an unassigned number associated with this announcement is connected.

New-CsAnnouncement -Identity ApplicationServer:redmond.litwareinc.com -Name "Busy"

## PARAMETERS

### -Identity
A unique identifier for the Announcement.
For this value you must enter the Identity of the Application Server running the Response Group application.
For example, ApplicationServer:redmond.litwareinc.com.

More than one Announcement can be assigned to a single service.
Thus, in order to make the Identity a unique value, a globally unique identifier (GUID) will be automatically generated and assigned to the Identity when you create the Announcement.
The new Announcement will have an Identity in the format service:\<service ID\>/\<GUID\>.
For example: service: ApplicationServer:redmond.litwareinc.com/bef5fa3b-3c97-4af0-abe7-611deee7616c.
You do not need to supply a GUID when you call this cmdlet.
Instead, supply the service Identity, and the GUID will be auto-generated and added to the Identity.

Although you don't have to supply a GUID, you can.
You might want to do this if an announcement was assigned to an unassigned number range, and then the announcement was deleted.
You can create a new announcement with a matching Identity (including the GUID) and in that case not have to update the unassigned number range.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
This parameter is identical to Identity, except that Identity will accept the service Identity and the GUID, whereas Parent will accept only the service Identity; the GUID will be automatically generated.
You cannot specify an Identity and a Parent.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Below Content Applies To: Lync Server 2010, Lync Server 2013

A descriptive name for the Announcement.
This name must be unique within the service.
This name will be used in the call to New-CsUnassignedNumber or Set-CsUnassignedNumber to specify the Announcement associated with an unassigned number range.



Below Content Applies To: Skype for Business Server 2015

A descriptive name for the Announcement.
This name must be unique within the service.
This name will be used in the call to the New-CsUnassignedNumber cmdlet or to the Set-CsUnassignedNumber cmdlet to specify the Announcement associated with an unassigned number range.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFilePrompt
The name of the audio file to be played for the announcement.
Audio files are stored in the File Store.
To save an audio file to the File Store, use the Import-CsAnnouncementFile cmdlet.

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

### -Language
Below Content Applies To: Lync Server 2010

The language in which the text-to-speech (TTS) prompt will be played.
If a value is entered for TextToSpeechPrompt, this parameter is required.

Values are entered as a string representing the language and locale to be used.
The following is a list of valid values, followed by the language and locale in parentheses: ca-ES (Catalan, Catalan); da-DK (Danish, Denmark); de-DE (German, Germany); en-AU (English, Australia); en-CA (English, Canada); en-GB (English, United Kingdom); en-IN (English, India); en-US (English, United States); es-ES (Spanish, Spain); es-MX (Spanish, Mexico); fi-FI (Finnish, Finland); fr-CA (French, Canada); fr-FR (French, France); it-IT (Italian, Italy); ja-JP (Japanese, Japan); ko-KR (Korean, Korea); nb-NO (Norwegian, Bokmal, Norway); nl-NL (Dutch, Netherlands); pl-PL (Polish, Poland); pt-BR (Portuguese, Brazil); pt-PT (Portuguese, Portugal); ru-RU (Russian, Russia); sv-SE (Swedish, Sweden); zh-CN (Chinese, People's Republic of China); zh-HK (Chinese, Hong Kong S.A.R.); zh-TW (Chinese, Taiwan)



Below Content Applies To: Lync Server 2013

The language in which the text-to-speech (TTS) prompt will be played.
If a value is entered for TextToSpeechPrompt, this parameter is required.

Values are entered as a string representing the language and locale to be used.
The following is a list of valid values, followed by the language and locale in parentheses: ca-ES (Catalan, Catalan); da-DK (Danish, Denmark); de-DE (German, Germany); en-AU (English, Australia); en-CA (English, Canada); en-GB (English, United Kingdom); en-IN (English, India); en-US (English, United States); es-ES (Spanish, Spain); es-MX (Spanish, Mexico); fi-FI (Finnish, Finland); fr-CA (French, Canada); fr-FR (French, France); it-IT (Italian, Italy); ja-JP (Japanese, Japan); ko-KR (Korean, Korea); nb-NO (Norwegian, Bokmal, Norway); nl-NL (Dutch, Netherlands); pl-PL (Polish, Poland); pt-BR (Portuguese, Brazil); pt-PT (Portuguese, Portugal); ru-RU (Russian, Russia); sv-SE (Swedish, Sweden); zh-CN (Chinese, People's Republic of China); zh-HK (Chinese, Hong Kong SAR); zh-TW (Chinese, Taiwan)



Below Content Applies To: Skype for Business Server 2015

The language in which the text-to-speech (TTS) prompt will be played.
If a value is entered for TextToSpeechPrompt, this parameter is required.

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
The Uniform Resource Identifier (URI) to which the caller will be transferred after the announcement has been played.
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

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Server 2015

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.AnnouncementServiceSettings.Announcement.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6e3699c6-cd2b-4842-99bc-3cf2578fbd65(OCS.14).aspx)

[Remove-CsAnnouncement]()

[Set-CsAnnouncement]()

[Get-CsAnnouncement]()

[Import-CsAnnouncementFile]()

[New-CsUnassignedNumber]()

[Set-CsUnassignedNumber]()

[Online Version](http://technet.microsoft.com/EN-US/library/6e3699c6-cd2b-4842-99bc-3cf2578fbd65(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6e3699c6-cd2b-4842-99bc-3cf2578fbd65(OCS.16).aspx)

