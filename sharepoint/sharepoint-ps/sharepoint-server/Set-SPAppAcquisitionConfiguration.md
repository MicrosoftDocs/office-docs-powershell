---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAppAcquisitionConfiguration
schema: 2.0.0
---

# Set-SPAppAcquisitionConfiguration

## SYNOPSIS
Sets app acquisition settings.

## SYNTAX

### MarketplaceSettingsInSiteSubscription
```
Set-SPAppAcquisitionConfiguration -Enable <Boolean> -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### MarketplaceSettingsInWebApplication
```
Set-SPAppAcquisitionConfiguration -Enable <Boolean> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -WebApplication <SPWebApplicationPipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set. You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Set-SPAppAcquisitionConfiguration cmdlet to set app acquisition settings from the SharePoint Store or App Catalog.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at Windows PowerShell for SharePoint Server 2016 reference (http://go.microsoft.com/fwlink/p/?LinkId=671715).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\>Set-SPAppAcquisitionConfiguration -WebApplication http://localhost -Enable:$false
```

This example disabled app purchases for the specified Web Application.

### --------------------EXAMPLE 2---------------------
```
PS C:\>Set-SPAppAcquisitionConfiguration -SiteSubscription http://localhost/sites/SharePointOnlineAdmin1 -Enable:$false
```

This example disables app purchases for the specified tenant.


## PARAMETERS

### -Enable
Specifies whether acquisition is enabled or disabled.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscription
Specifies the site collection for which to set app acquisition settings.


```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: MarketplaceSettingsInSiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### -WebApplication
Specifies the web application for which acquisitions settings are to be set.


```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: MarketplaceSettingsInWebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPWebApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPSiteSubscriptionPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPAppAcquisitionConfiguration](Get-SPAppAcquisitionConfiguration.md)
