---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpdeletedunifiedgroup
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPDeletedUnifiedGroup

## SYNOPSIS
Gets one deleted Office 365 Group (aka Unified Group) or a list of deleted Office 365 Groups

## SYNTAX 

```powershell
Get-PnPDeletedUnifiedGroup [-Identity <UnifiedGroupPipeBind>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPDeletedUnifiedGroup
```

Retrieves all deleted Office 365 Groups

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPDeletedUnifiedGroup -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
```

Retrieves a specific deleted Office 365 Group based on its ID

## PARAMETERS

### -Identity
The Identity of the Office 365 Group.

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)