---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchTenantSchema
schema: 2.0.0
---

# Remove-SPEnterpriseSearchTenantSchema

## SYNOPSIS
Removes a defined search schema.


## SYNTAX

```
Remove-SPEnterpriseSearchTenantSchema [-Identity] <TenantSchemaPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-SiteCollection <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a search schema. 
Use this cmdlet to remove an unused or unwanted search schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
$guid = [GUID]"909b84cb-90f2-4a1b-8df4-22547a9b2227"
Remove-SPEnterpriseSearchTenantSchema -Identity $guid -SearchApplication $ssa
```

This example removes the search schema for the tenant with GUID 909b84cb-90f2-4a1b-8df4-22547a9b2227.


## PARAMETERS

### -Identity
Specifies the tenant of the search schema to be removed.

The type must be a valid GUID, in string form, that identifies the tenant in the form 12345678-90ab-cdef-1234-567890bcdefgh.

The tenant GUID can be found in the Search Service Application database, in the folder \Databases\Search_Service_Application\Tables\dbo.MSSTenant.

```yaml
Type: TenantSchemaPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the enterprise search schema to be removed.

The type must be a valid search application name (for example, SearchApp1), or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
Specifies that the search schema to be removed is within the scope of a site collection (SPSite).

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
