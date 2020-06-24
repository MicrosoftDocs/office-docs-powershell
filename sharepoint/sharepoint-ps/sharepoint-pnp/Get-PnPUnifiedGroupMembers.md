---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpunifiedgroupmembers
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPUnifiedGroupMembers
---

# Get-PnPUnifiedGroupMembers

## SYNOPSIS
Gets members of a particular Microsoft 365 Group (aka Unified Group). Requires the Azure Active Directory application permissions 'Group.Read.All' and 'User.Read.All'.

## SYNTAX 

```powershell
Get-PnPUnifiedGroupMembers -Identity <UnifiedGroupPipeBind>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUnifiedGroupMembers -Identity $groupId
```

Retrieves all the members of a specific Microsoft 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUnifiedGroupMembers -Identity $group
```

Retrieves all the members of a specific Microsoft 365 Group based on the group's object instance

## PARAMETERS

### -Identity
The Identity of the Microsoft 365 Group.

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
