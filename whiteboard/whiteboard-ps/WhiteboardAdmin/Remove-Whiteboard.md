---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/remove-whiteboard
applicable: Microsoft Whiteboard
title: Remove-Whiteboard
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Remove-Whiteboard

## SYNOPSIS
Deletes the specified whiteboard for the given user from the Microsoft Whiteboard service.

## SYNTAX

```powershell
Remove-Whiteboard [-UserId] <Guid> [-WhiteboardId] <Guid> [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Removes the specified whiteboard (owner) or a joined user removes themselves from the specified
whiteboard. If the user is the owner of the whiteboard, the entire whiteboard will be deleted. If
the user has joined the whiteboard but does not own it, they will be removed and the whiteboard will
still be accessible by others.

## EXAMPLES

### EXAMPLE 1

```powershell
Remove-Whiteboard -UserId 00000000-0000-0000-0000-000000000001 -WhiteboardId 00000000-0000-0000-0000-000000000002
```

Deletes the whiteboard.

## PARAMETERS

### -ForceAuthPrompt

(Optional) Always prompt for auth. Use to ignore cached credentials.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserId

The ID of the user account to delete the whiteboard from.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhiteboardId

The ID of a specific whiteboard to delete.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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
