---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---
# Get-PnPTenantSequence

## SYNOPSIS
Returns one ore more provisioning sequence object(s) from a tenant template

## SYNTAX 

```powershell
Get-PnPTenantSequence -Template <ProvisioningHierarchy>
                      [-Identity <ProvisioningSequencePipeBind>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantSequence -Template $myhierarchy
```

Returns all sequences from the specified tenant template

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantSequence -Template $myhierarchy -Identity "mysequence"
```

Returns the specified sequence from the specified tenant template

## PARAMETERS

### -Identity
Optional Id of the sequence

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningSequencePipeBind
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: True
```

### -Template
The hierarchy to retrieve the sequence from

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
