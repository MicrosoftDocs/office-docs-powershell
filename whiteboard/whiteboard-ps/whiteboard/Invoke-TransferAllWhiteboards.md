---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/invoke-transferallwhiteboards
applicable: Microsoft Whiteboard
title: Invoke-TransferAllWhiteboards
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Invoke-TransferAllWhiteboards

## SYNOPSIS

Transfer ownership of all whiteboards owned by a user to another user.

## SYNTAX

```powershell
Invoke-TransferAllWhiteboards [-OldOwnerId] <Guid> [-NewOwnerId] <Guid> [-ForceAuthPrompt] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Transfer ownership of all whiteboards owned by a user to another user.

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:\>Invoke-TransferAllWhiteboards -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002 -WhatIf
```

Check how many whiteboards will be transferred without transferring them.

### EXAMPLE 2

```powershell
PS C:\>Invoke-TransferAllWhiteboards -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002
```

Transfer (and prompt before performing any write actions).

## PARAMETERS

### -OldOwnerId

The ID of the previous owner.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -NewOwnerId

The ID of the new owner.

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

Optional. Always prompt for auth. Use to ignore cached credentials.

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

### -WhatIf

Execute the command without making any actual changes. Only calls read methods on the REST service.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

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
