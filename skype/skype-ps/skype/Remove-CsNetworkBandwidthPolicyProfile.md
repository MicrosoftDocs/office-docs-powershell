---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsNetworkBandwidthPolicyProfile
schema: 2.0.0
---

# Remove-CsNetworkBandwidthPolicyProfile

## SYNOPSIS
Removes a network bandwidth policy profile.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsNetworkBandwidthPolicyProfile [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
As part of call admission control (CAC), a bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Skype for Business Server, only audio and video modalities can be assigned bandwidth limitations.) This cmdlet removes a container profile for these policies.

IMPORTANT: If a profile has been assigned to a site (by using the `New-CsNetworkSite` cmdlet or the `Set-CsNetworkSite` cmdlet), to an inter-site policy (by using the `New-CsNetworkInterSitePolicy` cmdlet or the `Set-CsNetworkInterSitePolicy` cmdlet), or to a network region link (by using the `New-CsNetworkRegionLink` cmdlet or the `Set-CsNetworkRegionLink` cmdlet) it cannot be removed.
You will receive an error if you try to remove the profile by calling the `Remove-CsNetworkBandwidthPolicyProfile` cmdlet.
You must first remove the profile from all sites, inter-site policies and network region links, and then you can remove the profile.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile
```

This example removes the bandwidth policy profile with the Identity LowBWProfile.
Because identities must be unique this will remove, at most, one profile.


### -------------------------- Example 2 --------------------------
```
Get-CsNetworkSite | Where-Object {$_.BWPolicyProfileID -eq "LowBWProfile"} | Set-CsNetworkSite -BWPolicyProfileID $null

Remove-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile
```

Example 2 removes all references to the bandwidth policy profile with the Identity LowBWProfile from all sites to which it has been assigned and then removes that profile.
The first line of this example begins with a call to the `Get-CsNetworkSite` cmdlet to retrieve all sites configured for call admission control (CAC).
This collection of sites is then piped to the `Where-Object` cmdlet, which looks for only those sites with a BWPolicyProfileID that is equal to (-eq) LowBWProfile.
This narrowed-down collection, containing only sites with a BWPolicyProfileID value of LowBWProfile, is piped to the `Set-CSNetworkSite` cmdlet, which modifies each of these sites to change the BWPolicyProfileID to Null ($null).
What we've just done is to find all sites with a BWPolicyProfileID of LowBWProfile and set that value to Null.
At this point there are no sites using the LowBWProfile profile.
We now call the `Remove-CsNetworkBandwidthPolicyProfile` cmdlet on the profile LowBWProfile to remove the profile, knowing that the profile is not in use by any sites.

To ensure that the profile is not in use anywhere in the network configuration, perform the same steps in Line 1 against inter-site policies and network region links.


## PARAMETERS

### -Identity
A string value that uniquely identifies the bandwidth policy profile you want to remove.
Specifying an Identity will remove, at most, one profile.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType object.
Accepts pipelined input of network bandwidth policy profile objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType.

## NOTES

## RELATED LINKS

[New-CsNetworkBandwidthPolicyProfile](New-CsNetworkBandwidthPolicyProfile.md)

[Set-CsNetworkBandwidthPolicyProfile](Set-CsNetworkBandwidthPolicyProfile.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)

