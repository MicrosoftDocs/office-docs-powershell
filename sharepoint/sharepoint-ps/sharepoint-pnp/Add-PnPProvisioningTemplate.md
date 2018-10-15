---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPProvisioningTemplate

## SYNOPSIS
Adds a provisioning template object to a provisioning hierarchy

## SYNTAX 

```powershell
Add-PnPProvisioningTemplate -Template <ProvisioningTemplate>
                            -Hierarchy <ProvisioningHierarchy>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPProvisioningTemplate -Hierarchy $myhierarchy -Template $mytemplate
```

Adds an existing sequence object to an existing hierarchy object

## PARAMETERS

### -Hierarchy
The hierarchy to add the template to

```yaml
Type: ProvisioningHierarchy
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Template
The template to add to the hierarchy

```yaml
Type: ProvisioningTemplate
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)