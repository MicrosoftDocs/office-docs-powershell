---
Module Name: Microsoft Whiteboard Admin
Module Guid: CC24F7D4-4CF7-46D3-BD87-30A3D44ECF96
title: Microsoft Whiteboard
---

# Microsoft Whiteboard Admin

## Description

The following cmdlet references are for Microsoft Whiteboard. See [Overview](https://learn.microsoft.com/powershell/whiteboard/overview) for details on installing the module. The module can only be run by users with Global Administrator or SharePoint Administrator roles. The module described here is for Whiteboard content stored in Azure.

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role. To learn more, see [About admin roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).

## Prerequisite for commands Get-OriginalFluidWhiteboards, Get-OriginalFluidWhiteboardsForTenant, Get-WhiteboardsMigrated, Get-WhiteboardsForTenantMigrated to get whiteboards from users OneDrive

Inorder to get whiteboards which is in OneDrive for any users, Admin should have access to all those users OneDrive.
Admin can use Admin portal to give "Site-CollectionAdmin" role to users account for which they want to get all whiteboards in OneDrive.
Go to sharepoint Admin center > On left hand side, click "More features" > In User profiles, click "Open".
Manage User profiles > Search user > Manage site collection owners > Add Admin as Site Collection Administrator.

## Microsoft Whiteboard Admin cmdlets

### [Get-Whiteboard](Get-Whiteboard.md)

Gets one or more whiteboards in Azure from the Microsoft Whiteboard service and returns them as objects.

### [Get-WhiteboardOwners](Get-WhiteboardOwners.md)

Gets all the users in a tenant who own whiteboards in a specified geography.

### [Get-WhiteboardsForTenant](Get-WhiteboardsForTenant.md)

Gets all the whiteboards in Azure associated with a tenant in a specified geography.

### [Get-OriginalFluidWhiteboards](Get-OriginalFluidWhiteboards.md)

Gets one or more whiteboards that are originally created as Fluid whiteboards directly into users OneDrive and return them as objects.

### [Get-OriginalFluidWhiteboardsForTenant](Get-OriginalFluidWhiteboardsForTenant.md)

Gets one or more whiteboards that are originally created as fluid whiteboards directly into OneDrive for all users under that admin and returns them as objects.

### [Get-WhiteboardsMigrated](Get-WhiteboardsMigrated.md)

Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

### [Get-WhiteboardsForTenantMigrated](Get-WhiteboardsForTenantMigrated.md)

Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

### [Invoke-TransferAllWhiteboard](Invoke-TransferAllWhiteboards.md)

Transfer ownership of all whiteboards owned by a user to another user.

### [Remove-Whiteboard](Remove-Whiteboard.md)

Deletes the specified whiteboard for the given user from the Microsoft Whiteboard service. If the user is the owner of the whiteboard, the entire whiteboard will be deleted. If the user has joined the whiteboard but does not own it, they will be removed and the whiteboard will still be accessible by others.

### [Set-WhiteboardOwner](Set-WhiteboardOwner.md)

Sets the owner for a whiteboard.

### [Restore-Whiteboard](Restore-Whiteboard.md)

Restores the specified Whiteboard by removing the mapping to the board migrated to ODB. This will not delete the ODB board.

### [Get-WhiteboardSettings](Get-WhiteboardSettings.md)

Gets tenant settings from the Microsoft Whiteboard service and returns them as an object.

### [Set-WhiteboardSettings](Set-WhiteboardSettings.md)

Sets the tenant settings for the Microsoft Whiteboard services.
