---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPUnifiedGroup

## SYNOPSIS
Gets one Office 365 Group (aka Unified Group) or a list of Office 365 Groups

## SYNTAX 

```powershell
Get-PnPUnifiedGroup [-Identity <UnifiedGroupPipeBind>]
                    [-ExcludeSiteUrl [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUnifiedGroup
```

Retrieves all the Office 365 Groups

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupId
```

Retrieves a specific Office 365 Group based on its ID

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupDisplayName
```

Retrieves a specific or list of Office 365 Groups that start with the given DisplayName

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupSiteMailNickName
```

Retrieves a specific or list of Office 365 Groups for which the email starts with the provided mail nickName

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPUnifiedGroup -Identity $group
```

Retrieves a specific Office 365 Group based on its object instance

## PARAMETERS

### -ExcludeSiteUrl
Exclude fetching the site URL for Office 365 Groups. This speeds up large listings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)