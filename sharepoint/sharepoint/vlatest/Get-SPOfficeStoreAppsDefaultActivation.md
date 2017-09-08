---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPOfficeStoreAppsDefaultActivation

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPOfficeStoreAppsDefaultActivation -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPOfficeStoreAppsDefaultActivation -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPOfficeStoreAppsDefaultActivation cmdlet to return settings for apps for Office that run in a specific web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE 1------ (SharePoint Server 2013)
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -WebApplication http://sphvm-8044
```

This examples returns the setting for the web application http://sphvm-8044.

### --------EXAMPLE 1------ (SharePoint Server 2016)
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -WebApplication http://sphvm-8044
```

This examples returns the setting for the web application http://sphvm-8044.

### --------EXAMPLE 2------ (SharePoint Server 2013)
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -SiteSubscription efca5b88-b3a3-448d-afbc-ef620f4744f1
```

This examples returns the Subscription ID setting for the tenant

### --------EXAMPLE 2------ (SharePoint Server 2016)
```
C:\PS>Get-SPOfficeStoreAppsDefaultActivation -SiteSubscription efca5b88-b3a3-448d-afbc-ef620f4744f1
```

This examples returns the Subscription ID setting for the tenant

## PARAMETERS

### -SiteSubscription
Specifies the Site Group to which the settings apply.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPOfficeStoreAppsDefaultActivation]()

