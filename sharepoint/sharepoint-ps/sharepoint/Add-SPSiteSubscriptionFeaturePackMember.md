---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-SPSiteSubscriptionFeaturePackMember

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Adds a feature to a SharePoint Feature set.



## SYNTAX

```
Add-SPSiteSubscriptionFeaturePackMember [-Identity] <SPSiteSubscriptionFeaturePackPipeBind>
 -FeatureDefinition <SPFeatureDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Add- SPSiteSubscriptionFeaturePackMember cmdlet adds features to the provided SharePoint Feature set.
Feature sets are an Allow List of  SharePoint Features that can be associated with any site subscription.
If a Feature set is assigned to a site subscription, only the SPFeatures object in that Feature set are available for use on the site collections and Web sites that are members of the site subscription.
Feature sets contain a list of the GUIDs of each Feature that are on the Allow List for associated site subscriptions.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------EXAMPLE---------------- (SharePoint Server 2013)
```
C:\PS>$fs = New-SPFeatureSet

C:\PS>Get-SPFeature -limit all | Where{ $_.Scope -eq "WEB" } | Add-SPSiteSubscriptionFeaturePackMember -id $fs

C:\PS>$fs = Get-SPFeatureSet $fs
```

This example creates a Feature set and adds all Web site scoped Features to the set.

The Feature set is refreshed in the last line so that the local object has the correct values.

### -------------EXAMPLE---------------- (SharePoint Server 2016)
```
C:\PS>$fs = New-SPFeatureSet

C:\PS>Get-SPFeature -limit all | Where{ $_.Scope -eq "WEB" } | Add-SPSiteSubscriptionFeaturePackMember -id $fs

C:\PS>$fs = Get-SPFeatureSet $fs
```

This example creates a Feature set and adds all Web site scoped Features to the set.

The Feature set is refreshed in the last line so that the local object has the correct values.

## PARAMETERS

### -Identity
Specifies the Feature set object or GUID to which the given SharePoint Feature is added.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of a Feature set (for example, FeatureSet1); or an instance of a valid SPFeatureSet object.

```yaml
Type: SPSiteSubscriptionFeaturePackPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FeatureDefinition
Specifies the Feature definition, name, or GUID to add to the Feature set.

```yaml
Type: SPFeatureDefinitionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

