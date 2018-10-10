---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPProvisioningSite

## SYNOPSIS
Adds a provisioning sequence object to a provisioning hierarchy

## SYNTAX 

```powershell
Add-PnPProvisioningSite -Site <ProvisioningSitePipeBind>
                        -Sequence <ProvisioningSequence>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPProvisioningSite -Site $myteamsite -Sequence $mysequence
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