---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardmigrationmapping
applicable: Microsoft Whiteboard
title: Get-WhiteboardMigrationMapping
schema: 2.0.0
author: guanki
ms.author: guanki
ms.reviewer:
---

# Get-WhiteboardMigrationMapping

## SYNOPSIS
Gets all Azure whiteboards for a user and maps them with their migrated Fluid boards in SharePoint OneDrive.

## SYNTAX

```
Get-WhiteboardMigrationMapping [-UserId] <Guid> [[-IncrementalRunName] <String>] [-ForceAuthPrompt]
 [<CommonParameters>]
```

## DESCRIPTION

Gets all Azure whiteboards for a user and maps them with their migrated Fluid boards in SharePoint OneDrive. The cmdlet performs a full outer join mapping between Azure-based whiteboards and their corresponding Fluid boards that have been migrated to OneDrive. Returns mapping objects showing which Azure boards have been migrated, which migrated boards exist in OneDrive, and the relationship between them.

The cmdlet connects to the Whiteboard service to retrieve Azure whiteboards (including those with fluidFileId) and connects to Microsoft Graph to access OneDrive and retrieve migrated boards from the user's OneDrive Whiteboards/Migration folder. It handles pagination for large datasets and includes retry logic for robustness.

Mapping statuses include:
- "Fully Mapped" - Azure board has a corresponding migrated board in OneDrive
- "Migrated board not found" - Azure board exists but no corresponding migrated board found
- "Azure board not found" - Migrated board exists in OneDrive but no corresponding Azure board

## EXAMPLES

### EXAMPLE 1

Get all Azure whiteboards and migrated Fluid boards for the user and return a mapping between them.

```powershell
Get-WhiteboardMigrationMapping -UserId 00000000-0000-0000-0000-000000000001
```

```Output
AzureWhiteboardId          : a1234567-89ab-cdef-0123-456789abcdef
AzureWhiteboardTitle       : Project Planning Board
AzureWhiteboardOwnerId     : 00000000-0000-0000-0000-000000000001
AzureWhiteboardCreatedTime : 2025-01-15T10:30:00Z
AzureWhiteboardBaseApi     : us.whiteboard.microsoft.com
AzurePreviousOwnerId       : 
FluidFileId                : xyz/abc/a1
MigratedBoardDriveId       : b!abc123
MigratedBoardItemId        : def456
MigratedBoardName          : Project Planning Board.whiteboard
MigratedBoardSize          : 45678
MigratedBoardLastModified  : 2025-02-10T14:22:00Z
MigratedBoardCreated       : 2025-02-10T09:15:00Z
MappingStatus              : Fully Mapped

AzureWhiteboardId          : b2345678-90ab-cdef-0123-456789abcdef
AzureWhiteboardTitle       : Team Brainstorm
AzureWhiteboardOwnerId     : 00000000-0000-0000-0000-000000000001
AzureWhiteboardCreatedTime : 2025-01-20T11:45:00Z
AzureWhiteboardBaseApi     : us.whiteboard.microsoft.com
AzurePreviousOwnerId       : 
FluidFileId                : 
MigratedBoardDriveId       : 
MigratedBoardItemId        : 
MigratedBoardName          : 
MigratedBoardSize          : 
MigratedBoardLastModified  : 
MigratedBoardCreated       : 
MappingStatus              : Migrated board not found
```

### EXAMPLE 2

Get mapping and save incremental progress to file in the current directory.

```powershell
Get-WhiteboardMigrationMapping -UserId 00000000-0000-0000-0000-000000000001 -IncrementalRunName run1
```

```Output
Starting new mapping operation

Mappings will be saved to WhiteboardMappings-run1.json in the current directory

Successfully connected to Microsoft Graph
Getting all whiteboards for user 00000000-0000-0000-0000-000000000001
Found 25 old whiteboards
Getting new migrated whiteboards from OneDrive for user 00000000-0000-0000-0000-000000000001
DriveIds for user 00000000-0000-0000-0000-000000000001 : b!abc123xyz
Found 20 migrated whiteboards in drive b!abc123xyz for user 00000000-0000-0000-0000-000000000001
Mapping results saved to WhiteboardMappings-run1.json
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

### -IncrementalRunName

Optional. Saves incremental progress as the cmdlet runs. Use to resume a partially completed mapping operation. Writes progress and results to a JSON file in the current directory with the format "WhiteboardMappings-{IncrementalRunName}.json". If this parameter is specified, the cmdlet saves results to the file and does not return objects to the pipeline.

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

### -UserId

The ID of the user account to query whiteboards for. The cmdlet will retrieve all Azure whiteboards for this user and all migrated whiteboards from the user's OneDrive, then create a mapping between them.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Management.Automation.PSCustomObject

Returns mapping objects with the following properties:

- **AzureWhiteboardId** - The ID of the Azure whiteboard (null if only migrated board exists)
- **AzureWhiteboardTitle** - The title of the Azure whiteboard
- **AzureWhiteboardOwnerId** - The owner ID of the Azure whiteboard
- **AzureWhiteboardCreatedTime** - When the Azure whiteboard was created
- **AzureWhiteboardBaseApi** - The base API URL for the Azure whiteboard
- **AzurePreviousOwnerId** - Previous owner ID if the board was transferred
- **FluidFileId** - The Fluid file identifier linking Azure board to migrated board
- **MigratedBoardDriveId** - The OneDrive drive ID where the migrated board is stored
- **MigratedBoardItemId** - The item ID of the migrated board in OneDrive
- **MigratedBoardName** - The name of the migrated board file
- **MigratedBoardSize** - The size of the migrated board file in bytes
- **MigratedBoardLastModified** - When the migrated board was last modified
- **MigratedBoardCreated** - When the migrated board was created in OneDrive
- **MappingStatus** - The mapping status: "Fully Mapped", "Migrated board not found", or "Azure board not found"

When -IncrementalRunName is specified, results are written to a JSON file instead of being returned to the pipeline.

## NOTES

This cmdlet requires connection to Microsoft Graph with the following scopes: User.Read.All, Files.Read.All, Sites.Read.All, Sites.ReadWrite.All. The cmdlet will automatically connect to Microsoft Graph if not already connected.

The cmdlet performs a full outer join between Azure whiteboards and migrated OneDrive boards, ensuring all boards are accounted for regardless of whether they have a corresponding match.

For large datasets, use the -IncrementalRunName parameter to save progress incrementally and allow resumption if the operation is interrupted.

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS

[Get-Whiteboard](Get-Whiteboard.md)

[Get-WhiteboardsMigrated](Get-WhiteboardsMigrated.md)

[Get-WhiteboardsForTenant](Get-WhiteboardsForTenant.md)
