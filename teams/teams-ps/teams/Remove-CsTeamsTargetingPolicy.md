---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamstargetingpolicy
schema: 2.0.0
---

# Remove-CsTeamsTargetingPolicy

## SYNOPSIS

The CsTeamsTargetingPolicy cmdlets removes a previously created CsTeamsTargetingPolicy.

## SYNTAX

```powershell
Remove-CsTeamsTargetingPolicy [-Identity] <String> [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

Deletes a previously created TeamsTargetingPolicy. Any users with no explicitly assigned policies will then fall back to the default policy in the organization.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsTeamsMeetingPolicy -Identity StudentTagPolicy
```

In the example shown above, the command will delete the student tag policy from the organization's list of policies and remove all assignments of this policy from users who have had the policy assigned.

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

Unique identifier for the teams meeting policy to be removed. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: -Identity StudentTagPolicy.

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

### -MsftInternalProcessingMode

For Internal use only.

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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamstargetingpolicy)
[Set-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstargetingpolicy)
