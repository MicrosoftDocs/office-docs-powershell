---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/restore-pnpdeletedunifiedgroup
applicable: SharePoint Online
schema: 2.0.0
---

# Restore-PnPDeletedUnifiedGroup

## SYNOPSIS
Restores one deleted Office 365 Group (aka Unified Group)

## SYNTAX 

```powershell
Restore-PnPDeletedUnifiedGroup -Identity <UnifiedGroupPipeBind>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Restore-PnPDeletedUnifiedGroup -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
```

Restores a deleted Office 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
$group = Get-PnPDeletedUnifiedGroup -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
Restore-PnPDeletedUnifiedGroup -Identity $group
```

Restores the provided deleted Office 365 Group

## PARAMETERS

### -Identity
The Identity of the deleted Office 365 Group

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)