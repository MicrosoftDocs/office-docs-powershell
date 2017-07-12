---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkSubnet

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves information about one or more network subnets.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves information about one or more network subnets.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkSubnet [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkSubnet [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to retrieve information about the subnet, including the Identity (the subnet ID), the number of mask bits, the associated network site, and the description of the subnet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkSubnet cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsNetworkSubnet"}

**Below Content Applies To:** Lync Server 2013

Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to retrieve information about the subnet, including the Identity (the subnet ID), the number of mask bits, the associated network site, and the description of the subnet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkSubnet cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkSubnet"}

**Below Content Applies To:** Skype for Business Server 2015

Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to retrieve information about the subnet, including the Identity (the subnet ID), the number of mask bits, the associated network site, and the description of the subnet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSubnet
```

This example retrieves all subnets within the Microsoft Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves all subnets within the Lync Server deployment.

Get-CsNetworkSubnet

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all subnets within the Skype for Business Server 2015 deployment.

Get-CsNetworkSubnet

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSubnet -Identity 172.11.15.0
```

This example retrieves all information about the subnet with the Identity (the Subnet ID) 172.11.15.0.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example retrieves all information about the subnet with the Identity (the Subnet ID) 172.11.15.0.

Get-CsNetworkSubnet -Identity 172.11.15.0

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all information about the subnet with the Identity (the Subnet ID) 172.11.15.0.

Get-CsNetworkSubnet -Identity 172.11.15.0

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSubnet -Filter 172.11.*
```

This example retrieves all subnets with identities that begin with 172.11..

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all subnets with identities that begin with 172.11..

Get-CsNetworkSubnet -Filter 172.11.*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all subnets with identities that begin with 172.11.

Get-CsNetworkSubnet -Filter 172.11.*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"}
```

Example 4 retrieves all subnets associated with the Vancouver site.
We first call Get-CsNetworkSubnet cmdlet with no parameters, which, as we saw in Example 2, retrieves all defined subnets.
We then pipe this collection of subnets to the Where-Object cmdlet.
Where-Object takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 retrieves all subnets associated with the Vancouver site.
We first call Get-CsNetworkSubnet cmdlet with no parameters, which, as we saw in Example 2, retrieves all defined subnets.
We then pipe this collection of subnets to the Where-Object cmdlet.
Where-Object takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.

Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 retrieves all subnets associated with the Vancouver site.
We first call the Get-CsNetworkSubnet cmdlet with no parameters, which, as we saw in Example 2, retrieves all defined subnets.
We then pipe this collection of subnets to the Where-Object cmdlet.
The Where-Object cmdlet takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.

Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"}

## PARAMETERS

### -Identity
The unique subnet ID of the subnet you want to retrieve.
This value will be an IP address (such as 174.11.12.0).

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
Use this parameter to perform a wildcard search of all subnets based on Identity.
For example, the Filter value 172.11.* will retrieve all subnets with an Identity beginning with 172.11.
(such as 172.11.10.0, 172.11.25.0, etc.).

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
Retrieves the network subnet information from the local replica of the Central Management store, rather than the Central Management store itself.

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

###  
None.

## OUTPUTS

###  
Returns one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ad74155a-8d83-42f6-bb1e-8bfc7d57d5b0(OCS.14).aspx)

[New-CsNetworkSubnet]()

[Remove-CsNetworkSubnet]()

[Set-CsNetworkSubnet]()

[Online Version](http://technet.microsoft.com/EN-US/library/ad74155a-8d83-42f6-bb1e-8bfc7d57d5b0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ad74155a-8d83-42f6-bb1e-8bfc7d57d5b0(OCS.16).aspx)

