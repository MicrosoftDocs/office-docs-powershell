---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchMetadataCrawledProperty

## SYNOPSIS
Adds a crawled property.

## SYNTAX

```
New-SPEnterpriseSearchMetadataCrawledProperty [-AssignmentCollection <SPAssignmentCollection>]
 -Category <CategoryPipeBind> [-Confirm] [-IsMappedToContents <Boolean>] -IsNameEnum <Boolean> -Name <String>
 -PropSet <Guid> -SearchApplication <SearchServiceApplicationPipeBind> [-SiteCollection <Guid>]
 [-Tenant <Guid>] -VariantType <Int32> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used when the search functionality is configured for the first time, and to add new crawled properties after the first configuration.
SPEnterpriseSearchMetadataCrawledProperty represents a crawled property in the enterprise search metadata property schema.
Or, crawled properties are automatically created during regular crawls (see SPEnterpriseSearchMetadataCategory).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication

$cat = Get-SPEnterpriseSearchMetadataCategory -SearchApplication $searchapp -Identity People

$crawlprop = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Category $cat -Limit 1


New-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Name "MyCrawlProp" -PropSet $crawlprop.PropSet -Category $crawlprop.CategoryName -IsNameEnum $false -VariantType $crawlprop.VariantType -IsMappedToContents $false
```

This example maps the new crawled property MyCrawlProp to the People metadata category for the default search service application.
The mapping uses the constraints from the existing People category.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication
$cat = Get-SPEnterpriseSearchMetadataCategory -SearchApplication $searchapp -Identity People
$crawlprop = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Category $cat -Limit 1
New-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Name "MyCrawlProp" -PropSet $crawlprop.PropSet -Category $crawlprop.CategoryName -IsNameEnum $false -VariantType $crawlprop.VariantType -IsMappedToContents $false
```

This example maps the new crawled property MyCrawlProp to the People metadata category for the default search service application.
The mapping uses the constraints from the existing People category.

## PARAMETERS

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

{{Fill AssignmentCollection Description}}



**Below Content Applies To:**SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Category
**Below Content Applies To:**SharePoint Server 2013

{{Fill Category Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies to which metadata category the crawled property should be added

The type must be a valid GUID in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid name of a metadata category, for example, MetadataCategory1, or an instance of a valid Category object.



```yaml
Type: CategoryPipeBind
Parameter Sets: (All)
Aliases: c
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before running the cmdlet.



**Below Content Applies To:**SharePoint Server 2016

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



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

### -IsMappedToContents
**Below Content Applies To:**SharePoint Server 2013

{{Fill IsMappedToContents Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies that the crawled property should be mapped to managed properties.
Specify true to map a crawled property to a managed property.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: im
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsNameEnum
**Below Content Applies To:**SharePoint Server 2013

{{Fill IsNameEnum Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies whether the crawled property name is of type integer.
Specified by true or false.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: ie
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
**Below Content Applies To:**SharePoint Server 2013

{{Fill Name Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the identity of the new crawled property.

The type must be a valid crawled property name, for example "urn:schemas-microsoft-com:sharepoint:portal:profile:UserName"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropSet
**Below Content Applies To:**SharePoint Server 2013

{{Fill PropSet Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the property set that belongs to an existing category.

A valid GUID that specifies the property set, in the form 12345678-90ab-cdef-1234-567890bcdefgh.



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: p
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
**Below Content Applies To:**SharePoint Server 2013

{{Fill SearchApplication Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the search application that contains the crawled property.

The type must be a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.



```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteCollection
**Below Content Applies To:**SharePoint Server 2013

{{Fill SiteCollection Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies that the crawled properties returned are to be within the scope of a site collection (SPSite).

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

### -Tenant
**Below Content Applies To:**SharePoint Server 2013

{{Fill Tenant Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies that the crawled properties returned are to be within the scope of a tenant.

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

### -VariantType
**Below Content Applies To:**SharePoint Server 2013

{{Fill VariantType Description}}



**Below Content Applies To:**SharePoint Server 2016

Adds the crawled property as the specified variant type.
For more information about valid values for this property, see VARIANT Type Constants (http://go.microsoft.com/fwlink/p/?LinkId=143322&clcid=0x409) (http://go.microsoft.com/fwlink/p/?LinkId=143322&clcid=0x409).

The type must be an integer that specifies the variant data type of the property set.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: vt
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:**SharePoint Server 2013

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



**Below Content Applies To:**SharePoint Server 2016

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



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

[Online Version](http://technet.microsoft.com/EN-US/library/c3015484-e301-48b1-88ba-4f3a01bf13e4(Office.15).aspx)

