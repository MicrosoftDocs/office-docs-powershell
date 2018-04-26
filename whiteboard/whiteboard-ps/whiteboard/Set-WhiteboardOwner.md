---
external help file: Microsoft.Whiteboard.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftWhiteboard
applicable: Microsoft Whiteboard
title: Set-WhiteboardOwner
online version: 
schema: 2.0.0
---

# Set-WhiteboardOwner
    
## SYNOPSIS

Sets the owner for a Whiteboard.

## SYNTAX

```
Set-WhiteboardOwner [[-Token] <AuthenticationResult>] [-WhiteboardId] <Guid> [-OldOwnerId] <Guid> [-NewOwnerId] <Guid> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## PARAMETERS

### -Token

The Azure AD bearer token corresponding to the specified credentials. If unspecified, a new token will be generated.

```yaml
Type:                        Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationResult
Required:                    false
Position:                    1
Default value:               None               
Accept pipeline input:       false
Accept wildcard characters:  false
```

### -WhiteboardId

The Whiteboard for which the owner is being changed.

```yaml
Type:                        Guid
Required:                    true
Position:                    2
Default value:               None       
Accept pipeline input:       false
Accept wildcard characters:  false
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
```

### -WhatIf

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
```

### -Confirm [<SwitchParameter>]

```yaml
Type:                        SwitchParameter
Required:                    false
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
```

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```
PS C:\>Set-WhiteboardOwner -OldOwnerId 00000000-0000-0000-0000-000000000001 -NewOwnerId 00000000-0000-0000-0000-000000000002
```

Move a Whiteboard from one user to another.