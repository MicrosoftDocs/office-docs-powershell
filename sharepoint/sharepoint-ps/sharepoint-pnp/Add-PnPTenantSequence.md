---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnptenantsequence
applicable: SharePoint Online
schema: 2.0.0
---

# Add-PnPTenantSequence

## SYNOPSIS
Adds a tenant sequence object to a tenant template

## SYNTAX 

```powershell
Add-PnPTenantSequence -Template <ProvisioningHierarchy>
                      -Sequence <ProvisioningSequence>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTenantSequence -Template $mytemplate -Sequence $mysequence
```

Adds an existing sequence object to an existing template object

### ------------------EXAMPLE 2------------------
```powershell
New-PnPTenantSequence -Id "MySequence" | Add-PnPTenantSequence -Template $template
```

Creates a new instance of a provisioning sequence object and sets the Id to the value specified, then the sequence is added to an existing template object

## PARAMETERS

### -Sequence
Optional Id of the sequence

```yaml
Type: ProvisioningSequence
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: True
```

### -Template
The template to add the sequence to

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)