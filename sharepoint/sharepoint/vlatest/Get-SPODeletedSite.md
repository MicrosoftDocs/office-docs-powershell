---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPODeletedSite

## SYNOPSIS
Returns all deleted site collections from the Recycle Bin.

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPODeletedSite [[-Identity] <SpoSitePipeBind>] [-IncludeOnlyPersonalSite] [-Limit <String>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPODeletedSite [[-Identity] <SpoSitePipeBind>] [-IncludePersonalSite] [-Limit <String>]
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

### (SharePoint Online)
```

```

### (SharePoint Online)
```

```

### (SharePoint Online)
```

```

## PARAMETERS

### -IncludeOnlyPersonalSite
Use this switch parameter to only include Personal Sites in the returned results.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the URL of the deleted site collection to be returned.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors]()

[Restore-SPODeletedSite]()

[Remove-SPODeletedSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/29079bf5-73e8-48f5-b992-4d04dac4738f(Office.15).aspx)

