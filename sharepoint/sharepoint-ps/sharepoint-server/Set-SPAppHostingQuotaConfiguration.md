---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAppHostingQuotaConfiguration
schema: 2.0.0
---

# Set-SPAppHostingQuotaConfiguration

## SYNOPSIS
Sets hosting quotas for an app.


## SYNTAX

```
Set-SPAppHostingQuotaConfiguration -AppHostingLicenseQuota <Double> -AppInstanceCountQuota <Double>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 -SiteSubscription <SPSiteSubscriptionPipeBind> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-SPAppHostingQuotaConfiguration cmdlet to set hosting quotas for a specified app by using the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at Windows PowerShell for SharePoint Server 2016 reference (http://go.microsoft.com/fwlink/p/?LinkId=671715).


## EXAMPLES

### ----------------EXAMPLE 1----------
```
PS C:\>Set-SPAppHostingQuotaConfiguration -Identity 586d4a32-98c3-42ce-80be-3c76c10c250c -AppInstanceCountQuota 50 -AppHostingLicenseQuota 25
```

This example sets hosting Quotas for the SiteSubscriptionId "586d4a32-98c3-42ce-80be-3c76c10c250c" with hosted appinstance limit as 50 and hosted apps licenses assigned as 25.


### ----------------EXAMPLE 2----------
```
PS C:\>Get-SPSiteSubscription | Set-SPAppHostingQuotaConfiguration -Identity $_ -AppInstanceCountQuota 50 -AppHostingLicenseQuota 25
```

This example sets hosting Quotas for all SiteSubscriptions in the farm with hosted apps limit as 50 and hosted apps licenses assigned as 25.


## PARAMETERS

### -AppHostingLicenseQuota
Specifies the app licensing quota.


```yaml
Type: Double
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppInstanceCountQuota
Specifies the number instances of an app.

```yaml
Type: Double
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


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
Prompts you for confirmation before running the cmdlet.


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
Shows what would happen if the cmdlet runs.
The cmdlet is not run.


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

### -SiteSubscription
Specifies the Site Subscription.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPSiteSubscriptionPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPAppHostingQuotaConfiguration](Get-SPAppHostingQuotaConfiguration.md)
