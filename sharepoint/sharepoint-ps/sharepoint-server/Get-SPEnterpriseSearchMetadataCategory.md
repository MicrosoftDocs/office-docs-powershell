---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchMetadataCategory
schema: 2.0.0
---

# Get-SPEnterpriseSearchMetadataCategory

## SYNOPSIS
Returns a crawled property category.

## SYNTAX

```
Get-SPEnterpriseSearchMetadataCategory [[-Identity] <CategoryPipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteCollection <Guid>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet reads a MetadataCategory object when the category is created, updated, or deleted.
You should run this cmdlet when the initial search is configured, and after a new crawled property category is discovered during a crawl.
SPEnterpriseSearchMetadataCategory represents a category in the enterprise search metadata property schema.

If the Identity parameter is not specified, this cmdlet returns the metadata category collection for the specified search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchMetadataCategory -SearchApplication $searchapp
```

This example retrieves the metadata category collection of a search service application for the default search service application.

## PARAMETERS

### -Identity
Specifies the metadata category to retrieve.

The type must a valid search application name, for example, MetadataCategory1, or an instance of a valid Category object.

```yaml
Type: CategoryPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the enterprise search metadata categories.

The type must a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteCollection
Specifies that the metadata categories returned are to be within the scope of a site collection (SPSite).

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies that the metadata categories returned are to be within the scope of a tenant.

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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


