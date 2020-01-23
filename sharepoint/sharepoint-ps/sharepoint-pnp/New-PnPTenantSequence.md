---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/new-pnptenantsequence
applicable: SharePoint Online
schema: 2.0.0
---
# New-PnPTenantSequence

## SYNOPSIS
Creates a new tenant sequence object

## SYNTAX

```powershell
New-PnPTenantSequence [-Id <String>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$sequence = New-PnPTenantSequence
```

Creates a new instance of a tenant sequence object.

### ------------------EXAMPLE 2------------------
```powershell
$sequence = New-PnPTenantSequence -Id "MySequence"
```

Creates a new instance of a tenant sequence object and sets the Id to the value specified.

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
