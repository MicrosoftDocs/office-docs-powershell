---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spositedesigntask
applicable: SharePoint Online
title: Add-SPOSiteDesignTask
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Add-SPOSiteDesignTask

## SYNOPSIS

Similar to Invoke-SPOSiteDesign, this command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-SPOSiteDesign is limited to 30 actions and subactions).

The supported site templates you can apply a site design to include: “modern” team site (with O365 group), “modern” team site (without an O365 group); communication site; classic team site; and classic publishing site.

## SYNTAX

```powershell
Add-SPOSiteDesignTask
  -SiteDesignId <guid>
  -WebUrl <string>
  [<CommonParameters>]
```

## DESCRIPTION

This command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-SPOSiteDesign is limited to 30 actions and subactions).

This command is intended to replace Invoke-SPOSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.

> [!NOTE]
> This command only creates the request. To check on the job status or to view details of the scheduled run, use the commands in the related section below.

## EXAMPLES

### Example 1

This example applies a site design that includes two site scripts - totaling over 30 site script actions. Executing the commands will schedule the site design to be queued and run against the designated site collection.

```powershell
Add-SPOSiteDesignTask -SiteDesignId 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/projectawesome”
```

## PARAMETERS

### -SiteDesignId

The ID of the site design to apply.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebUrl
The URL of the site collection where the site design will be applied.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPOSiteDesignTask](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositedesigntask?view=sharepoint-ps)

[Invoke-SPOSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-online/invoke-spositedesign?view=sharepoint-ps)
