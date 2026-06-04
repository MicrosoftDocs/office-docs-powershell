---
external help file: InkCanvasAdmin-help.xml
Module Name: InkCanvasAdmin
online version: https://learn.microsoft.com/powershell/module/inkcanvasadmin/export-inkcanvas
applicable: Microsoft Ink Canvas
title: Export-InkCanvas
schema: 2.0.0
author: peterhu
ms.author: peterhu
ms.reviewer:
---

# Export-InkCanvas

## SYNOPSIS
Exports Ink Canvas canvases as standalone HTML files for data portability or access requests.

## SYNTAX

### User (Default)
```
Export-InkCanvas -UserId <String> -OutputPath <String> [-CanvasId <String>] [-CheckpointPath <String>]
 [-Concurrency <Int32>] [-TenantId <String>] [-ClientId <String>] [-ClientSecret <String>]
 [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>] [<CommonParameters>]
```

### All
```
Export-InkCanvas -All -OutputPath <String> [-CanvasId <String>] [-CheckpointPath <String>]
 [-Concurrency <Int32>] [-TenantId <String>] [-ClientId <String>] [-ClientSecret <String>]
 [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>] [<CommonParameters>]
```

## DESCRIPTION

Exports Ink Canvas canvases as standalone HTML files. Supports exporting a single canvas, all
canvases for a specific user, or all canvases across the entire tenant. Supports checkpoint files
for resumable bulk exports in case of interruption.

Output structure:
- Single canvas or user export: `<OutputPath>/<canvasName>.html`
- Tenant-wide export: `<OutputPath>/<userId>/<canvasName>.html`

## EXAMPLES

### EXAMPLE 1

Export a specific canvas for a user.

```powershell
PS C:\>Export-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -CanvasId canvas_1712345678_abc12 -OutputPath C:\Export
```

### EXAMPLE 2

Export all canvases for a user.

```powershell
PS C:\>Export-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -OutputPath C:\Export
```

### EXAMPLE 3

Export all canvases for the entire tenant with a checkpoint file to support resuming.

```powershell
PS C:\>Export-InkCanvas -All -OutputPath C:\Export -CheckpointPath C:\Export\checkpoint.json
```

## PARAMETERS

### -All

If specified, exports canvases for all users in the tenant.

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

### -CanvasId

Optional. The specific canvas ID (folder name) to export. If not specified, all canvases for
the user are exported.

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

### -CheckpointPath

Optional. Path to a checkpoint file that tracks already-exported canvases. Allows interrupted
bulk exports to resume without re-exporting completed canvases.

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

### -Concurrency

Optional. Number of parallel export operations. Defaults to 5.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 5
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

Required. The directory path where exported HTML files will be written.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
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

The Azure Active Directory object GUID of the user whose canvases to export.

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

## NOTES

If any canvases fail to export, a summary report is written to `<OutputPath>/export-failures.json`.

## RELATED LINKS
