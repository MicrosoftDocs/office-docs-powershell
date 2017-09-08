---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPOSite

## SYNOPSIS
Creates a new SharePoint Online site collection for the current company.

## SYNTAX

```
New-SPOSite [-CompatibilityLevel <Int32>] [-LocaleId <UInt32>] [-NoWait] -Owner <String>
 [-ResourceQuota <Double>] -StorageQuota <Int64> [-Template <String>] [-TimeZoneId <Int32>] [-Title <String>]
 -Url <UrlCmdletPipeBind>
```

## DESCRIPTION
The New-SPOSite cmdlet creates a new site collection for the current company.
However, creating a new SharePoint Online site collection fails if a deleted site with the same URL exists in the Recycle Bin.

You must be a SharePoint Online global administrator to run the cmdlet.

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

### -CompatibilityLevel
{{Fill CompatibilityLevel Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocaleId
{{Fill LocaleId Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
{{Fill NoWait Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
{{Fill Owner Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceQuota
{{Fill ResourceQuota Description}}

```yaml
Type: Double
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuota
{{Fill StorageQuota Description}}

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
{{Fill Template Description}}

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

### -TimeZoneId
{{Fill TimeZoneId Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
{{Fill Title Description}}

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

### -Url
{{Fill Url Description}}

```yaml
Type: UrlCmdletPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOSite]()

[Set-SPOSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/3f869c81-ca2d-4b98-a05f-edf3b2397a37(Office.15).aspx)

