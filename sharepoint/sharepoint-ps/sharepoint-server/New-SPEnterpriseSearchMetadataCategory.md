---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPEnterpriseSearchMetadataCategory
schema: 2.0.0
---

# New-SPEnterpriseSearchMetadataCategory

## SYNOPSIS
Adds a crawled property category to a search service application.


## SYNTAX

```
New-SPEnterpriseSearchMetadataCategory [-AssignmentCollection <SPAssignmentCollection>]
 [-AutoCreateNewManagedProperties <Boolean>] [-Confirm] [-DiscoverNewProperties <Boolean>]
 [-MapToContents <Boolean>] -Name <String> [-PropSet <Guid>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates the new crawled property category.
SPEnterpriseSearchMetadataCategory represents a category in the enterprise search metadata property schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication 
PS C:\>$guid = [System.Guid]::NewGuid() 
PS C:\>New-SPEnterpriseSearchMetadataCategory -SearchApplication $ssa -Name MyCategory -DiscoverNewProperties $true -PropSet $guid
```

This example adds a new metadata category named MyCategory to the default search service application.
The DiscoverNewProperties parameter is set to true.
Therefore, new crawled properties will be added to the MyCategory metadata category and the unique category identifier is set with the PropSet parameter.

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutoCreateNewManagedProperties
Specifies that when a new crawled property in this category is found, a corresponding managed property is created and mapped to this new crawled property.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: auto
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverNewProperties
Specifies that if there are unknown properties in this category, these new properties are discovered during a crawl.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: d
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MapToContents
Specifies that all crawled properties of type string are mapped to corresponding managed properties of this category.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: m
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the identity of the new metadata category.

The type must be a valid name of a metadata category, for example, MetadataCategory1.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropSet
Creates a new metadata category with the specified property set.

Note that the specified property set is the identifier of the category.
Therefore, two categories cannot share a property set.

The type must be a valid GUID that specifies the property set, in the form 12345678-90ab-cdef-1234-567890bcdefgh.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: p
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search service application that contains the enterprise search metadata categories.

The type must be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
