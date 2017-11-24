---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPSiteSubscriptionFeaturePack
schema: 2.0.0
---

# Get-SPSiteSubscriptionFeaturePack

## SYNOPSIS

Retrieves available SharePoint Feature sets or the Feature set assigned to a given site subscription.



## SYNTAX

### FeaturePack
```
Get-SPSiteSubscriptionFeaturePack [[-Identity] <SPSiteSubscriptionFeaturePackPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### SiteSubscription
```
Get-SPSiteSubscriptionFeaturePack [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPSiteSubscriptionFeaturePack cmdlet retrieves available SharePoint Feature sets or the Feature set assigned to a given site subscription.

Be careful when you assign Feature sets to variables because changes to the Feature set are not reflected until the variable is refreshed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>Get- SPSiteSubscriptionFeaturePack
```

This example returns all defined Feature sets in the local farm.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Get-SPSiteSubscriptionFeaturePack -SiteSubscription http://contoso.com | ForEach{ $_.FeatureDefinitions }
```

This example returns the list (name, ID, and scope) of all Features allowed in the Feature set that is currently assigned to the site subscription of http://contoso.com.

## PARAMETERS

### -Identity
Specifies a valid name or GUID of the Feature set.

```yaml
Type: SPSiteSubscriptionFeaturePackPipeBind
Parameter Sets: FeaturePack
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteSubscription
If provided, ensures that the returned Feature set is the Feature set that is currently assigned to the given site subscription.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: SiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

