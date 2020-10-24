---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spoportallaunchwaves
schema: 2.0.0
applicable: SharePoint Online
title: Remove-SPOPortalLaunchWaves
author: fikrudeju
ms.author: fishibru
manager: suyog
---

# Remove-SPOPortalLaunchWaves

## SYNOPSIS
Delete a portal launch scheduled or in progress for a site.

## SYNTAX

```
Remove-SPOPortalLaunchWaves -LaunchSiteUrl <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Remove-SPOPortalLaunchWaves cmdlet can be used to delete a portal launch scheduled or in progress for a site.

## EXAMPLES

### Example 1
```powershell
Remove-SPOPortalLaunchWaves -LaunchSiteUrl "https://contoso.sharepoint.com/teams/newsite"
```

This example removes a scheduled or in progress launch from https://contoso.sharepoint.com/teams/newsite.

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
Specifies the absolute URL for the site that you want to delete a scheduled or in progress portal launch.

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

[Set-SPOPortalLaunchWaves](Set-SPOPortalLaunchWaves.md)