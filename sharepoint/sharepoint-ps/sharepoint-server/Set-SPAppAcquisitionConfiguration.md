---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAppAcquisitionConfiguration
schema: 2.0.0
---

# Set-SPAppAcquisitionConfiguration

## SYNOPSIS
{{Fill in the Synopsis}}


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
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### --------------------EXAMPLE 2---------------------
```
C:\PS>Set-SPAppAcquisitionConfiguration -SiteSubscription http://localhost/sites/SharePointOnlineAdmin1 -Enable:$false
```

This example disables app purchase for the specified tenant.


## PARAMETERS

### -Enable
{{Fill Enable Description}}


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
{{Fill SiteSubscription Description}}


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
{{Fill WebApplication Description}}


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

[Get-SPAppAcquisitionConfiguration]()
