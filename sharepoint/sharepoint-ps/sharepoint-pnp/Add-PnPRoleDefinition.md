---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnproledefinition
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Add-PnPRoleDefinition
---

# Add-PnPRoleDefinition

## SYNOPSIS
Adds a Role Defintion (Permission Level) to the site collection in the current context

## SYNTAX 

```powershell
Add-PnPRoleDefinition -RoleName <String>
                      [-Clone <RoleDefinitionPipeBind>]
                      [-Include <PermissionKind[]>]
                      [-Exclude <PermissionKind[]>]
                      [-Description <String>]
                      [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
This command allows adding a custom Role Defintion (Permission Level) to the site collection in the current context. It does not replace or remove existing Role Definitions.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPRoleDefinition -RoleName "CustomPerm"
```

Creates additional permission level with no permission flags enabled.

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPRoleDefinition -RoleName "NoDelete" -Clone "Contribute" -Exclude DeleteListItems
```

Creates additional permission level by cloning "Contribute" and removes flags DeleteListItems

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPRoleDefinition -RoleName "AddOnly" -Clone "Contribute" -Exclude DeleteListItems, EditListItems
```

Creates additional permission level by cloning "Contribute" and removes flags DeleteListItems and EditListItems

### ------------------EXAMPLE 4------------------
```powershell
$roleDefinition = Get-PnPRoleDefinition -Identity "Contribute"
Add-PnPRoleDefinition -RoleName "AddOnly" -Clone $roleDefinition -Exclude DeleteListItems, EditListItems
```

Creates additional permission level by cloning "Contribute" and removes flags DeleteListItems and EditListItems

## PARAMETERS

### -Clone
An existing permission level or the name of an permission level to clone as base template.

```yaml
Type: RoleDefinitionPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
Optional description for the new permission level.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Exclude
Specifies permission flags(s) to disable. Please visit https://docs.microsoft.com/previous-versions/office/sharepoint-csom/ee536458(v%3Doffice.15) for the PermissionKind enum

```yaml
Type: PermissionKind[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Include
Specifies permission flags(s) to enable. Please visit https://docs.microsoft.com/previous-versions/office/sharepoint-csom/ee536458(v%3Doffice.15) for the PermissionKind enum

```yaml
Type: PermissionKind[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -RoleName
Name of new permission level.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)