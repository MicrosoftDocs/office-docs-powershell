---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/f6c1d5ce-1c6b-4736-b9a3-d45f5dbb9b61(Office.15).aspx
schema: 2.0.0
---

# Remove-SPEnterpriseSearchQueryDemoted

## SYNOPSIS
Deletes a demoted site rule.

## SYNTAX

```
Remove-SPEnterpriseSearchQueryDemoted [-Identity] <DemotedPipeBind> -Owner <SearchObjectOwner>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf]
```

## DESCRIPTION
The Remove-SPEnterpriseSearchQueryDemoted cmdlet adjusts query rank by deleting a demoted site rule from the demoted site collection.
Query demoted sites are de-emphasized in relevance.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$demotedRule = Get-SPEnterpriseSearchQueryDemoted -Identity http://somesite.com -SearchApplication MySSA$demotedRule | Remove-SPEnterpriseSearchQueryDemoted
```

This example obtains a reference to a site demotion rule for the URL http://somesite.com, and removes it.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$demotedRule = Get-SPEnterpriseSearchQueryDemoted -Identity http://somesite.com -SearchApplication MySSA
$demotedRule | Remove-SPEnterpriseSearchQueryDemoted
```

This example obtains a reference to a site demotion rule for the URL http://somesite.com, and removes it.

## PARAMETERS

### -Identity
Specifies the demoted site rule to delete.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid Demoted object.

```yaml
Type: DemotedPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the corresponding Demoted object is created.The owner must be one of the following valid levels:- Search Service Application- Site Subscription

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the demoted site collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f6c1d5ce-1c6b-4736-b9a3-d45f5dbb9b61(Office.15).aspx)

