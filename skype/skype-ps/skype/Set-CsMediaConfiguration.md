---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsMediaConfiguration

## SYNOPSIS
Modifies an existing collection of media settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsMediaConfiguration [[-Identity] <XdsIdentity>] [-EnableQoS <Boolean>] [-EnableSiren <Boolean>]
 [-EncryptionLevel <EncryptionLevel>] [-MaxVideoRateAllowed <MaxVideoRateAllowed>] [-Force] [-WhatIf]
 [-Confirm] [-EnableAdaptiveBandWidthEstimation <Boolean>] [-EnableG722StereoCodec <Boolean>]
 [-EnableH264Codec <Boolean>] [-EnableInCallQoS <Boolean>] [-EnableRtpRtcpMultiplexing <Boolean>]
 [-InCallQoSIntervalSeconds <UInt16>] [-EnableVideoBasedSharing <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsMediaConfiguration [-Instance <PSObject>] [-EnableQoS <Boolean>] [-EnableSiren <Boolean>]
 [-EncryptionLevel <EncryptionLevel>] [-MaxVideoRateAllowed <MaxVideoRateAllowed>] [-Force] [-WhatIf]
 [-Confirm] [-EnableAdaptiveBandWidthEstimation <Boolean>] [-EnableG722StereoCodec <Boolean>]
 [-EnableH264Codec <Boolean>] [-EnableInCallQoS <Boolean>] [-EnableRtpRtcpMultiplexing <Boolean>]
 [-InCallQoSIntervalSeconds <UInt16>] [-EnableVideoBasedSharing <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies a collection of settings that define media configuration.
These actions relate to audio and video calls between client endpoints.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsMediaConfiguration -Identity site:Redmond1 -MaxVideoRateAllowed hd720p15m
```

Example 1 modifies the media configuration collection with the Identity site:Redmond1; in particular, the command sets the value of the MaxVideoRateAllowed property to Hd720p15M.
Note that the value passed to the MaxVideoRateAllowed parameter must be one of the values specified in the parameter description.
Also note that the values are not case sensitive; the value entered here as hd720p15m will be automatically converted to the appropriate casing (in this instance, to Hd720p15M).


### -------------------------- Example 2 --------------------------
```
Set-CsMediaConfiguration site:Redmond1 -EncryptionLevel donotsupportencryption
```

This example modifies the media configuration collection with the Identity site:Redmond1 to have an EncryptionLevel value of DoNotSupportEncryption.
Note that this value is not case sensitive; the value was entered as donotsupportencryption, but that value will be accepted as a valid value and will be automatically changed to mixed case (DoNotSupportEncryption).


## PARAMETERS

### -Identity
The unique identifier of the media configuration settings you want to change.
This identifier specifies the scope at which this configuration is applied (global, site, or service).

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
An instance of the Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.
You can retrieve this object by calling the `Get-CsMediaConfiguration` cmdlet with a specific Identity.
You can then assign new values to the properties of that object and then save those changes by passing the object to the `Set-CsMediaConfiguration` cmdlet.


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

### -EnableQoS
QoS monitors the quality of voice signals over a network.


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

### -EnableSiren
By default, the Mediation Server does not negotiate Siren as a possible codec for calls between itself and other clients.
If this setting is True, Siren will be included as a possible codec for use between the Mediation Server and other clients.


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

### -EncryptionLevel
The level of encryption between unified communications devices.

Valid values:

SupportEncryption - secure real-time transport protocol (SRTP) will be used if it can be negotiated.

RequireEncryption - SRTP must be negotiated.

DoNotSupportEncryption - SRTP must not be used.

This value is not case sensitive.
(For details, see the Examples in this topic.)

Default: RequireEncryption


```yaml
Type: EncryptionLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVideoRateAllowed
The maximum rate at which video signals will be transferred at the client endpoints.

Valid values: Hd720p15M, VGA600K, CIF250K

Hd720p15M - High definition, with a resolution of 1280 x 720 and aspect ratio 16:9.

VGA600K - VGA, with a resolution of 640 x 480, 25 fps with the aspect ratio 4:3.

CIF250K - Common Intermediate Format (CIF) video format, 15 fps with a resolution of 352 x 288.

Note that these values are not case sensitive; values will be converted to appropriate casing when the configuration is created.
(For details, see the Examples in this topic.)

Default: VGA600K

```yaml
Type: MaxVideoRateAllowed
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

### -EnableAdaptiveBandWidthEstimation
When set to True (the default value) Microsoft Lync Server will select the bandwidth rate at which to play a video stream.
This selection will be based on such factors as the network congestion and the client's quality of the client's current network connection.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableG722StereoCodec
When set to True (the default value) allows the use of the G.722 wideband speech codec.
G.722 is a standard voice codec commonly used with Voice over IP applications; with a sampling rate of 16 KHz G.722 provides higher voice quality and clarity than many other commonly-used speech codecs.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableH264Codec
When set to True (the default value) allows the use of the H.264/MPEG-4 AVC video codec.
H.264 is a standard codec commonly used for recording, compressing and distributing high-definition video.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableInCallQoS
PARAMVALUE: $true | $false

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

### -EnableRtpRtcpMultiplexing
PARAMVALUE: $true | $false

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

### -InCallQoSIntervalSeconds
PARAMVALUE: UInt16

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVideoBasedSharing
{{Fill EnableVideoBasedSharing Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.
Accepts pipelined input of media configuration objects.

## OUTPUTS

###  
The `Set-CsMediaConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.

## NOTES

## RELATED LINKS

[New-CsMediaConfiguration]()

[Remove-CsMediaConfiguration]()

[Get-CsMediaConfiguration]()
