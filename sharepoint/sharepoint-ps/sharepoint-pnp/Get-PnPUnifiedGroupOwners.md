---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpunifiedgroupowners
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPUnifiedGroupOwners

## SYNOPSIS
Gets owners of a particular Office 365 Group (aka Unified Group). Requires the Azure Active Directory application permissions 'Group.Read.All' and 'User.Read.All'.

## SYNTAX 

```powershell
Get-PnPUnifiedGroupOwners -Identity <UnifiedGroupPipeBind>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUnifiedGroupOwners -Identity $groupId
```

Retrieves all the owners of a specific Office 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUnifiedGroupOwners -Identity $group
```

Retrieves all the owners of a specific Office 365 Group based on the group's object instance

## PARAMETERS

### -Identity
The Identity of the Office 365 Group.

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)