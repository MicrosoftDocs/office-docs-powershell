---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamssettingscustomapp
schema: 2.0.0
title: Get-CsTeamsSettingsCustomApp
---

# Get-CsTeamsSettingsCustomApp

## SYNOPSIS
Get the Custom Apps Setting's value of Teams Admin Center.

## SYNTAX

```
Get-CsTeamsSettingsCustomApp [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
There is a switch for managing Custom Apps in the Org-wide app settings page of Teams Admin Center. The command can get the current value of this switch. If the switch is enabled, the custom apps can be uploaded as app packages and available in the organization's app store, vice versa.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsSettingsCustomApp

IsSideloadedAppsInteractionEnabled
----------------------------------
                             False
```

Get the value of Custom Apps Setting. The value in the example is False, so custom apps are unavailable in the organization's app store.

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
[Set-CsTeamsSettingsCustomApp](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp)
