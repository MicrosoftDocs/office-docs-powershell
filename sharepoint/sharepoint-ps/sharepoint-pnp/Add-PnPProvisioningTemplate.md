---
external help file:
applicable: SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---
# Add-PnPProvisioningTemplate

## SYNOPSIS
Adds a PnP Provisioning Template object to a tenant template

## SYNTAX 

```powershell
Add-PnPProvisioningTemplate -SiteTemplate <ProvisioningTemplate>
                            -TenantTemplate <ProvisioningHierarchy>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnpProvisioningTemplate -TenantTemplate $tenanttemplate -SiteTemplate $sitetemplate
```

Adds an existing site template to an existing tenant template object

## PARAMETERS

### -SiteTemplate
The template to add to the tenant template

```yaml
Type: ProvisioningTemplate
Parameter Sets: (All)
Aliases: Template

Required: True
Position: Named
Accept pipeline input: False
```

### -TenantTemplate
The tenant template to add the template to

```yaml
Type: ProvisioningHierarchy
Parameter Sets: (All)
Aliases: Hierarchy

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
