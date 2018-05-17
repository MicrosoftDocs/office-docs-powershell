---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsNetworkRegion
schema: 2.0.0
---

# Remove-CsNetworkRegion

## SYNOPSIS
Removes an existing network region.
Network regions represent network hubs or backbones in an enterprise network.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsNetworkRegion [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
A network region interconnects various parts of a network across multiple geographic areas.
Every network region must be associated with a central site.
The central site is the data center site on which the bandwidth policy service is running.
Use this cmdlet to remove a network region.

Note that a network region cannot be removed if it is associated with a network site (in other words, the NetworkRegionID of any site is equal to the Identity of the region).
If you attempt to remove a region associated with a site you'll receive an error message.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsNetworkRegion -Identity NorthAmerica
```

Example 1 removes the network region with the Identity NorthAmerica.
Because identities are unique this command removes only one network region.


### -------------------------- Example 2 --------------------------
```
Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"} | Remove-CsNetworkRegion
```

This example removes all network regions associated with the central site Redmond.
The command begins by calling the `Get-CsNetworkRegion` cmdlet, with no parameters, to retrieve a collection of all network regions defined for the Skype for Business Server deployment.
This collection is then piped to the `Where-Object` cmdlet.
The `Where-Object` cmdlet filters this collection to return only those items (network regions) where the CentralSite value is equal to (-eq) site:Redmond.
After narrowing the collection down to those items, this new collection is piped to the `Remove-CsNetworkRegion` cmdlet, which removes every item in that collection.


### -------------------------- Example 3 --------------------------
```
Get-CsNetworkSite | Where-Object {$_.NetworkRegionID -eq "NorthAmerica"} | Set-CsNetworkSite -NetworkRegionID $null -BypassID $null

Remove-CsNetworkRegion -Identity "NorthAmerica"
```

This example removes the network region with the Identity NorthAmerica.
However, a region cannot be removed if it is associated with a site.
So this example first removes any association between the NorthAmerica region and a site.

The example begins by calling the `Get-CsNetworkSite` cmdlet, with no parameters, to retrieve a collection of all network sites defined for the Skype for Business Server deployment.
This collection is then piped to the `Where-Object` cmdlet.
The `Where-Object` cmdlet filters this collection to return only those items (network sites) where the NetworkRegionID value is equal to (-eq) NorthAmerica.
After narrowing the collection down to those items, this new collection is piped to the `Set-CsNetworkSite` cmdlet.
For each site containing the NetworkRegionID NorthAmerica, we set the NetworkRegionID to Null ($null).
This removes the reference to the region on that site.
However, a site can't have a bypass ID if it isn't associated with a site.
So in addition to removing the reference to the region by setting the NetworkRegionID to Null, we must also remove the bypass association by setting BypassID to Null.

After line 1 completes, any site that was associated with the NorthAmerica region is no longer tied to a region or to any bypass settings.
At this point we can call line 2, which removes the network region.


## PARAMETERS

### -Identity
The unique identifier of the network region you want to remove.
The Identity will be in the form of a string that uniquely identifies that region.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType object.
Accepts pipelined input of network region objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType.

## NOTES

## RELATED LINKS

[New-CsNetworkRegion](New-CsNetworkRegion.md)

[Set-CsNetworkRegion](Set-CsNetworkRegion.md)

[Get-CsNetworkRegion](Get-CsNetworkRegion.md)
