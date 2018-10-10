 ---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataFullTextIndexMapping
---

# Set-FASTSearchMetadataFullTextIndexMapping

## SYNOPSIS
Updates the importance level of an existing full text index mapping.

## SYNTAX

```
Set-FASTSearchMetadataFullTextIndexMapping -Level <Int32> -Mapping <FullTextIndexMapping> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet changes the importance level of an existing full text index mapping.

Managed properties are mapped according to an importance level.
If the number of matching documents for a query term is higher than the StopWordThreshold for the rank profile in use, the Microsoft FAST Search Server 2010 for SharePoint system retries the query while limiting the search to managed properties belonging to a higher importance level than the one previously tried.

It repeats this process until it finds a level where the query term count is lower than StopWordThreshold.

Importance level 1 (the first that will be used) includes all levels from 1 and up.
Importance level 2 includes all levels 2 and up.
The maximum level is 7.

This process is called drilling.
See Set-FASTSearchMetadataRankProfile for more information about StopWordThreshold.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$content = get-fastsearchmetadatafulltextindex -name content
$sitetitle = Get-FASTSearchMetadataManagedProperty -name sitetitle
$sitetitle_fulltextindexmapping = Get-FASTSearchMetadataFullTextIndexMapping -managedproperty $sitetitle -fulltextindex $content
Set-FASTSearchMetadataFullTextIndexMapping -mapping $sitetitle_fulltextindexmapping -level 7
```

This example looks up a full text index mapping for a managed property named "SiteTitle" and moves it from importance level 1 to importance level 7.

The example first retrieves the full text index object for "content" and the managed property object for "sitetitle".
It then uses these objects to get the full text index mapping object with the Get-FASTSearchMetadataFullTextIndexMapping cmdlet.
Finally, the example calls the Set-FASTSearchMetadataFullTextIndexMapping cmdlet to update the level.

## PARAMETERS

### -Level
The importance level to use for this mapping.
Valid values are 1 through 7.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: ImportanceLevel, L
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mapping
The full text index object to update.

```yaml
Type: FullTextIndexMapping
Parameter Sets: (All)
Aliases: FullTextIndexMapping, M
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchMetadataFullTextIndexMapping](New-FASTSearchMetadataFullTextIndexMapping.md)

[Remove-FASTSearchMetadataFullTextIndexMapping](Remove-FASTSearchMetadataFullTextIndexMapping.md)

[Get-FASTSearchMetadataFullTextIndexMapping](Get-FASTSearchMetadataFullTextIndexMapping.md)

