---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/apply-pnptenanttemplate
applicable: SharePoint Online
schema: 2.0.0
title: Apply-PnPTenantTemplate
---

# Apply-PnPTenantTemplate

## SYNOPSIS
Applies a tenant template to the current tenant. You must be a SharePoint Online global administrator to run the cmdlet.

## SYNTAX 

### By Path
```powershell
Apply-PnPTenantTemplate -Path <String>
                        [-SequenceId <String>]
                        [-ResourceFolder <String>]
                        [-Handlers <Handlers>]
                        [-ExcludeHandlers <Handlers>]
                        [-ExtensibilityHandlers <ExtensibilityHandler[]>]
                        [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                        [-Parameters <Hashtable>]
                        [-OverwriteSystemPropertyBagValues [<SwitchParameter>]]
                        [-IgnoreDuplicateDataRowErrors [<SwitchParameter>]]
                        [-ProvisionContentTypesToSubWebs [<SwitchParameter>]]
                        [-ProvisionFieldsToSubWebs [<SwitchParameter>]]
                        [-ClearNavigation [<SwitchParameter>]]
                        [-Configuration <ApplyConfigurationPipeBind>]
                        [-Connection <SPOnlineConnection>]
```

### By Object
```powershell
Apply-PnPTenantTemplate -Template <ProvisioningHierarchy>
                        [-SequenceId <String>]
                        [-ResourceFolder <String>]
                        [-Handlers <Handlers>]
                        [-ExcludeHandlers <Handlers>]
                        [-ExtensibilityHandlers <ExtensibilityHandler[]>]
                        [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                        [-Parameters <Hashtable>]
                        [-OverwriteSystemPropertyBagValues [<SwitchParameter>]]
                        [-IgnoreDuplicateDataRowErrors [<SwitchParameter>]]
                        [-ProvisionContentTypesToSubWebs [<SwitchParameter>]]
                        [-ProvisionFieldsToSubWebs [<SwitchParameter>]]
                        [-ClearNavigation [<SwitchParameter>]]
                        [-Configuration <ApplyConfigurationPipeBind>]
                        [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Apply-PnPTenantTemplate -Path myfile.pnp
```

Will read the tenant template from the filesystem and will apply the sequences in the template

### ------------------EXAMPLE 2------------------
```powershell
Apply-PnPTenantTemplate -Path myfile.pnp -SequenceId "mysequence"
```

Will read the tenant template from the filesystem and will apply the specified sequence in the template

### ------------------EXAMPLE 3------------------
```powershell
Apply-PnPTenantTemplate -Path myfile.pnp -Parameters @{"ListTitle"="Projects";"parameter2"="a second value"}
```

Applies a tenant template to the current tenant. It will populate the parameter in the template the values as specified and in the template you can refer to those values with the {parameter:<key>} token.

For instance with the example above, specifying {parameter:ListTitle} in your template will translate to 'Projects' when applying the template. These tokens can be used in most string values in a template.

## PARAMETERS

### -ClearNavigation
Override the RemoveExistingNodes attribute in the Navigation elements of the template. If you specify this value the navigation nodes will always be removed before adding the nodes in the template

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Configuration
Specify a JSON configuration file to configure the extraction progress.

```yaml
Type: ApplyConfigurationPipeBind
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -ExcludeHandlers
Allows you to run all handlers, excluding the ones specified.

```yaml
Type: Handlers
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -ExtensibilityHandlers
Allows you to specify ExtensbilityHandlers to execute while applying a template

```yaml
Type: ExtensibilityHandler[]
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Handlers
Allows you to only process a specific part of the template. Notice that this might fail, as some of the handlers require other artifacts in place if they are not part of what your applying.

```yaml
Type: Handlers
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -IgnoreDuplicateDataRowErrors
Ignore duplicate data row errors when the data row in the template already exists.

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -OverwriteSystemPropertyBagValues
Specify this parameter if you want to overwrite and/or create properties that are known to be system entries (starting with vti_, dlc_, etc.)

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Parameters
Allows you to specify parameters that can be referred to in the tenant template by means of the {parameter:&lt;Key&gt;} token. See examples on how to use this parameter.

```yaml
Type: Hashtable
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
Path to the xml or pnp file containing the tenant template.

```yaml
Type: String
Parameter Sets: By Path

Required: True
Position: 0
Accept pipeline input: True
```

### -ProvisionContentTypesToSubWebs
If set content types will be provisioned if the target web is a subweb.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ProvisionFieldsToSubWebs
If set fields will be provisioned if the target web is a subweb.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ResourceFolder
Root folder where resources/files that are being referenced in the template are located. If not specified the same folder as where the tenant template is located will be used.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -SequenceId


```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Template


```yaml
Type: ProvisioningHierarchy
Parameter Sets: By Object

Required: True
Position: 0
Accept pipeline input: True
```

### -TemplateProviderExtensions
Allows you to specify ITemplateProviderExtension to execute while applying a template.

```yaml
Type: ITemplateProviderExtension[]
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)