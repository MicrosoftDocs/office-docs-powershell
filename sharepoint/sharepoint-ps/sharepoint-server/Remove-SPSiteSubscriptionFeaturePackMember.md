---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPSiteSubscriptionFeaturePackMember
schema: 2.0.0
---

# Remove-SPSiteSubscriptionFeaturePackMember

## SYNOPSIS
Removes a feature definition from the provided SharePoint Feature set.


## SYNTAX

### AllFeatureDefinitions
```
Remove-SPSiteSubscriptionFeaturePackMember [-Identity] <SPSiteSubscriptionFeaturePackPipeBind>
 [-AllFeatureDefinitions] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

### SingleFeatureDefinition
```
Remove-SPSiteSubscriptionFeaturePackMember [-Identity] <SPSiteSubscriptionFeaturePackPipeBind>
 -FeatureDefinition <SPFeatureDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Remove-SPSiteSubscriptionFeaturePackMember` cmdlet removes the provided FeatureDefintion parameter from the feature set specified by the Identity parameter.
If the AllFeatureDefinitions flag is provided, all feature definitions are removed from the given Feature set.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
C:\PS>$FS = Get-SPSiteSubscriptionFeaturePack "30daa535-b0fe-4d10-84b0-fb04029d161a"

C:\PS>Remove-SPSiteSubscriptionFeaturePackMember -Identity $fs -FeatureDefinition (Get-SPFeature "PublishingSite")
```

This example removes the PublishingSite feature from the Feature set that has ID 30daa535-b0fe-4d10-84b0-fb04029d161a.


### ------------------EXAMPLE 2-----------------------
```
C:\PS>Get-SPSiteSubscriptionFeaturePack "30daa535-b0fe-4d10-84b0-fb04029d161a" | Remove-SPSiteSubscriptionFeaturePackMember -AllFeatureDefinitions
```

This example removes all features from the Feature set 30daa535-b0fe-4d10-84b0-fb04029d161a.


## PARAMETERS

### -Identity
Specifies the Feature set from which to remove a feature.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of a feature set (for example, FeatureSet1); or an instance of a valid SPFeatureSet object.

```yaml
Type: SPSiteSubscriptionFeaturePackPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllFeatureDefinitions
Clears all features from the Feature set.

```yaml
Type: SwitchParameter
Parameter Sets: AllFeatureDefinitions
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FeatureDefinition
Specifies the feature definition to be removed.

```yaml
Type: SPFeatureDefinitionPipeBind
Parameter Sets: SingleFeatureDefinition
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
