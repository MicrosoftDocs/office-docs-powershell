---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Save-PnPProvisioningHierarchy

## SYNOPSIS
Saves a PnP provisioning hierarchy to the file system

## SYNTAX 

```powershell
Save-PnPProvisioningHierarchy -Hierarchy <ProvisioningHierarchy>
                              -Out <String>
                              [-Force [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Save-PnPProvisioningHierarchy -Hierarchy $hierarchy -Out .\hierarchy.pnp
```

Saves a PnP provisioning hiearchy to the file system

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Hierarchy
Allows you to provide an in-memory instance of the ProvisioningHierarchy type of the PnP Core Component. When using this parameter, the -Out parameter refers to the path for saving the template and storing any supporting file for the template.

```yaml
Type: ProvisioningHierarchy
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Out
Filename to write to, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)