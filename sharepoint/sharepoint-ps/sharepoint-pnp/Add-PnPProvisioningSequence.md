---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPProvisioningSequence

## SYNOPSIS
Adds a provisioning sequence object to a provisioning hierarchy

## SYNTAX 

```powershell
Add-PnPProvisioningSequence -Hierarchy <ProvisioningHierarchy>
                            -Sequence <ProvisioningSequence>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPProvisioningSequence -Hierarchy $myhierarchy -Sequence $mysequence
```

Adds an existing sequence object to an existing hierarchy object

### ------------------EXAMPLE 2------------------
```powershell
New-PnPProvisioningSequence -Id "MySequence" | Add-PnPProvisioningSequence -Hierarchy $hierarchy
```

Creates a new instance of a provisioning sequence object and sets the Id to the value specified, then the sequence is added to an existing hierarchy object

## PARAMETERS

### -Hierarchy
The hierarchy to add the sequence to

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

### -Sequence
Optional Id of the sequence

```yaml
Type: ProvisioningSequence
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)