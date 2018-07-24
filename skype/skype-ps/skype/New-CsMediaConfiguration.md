---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeforBusiness
online version:
schema: 2.0.0
---

# New-CsMediaConfiguration

## SYNOPSIS
Creates a new collection of media settings.
These settings can be used to specify such things as the supported level of encryption and the maximum allowed video resolution.
This cmdlet was introduced in Lync Server 2010.

## SYNTAX

```
New-CsMediaConfiguration [-EnableQoS <Boolean>] [-EncryptionLevel <EncryptionLevel>] [-EnableSiren <Boolean>]
 [-MaxVideoRateAllowed <MaxVideoRateAllowed>] [-EnableInCallQoS <Boolean>] [-InCallQoSIntervalSeconds <UInt16>]
 [-EnableRtpRtcpMultiplexing <Boolean>] [-EnableVideoBasedSharing <Boolean>]
 [-WaitIceCompletedToAddDialOutUser <Boolean>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new collection of settings that define behaviors for specific media actions.

## EXAMPLES

### EXAMPLE 1
```

```

Example 1 uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity site:Redmond1.
This new configuration requires both parties involved in a multimedia conversation to use encryption.
That requirement is put in place by adding the EncryptionLevel parameter and setting the parameter value to RequireEncryption.

New-CsMediaConfiguration -Identity site:Redmond1 -EncryptionLevel RequireEncryption

### EXAMPLE 2
```

```

This example uses the New-CsMediaConfiguration cmdlet to create a new media configuration with the Identity MediationServer:pool0.litwareinc.com.
This new configuration will have an EnableSiren value of True, which means that Siren is enabled for calls involving this Mediation Server.

New-CsMediaConfiguration -Identity MediationServer:pool0.litwareinc.com -EnableSiren $True

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
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

### -EnableInCallQoS
When set to True, enables call Quality of Service (QoS) settings.

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

### -EnableQoS
QoS monitors the quality of voice signals over a network.

Default: False

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

### -EnableRtpRtcpMultiplexing
PARAMVALUE: $true | $false

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

### -WaitIceCompletedToAddDialOutUser
PARAMVALUE: $true | $false

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

### -EnableSiren
By default, the Mediation Server does not negotiate Siren as a possible codec for calls between itself and clients.
If this setting is True, Siren will be included as a possible codec for use between the Mediation Server and other clients.

Default: False

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### -EnableVideoBasedSharing
{{Fill EnableVideoBasedSharing Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### 
None.

## OUTPUTS

### 
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings.

## NOTES

## RELATED LINKS

[Remove-CsMediaConfiguration](Remove-CsMediaConfiguration.md)

[Set-CsMediaConfiguration](Set-CsMediaConfiguration.md)

[Get-CsMediaConfiguration](Get-CsMediaConfiguration.md)

