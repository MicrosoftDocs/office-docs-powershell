---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPProvisioningSequence

## SYNOPSIS
Creates a new provisioning sequence object

## SYNTAX 

```powershell
New-PnPProvisioningSequence [-Id <String>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$sequence = New-PnPProvisioningSequence
```

Creates a new instance of a provisioning sequence object.

### ------------------EXAMPLE 2------------------
```powershell
$sequence = New-PnPProvisioningSequence -Id "MySequence"
```

Creates a new instance of a provisioning sequence object and sets the Id to the value specified.

## PARAMETERS

### -Id
Optional Id of the sequence

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)