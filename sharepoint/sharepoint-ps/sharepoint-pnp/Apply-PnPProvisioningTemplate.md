---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/apply-pnpprovisioningtemplate
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Apply-PnPProvisioningTemplate
---

# Apply-PnPProvisioningTemplate

## SYNOPSIS
Applies a site template to a web

## SYNTAX 

### Instance
```powershell
Apply-PnPProvisioningTemplate [-InputInstance <ProvisioningTemplate>]
                              [-TemplateId <String>]
                              [-ResourceFolder <String>]
                              [-OverwriteSystemPropertyBagValues [<SwitchParameter>]]
                              [-IgnoreDuplicateDataRowErrors [<SwitchParameter>]]
                              [-ProvisionContentTypesToSubWebs [<SwitchParameter>]]
                              [-ProvisionFieldsToSubWebs [<SwitchParameter>]]
                              [-ClearNavigation [<SwitchParameter>]]
                              [-Parameters <Hashtable>]
                              [-Handlers <Handlers>]
                              [-ExcludeHandlers <Handlers>]
                              [-ExtensibilityHandlers <ExtensibilityHandler[]>]
                              [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                              [-Web <WebPipeBind>]
                              [-Connection <PnPConnection>]
```

### Path
```powershell
Apply-PnPProvisioningTemplate -Path <String>
                              [-TemplateId <String>]
                              [-ResourceFolder <String>]
                              [-OverwriteSystemPropertyBagValues [<SwitchParameter>]]
                              [-IgnoreDuplicateDataRowErrors [<SwitchParameter>]]
                              [-ProvisionContentTypesToSubWebs [<SwitchParameter>]]
                              [-ProvisionFieldsToSubWebs [<SwitchParameter>]]
                              [-ClearNavigation [<SwitchParameter>]]
                              [-Parameters <Hashtable>]
                              [-Handlers <Handlers>]
                              [-ExcludeHandlers <Handlers>]
                              [-ExtensibilityHandlers <ExtensibilityHandler[]>]
                              [-TemplateProviderExtensions <ITemplateProviderExtension[]>]
                              [-Web <WebPipeBind>]
                              [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Apply-PnPProvisioningTemplate -Path template.xml
```

Applies a site template in XML format to the current web.

### ------------------EXAMPLE 2------------------
```powershell
Apply-PnPProvisioningTemplate -Path template.xml -ResourceFolder c:\provisioning\resources
```

Applies a site template in XML format to the current web. Any resources like files that are referenced in the template will be retrieved from the folder as specified with the ResourceFolder parameter.

### ------------------EXAMPLE 3------------------
```powershell
Apply-PnPProvisioningTemplate -Path template.xml -Parameters @{"ListTitle"="Projects";"parameter2"="a second value"}
```

Applies a site template in XML format to the current web. It will populate the parameter in the template the values as specified and in the template you can refer to those values with the {parameter:<key>} token.

For instance with the example above, specifying {parameter:ListTitle} in your template will translate to 'Projects' when applying the template. These tokens can be used in most string values in a template.

### ------------------EXAMPLE 4------------------
```powershell
Apply-PnPProvisioningTemplate -Path template.xml -Handlers Lists, SiteSecurity
```

Applies a site template in XML format to the current web. It will only apply the lists and site security part of the template.

### ------------------EXAMPLE 5------------------
```powershell
Apply-PnPProvisioningTemplate -Path template.pnp
```

Applies a site template from a pnp package to the current web.

### ------------------EXAMPLE 6------------------
```powershell
Apply-PnPProvisioningTemplate -Path https://tenant.sharepoint.com/sites/templatestorage/Documents/template.pnp
```

Applies a site template from a pnp package stored in a library to the current web.

### ------------------EXAMPLE 7------------------
```powershell

$handler1 = New-PnPExtensibilityHandlerObject -Assembly Contoso.Core.Handlers -Type Contoso.Core.Handlers.MyExtensibilityHandler1
$handler2 = New-PnPExtensibilityHandlerObject -Assembly Contoso.Core.Handlers -Type Contoso.Core.Handlers.MyExtensibilityHandler2
Apply-PnPProvisioningTemplate -Path NewTemplate.xml -ExtensibilityHandlers $handler1,$handler2
```

This will create two new ExtensibilityHandler objects that are run while provisioning the template

### ------------------EXAMPLE 8------------------
```powershell
Apply-PnPProvisioningTemplate -Path .\ -InputInstance $template
```

Applies a site template from an in-memory instance of a ProvisioningTemplate type of the PnP Core Component, reading the supporting files, if any, from the current (.\) path. The syntax can be used together with any other supported parameters.

### ------------------EXAMPLE 9------------------
```powershell
Apply-PnPProvisioningTemplate -Path .\template.xml -TemplateId "MyTemplate"
```

Applies the ProvisioningTemplate with the ID "MyTemplate" located in the template definition file template.xml.

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
Allows you to only process a specific part of the template. Notice that this might fail, as some of the handlers require other artifacts in place if they are not part of what your applying. Visit https://docs.microsoft.com/dotnet/api/officedevpnp.core.framework.provisioning.model.handlers for possible values.

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

### -InputInstance
Allows you to provide an in-memory instance of the ProvisioningTemplate type of the PnP Core Component. When using this parameter, the -Path parameter refers to the path of any supporting file for the template.

```yaml
Type: ProvisioningTemplate
Parameter Sets: Instance

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
Allows you to specify parameters that can be referred to in the template by means of the {parameter:&lt;Key&gt;} token. See examples on how to use this parameter.

```yaml
Type: Hashtable
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
Path to the xml or pnp file containing the provisioning template.

```yaml
Type: String
Parameter Sets: Path

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
Root folder where resources/files that are being referenced in the template are located. If not specified the same folder as where the provisioning template is located will be used.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -TemplateId
ID of the template to use from the xml file containing the provisioning template. If not specified and multiple ProvisioningTemplate elements exist, the last one will be used.

```yaml
Type: String
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
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
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)