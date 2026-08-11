---
external help file: InkCanvasAdmin-help.xml
Module Name: InkCanvasAdmin
online version: https://learn.microsoft.com/powershell/module/inkcanvasadmin/get-inkcanvas
applicable: Microsoft Ink Canvas
title: Get-InkCanvas
schema: 2.0.0
author: peterhu
ms.author: peterhu
ms.reviewer:
---

# Get-InkCanvas

## SYNOPSIS
Lists Ink Canvas canvases stored in SharePoint Embedded containers for a user or the entire tenant.

## SYNTAX

### User (Default)
```
Get-InkCanvas -UserId <String> [-OutputPath <String>] [-TenantId <String>] [-ClientId <String>]
 [-ClientSecret <String>] [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>]
 [<CommonParameters>]
```

### All
```
Get-InkCanvas -All [-OutputPath <String>] [-TenantId <String>] [-ClientId <String>]
 [-ClientSecret <String>] [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Lists Ink Canvas canvases stored in SharePoint Embedded (SPE) containers. Can query canvases for
a specific user or enumerate all canvases across the entire tenant. Returns canvas records
including the canvas ID, owner, container ID, size, and timestamps.

## EXAMPLES

### EXAMPLE 1

List all canvases for a specific user.

```powershell
PS C:\>Get-InkCanvas -UserId 00000000-0000-0000-0000-000000000001
```

```Output
canvasId              : canvas_1712345678_abc12
folderId              : 01ZSJH4Y3TXKT7TKCRRZG3LF
ownerUserId           : 00000000-0000-0000-0000-000000000001
containerId           : b!abc123...
driveId               : b!def456...
folderName            : canvas_1712345678_abc12
createdDateTime       : 2024-04-05T10:00:00Z
lastModifiedDateTime  : 2024-04-06T12:30:00Z
sizeBytes             : 15222
```

### EXAMPLE 2

Enumerate all canvases for the entire tenant and write results to a JSON file.

```powershell
PS C:\>Get-InkCanvas -All -OutputPath C:\Reports\canvases.json
```

## PARAMETERS

### -All

If specified, enumerates canvases for all users in the tenant.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: All
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Auth

Authentication method to use. Accepted values are: device-code, client-credentials.
Defaults to device-code.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: device-code
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientId

The client ID of the admin app registration in Azure Active Directory.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientSecret

The client secret for client-credentials authentication.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContainerTypeId

The SharePoint Embedded container type ID for Ink Canvas.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPath

Optional. Path to write the results as a JSON file. If not specified, results are returned as
PowerShell objects.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

A known tenant preset name that automatically fills in TenantId, ClientId, and ContainerTypeId.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId

The Azure Active Directory tenant ID.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserId

The Azure Active Directory object GUID of the user to query.

```yaml
Type: System.String
Parameter Sets: User
Aliases:

Required: True
Position: Named
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

### System.Object[]

Returns an array of canvas record objects when no OutputPath is specified.

## NOTES

## RELATED LINKS
