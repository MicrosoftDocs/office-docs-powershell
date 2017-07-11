---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsLisLocation

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsLisLocation [-Unreferenced] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Microsoft Lync Server 2010 the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of these locations.

This cmdlet differs from Get-CsLisCivicAddress in that in addition to retrieving address information, Get-CsLisLocation retrieves the name of the location and the company name associated with the location.
Get-CsLisCivicAddress retrieves only address information.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsLisLocation cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsLisLocation"}

Below Content Applies To: Lync Server 2013

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Lync Server the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of these locations.

This cmdlet differs from Get-CsLisCivicAddress in that in addition to retrieving address information, Get-CsLisLocation retrieves the name of the location and the company name associated with the location.
Get-CsLisCivicAddress retrieves only address information.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsLisLocation cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsLisLocation"}

Below Content Applies To: Skype for Business Server 2015

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server 2015 the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of these locations.

This cmdlet differs from the Get-CsLisCivicAddress cmdlet in that in addition to retrieving address information, the Get-CsLisLocation cmdlet retrieves the name of the location and the company name associated with the location.
The Get-CsLisCivicAddress cmdlet retrieves only address information.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsLisLocation
```

Calling Get-CsLisLocation with no parameters retrieves all locations defined within the location configuration database.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Calling Get-CsLisLocation with no parameters retrieves all locations defined within the location configuration database.

Get-CsLisLocation

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Calling the Get-CsLisLocation cmdlet with no parameters retrieves all locations defined within the location configuration database.

Get-CsLisLocation

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLisLocation -Unreferenced
```

The Unreferenced parameter doesn't accept a value.
It's simply a switch that tells the Get-CsLisLocation cmdlet to return only those locations that are not associated with a port, switch, subnet, or wireless access point.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The Unreferenced parameter doesn't accept a value.
It's simply a switch that tells the Get-CsLisLocation cmdlet to return only those locations that are not associated with a port, switch, subnet, or wireless access point.

Get-CsLisLocation -Unreferenced

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The Unreferenced parameter doesn't accept a value.
It's simply a switch that tells the Get-CsLisLocation cmdlet to return only those locations that are not associated with a port, switch, subnet, or wireless access point.

Get-CsLisLocation -Unreferenced

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}
```

In order to retrieve specific LIS locations, you must retrieve all the locations by calling the Get-CsLisLocation cmdlet, and then pipe that collection of locations to the Where-Object cmdlet to narrow the collection down to the specific locations you're looking for.
Example 3 does just that: it uses Get-CsLisLocation and Where-Object to retrieve all the locations with a Location property that is equal to the string NorthCampus.
(Notice that we used the -ceq comparison operator.
This operator does a case-sensitive comparison.
That means that in this case only locations with Location values of NorthCampus will be returned; northcampus, Northcampus, etc., will not be returned.)

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In order to retrieve specific LIS locations, you must retrieve all the locations by calling the Get-CsLisLocation cmdlet, and then pipe that collection of locations to the Where-Object cmdlet to narrow the collection down to the specific locations you're looking for.
Example 3 does just that: it uses Get-CsLisLocation and Where-Object to retrieve all the locations with a Location property that is equal to the string NorthCampus.
(Notice that we used the -ceq comparison operator.
This operator does a case-sensitive comparison.
That means that in this case only locations with Location values of NorthCampus will be returned; northcampus, Northcampus, etc., will not be returned.)

Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In order to retrieve specific LIS locations, you must retrieve all the locations by calling the Get-CsLisLocation cmdlet, and then pipe that collection of locations to the Where-Object cmdlet to narrow the collection down to the specific locations you're looking for.
Example 3 does just that: it uses the Get-CsLisLocation cmdlet and the Where-Object cmdlet to retrieve all the locations with a Location property that is equal to the string NorthCampus.
(Notice that we used the -ceq comparison operator.
This operator does a case-sensitive comparison.
That means that in this case only locations with Location values of NorthCampus will be returned; northcampus, Northcampus, etc., will not be returned.)

Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}

## PARAMETERS

### -Unreferenced
Below Content Applies To: Lync Server 2010

Including this parameter will retrieve only the locations that were not associated with a port, subnet, switch, or wireless access point.
In other words, including this cmdlet retrieves all locations that either were created by calling Set-CsLisLocation or that were assigned to a Location Information Server (LIS) port, subnet, switch, or wireless access point that no longer exists.



Below Content Applies To: Lync Server 2013

Including this parameter will retrieve only the locations that were not associated with a port, subnet, switch, or wireless access point.
In other words, including this parameter retrieves all locations that either were created by calling Set-CsLisLocation or that were assigned to a Location Information Server (LIS) port, subnet, switch, or wireless access point that no longer exists.



Below Content Applies To: Skype for Business Server 2015

Including this parameter will retrieve only the locations that were not associated with a port, subnet, switch, or wireless access point.
In other words, including this parameter retrieves all locations that either were created by calling the Set-CsLisLocation cmdlet or that were assigned to a Location Information Server (LIS) port, subnet, switch, or wireless access point that no longer exists.



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
This cmdlet returns one or more objects of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/aede2266-5af4-4973-9db1-a7b505c62057(OCS.14).aspx)

[Remove-CsLisLocation]()

[Set-CsLisLocation]()

[Get-CsLisCivicAddress]()

[Online Version](http://technet.microsoft.com/EN-US/library/aede2266-5af4-4973-9db1-a7b505c62057(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/aede2266-5af4-4973-9db1-a7b505c62057(OCS.16).aspx)

