---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsLisWirelessAccessPoint
schema: 2.0.0
---

# Get-CsLisWirelessAccessPoint

## SYNOPSIS
Retrieves one or more wireless access points (WAPs) from the location configuration database.
Each WAP can be associated with a location, in which case this cmdlet will also retrieve the location information of the WAPs.
This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsLisWirelessAccessPoint [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet retrieves information on associations between physical locations and the WAP through which the client is connected.

This cmdlet does not take any parameters (other than the Windows PowerShell common parameters).
The cmdlet will retrieve all instances of WAP to location mappings.
To narrow down the information retrieved, you must pipe the output from this cmdlet to another Windows PowerShell cmdlet such as the Where-Object cmdlet or the Select-Object cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsLisWirelessAccessPoint
```

Example 1 retrieves all Location Information Server (LIS) WAPs that have been defined in the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsLisWirelessAccessPoint | Where-Object {$_.BSSID -eq "99-99-99-99-99-99"}
```

This example retrieves all information for all WAPs that have a Basic Service Set Identifier (BSSID) equal to 99-99-99-99-99-99.
Because BSSIDs must be unique, this command will retrieve, at most, one WAP location.
The command begins by calling the Get-CsLisWirelessAccessPoint cmdlet to retrieve all WAP location associations.
This collection of WAP locations is piped to the Where-Object cmdlet.
The Where-Object cmdlet checks the BSSID property of each item in the collection and returns the item with the BSSID value 99-99-99-99-99-99.

### -------------------------- Example 3 --------------------------
```
Get-CsLisWirelessAccessPoint | Where-Object {$_.City -eq "Redmond"}
```

This example retrieves all information for all WAPs that have been associated with a location in the city of Redmond.
The command begins by calling the Get-CsLisWirelessAccessPoint cmdlet to retrieve all WAP location associations.
This collection of WAP locations is piped to the Where-Object cmdlet.
The Where-Object cmdlet checks the City property of each item in the collection to determine whether the value is equal to (-eq) Redmond.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### System.Management.Automation.PSCustomObject


## NOTES


## RELATED LINKS

[Remove-CsLisWirelessAccessPoint](Remove-CsLisWirelessAccessPoint.md)

[Set-CsLisWirelessAccessPoint](Set-CsLisWirelessAccessPoint.md)
