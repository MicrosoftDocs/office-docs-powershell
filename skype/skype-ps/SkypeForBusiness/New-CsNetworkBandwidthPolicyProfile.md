---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/new-csnetworkbandwidthpolicyprofile
schema: 2.0.0
title: New-CsNetworkBandwidthPolicyProfile
---

# New-CsNetworkBandwidthPolicyProfile

## SYNOPSIS

Creates a new network bandwidth policy profile.
This cmdlet can also be used to set the bandwidth policies within the profile.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsNetworkBandwidthPolicyProfile [-Identity] <XdsGlobalRelativeIdentity> [-AudioBWLimit <String>]
 [-AudioBWSessionLimit <String>] [-BWPolicy <PSListModifier>] [-Description <String>] [-VideoBWLimit <String>]
 [-VideoBWSessionLimit <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

As part of call admission control (CAC), a bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Skype for Business Server, only audio and video modalities can be assigned bandwidth limitations.) This cmdlet creates a container profile for these policies.
You define the individual policies within the container by specifying the audio and video bandwidth limitations when you call this cmdlet.

Bandwidth policy profiles are applied to network sites by calling the New-CsNetworkSite cmdlet or the Set-CsNetworkSite cmdlet.



## EXAMPLES


### EXAMPLE 1
```

New-CsNetworkBandwidthPolicyProfile -Identity LowBWLimits -AudioBWLimit 2000 -AudioBWSessionLimit 200 -VideoBWLimit 1400 -VideoBWSessionLimit 500

```

Example 1 creates a new bandwidth policy profile named LowBWLimits.
This new profile will have two policies assigned, an audio policy and a video policy (the only two policies possible in Skype for Business Server).
The audio policy is added to the profile by using the AudioBWLimit parameter to assign a limit of (in this case) 2000 kbps to overall audio connections, and the AudioBWSessionLimit parameter to assign 200 kbps as the limit for individual audio sessions.
The same is done to create video session limits, but using the VideoBWLimit and VideoBWSessionLimit parameters.

## PARAMETERS

### -AudioBWLimit

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The maximum amount of bandwidth to allocate for all audio connections.
If a single audio session will cause the audio bandwidth limit to be exceeded, that session will not be allowed to start.

Expressed in kbps.
For example, a value of 1000 would signify 1000 kbps.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the AudioBWSessionLimit parameter but not to AudioBWLimit, AudioBWLimit will default to 0.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioBWSessionLimit

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The maximum amount of bandwidth to allocate per audio session.
Expressed in kbps.
Value must be 40 or higher.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the AudioBWLimit parameter but not to AudioBWSessionLimit, AudioBWSessionLimit will default to 175.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicy

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A list of objects containing bandwidth policy profiles.
Each object in the list consists of a bandwidth modality (audio or video), a bandwidth limitation, and a bandwidth session limitation.

If you supply a value to this parameter, you cannot supply a value to the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, or VideoBWSessionLimit parameter.

Objects in the list can be created by calling the New-CsNetworkBWPolicy cmdlet.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A description of the bandwidth policy profile.
For example, you can use this parameter to clarify the expected use of the profile.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A string value that uniquely identifies the policy.
All bandwidth policy profiles are created at the global scope.
Therefore the scope is implied and only a unique name needs to be specified when creating a new bandwidth policy profile.
Note that this value also populates the BWPolicyProfileID property of the profile.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoBWLimit

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The maximum amount of bandwidth to allocate for all video connections.
If a single video session will cause the video bandwidth limit to be exceeded, that session will not be allowed to start.

Expressed in kbps.
For example, a value of 1000 would signify 1000 kbps.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the VideoBWSessionLimit parameter but not to VideoBWLimit, VideoBWLimit will default to 0.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoBWSessionLimit

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The maximum amount of bandwidth to allocate per video session.
Expressed in kbps.
Value must be 100 or higher.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the VideoBWLimit parameter but not to VideoBWSessionLimit, VideoBWSessionLimit will default to 700.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType.

## NOTES

## RELATED LINKS

[Remove-CsNetworkBandwidthPolicyProfile](Remove-CsNetworkBandwidthPolicyProfile.md)

[Set-CsNetworkBandwidthPolicyProfile](Set-CsNetworkBandwidthPolicyProfile.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)

[New-CsNetworkBWPolicy](New-CsNetworkBWPolicy.md)
