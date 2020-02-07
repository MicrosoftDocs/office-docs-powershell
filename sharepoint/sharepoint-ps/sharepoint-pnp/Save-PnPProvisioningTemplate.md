---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/save-pnpprovisioningtemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Save-PnPProvisioningTemplate

## SYNOPSIS
Saves a PnP site template to the file system

## SYNTAX 

```powershell
Save-PnPProvisioningTemplate -Template <ProvisioningTemplate>
                             -Out <String>
                             [-Force [<SwitchParameter>]]
                             [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Save-PnPSiteTemplate -InputInstance $template -Out .\template.pnp
```

Saves a PnP site template to the file system as a PnP file.

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

### -Out
Filename to write to, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Template
Allows you to provide an in-memory instance of the ProvisioningTemplate type of the PnP Core Component. When using this parameter, the -Out parameter refers to the path for saving the template and storing any supporting file for the template.

```yaml
Type: ProvisioningTemplate
Parameter Sets: (All)
Aliases: InputInstance

Required: True
Position: Named
Accept pipeline input: False
```

### -TemplateProviderExtensions
Allows you to specify the ITemplateProviderExtension to execute while saving a template.

```yaml
Type: ITemplateProviderExtension[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)