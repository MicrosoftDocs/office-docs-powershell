---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantsequence
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
