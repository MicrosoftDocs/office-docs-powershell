---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnptenantsequencesite
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPTenantSequenceSite
---

# Add-PnPTenantSequenceSite

## SYNOPSIS
Adds a existing tenant sequence site object to a tenant template

## SYNTAX 

```powershell
Add-PnPTenantSequenceSite -Site <ProvisioningSitePipeBind>
                          -Sequence <ProvisioningSequence>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTenantSequenceSite -Site $myteamsite -Sequence $mysequence
```

Adds an existing site object to an existing template sequence

## PARAMETERS

### -Sequence
The sequence to add the site to

```yaml
Type: ProvisioningSequence
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Site


```yaml
Type: ProvisioningSitePipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)