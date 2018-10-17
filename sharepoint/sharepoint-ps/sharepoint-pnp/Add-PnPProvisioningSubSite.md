---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPProvisioningSubSite

## SYNOPSIS
Adds a provisioning sequence object to a provisioning site object

## SYNTAX 

```powershell
Add-PnPProvisioningSubSite -SubSite <TeamNoGroupSubSite>
                           -Site <SiteCollection>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPProvisioningSubSite -Site $mysite -SubSite $mysubsite
```

Adds an existing subsite object to an existing hierarchy sequence site object

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)