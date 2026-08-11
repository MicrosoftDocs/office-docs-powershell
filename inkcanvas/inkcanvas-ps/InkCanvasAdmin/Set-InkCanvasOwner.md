---
external help file: InkCanvasAdmin-help.xml
Module Name: InkCanvasAdmin
online version: https://learn.microsoft.com/powershell/module/inkcanvasadmin/set-inkcanvasowner
applicable: Microsoft Ink Canvas
title: Set-InkCanvasOwner
schema: 2.0.0
author: peterhu
ms.author: peterhu
ms.reviewer:
---

# Set-InkCanvasOwner

## SYNOPSIS
Transfers ownership of a specific Ink Canvas canvas from one user to another.

## SYNTAX

```
Set-InkCanvasOwner -FromUserId <String> -ToUserId <String> -CanvasId <String> [-DryRun]
 [-TenantId <String>] [-ClientId <String>] [-ClientSecret <String>] [-ContainerTypeId <String>]
 [-Auth <String>] [-Tenant <String>] [<CommonParameters>]
```

## DESCRIPTION

Transfers ownership of a single Ink Canvas canvas from a source user to a target user. The canvas
is copied to the target user's SharePoint Embedded container and then deleted from the source
user's container. The target user must have opened Ink Canvas at least once to provision their
container.

Use [Invoke-TransferAllInkCanvases](Invoke-TransferAllInkCanvases.md) to transfer all canvases
from one user to another.

## EXAMPLES

### EXAMPLE 1

Transfer a specific canvas from one user to another.

```powershell
PS C:\>Set-InkCanvasOwner -FromUserId 00000000-0000-0000-0000-000000000001 -ToUserId 00000000-0000-0000-0000-000000000002 -CanvasId canvas_1712345678_abc12
```

### EXAMPLE 2

Preview a canvas transfer without making any changes.

```powershell
PS C:\>Set-InkCanvasOwner -FromUserId 00000000-0000-0000-0000-000000000001 -ToUserId 00000000-0000-0000-0000-000000000002 -CanvasId canvas_1712345678_abc12 -DryRun
```

## PARAMETERS

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

Required. The specific canvas ID (folder name) to transfer.

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

If specified, prints what would be transferred without performing any actual changes.

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

### -FromUserId

Required. The Azure Active Directory object GUID of the source user (current canvas owner).

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

### -ToUserId

Required. The Azure Active Directory object GUID of the target user (new canvas owner).

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

The target user must have opened Ink Canvas at least once to provision their SharePoint Embedded
container before a transfer can be performed.

## RELATED LINKS
