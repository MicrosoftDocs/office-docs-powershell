---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardsfortenantmigrated
applicable: Microsoft Whiteboard
title: Get-WhiteboardsForTenantMigrated
schema: 2.0.0
author: shwetawagh
ms.author: shwetawagh
ms.reviewer:
---

# Get-WhiteboardsForTenantMigrated

## SYNOPSIS

Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

## SYNTAX

```powershell
Get-WhiteboardsForTenantMigrated [-IncrementalRunName <String>] [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Gets one or more whiteboards that are migrated to OneDrive and returns them as objects. It output all boards migrated to OneDrive in all user accounts under that Tenant provided Admin have access to all those users OneDrive.

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:\>Get-WhiteboardsForTenantMigrated
```

Get all user's migrated whiteboards in that tenant and outputs in cmd with all users whiteboards provided admin has access to all those users oneDrive.

### Output

```yaml
Drive Items found for User e2ff85af-37e6-4ed7-893b-7ea10c380dc4 ---------------------------------------------------
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
Drive Items found for User 98f9e197-f331-4cca-b7b7-0c0307452fdd ---------------------------------------------------
Name: Azure111 whiteboard 1.whiteboard
ID: 01BYRZZIGVVILTKNPTFFFL2M5WFSTDVMSZ
Last Modified: 02/13/2025 16:45:58
Size: 23110 bytes
Migration Date: 02/13/2025 16:45:37
User ID: 98f9e197-f331-4cca-b7b7-0c0307452fdd
User Email: admin@M365x86764163.onmicrosoft.com
User Name: MOD Administrator
--------------------------------------
Name: Azure111 whiteboard.whiteboard
ID: 01BYRZZIBSVZZUYVJ2JZAKUOV5FMPHM2NL
Last Modified: 02/19/2025 07:35:25
Size: 12007 bytes
Migration Date: 02/19/2025 07:35:24
User ID: 98f9e197-f331-4cca-b7b7-0c0307452fdd
User Email: admin@M365x86764163.onmicrosoft.com
User Name: MOD Administrator
--------------------------------------
No drive items found for User cc078d4f-5ba1-48ff-847f-0f4af2ee8cf5 with DriveID b!Upfgzjfpx0e4lqL84H-BRZGV7qFNQ-hCobqXYyyCS1clCfsBBCS5T75ca0pe4UQS
Admin does not have access to User 4f14ba28-e678-4535-a9ea-c9f3b32c46f0 OneDrive.
```

### EXAMPLE 2

```powershell
PS C:\>Get-WhiteboardsForTenantMigrated -IncrementalRunName 1
```

Get all user's migrated whiteboards in that tenant and incrementally creates file "WhiteboardsMigrated-$IncrementalRunName.txt" with all users whiteboards provided admin has access to all those users oneDrive.

### Output

```yaml
[
  "Name: Test11whiteboard.whiteboard",
  "ID: 01ZSJH4Y3TXKT7TKCRRZG3LFKTEGDGSKW4",
  "Last Modified: 03/06/2025 09:59:32",
  "Size: 15222 bytes",
  "Migration Date: 03/06/2025 09:58:57",
  "User ID: e2ff85af-37e6-4ed7-893b-7ea10c380dc4",
  "User Email: AdeleV@M365x86764163.OnMicrosoft.com",
  "User Name: Adele Vance",
  "-----------------------------------------------",
  "Name: Untitled.whiteboard",
  "ID: 01ZSJH4YYNHPBYXNRAIFAY42SHQ365Z32M",
  "Last Modified: 02/19/2025 05:19:04",
  "Size: 15307 bytes",
  "Migration Date: 02/19/2025 05:19:04",
  "User ID: e2ff85af-37e6-4ed7-893b-7ea10c380dc4",
  "User Email: AdeleV@M365x86764163.OnMicrosoft.com",
  "User Name: Adele Vance",
  "-----------------------------------------------"
]
[
  "Name: Azure111 whiteboard.whiteboard",
  "ID: 01BYRZZIBSVZZUYVJ2JZAKUOV5FMPHM2NL",
  "Last Modified: 02/19/2025 07:35:25",
  "Size: 12007 bytes",
  "Migration Date: 02/19/2025 07:35:24",
  "User ID: 98f9e197-f331-4cca-b7b7-0c0307452fdd",
  "User Email: admin@M365x86764163.onmicrosoft.com",
  "User Name: MOD Administrator",
  "-----------------------------------------------"
]
```

## PARAMETERS

### -IncrementalRunName

Saves incremental progress as the cmdlet runs. Writes progress and results to `.txt` files in the current directory:

- `WhiteboardsMigrated-*.txt` contains the incremental results containing whiteboard objects for the tenant where `*` is the provided **IncrementalRunName**.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216)

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
