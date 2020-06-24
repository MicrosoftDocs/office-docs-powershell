---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpunifiedgroup
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPUnifiedGroup
---

# Get-PnPUnifiedGroup

## SYNOPSIS
Gets one Microsoft 365 Group (aka Unified Group) or a list of Microsoft 365 Groups. Requires the Azure Active Directory application permission 'Group.Read.All'.

## SYNTAX 

```powershell
Get-PnPUnifiedGroup [-Identity <UnifiedGroupPipeBind>]
                    [-ExcludeSiteUrl [<SwitchParameter>]]
                    [-IncludeClassification [<SwitchParameter>]]
                    [-IncludeHasTeam [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUnifiedGroup
```

Retrieves all the Microsoft 365 Groups

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupId
```

Retrieves a specific Microsoft 365 Group based on its ID

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupDisplayName
```

Retrieves a specific or list of Microsoft 365 Groups that start with the given DisplayName

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPUnifiedGroup -Identity $groupSiteMailNickName
```

Retrieves a specific or list of Microsoft 365 Groups for which the email starts with the provided mail nickName

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPUnifiedGroup -Identity $group
```

Retrieves a specific Microsoft 365 Group based on its object instance

### ------------------EXAMPLE 6------------------
```powershell
Get-PnPUnifiedGroup -IncludeIfHasTeam
```

Retrieves all the Microsoft 365 Groups and checks for each of them if it has a Microsoft Team provisioned for it

## PARAMETERS

### -ExcludeSiteUrl
Exclude fetching the site URL for Microsoft 365 Groups. This speeds up large listings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The Identity of the Microsoft 365 Group.

```yaml
Type: UnifiedGroupPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeClassification
Include Classification value of Office 365 Groups.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeHasTeam
Include a flag for every Office 365 Group if it has a Microsoft Team provisioned for it. This will slow down the retrieval of Office 365 Groups so only use it if you need it.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
