---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/save-pnptenanttemplate
applicable: SharePoint Online
schema: 2.0.0
---

# Save-PnPTenantTemplate

## SYNOPSIS
Saves a PnP provisioning hierarchy to the file system

## SYNTAX 

```powershell
Save-PnPTenantTemplate -Template <ProvisioningHierarchy>
                       -Out <String>
                       [-Force [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Save-PnPTenantTemplate -Template $template -Out .\tenanttemplate.pnp
```

Saves a PnP tenant template to the file system

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Out
Filename to write to, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Template
Allows you to provide an in-memory instance of a Tenant Template. When using this parameter, the -Out parameter refers to the path for saving the template and storing any supporting file for the template.

```yaml
Type: ProvisioningHierarchy
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)