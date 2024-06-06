---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# New-CsTeamsUpdateManagementPolicy

## SYNOPSIS

Use this cmdlet to create Teams Update Management policy.

## SYNTAX

```
New-CsTeamsUpdateManagementPolicy
 [-DisabledInProductMessages <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Description <String>] [-AllowManagedUpdates <Boolean>] [-AllowPreview <Boolean>] [-UpdateDayOfWeek <Int64>]
 [-UpdateTime <String>] [-UpdateTimeOfDay <DateTime>] [-AllowPublicPreview <String>]
 [-UseNewTeamsClient <String>] [-BlockLegacyAuthorization <Boolean>] [-Identity] <String> [-Force]
 [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Create a Teams Update Management policy.

This cmdlet can be used to create a new policity to manage the visibility of some Teams in-product messages. Executing the cmdlet will suppress the corresponding category of messages from appearing for the specified user group.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsUpdateManagementPolicy -Identity "Campaign Policy" -DisabledInProductMessages @("91382d07-8b89-444c-bbcb-cfe43133af33")
```

Disable the in-product messages with the category "What’s New".

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

### -DisabledInProductMessages
List of IDs of the categories of the in-product messages that will be disabled. You can choose one of the categories from this table:

| ID | Campaign Category |
| -- | -- |
| 91382d07-8b89-444c-bbcb-cfe43133af33 | What’s New |
| edf2633e-9827-44de-b34c-8b8b9717e84c | Conferences |

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppress all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
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

### TeamsUpdateManagementPolicy.Cmdlets.TeamsUpdateManagementPolicy

## NOTES

## RELATED LINKS
