---
external help file: 
applicable: SharePoint Online
title: Get-SPODeletedSite
schema: 2.0.0
---

# Get-SPODeletedSite

## SYNOPSIS
Returns all deleted site collections from the Recycle Bin.

## SYNTAX

### ParameterSetPersonalSitesOnly
```
Get-SPODeletedSite [[-Identity] <SpoSitePipeBind>] [-IncludeOnlyPersonalSite] [-Limit <String>]
 [<CommonParameters>]
```

### ParameterSetAllSites
```
Get-SPODeletedSite [[-Identity] <SpoSitePipeBind>] [-IncludePersonalSite] [-Limit <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPODeletedSite cmdlet returns all deleted site collections that match the given criteria from the Recycle Bin.

By default the cmdlet only returns site and site collections that are not Personal Sites (My Sites).
To include personal sites, use the IncludePersonalSite parameter.
To return only Personal Sites, use the IncludeOnlyPersonalSite parameter.

These two Switch Parameters are in different parameter sets, so you can only use either one of them but not both.

This action does not restore these returned sites or site collection.
It only returns their properties so that you can see what sites or site collections have been deleted.
To restore the site or site collections, forward the results to the Restore-SPODeletedSite cmdlet in the pipeline.

You must be a SharePoint Online global administrator and a site collection administrator for the deleted site collections to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   ------------ Example 1 --------------------
```
PS C:\> Get-SPODeletedSite -IncludePersonalSite
```
The command in this example returns all deleted site collections from the Recycle Bin including Personal Sites.


## PARAMETERS

### -IncludeOnlyPersonalSite
Use this switch parameter to only include Personal Sites in the returned results.

```yaml
Type: SwitchParameter
Parameter Sets: ParameterSetPersonalSitesOnly
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the URL of the deleted site collection to be returned.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludePersonalSite
Use this switch parameter to include Personal Sites with the returned results.

```yaml
Type: SwitchParameter
Parameter Sets: ParameterSetAllSites
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
Specifies the maximum number of site collections to return.
It can be any number.
To retrieve all site collections, use ALL.
The default value is 200.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

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

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors]()

[Restore-SPODeletedSite]()

[Remove-SPODeletedSite]()


