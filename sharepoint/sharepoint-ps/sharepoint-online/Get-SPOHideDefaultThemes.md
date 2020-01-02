---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOHideDefaultThemes
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOHideDefaultThemes

## SYNOPSIS

Queries the current SPOHideDefaultThemes setting. SPO stands for SharePoint Online.

## DESCRIPTION

The **Get-SPOHideDefaultThemes** cmdlet retrieves the current **Set-SPOHideDefaultThemes** setting. You might want to use this cmdlet in a PowerShell script to read the setting and then take different actions based on whether the default themes are hidden. This cmdlet does not have any parameters.

> [!NOTE]
> This cmdlet was named **Get-HideDefaultThemes** until the December 2017 release of the SPO Management Shell. We recommend that you use the latest version of the PowerShell cmdlets.

## EXAMPLES

### Example 1

```powershell
Get-SPOHideDefaultThemes
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Set-SPOHideDefaultThemes](Set-SPOHideDefaultThemes.md)
