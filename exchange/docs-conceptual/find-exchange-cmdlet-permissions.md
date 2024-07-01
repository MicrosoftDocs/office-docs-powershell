---
title: "Find the permissions required to run any Exchange cmdlet"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 06/06/2024
ms.audience: ITPro
audience: ITPro
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: 5bcc46d3-8a07-4e9f-b1b0-e4cb0b0afc12
description: "Admins can learn how to use PowerShell to find the permissions required to run any cmdlet in Exchange Server PowerShell or Exchange Online PowerShell."
---

# Find the permissions required to run any Exchange cmdlet

You can use PowerShell to find the permissions required to run any Exchange or Exchange Online cmdlet. This procedure shows the role-based access control (RBAC) management roles and role groups that give you access to a specified cmdlet—even if your organization has custom roles, custom role groups, or custom role assignments.

> [!TIP]
> Currently, the procedures in this article don't work with Microsoft 365 Group cmdlets (**\*-UnifiedGroup**) in Exchange Online PowerShell.

## What do you need to know before you begin?

- Estimated time to complete this procedure: less than 5 minutes.

- You can only use PowerShell to perform these procedures.

- The procedures in this article don't work in Security & Compliance PowerShell. For more information about Security & Compliance permissions, see the following articles:
  - [Permissions in the Microsoft Defender portal](/defender-office-365/mdo-portal-permissions)
  - [Permissions in the Microsoft Purview compliance portal](/purview/purview-compliance-portal-permissions)

- You need to be assigned permissions before you can do the procedures in this article. You have the following options:
  - [Exchange Server permissions](/exchange/permissions/permissions): Membership in one of the following role groups:
    - **Compliance Management**
    - **Hygiene Management**
    - **Organization Management**
    - **View-Only Organization Management**
  - [Exchange Online permissions](/exchange/permissions-exo/permissions-exo): Membership in one of the following role groups:
    - **Compliance Management**
    - **Delegated Setup**
    - **Hygiene Management**
    - **Organization Management**
    - **View-Only Organization Management**
  - [Microsoft Entra permissions](/entra/identity/role-based-access-control/manage-roles-portal): Membership in the **Global Administrator**<sup>\*</sup> or **Global Reader** roles gives users the required permissions _and_ permissions for other features in Microsoft 365.

    > [!IMPORTANT]
    > <sup>\*</sup> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## Use PowerShell to find the permissions required to run a cmdlet

1. If you haven't already, open the Exchange PowerShell environment that you're interested in:
   - **Exchange Online**: [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).
   - **Exchange Online Protection** (Microsoft 365 organizations without Exchange Online mailboxes): [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md).
   - **Exchange Server**: [Open the Exchange Management Shell](open-the-exchange-management-shell.md) or [Connect to Exchange servers using remote PowerShell](connect-to-exchange-servers-using-remote-powershell.md).

2. Replace `<Cmdlet>` and optionally, `<Parameter1>,<Parameter2>,...` with the values that you want to use, and run the following command:

   ```powershell
   $Perms = Get-ManagementRole -Cmdlet <Cmdlet> [-CmdletParameters <Parameter1>,<Parameter2>,...]
   ```

   > [!TIP]
   > If you specify multiple parameters, only roles that include _all_ of the specified parameters on the cmdlet are returned.

3. Run the following command:

   ```powershell
   $Perms | foreach {Get-ManagementRoleAssignment -Role $_.Name -Delegating $false | Format-Table -Auto Role,RoleAssigneeType,RoleAssigneeName}
   ```

## Interpreting the results

The results contain the following information:

- **Role**: Indicates the role that gives access to the cmdlet or the combination of cmdlet and parameters. Role names that begin with "My" are user roles that allow regular users to operate on objects they own (for example, their own mailbox or their distribution groups).

- **RoleAssigneeType** and **RoleAssigneeName**: These values are inter-related:
  - **RoleAssigneeType** is the type of object that has the role assigned to it. For administrator roles, this value is typically a role group, but it can also be a role assignment policy, a security group, or a user.
  - **RoleAssigneeName** is the name of the role group, role assignment policy, security group, or user.

## Troubleshooting

What if there are no results?

- Verify that you entered the cmdlet and parameter names correctly.
- Multiple parameters for a cmdlet might not be defined in a single role (some parameters might be in one role, while the others are in a different role). Take it one step at a time:
  - Run the first command with no parameters, and then run the second command.
  - Add one parameter to the first command, and then run the second command.
  - Repeat the previous step by adding other parameters to the first command before running the second command.

Otherwise, no results are likely caused by one of the following conditions:

- The cmdlet or parameters are defined in a role that isn't assigned to any role groups by default.
- The cmdlet or parameters aren't available in your environment. For example, you specified an Exchange Online cmdlet or Exchange Online parameters in an on-premises Exchange environment.

To find the roles in your environment (if any) that contain the cmdlet or parameters, replace `<Cmdlet>` and optionally, `<Parameter1>,<Parameter2>,...` with the values that you want to use and run the following command:

```powershell
Get-ManagementRoleEntry -Identity *\<Cmdlet> [-Parameters <Parameter1>,<Parameter2>,...]
```

> [!TIP]
> You can use wildcard characters (\*) in the cmdlet and parameter names (for example, `*-Mailbox*`).

If the command returns an error saying the object couldn't be found, the cmdlet or parameters aren't available in your environment.

If the command returns results, the cmdlet or parameters are available in your environment, but the required role isn't assigned to any role groups. To find roles that aren't assigned to any role groups, run the following command:

```powershell
$na = Get-ManagementRole; $na | foreach {If ((Get-ManagementRoleAssignment -Role $_.Name -Delegating $false) -eq $null) {$_.Name}}
```

## Related procedures

### Include management role scopes

Management role scopes (in particular, write scopes) define where cmdlets can operate. For example, the entire organization or only on specific user objects.

To include scope information in the [Use PowerShell to find the permissions required to run a cmdlet](#use-powershell-to-find-the-permissions-required-to-run-a-cmdlet) output, add `*Scope*` to the second command:

```powershell
$Perms | foreach {Get-ManagementRoleAssignment -Role $_.Name -Delegating $false | Format-List Role,RoleAssigneeType,RoleAssigneeName,*Scope*}
```

For detailed information about management role scopes, see [Understanding management role scopes](/exchange/understanding-management-role-scopes-exchange-2013-help).

### Find all roles assigned to a specific user

To see all roles that are assigned to a specific user, replace `<UserIdentity>` with the name, alias, or email address of the user and run the following command:

```powershell
Get-ManagementRoleAssignment -RoleAssignee <UserIdentity> -Delegating $false | Format-Table -Auto Role,RoleAssigneeName,RoleAssigneeType
```

For example:

```powershell
Get-ManagementRoleAssignment -RoleAssignee julia@contoso.com -Delegating $false | Format-Table -Auto Role,RoleAssigneeName,RoleAssigneeType
```

> [!TIP]
> The _RoleAssignee_ parameter returns both direct role assignments to users (uncommon) and indirect role assignments granted to the user through their membership in role groups.

### Find all users who have a specific role assigned

To see all users who have a specific role assigned to them, replace `<Role name>` with the name of the role and run the following command:

```powershell
Get-ManagementRoleAssignment -Role "<Role name>" -GetEffectiveUsers -Delegating $false | Where-Object {$_.EffectiveUserName -ne "All Group Members"} | Format-Table -Auto EffectiveUserName,Role,RoleAssigneeName,AssignmentMethod
```

For example:

```powershell
Get-ManagementRoleAssignment -Role "Mailbox Import Export" -GetEffectiveUsers -Delegating $false | Where-Object {$_.EffectiveUserName -ne "All Group Members"} | Format-Table -Auto EffectiveUserName,Role,RoleAssigneeName,AssignmentMethod
```

### Find the members of a role group

To see the members of a specific role group, replace `<Role group name>` with the name of the role group and run the following command:

```powershell
Get-RoleGroupMember "<Role group name>"
```

For example:

```powershell
Get-RoleGroupMember "Organization Management"
```

> [!TIP]
> To see the names of all available role groups, run `Get-RoleGroup`.
