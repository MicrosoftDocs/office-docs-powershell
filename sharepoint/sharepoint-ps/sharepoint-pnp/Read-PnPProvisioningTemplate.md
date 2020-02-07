---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/read-pnpprovisioningtemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---

# Read-PnPProvisioningTemplate

## SYNOPSIS
Loads/Reads a PnP file from the file system or a string

## SYNTAX 

### By Path
```powershell
Read-PnPProvisioningTemplate -Path <String>
                             [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
```

### By XML
```powershell
Read-PnPProvisioningTemplate -Xml <String>
                             [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Read-PnPProvisioningTemplate -Path template.pnp
```

Loads a PnP file from the file system

### ------------------EXAMPLE 2------------------
```powershell
Read-PnPProvisioningTemplate -Path template.pnp -TemplateProviderExtensions $extensions
```

Loads a PnP file from the file system using some custom template provider extensions while loading the file.

### ------------------EXAMPLE 3------------------
```powershell
Read-PnPProvisioningTemplate -Xml $xml
```

Reads a PnP Provisioning template from a string containing the XML of a provisioning template

## PARAMETERS

### -Path
Filename to read from, optionally including full path.

```yaml
Type: String
Parameter Sets: By Path

Required: True
Position: 0
Accept pipeline input: False
```

### -TemplateProviderExtensions
Allows you to specify ITemplateProviderExtension to execute while loading the template.

```yaml
Type: ITemplateProviderExtension[]
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Xml
Variable to read from, containing the valid XML of a provisioning template.

```yaml
Type: String
Parameter Sets: By XML

Required: True
Position: 1
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)