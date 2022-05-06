---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamscallingpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsCallingPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Grant-CsTeamsCallingPolicy

## SYNOPSIS

Cmdlet to assign a specific Teams Calling Policy to a user.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsCallingPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsCallingPolicy [[-PolicyName] <string>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Teams Calling Policies designate how users are able to use calling functionality within Microsoft Teams. This cmdlet allows admins to grant user level policies to individual users.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsCallingPolicy -identity user1@contoso.com -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to user1@contoso.com

### Example 2
```powershell
PS C:\> Grant-CsTeamsCallingPolicy -Global -PolicyName SalesCallingPolicy
```

Assigns the TeamsCallingPolicy called "SalesCallingPolicy" to the Global policy instance. This sets the parameters in the Global policy instance to the values found
in the SalesCallingPolicy instance.

## PARAMETERS

### -Identity
The user object to whom the policy is being assigned.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy being assigned.  To remove an existing user level policy assignment, specify PolicyName as $null.

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsCallingPolicy cmdlet does not pass objects through the pipeline.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CsTeamsCallingPolicy](Set-CsTeamsCallingPolicy.md)

[Remove-CsTeamsCallingPolicy](Remove-CsTeamsCallingPolicy.md)

[Get-CsTeamsCallingPolicy](Get-CsTeamsCallingPolicy.md)

[New-CsTeamsCallingPolicy](New-CsTeamsCallingPolicy.md)
