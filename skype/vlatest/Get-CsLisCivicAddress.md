---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsLisCivicAddress

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves only the address portion of one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves only the address portion of one or more locations in the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsLisCivicAddress [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Microsoft Lync Server 2010, the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of the addresses associated with these locations.

This cmdlet differs from Get-CsLisLocation in that it returns only unique addresses.
It does not return the company name or a location name, it returns only address information.
It also returns a flag (MSAGValid) that specifies whether the address has been validated against the Master Street Address Guide.
This flag can be automatically updated by running the Test-CsLisCivicAddress cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsLisCivicAddress cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsLisCivicAddress"}

**Below Content Applies To:** Lync Server 2013

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Lync Server, the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of the addresses associated with these locations.

This cmdlet differs from Get-CsLisLocation in that it returns only unique addresses.
It does not return the company name or a location name, it returns only address information.
It also returns a flag (MSAGValid) that specifies whether the address has been validated against the Master Street Address Guide.
This flag can be automatically updated by running the Test-CsLisCivicAddress cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsLisCivicAddress cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsLisCivicAddress"}

**Below Content Applies To:** Skype for Business Server 2015

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server 2015, the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet retrieves one or more of the addresses associated with these locations.

This cmdlet differs from the Get-CsLisLocation cmdlet in that it returns only unique addresses.
It does not return the company name or a location name, it returns only address information.
It also returns a flag (MSAGValid) that specifies whether the address has been validated against the Master Street Address Guide.
This flag can be automatically updated by running the Test-CsLisCivicAddress cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsLisCivicAddress
```

This example retrieves all civic addresses from the location database.
Get-CsLisCivicAddress does not accept any parameters (other than the common Windows PowerShell parameters such as Verbose).
Therefore any call to Get-CsLisCivicAddress will always return all civic addresses.
See Example 2 for a command that will allow you to retrieve more specific results.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves all civic addresses from the location database.
Get-CsLisCivicAddress does not accept any parameters (other than the common Windows PowerShell parameters such as Verbose).
Therefore any call to Get-CsLisCivicAddress will always return all civic addresses.
See Example 2 for a command that will allow you to retrieve more specific results.

Get-CsLisCivicAddress

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all civic addresses from the location database.
The Get-CsLisCivicAddress cmdlet does not accept any parameters (other than the common Windows PowerShell parameters such as Verbose).
Therefore any call to the Get-CsLisCivicAddress cmdlet will always return all civic addresses.
See Example 2 for a command that will allow you to retrieve more specific results.

Get-CsLisCivicAddress

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLisCivicAddress | Where-Object {$_.City -eq "Redmond"}
```

In this example, all the civic addresses in the city of Redmond are retrieved.
The example begins with a call to Get-CsLisCivicAddress, which retrieves a collection of all civic addresses in the location database.
This collection is then piped to the Where-Object cmdlet, which will return only those items in the collection with a City property value equal to (-eq) Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In this example, all the civic addresses in the city of Redmond are retrieved.
The example begins with a call to Get-CsLisCivicAddress, which retrieves a collection of all civic addresses in the location database.
This collection is then piped to the Where-Object cmdlet, which will return only those items in the collection with a City property value equal to (-eq) Redmond.

Get-CsLisCivicAddress | Where-Object {$_.City -eq "Redmond"}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In this example, all the civic addresses in the city of Redmond are retrieved.
The example begins with a call to the Get-CsLisCivicAddress cmdlet, which retrieves a collection of all civic addresses in the location database.
This collection is then piped to the Where-Object cmdlet, which will return only those items in the collection with a City property value equal to (-eq) Redmond.

Get-CsLisCivicAddress | Where-Object {$_.City -eq "Redmond"}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsLisCivicAddress | Where-Object {$_.MSAGValid -eq $true}
```

Example 3 retrieves all Location Information Server (LIS) civic addresses that have been validated against the Master Street Address Guide (MSAG).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 retrieves all Location Information Server (LIS) civic addresses that have been validated against the Master Street Address Guide (MSAG).

Get-CsLisCivicAddress | Where-Object {$_.MSAGValid -eq $true}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 retrieves all Location Information Server (LIS) civic addresses that have been validated against the Master Street Address Guide (MSAG).

Get-CsLisCivicAddress | Where-Object {$_.MSAGValid -eq $true}

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet retrieves one or more objects of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6538b811-6b74-4c57-95f7-e1496df62e7f(OCS.14).aspx)

[Test-CsLisCivicAddress]()

[Get-CsLisLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/6538b811-6b74-4c57-95f7-e1496df62e7f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6538b811-6b74-4c57-95f7-e1496df62e7f(OCS.16).aspx)

