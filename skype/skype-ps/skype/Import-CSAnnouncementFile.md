---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CSAnnouncementFile

## SYNOPSIS

Imports an announcement file to the Announcement service audio library.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Import-CSAnnouncementFile [-Parent] <String> -FileName <String> -Content <Byte[]> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

This cmdlet imports an audio file as a byte array to the Announcement service audio library.
This makes the file available for playback as an announcement for unassigned numbers.

Running this cmdlet imports the audio file to the library.
After the file has been imported, the file can be used in an announcement by calling the New-CsAnnouncement cmdlet or the Set-CsAnnouncement cmdlet and passing the file name and associated service as parameters.
At that point the New-CsUnassignedNumber or Set-CsUnassignedNumber cmdlet can be called to assign the announcement to a specific range of numbers.

Imported files must be WAV or WMA files.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$a = Get-Content ".\GreetingFile.wav" -ReadCount 0 -Encoding Byte

Import-CsAnnouncementFile -Parent ApplicationServer:redmond.litwareinc.com -FileName "WelcomeMessage.wav" -Content $a
```

These commands import an audio file into the Announcement service File Store.
Because audio files must be imported as byte arrays, we first need to call the Get-Content cmdlet to retrieve the audio file as an array of individual bytes.
Get-Content is a Windows PowerShell built-in cmdlet to which we pass the name (including path) of the file we want to use for our announcement.
Next we pass a value of 0 to the ReadCount parameter, meaning we want to read the whole file at once.
We then pass a value of Byte to the Encoding parameter, which tells Get-Content that we want the contents of the file as an array of bytes.
We assign that array to the variable $a.

In the second line we call the Import-CsAnnouncementFile cmdlet to actually import the file.
We pass the service Identity ApplicationServer:redmond.litwareinc.com to the Parent parameter, then we pass a name to the FileName parameter (WelcomeMessage.wav).
This can be any valid Windows operating system file name, but it should end with a .wav or .wma extension.
Finally, we pass the variable $a as the value to the Content parameter to read in our byte array.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Import-CsAnnouncementFile -Parent ApplicationServer:redmond.litwareinc.com -FileName "WelcomeMessage.wav" -Content (Get-Content ".\GreetingFile.wav" -ReadCount 0 -Encoding Byte)
```

Example 2 is identical to Example 1 except that we included the Get-Content command inside parentheses as a value to the Content parameter rather than calling that command on its own and assigning it to a variable.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-Content ".\GreetingFile.wav" -ReadCount 0 -Encoding Byte | Import-CsAnnouncementFile -Parent ApplicationServer:redmond.litwareinc.com -FileName "WelcomeMessage.wav"
```

Example 3 is yet another variation of Example 1.
The difference in this example is that rather than use the Content parameter, we first call the Get-Content cmdlet, then pipe the results to Import-CsAnnouncementFile.
This is the most reliable way of importing an announcement file from a remote session.


## PARAMETERS

### -Parent
The service ID of the Application Server on which the associated Announcement service is running.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
The name that you want the file to have in the File Store.
You will use this name in the AudioFilePrompt parameter in the call to the New-CsAnnouncement or Set-CsAnnouncement cmdlet to assign the file to an announcement.

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

### -Content
The contents of the audio file as a byte array.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
Byte\[\].
Accepts a byte array from an audio file.
Byte array must be piped as a single record.
See Example 3.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS
