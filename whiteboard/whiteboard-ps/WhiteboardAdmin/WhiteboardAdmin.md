---
Module Name: WhiteboardAdmin
Module Guid: cc24f7d4-4cf7-46d3-bd87-30a3d44ecf96
Download Help Link:
Help Version:
Locale: en-US
---

# WhiteboardAdmin Module

## Description

The following cmdlet references are for Microsoft Whiteboard. See
[Overview](/powershell/whiteboard/overview) for details on installing the module. The module can
only be run by users with Global Administrator or SharePoint Administrator roles. The module
described here is for Whiteboard content stored in Azure.

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned
> accounts helps improve security for your organization. Global Administrator is a highly privileged
> role that should be limited to emergency scenarios when you can't use an existing role. To learn
> more, see
> [About admin roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).
>
> Prerequisite for commands `Get-OriginalFluidWhiteboards`, `Get-OriginalFluidWhiteboardsForTenant`,
> `Get-WhiteboardsMigrated`, `Get-WhiteboardsForTenantMigrated` to get whiteboards from users
> OneDrive
>
> To get a whiteboard that is in OneDrive for any user, Admin should have access to their user's
> OneDrive. Admin can use Admin portal to give the `Site-CollectionAdmin` role to user account for
> which they want to get all whiteboards.
>
> 1. Go to **SharePoint Admin center**
> 2. On left hand side, select **More features**
> 3. In **User profiles**, select **Open** > **Manage User profiles** > **Search user** >
>    **Manage site collection owners** > **Add Admin as Site Collection Administrator**.

## WhiteboardAdmin Cmdlets

### [Get-OriginalFluidWhiteboards](Get-OriginalFluidWhiteboards.md)
Gets one or more whiteboards that are originally created as Fluid whiteboards, directly into users OneDrive and return them as objects.

### [Get-OriginalFluidWhiteboardsForTenant](Get-OriginalFluidWhiteboardsForTenant.md)
Gets one or more whiteboards that are originally created as fluid directly into OneDrive for all users under that admin and returns them as objects.

### [Get-Whiteboard](Get-Whiteboard.md)
Gets one or more whiteboards in Azure from the Microsoft Whiteboard service and returns them as objects.

### [Get-WhiteboardOwners](Get-WhiteboardOwners.md)
Gets all the users in a tenant who own whiteboards in a specified geography.

### [Get-WhiteboardSettings](Get-WhiteboardSettings.md)
Get the users Whiteboard settings.

### [Get-WhiteboardsForTenant](Get-WhiteboardsForTenant.md)
Gets all the whiteboards in Azure associated with a tenant in a specified geography.

### [Get-WhiteboardsForTenantMigrated](Get-WhiteboardsForTenantMigrated.md)
Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

### [Get-WhiteboardsMigrated](Get-WhiteboardsMigrated.md)
Gets one or more whiteboards that are migrated to OneDrive and returns them as objects.

### [Invoke-TransferAllWhiteboards](Invoke-TransferAllWhiteboards.md)
Transfer ownership of all Whiteboards owned by a user to another user.

### [Remove-Whiteboard](Remove-Whiteboard.md)
Deletes the specified whiteboard for the given user from the Microsoft Whiteboard service.

### [Restore-Whiteboard](Restore-Whiteboard.md)
Restores the specified Whiteboard by removing the mapping to the board migrated to ODB. This will not delete the ODB board.

### [Set-WhiteboardOwner](Set-WhiteboardOwner.md)
Sets the owner for a Whiteboard.

### [Set-WhiteboardSettings](Set-WhiteboardSettings.md)
Get the users Whiteboard settings.

### [Get-WhiteboardMigrationMapping](Get-WhiteboardMigrationMapping.md)
Gets all Azure whiteboards for a user and maps them with their migrated Fluid boards in SharePoint OneDrive.
