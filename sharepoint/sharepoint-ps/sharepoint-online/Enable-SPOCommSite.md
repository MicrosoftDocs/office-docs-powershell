 ---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Enable-SPOCommSite
schema: 2.0.0
author: DC Padur
ms.author: dipadur
ms.reviewer:
---

# Enable-SPOCommSite

## SYNOPSIS
Enables the modern communication site experience at the classic root site of a tenant. If you already have a modern communication site at the root, you do not need this cmdlet.

## SYNTAX

```
Enable-SPOCommSite [-SiteUrl] <string> [-DesignPackageId] <GUID> [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to enable the modern communication site experience at the classic root site of a tenant.

## EXAMPLES

### Example 1

```
Enable-SPOCommSite -SiteUrl https://contoso.sharepoint.com
```

This example enables the communication site experience at this https://contoso.sharepoint.com site. 

## PARAMETERS

### -SiteUrl

URL of the root site for enabling the modern communication site experience

```yaml
Type: string
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignPackageId

GUID identifying the communication site design.

```yaml
Type: GUID
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: false
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## NOTES

Mandatory requirements
1.	The siteurl provided must be the root site
2.	The root site should not currently have the classic publishing feature enabled (at the site or web level)
3.	The root site should not have had the classic publishing feature enabled in the past (at the site or web level)
4.	The site must have quick launch site navigation enabled
