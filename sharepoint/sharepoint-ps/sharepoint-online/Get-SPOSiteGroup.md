---
external help file: 
applicable: SharePoint Online
title: Get-SPOSiteGroup
schema: 2.0.0
---

# Get-SPOSiteGroup

## SYNOPSIS
Gets all the groups on the specified site collection.


## SYNTAX

```
Get-SPOSiteGroup [-Group <String>] [-Limit <Int32>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
Use the `Get-SPOSiteGroup` cmdlet to get all the groups on the specified site collection by using the Site parameter.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOSiteGroup -Site http://contoso.sharepoint.com/sites/siteA
```
This example returns all the groups on the specified site collection http://contoso.sharepoint.com/sites/siteA.


## PARAMETERS

### -Group
Specifies the group name.


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

### -Limit
Specifies the maximum number of site collections to return. To retrieve all of the site collections, use Limit ALL. The default value is 200.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the site collection scope.


```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
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

[Set-SPOSiteGroup](Set-SPOSiteGroup.md)

[Remove-SPOSiteGroup](Remove-SPOSiteGroup.md)
