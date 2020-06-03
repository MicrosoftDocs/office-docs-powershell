---
external help file: Microsoft.Whiteboard.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftWhiteboard
online version: https://docs.microsoft.com/powershell/module/whiteboard/get-whiteboard
applicable: Microsoft Whiteboard
title: Get-Whiteboard
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-Whiteboard

## SYNOPSIS

Gets one or more Whiteboards from the Microsoft Whiteboard service and returns them as objects.

## SYNTAX

### Get a specific Whiteboard

```powershell
Get-Whiteboard -UserId <Guid> -WhiteboardId <Guid> [<CommonParameters>]
```

### Get all Whiteboards for a user

```powershell
Get-Whiteboard -UserId <Guid> [<CommonParameters>]
```

## DESCRIPTION

Gets one or more Whiteboards from the Microsoft Whiteboard service and returns them as objects.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------

```
PS C:\>Get-Whiteboard -UserId 00000000-0000-0000-0000-000000000001
```

Get all of a user's Whiteboards.

### -------------------------- EXAMPLE 2 --------------------------

```
PS C:\>Get-Whiteboard -UserId 00000000-0000-0000-0000-000000000001 -WhiteboardId 00000000-0000-0000-0000-000000000002
```

Get user's specific Whiteboard.


### Response

```yaml
  baseApi                  : baseApi-value
  id                       : whiteboardId-value
  userId                   : userId-value
  folioId                  : folioId-value
  title                    : title-value
  createdBy                : createdBy-value
  ownerId                  : ownerId-value
  ownerTenantId            : ownerTenantId-value
  isShared                 : isShared-value
  createdTime              : createdTime-value
  invitedTime              : invitedTime-value
  personalLastModifiedTime : personalLastModifiedTime-value
  lastModifiedTime         : lastModifiedTime-value
  globalLastViewedTime     : globalLastViewedTime-value
  lastViewedTime           : lastViewedTime-value
  meetingId                : meetingId-value
  eTag                     : eTag-value
```


## PARAMETERS

### -UserId
Optional. The ID of the user account to query Whiteboards for. All Whiteboards this account has access to will be returned. 

```yaml
Type:                        Guid
Required:                    true
Position:                    named
Default value:               None
Accept pipeline input:       false
Accept wildcard characters:  false
Applicable: Microsoft Whiteboard
```

### -WhiteboardId

Optional. The ID of a specific Whiteboard.

```yaml
Type:                        Guid
Required:                    true
Position:                    named
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

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
