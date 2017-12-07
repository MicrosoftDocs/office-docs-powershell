---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchMetadataCategory
schema: 2.0.0
---

# Set-SPEnterpriseSearchMetadataCategory

## SYNOPSIS
Sets properties of a crawled property category.


## SYNTAX

```
Set-SPEnterpriseSearchMetadataCategory [-AssignmentCollection <SPAssignmentCollection>]
 [-AutoCreateNewManagedProperties <Boolean>] [-Confirm] [-DiscoverNewProperties <Boolean>]
 -Identity <CategoryPipeBind> [-MapToContents <Boolean>] [-Name <String>]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates properties of a crawled property category when the search functionality is configured for the first time and after a new crawled property category is discovered during a crawl.
SPEnterpriseSearchMetadataCategory represents a category in the enterprise search metadata property schema.

Note that a category may represent multiple propsets.
Changes to the category will overwrite all propsets.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication

C:\PS>Set-SPEnterpriseSearchMetadataCategory -Identity People -SearchApplication $searchapp -DiscoverNewProperties $false -MapToContents $false
```

This example sets both DiscoverNewProperties and MapToContents properties to False for the People category for the default search service application.


## PARAMETERS

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutoCreateNewManagedProperties
Specifies that when a new crawled property in this category is found, a corresponding managed property is created and mapped to this new crawled property.

Note:
Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: auto
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverNewProperties
Specifies that if there are unknown properties in this category, these new properties are discovered during a crawl.

Note:
Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: d
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the metadata category to update.

The type must be a valid name of a metadata category, for example, MetadataCategory1, or an instance of a valid Category object.


```yaml
Type: CategoryPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MapToContents
Specifies that all crawled properties of type string are mapped to corresponding managed properties of this category.

Note:
Null indicates that the value is unchanged.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: m
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the enterprise search metadata category.

The type must be a valid name of a metadata category, for example MetadataCategory1.

Note:
Null indicates that the value is unchanged.


```yaml
Type: String
Parameter Sets: (All)
Aliases: n
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the enterprise search metadata categories.

The type must be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
