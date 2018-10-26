---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Test-PnPProvisioningHierarchy

## SYNOPSIS
Tests a provisioning hierarchy for invalid references

## SYNTAX 

```powershell
Test-PnPProvisioningHierarchy -Hierarchy <ProvisioningHierarchy>
                              [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Test-PnPProvisioningHierarchy -Hierarchy $myhierarchy
```

Checks for valid template references

## PARAMETERS

### -Hierarchy
The hierarchy to add the sequence to

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)