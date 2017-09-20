---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsMediaConfiguration

## SYNOPSIS

Creates a new collection of media settings.
These settings can be used to specify such things as the supported level of encryption and the maximum allowed video resolution.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsMediaConfiguration [-Identity] <XdsIdentity> [-EnableQoS <Boolean>] [-EnableSiren <Boolean>]
 [-EncryptionLevel <EncryptionLevel>] [-MaxVideoRateAllowed <MaxVideoRateAllowed>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [-EnableAdaptiveBandWidthEstimation <Boolean>] [-EnableG722StereoCodec <Boolean>]
 [-EnableH264Codec <Boolean>] [-EnableInCallQoS <Boolean>] [-EnableRtpRtcpMultiplexing <Boolean>]
 [-InCallQoSIntervalSeconds <UInt16>] [-EnableVideoBasedSharing <Boolean>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a new collection of settings that define behaviors for specific media actions.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsMediaConfiguration -Identity site:Redmond1 -EncryptionLevel RequireEncryption
```

Example 1 uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity site:Redmond1.
This new configuration requires both parties involved in a multimedia conversation to use encryption.
That requirement is put in place by adding the EncryptionLevel parameter and setting the parameter value to RequireEncryption.



### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsMediaConfiguration -Identity MediationServer:pool0.litwareinc.com -EnableSiren $True
```

This example uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity MediationServer:pool0.litwareinc.com.
This new configuration will have an EnableSiren value of True, which means that Siren is enabled for calls involving this Mediation Server.



## PARAMETERS

### -Identity

A unique identifier specifying the scope at which this configuration is applied (site or service).
A configuration at the site scope would be entered as site:\<site name\>, such as site:Redmond.
A service would be entered as \<server role\>:\<fqdn\>, such as MediationServer:pool0.litwareinc.com.
A media configuration at the global scope will always exist and cannot be removed, so a new global configuration cannot be created.

Media configurations created at the service scope can be created only for the A/V Conferencing service, Mediation Server, and Application Server.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableQoS

QoS monitors the quality of voice signals over a network.

Default: False



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

By default, the Mediation Server does not negotiate Siren as a possible codec for calls between itself and clients.
If this setting is True, Siren will be included as a possible codec for use between the Mediation Server and other clients.

Default: False



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

### -InMemory

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
H.264 is a standard codec commonly used for recording, compressing, and distributing high-definition video.

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
When set to True, enables call Quality of Service (QoS) settings.

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
Specifies the interval between call QoS actions.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings.

## NOTES

## RELATED LINKS

[Remove-CsMediaConfiguration]()

[Set-CsMediaConfiguration]()

[Get-CsMediaConfiguration]()

