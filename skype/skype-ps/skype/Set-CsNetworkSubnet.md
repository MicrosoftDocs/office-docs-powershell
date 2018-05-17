---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsNetworkSubnet
schema: 2.0.0
---

# Set-CsNetworkSubnet

## SYNOPSIS
Modifies an existing network subnet.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkSubnet [[-Identity] <XdsGlobalRelativeIdentity>] [-Description <String>] [-MaskBits <Int32>]
 [-NetworkSiteID <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkSubnet [-Instance <PSObject>] [-Description <String>] [-MaskBits <Int32>]
 [-NetworkSiteID <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to modify the associated network site, change the description of the subnet, or modify the mask bits for the subnet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkSubnet -Identity 172.11.15.0 -MaskBits 25 -NetworkSiteID Chicago
```

This example modifies the subnet with the Identity (the Subnet ID) 172.11.15.0.
The subnet is modified with a new MaskBits value (25) and a new NetworkSiteID (Chicago).


### -------------------------- Example 2 --------------------------
```
Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"} | Set-CsNetworkSubnet -NetworkSiteID Chicago
```

Example 2 moves all subnets on the Vancouver site to the Chicago site.
To do this, we begin by calling the `Get-CsNetworkSubnet` cmdlet.
This will retrieve a collection of all subnets defined within the Skype for Business Server deployment.
This collection of subnets is then piped to the `Where-Object` cmdlet.
The `Where-Object` cmdlet takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.
Now that the collection consists only of subnets associated with the Vancouver site, we pipe the collection to the `Set-CsNetworkSubnet` cmdlet.
We supply one parameter to the `Set-CsNetworkSubnet` cmdlet: NetworkSiteID.
By passing the parameter a value of Chicago, we're instructing the `Set-CsNetworkSubnet` cmdlet to change the network site ID of every member of the collection to Chicago.


## PARAMETERS

### -Identity
The unique subnet ID of the subnet you want to modify.
This value will be either an IP address (such as 174.11.12.0) or a URL beginning with http: or https:.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to the network subnet object that you want to modify.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType, which can be retrieved by calling the `Get-CsNetworkSubnet` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
A description of the subnet being modified.

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

### -MaskBits
The bitmask to be applied to the subnet.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteID
The site ID of the network site to which this subnet is to be applied.
You can retrieve site IDs for your deployment by calling the `Get-CsNetworkSite` cmdlet.

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType object.
Accepts pipelined input of network subnet objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType.

## NOTES

## RELATED LINKS

[New-CsNetworkSubnet](New-CsNetworkSubnet.md)

[Remove-CsNetworkSubnet](Remove-CsNetworkSubnet.md)

[Get-CsNetworkSubnet](Get-CsNetworkSubnet.md)

