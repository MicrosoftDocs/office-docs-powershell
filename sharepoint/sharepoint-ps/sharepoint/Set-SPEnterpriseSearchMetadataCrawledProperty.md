---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPEnterpriseSearchMetadataCrawledProperty

## SYNOPSIS
Sets the properties of a metadata crawled property.

## SYNTAX

```
Set-SPEnterpriseSearchMetadataCrawledProperty [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -Identity <CrawledPropertyPipeBind> -IsMappedToContents <Boolean> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates properties of a crawled property when the search functionality is configured for the first time and after any new crawled property is added to create the rules for the crawled property.
SPEnterpriseSearchMetadataCrawledProperty represents a crawled property in the enterprise search metadata property schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication

$crawlprop = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Name MyCrawlProp


Set-SPEnterpriseSearchMetadataCrawledProperty -Identity $crawlprop -IsMappedToContent $true
```

This example sets the IsMappedToContent parameter of the crawled property MyCrawlProp to false (see the example for the 
          New-SPEnterpriseSearchMetadataCrawledPropertycommand) for the default search service application.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication
$crawlprop = Get-SPEnterpriseSearchMetadataCrawledProperty -SearchApplication $searchapp -Name MyCrawlProp
Set-SPEnterpriseSearchMetadataCrawledProperty -Identity $crawlprop -IsMappedToContent $true
```

This example sets the IsMappedToContent parameter of the crawled property MyCrawlProp to false (see the example for the New-SPEnterpriseSearchMetadataCrawledProperty command) for the default search service application.

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

### -Identity
**Below Content Applies To:**SharePoint Server 2013

{{Fill Identity Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies the crawled property to update.

The type must be an instance of a valid CrawledProperty object.



```yaml
Type: CrawledPropertyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsMappedToContents
**Below Content Applies To:**SharePoint Server 2013

{{Fill IsMappedToContents Description}}



**Below Content Applies To:**SharePoint Server 2016

Specifies that the crawled property is mapped to managed properties.
Specify true to map a crawled property to a managed property.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: im
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

[Online Version](http://technet.microsoft.com/EN-US/library/59540fb5-c246-4732-83c5-eecb17c9b7a1(Office.15).aspx)

