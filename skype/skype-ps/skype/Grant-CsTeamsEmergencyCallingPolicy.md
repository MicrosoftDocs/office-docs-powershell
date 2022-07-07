---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamsemergencycallingpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsEmergencyCallingPolicy
author: jenstrier
ms.author: jenstr
manager: roykuntz
ms.reviewer: chenc, pthota
schema: 2.0.0
---

# Grant-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTeamsEmergencyCallingPolicy [[-PolicyName] <string>] [-Global] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Grant-CsTeamsCallingPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsEmergencyCallingPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns a Teams Emergency Calling policy to a user. Emergency Calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.

## EXAMPLES

### Example 1
```powershell
PS C:> Grant-CsTeamsEmergencyCallingPolicy -Identity user1 -PolicyName TestECP
```

This example assigns a Teams Emergency Calling policy to a user

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
Indicates the Identity of the user account the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Including this parameter (which does not take a value) displays the user information when the cmdlet completes. Normally there is no output when this cmdlet is run.

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

### -PolicyName
The Identity of the Teams Emergency Calling policy to apply to the user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallingPolicy](New-CsTeamsEmergencyCallingPolicy.md)

[Get-CsTeamsEmergencyCallingPolicy](Get-CsTeamsEmergencyCallingPolicy.md)

[Remove-CsTeamsEmergencyCallingPolicy](Remove-CsTeamsEmergencyCallingPolicy.md)

[Set-CsTeamsEmergencyCallingPolicy](Set-CsTeamsEmergencyCallingPolicy.md)
