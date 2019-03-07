---
external help file:
applicable: SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
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

Adds an existing site object to an existing hierarchy sequence

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
