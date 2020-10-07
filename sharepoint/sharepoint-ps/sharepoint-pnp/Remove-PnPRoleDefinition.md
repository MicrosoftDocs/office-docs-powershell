---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnproledefinition
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Remove-PnPRoleDefinition
---

# Remove-PnPRoleDefinition

## SYNOPSIS
Remove a Role Definition from a site

## SYNTAX 

```powershell
Remove-PnPRoleDefinition -Identity <RoleDefinitionPipeBind>
                         [-Force [<SwitchParameter>]]
                         [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPRoleDefinition -Identity MyRoleDefinition
```

Removes the specified Role Definition (Permission Level) from the current site

## PARAMETERS

### -Force
Do not ask for confirmation to delete the role definition

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The identity of the role definition, either a RoleDefinition object or a the name of roledefinition

```yaml
Type: RoleDefinitionPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)