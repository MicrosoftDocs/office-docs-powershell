---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:https://docs.microsoft.com/powershell/module/sharepoint-online/get-spoportallaunchwaves
schema: 2.0.0
applicable: SharePoint Online
title: Get-SPOPortalLaunchWaves
author: fikrudeju
ms.author: fishibru
manager: suyog
---

# Get-SPOPortalLaunchWaves

## SYNOPSIS
Get the current state of a portal launch on a site.

## SYNTAX

```
Get-SPOPortalLaunchWaves [-LaunchSiteUrl <String>] [-DisplayFormat <WaveDisplayFormats>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPOPortalLaunchWaves cmdlet can be used to determine if a portal launch is scheduled for a site, and if so, its current rollout status. 

## EXAMPLES

### Example 1
```powershell
Get-SPOPortalLaunchWaves -LaunchSiteUrl "https://contoso.sharepoint.com/teams/newsite" 
```

This example checks if a portal launch is scheduled for the site https://contoso.sharepoint.com/teams/newsite. If it is scheduled, then it will return the details of the configuration.

### Example 2
```powershell
Get-SPOPortalLaunchWaves
```

This example checks if a portal launch is scheduled on any site in the tenant (i.e. if . If so, it will return details of each launch configuration. 

## PARAMETERS

### -DisplayFormat
Specifies whether the waves in the launch setup are displayed in an indented or raw format 

```yaml
Type: WaveDisplayFormats
Parameter Sets: (All)
Aliases:
Accepted values: Raw, Formatted

Required: False
Position: Named
Default value: Formatted
Accept pipeline input: False
Accept wildcard characters: False
```

### -LaunchSiteUrl
Specifies the absolute URL for the site being checked for its launch state.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
[New-SPOPortalLaunchWaves](New-SPOPortalLaunchWaves.md)

[Set-SPOPortalLaunchWaves](Set-SPOPortalLaunchWaves.md)

[Remove-SPOPortalLaunchWaves](Remove-SPOPortalLaunchWaves.md)