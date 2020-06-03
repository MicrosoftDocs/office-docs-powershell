---
external help file: Microsoft.Whiteboard.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftWhiteboard
online version: https://docs.microsoft.com/powershell/module/whiteboard/invoke-transferallwhiteboards
applicable: Microsoft Whiteboard
title: Set-WhiteboardOwner
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Invoke-TransferAllWhiteboards

## SYNOPSIS

Transfer ownership of all Whiteboards owned by a user to another user.

## SYNTAX

```powershell
Invoke-TransferAllWhiteboards [-OldOwnerId] <Guid> [-NewOwnerId] <Guid> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Transfer ownership of all Whiteboards owned by a user to another user.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```
PS C:\>Invoke-TransferAllWhiteboards -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002 -WhatIf
```

Check how many Whiteboards will be transferred without transferring them.

### -------------------------- EXAMPLE 2 --------------------------

```
PS C:\>Invoke-TransferAllWhiteboards -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002
```

Transfer (and prompt before performing any write actions).


## PARAMETERS

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

For details on user IDs, see the [overview page](whiteboard.md).

## RELATED LINKS
