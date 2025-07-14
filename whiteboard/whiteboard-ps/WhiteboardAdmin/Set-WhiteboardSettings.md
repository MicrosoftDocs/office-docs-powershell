---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/set-whiteboardsettings
applicable: Microsoft Whiteboard
title: Set-WhiteboardSettings
schema: 2.0.0
author: shwetawagh
ms.author: shwetawagh
ms.reviewer:
---

# Set-WhiteboardSettings

## SYNOPSIS
Get the users Whiteboard settings.

## SYNTAX

```
Set-WhiteboardSettings [-Settings] <PSObject> [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Sets the tenant settings for the Microsoft Whiteboard services.

## EXAMPLES

### EXAMPLE 1

This command sets the tenant settings for the Microsoft Whiteboard services.

```powershell
$settings = Get-WhiteboardSettings
$settings.isEnabledGa = $true
Set-WhiteboardSettings -Settings $settings
```

## PARAMETERS

### -ForceAuthPrompt

Always prompt for authentication. Use to ignore cached credentials.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -Settings

The object to use as Whiteboard Settings. Should be retrieved via
[Get-WhiteboardSettings](Get-WhiteboardSettings.md).

```yaml
Type: System.Management.Automation.PSObject
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```


### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
