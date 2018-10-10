---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Enable-SPFeature
schema: 2.0.0
---

# Enable-SPFeature

## SYNOPSIS

Enables an installed SharePoint Feature at the given scope.

## SYNTAX

### SiteFeature
```
Enable-SPFeature [-Identity] <SPFeatureDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-PassThru] [-Url <String>] [-WhatIf] [<CommonParameters>]
```

### FarmFeatureDefinition
```
Enable-SPFeature [-Identity] <SPFeatureDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-PassThru] [-WhatIf] [-CompatibilityLevel <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The Enable-SPFeature cmdlet enables an installed feature at the given scope. 
If the feature is a farm feature, no URL is needed.
Otherwise, provide the URL where the feature is to be enabled and it will be enabled at the proper scope based on the Feature definition.

This cmdlet has no output unless the PassThru parameter is provided, in which case the SPFeatureDefinition object for the newly enabled feature is returned.

If you try to use the Url parameter on a farm-scoped feature, you receive the following error message:

The feature '\<feature name\>' applies to the entire farm; the Url parameter cannot be used with farm-scoped features.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
PS C:\>Enable-SPFeature -identity "MyCustom" -URL http://somesite
```

This example enables the "MyCustom" site scoped SharePoint Feature at http://somesite.

### --------------EXAMPLE 2----------------- 
```
C:\PS>$w = Get-SPWeb http://somesite/myweb | ForEach{ $_.URL }
PS C:\>Get-SPFeature -Web $w |%{ Enable-SPFeature -Identity $_ -URL $w}
```

This example enables all SharePoint Features in the subsite at http://somesite/myweb.

## PARAMETERS

### -Identity
Specifies the name of the Feature or GUID to uninstall.

The type must be the name of the Feature folder located in the 14\Template\Features folder or GUID, in the form 21d186e1-7036-4092-a825-0eb6709e9281.

```yaml
Type: SPFeatureDefinitionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Forces the activation of a Feature.
This causes any custom code associated with the Feature to rerun.

> [!NOTE]
> Please be aware ```-Force``` will not work if you updated the feature with Update-SPSolution.
> In this case you have to disable feature first with ```Disable-SPFeature``` and then enable it back with ```Enable-SPFeature```



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
If provided, the cmdlet outputs the Feature definition object after enable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the URL of the Web application, site collection, or Web site for which the Feature is being activated.

The type must be a valid URL; for example, http://server_name.

```yaml
Type: String
Parameter Sets: SiteFeature
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompatibilityLevel
{{Fill CompatibilityLevel Description}}

```yaml
Type: Int32
Parameter Sets: FarmFeatureDefinition
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

