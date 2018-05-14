---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsLisPort
schema: 2.0.0
---

# Get-CsLisPort

## SYNOPSIS
Retrieves one or more ports from the location configuration database.
Each port can be associated with a location, in which case this cmdlet will also retrieve the location information of the ports.
This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsLisPort [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet retrieves information on associations between physical locations and the port through which the client is connected.

This cmdlet does not take any parameters (other than the Windows PowerShell common parameters).
The cmdlet will retrieve all instances of port to location mappings.
To narrow down the information retrieved, you must pipe the output from this cmdlet to another Windows PowerShell cmdlet such as the Where-Object cmdlet or the Select-Object cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsLisPort
```

Example 1 retrieves all Location Information Server (LIS) ports and any associated locations that have been defined in the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsLisPort | Where-Object {$_.City -eq "Redmond"}
```

This example retrieves all information for all ports that have been associated with a location in the city of Redmond.
The command begins by calling the Get-CsLisPort cmdlet to retrieve all port location associations.
This collection of port locations is piped to the Where-Object cmdlet.
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

[Remove-CsLisPort](Remove-CsLisPort.md)

[Set-CsLisPort](Set-CsLisPort.md)
