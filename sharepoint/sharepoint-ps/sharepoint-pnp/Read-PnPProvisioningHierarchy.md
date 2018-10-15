---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Read-PnPProvisioningHierarchy

## SYNOPSIS
Loads/Reads a PnP provisioning hierarchy from the file system and returns an in-memory instance of this template.

## SYNTAX 

```powershell
Read-PnPProvisioningHierarchy -Path <String>
                              [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Read-PnPProvisioningHierarchy -Path hierarchy.pnp
```

Reads a PnP provisioning hierarchy file from the file system and returns an in-memory instance

## PARAMETERS

### -Path
Filename to read from, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -TemplateProviderExtensions
Allows you to specify ITemplateProviderExtension to execute while loading the template.

```yaml
Type: ITemplateProviderExtension[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)