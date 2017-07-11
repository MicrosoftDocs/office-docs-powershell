---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisSubnet

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a Location Information Server (LIS) subnet.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a Location Information Server (LIS) subnet.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsLisSubnet -Subnet <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enhanced 9-1-1 (E9-1-1) allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes a subnet from the location configuration database.
Removing the subnet will not remove the location associated with that subnet.
Use the Remove-CsLisLocation cmdlet to remove a location.

If you attempt to remove a subnet that does not exist, no action will be taken and you will not receive an error or a warning message.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsLisSubnet cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsLisSubnet"}

Below Content Applies To: Skype for Business Server 2015

Enhanced 9-1-1 (E9-1-1) allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes a subnet from the location configuration database.
Removing the subnet will not remove the location associated with that subnet.
Use the Remove-CsLisLocation cmdlet to remove a location.

If you attempt to remove a subnet that does not exist, no action will be taken and you will not receive an error or a warning message.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsLisSubnet -Subnet 192.10.10.0
```

Example 1 removes the LIS subnet location entry for the subnet with the IP address 192.10.10.0.
The command in this example includes only one (required) parameter: Subnet.
The value of the Subnet in this example is an IPv4 address, 192.10.10.0.

If this subnet is associated with a location, that location will not be removed, only the subnet will be removed from the location mapping.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the LIS subnet location entry for the subnet with the IP address 192.10.10.0.
The command in this example includes only one (required) parameter: Subnet.
The value of the Subnet in this example is an IPv4 address, 192.10.10.0.

If this subnet is associated with a location, that location will not be removed, only the subnet will be removed from the location mapping.

Remove-CsLisSubnet -Subnet 192.10.10.0

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the LIS subnet location entry for the subnet with the IP address 192.10.10.0.
The command in this example includes only one (required) parameter: Subnet.
The value of the Subnet in this example is an IPv4 address, 192.10.10.0.

If this subnet is associated with a location, that location will not be removed, only the subnet will be removed from the location mapping.

Remove-CsLisSubnet -Subnet 192.10.10.0

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLisSubnet | Where-Object {$_.Location -eq "Bldg30/Room1000"} | Remove-CsLisSubnet
```

This example removes all subnets that are associated with the location Bldg30/Room1000.
The example begins with a call to the Get-CsLisSubnet cmdlet, which returns a collection of all LIS subnets.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that is equal to (-eq) the string Bldg30/Room1000.
Finally, we pipe this collection of subnets with that Location to the Remove-CsLisSubnet cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the subnets that reference those locations are removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all subnets that are associated with the location Bldg30/Room1000.
The example begins with a call to the Get-CsLisSubnet cmdlet, which returns a collection of all LIS subnets.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that is equal to (-eq) the string Bldg30/Room1000.
Finally, we pipe this collection of subnets with that Location to the Remove-CsLisSubnet cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the subnets that reference those locations are removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

Get-CsLisSubnet | Where-Object {$_.Location -eq "Bldg30/Room1000"} | Remove-CsLisSubnet

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all subnets that are associated with the location Bldg30/Room1000.
The example begins with a call to the Get-CsLisSubnet cmdlet, which returns a collection of all LIS subnets.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that is equal to (-eq) the string Bldg30/Room1000.
Finally, we pipe this collection of subnets with that Location to the Remove-CsLisSubnet cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the subnets that reference those locations are removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

Get-CsLisSubnet | Where-Object {$_.Location -eq "Bldg30/Room1000"} | Remove-CsLisSubnet

## PARAMETERS

### -Subnet
Below Content Applies To: Lync Server 2010

The IP address of the subnet you want to remove.
This value will be either an IPv4 address (digits separated by periods, such as 192.0.2.0).



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

The IP address of the subnet you want to remove.
This value will be an IPv4 address (digits separated by periods, such as 192.0.2.0).



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Accepts pipelined input of Location Information Server (LIS) subnet objects.

## OUTPUTS

###  
This cmdlet removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f8a87038-cc71-4fec-8496-574da0aa963f(OCS.14).aspx)

[Set-CsLisSubnet]()

[Get-CsLisSubnet]()

[Remove-CsLisLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/f8a87038-cc71-4fec-8496-574da0aa963f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f8a87038-cc71-4fec-8496-574da0aa963f(OCS.16).aspx)

