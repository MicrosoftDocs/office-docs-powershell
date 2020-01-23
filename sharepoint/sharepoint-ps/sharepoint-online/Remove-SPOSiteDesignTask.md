---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spositedesigntask
applicable: SharePoint Online
title: Remove-SPOSiteDesignTask
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOSiteDesignTask

## SYNOPSIS

Command to remove a scheduled site design script.

## SYNTAX

```powershell
Remove-SPOSiteDesignTask
  -Identity <guid>
  [<CommonParameters>]
```

## DESCRIPTION

Removes a scheduled site design by providing the site design ID. If the execution of the associated site script has already started the execution will not be terminated.

> [!NOTE]
> This command only removes a scheduled request. To check on the job status or to view details of the scheduled run, use the commands in the related section below.

## EXAMPLES

### Example 1

This example removes a previously scheduled site design.

```powershell
Remove-SPOSiteDesignTask -Identity 501z8c32-4147-44d4-8607-26c2f67cae82
```

## PARAMETERS

### -Identity

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

## RELATED LINKS

[Get-SPOSiteDesignTask](Get-SPOSiteDesignTask.md)

[Get-SPOSiteDesignRun](Get-SPOSiteDesignRun.md)

[Get-SPOSiteDesignRunStatus](Get-SPOSiteDesignRunStatus.md)
