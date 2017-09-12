---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPAppHostingQuotaConfiguration

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



## SYNTAX

```
Set-SPAppHostingQuotaConfiguration -AppHostingLicenseQuota <Double> -AppInstanceCountQuota <Double>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 -SiteSubscription <SPSiteSubscriptionPipeBind> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

Use the Set-SPAppHostingQuotaConfiguration cmdlet to set hosting quotas for a specified app by using the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### ----------------EXAMPLE 1---------- (SharePoint Server 2013)
```
C:\PS>Set-SPAppHostingQuotaConfiguration -Identity 586d4a32-98c3-42ce-80be-3c76c10c250c -AppInstanceCountQuota 50 -AppHostingLicenseQuota 25
```

This example sets hosting Quotas for the SiteSubscriptionId "586d4a32-98c3-42ce-80be-3c76c10c250c" with hosted appinstance limit as 50 and hosted apps licenses assigned as 25.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### ----------------EXAMPLE 2---------- (SharePoint Server 2013)
```
C:\PS>Get-SPSiteSubscription | Set-SPAppHostingQuotaConfiguration -Identity $_ -AppInstanceCountQuota 50 -AppHostingLicenseQuota 25
```

This example sets hosting Quotas for all SiteSubscriptions in the farm with hosted apps limit as 50 and hosted apps licenses assigned as 25.

## PARAMETERS

### -AppHostingLicenseQuota
**Below Content Applies To:**SharePoint Server 2013

Specifies the app licensing quota.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AppHostingLicenseQuota Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Specifies the number instances of an app.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AppInstanceCountQuota Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AssignmentCollection Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

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
**Below Content Applies To:**SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

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
{{Fill SiteSubscription Description}}

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

[Get-SPAppHostingQuotaConfiguration]()

