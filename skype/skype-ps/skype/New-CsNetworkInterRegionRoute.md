---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsNetworkInterRegionRoute
schema: 2.0.0
---

# New-CsNetworkInterRegionRoute

## SYNOPSIS

Creates a new route that connects network regions within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsNetworkInterRegionRoute [-Identity] <XdsGlobalRelativeIdentity> -NetworkRegionID1 <String>
 -NetworkRegionID2 <String> [-NetworkRegionLinkIDs <String>] [-NetworkRegionLinks <PSListModifier>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsNetworkInterRegionRoute -InterNetworkRegionRouteID <String> -NetworkRegionID1 <String>
 -NetworkRegionID2 <String> [-NetworkRegionLinkIDs <String>] [-NetworkRegionLinks <PSListModifier>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet creates that route association.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsNetworkInterRegionRoute -Identity NA_APAC_Route -NetworkRegionID1 NorthAmerica -NetworkRegionID2 APAC -NetworkRegionLinkIDs "NA_EMEA,EMEA_APAC"

```

Example 1 creates a new network region route between the NorthAmerica region and the APAC region.
We give the new route the Identity NA_APAC_Route.
(This will automatically be assigned as the InterNetworkRegionRouteID.) The regions being connected are NorthAmerica, which is passed as the value to the NetworkRegionID1 parameter, and APAC, which is passed as the value to the NetworkRegionID2 parameter.
In this example we're assuming there is no region link configured to link NorthAmerica directly to APAC.
However, there are links from NorthAmerica to EMEA (NA_EMEA), and from EMEA to APAC (EMEA_APAC).
We use both those links, separated by commas, as the value of the NetworkRegionLinkIDs parameter.
This will route connections from NorthAmerica to APAC through EMEA and apply any bandwidth limitations to audio and video connections associated with those links.


## PARAMETERS

### -Identity
A unique identifier for the newly created network region route.
Network region routes are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that route.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InterNetworkRegionRouteID
This value is the same as the Identity.
You cannot specify both an Identity and an InterNetworkRegionRouteID; a value entered for one will be automatically used for both.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

Required: True
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionLinkIDs
Allows you to specify all the links for this route as a string of comma-separated values.
The values are the identities (NetworkRegionLinkIDs) of the region links.
If you enter values for both NetworkRegionLinkIDs and NetworkRegionLinks, NetworkRegionLinkIDs will be ignored.
This parameter provides a convenient way to specify the list of links without having to construct a list object and pass it to the NetworkRegionLinks parameter.

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
For this cmdlet, this parameter differs from the NetworkRegionLinkIDs parameter only in the format if you enter more than one link.
The NetworkRegionLinkIDs parameter is the recommended method for defining the initial list with this cmdlet.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType.

## NOTES

## RELATED LINKS

[Remove-CsNetworkInterRegionRoute]()

[Set-CsNetworkInterRegionRoute]()

[Get-CsNetworkInterRegionRoute]()

