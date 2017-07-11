---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsNetworkInterRegionRoute

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a route that connects network regions within a call admission control (CAC) configuration.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a route that connects network regions within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsNetworkInterRegionRoute [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet removes one of these route associations.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsNetworkInterRegionRoute cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsNetworkInterRegionRoute"}

Below Content Applies To: Skype for Business Server 2015

Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet removes one of these route associations.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsNetworkInterRegionRoute -Identity NA_APAC_Route
```

Example 1 removes the route with the Identity NA_APAC_Route.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the route with the Identity NA_APAC_Route.

Remove-CsNetworkInterRegionRoute -Identity NA_APAC_Route

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the route with the Identity NA_APAC_Route.

Remove-CsNetworkInterRegionRoute -Identity NA_APAC_Route

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"} | Remove-CsNetworkInterRegionRoute
```

Example 2 removes all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.
Once the collection contains only the routes that include the NorthAmerica region, we pipe the collection to Remove-CsNetworkInterRegionRoute, which removes each of those routes.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.
Once the collection contains only the routes that include the NorthAmerica region, we pipe the collection to Remove-CsNetworkInterRegionRoute, which removes each of those routes.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"} | Remove-CsNetworkInterRegionRoute

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.
Once the collection contains only the routes that include the NorthAmerica region, we pipe the collection to the Remove-CsNetworkInterRegionRoute cmdlet, which removes each of those routes.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"} | Remove-CsNetworkInterRegionRoute

## PARAMETERS

### -Identity
The unique identifier for the network region route you want to remove.
Network region routes are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that route.

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType object.
Accepts pipelined input of network inter-region route objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/91948c03-2bcb-4e25-b0b6-23827e85bbb3(OCS.14).aspx)

[New-CsNetworkInterRegionRoute]()

[Set-CsNetworkInterRegionRoute]()

[Get-CsNetworkInterRegionRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/91948c03-2bcb-4e25-b0b6-23827e85bbb3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/91948c03-2bcb-4e25-b0b6-23827e85bbb3(OCS.16).aspx)

