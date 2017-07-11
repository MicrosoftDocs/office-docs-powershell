---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsNetworkSubnet

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing network subnet.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an existing network subnet.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsNetworkSubnet [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to remove a network subnet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsNetworkSubnet cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsNetworkSubnet"}

**Below Content Applies To:** Skype for Business Server 2015

Each subnet must be associated with a network site for the purposes of determining the geographic location of the host belonging to this subnet.
Use this cmdlet to remove a network subnet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsNetworkSubnet -Identity 172.11.15.0
```

This example removes the subnet with the Identity (the Subnet ID) 172.11.15.0.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the subnet with the Identity (the Subnet ID) 172.11.15.0.

Remove-CsNetworkSubnet -Identity 172.11.15.0

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the subnet with the Identity (the Subnet ID) 172.11.15.0.

Remove-CsNetworkSubnet -Identity 172.11.15.0

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"} | Remove-CsNetworkSubnet
```

Example 2 removes all subnets associated with the Vancouver site.
To do this, we begin by calling the Get-CsNetworkSubnet cmdlet.
This will retrieve a collection of all subnets defined within the Microsoft Lync Server 2010 deployment.
This collection of subnets is then piped to the Where-Object cmdlet.
Where-Object takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.
Now that the collection consists only of subnets associated with the Vancouver site, we pipe the collection to Remove-CsNetworkSubnet, which removes every item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all subnets associated with the Vancouver site.
To do this, we begin by calling the Get-CsNetworkSubnet cmdlet.
This will retrieve a collection of all subnets defined within the Lync Server deployment.
This collection of subnets is then piped to the Where-Object cmdlet.
Where-Object takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.
Now that the collection consists only of subnets associated with the Vancouver site, we pipe the collection to Remove-CsNetworkSubnet, which removes every item in the collection.

Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"} | Remove-CsNetworkSubnet

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all subnets associated with the Vancouver site.
To do this, we begin by calling the Get-CsNetworkSubnet cmdlet.
This will retrieve a collection of all subnets defined within the Skype for Business Server 2015 deployment.
This collection of subnets is then piped to the Where-Object cmdlet.
The Where-Object cmdlet takes that collection and narrows it down to only those subnets with a NetworkSiteID equal to (-eq) Vancouver.
Now that the collection consists only of subnets associated with the Vancouver site, we pipe the collection to the Remove-CsNetworkSubnet cmdlet, which removes every item in the collection.

Get-CsNetworkSubnet | Where-Object {$_.NetworkSiteID -eq "Vancouver"} | Remove-CsNetworkSubnet

## PARAMETERS

### -Identity
The unique subnet ID of the subnet you want to remove.
This value will be an IP address (such as 174.11.12.0).

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType object.
Accepts pipelined input of network subnet objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.SubnetType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/251ddb5c-4837-4810-b46f-d276f9535653(OCS.14).aspx)

[New-CsNetworkSubnet]()

[Set-CsNetworkSubnet]()

[Get-CsNetworkSubnet]()

[Online Version](http://technet.microsoft.com/EN-US/library/251ddb5c-4837-4810-b46f-d276f9535653(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/251ddb5c-4837-4810-b46f-d276f9535653(OCS.16).aspx)

