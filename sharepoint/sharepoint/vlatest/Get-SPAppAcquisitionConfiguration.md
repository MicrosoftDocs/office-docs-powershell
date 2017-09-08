---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPAppAcquisitionConfiguration

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPAppAcquisitionConfiguration -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPAppAcquisitionConfiguration [-AssignmentCollection <SPAssignmentCollection>]
 -WebApplication <SPWebApplicationPipeBind>
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPAppAcquisitionConfiguration cmdlet to return app acquisition settings from the SharePoint Storeor App Catalog.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### ------------EXAMPLE 1------- (SharePoint Server 2013)
```
C:\PS>Get-SPAppAcquisitionConfiguration -WebApplication http://localhost
```

This example returns app acquisition settings for the specified web application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### ------------EXAMPLE 2------- (SharePoint Server 2013)
```
C:\PS>Get-SPAppAcquisitionConfiguration -SiteSubscription http://localhost/sites/SharePointOnlineAdmin
```

This example returns app acquisition settings for the specified tenant.

## PARAMETERS

### -SiteSubscription
Below Content Applies To: SharePoint Server 2013

Specifies the site collection for which app acquisition settings are to be returned.
Below Content Applies To: SharePoint Server 2016

{{Fill SiteSubscription Description}}

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

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
Below Content Applies To: SharePoint Server 2016

{{Fill AssignmentCollection Description}}

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

### -WebApplication
Below Content Applies To: SharePoint Server 2013

Specifies the web application for which app acquisition settings are to be returned.
Below Content Applies To: SharePoint Server 2016

{{Fill WebApplication Description}}

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

## INPUTS

### Microsoft.SharePoint.PowerShell.SPWebApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPSiteSubscriptionPipeBind Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-SPAppAcquisitionConfiguration]()

