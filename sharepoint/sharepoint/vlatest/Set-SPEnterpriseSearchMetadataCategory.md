---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/cd69f7af-dabe-4a09-88a9-b0bcbba2fa9e(Office.15).aspx
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
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf]
```

## DESCRIPTION
This cmdlet updates properties of a crawled property category when the search functionality is configured for the first time, and after a new crawled property category is discovered during a crawl.
SPEnterpriseSearchMetadataCategory represents a category in the enterprise search metadata property schema.

Note that a category may represent multiple propsets.
Changes to the category will overwrite all propsets.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication

Set-SPEnterpriseSearchMetadataCategory -Identity People -SearchApplication $searchapp -DiscoverNewProperties $false -MapToContents $false
```

This example sets both DiscoverNewProperties and MapToContents properties to False for the People category for the default search service application.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication

C:\PS>Set-SPEnterpriseSearchMetadataCategory -Identity People -SearchApplication $searchapp -DiscoverNewProperties $false -MapToContents $false
```

This example sets both DiscoverNewProperties and MapToContents properties to False for the People category for the default search service application.

## PARAMETERS

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

{{Fill AssignmentCollection Description}} Below Content Applies To: SharePoint Server 2016

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

### -AutoCreateNewManagedProperties
Below Content Applies To: SharePoint Server 2013

{{Fill AutoCreateNewManagedProperties Description}} Below Content Applies To: SharePoint Server 2016

Specifies that when a new crawled property in this category is found, a corresponding managed property is created and mapped to this new crawled property.

Note: Null indicates that the value is unchanged.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: auto

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before running the cmdlet.
Below Content Applies To: SharePoint Server 2016

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

### -DiscoverNewProperties
Below Content Applies To: SharePoint Server 2013

{{Fill DiscoverNewProperties Description}} Below Content Applies To: SharePoint Server 2016

Specifies that if there are unknown properties in this category, these new properties are discovered during a crawl.

Note: Null indicates that the value is unchanged.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: d

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: SharePoint Server 2013

{{Fill Identity Description}} Below Content Applies To: SharePoint Server 2016

Specifies the metadata category to update.

The type must be a valid name of a metadata category, for example, MetadataCategory1, or an instance of a valid Category object.

```yaml
Type: CategoryPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MapToContents
Below Content Applies To: SharePoint Server 2013

{{Fill MapToContents Description}} Below Content Applies To: SharePoint Server 2016

Specifies that all crawled properties of type string are mapped to corresponding managed properties of this category.

Note: Null indicates that the value is unchanged.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: m

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Below Content Applies To: SharePoint Server 2013

{{Fill Name Description}} Below Content Applies To: SharePoint Server 2016

Specifies the name of the enterprise search metadata category.

The type must be a valid name of a metadata category, for example MetadataCategory1.

Note: Null indicates that the value is unchanged.

```yaml
Type: String
Parameter Sets: (All)
Aliases: n

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Below Content Applies To: SharePoint Server 2013

{{Fill SearchApplication Description}} Below Content Applies To: SharePoint Server 2016

Specifies the search application that contains the enterprise search metadata categories.

The type must be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

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
Below Content Applies To: SharePoint Server 2013

Shows what would happen if the cmdlet runs.
The cmdlet is not run.
Below Content Applies To: SharePoint Server 2016

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

[Online Version](http://technet.microsoft.com/EN-US/library/cd69f7af-dabe-4a09-88a9-b0bcbba2fa9e(Office.15).aspx)

