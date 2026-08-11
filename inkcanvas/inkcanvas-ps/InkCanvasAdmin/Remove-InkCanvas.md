---
external help file: InkCanvasAdmin-help.xml
Module Name: InkCanvasAdmin
online version: https://learn.microsoft.com/powershell/module/inkcanvasadmin/remove-inkcanvas
applicable: Microsoft Ink Canvas
title: Remove-InkCanvas
schema: 2.0.0
author: peterhu
ms.author: peterhu
ms.reviewer:
---

# Remove-InkCanvas

## SYNOPSIS
Deletes one or all Ink Canvas canvases for a user to satisfy data erasure requests.

## SYNTAX

### Canvas (Default)
```
Remove-InkCanvas -UserId <String> -CanvasId <String> [-DryRun] [-TenantId <String>] [-ClientId <String>]
 [-ClientSecret <String>] [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>]
 [<CommonParameters>]
```

### All
```
Remove-InkCanvas -UserId <String> -All [-DryRun] [-TenantId <String>] [-ClientId <String>]
 [-ClientSecret <String>] [-ContainerTypeId <String>] [-Auth <String>] [-Tenant <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Permanently deletes one or all Ink Canvas canvases belonging to a user. This cmdlet is intended
for GDPR/CCPA data subject erasure requests. Use the -DryRun flag to preview what would be deleted
without making any changes.

> [!WARNING]
> Deletion is permanent and cannot be undone. Use -DryRun to verify the scope of deletion before
> proceeding.

## EXAMPLES

### EXAMPLE 1

Delete a specific canvas for a user.

```powershell
PS C:\>Remove-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -CanvasId canvas_1712345678_abc12
```

### EXAMPLE 2

Preview all canvases that would be deleted for a user without making changes.

```powershell
PS C:\>Remove-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -All -DryRun
```

### EXAMPLE 3

Delete all canvases for a user.

```powershell
PS C:\>Remove-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -All
```

## PARAMETERS

### -All

If specified, deletes all canvases for the specified user.

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

The specific canvas ID (folder name) to delete.

```yaml
Type: System.String
Parameter Sets: Canvas
Aliases:

Required: True
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

### -DryRun

If specified, prints what would be deleted without performing any actual deletions.

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

Required. The Azure Active Directory object GUID of the user whose canvases to delete.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
