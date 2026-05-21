---
title: Ink Canvas Admin PowerShell Overview
description: "Ink Canvas Admin PowerShell overview."
---

# Overview

## Installing

To install and use the Microsoft Ink Canvas admin cmdlets:

1. Open the start menu and search for Windows PowerShell
2. Right-click on Windows PowerShell and choose Run As Administrator
3. Type or copy this command into the window and press the Enter key:

```powershell
Install-Module -Name InkCanvasAdmin
```

By default, the PowerShell Gallery (PSGallery) isn't configured as a trusted repository for
**PowerShellGet**. The first time you use the PSGallery, you'll see the following message:

```console
Untrusted repository

You are installing the modules from an untrusted repository. If you trust this repository, change
its InstallationPolicy value by running the `Set-PSRepository` cmdlet.

Are you sure you want to install the modules from 'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):
```

Type **Y** and press Enter.

> [!NOTE]
> Node.js 20 or later is required. The InkCanvasAdmin module bundles the Ink Canvas admin CLI
> and invokes it via Node.js. Install Node.js from <https://nodejs.org> before using this module.

## Prerequisites

The InkCanvasAdmin cmdlets require:

- Node.js 20 or later
- An Azure Active Directory app registration with the following Microsoft Graph permissions:
  - `Sites.FullControl.All` (application permission)
  - `FileStorageContainer.Selected` (application permission)
- Global Administrator or SharePoint Administrator role

## Authentication

The module supports two authentication methods:

### Device code (default)

Prompts for interactive authentication via a browser. Suitable for ad-hoc administrative tasks.

```powershell
Get-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -TenantId <tenantId> -ClientId <clientId> -ContainerTypeId <containerTypeId>
```

### Client credentials

Suitable for automated scripts and pipelines. Requires a client secret.

```powershell
Get-InkCanvas -UserId 00000000-0000-0000-0000-000000000001 -TenantId <tenantId> -ClientId <clientId> -ClientSecret <clientSecret> -ContainerTypeId <containerTypeId> -Auth client-credentials
```

## Cmdlet reference

- [Get-InkCanvas](../inkcanvas-ps/InkCanvasAdmin/Get-InkCanvas.md)
- [Export-InkCanvas](../inkcanvas-ps/InkCanvasAdmin/Export-InkCanvas.md)
- [Remove-InkCanvas](../inkcanvas-ps/InkCanvasAdmin/Remove-InkCanvas.md)
- [Set-InkCanvasOwner](../inkcanvas-ps/InkCanvasAdmin/Set-InkCanvasOwner.md)
- [Invoke-TransferAllInkCanvases](../inkcanvas-ps/InkCanvasAdmin/Invoke-TransferAllInkCanvases.md)
- [Invoke-InkCanvasAdmin](../inkcanvas-ps/InkCanvasAdmin/Invoke-InkCanvasAdmin.md)
