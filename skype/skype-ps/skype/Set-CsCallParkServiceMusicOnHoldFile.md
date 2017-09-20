---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsCallParkServiceMusicOnHoldFile
schema: 2.0.0
---

# Set-CsCallParkServiceMusicOnHoldFile

## SYNOPSIS
Changes the audio file that will be played to callers who are on hold in a parked call.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsCallParkServiceMusicOnHoldFile [-Service] <String> -Content <Byte[]> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range and immediately places it on hold.
Based on configuration settings for the Call Park service, music on hold can be played to the caller while the call is parked.
Use this cmdlet to change the audio file (music on hold) that is played to a parked caller who is on hold.

Music on hold is played only if the EnableMusicOnHold property of the Call Park service has been set to True.
You can check this property by calling the `Get-CsCpsConfiguration` cmdlet.
You can set the property either when the Call Park configuration is created with the `New-CsCpsConfiguration` cmdlet or after the Call Park configuration exists by calling the `Set-CsCpsConfiguration` cmdlet.
This property is True by default.

Skype for Business Server ships with a default Call Park service music on hold file.
If you don't assign an audio file, the default file will be used.

Audio files must be in the following format: Windows Media Audio 9, 44 kHz, 16 bits, Mono, CBR, or 32 kbps.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$a = Get-Content -ReadCount 0 -Encoding byte "C:\MoHFiles\soothingmusic.wma"

Set-CsCallParkServiceMusicOnHoldFile -Service ApplicationServer:pool0.litwareinc.com -Content $a
```

This example sets the file SoothingMusic.wma to be the audio file that is played to callers whose calls are parked.
The first line of this example is a call to the `Get-Content` cmdlet.
This cmdlet simply reads the contents of a file and assigns them, in this case, to the variable $a.
We pass a value of 0 to the ReadCount parameter so the `Get-Content` cmdlet will read the entire file at once (rather than try to read it line by line, which doesn't apply to an audio file).
We set the Encoding parameter to byte.
This tells the `Get-Content` cmdlet that the content we want to read into variable $a is a byte array rather than the audio file in .wma format.

Line 2 in this example is where we actually assign the audio file.
We call the `Set-CsCallParkServiceMusicOnHoldFile` cmdlet and specify the service ID where the Call Park service is running.
We then pass the audio file contents that we read into variable $a to the Content parameter.
(Remember that these contents must be in byte format.)


## PARAMETERS

### -Service
The ID of the service where the Call Park service resides; for example, ApplicationServer:pool0.litwareinc.com.

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

### -Content
The contents of the audio file in byte format.

Use the `Get-Content` cmdlet to retrieve the contents of the audio file in byte format.
(For details, see the Examples section in this topic.)

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Byte\[\].
Accepts pipelined input of a byte array containing the music on hold file.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS

[New-CsCpsConfiguration]()

[Remove-CsCpsConfiguration]()

[Set-CsCpsConfiguration]()

[Get-CsCpsConfiguration]()
