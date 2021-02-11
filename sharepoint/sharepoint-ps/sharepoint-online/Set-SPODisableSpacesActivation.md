---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spodisablespacesactivation
applicable: SharePoint Online
title: Set-SPODisableSpacesActivation
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPODisableSpacesActivation

## SYNOPSIS
Disables the SharePoint Spaces activation.

## SYNTAX

```
Set-SPODisableSpacesActivation [-Disable] <Boolean> [-Scope] <String> [[-Identity] <SpoSitePipeBind>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Disables the SharePoint Spaces activation either at Tenant level or Site level.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-SPODisableSpacesActivation -Scope Tenant -Disable:$true
```

This example disables the SharePoint Spaces activation at Tenant level.

### Example 2
```powershell
PS C:\> Set-SPODisableSpacesActivation -Disable:$true -Identity https://contoso.sharepoint.com/sites/Marketing -Scope Site
```

This example disables the SharePoint Spaces activation for a site.


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

### -Disable
Set True to disable SharePoint Spaces activation, set to False to enable.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the URL of the site collection to update.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Scope
Specifies the scope.

Possible values:
- Tenant
- Site

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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

### Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
