---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsNetworkRegionLink
schema: 2.0.0
---

# New-CsNetworkRegionLink

## SYNOPSIS

Creates a link between two regions configured for call admission control (CAC).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsNetworkRegionLink [-Identity] <XdsGlobalRelativeIdentity> -NetworkRegionID1 <String>
 -NetworkRegionID2 <String> [-BWPolicyProfileID <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsNetworkRegionLink -NetworkRegionID1 <String> -NetworkRegionID2 <String> -NetworkRegionLinkID <String>
 [-BWPolicyProfileID <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Regions within a network are linked through physical WAN connectivity.
This cmdlet defines a link between two regions and sets the bandwidth limitations on audio and video connections between these regions.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsNetworkRegionLink -Identity NA_EMEA -NetworkRegionID1 NorthAmerica -NetworkRegionID2 EMEA -BWPolicyProfileID LowBWLimits
```

This example creates a new network region link named NA_EMEA to link the regions NorthAmerica and EMEA.
The region link name is specified as the value for the Identity parameter.
(This will automatically be assigned as the value of the NetworkRegionLinkID.) The two network regions being linked are required parameters for creating the link, in this case the regions named NorthAmerica and EMEA.
In this example we've also assigned a value to the BWPolicyProfile parameter.
This will assign the bandwidth limitations defined in that bandwidth policy profile (LowBWLimits) to connections between these regions.
If no BWPolicyProfileID is supplied, there are no bandwidth limitations on connections between these two regions.
(There could still be limitations between sites.
For details, see the New-CsNetworkSite cmdlet help topic.)


## PARAMETERS

### -Identity
A unique identifier for the newly created network region link.
Network region links are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that link.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID1
The Identity (NetworkRegionID) of the region that is linked to the region identified by the NetworkRegionID2 parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID2
The Identity (NetworkRegionID) of the region that is linked to the region identified by the NetworkRegionID1 parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionLinkID
This value is the same as the Identity.
You cannot specify both an Identity and a NetworkRegionLinkID; a value entered for one will be automatically used for both.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the bandwidth limitations for this link.
You can retrieve a list of available profiles by calling the Get-CsNetworkBandwidthPolicyProfile cmdlet.

```yaml
Type: String
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType.

## NOTES

## RELATED LINKS

[Remove-CsNetworkRegionLink](Remove-CsNetworkRegionLink.md)

[Set-CsNetworkRegionLink](Set-CsNetworkRegionLink.md)

[Get-CsNetworkRegionLink](Get-CsNetworkRegionLink.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)

[New-CsNetworkSite](New-CsNetworkSite.md)


