---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardsfortenant
applicable: Microsoft Whiteboard
title: Get-WhiteboardsForTenant
schema: 2.0.0
author: samanehrajabi
ms.author: srajabi
ms.reviewer:
---

# Get-WhiteboardsForTenant

## SYNOPSIS

Gets all the whiteboards in Azure associated with a tenant in a specified geography.

## SYNTAX

```powershell
Get-WhiteboardsForTenant [-Geography <String>]
 [-IncrementalRunName <String>]
 [-ForceAuthPrompt]
 [<CommonParameters>]
```

## DESCRIPTION

Gets all the whiteboards in Azure in a tenant in a specified geography. Returns a list of whiteboard objects. The data is pre-calculated approximately every two weeks and is not realtime.

## EXAMPLES

### EXAMPLE 1

This command gets all the whiteboards in Azure associated with the caller's tenant in Europe as a list of whiteboard metadata objects.

```powershell
PS C:\> Get-WhiteboardsForTenant -Geography Europe
```

```Output
baseApi                  : eu.whiteboard.microsoft.com
id                       : 00000000-0000-0000-0000-000000000001
userId                   : 00000000-0000-0000-0000-000000000000
folioId                  : 00000000-0000-0000-0000-000000000000
title                    : title1
createdBy                : 00000000-0000-0000-0000-000000000000
ownerId                  : 00000000-0000-0000-0000-000000000000
ownerTenantId            : 00000000-0000-0000-0000-000000000000
isShared                 : False
createdTime              : 2022-09-10T19:59:03.3407011Z
invitedTime              :
personalLastModifiedTime : 2022-09-11T15:53:32.4494737Z
lastModifiedTime         : 2022-09-11T15:53:32.4494737Z
globalLastViewedTime     : 2022-09-11T15:55:28.7242817Z
lastViewedTime           : 2022-09-11T15:55:28.7242817Z
meetingId                :
eTag                     : W/"datetime'2022-09-11T19%3A23%3A56.2845616Z'"

baseApi                  : eu.whiteboard.microsoft.com
id                       : 00000000-0000-0000-0000-000000000002
userId                   : 00000000-0000-0000-0000-000000000000
folioId                  : 00000000-0000-0000-0000-000000000000
title                    : title2
createdBy                : 00000000-0000-0000-0000-000000000000
ownerId                  : 00000000-0000-0000-0000-000000000000
ownerTenantId            : 00000000-0000-0000-0000-000000000000
isShared                 : False
createdTime              : 2023-01-06T19:23:04.8807147Z
invitedTime              :
personalLastModifiedTime : 2023-01-06T19:23:13.6235107Z
lastModifiedTime         : 2023-01-06T19:23:13.6235107Z
globalLastViewedTime     : 2023-01-06T19:23:56.0264268Z
lastViewedTime           : 2023-01-06T19:23:56.0264268Z
meetingId                :
eTag                     : W/"datetime'2023-01-06T19%3A22%3A42.6717851Z'"
```

## PARAMETERS

### -Geography

The geography to look for board owners in. Accepted values are `Europe`, `Australia`, or `Worldwide` (all boards not in Australia or Europe).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -IncrementalRunName

Saves incremental progress as the cmdlet runs. Use to resume a partially completed run. Use the same **IncrementalRunName** value on later calls to continue a previously canceled or failed run. Writes progress and results to `.txt` files in the current directory:

- `Whiteboards-*.txt` contains the incremental results containing whiteboard objects for the tenant where `*` is the provided **IncrementalRunName**.
- `WhiteboardAdminRun-*.txt` contains the current state where `*` is the provided **IncrementalRunName**. This file should not be modified manually.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -ForceAuthPrompt

Always prompt for authentication. Use to ignore cached credentials.

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

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
