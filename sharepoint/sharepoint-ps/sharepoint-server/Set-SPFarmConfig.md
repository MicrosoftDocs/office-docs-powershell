---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPFarmConfig
schema: 2.0.0
---

# Set-SPFarmConfig

## SYNOPSIS
Sets a global property or a collection of global properties for the local farm.


## SYNTAX

```
Set-SPFarmConfig [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DataFormWebPartAutoRefreshEnabled <Boolean>] [-Force] [-InstalledProductsRefresh]
 [-ServiceConnectionPointBindingInformation <String>] [-ServiceConnectionPointDelete] [-WhatIf]
 [-WorkflowBatchSize <Int32>] [-WorkflowEventDeliveryTimeout <Int32>] [-WorkflowPostponeThreshold <Int32>]
 [-ASPScriptOptimizationEnabled <Boolean>] [-UserAccountDirectoryPathIsImmutable]
 [-DefaultActivateOnSiteMasterValue <Boolean>] [-MaxSiteSubscriptionSettingsValueLength <UInt32>]
 [-MaxTenantStoreValueLength <UInt32>] [-SiteMasterMode <SPSiteMasterMode>]
 [-SiteMasterValidationIntervalInHours <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPFarmConfig` cmdlet updates a collection of global settings for the local farm that are not members of the SPFarm object.
Use the `Get-SPFarmConfig` cmdlet to read global settings for the local farm and to create a new PSCustomObject object from the collection of properties returned from the local farm and then add this object to the pipeline.
Modify the PSCustomObject object and pass it to the `Set-SPFarmConfig` cmdlet to change the parameter values.

The properties collected in the PSCustomObject object must be farm-wide settings and must be configurable only once for the entire farm.
The parameter name added to the PSCustomObject object must match exactly the input parameter name for the `Set-SPFarmConfig` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ---------------------EXAMPLE--------------------------
```
C:\PS>$a = Get-SPFarmConfig

C:\PS>$a.AjaxTimeout = 200

C:\PS>$a | Set-SPFarmConfig
```

This example uses the `Get-SPFarmConfig` cmdlet to add the Ajax Timeout setting to the PSCustomObject object, sets the value for Ajax Timeout and then passes PSCustomObject to the `Set-SPFarmConfig` cmdlet to change the Ajax Timeout setting.
Ajax Timeout, a farm-wide setting, is a member of the SPWebService object and cannot be accessed by using a Windows PowerShell cmdlet.

You can perform the same operations with either of the following commands.


## PARAMETERS

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

### -DataFormWebPartAutoRefreshEnabled
Specifies whether any DataFormWebPart on any page in this farm is allowed to periodically refresh its contents asynchronously (after the page has finished rendering).
When set to false, all DataFormWebParts will ignore the automatic refresh interval provided in Web Part properties.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Forces the deletion or updating of the service connection point.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstalledProductsRefresh
Updates the current machine license state with the list of products that are installed in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ServiceConnectionPointBindingInformation
Adds or updates the service connection point for the current farm in Active Directory Domain Service (AD  DS).

The type must be an array of strings that are key value pairs that will be added to the service connection point.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceConnectionPointDelete
Delete the service connection point for the current farm in AD DS.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
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

### -WorkflowBatchSize
Specifies the paging size for events delivered to a single workflow instance.
For each request, the events are streamed out 100 at a time.

Batch size is the number of events processed for a single workflow instance, which can have many events queued at the same time.
Throttle will override batch size; if the workflow instance cannot be started or restarted because there are too many instances running across all front-end Web servers, none of the events will be fetched, regardless of the batch size.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WorkflowEventDeliveryTimeout
Specifies the time as an integer in which a workflow job must run without the job timing out.
If the workflow job does time out, it gets put back in the queue to be run again.

For example, if the value is set to 5, the workflow job must run within 5 minutes are the workflow job will time out.
Any workflow job that does time out is placed back in the queue to run again.The default value is 5.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WorkflowPostponeThreshold
Specifies the number of workflows that can be running in IIS against a content database at a time before new workflow instances get postponed into a queue.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ASPScriptOptimizationEnabled
{{Fill ASPScriptOptimizationEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UserAccountDirectoryPathIsImmutable
{{Fill UserAccountDirectoryPathIsImmutable Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultActivateOnSiteMasterValue
{{Fill DefaultActivateOnSiteMasterValue Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSiteSubscriptionSettingsValueLength
{{Fill MaxSiteSubscriptionSettingsValueLength Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxTenantStoreValueLength
{{Fill MaxTenantStoreValueLength Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteMasterMode
{{Fill SiteMasterMode Description}}

```yaml
Type: SPSiteMasterMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteMasterValidationIntervalInHours
{{Fill SiteMasterValidationIntervalInHours Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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
