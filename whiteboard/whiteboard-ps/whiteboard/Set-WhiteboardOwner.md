---
external help file: Microsoft.Whiteboard.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftWhiteboard
online version: https://docs.microsoft.com/powershell/module/whiteboard/set-whiteboardowner
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

```powershell
Set-WhiteboardOwner [-WhiteboardId] <Guid> [-OldOwnerId] <Guid> [-NewOwnerId] <Guid> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Sets the owner for a Whiteboard.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```
PS C:\>Set-WhiteboardOwner -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002 -WhiteboardId 00000000-0000-0000-0000-000000000003
```

Move Whiteboard ownership from one user to another.

## PARAMETERS

### -WhiteboardId

The Whiteboard for which the owner is being changed.

```yaml
Type:                        Guid
Required:                    true
Position:                    2
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -OldOwnerId

The ID of the previous owner.

```yaml
Type:                        Guid
Required:                    true
Position:                    3
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -NewOwnerId

The ID of the new owner.

```yaml
Type:                        Guid
Required:                    true
Position:                    4
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -ForceAuthPrompt

Optional. Always prompt for auth. Use to ignore cached credentials.

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               false
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -WhatIf

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -Confirm [<SwitchParameter>]

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
