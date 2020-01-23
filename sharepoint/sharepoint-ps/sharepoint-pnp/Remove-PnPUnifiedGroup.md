---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpunifiedgroup
applicable: SharePoint Online
schema: 2.0.0
---

# Remove-PnPUnifiedGroup

## SYNOPSIS
Removes one Office 365 Group (aka Unified Group)

## SYNTAX

```powershell
Remove-PnPUnifiedGroup -Identity <UnifiedGroupPipeBind>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPUnifiedGroup -Identity $groupId
```

Removes an Office 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPUnifiedGroup -Identity $group
```

Removes the provided Office 365 Group

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPUnifiedGroup | ? Visibility -eq "Public" | Remove-PnPUnifiedGroup
```

Removes all the public Office 365 Groups

## PARAMETERS

### -Identity
The Identity of the Office 365 Group

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
