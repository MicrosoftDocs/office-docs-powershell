---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnptenantsequencesite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPTenantSequenceSite
---

# Get-PnPTenantSequenceSite

## SYNOPSIS
Returns one ore more sites from a tenant template

## SYNTAX 

```powershell
Get-PnPTenantSequenceSite -Sequence <ProvisioningSequence>
                          [-Identity <ProvisioningSitePipeBind>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTenantSequenceSite -Sequence $mysequence
```

Returns all sites from the specified sequence

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTenantSequenceSite -Sequence $mysequence -Identity 8058ea99-af7b-4bb7-b12a-78f93398041e
```

Returns the specified site from the specified sequence

## PARAMETERS

### -Identity
Optional Id of the site

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningSitePipeBind
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: True
```

### -Sequence
The sequence to retrieve the site from

Only applicable to: SharePoint Online

```yaml
Type: ProvisioningSequence
Parameter Sets: __AllParameterSets

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)