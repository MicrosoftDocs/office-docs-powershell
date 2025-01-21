---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsvoiceapplicationspolicy
schema: 2.0.0
---

# Remove-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS
Deletes an existing Teams voice applications policy.

## SYNTAX

```
Remove-CsTeamsVoiceApplicationsPolicy [-Identity] <String> [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations.

## EXAMPLES

### EXAMPLE 1
```
Remove-CsTeamsVoiceApplicationsPolicy -Identity "SDA-Allow-All"
```
The command shown in Example 1 deletes the Teams voice applications policy SDA-Allow-All.

### EXAMPLE 2
```
Get-CsTeamsVoiceApplicationsPolicy -Filter "tag:*" | Remove-CsTeamsVoiceApplicationsPolicy
```
In Example 2, all Teams voice applications policies configured at the per-user scope are removed. To do this, the command first calls the Get-CsTeamsVoiceApplicationsPolicy cmdlet along with the Filter parameter; the filter value "tag:*" limits the returned data to Teams voice applications policies configured at the per-user scope. Those per-user policies are then piped to and removed by the Remove-CsTeamsVoiceApplicationsPolicy cmdlet.

## PARAMETERS

### -Identity
Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsvoiceapplicationspolicy)

[Grant-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsvoiceapplicationspolicy)

[Set-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsvoiceapplicationspolicy)

[New-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsvoiceapplicationspolicy)
