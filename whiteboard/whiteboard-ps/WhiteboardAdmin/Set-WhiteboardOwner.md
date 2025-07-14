---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/set-whiteboardowner
applicable: Microsoft Whiteboard
title: Set-WhiteboardOwner
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-WhiteboardOwner

## SYNOPSIS
Sets the owner for a Whiteboard.

## SYNTAX

```
Set-WhiteboardOwner [-WhiteboardId] <Guid> [-OldOwnerId] <Guid> [-NewOwnerId] <Guid> [-ForceAuthPrompt]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Sets the owner for a whiteboard.

## EXAMPLES

### EXAMPLE 1

```powershell
Set-WhiteboardOwner -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002
```

Move whiteboard ownership from one user to another.

## PARAMETERS

### -ForceAuthPrompt

Optional. Always prompt for auth. Use to ignore cached credentials.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -NewOwnerId

The ID of the new owner.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -OldOwnerId

The ID of the previous owner.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -WhiteboardId

The whiteboard for which the owner is being changed.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -WhatIf

Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
