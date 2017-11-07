---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Remove-SPSiteSubscriptionSettings

## SYNOPSIS
Removes the settings service data for a specified site subscription, or finds and removes orphaned data.


## SYNTAX

### FindAllOrphans
```
Remove-SPSiteSubscriptionSettings [-Identity] <SPServiceApplicationPipeBind> [-FindAllOrphans]
 [-AlternativeSiteSubscriptions <Guid[]>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

### SpecifySiteSubscriptions
```
Remove-SPSiteSubscriptionSettings [-Identity] <SPServiceApplicationPipeBind> -SiteSubscriptions <Guid[]>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```


## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Remove-SPSiteSubscriptionSettings` cmdlet deletes site subscription stored data for the specified site subscription.
If the FindAllOrphans parameter is specified, this cmdlet locates any data in the service application that does not exist in the list of local site subscriptions or the alternate list of subscriptions.

The set of site subscriptions can be specified directly, or discovered by comparing data in the service application to the set of existing site subscriptions which finds the data set that corresponds to nonexistent site subscriptions.

If this cmdlet is run on a federated service application without specifying the complete list of site subscription IDs for the AlternativeSiteSubscriptions parameter, data loss can result.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------EXAMPLE 1--------------
```
C:\PS>Remove-SPSiteSubscriptionSettings -FindAllOrphans -Whatif
```

This example finds all orphans and displays them on the screen.
Remove the WhatIf parameter to remove these extra settings.


### ------------EXAMPLE 2--------------
```
C:\PS>Remove-SPSubscriptionSettingsServiceApplication -FindAllOrphans -AlternativeSiteSubscriptions $SubscriptionList
```

Use this example if the service application is consumed by a remote farm and you want the clean orphaned site subscription settings data (an array of all site subscriptions whose data must remain in the service application is assigned to the $SubscriptionList variable.


## PARAMETERS

### -Identity
Specifies the site subscription settings service application that contains the service data to delete.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a subscription settings service application (for example, SubscriptionSettingsApp1); or an instance of a valid SPSubscriptionSettingsServiceApplication object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FindAllOrphans
Specifies that orphaned settings stores in the service application are deleted.

```yaml
Type: SwitchParameter
Parameter Sets: FindAllOrphans
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscriptions
Specifies the site subscriptions with the settings service data to delete.

The type must be an array of valid GUIDs.

```yaml
Type: Guid[]
Parameter Sets: SpecifySiteSubscriptions
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternativeSiteSubscriptions
Specifies the complete collection or comma-separated list of site subscriptions that should exist in the settings service application.
Any data not matching the items in this list will be removed.

This parameter is important when the FindAllOrphans parameter is used.
The value specified for AlternativeSiteSubscriptions parameter is stating that any site subscriptions not on the local farm will be deleted, unless an alternate list of site subscriptions is given.

The type must be an array of valid GUIDs.

```yaml
Type: Guid[]
Parameter Sets: FindAllOrphans
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Automatically bypasses the secondary warning provided by the cmdlet prior to the operation.

```yaml
Type: SwitchParameter
Parameter Sets: FindAllOrphans
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
