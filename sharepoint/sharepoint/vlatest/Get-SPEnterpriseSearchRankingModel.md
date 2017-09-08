---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/86e09226-2821-4c28-83a4-c4d5dd496222(Office.15).aspx
schema: 2.0.0
---

# Get-SPEnterpriseSearchRankingModel

## SYNOPSIS
Returns a ranking model.

## SYNTAX

```
Get-SPEnterpriseSearchRankingModel [[-Identity] <RankingModelPipeBind>] -Owner <SearchObjectOwner>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet reads the RankingModel object when a ranking model is created, removed, or updated.

If the Identity parameter is not specified or the identity does not match any of the ranking models in the collection, all rank models for the search application are returned.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level ssa

Get-SPEnterpriseSearchRankingModel -Identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 -SearchApplication $ssa -Owner $owner
```

This example retrieves the ranking model on the search service application level with the identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 for the search application Search Service Application.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level ssa
Get-SPEnterpriseSearchRankingModel -Identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 -SearchApplication $ssa -Owner $owner
```

This example retrieves the ranking model on the search service application level with the identity 8f6fd0bc-06f9-43cf-bbab-08c377e083f4 for the search application Search Service Application.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level ssa

Get-SPEnterpriseSearchRankingModel -SearchApplication $ssa -Owner $owner
```

This example retrieves all ranking models defined on the search service application level for the search application Search Service Application.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level ssa
Get-SPEnterpriseSearchRankingModel -SearchApplication $ssa -Owner $owner
```

This example retrieves all ranking models defined on the search service application level for the search application Search Service Application.

## PARAMETERS

### -Identity
Specifies the ranking model to retrieve.

The type must be a valid GUID in the form 8f6fd0bc-06f9-43cf-bbab-08c377e083f4, or an instance of a valid RankingModel object.

```yaml
Type: RankingModelPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the scope where the ranking model is available.
The available scopes are: SSA, Tenant, Site Collection or Site.
A ranking model can be available in multiple scopes.

```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the ranking model.

The type must be a valid GUID in the form 9bf36458-fc99-4f7b-b060-867e5a63adce, a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/86e09226-2821-4c28-83a4-c4d5dd496222(Office.15).aspx)

