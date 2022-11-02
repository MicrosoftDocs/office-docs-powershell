---
title: Use Azure managed identities to connect to Exchange Online PowerShell
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about using the Exchange Online PowerShell V3 module and Azure managed identity to connect to Exchange Online PowerShell."
---

# Use Azure managed identities to connect to Exchange Online PowerShell

## System-assigned managed identity

### Step 1: Create a resource with system-assigned managed identity

If you're going to use an existing resource that's already configured with system-assigned managed identity, you can skip to the [next step](#step-2-store-the-system-assigned-managed-identity-in-a-variable). The following resource types are supported:

- Azure Automation accounts
- Azure virtual machines (VMs)

#### Create Azure Automation accounts with system-assigned managed identities

Create an Automation account that's configured for system-assigned managed identity by using the instructions at [Quickstart: Create an Automation account using the Azure portal](/azure/automation/quickstarts/create-azure-automation-account-portal).

- Automation accounts are available on the **Automation accounts** page at <https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Automation%2FAutomationAccounts>.

- When you create the Automation account, system-assigned managed identity is selected by default on the **[Advanced](/azure/automation/quickstarts/create-azure-automation-account-portal#advanced)** tab of the details of the Automation account.

- To enable the system-assigned managed identity on an existing Automation account, see [Enable system-assigned managed identity](/azure/automation/quickstarts/enable-managed-identity#enable-system-assigned-managed-identity).

To create the Automation account with system-assigned managed identity in [Azure PowerShell](/powershell/azure/what-is-azure-powershell), do the following steps:

1. Connect to [Azure Az PowerShell](/powershell/azure/install-az-ps) by running the following command:

   ```powershell
   Connect-AzAccount
   ```

2. If necessary, create an Azure resource group to use with the Automation account by running the following command:

   ```powershell
   New-AzResourceGroup -Name "<ResourceGroupName>" -Location "<Location>"
   ```

   - \<ResourceGroupName\> is the unique name for the new resource group.
   - \<Location\> is a valid value from the command: `Get-AzLocation | Format-Table Name`.

   For example:

   ```powershell
   New-AzResourceGroup -Name "ContosoRG" -Location "West US"
   ```

   For complete instructions, see [Create resource groups](/azure/azure-resource-manager/management/manage-resource-groups-powershell#create-resource-groups).

3. Use the following syntax to create an Automation account with system-assigned managed identity:

   ```powershell
   New-AzAutomationAccount -Name "<AutomationAccountName>" -ResourceGroupName "<ResourceGroupName>" -Location "<Location>" -AssignSystemIdentity
   ```

   - \<AutomationAccountName\> is the unique name for the new Automation account.
   - \<ResourceGroupName\> is the name of the existing resource group that you want to use. Valid values are visible in the output of the command: `Get-AzResourceGroup`.
   - \<Location\> is a valid value from the command: `Get-AzLocation | Format-Table Name`.

   For example:

   ```powershell
   New-AzAutomationAccount -Name "ContosoAzAuto1" -ResourceGroupName "ContosoRG" -Location "West US" -AssignSystemIdentity
   ```

   For detailed syntax and parameter information, see [New-AzAutomationAccount](/powershell/module/az.automation/new-azautomationaccount).

#### Configure Azure VMs with system-assigned managed identities

For instructions, see the following articles:

- [System-assigned managed identity in the Azure portal](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm#system-assigned-managed-identity)

- [System-assigned managed identity in PowerShell](s/azure/active-directory/managed-identities-azure-resources/qs-configure-powershell-windows-vm#system-assigned-managed-identity)

### Step 2: Store the system-assigned managed identity in a variable

Use the following syntax to store the Id (GUID) value of the managed identity in a variable that you'll use in the upcoming steps.

```powershell
$MI_ID = (Get-AzADServicePrincipal -DisplayName "<ResourceName>").Id
```

Where \<ResourceName\> is the name of the Azure Automation account or the Azure VM. For example:

```powershell
$MI_ID = (Get-AzADServicePrincipal -DisplayName "ContosoAzAuto1").Id
```

For detailed syntax and parameter information, see [Get-AzADServicePrincipal](/powershell/module/az.automation/get-azadserviceprincipal).

### Step 3: Add the Exchange Online PowerShell module to the managed identity

#### Add the Exchange Online PowerShell module to Azure Automation accounts with system-assigned managed identities

1. On the **Automation accounts** page at <https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Automation%2FAutomationAccounts>, select the Automation account.
2. In the details flyout that opens, start typing "Modules" in the ![Search icon.](media/search-icon.png) **Search** box, and then select **Modules** from results.
3. On the **Modules** flyout that opens, click ![Add module icon.](media/add-icon.png) **Add a module**.
4. On the **Add a module** page that opens, configure the following settings:
   - **Upload a module file**: Select **Browse from gallery**.
   - **PowerShell module file**: Select **Click here to browse from gallery**:
     1. In the **Browse Gallery** page that opens, start typing "ExchangeOnlineManagement" in the ![Search icon.](media/search-icon.png) **Search** box, press Enter, and then select **ExchangeOnlineManagement** from the results.
     2. On the details page that opens, click **Select** to return to the **Add a module** page.
   - **Runtime versions**: Select **5.1** or **7.1 (Preview)**. To add both versions, repeat the steps to add the module again.

   When you're finished, click **Import**.

   ![Screenshot of adding a module to an Automation account in the Azure portal.](media/mi-add-exo-module.png)

5. Back on the **Modules** flyout, start typing "ExchangeOnlineManagement" in the ![Search icon.](media/search-icon.png) **Search** box to see the **Status** value. When the module import is complete, the value is **Available**.

To add the module to the Automation account in Azure PowerShell, use the following syntax:

```powershell
New-AzAutomationModule -ResourceGroupName "<ResourceGroupName>" -AutomationAccountName "<AutomationAccountName>" -Name ExchangeOnlineManagement -ContentLinkUri https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.0.0
```

- \<ResourceGroupName\> is the name of the resource group that's already assigned to the Automation account.
- \<AutomationAccountName\> is the name of the Automation account.

For example:

```powershell
New-AzAutomationModule -ResourceGroupName "ContosoRG" -AutomationAccountName "ContosoAzAuto1" -Name ExchangeOnlineManagement -ContentLinkUri https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.0.0
```

For detailed syntax and parameter information, see [New-AzAutomationModule](/powershell/module/az.automation/new-azautomationmodule).

#### Add the Exchange Online PowerShell module to Azure VMs with system-assigned managed identities

Install the Exchange Online PowerShell module in the Azure VM. For instructions, see [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

### Step 4: Grant the Exchange.ManageAsApp API permission for the managed identity to call Exchange Online

The procedures in this step require the Microsoft Graph PowerShell SDK. For installation instructions, see [Install the Microsoft Graph PowerShell SDK](/powershell/microsoftgraph/installation).

1. Run the following command to connect to Microsoft Graph PowerShell with the required permissions:

   ```powershell
   Connect-MgGraph -Scopes AppRoleAssignment.ReadWrite.All,Application.Read.All
   ```

2. If a **Permissions requested** dialog opens, select **Consent on behalf of your organization**, and then click **Accept**.

3. Run the following commands to grant the Exchange.ManageAsApp API permission for the managed identity to call Exchange Online:

   ```powershell
   $AppRoleID = "dc50a0fb-09a3-484d-be87-e023b12c6440"

   $ResourceID = (Get-MgServicePrincipal -Filter "AppId eq '00000002-0000-0ff1-ce00-000000000000'").Id

   New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $MI_ID -PrincipalId $MI_ID -AppRoleId $AppRoleID -ResourceId $ResourceID
   ```

   - `$MI_ID` is the Id (GUID) value of the managed identity that you stored in a variable in [Step 2](#step-2-store-the-system-assigned-managed-identity-in-a-variable).
   - `$AppRoleID` is the Id (GUID) value of the **Exchange.ManageAsApp** API permission that's the same in every organization.
   - `$ResourceID` is the Id (GUID) value of the **Office 365 Exchange Online** resource in Azure Active Directory. The Id value is different in every organization.

For detailed syntax and parameter information, see the following articles:

- [Connect-MgGraph](/powershell/module/microsoft.graph.applications/new-mgserviceprincipalapproleassignment).
- [New-MgServicePrincipalAppRoleAssignment](/powershell/module/microsoft.graph.applications/new-mgserviceprincipalapproleassignment)

### Step 5: Assign Azure AD roles to the managed identity

The supported Azure AD roles are described in the following list:

- [Compliance Administrator](/azure/active-directory/roles/permissions-reference#compliance-administrator)
- [Exchange Administrator](/azure/active-directory/roles/permissions-reference#exchange-administrator)<sup>\*</sup>
- [Exchange Recipient Administrator](/azure/active-directory/roles/permissions-reference#exchange-recipient-administrator)
- [Global Administrator](/azure/active-directory/roles/permissions-reference#global-administrator)<sup>\*</sup>
- [Global Reader](/azure/active-directory/roles/permissions-reference#global-reader)
- [Helpdesk Administrator](/azure/active-directory/roles/permissions-reference#helpdesk-administrator)
- [Security Administrator](/azure/active-directory/roles/permissions-reference#security-administrator)<sup>\*</sup>
- [Security Reader](/azure/active-directory/roles/permissions-reference#security-reader)

> <sup>\*</sup> The Global Administrator and Exchange Administrator roles provide the required permissions for any task in Exchange Online PowerShell. For example:
>
> - Recipient management.
> - Security and protection features. For example, anti-spam, anti-malware, anti-phishing, and the associated reports.
>
> The Security Administrator role does not have the necessary permissions for those same tasks.

For general instructions about assigning roles in Azure AD, see [View and assign administrator roles in Azure Active Directory](/azure/active-directory/roles/manage-roles-portal).

1. In Azure AD portal at <https://portal.azure.com/>, start typing **roles and administrators** in the **Search** box at the top of the page, and then select **Azure AD roles and administrators** from the results in the **Services** section.

   ![Screenshot that shows Azure AD roles and administrators in the Search results on the on the home page of the Azure portal.](media/exo-app-only-auth-find-roles-and-administrators.png)

   Or, to go directly to the **Azure AD roles and administrators** page, use <https://portal.azure.com/#view/Microsoft_AAD_IAM/AllRolesBlade>.

2. On the **Roles and administrators** page, find and select one of the supported roles by _clicking on the name of the role_ (not the check box) in the results. For example, find and select the **Exchange administrator** role.

   ![Find and select a supported Exchange Online PowerShell role by clicking on the role name.](media/exo-app-only-auth-find-and-select-supported-role.png)

3. On the **Assignments** page that opens, click **Add assignments**.

   ![Select Add assignments on the role assignments page for Exchange Online PowerShell.](media/exo-app-only-auth-role-assignments-click-add-assignments.png)

4. In the **Add assignments** flyout that opens, find and select the managed identity you created or identified in [Step 1](#step-1-create-a-resource-with-system-assigned-managed-identity).

   When you're finished, click **Add**.

5. Back on the **Assignments** page, verify that the role has been assigned to the managed identity.

To assign a role to the managed identity in Microsoft Graph PowerShell, do the following steps:

1. Run the following command to connect to Microsoft Graph PowerShell with the required permissions:

   ```powershell
   Connect-MgGraph -Scopes RoleManagement.ReadWrite.Directory
   ```

2. If a **Permissions requested** dialog opens, select **Consent on behalf of your organization**, and then click **Accept**.

3. Use the following syntax to assign the required Azure AD role to the managed identity:

   ```powershell
   $RoleID = (Get-MgRoleManagementDirectoryRoleDefinition -Filter "DisplayName eq '<Role Name>'").Id
   
   New-MgRoleManagementDirectoryRoleAssignment -PrincipalId $MI_ID -RoleDefinitionId $RoleID -DirectoryScopeId "/"
   ```

   - \<Role Name\> is the name of the Azure AD role as listed earlier in this section.
   - `$MI_ID` is the Id (GUID) value of the managed identity that you stored in a variable in [Step 2](#step-2-store-the-system-assigned-managed-identity-in-a-variable).

   For example:

   ```powershell
   $RoleID = (Get-MgRoleManagementDirectoryRoleDefinition -Filter "DisplayName eq 'Exchange Administrator'").Id
   
   New-MgRoleManagementDirectoryRoleAssignment -PrincipalId $MI_ID -RoleDefinitionId $RoleID -DirectoryScopeId "/"
   ```

For detailed syntax and parameter information, see the following articles:

- [Connect-MgGraph](/powershell/module/microsoft.graph.applications/new-mgserviceprincipalapproleassignment).
- [New-MgRoleManagementDirectoryRoleAssignment](/powershell/module/microsoft.graph.applications/new-mgrolemanagementdirectoryroleassignment)

## User-assigned managed identity

### Step 1: Create a user-assigned managed identity

If you already have an existing user-assigned managed identity that you're going to use, you can skip to the [next step](#step-2-create-a-resource-with-user-assigned-managed-identity) to create a resource with the user-assigned managed identity.

Otherwise, create the user-assigned managed identity in the Azure portal by using the instructions at [Create a user-assigned managed identity](/azure/active-directory/managed-identities-azure-resources/how-manage-user-assigned-managed-identities?pivots=identity-mi-methods-azp#create-a-user-assigned-managed-identity).

To create the user-assigned managed identity in [Azure PowerShell](/powershell/azure/what-is-azure-powershell), do the following steps:

1. Connect to [Azure Az PowerShell](/powershell/azure/install-az-ps) by running the following command:

   ```powershell
   Connect-AzAccount
   ```

2. If necessary, create an Azure resource group to use with the user-assigned managed identity by running the following command:

   ```powershell
   New-AzResourceGroup -Name "<ResourceGroupName>" -Location "<Location>"
   ```

   - \<ResourceGroupName\> is the unique name for the new resource group.
   - \<Location\> is a valid value from the command: `Get-AzLocation | Format-Table Name`.

   For example:

   ```powershell
   New-AzResourceGroup -Name "ContosoRG" -Location "West US"
   ```

   For complete instructions, see [Create resource groups](/azure/azure-resource-manager/management/manage-resource-groups-powershell#create-resource-groups).

3. Use the following syntax to create a user-assigned managed identity:

   ```powershell
   New-AzUserAssignedIdentity -Name "<UserAssignedManagedIdentityName>" -ResourceGroupName "<ResourceGroupName>" -Location "<Location>"
   ```

   - \<UserAssignedManagedIdentityName\> is the unique name for the user-assigned managed identity.
   - \<ResourceGroupName\> is the name of the existing resource group that you want to use. Valid values are visible in the output of the command: `Get-AzResourceGroup`.
   - \<Location\> is a valid value from the command: `Get-AzLocation | Format-Table Name`.

   For example:

   ```powershell
   New-AzUserAssignedIdentity -Name "ContosoMI1" -ResourceGroupName "ContosoRG2" -Location "West US"
   ```

   For detailed syntax and parameter information, see [New-AzUserAssignedIdentity](/powershell/module/az.managedserviceidentity/new-azuserassignedidentity).

### Step 2: Create a resource with user-assigned managed identity

If you're going to use an existing resource that's already configured with user-assigned managed identity, you can skip to the [next step](#step-3-store-the-user-assigned-managed-identity-in-variables). The following resource types are supported:

- Azure Automation accounts
- Azure Virtual Machines (VMs)

#### Create Azure Automation accounts with user-assigned managed identities

Create an Automation account that's configured for user-assigned managed identity by using the instructions at [Quickstart: Create an Automation account using the Azure portal](/azure/automation/quickstarts/create-azure-automation-account-portal).

- Automation accounts are available on the **Automation accounts** page at <https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Automation%2FAutomationAccounts>.

- Be sure to change the managed identity selection on the **[Advanced](/azure/automation/quickstarts/create-azure-automation-account-portal#advanced)** tab to **User assigned**.

- To enable the user-assigned managed identity on an existing Automation account, see [Add user-assigned managed identity](/azure/automation/quickstarts/enable-managed-identity#add-user-assigned-managed-identity).

To create the Automation account with user-assigned managed identity in [Azure PowerShell](/powershell/azure/what-is-azure-powershell), do the following steps:

1. Connect to [Azure Az PowerShell](/powershell/azure/install-az-ps) by running the following command:

   ```powershell
   Connect-AzAccount
   ```

2. Use the following syntax to create an Automation account with user-assigned managed identity:

   ```powershell
   $UAMI = (Get-AzUserAssignedIdentity -Name "<UserAssignedMI>" -ResourceGroupName "<MIResourceGroupName>").Id

   New-AzAutomationAccount -Name "<AutomationAccountName>" -ResourceGroupName "<ResourceGroupName>" -Location "<Location>" -AssignUserIdentity $UAMI
   ```

   - \<UserAssignedMI\> is the name of the user-assigned managed identity that you want to use.
   - \<MIResourceGroupName\> is the name of the resource group that's assigned to the user-assigned managed identity.
   - \<AutomationAccountName\> is the unique name for the new Automation account.
   - \<ResourceGroupName\> is the name of the existing resource group that you want to use. Valid values are visible in the output of the command: `Get-AzResourceGroup`.
   - \<Location\> is a valid value from the command: `Get-AzLocation | Format-Table Name`.

   For example:

   ```powershell
   $UAMI = (Get-AzUserAssignedIdentity -Name "ContosoMI1" -ResourceGroupName "ContosoRG2").Id

   New-AzAutomationAccount -Name "ContosoAzAuto2" -ResourceGroupName "ContosoRG2" -Location "West US" -AssignUserIdentity $UAMI
   ```

   For detailed syntax and parameter information, see [New-AzAutomationAccount](/powershell/module/az.automation/new-azautomationaccount).

For detailed syntax and parameter information, see [New-AzAutomationAccount](/powershell/module/az.automation/new-azautomationaccount).

#### Configure Azure VMs with user-assigned managed identities

For instructions, see the following articles:

- [User-assigned managed identity in the Azure portal](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm#user-assigned-managed-identity)
- [User-assigned managed identity in PowerShell](s/azure/active-directory/managed-identities-azure-resources/qs-configure-powershell-windows-vm#user-assigned-managed-identity)

### Step 3: Store the user-assigned managed identity in variables

Use the following syntax to store the PrincipalId value of the managed identity in variable that you'll use in the upcoming steps:

```powershell
$MI = Get-AzUserAssignedIdentity -Name "<UserAssignedMI>" -ResourceGroupName (Get-AzResourceGroup -Name "<MIResourceGroupName>").ResourceGroupName

$MI_ID = $MI.PrincipalId
```

- \<MIResourceGroupName\> is the name of the resource group that's associated with the user-assigned managed identity.
- \<UserAssignedMI\> is the name of the user-assigned managed identity.

For example:

```powershell
$MI = Get-AzUserAssignedIdentity -Name "ContosoMI1" -ResourceGroupName (Get-AzResourceGroup -Name "ContosoRG2").ResourceGroupName

$MI_ID = $MI.PrincipalId
```

For detailed syntax and parameter information, see the following articles:

- [Get-AzResourceGroup](/powershell/module/az.resources/get-azresourcegroup)
- [Get-AzUserAssignedIdentity](/powershell/module/az.managedserviceidentity/get-azuserassignedidentity).

### Step 4: Add the Exchange Online PowerShell module to the managed identity

The steps for user-assigned managed identity are the same as in [System-assigned managed identity Step 3](#step-3-add-the-exchange-online-powershell-module-to-the-managed-identity).

### Step 5: Grant the Exchange.ManageAsApp API permission for the managed identity to call Exchange Online

The steps for user-assigned managed identity are the same as in [System-assigned managed identity Step 4](#step-4-grant-the-exchangemanageasapp-api-permission-for-the-managed-identity-to-call-exchange-online).

Although the managed identity values were obtained differently for user-assigned vs. system-assigned, we're using the same variable name in the command (`$MI_ID`), so the command works for both user-assigned and system assigned managed identities.

### Step 6: Assign Azure AD roles to the managed identity

The steps for user-assigned managed identity are the same as in [System-assigned managed identity Step 5](#step-5-assign-azure-ad-roles-to-the-managed-identity).

The only differences are:

- For the procedures in the Azure portal, in step 4, you select the user-assigned managed identity to assign the role to (not the you assign the role to the user-assigned managed identitycreate or identify the Automation account in [User-assigned managed identity Step 2](#step-2-create-a-resource-with-user-assigned-managed-identity).

Although the managed identity values were obtained differently for user-assigned vs. system-assigned, we're using the same variable name in the command (`$MI_ID`), so the command works for both user-assigned and system assigned managed identities.

The only differences are:

- For the procedures in the Azure portal, you create or identify the Automation account in [User-assigned managed identity Step 2](#step-2-create-a-resource-with-user-assigned-managed-identity).
- For the procedures in Azure PowerShell, the `$MI_ID` value for user-assigned managed identity comes from [User-assigned managed identity Step 3](#step-3-store-the-user-assigned-managed-identity-in-variables).
