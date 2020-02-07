---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpprovisioningtemplate
applicable: SharePoint Online
schema: 2.0.0
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

Required: True
Position: Named
Accept pipeline input: False
```

### -TenantTemplate
The tenant template to add the template to

```yaml
Type: ProvisioningHierarchy
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)