---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardsmigrated
applicable: Microsoft Whiteboard
title: Get-WhiteboardsMigrated
schema: 2.0.0
author: shwetawagh
ms.author: shwetawagh
ms.reviewer:
---

# Get-WhiteboardsMigrated

## SYNOPSIS
Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

## SYNTAX

```
Get-WhiteboardsMigrated [-UserId] <Guid> [[-ConnectMgGraph] <String>] [[-ContinuationToken] <String>]
 [-ForceAuthPrompt] [[-IncrementalRunName] <String>] [<CommonParameters>]
```

## DESCRIPTION

Gets one or more whiteboards that are migrated to OneDrive for particular user and returns them as
objects provided Admin have access to that user OneDrive.

## EXAMPLES

### EXAMPLE 1

Get all user's migrated whiteboards.

```powershell
Get-WhiteboardsMigrated -UserId e2ff85af-37e6-4ed7-893b-7ea10c380dc4
```

```Output
Drive Items found for User e2ff85af-37e6-4ed7-893b-7ea10c380dc4
---------------------------------------------------
Name: Test11whiteboard.whiteboard
ID: 01ZSJH4Y3TXKT7TKCRRZG3LFKTEGDGSKW4
Last Modified: 03/06/2025 09:59:32
Size: 15222 bytes
Migration Date: 03/06/2025 09:58:57
User ID: e2ff85af-37e6-4ed7-893b-7ea10c380dc4
User Email: AdeleV@M365x86764163.OnMicrosoft.com
User Name: Adele Vance
--------------------------------------
Name: Test11whiteboard-Copy.whiteboard
ID: 01ZSJH4YZFODVVZ6LTNNC35BT4QON7GTJI
Last Modified: 03/06/2025 09:59:25
Size: 15225 bytes
Migration Date: 03/06/2025 09:58:57
User ID: e2ff85af-37e6-4ed7-893b-7ea10c380dc4
User Email: AdeleV@M365x86764163.OnMicrosoft.com
User Name: Adele Vance
--------------------------------------
```

## PARAMETERS

### -ConnectMgGraph
{{ Fill ConnectMgGraph Description }}

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinuationToken
{{ Fill ContinuationToken Description }}

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -IncrementalRunName
{{ Fill IncrementalRunName Description }}

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserId

The ID of the user account to query whiteboards for. Admin should have access to user OneDrive to
get that users whiteboards.

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
