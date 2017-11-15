---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPEnterpriseSearchResultItemType
schema: 2.0.0
---

# New-SPEnterpriseSearchResultItemType

## SYNOPSIS
Creates a new result item type.


## SYNTAX

### New
```
New-SPEnterpriseSearchResultItemType [-Name] <String> [-Rules] <PropertyRuleCollection>
 [[-RulePriority] <Int32>] [[-DisplayProperties] <String>] [[-SourceID] <Guid>] [-DisplayTemplateUrl] <String>
 -Owner <SearchObjectOwner> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-OptimizeForFrequentUse <Boolean>] [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-SearchApplicationProxy <SearchServiceApplicationProxyPipeBind>] [-WhatIf] [<CommonParameters>]
```

### Copy
```
New-SPEnterpriseSearchResultItemType [[-Name] <String>] [[-Rules] <PropertyRuleCollection>]
 [[-RulePriority] <Int32>] [[-DisplayProperties] <String>] [[-SourceID] <Guid>]
 [[-DisplayTemplateUrl] <String>] -ExistingResultItemType <ResultItemTypePipeBind>
 -ExistingResultItemTypeOwner <SearchObjectOwner> -Owner <SearchObjectOwner>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-OptimizeForFrequentUse <Boolean>]
 [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-SearchApplicationProxy <SearchServiceApplicationProxyPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `New-SPEnterpriseSearchResultItemType` cmdlet to create a new result item type.

Result item types enable you to change the look of search results based on the type of result.
You start by defining a collection of rules, which will be evaluated against the properties of results.
Then you define the display template to use for rendering that type of result.
Once you have created the result item type, results matching the rules of the result item type will render using the specified display template.

Example use cases:

- Change the look of results for a particular file name extension, for example Word documents.
- Change the look of a particular content type in search results.
- Change the look of results from a particular author.
- Add a result action to results from a particular result source as part of a custom search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$rule = Get-SPEnterpriseSearchPropertyRule -PropertyName "ContentTypeId" -Operator "StartsWith"
$rule.AddValue( "0x010063C2F478ACC511DFB869B5BFDFD720851252" )

$ruleCollection = Get-SPEnterpriseSearchPropertyRuleCollection
$ruleCollection.Add( $rule )

$displayProperties = "WorkId,Rank,Title,Size,Path,Description,SiteName,HitHighlightedSummary,HitHighlightedProperties,ViewsLifeTime"
$displaytemplateUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_MyCustomDisplayTemplate.js"

$web = Get-SPWeb "UrlOfTheSite"
$tenantOwner = Get-SPEnterpriseSearchOwner -Level SPSite -SPWeb $web

$svcAppProxy = Get-SPEnterpriseSearchServiceApplicationProxy

New-SPEnterpriseSearchResultItemType -SearchApplicationProxy $svcAppProxy `
-Name "CustomResultType" `
-Rules $ruleCollection `
-RulePriority 1 
-DisplayProperties $displayProperties `
-DisplayTemplateUrl $displaytemplateUrl `
-Owner $tenantOwner
```

This example first defines the rule to apply to the search results in order to target results with a specific property and adds the rule to the rule collection.
Thereafter the example defines the properties of the result that shall be displayed and the URL to the display template governing the appearance of the rendered results.
Finally, the example defines the rule item type by its name, the rule collection, the display properties, the display template and the tenant owner.

## PARAMETERS

### -Name
Specifies the name of the result item type.

```yaml
Type: String
Parameter Sets: New
Aliases: n
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Copy
Aliases: n
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rules
Specifies the collection of rules to evaluate the result properties against.

```yaml
Type: PropertyRuleCollection
Parameter Sets: New
Aliases: rule
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PropertyRuleCollection
Parameter Sets: Copy
Aliases: rule
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RulePriority
Specifies which priority the collection of rules has compared to other rules.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: priority
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayProperties
Specifies which result properties to display.

```yaml
Type: String
Parameter Sets: (All)
Aliases: dp
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceID
Identifies the search result source that the result item type applies to.
Leave this parameter blank to apply to all result sources.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: sid
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayTemplateUrl
Specifies the URL of the display template that shall be used for rendering the results.
Specify an absolute URL.

```yaml
Type: String
Parameter Sets: New
Aliases: url
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Copy
Aliases: url
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExistingResultItemType
Specifies an existing result item type to which new rules or displayed properties can be added.

```yaml
Type: ResultItemTypePipeBind
Parameter Sets: Copy
Aliases: copy
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExistingResultItemTypeOwner
Specifies the search object owner that defines the scope at which an existing result item type was created.

```yaml
Type: SearchObjectOwner
Parameter Sets: Copy
Aliases: eo
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the result item type is created.

```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

### -OptimizeForFrequentUse
Enable this flag if you always want the properties of this result item type to be requested, regardless of whether the result type is triggered.
This will improve performance as long as it is only enabled on the most frequently used result item types.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: opt
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the result item type.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplicationProxy
Specifies the proxy of the search application that contains the result item type.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application proxy name (for example, SearchAppProxy1); or an instance of a valid SearchServiceApplicationProxy object.

```yaml
Type: SearchServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

[Set-SPEnterpriseSearchResultItemType]()

[Get-SPEnterpriseSearchResultItemType]()

[Remove-SPEnterpriseSearchResultItemType]()

[Get-SPEnterpriseSearchOwner]()

[Get-SPEnterpriseSearchPropertyRule]()

[Get-SPEnterpriseSearchPropertyRuleCollection]()
