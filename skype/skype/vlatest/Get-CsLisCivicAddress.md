---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsLisCivicAddress

## SYNOPSIS
Retrieves only the address portion of one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsLisCivicAddress [<CommonParameters>]
```

## DESCRIPTION
E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server, the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of the addresses associated with these locations.

This cmdlet differs from the Get-CsLisLocation cmdlet in that it returns only unique addresses.
It does not return the company name or a location name, it returns only address information.
It also returns a flag (MSAGValid) that specifies whether the address has been validated against the Master Street Address Guide.
This flag can be automatically updated by running the Test-CsLisCivicAddress cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsLisCivicAddress
```

This example retrieves all civic addresses from the location database.
The Get-CsLisCivicAddress cmdlet does not accept any parameters (other than the common Windows PowerShell parameters such as Verbose).
Therefore any call to the Get-CsLisCivicAddress cmdlet will always return all civic addresses.
See Example 2 for a command that will allow you to retrieve more specific results.

### -------------------------- Example 2 --------------------------
```
Get-CsLisCivicAddress | Where-Object {$_.City -eq "Redmond"}
```

In this example, all the civic addresses in the city of Redmond are retrieved.
The example begins with a call to the Get-CsLisCivicAddress cmdlet, which retrieves a collection of all civic addresses in the location database.
This collection is then piped to the Where-Object cmdlet, which will return only those items in the collection with a City property value equal to (-eq) Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsLisCivicAddress | Where-Object {$_.MSAGValid -eq $true}
```

Example 3 retrieves all Location Information Server (LIS) civic addresses that have been validated against the Master Street Address Guide (MSAG).


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### System.Management.Automation.PSCustomObject


## NOTES


## RELATED LINKS

[Test-CsLisCivicAddress]()

[Get-CsLisLocation]()