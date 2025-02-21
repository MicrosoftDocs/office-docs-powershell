---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamssettingscustomapp
title: Set-CsTeamsSettingsCustomApp
schema: 2.0.0
---

# Set-CsTeamsSettingsCustomApp

## SYNOPSIS
Set the Custom Apps Setting's value of Teams Admin Center.

## SYNTAX

```
Set-CsTeamsSettingsCustomApp -IsSideloadedAppsInteractionEnabled <Boolean>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
There is a switch for managing Custom Apps in the Org-wide App Settings page of Teams Admin Center. The command can set the value of this switch. If the isSideloadedAppsInteractionEnabled is set to true, the switch is enabled. So that the custom apps can be uploaded as app packages and available in the organization's app store, vice versa.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsSettingsCustomApp -isSideloadedAppsInteractionEnabled $True
```

Set the value of Custom Apps Setting to true.

## PARAMETERS

### -IsSideloadedAppsInteractionEnabled
The value to Custom Apps Setting. If the value is true, the custom apps can be uploaded as app packages and available in the organization's app store, vice versa.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

[Get-CsTeamsSettingsCustomApp](https://learn.microsoft.com/powershell/module/teams/get-csteamssettingscustomapp)
