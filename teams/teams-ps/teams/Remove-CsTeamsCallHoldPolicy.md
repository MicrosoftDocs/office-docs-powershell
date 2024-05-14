---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamscallholdpolicy
applicable: Microsoft Teams
title: Remove-CsTeamsCallHoldPolicy
schema: 2.0.0
ms.reviewer:
manager: abnair
ms.author: serdars
author: jenstrier
---

# Remove-CsTeamsCallHoldPolicy

## SYNOPSIS

Deletes an existing Teams call hold policy in your tenant. The Teams call hold policy is used to customize the call hold experience for Teams clients.


## SYNTAX

```
Remove-CsTeamsCallHoldPolicy [-Identity] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.

Assigning a Teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsTeamsCallHoldPolicy -Identity 'ContosoPartnerTeamsCallHoldPolicy'
```

The command shown in Example 1 deletes the Teams call hold policy ContosoPartnerTeamsCallHoldPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsCallHoldPolicy -Filter 'Tag:*' | Remove-CsTeamsCallHoldPolicy
```

In Example 2, all the Teams call hold policies configured at the per-user scope are removed.
The Filter value "Tag:*" limits the returned data to Teams call hold policies configured at the per-user scope. Those per-user policies are then removed.

## PARAMETERS

### -Identity
Unique identifier of the Teams call hold policy to be removed.

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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsCallHoldPolicy](New-CsTeamsCallHoldPolicy.md)

[Get-CsTeamsCallHoldPolicy](Get-CsTeamsCallHoldPolicy.md)

[Set-CsTeamsCallHoldPolicy](Set-CsTeamsCallHoldPolicy.md)

[Grant-CsTeamsCallHoldPolicy](Grant-CsTeamsCallHoldPolicy.md)
