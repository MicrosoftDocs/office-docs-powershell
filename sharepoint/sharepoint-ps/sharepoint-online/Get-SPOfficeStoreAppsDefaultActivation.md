---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPOfficeStoreAppsDefaultActivation
schema: 2.0.0
---

# Get-SPOfficeStoreAppsDefaultActivation

## SYNOPSIS

Returns the properties of apps for Office.



## SYNTAX

### AppsForOfficeSettingsInSiteSubscription
```
Get-SPOfficeStoreAppsDefaultActivation -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### AppsForOfficeSettingsInWebApplication
```
Get-SPOfficeStoreAppsDefaultActivation -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPOfficeStoreAppsDefaultActivation cmdlet to return settings for apps for Office that run in a specific web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE 1------ 
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -WebApplication http://sphvm-8044
```

This examples returns the setting for the web application http://sphvm-8044.

### --------EXAMPLE 2------ 
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -SiteSubscription efca5b88-b3a3-448d-afbc-ef620f4744f1
```

This examples returns the Subscription ID setting for the tenant

## PARAMETERS

### -SiteSubscription
Specifies the Site Group to which the settings apply.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: AppsForOfficeSettingsInSiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL, GUID, or name of the web application to which the setting applies.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: AppsForOfficeSettingsInWebApplication
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPOfficeStoreAppsDefaultActivation]()

