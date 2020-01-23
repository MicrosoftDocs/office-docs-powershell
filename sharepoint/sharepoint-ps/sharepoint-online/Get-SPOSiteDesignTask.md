---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositedesigntask
applicable: SharePoint Online
title: Add-SPOSiteDesignTask
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOSiteDesignTask

## SYNOPSIS

Cmdlet to get a scheduled site design script.

## SYNTAX

```powershell
Get-SPOSiteDesignTask
  -Identity <guid>
  -WebUrl <string>
  [<CommonParameters>]
```

## DESCRIPTION

Used to retrieve a scheduled site design script. It takes the ID of the scheduled site design and the URL fo the SPWeb where the site design is scheduled to be applied.


> [!NOTE]
> This command only retrieves a previously scheduled request.

## EXAMPLES

### Example 1

This example applies a site design that includes two site scripts - totaling over 30 site script actions. Executing the commands will schedule the site design to be queued and run against the designated site collection.

```powershell
Get-SPOSiteDesignTask -Identity 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/projectawesome”

```

## PARAMETERS

### -Identity
The ID of the scheduled site design to apply.

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
## RELATED LINKS

[Add-SPOSiteDesignTask](Get-SPOSiteDesignTask.md)

[Get-SPOSiteDesignRun](Get-SPOSiteDesignRun.md)

[Get-SPOSiteDesignRunStatus](Get-SPOSiteDesignRunStatus.md)
