---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsLisLocation
schema: 2.0.0
---

# Get-CsLisLocation

## SYNOPSIS
Retrieves one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsLisLocation [-Unreferenced] [<CommonParameters>]
```

## DESCRIPTION
E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of these locations.

This cmdlet differs from the Get-CsLisCivicAddress cmdlet in that in addition to retrieving address information, the Get-CsLisLocation cmdlet retrieves the name of the location and the company name associated with the location.
The Get-CsLisCivicAddress cmdlet retrieves only address information.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsLisLocation
```

Calling the Get-CsLisLocation cmdlet with no parameters retrieves all locations defined within the location configuration database.

### -------------------------- Example 2 --------------------------
```
Get-CsLisLocation -Unreferenced
```

The Unreferenced parameter doesn't accept a value.
It's simply a switch that tells the Get-CsLisLocation cmdlet to return only those locations that are not associated with a port, switch, subnet, or wireless access point.

### -------------------------- Example 3 --------------------------
```
Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}
```

In order to retrieve specific LIS locations, you must retrieve all the locations by calling the Get-CsLisLocation cmdlet, and then pipe that collection of locations to the Where-Object cmdlet to narrow the collection down to the specific locations you're looking for.
Example 3 does just that: it uses the Get-CsLisLocation cmdlet and the Where-Object cmdlet to retrieve all the locations with a Location property that is equal to the string NorthCampus.
(Notice that we used the -ceq comparison operator.
This operator does a case-sensitive comparison.
That means that in this case only locations with Location values of NorthCampus will be returned; northcampus, Northcampus, etc., will not be returned.)


## PARAMETERS

### -Unreferenced
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

### None


## OUTPUTS

### System.Management.Automation.PSCustomObject


## NOTES


## RELATED LINKS

[Remove-CsLisLocation](Remove-CsLisLocation.md)

[Set-CsLisLocation](Set-CsLisLocation.md)

[Get-CsLisCivicAddress](Get-CsLisCivicAddress.md)
