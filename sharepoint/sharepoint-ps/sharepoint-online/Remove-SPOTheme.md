---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Remove-SPOTheme
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOTheme

## SYNOPSIS

Removes a theme from the theme gallery.

## SYNTAX

```powershell
Remove-SPOTheme [-Identity] <SpoThemePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The **Remove-SPOTheme** cmdlet removes a theme from your tenant store.

## EXAMPLES

### Example 1

This example removes the `"Custom Cyan"` theme that was used in the previous examples for the **Add-SPOTheme** and **Get-SPOTheme** cmdlets.

```powershell
Remove-SPOTheme -Name "Custom Cyan"
```

## INPUTS

## OUTPUTS
