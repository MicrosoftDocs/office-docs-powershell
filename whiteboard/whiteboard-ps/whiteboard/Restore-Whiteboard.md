---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/restore-whiteboard
applicable: Microsoft Whiteboard
title: Restore-Whiteboard
schema: 2.0.0
author: shwetawagh
ms.author: shwetawagh
ms.reviewer:
---

# Restore-Whiteboard

## SYNOPSIS

Restores the specified Whiteboard by removing the mapping to the board migrated to ODB. This will not delete the ODB board.

## SYNTAX

```powershell
Restore-Whiteboard [-WhiteboardId] <Guid> [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Restores the azure board. The migrated onedrive board will be retained to not lose any updates done to Azure board.
Restoration is only possible for approximately 90 days after migration, when the original board is still available.

## EXAMPLES

### EXAMPLE 1

```powershell
Restore-Whiteboard -WhiteboardId 00000000-0000-0000-0000-000000000002
```

Restore the whiteboard.

## PARAMETERS

### -WhiteboardId

The ID of a specific whiteboard to restore.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -ForceAuthPrompt

(Optional) Always prompt for auth. Use to ignore cached credentials.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
