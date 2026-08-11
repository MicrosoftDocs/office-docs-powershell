---
external help file: InkCanvasAdmin-help.xml
Module Name: InkCanvasAdmin
online version: https://learn.microsoft.com/powershell/module/inkcanvasadmin/invoke-inkcanvasadmin
applicable: Microsoft Ink Canvas
title: Invoke-InkCanvasAdmin
schema: 2.0.0
author: peterhu
ms.author: peterhu
ms.reviewer:
---

# Invoke-InkCanvasAdmin

## SYNOPSIS
Passes raw arguments directly to the Ink Canvas admin CLI.

## SYNTAX

```
Invoke-InkCanvasAdmin [[-Arguments] <String[]>] [<CommonParameters>]
```

## DESCRIPTION

A pass-through cmdlet that forwards all provided arguments directly to the underlying Ink Canvas
admin CLI (`ink-canvas-admin.js`). Use this cmdlet to access CLI features or options not yet
exposed as named PowerShell parameters in the other InkCanvasAdmin cmdlets.

## EXAMPLES

### EXAMPLE 1

Run the discover command directly through the CLI.

```powershell
PS C:\>Invoke-InkCanvasAdmin discover --tenant-id 00000000-0000-0000-0000-000000000001 --client-id 00000000-0000-0000-0000-000000000002 --container-type-id 00000000-0000-0000-0000-000000000003 --user-id 00000000-0000-0000-0000-000000000004
```

## PARAMETERS

### -Arguments

The arguments to pass directly to the Ink Canvas admin CLI.

```yaml
Type: System.String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
