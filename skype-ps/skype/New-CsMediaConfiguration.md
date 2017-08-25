---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsMediaConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new collection of media settings.
These settings can be used to specify such things as the supported level of encryption and the maximum allowed video resolution.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet creates a new collection of settings that define behaviors for specific media actions.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsMediaConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsMediaConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet creates a new collection of settings that define behaviors for specific media actions.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsMediaConfiguration -Identity site:Redmond1 -EncryptionLevel RequireEncryption
```

Example 1 uses New-CsMediaConfiguration to create a new media configuration with the Identity site:Redmond1.
This new configuration requires both parties involved in a multimedia conversation to use encryption.
That requirement is put in place by adding the EncryptionLevel parameter and setting the parameter value to RequireEncryption.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 uses New-CsMediaConfiguration to create a new media configuration with the Identity site:Redmond1.
This new configuration requires both parties involved in a multimedia conversation to use encryption.
That requirement is put in place by adding the EncryptionLevel parameter and setting the parameter value to RequireEncryption.

New-CsMediaConfiguration -Identity site:Redmond1 -EncryptionLevel RequireEncryption

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity site:Redmond1.
This new configuration requires both parties involved in a multimedia conversation to use encryption.
That requirement is put in place by adding the EncryptionLevel parameter and setting the parameter value to RequireEncryption.

New-CsMediaConfiguration -Identity site:Redmond1 -EncryptionLevel RequireEncryption

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsMediaConfiguration -Identity MediationServer:pool0.litwareinc.com -EnableSiren $True
```

This example uses New-CsMediaConfiguration to create a new media configuration with the Identity MediationServer:pool0.litwareinc.com.
This new configuration will have an EnableSiren value of True, which means that Siren is enabled for calls involving this Mediation Server.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example uses New-CsMediaConfiguration to create a new media configuration with the Identity MediationServer:pool0.litwareinc.com.
This new configuration will have an EnableSiren value of True, which means that Siren is enabled for calls involving this Mediation Server.

New-CsMediaConfiguration -Identity MediationServer:pool0.litwareinc.com -EnableSiren $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity MediationServer:pool0.litwareinc.com.
This new configuration will have an EnableSiren value of True, which means that Siren is enabled for calls involving this Mediation Server.

New-CsMediaConfiguration -Identity MediationServer:pool0.litwareinc.com -EnableSiren $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

A unique identifier specifying the scope at which this configuration is applied (site or service).
A configuration at the site scope would be entered as site:\<site name\>, such as site:Redmond.
A service would be entered as \<server role\>:\<fqdn\>, such as MediationServer:pool0.litwareinc.com.
A media configuration at the global scope will always exist and cannot be removed, so a new global configuration cannot be created.

Media configurations created at the service scope can be created only for the Conferencing Server, Mediation Server, and Application Server.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

This parameter enables or disables Quality of Service (QoS) marking on the Mediation Server.
QoS monitors the quality of voice signals over a network.
Setting this parameter to True causes the Mediation Server to perform Differentiated Services Code Point (DSCP) marking on voice packets.
This helps to provide a QoS guarantee on IP networks.
However, in a network that has been properly provisioned for voice transmission, this is not necessary.
But if you are unsure of bandwidth capacity, setting this parameter to True assures good voice quality even in suboptimal environments.

Default: False



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

By default, the Mediation Server does not negotiate Siren between itself and other Microsoft Unified Communications endpoints. 
If this setting is True, Siren will be included as a possible codec for use between the Mediation Server and other Unified Communications endpoints.

Default: False



**Below Content Applies To:** Lync Server 2013

By default, the Mediation Server does not negotiate Siren as a possible codec for calls between itself and other Lync clients.
If this setting is True, Siren will be included as a possible codec for use between the Mediation Server and other Lync clients.

Default: False



**Below Content Applies To:** Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

The level of encryption between  Unified Communications entities.

Valid values:

SupportEncryption - secure real-time transport protocol (SRTP) will be used if it can be negotiated.

RequireEncryption - SRTP must be negotiated.

DoNotSupportEncryption - SRTP must not be used.

Default: RequireEncryption



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3b60c36f-f824-4948-aa46-6745b40b9641(OCS.14).aspx)

[Remove-CsMediaConfiguration]()

[Set-CsMediaConfiguration]()

[Get-CsMediaConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/3b60c36f-f824-4948-aa46-6745b40b9641(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3b60c36f-f824-4948-aa46-6745b40b9641(OCS.16).aspx)

