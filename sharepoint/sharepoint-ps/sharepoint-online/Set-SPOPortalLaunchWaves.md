---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:https://docs.microsoft.com/powershell/module/sharepoint-online/set-spoportallaunchwaves
schema: 2.0.0
applicable: SharePoint Online
title: Set-SPOPortalLaunchWaves
author: fikrudeju
ms.author: fishibru
manager: suyog
---

# Set-SPOPortalLaunchWaves

## SYNOPSIS
Pause or restart a portal launch in progress.

## SYNTAX

```
Set-SPOPortalLaunchWaves -LaunchSiteUrl <String> -Status <StatusAction> [-WalkBack <Boolean>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPOPortalLaunchWaves allows you to pause or restart the portal launch in progress.

## EXAMPLES

### Example 1
```powershell
Set-SPOPortalLaunchWaves -Status Pause - LaunchSiteUrl "https://contoso.sharepoint.com/teams/NewSite"
```

This example pauses a launch on https://contoso.sharepoint.com/teams/newsite, preventing upcoming wave progressions.

### Example 2
```powershell
Set-SPOPortalLaunchWaves -Status Restart - LaunchSiteUrl "https://contoso.sharepoint.com/teams/NewSite"
```

This example restarts a previously-paused launch on https://contoso.sharepoint.com/teams/newsite.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LaunchSiteUrl
Specifies the absolute URL for the site that you're changing its portal launch status.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
Specifies whether you want to start or restart the portal launch in progress.

```yaml
Type: StatusAction
Parameter Sets: (All)
Aliases:
Accepted values: Pause, Restart

Required: True
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

[Get-SPOPortalLaunchWaves](Get-SPOPortalLaunchWaves.md)

[New-SPOPortalLaunchWaves](New-SPOPortalLaunchWaves.md)

[Remove-SPOPortalLaunchWaves](Remove-SPOPortalLaunchWaves.md)