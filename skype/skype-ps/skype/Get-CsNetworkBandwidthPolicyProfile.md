---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsNetworkBandwidthPolicyProfile
schema: 2.0.0
---

# Get-CsNetworkBandwidthPolicyProfile

## SYNOPSIS
Retrieves one or more network bandwidth policy profiles.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsNetworkBandwidthPolicyProfile [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsNetworkBandwidthPolicyProfile [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
As part of call admission control (CAC), a bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Skype for Business Server, only audio and video modalities can be assigned bandwidth limitations.) This cmdlet retrieves one or more container profiles for these policies.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsNetworkBandwidthPolicyProfile
```

Calling the Get-CsNetworkBandwidthPolicyProfile cmdlet without any parameters will retrieve all bandwidth policy profiles defined within the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile
```

This example retrieves the bandwidth policy profile with the Identity LowBWProfile.
Because identities must be unique this will return, at most, one profile.

### -------------------------- Example 3 --------------------------
```
Get-CsNetworkBandwidthPolicyProfile -Filter *50MB*
```

In this example we use the Filter parameter to specify one or more profiles to retrieve based on a wildcard string.
We've used the string *50MB*, which indicates that we want to retrieve all the bandwidth policy profiles with Identity values that contain the string 50MB anywhere within the value.
For example, this would retrieve profiles with identities such as "BW profile for 50MB links", "50MB audio limit", and "video limits of 50MB".


## PARAMETERS

### -Identity
A string value that uniquely identifies the bandwidth policy profile you want to retrieve.
Specifying an Identity will retrieve, at most, one profile.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
A string containing wildcards that is used to retrieve bandwidth policy profiles that have Identity values that match the wildcard pattern.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the network bandwidth policy profile from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType


## NOTES


## RELATED LINKS

[New-CsNetworkBandwidthPolicyProfile]()

[Remove-CsNetworkBandwidthPolicyProfile]()

[Set-CsNetworkBandwidthPolicyProfile]()