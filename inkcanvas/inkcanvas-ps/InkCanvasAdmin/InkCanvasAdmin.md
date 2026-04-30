---
Module Name: InkCanvasAdmin
Module Guid: 00000000-0000-0000-0000-000000000000
Download Help Link:
Help Version:
Locale: en-US
---

# InkCanvasAdmin Module

## Description

The following cmdlet references are for Microsoft Ink Canvas. See
[Overview](/powershell/inkcanvas/overview) for details on installing the module. The module can
only be run by users with Global Administrator or SharePoint Administrator roles.

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned
> accounts helps improve security for your organization. Global Administrator is a highly privileged
> role that should be limited to emergency scenarios when you can't use an existing role. To learn
> more, see
> [About admin roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).

## InkCanvasAdmin Cmdlets

### [Export-InkCanvas](Export-InkCanvas.md)
Exports Ink Canvas canvases as standalone HTML files for data portability or access requests.

### [Get-InkCanvas](Get-InkCanvas.md)
Lists Ink Canvas canvases stored in SharePoint Embedded containers for a user or the entire tenant.

### [Invoke-InkCanvasAdmin](Invoke-InkCanvasAdmin.md)
Passes raw arguments directly to the Ink Canvas admin CLI.

### [Invoke-TransferAllInkCanvases](Invoke-TransferAllInkCanvases.md)
Transfers all Ink Canvas canvases from one user to another.

### [Remove-InkCanvas](Remove-InkCanvas.md)
Deletes one or all Ink Canvas canvases for a user to satisfy data erasure requests.

### [Set-InkCanvasOwner](Set-InkCanvasOwner.md)
Transfers ownership of a specific Ink Canvas canvas from one user to another.
