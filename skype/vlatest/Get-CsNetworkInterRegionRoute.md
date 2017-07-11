---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkInterRegionRoute

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves one or more routes that connect network regions within a call admission control (CAC) configuration.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves one or more routes that connect network regions within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkInterRegionRoute [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkInterRegionRoute [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet retrieves information about these route associations.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkInterRegionRoute cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkInterRegionRoute"}

Below Content Applies To: Skype for Business Server 2015

Every region within a CAC configuration must have some way to access every other region.
While region links set bandwidth limitations on the connections between regions and also represent the physical links, a route determines which linked path the connection will traverse from one region to another.
This cmdlet retrieves information about these route associations.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterRegionRoute -Identity NA_APAC_Route
```

Example 1 retrieves the route with the Identity NA_APAC_Route.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves the route with the Identity NA_APAC_Route.

Get-CsNetworkInterRegionRoute -Identity NA_APAC_Route

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves the route with the Identity NA_APAC_Route.

Get-CsNetworkInterRegionRoute -Identity NA_APAC_Route

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterRegionRoute -Filter *APAC*
```

In Example 2, we use the Filter parameter to retrieve all routes that contain the string APAC anywhere within the Identity.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, we use the Filter parameter to retrieve all routes that contain the string APAC anywhere within the Identity.

Get-CsNetworkInterRegionRoute -Filter *APAC*

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, we use the Filter parameter to retrieve all routes that contain the string APAC anywhere within the Identity.

Get-CsNetworkInterRegionRoute -Filter *APAC*

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionLinks -eq "NA_EMEA"}
```

This example retrieves all region routes that use the network region link NA_EMEA.
The command begins by calling the Get-CsNetworkInterRegionRoute cmdlet.
Calling this cmdlet with no parameters retrieves all routes defined with the CAC configuration.
This collection of routes is then piped to the Where-Object cmdlet.
Where-Object takes the collection and retrieves all items in the collection that have the value NA_EMEA within their NetworkRegionLinks list.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all region routes that use the network region link NA_EMEA.
The command begins by calling the Get-CsNetworkInterRegionRoute cmdlet.
Calling this cmdlet with no parameters retrieves all routes defined with the CAC configuration.
This collection of routes is then piped to the Where-Object cmdlet.
Where-Object takes the collection and retrieves all items in the collection that have the value NA_EMEA within their NetworkRegionLinks list.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionLinks -eq "NA_EMEA"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all region routes that use the network region link NA_EMEA.
The command begins by calling the Get-CsNetworkInterRegionRoute cmdlet.
Calling this cmdlet with no parameters retrieves all routes defined with the CAC configuration.
This collection of routes is then piped to the Where-Object cmdlet.
The Where-Object cmdlet takes the collection and retrieves all items in the collection that have the value NA_EMEA within their NetworkRegionLinks list.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionLinks -eq "NA_EMEA"}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"}
```

Example 4 retrieves all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 retrieves all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 retrieves all region routes that include the NorthAmerica region.
The first part of the command is a call to the Get-CsNetworkInterRegionRoute cmdlet.
This cmdlet, called with no parameters, will retrieve all region routes.
Next, this collection of routes is piped to the Where-Object cmdlet.
The Where-Object cmdlet will narrow the collection down to only those routes that have NorthAmerica defined as one of the regions in the route.
It does this by checking to see if the route has a NetworkRegionID1 value equal to (-eq) NorthAmerica, or (-or) a NetworkRegionID2 value equal to NorthAmerica.

Get-CsNetworkInterRegionRoute | Where-Object {$_.NetworkRegionID1 -eq "NorthAmerica" -or $_.NetworkRegionID2 -eq "NorthAmerica"}

## PARAMETERS

### -Identity
The unique identifier for the network region route you want to retrieve.
Network region routes are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies a particular route.

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
A string that allows you to retrieve routes based on matching the Identity values to the wildcard string passed as a value to this parameter.

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
Below Content Applies To: Lync Server 2010

Retrieves the network inter-region route information from the local replica of the Central Management store, rather than the Central Management store itself.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves the network interregion route information from the local replica of the Central Management store, rather than the Central Management store itself.



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
This cmdlet returns one of more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkRegionRouteType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/31c38d92-1cef-40fe-bd04-26e5b373703e(OCS.14).aspx)

[New-CsNetworkInterRegionRoute]()

[Remove-CsNetworkInterRegionRoute]()

[Set-CsNetworkInterRegionRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/31c38d92-1cef-40fe-bd04-26e5b373703e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/31c38d92-1cef-40fe-bd04-26e5b373703e(OCS.16).aspx)

