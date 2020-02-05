---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnptenantsequencesubsite
applicable: SharePoint Online
schema: 2.0.0
---

# Add-PnPTenantSequenceSubSite

## SYNOPSIS
Adds a tenant sequence sub site object to a tenant sequence site object

## SYNTAX 

```powershell
Add-PnPTenantSequenceSubSite -SubSite <TeamNoGroupSubSite>
                             -Site <SiteCollection>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTenantSequenceSubSite -Site $mysite -SubSite $mysubsite
```

Adds an existing subsite object to an existing sequence site object

## PARAMETERS

### -Site
The site to add the subsite to

```yaml
Type: SiteCollection
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -SubSite
The subsite to add

```yaml
Type: TeamNoGroupSubSite
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)