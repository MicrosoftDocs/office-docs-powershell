---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataRankProfile
---

# Set-FASTSearchMetadataRankProfile

## SYNOPSIS
Reconfigures a rank profile.

## SYNTAX

### Name
```
Set-FASTSearchMetadataRankProfile -Name <String> [-AuthorityWeight <Int32>]
 [-FreshnessManagedPropertyReference <ManagedProperty>] [-FreshnessResolution <Int32>]
 [-FreshnessWeight <Int32>] [-PositionStopWordThreshold <Int64>] [-QualityWeight <Int32>]
 [-QueryAuthorityWeight <Int32>] [-RankModelName <String>] [-StopWordThreshold <Int64>] [<CommonParameters>]
```

### RankProfile
```
Set-FASTSearchMetadataRankProfile -RankProfile <RankProfile> [-AuthorityWeight <Int32>]
 [-FreshnessManagedPropertyReference <ManagedProperty>] [-FreshnessResolution <Int32>]
 [-FreshnessWeight <Int32>] [-PositionStopWordThreshold <Int64>] [-QualityWeight <Int32>]
 [-QueryAuthorityWeight <Int32>] [-RankModelName <String>] [-StopWordThreshold <Int64>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adjusts the relevancy components of a rank profile to improve search result relevance.

All weights are relative to each other.
If QualityWeight is 400, and AuthorityWeight is 100, this means that QualityWeight is 4 times more important than AuthorityWeight.

After being multiplied by the weights determined in the rank profile, all relevance components are combined into a single rank score, which decides the sorting of the result set (as long as non-relevancy sorting is not specified).
All changes are effective immediately, and the content does not need to be re-fed for this to take effect.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchMetadataRankProfile -Name ExtraRankProfile -QualityWeight 100 -AuthorityWeight 200 -QueryAuthorityWeight 10 -FreshnessWeight 0
```

This example changes the weights of the relevancy components on the rank profile named "ExtraRankProfile".
You can specify one or more weights to modify at a time.

This example turns off the freshness relevancy component by setting the weight to 0, while adjusting the other components.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$processingtime = Get-FASTSearchMetadataManagedProperty -name Processingtime
Set-FASTSearchMetadataRankProfile -Name ExtraRankProfile -FreshnessManagedPropertyReference $processingtime
```

This example changes the "ExtraRankProfile" rank profile so that it no longer determines document freshness based on the "docdatetime" managed property.

Instead, freshness is based on when the item was last processed (fed) into the FAST Search Server 2010 for SharePoint system.
The time the item was processed is stored in the "processingtime" managed property by default.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchMetadataRankProfile -Name ExtraRankProfile -StopWordThreshold 100000
```

This example sets the stop word threshold of the rank profile named "ExtraRankProfile" to 100000.
The stop word threshold determines if the query term is too common to be taken into account when calculating the relevancy of an item.

Lowering the stop word threshold means that more terms may be ignored when calculating relevancy, which can have a positive impact on performance.

### ---------------EXAMPLE 4----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$rankprofile = Get-FASTSearchMetadataRankProfile -Name default
$rankprofile.GetQualityComponents()
```

The quality rank metric is an importance score assigned to a document, independent of query terms.
This example lists the managed properties involved in calculating the quality rank by calling the GetQualityComponents() method call on the rank profile.

### ---------------EXAMPLE 5----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$new_rank_component = New-FASTSearchMetadataManagedProperty -Name sitecredibility
$rankprofile = Get-FASTSearchMetadataRankProfile -Name default
$rankprofile.CreateQualityComponent($new_rank_component,100)
$rankprofile.GetQualityComponents()
```

The quality rank metric is an importance score assigned to a document, independent of query terms.
This example adds another managed property, named "sitecredibility", to the list of quality components which form the quality rank score.
The "sitecredibility" managed property is weighted the same as the other quality components (100).

The next step would be to populate "sitecredibility" with a suitable crawled property.

## PARAMETERS

### -Name
The name of the rank profile to modify.

```yaml
Type: String
Parameter Sets: Name
Aliases: RankProfileName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RankProfile
An object representing a rank profile.

```yaml
Type: RankProfile
Parameter Sets: RankProfile
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AuthorityWeight
This integer parameter sets the authority weight component of the rank profile.

Ranking on authority takes the connections between items into account when calculating a relevancy score.
Items that are central and frequently linked to receive a higher authority relevancy score than items that are hard to reach and less frequently linked to.

The authority relevancy score is calculated regularly by the Webanalyzer component.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreshnessManagedPropertyReference
This parameter specifies which managed properties to use when calculating freshness.

The managed property must be represented with a ManagedPropertyImpl object (e.g., as returned from Get-FASTSearchMetadataManagedProperty).

The managed property must be of the type "datetime" and have sorting enabled.

The value of the managed property is used when calculating how fresh the document is.
Items with an older datetime value in the specified managed property get a lower freshness relevancy score.

```yaml
Type: ManagedProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreshnessResolution
This integer parameter sets the size of the freshness boost tick.

The tick is the smallest amount of time the freshness relevancy considers to be a different value.

If set to an hour, all documents with a freshness managed property value within the same hour receive the same freshness relevancy score.

If set to a day, documents with the same day value in the freshness managed property are considered equally fresh.

Valid values are:

0 (Second)

1 (Minute)

2 (Hour)

3 (Day)

4 (Year)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreshnessWeight
This integer parameter sets the weight of the freshness relevancy component when calculating the relevance of a result.

The freshness rank value goes down the older the document is.

See the FreshnessManagedPropertyReference parameter to change the managed property used for calculating freshness.

Set this value to 0 to ignore item freshness when calculating relevancy.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PositionStopWordThreshold
This integer parameter sets the position stop word threshold.

If a query term occurs more often than position-stop-word-threshold (independent of the number of items it occurs in), then proximity relevancy calculations are not done for that term.

If the query term count does not exceed the position stop word threshold, an extra rank score is added if query terms are positioned close to each other in the managed properties.

If you do not want to use proximity as part of the relevancy model, set this parameter to 0 to disable proximity calculation.
This will decrease CPU use when searching.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QualityWeight
This integer parameter sets the weight of the quality component of the relevancy model.

Quality denotes the assigned importance of a document.
The quality metrics are assigned to individual documents without taking into account the query being evaluated.

An excessively high quality weight makes item ranking less dependent on the user query terms, which can lead to a poor search experience, since items with a high quality relevancy score could outweigh items that are more relevant to the query terms.

The quality relevancy score is calculated dynamically, based on one or more quality components.
The GetQualityComponents() method available on the RankProfileImpl object lists the managed properties used for this.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryAuthorityWeight
This integer parameter sets the weight of the query authority relevancy component.

The query authority increases for an item when a user clicks through to it from search results.
The more popular the item is for a given query, the higher the query authority relevancy score.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RankModelName
The name of a rank profile to modify.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopWordThreshold
This integer parameter sets the stop word threshold of the rank profile.

A stop word is a search term that is so common in the result set that it is not counted as part of the relevancy calculation.

When a query term exceeds this threshold, FAST Search Server 2010 for SharePoint retries the query with a higher full text index importance level until it can find a level where the query term is not a stop word (see Set-FASTSearchMetadataFullTextIndexMapping for details about importance levels).

If this is not possible, the query term is not included in the result set's relevancy.
A low StopWordThreshold value gives better search performance, but a lower result set relevancy (since there is a bigger chance that a query term does not influence which items are in the result set).

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
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

[New-FASTSearchMetadataRankProfile](New-FASTSearchMetadataRankProfile.md)

[Remove-FASTSearchMetadataRankProfile](Remove-FASTSearchMetadataRankProfile.md)

[Get-FASTSearchMetadataRankProfile](Get-FASTSearchMetadataRankProfile.md)

[Get-FASTSearchMetadataManagedProperty](Get-FASTSearchMetadataManagedProperty.md)

