---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPProvisioningSequence

## SYNOPSIS
Returns one ore more provisioning sequence object(s) from a provisioning hierarchy

## SYNTAX 

```powershell
Get-PnPProvisioningSequence -Hierarchy <ProvisioningHierarchy>
                            [-Identity <ProvisioningSequencePipeBind>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPProvisioningSequence -Hierarchy $myhierarchy
```

Returns all sequences from the specified hierarchy

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPProvisioningSequence -Hierarchy $myhierarchy -Identity "mysequence"
```

Returns the specified sequence from the specified hierarchy

## PARAMETERS

### -Hierarchy
The hierarchy to retrieve the sequence from

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)