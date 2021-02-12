---
external help file: Microsoft.Office.Server.Search.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spenterprisesearchmetadatamapping
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPEnterpriseSearchMetadataMapping
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPEnterpriseSearchMetadataMapping

## SYNOPSIS
Sets the properties of a managed property mapping for a search service application.


## SYNTAX

```
Set-SPEnterpriseSearchMetadataMapping [-Identity] <MappingPipeBind>
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-CrawledProperty <CrawledPropertyPipeBind>] [-ManagedProperty <ManagedPropertyPipeBind>]
 [-SiteCollection <Guid>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates properties of a managed property mapping.
SPEnterpriseSearchMetadataMapping represents a mapping between a managed property and one or more crawled properties in the enterprise search metadata property schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE------------------
```
$ssa = Get-SPEnterpriseSearchServiceApplication
## get the crawl property to set to, in this case a new property is created
$cat = Get-SPEnterpriseSearchMetadataCategory -SearchApplication $ssa -Identity People
$cp = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $ssa -Category $cat -Limit 1
$ncp = New-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $ssa -Name "MyNewCrawlProp" -PropSet $cp.PropSet -Category $cp.CategoryName -IsNameEnum $false -VariantType $cp.VariantType -IsMappedToContents $true
## get the mapping to replace
$mycp = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $ssa -Name MyCrawlProp
$map = Get-SPEnterpriseSearchMetadataMapping -SearchApplication $ssa -ManagedProperty $mp -CrawledProperty $mycp
## set the new crawl property to map to for this mapping
Set-SPEnterpriseSearchMetadataMapping -Identity $map -SearchApplication $ssa -CrawledProperty $ncp
```

This example updates an existing mapping between the managed property UserName and the crawled property MyCrawlProp (see `New-SPEnterpriseSearchMetadataMapping`) for the default search service application.
The crawled property is replaced with a new crawled property named MyNewCrawlProp.


## PARAMETERS

### -Identity
Specifies the metadata mapping to update.

The type must be a valid URL, in the form https://server_name, or an instance of a valid Mapping object.

```yaml
Type: MappingPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the metadata mapping.

The type be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
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

### -CrawledProperty
Specifies the crawled property to map.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid URL in the form https://server_name, or an instance of a valid CrawledProperty object.

Note: Null indicates that the value is unchanged.

```yaml
Type: CrawledPropertyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedProperty
Specifies the managed property to receive the crawled property mapping.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid name of a managed property, for example, ManagedProperty1, or an instance of a valid ManagedProperty object.

Note: Null indicates that the value is unchanged.

```yaml
Type: ManagedPropertyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
Specifies that the metadata mappings returned are to be within the scope of a site collection (SPSite).

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies that the metadata mappings returned are to be within the scope of a tenant.

The type must be a valid GUID that specifies the property set in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
