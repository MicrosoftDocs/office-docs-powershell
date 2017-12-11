---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataCrawledPropertyMapping
---

# Remove-FASTSearchMetadataCrawledPropertyMapping

## SYNOPSIS
Removes a crawled-property-to-managed-property mapping.

## SYNTAX

```
Remove-FASTSearchMetadataCrawledPropertyMapping -CrawledProperty <CrawledProperty>
 -ManagedProperty <ManagedProperty> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes the mapping of a crawled property to a managed property.
Both the managed property and the crawled property still exist after the mapping is removed.

The cmdlet parameters are both objects, and must be retrieved separately.

The content must be recrawled/re-fed for the search index to reflect that the mapping was removed.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
$crawledproperties = $title.GetCrawledPropertyMappings()
$crawledproperties # To List the output before the removal
Remove-FASTSearchMetadataCrawledPropertyMapping -managedproperty $title -crawledproperty $crawledproperties[4]
$crawledproperties # To list the output after the removal
```

This example removes the mapping of the crawled property "sitemap.title" to the managed property "title".

This example calls the GetCrawledPropertyMappings() method call exposed by the managed property, but you could also find the crawled property by using Get-FASTSearchMetadataCrawledProperty.
The return value from GetCrawledPropertyMappings() is an array of crawled properties, of which the last is the "sitemap.title" crawled property mapping.
The last of the crawled properties (array index 4) has the mapping removed from it by calling Remove-FASTSearchMetadataCrawledPropertyMapping.

## PARAMETERS

### -CrawledProperty
The crawled property which is having a mapping removed.
The object can be retrieved by using Get-FASTSearchMetadataCrawledProperty, or by using the GetCrawledPropertyMappings() method call on a managed property object.

```yaml
Type: CrawledProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedProperty
The managed property object which is having a mapping removed.
The object can be retrieved by using the Get-FASTSearchMetadataManagedPropertycmdlet.

```yaml
Type: ManagedProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated.
If Confirm is false (-Confirm:$false), confirmation prompting is not used.

In cases where Confirm is not specified, the cmdlet will prompt if the $ConfirmPreference shell variable is equal to or greater than the ConfirmImpact setting of the cmdlet (HIGH).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Overrides any user prompting settings, so that confirmation of the operation is not required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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
Applicable: FAST Server for SharePoint 2010

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

[Get-FASTSearchMetadataCrawledPropertyMapping]()

[New-FASTSearchMetadataCrawledPropertyMapping]()

[Set-FASTSearchMetadataCrawledPropertyMapping]()

[Get-FASTSearchMetadataCrawledProperty]()

[Get-FASTSearchMetadataManagedProperty]()

