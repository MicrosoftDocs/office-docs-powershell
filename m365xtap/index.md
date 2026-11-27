---
title: Microsoft 365 cross-tenant access PowerShell
description: Learn how to use the Microsoft.M365Xtap PowerShell module to configure Microsoft 365 collaboration, App Service Connect, and Microsoft 365 capabilities.
ms.date: 11/27/2026
ms.topic: reference
---

# Microsoft 365 cross-tenant access PowerShell

## Overview

Microsoft 365 Cross-Tenant Access Policy can be configured using [Microsoft Graph APIs](https://learn.microsoft.com/en-us/graph/api/resources/crosstenantaccesspolicy-overview?view=graph-rest-1.0) and the corresponding [Microsoft Graph PowerShell cmdlets](https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.beta.identity.signins/?view=graph-powershell-beta), including those in the Microsoft.Graph.Beta.Identity.SignIns Module. Available operations depend on the feature and API version, and some tasks require constructing nested request bodies or supplying Graph-specific parameters.

To simplify this experience, the **Microsoft.M365Xtap** version 1.0.0 PowerShell module is available in the PowerShell Gallery. It simplifies supported configuration operations for **Microsoft 365 Collaboration, App Service Connect, and Microsoft 365 capabilities**, using Microsoft Graph as the underlying management interface.

These custom cmdlets provide an additional, administrator-friendly interface to the underlying policy resources. They do not define a separate policy model or replace the existing Microsoft Graph interfaces.

### Scope definition

The **Microsoft.M365Xtap** module provides cmdlets for partner-specific settings and tenant-wide default settings. Choose the scope based on whether you want to configure settings for one external organization or change your organization's baseline configuration.

#### Policy scope

| **Policy Scope** | **Applies to** | **Cmdlet prefix** |
| --- | --- | --- |
| Partner | Configure settings for a specific external tenant. | \*-PartnerEntraXTAP and \*-PartnerM365XTAPCapability |
| Default | Configure tenant-wide baseline settings used where applicable partner-specific settings do not override them. | \*-DefaultEntraXTAP and \*-DefaultM365XTAPCapability |

> [!IMPORTANT]
> Changes to default settings apply to all external organizations unless overridden by partner-specific settings. Test with partner-specific settings for one external organization before changing defaults. Check whether each capability supports partner-specific settings, default settings, or both.

#### Module functionality

The module provides cmdlets for the following configuration areas. Each area controls a different aspect of cross-tenant access.

| **Configuration Area** | **What can you configure** |
| --- | --- |
| Microsoft 365 Collaboration | Inbound collaboration for users from an external tenant, and outbound collaboration for users and groups in your tenant. |
| App Service Connect | Inbound access for specified applications from an external tenant. |
| Microsoft 365 capabilities | Inbound access for individual capabilities, such as calendar availability or MailTips, with resource scoping through included or excluded users and groups. |

> [!IMPORTANT]
> For capability settings, use user and group IDs from your tenant, not the partner tenant. For example, to share calendar availability, include the users whose calendars you want to make available. These parameters do not select the partner users who can view those calendars.

### Prerequisites

Before using the custom cmdlets, ensure that you have a supported version of PowerShell, the required modules, and the permissions and administrator role for the operations you want to perform.

| Requirement | Details |
| --- | --- |
| PowerShell | Windows PowerShell 5.1, or PowerShell 7 or later |
| Module | **Microsoft.M365Xtap** version 1.0.0. |
| Dependency | **Microsoft.Graph.Authentication**. Install it separately if it isn't already available. |
| Permissions and roles | The required Microsoft Graph permissions and administrator role depend on the operation. See the [Microsoft Graph permissions overview](https://learn.microsoft.com/en-us/graph/permissions-overview) and the permissions section of the relevant Microsoft Graph API reference. |

#### Installation guide

Install the Microsoft.M365Xtap module for the current user:

```powershell
Install-Module -Name Microsoft.M365Xtap -Scope CurrentUser
```

To update the module to a newer version:

```powershell
Update-Module -Name Microsoft.M365Xtap
```

#### Verify your installation

After installing the module, verify your PowerShell version and confirm that the required modules are available.

1. Check your PowerShell version:

   ```powershell
   $PSVersionTable | Select-Object PSVersion, PSEdition
   ```

   Expected result: The output shows your PowerShell version and edition. Confirm that your version is supported by the module.

2. Check the installed modules:

   ```powershell
   Get-Module -ListAvailable Microsoft.M365Xtap, Microsoft.Graph.Authentication |
       Select-Object Name, Version, Path
   ```

   Expected result: Both Microsoft.M365Xtap and Microsoft.Graph.Authentication appear in the results. Confirm that at least one available version of Microsoft.Graph.Authentication is 2.0.0 or later. Multiple versions might be listed.

3. Verify that the module loads:

   ```powershell
   Import-Module Microsoft.M365Xtap -ErrorAction Stop
   Get-Command -Module Microsoft.M365Xtap
   ```

   Expected result: The import completes without an error, and the second command lists the available custom cmdlets, such as Get-PartnerEntraXTAP and Get-DefaultEntraXTAP.

   If the import reports that Microsoft.Graph.Authentication is missing, install it and repeat step 3:

   ```powershell
   Install-Module Microsoft.Graph.Authentication -MinimumVersion 2.0.0 -Scope CurrentUser
   ```

These checks don't sign you in or change tenant settings.

#### Sign in to Microsoft Graph

Before running the custom cmdlets, connect to Microsoft Graph with the permissions needed for your task. For example, to start a **read-only** session:

```powershell
Connect-MgGraph -Scopes 'Policy.Read.All'
```

Follow the sign-in prompts. Depending on your organization's settings, an administrator might need to grant consent.

To check the active session:

```powershell
Get-MgContext | Select-Object AuthType, Scopes
```

**Expected result:** The output shows the authentication type and permissions for the session. For this example, check that Policy.Read.All appears in the scopes.

To create, update, remove, or reset settings, connect with the permissions required for the specific operation. For more information about sign-in methods, see [Use Microsoft Graph PowerShell authentication commands](https://learn.microsoft.com/en-us/powershell/microsoftgraph/authentication-commands).

### Microsoft Graph API version

Use the optional -ApiVersion parameter to choose which Microsoft Graph API version a cmdlet uses.
For example, to select the beta API when reading a partner configuration:

```powershell
Get-PartnerEntraXTAP -PartnerTenantId '<partner-tenant-id>' -ApiVersion beta
```

Replace \<partner-tenant-id\> with the partner's tenant ID. This command requires a Microsoft Graph connection and the appropriate permissions.

> [!NOTE]
> Microsoft Graph beta APIs are subject to change and aren't supported for use in production applications. For more information, see [Use the Microsoft Graph beta endpoint](https://learn.microsoft.com/en-us/graph/versioning-and-support).

The following capabilities are available only in beta and require `-ApiVersion beta`:

- `crossTenantUserDataMigration`
- `crossTenantGroupDataMigration`
- `crossTenantLabelSync`

If you use one of these capabilities without -ApiVersion beta, the cmdlet stops before calling Microsoft Graph and tells you to add -ApiVersion beta.

## New-PartnerEntraXTAP

### Synopsis

Creates a cross-tenant access policy configuration for a partner organization.

### Description

Use New-PartnerEntraXTAP to create a partner-specific configuration for Microsoft 365 Collaboration or App Service Connect.
Use separate commands for the Microsoft 365 Collaboration and App Service Connect parameter sets. If a partner configuration already exists, use Set-PartnerEntraXTAP to update it.

### Syntax

**Microsoft 365 Collaboration**

```text
New-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    [-M365CollaborationInbound <String>]
    [-M365CollaborationInboundTargetUsers <String[]>]
    [-M365CollaborationOutbound <String>]
    [-M365CollaborationOutboundTargetUsers <String[]>]
    [-M365CollaborationOutboundTargetGroups <String[]>]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

**App Service Connect**

```text
New-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    -AppServiceConnectInbound <String>
    -AppServiceConnectInboundTargetApplications <String[]>
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Allow all users inbound and outbound M365 collaboration

```powershell
New-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationInbound "Allowed" `
    -M365CollaborationInboundTargetUsers "AllUsers" `
    -M365CollaborationOutbound "Allowed" `
    -M365CollaborationOutboundTargetUsers "AllUsers"
```

Creates a partner entry that allows all inbound collaboration from the partner tenant and all outbound collaboration to it.

#### Example 2: Block specific outbound groups from M365 collaboration

```powershell
New-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationOutbound "Blocked" `
    -M365CollaborationOutboundTargetGroups "<group-object-id>"
```

Creates a partner entry that blocks a specific group from outbound M365 collaboration with the partner tenant.

#### Example 3: Allow inbound collaboration for specific users only

```powershell
New-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationInbound "Allowed" `
    -M365CollaborationInboundTargetUsers "<partner-user-object-id-1>",
                                         "<partner-user-object-id-2>"
```

Creates a partner entry allowing only two specific users inbound M365 collaboration from the partner tenant.

#### Example 4: Allow an application inbound via App Service Connect

```powershell
New-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -AppServiceConnectInbound "Allowed" `
    -AppServiceConnectInboundTargetApplications "<application-object-id>"
```

Creates a partner entry allowing inbound App Service Connect access for the specified application.

### Parameters

#### PartnerTenantId

The tenant ID (GUID) of the external partner organisation for which the Cross-Tenant Access Policy partner entry is created.

| **Type** | **Guid** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | All |

#### M365CollaborationInbound

The access type for M365 collaboration inbound. Controls whether external users from the partner tenant are allowed or blocked. Requires -M365CollaborationInboundTargetUsers.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | False |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithM365Collaboration |

#### M365CollaborationInboundTargetUsers

User object IDs or the special value "AllUsers" for M365 collaboration inbound. Required when -M365CollaborationInbound is specified.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithM365Collaboration |

#### M365CollaborationOutbound

The access type for M365 collaboration outbound. Controls whether your users/groups can collaborate outbound to the partner tenant. Requires at least one of -M365CollaborationOutboundTargetUsers or -M365CollaborationOutboundTargetGroups.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | False |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithM365Collaboration |

#### M365CollaborationOutboundTargetUsers

User object IDs or "AllUsers" for M365 collaboration outbound.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithM365Collaboration |

#### M365CollaborationOutboundTargetGroups

Group object IDs for M365 collaboration outbound.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithM365Collaboration |

#### AppServiceConnectInbound

The access type for App Service Connect inbound. Required when using CreateWithAppServiceConnect. Requires -AppServiceConnectInboundTargetApplications.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | True |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithAppServiceConnect |

#### AppServiceConnectInboundTargetApplications

Application object IDs or "AllApplications" for App Service Connect inbound.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | CreateWithAppServiceConnect |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

The output is projected as a flat PSCustomObject with properties:

| **Property** | **Description** |
| --- | --- |
| PartnerTenantId | The partner tenant GUID |
| M365CollaborationInbound | Allowed or Blocked |
| M365CollaborationInboundTargetUsers | User IDs configured |
| M365CollaborationOutbound | Allowed or Blocked |
| M365CollaborationOutboundTargetUsers | User IDs configured |
| M365CollaborationOutboundTargetGroups | Group IDs configured |
| AppServiceConnectInbound | Allowed or Blocked |
| AppServiceConnectInboundTargetApplications | Application IDs configured |

### Notes

- A partner entry can only be created once per partner tenant. Use Set-PartnerEntraXTAP for subsequent changes.
- M365CollaborationInbound doesn't support group targets. M365CollaborationOutbound supports group-based outbound scoping.

### Related links

- Graph API: [Create a partner-specific configuration using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicy-post-partners?view=graph-rest-beta)

## Get-PartnerEntraXTAP

### Synopsis

Gets partner Cross-Tenant Access Policy configurations scoped to M365 Collaboration and App Service Connect settings.

### Description

Retrieves Cross-Tenant Access Policy partner configurations. When -PartnerTenantId is omitted, partner configurations are listed. When -PartnerTenantId is supplied, the specific partner entry is returned.
The output is projected into a flat format matching the supported M365 Collaboration and App Service Connect settings.

### Syntax

**List partner configurations**

```text
Get-PartnerEntraXTAP
    [-Filter <String>]
    [-Sort <String[]>]
    [-Top <Int32>]
    [-Skip <Int32>]
    [-All]
    [-CountVariable <String>]
    [-PageSize <Int32>]
    [-ApiVersion <String>]
    [<CommonParameters>]
```

**Get a specific partner configuration**

```text
Get-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    [-ApiVersion <String>]
    [<CommonParameters>]
```

### Examples

#### Example 1: List all partner XTAP configurations

```powershell
Get-PartnerEntraXTAP
```

Returns partner XTAP configurations in the tenant, projected to the flat output format.

#### Example 2: Get a specific partner XTAP configuration

```powershell
Get-PartnerEntraXTAP -PartnerTenantId "<partner-tenant-id>"
```

Returns the M365 Collaboration and App Service Connect settings for the specified partner tenant.

#### Example 3: List all partner configurations with filtering

```powershell
Get-PartnerEntraXTAP -All
```

Returns all pages of partner configurations.

### Parameters

#### PartnerTenantId

The tenant ID (GUID) of the partner to retrieve. When omitted, all partners are listed.

| **Type** | **Guid** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True (Get set), False (List set) |
| Accept pipeline input | False |
| Accept wildcard characters | False |
| Parameter sets | Get |

#### Filter

OData $filter expression to filter results.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | False |
| Parameter sets | List |

#### -Sort / -Top / -Skip / -All / -CountVariable / -PageSize

Standard OData and pagination parameters

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject with properties:
- PartnerTenantId
- M365CollaborationInbound
- M365CollaborationInboundTargetUsers
- M365CollaborationOutbound
- M365CollaborationOutboundTargetUsers
- M365CollaborationOutboundTargetGroups
- AppServiceConnectInbound
- AppServiceConnectInboundTargetApplications.

### Notes

- Output is suitable for piping back into Set-PartnerEntraXTAP.

### Related links

- Graph API: [List partner-specific configurations using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicy-list-partners?view=graph-rest-beta)

## Set-PartnerEntraXTAP

### Synopsis

Updates an existing Cross-Tenant Access Policy partner configuration for M365 Collaboration (inbound/outbound) or App Service Connect (inbound) settings.

### Description

Updates an existing partner entry in the Cross-Tenant Access Policy.
The Microsoft 365 Collaboration and App Service Connect parameters are described under New-PartnerEntraXTAP. Each update call is scoped: only the properties you specify are sent to the API; other settings are left unchanged.

### Syntax

**UpdateWithM365Collaboration (Default)**

```text
Set-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    [-M365CollaborationInbound <String>]
    [-M365CollaborationInboundTargetUsers <String[]>]
    [-M365CollaborationOutbound <String>]
    [-M365CollaborationOutboundTargetUsers <String[]>]
    [-M365CollaborationOutboundTargetGroups <String[]>]
```

    \[-PassThru\]

```text
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

**UpdateWithAppServiceConnect**

```text
Set-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    -AppServiceConnectInbound <String>
    -AppServiceConnectInboundTargetApplications <String[]>
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Update inbound to allow all users

```powershell
Set-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationInbound "Allowed" `
    -M365CollaborationInboundTargetUsers "AllUsers"
```

Updates only the inbound setting for the partner. Outbound and AppServiceConnect settings are not affected.

#### Example 2: Block a specific group from outbound collaboration

```powershell
Set-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationOutbound "Blocked" `
    -M365CollaborationOutboundTargetGroups "<group-object-id>"
```

#### Example 3: Configure both inbound users and outbound users in one call

```powershell
Set-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -M365CollaborationInbound "Allowed" `
    -M365CollaborationInboundTargetUsers "AllUsers" `
    -M365CollaborationOutbound "Allowed" `
    -M365CollaborationOutboundTargetUsers "AllUsers"
```

#### Example 4: Block a specific application inbound via App Service Connect

```powershell
Set-PartnerEntraXTAP `
    -PartnerTenantId "<partner-tenant-id>" `
    -AppServiceConnectInbound "Blocked" `
    -AppServiceConnectInboundTargetApplications "<application-object-id>"
```

### Parameters

The Microsoft 365 Collaboration and App Service Connect parameters are described under New-PartnerEntraXTAP. Set-PartnerEntraXTAP also supports the -PassThru parameter.

#### PassThru

Optional switch parameter available in both parameter sets.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject - same flat format as Get-PartnerEntraXTAP.

### Notes

- To update App Service Connect settings, -AppServiceConnectInbound is required.

### Related links

- Graph API: [Update a partner-specific configuration using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationpartner-update?view=graph-rest-beta)

## Remove-PartnerEntraXTAP

### Synopsis

Removes a Cross-Tenant Access Policy partner configuration.

### Description

Deletes the entire partner entry for the specified tenant from the Cross-Tenant Access Policy.
Warning: This operation is irreversible. Removing a partner entry can affect multiple settings for that partner, including M365 Collaboration, App Service Connect, B2B, and M365 capabilities. Review the partner configuration and the applicable default settings before removing it.

### Syntax

**Delete (Default)**

```text
Remove-PartnerEntraXTAP
    -PartnerTenantId <Guid>
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Remove a partner XTAP configuration

```powershell
Remove-PartnerEntraXTAP -PartnerTenantId "<partner-tenant-id>"
```

Prompts for confirmation then deletes the partner entry.

#### Example 2: Remove without confirmation prompt

```powershell
Remove-PartnerEntraXTAP -PartnerTenantId "<partner-tenant-id>" -Confirm:$false
```

#### Example 3: Remove and confirm success via PassThru

```powershell
$deleted = Remove-PartnerEntraXTAP -PartnerTenantId "<partner-tenant-id>" -PassThru
if ($deleted) {
    Write-Host "Partner entry removed successfully."
}
```

### Parameters

#### PartnerTenantId

The tenant ID (GUID) of the partner whose configuration is to be removed.

| **Type** | **Guid** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |
| Accept pipeline input | False |
| Accept wildcard characters | False |

#### PassThru

Returns $true on successful deletion.

| **Type** | **SwitchParameter** |
| --- | --- |
| Position | Named |
| Default value | False |
| Required | False |
| Accept pipeline input | False |
| Accept wildcard characters | False |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

System.Boolean when -PassThru is specified.

### Notes

- ConfirmImpact is set to High - PowerShell prompts for confirmation by default. Use -Confirm:$false to suppress.

### Related links

- Graph API: [DELETE /policies/crossTenantAccessPolicy/partners/{tenantId}](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationpartner-delete?view=graph-rest-beta)

## Get-DefaultEntraXTAP

### Synopsis

Gets the tenant-wide default Cross-Tenant Access Policy configuration, scoped to M365 Collaboration and App Service Connect settings.

### Description

Retrieves the tenant-wide default Cross-Tenant Access Policy (XTAP) configuration. The default configuration defines the baseline settings used where applicable partner-specific settings don't override them.
This cmdlet only fetches and projects the three properties configurable through Set-DefaultEntraXTAP:
- M365CollaborationInbound
- M365CollaborationOutbound
- AppServiceConnectInbound
The Id field is also included for reference.

### Syntax

**Get (Default)**

```text
Get-DefaultEntraXTAP
    [-ApiVersion <String>]
    [<CommonParameters>]
```

### Examples

#### Example 1: Get the default XTAP configuration

```powershell
Get-DefaultEntraXTAP
```

Returns the flat output object showing the default M365 Collaboration and App Service Connect settings.
Sample output:

```output
Id                                                                                  : 00000000-0000-0000-0000-000000000000
M365CollaborationInbound                                   : Allowed
M365CollaborationInboundTargetUsers              : {AllUsers}
M365CollaborationOutbound                                : Blocked
M365CollaborationOutboundTargetUsers           :
M365CollaborationOutboundTargetGroups        : {<group-object-id>}
AppServiceConnectInbound                                   : Allowed
AppServiceConnectInboundTargetApplications  : {AllApplications}
```

The values in the output depend on your tenant's configuration.

### Parameters

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

- PSCustomObject with properties:
- Id
- M365CollaborationInbound
- M365CollaborationInboundTargetUsers
- M365CollaborationOutbound
- M365CollaborationOutboundTargetUsers
- M365CollaborationOutboundTargetGroups
- AppServiceConnectInbound
- AppServiceConnectInboundTargetApplications.

### Notes

- The $select OData query is fixed internally to id, m365CollaborationInbound, m365CollaborationOutbound, appServiceConnectInbound.

### Related links

- Graph API: [GET /policies/crossTenantAccessPolicy/default](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-get?view=graph-rest-beta)

## Set-DefaultEntraXTAP

### Synopsis

Updates the tenant-wide default Cross-Tenant Access Policy configuration for M365 Collaboration or App Service Connect settings.

### Description

Updates the tenant-wide default Cross-Tenant Access Policy configuration. Default settings provide a baseline where applicable partner-specific settings don't override them.
This cmdlet doesn't have a -PartnerTenantId parameter because it targets the tenant-wide default configuration.
> [!IMPORTANT]
> Changes to default settings can affect multiple external organizations. Review the intended scope before running these commands

### Syntax

**UpdateWithM365Collaboration (Default)**

```text
Set-DefaultEntraXTAP
    [-M365CollaborationInbound <String>]
    [-M365CollaborationInboundTargetUsers <String[]>]
    [-M365CollaborationOutbound <String>]
    [-M365CollaborationOutboundTargetUsers <String[]>]
    [-M365CollaborationOutboundTargetGroups <String[]>]
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

**UpdateWithAppServiceConnect**

```text
Set-DefaultEntraXTAP
    -AppServiceConnectInbound <String>
    -AppServiceConnectInboundTargetApplications <String[]>
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Allow all users inbound by default

```powershell
Set-DefaultEntraXTAP `
    -M365CollaborationInbound            "Allowed" `
    -M365CollaborationInboundTargetUsers "AllUsers"
```

#### Example 2: Block all outbound collaboration by default

```powershell
Set-DefaultEntraXTAP `
    -M365CollaborationOutbound              "Blocked" `
    -M365CollaborationOutboundTargetUsers   "AllUsers"
```

#### Example 3: Configure both inbound and outbound in one call

```powershell
Set-DefaultEntraXTAP `
    -M365CollaborationInbound               "Allowed" `
    -M365CollaborationInboundTargetUsers    "AllUsers" `
    -M365CollaborationOutbound              "Allowed" `
    -M365CollaborationOutboundTargetUsers   "AllUsers"
```

#### Example 4: Allow an application inbound via App Service Connect by default

```powershell
Set-DefaultEntraXTAP `
    -AppServiceConnectInbound                  "Allowed" `
    -AppServiceConnectInboundTargetApplications "<application-object-id>"
```

### Parameters

#### M365CollaborationInbound

The access type for M365 collaboration inbound at the default/tenant level.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | False |
| Parameter sets | UpdateWithM365Collaboration |

#### M365CollaborationInboundTargetUsers

User object IDs or "AllUsers". Required when -M365CollaborationInbound is specified.

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Parameter sets | UpdateWithM365Collaboration |

#### M365CollaborationOutbound

The access type for M365 collaboration outbound at the default/tenant level.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | False |
| Parameter sets | UpdateWithM365Collaboration |

#### M365CollaborationOutboundTargetUsers

User object IDs or "AllUsers" for outbound. Conditional - required with -M365CollaborationOutbound if no groups specified.

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Parameter sets | UpdateWithM365Collaboration |

#### M365CollaborationOutboundTargetGroups

Group object IDs for outbound. Conditional - required with -M365CollaborationOutbound if no users specified.

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | Conditional |
| Parameter sets | UpdateWithM365Collaboration |

#### AppServiceConnectInbound

The access type for App Service Connect inbound. Required in the UpdateWithAppServiceConnect parameter set.

| **Type** | **String** |
| --- | --- |
| Accepted values | Allowed, Blocked |
| Position | Named |
| Default value | None |
| Required | True |
| Parameter sets | UpdateWithAppServiceConnect |

#### AppServiceConnectInboundTargetApplications

Application object IDs or "AllApplications". Required when -AppServiceConnectInbound is specified.

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |
| Parameter sets | UpdateWithAppServiceConnect |

#### PassThru

Optional switch parameter available in both parameter sets.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject - same flat format as Get-DefaultEntraXTAP.

### Notes

- -AppServiceConnectInbound must be explicitly provided to enter the UpdateWithAppServiceConnect parameter set.

### Related links

- Graph API: [Update the default configuration using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-update?view=graph-rest-beta)

## Reset-DefaultEntraXTAP

### Synopsis

Reset any changes made to the default configuration in a cross-tenant access policy back to the system default.

### Description

Resets the tenant-wide default XTAP configuration. This cmdlet doesn't require -PartnerTenantId because it targets the tenant-wide default configuration.
> [!WARNING]
> Resetting default settings can affect multiple external organizations and settings beyond Microsoft 365 Collaboration. Review the impact and obtain approval before running this command.

To confirm that the default configuration has been restored to the system defaults, run **Get-DefaultEntraXTAP**and confirm that **isSystemDefault** is set to true

### Syntax

**Delete (Default)**

```text
Reset-DefaultEntraXTAP
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Reset the default XTAP configuration

```powershell
Reset-DefaultEntraXTAP
```

#### Example 2: Reset without confirmation

```powershell
Reset-DefaultEntraXTAP -Confirm:$false
```

### Parameters

#### PassThru

Returns $true on successful reset.

| **Type** | **SwitchParameter** |
| --- | --- |
| Position | Named |
| Default value | False |
| Required | False |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

System.Boolean when -PassThru is specified.

### Notes

- ConfirmImpact is High. Use -Confirm:$false to suppress the prompt.

### Related links

- Graph API: [Reset the default configuration using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-resettosystemdefault?view=graph-rest-1.0)

## New-PartnerM365XTAPCapability

### Synopsis

Creates a new Microsoft 365 capability entry on a Cross-Tenant Access Policy partner configuration.

### Description

Creates a new Microsoft 365 capability entry under a partner XTAP configuration. Microsoft 365 capabilities provide per-feature inbound access control for features such as calendar sharing, MailTips, and profile cards.
CapabilityId identifies the capability. IsAllowed controls whether inbound access is allowed or blocked. The IncludedUsers, IncludedGroups, ExcludedUsers, and ExcludedGroups parameters define the resource scope.

### Syntax

**Default**

```text
New-PartnerM365XTAPCapability
    -PartnerTenantId <Guid>
    -CapabilityId <String>
    -IsAllowed <Boolean>
    [-IncludedUsers <String[]>]
    [-ExcludedUsers <String[]>]
    [-IncludedGroups <String[]>]
    [-ExcludedGroups <String[]>]
   [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

Supported CapabilityID values:

| **CapabilityId** |
| --- |
| `crossTenantCalendarAvailabilityBasic` |
| `crossTenantCalendarAvailabilityLimitedDetails` |
| `crossTenantCalendarSharingFreeBusyDetail` |
| `crossTenantCalendarSharingFreeBusyReviewer` |
| `crossTenantCalendarSharingFreeBusySimple` |
| `crossTenantMailTipsAll` |
| `crossTenantMailTipsLimited` |
| `crossTenantMigration` |
| `crossTenantOpenProfileCard` |
| `crossTenantPlacesDeskBooking` |
| `crossTenantPlacesRoomBooking` |
| `anonymouscrossTenantCalendarSharingFreeBusyDetail` |
| `anonymousCalendarSharingFreeBusyReviewer` |
| `anonymousCalendarSharingFreeBusySimple` |

### Examples

#### Example 1: Allow basic calendar availability for all users

```powershell
New-PartnerM365XTAPCapability `
    -PartnerTenantId  "<partner-tenant-id>" `
    -CapabilityId    "crossTenantCalendarAvailabilityBasic" `
    -IsAllowed       $true `
    -IncludedUsers   "All"
```

#### Example 2: Allow free/busy detail sharing for specific users, exclude a group

```powershell
New-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantCalendarSharingFreeBusyDetail" `
    -IsAllowed $true `
    -IncludedUsers "<user-object-id-1>","<user-object-id-2>" `
    -ExcludedGroups "<group-object-id>"
```

#### Example 3: Block all inbound MailTips

```powershell
New-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantMailTipsAll" `
    -IsAllowed $false `
    -IncludedUsers "All"
```

#### Example 4: Allow open profile card for a specific group

```powershell
New-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantOpenProfileCard" `
    -IsAllowed $true `
    -IncludedGroups "<group-object-id>"
```

### Parameters

#### PartnerTenantId

The partner tenant ID (GUID).

| **Type** | **Guid** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |

#### CapabilityId

The OData type discriminator and key. See the supported values table in the Description section.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |

#### IsAllowed

Whether inbound access is allowed ($true) or blocked ($false).

| **Type** | **Boolean** |
| --- | --- |
| Position | Named |
| Default value | None |
| Required | True |

#### IncludedUsers / -ExcludedUsers

User object IDs (Guid) or "All" to include or exclude from the inbound resource scope. Maps to inboundAccess.resourceScopes.included/excluded with resourceType = "user".

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Required | False |
| Allowed Values | "All" or Guid |

#### IncludedGroups / -ExcludedGroups

Group object IDs (Guid) or "All" to include or exclude. Maps to inboundAccess.resourceScopes.included/excluded with resourceType = "group".

| **Type** | **String\[\]** |
| --- | --- |
| Position | Named |
| Required | False |
| Allowed Values | "All" or Guid |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject with:
- PartnerTenantId
- CapabilityId
- LastModifiedDateTime
- IsAllowed
- IncludedUsers
- IncludedGroups
- ExcludedUsers
- ExcludedGroups

### Notes

- The Graph API m365CapabilityBase model supports inbound access only; there is no outbound capability control.
- CapabilityId is the resource key. Calling this cmdlet twice with the same CapabilityId creates a conflict. Use Set-PartnerM365XTAPCapability to modify an existing entry.

### Related links

- Graph API: [Create a Microsoft 365 capability for a partner using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationpartner-post-m365capabilities?view=graph-rest-beta)

## Get-PartnerM365XTAPCapability

### Synopsis

Gets Microsoft 365 capability entries from a Cross-Tenant Access Policy partner configuration.

### Description

Retrieves M365 capability entries from a partner XTAP configuration.

### Syntax

**List (Default)**

```text
Get-PartnerM365XTAPCapability
    -PartnerTenantId <Guid>
    [-Filter <String>]
    [-Sort <String[]>]
    [-Top <Int32>]
    [-Skip <Int32>]
    [-All]
    [-CountVariable <String>]
    [-PageSize <Int32>]
    [<CommonParameters>]
```

**Get**

```text
Get-PartnerM365XTAPCapability
    -PartnerTenantId <Guid>
    -CapabilityId <String>
     [-ApiVersion <String>]
    [<CommonParameters>]
```

### Examples

#### Example 1: List all M365 capabilities for a partner

```powershell
Get-PartnerM365XTAPCapability -PartnerTenantId "<partner-tenant-id>"
```

#### Example 2: Get a specific capability

```powershell
Get-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId    "crossTenantCalendarAvailabilityBasic"
```

### Parameters

#### PartnerTenantId

The partner tenant ID (GUID). Required in both parameter sets.

| **Type** | **Guid** |
| --- | --- |
| Position | Named |
| Required | True |

#### CapabilityId

The capability key to retrieve. When omitted, all capabilities are returned.

| **Type** | **String** |
| --- | --- |
| Position | Named |
| Required | True (Get set), False (List set) |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject with:
- PartnerTenantId
- CapabilityId
- LastModifiedDateTime
- IsAllowed
- IncludedUsers
- IncludedGroups
- ExcludedUsers
- ExcludedGroups

### Related links

 [List Microsoft 365 capabilities for a partner using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationpartner-list-m365capabilities?view=graph-rest-beta)

## Set-PartnerM365XTAPCapability

### Synopsis

Updates an existing M365 capability entry on a Cross-Tenant Access Policy partner configuration.

### Description

Updates an existing M365 capability entry on a partner XTAP configuration.  The parameter contract is identical to New-PartnerM365XTAPCapability.

### Syntax

**Default**

```text
Set-PartnerM365XTAPCapability
    -PartnerTenantId <Guid>
    -CapabilityId <String>
    -IsAllowed <Boolean>
    [-IncludedUsers <String[]>]
    [-ExcludedUsers <String[]>]
    [-IncludedGroups <String[]>]
    [-ExcludedGroups <String[]>]
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Update calendar availability to allow all users

```powershell
Set-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantCalendarAvailabilityBasic" `
    -IsAllowed $true `
    -IncludedUsers "All"
```

#### Example 2: Update MailTips with an included group and excluded user

```powershell
Set-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantMailTipsAll" `
    -IsAllowed $true `
    -IncludedGroups "<group-object-id>" `
    -ExcludedUsers "<user-object-id>"
```

### Parameters

The PartnerTenantId, CapabilityId, IsAllowed, and resource-scope parameters are described under New-PartnerM365XTAPCapability. This command also supports -PassThru and -APIVersion.

#### PassThru

Returns the updated capability object.

| **Type** | **SwitchParameter** |
| --- | --- |
| Position | Named |
| Default value | False |
| Required | False |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |
| Parameter sets | All |

### Inputs

None.

### Outputs

PSCustomObject - same flat format as Get-PartnerM365XTAPCapability.

## Remove-PartnerM365XTAPCapability

### Synopsis

Removes an M365 capability entry from a Cross-Tenant Access Policy partner configuration.

### Description

Deletes a specific M365 capability entry from a partner XTAP configuration.

### Syntax

**Delete (Default)**

```text
Remove-PartnerM365XTAPCapability
    -PartnerTenantId <Guid>
    -CapabilityId <String>
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
     [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Remove a specific M365 capability

```powershell
Remove-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantCalendarAvailabilityBasic"
```

#### Example 2: Remove with PassThru

```powershell
Remove-PartnerM365XTAPCapability `
    -PartnerTenantId "<partner-tenant-id>" `
    -CapabilityId "crossTenantMailTipsAll" `
    -PassThru
```

### Parameters

#### -PartnerTenantId

The partner tenant ID (GUID).

| **Type** | **Guid** |
| --- | --- |
| Required | True |

#### CapabilityId

The OData type name / key of the capability to remove.

| **Type** | **String** |
| --- | --- |
| Required | True |

#### PassThru

Returns $true on successful deletion.

| **Type** | **SwitchParameter** |
| --- | --- |
| Required | False |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |

### Inputs

None.

### Outputs

System.Boolean when -PassThru is specified.

### Related links

- [Delete a Microsoft 365 capability for a partner using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationpartner-delete-m365capabilities?view=graph-rest-beta)

## New-DefaultM365XTAPCapability

### Synopsis

Creates a new Microsoft 365 capability entry on the tenant-wide default Cross-Tenant Access Policy configuration.

### Description

Creates a new M365 capability entry on the tenant-wide default XTAP configuration. No -PartnerTenantId is needed.
See New-PartnerM365XTAPCapability for capability IDs and detailed parameter descriptions. **Confirm that the capability supports default configuration** before using it with this cmdlet.
> [!IMPORTANT]
> Changes to default settings can affect multiple external organizations. Review the intended scope before running these commands.

### Syntax

**Default**

```text
New-DefaultM365XTAPCapability
    -CapabilityId <String>
    -IsAllowed <Boolean>
    [-IncludedUsers <String[]>]
    [-ExcludedUsers <String[]>]
    [-IncludedGroups <String[]>]
    [-ExcludedGroups <String[]>]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Allow basic calendar availability for all users by default

```powershell
New-DefaultM365XTAPCapability `
    -CapabilityId  "crossTenantCalendarAvailabilityBasic" `
    -IsAllowed     $true `
    -IncludedUsers "All"
```

#### Example 2: Allow free/busy detail sharing for specific users, exclude a group

```powershell
New-DefaultM365XTAPCapability `
    -CapabilityId "crossTenantCalendarSharingFreeBusyDetail" `
    -IsAllowed $true `
    -IncludedUsers "<user-object-id>" `
    -ExcludedGroups "<group-object-id>"
```

#### Example 3: Block all inbound MailTips by default

```powershell
New-DefaultM365XTAPCapability `
    -CapabilityId "crossTenantMailTipsAll" `
    -IsAllowed $false `
    -IncludedUsers "All"
```

### Parameters

The parameters are described under New-PartnerM365XTAPCapability, except that -PartnerTenantId isn't present in this command.

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |

### Inputs

None.

### Outputs

PSCustomObject with:
- CapabilityId
- LastModifiedDateTime
- IsAllowed
- IncludedUsers
- IncludedGroups
- ExcludedUsers
- ExcludedGroups

### Related links

- [Create a Microsoft 365 capability for the default policy using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-post-m365capabilities?view=graph-rest-beta)

## Get-DefaultM365XTAPCapability

### Synopsis

Gets one or all M365 capability entries from the tenant-wide default Cross-Tenant Access Policy configuration.

### Description

Retrieves M365 capability entries from the default XTAP configuration.

### Syntax

**List (Default)**

```text
Get-DefaultM365XTAPCapability
    [-Filter <String>]
    [-Sort <String[]>]
    [-Top <Int32>]
    [-Skip <Int32>]
    [-All]
    [-CountVariable <String>]
    [-PageSize <Int32>]
    [-ApiVersion <String>]
    [<CommonParameters>]
```

**Get**

```text
Get-DefaultM365XTAPCapability
    -CapabilityId <String>
    [-ApiVersion <String>]
    [<CommonParameters>]
```

### Examples

#### Example 1: List all default M365 capabilities

```powershell
Get-DefaultM365XTAPCapability
```

#### Example 2: Get a specific default capability

```powershell
Get-DefaultM365XTAPCapability -CapabilityId "crossTenantCalendarAvailabilityBasic"
```

### Parameters

#### CapabilityId

The capability key to retrieve. When omitted, all capabilities are returned.

| **Type** | **String** |
| --- | --- |
| Required | True (Get set), False (List set) |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |

### Inputs

None.

### Outputs

PSCustomObject with:
- CapabilityId
- LastModifiedDateTime
- IsAllowed
- IncludedUsers
- IncludedGroups
- ExcludedUsers
- ExcludedGroups

### Related links

- [List Microsoft 365 capabilities for the default policy using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-list-m365capabilities?view=graph-rest-beta)

## Set-DefaultM365XTAPCapability

### Synopsis

Updates an existing M365 capability entry on the tenant-wide default Cross-Tenant Access Policy configuration.

### Description

Updates an existing M365 capability entry on the default XTAP configuration. No -PartnerTenantId is needed.
> [!IMPORTANT]
> Changes to default settings can affect multiple external organizations. Review the intended scope before running these commands.

### Syntax

**Default**

```text
Set-DefaultM365XTAPCapability
    -CapabilityId <String>
    -IsAllowed <Boolean>
    [-IncludedUsers <String[]>]
    [-ExcludedUsers <String[]>]
    [-IncludedGroups <String[]>]
    [-ExcludedGroups <String[]>]
    [-PassThru]
    [-ApiVersion <String>]
    [-WhatIf]
    [-Confirm]
    [<CommonParameters>]
```

### Examples

#### Example 1: Update default calendar availability to allow all users

```powershell
Set-DefaultM365XTAPCapability `
    -CapabilityId  "crossTenantCalendarAvailabilityBasic" `
    -IsAllowed     $true `
    -IncludedUsers "All"
```

#### Example 2: Update default MailTips with an included group and excluded user

```powershell
Set-DefaultM365XTAPCapability `
    -CapabilityId "crossTenantMailTipsAll" `
    -IsAllowed $true `
    -IncludedGroups "<group-object-id>" `
    -ExcludedUsers "<user-object-id>"
```

### Parameters

Capability list can differ for default and partner. For example, anonymous capabilities are default-only. T2T/Mailbox capabilities are partner-only. This command also supports -PassThru and -APIVersion.

#### PassThru

Returns the updated capability object. By default, this cmdlet generates no output.

| **Type** | **SwitchParameter** |
| --- | --- |
| Required | False |

#### APIVersion

Selects the Microsoft Graph API version used by the command.

| **Type** | **String** |
| --- | --- |
| Required | False |

### Inputs

None.

### Outputs

PSCustomObject - same flat format as Get-DefaultM365XTAPCapability.

### Related links

- [Update a Microsoft 365 capability for the default policy using Microsoft Graph](https://learn.microsoft.com/en-us/graph/api/crosstenantaccesspolicyconfigurationdefault-update-m365capabilities?view=graph-rest-beta)
