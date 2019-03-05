---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---
# Test-PnPTenantTemplate

## SYNOPSIS
Tests a provisioning hierarchy for invalid references

## SYNTAX 

```powershell
Test-PnPTenantTemplate -Template <ProvisioningHierarchy>
                       [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Test-PnPProvisioningHierarchy -Hierarchy $myhierarchy
```

Checks for valid template references

## PARAMETERS

### -Template
The in-memory template to test

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningHierarchy
Parameter Sets: __AllParameterSets
Aliases: Hierarchy

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
