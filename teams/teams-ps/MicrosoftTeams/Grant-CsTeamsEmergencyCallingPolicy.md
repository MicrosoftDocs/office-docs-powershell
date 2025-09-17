---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc, pthota
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsemergencycallingpolicy
schema: 2.0.0
title: Grant-CsTeamsEmergencyCallingPolicy
---

# Grant-CsTeamsEmergencyCallingPolicy

## SYNOPSIS
This cmdlet assigns a Teams Emergency Calling policy.

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
This cmdlet assigns a Teams Emergency Calling policy to a user, a group of users, or to the Global policy instance. Emergency Calling policy is used for the life cycle of emergency calling experience for the security desk and Teams client location experience.

## EXAMPLES

### Example 1
```powershell
Grant-CsTeamsEmergencyCallingPolicy -Identity user1 -PolicyName TestTECP
```

This example assigns the Teams Emergency Calling policy TestTECP to a user

### Example 2
```powershell
Grant-CsTeamsEmergencyCallingPolicy -Global -PolicyName SalesTECP
```

Assigns the Teams Emergency Calling policy called "SalesTECP" to the Global policy instance. This sets the parameters in the Global policy instance to the values found in the SalesTECP instance.

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

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: SwitchParameter
Parameter Sets: (GrantToTenant)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: 0
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
The Identity of the Teams Emergency Calling policy to apply to the user. To remove an existing user level policy assignment, specify PolicyName as $null.

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

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module version 4.5.1-preview or later.

## RELATED LINKS

[New-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsemergencycallingpolicy)

[Get-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsemergencycallingpolicy)

[Remove-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsemergencycallingpolicy)

[Set-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsemergencycallingpolicy)
