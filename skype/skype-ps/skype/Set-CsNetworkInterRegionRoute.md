---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsNetworkInterRegionRoute

## SYNOPSIS
Modifies an existing route that connects network regions within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkInterRegionRoute [[-Identity] <XdsGlobalRelativeIdentity>] [-NetworkRegionID1 <String>]
 [-NetworkRegionID2 <String>] [-NetworkRegionLinkIDs <String>] [-NetworkRegionLinks <PSListModifier>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkInterRegionRoute [-Instance <PSObject>] [-NetworkRegionID1 <String>] [-NetworkRegionID2 <String>]
 [-NetworkRegionLinkIDs <String>] [-NetworkRegionLinks <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet modifies that route association.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkInterRegionRoute -Identity NA_APAC_Route -NetworkRegionLinkIDs "NA_SA,SA_APAC"
```

This example modifies the route NA_APAC_Route by changing the region links that will be traversed along the route.
The NetworkRegionLinkIDs parameter is used with a value of "NA_SA,SA_APAC", which replaces any existing links with the two specified in that string.


### -------------------------- Example 2 --------------------------
```
Set-CsNetworkInterRegionRoute -Identity NA_APAC_Route -NetworkRegionLinks @{add="SA_EMEA"}
```

Like Example 1, Example 2 modifies the links within the NA_APAC_Route route.
However, in this example, instead of replacing all links for that route by using the NetworkRegionLinkIDs parameter, the NetworkRegionLinks parameter is used to add a link to the list of links that already exists on that route.
In this case, the link SA_EMEA is added to the route.
The syntax @{add=\<link\>} adds an element to the list of links.
You can also use the syntax @{replace=\<link\>} to replace all existing links with those specified by \<link\> (which essentially behaves the same as using NetworkRegionLinkIDs), or the syntax @{remove=\<link\>} to remove a link from the list.


### -------------------------- Example 3 --------------------------
```
Set-CsNetworkInterRegionRoute -Identity NA_Route5 -NetworkRegionID2 SouthAmerica -NetworkRegionLinkIDs "NA_SA,SA_APAC"
```

Example 3 modifies the route named NA_Route5.
This example changes one of the regions that comprise this route.
The NetworkRegionID2 parameter is used to specify the new region and then the NetworkRegionLinkIDs parameter is used to create a new list of links to connect the regions of this route.


## PARAMETERS

### -Identity
The unique identifier for the network region route you want to modify.
Network region routes are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that route.

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
An object reference to an existing region route.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType, which can be retrieved by calling the `Get-CsNetworkInterRegionRoute` cmdlet.

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

### -NetworkRegionID1
The Identity (NetworkRegionID) of one of the two regions connected through this route.
The value passed to this parameter must be a different region from the value of the NetworkRegionID2 parameter.
(In other words, you can't route a region to itself.) In addition, the combination of NetworkRegionID1 and NetworkRegionID2 must be unique (for example, you can't have two routes defined that connect NorthAmerica and EMEA).

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
The Identity (NetworkRegionID) of one of the two regions connected through this route.
The value passed to this parameter must be a different region from the value of the NetworkRegionID1 parameter.
(In other words, you can't route a region to itself.) In addition, the combination of NetworkRegionID1 and NetworkRegionID2 must be unique (for example, you can't have two routes defined that connect NorthAmerica and EMEA).

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

### -NetworkRegionLinkIDs
Allows you to specify all the links for this route as a string of comma-separated values.
The values are the identities (NetworkRegionLinkIDs) of the region links.
If you enter values for both NetworkRegionLinkIDs and NetworkRegionLinks, NetworkRegionLinkIDs will be ignored.
Any links modified using this parameter will replace all existing links in the route.

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

### -NetworkRegionLinks
A list object containing the identities (NetworkRegionLinkIDs) of the region links that apply to this route.
For this cmdlet, this parameter differs from the NetworkRegionLinkIDs in that in addition to allowing you to replace all existing links for this route, you can also add or remove individual links.

```yaml
Type: PSListModifier
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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType object.
Accepts pipelined input of network interregion route objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType.

## NOTES

## RELATED LINKS

[New-CsNetworkInterRegionRoute]()

[Remove-CsNetworkInterRegionRoute]()

[Get-CsNetworkInterRegionRoute]()
