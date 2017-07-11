---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsNetworkRegionLink

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies a link between two network regions configured for call admission control (CAC).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies a link between two network regions configured for call admission control (CAC).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsNetworkRegionLink [[-Identity] <XdsGlobalRelativeIdentity>] [-BWPolicyProfileID <String>]
 [-NetworkRegionID1 <String>] [-NetworkRegionID2 <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkRegionLink [-Instance <PSObject>] [-BWPolicyProfileID <String>] [-NetworkRegionID1 <String>]
 [-NetworkRegionID2 <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Regions within a network are linked through physical WAN connectivity.
This cmdlet modifies a link between two regions, allowing you to change the regions that are linked as well as the bandwidth limitations on audio and video connections between those regions.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsNetworkRegionLink cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsNetworkRegionLink"}

**Below Content Applies To:** Skype for Business Server 2015

Regions within a network are linked through physical WAN connectivity.
This cmdlet modifies a link between two regions, allowing you to change the regions that are linked as well as the bandwidth limitations on audio and video connections between those regions.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsNetworkRegionLink -Identity NA_EMEA -BWPolicyProfileID HighBWLimits
```

This example changes the bandwidth policy profile of the network region link named NA_EMEA to the HighBWLimits profile.
The name of the network region link we want to modify is specified as the value for the Identity parameter.
Next, we've assigned the value HighBWLimits to the BWPolicyProfile parameter.
This will assign the bandwidth limitations defined in that bandwidth policy profile (HighBWLimits) to connections between these regions.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example changes the bandwidth policy profile of the network region link named NA_EMEA to the HighBWLimits profile.
The name of the network region link we want to modify is specified as the value for the Identity parameter.
Next, we've assigned the value HighBWLimits to the BWPolicyProfile parameter.
This will assign the bandwidth limitations defined in that bandwidth policy profile (HighBWLimits) to connections between these regions.

Set-CsNetworkRegionLink -Identity NA_EMEA -BWPolicyProfileID HighBWLimits

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example changes the bandwidth policy profile of the network region link named NA_EMEA to the HighBWLimits profile.
The name of the network region link we want to modify is specified as the value for the Identity parameter.
Next, we've assigned the value HighBWLimits to the BWPolicyProfile parameter.
This will assign the bandwidth limitations defined in that bandwidth policy profile (HighBWLimits) to connections between these regions.

Set-CsNetworkRegionLink -Identity NA_EMEA -BWPolicyProfileID HighBWLimits

## PARAMETERS

### -Identity
The unique identifier for the network region link you want to modify.
Network region links are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that link.

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

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

An object reference to a network region link.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType, which can be retrieved by calling Get-CsNetworkRegionLink.



**Below Content Applies To:** Skype for Business Server 2015

An object reference to a network region link.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType, which can be retrieved by calling the Get-CsNetworkRegionLink cmdlet.



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

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the limitations for this link.
You can retrieve a list of available profiles by calling the Get-CsNetworkBandwidthPolicyProfile cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID1
The Identity (NetworkRegionID) of the region that is linked to the region identified by the NetworkRegionID2 property.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID2
The Identity (NetworkRegionID) of the region that is linked to the region identified by the NetworkRegionID1 property.

```yaml
Type: String
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType object.
Accepts pipelined input of network region link objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b3d5d203-2aa7-4a54-93d4-30bcda391d68(OCS.14).aspx)

[New-CsNetworkRegionLink]()

[Remove-CsNetworkRegionLink]()

[Get-CsNetworkRegionLink]()

[Get-CsNetworkBandwidthPolicyProfile]()

[Online Version](http://technet.microsoft.com/EN-US/library/b3d5d203-2aa7-4a54-93d4-30bcda391d68(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b3d5d203-2aa7-4a54-93d4-30bcda391d68(OCS.16).aspx)

