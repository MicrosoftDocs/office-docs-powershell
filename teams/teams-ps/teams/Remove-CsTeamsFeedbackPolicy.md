---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsfeedbackpolicy
applicable: Microsoft Teams
title: Remove-CsTeamsFeedbackPolicy
schema: 2.0.0
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Remove-CsTeamsFeedbackPolicy

## SYNOPSIS

Use this cmdlet to remove a Teams Feedback policy from the Tenant.

## SYNTAX

```
Remove-CsTeamsFeedbackPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-Force]
```

## DESCRIPTION
Removes a Teams Feedback policy from the Tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsFeedbackPolicy -Identity "New Hire Feedback Policy"
```

In this example, the policy "New Hire Feedback Policy" is being removed.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

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
The identity of the policy to be removed.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use.

```yaml
Type: Object
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

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
