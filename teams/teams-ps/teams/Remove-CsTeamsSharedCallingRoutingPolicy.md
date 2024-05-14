---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamssharedcallingroutingpolicy
applicable: Microsoft Teams
author: jenstrier
ms.author: serdars
ms.reviewer: 
manager:
schema: 2.0.0
---

# Remove-CsTeamsSharedCallingRoutingPolicy

## SYNOPSIS
Deletes an existing Teams shared calling routing policy instance.

## SYNTAX

```
Remove-CsTeamsSharedCallingRoutingPolicy [-Identity] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsSharedCallingRoutingPolicy is used to configure shared calling.

## EXAMPLES

### EXAMPLE 1
```
Remove-CsTeamsSharedCallingRoutingPolicy -Identity "Seattle"
```
The command shown in Example 1 deletes the Teams shared calling routing policy instance Seattle.

### EXAMPLE 2
```
Get-CsTeamsSharedCallingRoutingPolicy -Filter "tag:*" | Remove-CsTeamsSharedCallingRoutingPolicy
```
In Example 2, all Teams shared calling routing policies configured at the per-user scope are removed. To do this, the command first
calls the Get-CsTeamsSharedCallingRoutingPolicy cmdlet along with the Filter parameter; the filter value "tag:*" limits the
returned data to Teams shared calling routing policies configured at the per-user scope. Those per-user policies are then piped to
and removed by the Remove-CsTeamsSharedCallingRoutingPolicy cmdlet.

## PARAMETERS

### -Identity
Unique identifier assigned to the policy when it is created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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

## OUTPUTS

## NOTES
This cmdlet was introduced in Teams PowerShell Module 5.5.0.

## RELATED LINKS
[Get-CsTeamsSharedCallingRoutingPolicy](Get-CsTeamsSharedCallingRoutingPolicy.md)

[Grant-CsTeamsSharedCallingRoutingPolicy](Grant-CsTeamsSharedCallingRoutingPolicy.md)

[Set-CsTeamsSharedCallingRoutingPolicy](Set-CsTeamsSharedCallingRoutingPolicy.md)

[New-CsTeamsSharedCallingRoutingPolicy](New-CsTeamsSharedCallingRoutingPolicy.md)
