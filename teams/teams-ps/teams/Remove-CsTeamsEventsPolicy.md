---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamseventspolicy
schema: 2.0.0
---

# Remove-CsTeamsEventsPolicy

## SYNOPSIS
The CsTeamsEventsPolicy cmdlets removes a previously created TeamsEventsPolicy. Note that this policy is currently still in preview.

## SYNTAX

```
Remove-CsTeamsEventsPolicy [-Identity] <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsEventsPolicy. Any users with no explicitly assigned policies will then fall back to the default policy in the organization. You cannot delete the global policy from the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsEventsPolicy -Identity DisablePublicWebinars
```

In this example, the command will delete the DisablePublicWebinars policy from the organization's list of policies.

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

### -Identity
Unique identifier for the teams events policy to be removed. To remove the global policy, use this syntax: -Identity Global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy DisablePublicWebinars, use this syntax: -Identity DisablePublicWebinars.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
