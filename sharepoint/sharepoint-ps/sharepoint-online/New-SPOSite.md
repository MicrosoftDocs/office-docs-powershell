---
external help file: 
applicable: SharePoint Online
title: New-SPOSite
schema: 2.0.0
---

# New-SPOSite

## SYNOPSIS
Creates a new SharePoint Online site collection for the current company.


## SYNTAX

```
New-SPOSite [-CompatibilityLevel <Int32>] [-LocaleId <UInt32>] [-NoWait] -Owner <String>
 [-ResourceQuota <Double>] -StorageQuota <Int64> [-Template <String>] [-TimeZoneId <Int32>] [-Title <String>]
 -Url <UrlCmdletPipeBind> [<CommonParameters>]
```


## DESCRIPTION
The `New-SPOSite` cmdlet creates a new site collection for the current company.
However, creating a new SharePoint Online site collection fails if a deleted site with the same URL exists in the Recycle Bin.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
New-SPOSite -Url http://contoso.sharepoint.com/sites/mynewsite -Owner joe.healy@contoso.com -StorageQuota 1000 -Title "My new site collection"
```

Example 1 creates a new site collection for the current company with specified site URL, title and owner. The storage quota is set to 1000 megabytes.

### -----------------------EXAMPLE 2-----------------------------
```
New-SPOSite -Url http://contoso.sharepoint.com/sites/mynewsite -Owner joe.healy@contoso.com -StorageQuota 1000 -CompatibilityLevel 15 -LocaleID 1033 -ResourceQuota 300 -Template "STS#0" -TimeZoneId 13 -Title "My new site collection"
```

Example 2 creates a new site collection for the current company with specified site URL, title, owner and template. The storage quota is set to 1000 megabytes and the resource quota is set to 300 megabytes. The template compatibility level is set to 15 which means that the site collection only supports the SharePoint 2013 template. The language is set to English - United States (LocaleID = 1033) and the time zone is set to (GMT-08:00) Pacific Time (US and Canada) (TimeZone = 13).

### -----------------------EXAMPLE 3-----------------------------
```
New-SPOSite -Url https://contoso.sharepoint.com/sites/accounting -Owner admin@contoso.com -StorageQuota 100 -NoWait -ResourceQuota 50 -Template STS#0
```

Example 3 creates a new site collection for the current company with specified site URL, owner and template. The storage quota is set to 100 megabytes and the resource quota is set to 50 megabytes. This cmdlet is executed immediately without delay.


## PARAMETERS

### -CompatibilityLevel
Specifies the version of templates to use when you are creating a new site collection. This value sets the initial CompatibilityLevel value for the site collection. The values for this parameter can be SharePoint Server. When this parameter is not specified, the CompatibilityLevel will be by default the highest possible version for the Web application.

> [!NOTE] 
> For SharePoint Online Preview, it can only be set to "14" or "15". "14" indicates SharePoint 2010 Products, "15" indicates SharePoint 2013. Other values are not valid and will cause error.


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

### -LocaleId
Specifies the language of this site collection. For more information, see Locale IDs Assigned by Microsoft (https://go.microsoft.com/fwlink/p/?LinkId=242911). The Template and LocaleId parameters must be a valid combination as returned from the `Get-SPOWebTemplate` cmdlet.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
Specifies to continue executing script immediately.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the user name of the site collection’s primary owner. The owner must be a user instead of a security group or an email-enabled security group.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceQuota
Specifies the quota for this site collection in Sandboxed Solutions units. This value must not exceed the company’s aggregate available Sandboxed Solutions quota. The default value is 0. For more information, see Resource Usage Limits on Sandboxed Solutions in SharePoint (https://msdn.microsoft.com/en-us/library/gg615462.aspx).


```yaml
Type: Double
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuota
Specifies the storage quota for this site collection in megabytes. This value must not exceed the company’s available quota.


```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
Specifies the site collection template type. Use the `Get-SPOWebTemplate` cmdlet to get the list of valid templates. If no template is specified, one can be added later. The Template and LocaleId parameters must be a valid combination as returned from the `Get-SPOWebTemplate` cmdlet.


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

### -TimeZoneId
Specifies the time zone of the site collection. For more information, see SPRegionalSettings.TimeZones Property (https://go.microsoft.com/fwlink/p/?LinkId=242912).


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

### -Title
Specifies the title of the site collection.


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

### -Url
Specifies the full URL of the new site collection. It must be in a valid managed path in the company’s site. For example, for company contoso, valid managed paths are https://contoso.sharepoint.com/sites and https://contoso.sharepoint.com/teams.


```yaml
Type: UrlCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

[Get-SPOSite](Get-SPOSite.md)

[Set-SPOSite](Set-SPOSite.md)
