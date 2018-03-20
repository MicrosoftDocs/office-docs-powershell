---
title: "Find the permissions required to run any Exchange cmdlet"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 12/20/2016
ms.audience: ITPro
ms.topic: article
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 5bcc46d3-8a07-4e9f-b1b0-e4cb0b0afc12
description: "Admins can learn how to use PowerShell to find the permissions required to run any Exchange or Exchange Online cmdlet."
---

# Find the permissions required to run any Exchange cmdlet
You can use PowerShell to find the permissions required to run any Exchange or Exchange Online cmdlet. This procedure shows the role-based access control (RBAC) management roles and role groups that give you access to a specified cmdlet—even if your organization has custom roles, custom role groups, or custom role assignments.
  
## What do you need to know before you begin?

- Estimated time to complete this procedure: less than 5 minutes.
    
- You can only use PowerShell to perform this procedure.
    
- Basically, you need to be an administrator to complete this procedure. Specifically, you need access to the **Get-ManagementRole** and **Get-ManagementRoleAssignment** cmdlets. By default, access to these cmdlets is granted by the View-Only Configuration or Role Management roles, which are assigned to the View-Only Organization Management and Organization Management role groups.
    
- The procedures in this topic don't work in the Office 365 Security &amp; Compliance Center. For more information about permissions in the Security &amp; Compliance Center, see [Permissions in Office 365 Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
    
- The procedures in this topic don't work in Exchange Online Protection (EOP). For more information about permissions in EOP, see [Feature Permissions in EOP](https://technet.microsoft.com/library/34674847-a6b7-4a7e-9eaa-b64f22bc150d.aspx).
    
> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612) or [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542). 
  
## Use PowerShell to find the permissions required to run a cmdlet

1. Open the PowerShell environment where you want to run the cmdlet.
    
   - To learn how to use Windows PowerShell to connect to Exchange Online, see [Connect to Exchange Online PowerShell](../exchange-online/connect-to-exchange-online-powershell/connect-to-exchange-online-powershell.md).
    
   - To learn how to open the Exchange Management Shell in your on-premises Exchange organization, see [Open the Exchange Management Shell](open-the-exchange-management-shell.md).
    
2. Run the following command to identify the cmdlet and, optionally, one or more parameters on the cmdlet. Be sure to replace `<Cmdlet>` and optionally, `<Parameter1>,<Parameter2>,...` with the actual cmdlet and parameter names you are interested in. If you specify multiple parameters separated by commas, only the roles that include **all** of the parameters are returned.
    
   ```
   $Perms = Get-ManagementRole -Cmdlet <Cmdlet> [-CmdletParameters <Parameter1>,<Parameter2>,... ]
   ```

3. Run the following command:
    
   ```
   $Perms | foreach {Get-ManagementRoleAssignment -Role $_.Name -Delegating $false | Format-Table -Auto Role,RoleAssigneeType,RoleAssigneeName}
   ```

## Interpreting the results

The results contain the following information:
  
- **Role**: Indicates the role that gives access to the cmdlet or the combination of cmdlet and parameters. Note that role names that begin with "My" are user roles that allow regular users to operate on objects they own (for example, their own mailbox or their distribution groups).
    
- **RoleAssigneeType** and **RoleAssigneeName**: These values are inter-related. **RoleAssigneeType** is the type of object that has the role assigned to it, and **RoleAssigneeName** is the name of the object. **RoleAssigneeType** can be a role group, role assignment policy, security group, or user. Typically, administrator roles are assigned to role groups.
    
## Troubleshooting

What if there are no results?
  
- Verify that you entered the cmdlet and parameter names correctly.
    
- You might have entered too many parameters, and all of the parameters on the cmdlet aren't defined in a single role. Try specifying only the cmdlet name in Step 2, and run Step 3 to verify that the cmdlet is available in your environment. Then, add parameters one at a time to Step 2 before running Step 3.
    
- These possible causes have the same solution.
    
  - You might have entered a cmdlet or parameters that are defined in a role that isn't assigned to anyone by default.
    
  - You might have entered a cmdlet or parameter that isn't available in your environment. For example, when you enter an Exchange Online cmdlet or parameters in an on-premises Exchange 2016 environment.
    
  Run the following command to find the role that contains the cmdlet or parameters. Be sure to replace `<Cmdlet>` and optionally, `<Parameter1>,<Parameter2>,...` with the actual cmdlet and parameter names you are interested in. Note that you can use wildcard characters (*) in the cmdlet and parameter names (for example, `*-Mailbox*`).
    
  ```
  Get-ManagementRoleEntry -Identity *\<Cmdlet>  [-Parameters <Parameter1>,<Parameter2>,... ]
  ```

    - If the command returns an error saying the object couldn't be found, the cmdlet or parameters aren't available in your environment.
    
    - If the command returns one or more entries for **Name**, **Role**, and **Parameters**, the cmdlet (or parameters on the cmdlet) is available in your environment, but the required role isn't assigned to anyone. To see all roles that aren't assigned to anyone, run the following command:
    
      ```
      $na = Get-ManagementRole ; $na | foreach {If ((Get-ManagementRoleAssignment -Role $_.Name -Delegating $false) -eq $null) {$_.Name}}
      ```

## Related procedures

- Management role scopes define where cmdlets can operate (in particular, write scopes).
    
    To include scope information in Step 2, substitute the following command:
    
  ```
  $Perms | foreach {Get-ManagementRoleAssignment -Role $_.Name -Delegating $false | Format-List Role,RoleAssigneeType,RoleAssigneeName,*Scope*}
  ```

- To see all roles assigned to a specific user, run the following command:
    
  ```
  Get-ManagementRoleAssignment -RoleAssignee <UserIdentity> -Delegating $false | Format-Table -Auto Role,RoleAssigneeName,RoleAssigneeType
  ```
  For example:

  ```
  Get-ManagementRoleAssignment -RoleAssignee julia@contoso.com -Delegating $false | Format-Table -Auto Role,RoleAssigneeName,RoleAssigneeType
  ```

- To see all users who are assigned a specific role, run the following command:
    
  ```
  Get-ManagementRoleAssignment -Role "<Role name>"  -GetEffectiveUsers -Delegating $false | Where-Object {$_.EffectiveUserName -ne "All Group Members"} | Format-Table -Auto EffectiveUserName,Role,RoleAssigneeName,AssignmentMethod
  ```
  
  For example:

  ```
  Get-ManagementRoleAssignment -Role "Mailbox Import Export"  -GetEffectiveUsers -Delegating $false | Where-Object {$_.EffectiveUserName -ne "All Group Members"} | Format-Table -Auto EffectiveUserName,Role,RoleAssigneeName,AssignmentMethod
  ```



- To see the members of a specific role group, run the following command:
    
  ```
  Get-RoleGroupMember "<Role group name>"
  ```

  For example:

  ```
  Get-RoleGroupMember "Organization Management"
  ```
