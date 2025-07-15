---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboard
applicable: Microsoft Whiteboard
title: Get-Whiteboard
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-Whiteboard

## SYNOPSIS
Gets one or more whiteboards in Azure from the Microsoft Whiteboard service and returns them as
objects.

## SYNTAX

```
Get-Whiteboard [-UserId] <Guid> [[-WhiteboardId] <Guid>] [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Gets one or more whiteboards in Azure from the Microsoft Whiteboard service and returns them as
objects.

## EXAMPLES

### EXAMPLE 1

```powershell
Get-Whiteboard -UserId 00000000-0000-0000-0000-000000000001
```

Get all of a user's whiteboards.

### EXAMPLE 2

Get a user's specific whiteboard.

```powershell
Get-Whiteboard -UserId 00000000-0000-0000-0000-000000000001 -WhiteboardId 00000000-0000-0000-0000-000000000002
```

```Output
baseApi:                   baseApi-value
id:                        whiteboardId-value
userId:                    userId-value
folioId:                   folioId-value
title:                     title-value
createdBy:                 createdBy-value
ownerId:                   ownerId-value
ownerTenantId:             ownerTenantId-value
isShared:                  isShared-value
createdTime:               createdTime-value
invitedTime:               invitedTime-value
personalLastModifiedTime:  personalLastModifiedTime-value
lastModifiedTime:          lastModifiedTime-value
globalLastViewedTime:      globalLastViewedTime-value
lastViewedTime:            lastViewedTime-value
meetingId:                 meetingId-value
eTag:                      eTag-value
```

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
```

### -UserId

The ID of the user account to query whiteboards for. All whiteboards this account has access to will
be returned.

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
(Optional) The ID of a specific Whiteboard to query, if not specified all whiteboards are queried.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216)

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
