---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/teams/grant-csonlinevoicemailpolicy
applicable: Microsoft Teams
title: Grant-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Grant-CsOnlineVoicemailPolicy

## SYNOPSIS
Assigns an online voicemail policy to a user account, to a group of users, or set the tenant Global instance. Online voicemail policies manage usages for Voicemail service.

## SYNTAX
### GrantToTenant (Default)
```
Grant-CsOnlineVoicemailPolicy [[-PolicyName] <string>] [-Global] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```
### GrantToGroup
```
Grant-CsOnlineVoicemailPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Grant-CsOnlineVoicemailPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing user-specific online voicemail policy to a user, a group of users, or the Global policy instance.

## EXAMPLES

### Example 1
```
Grant-CsOnlineVoicemailPolicy -Identity "user@contoso.com" -PolicyName TranscriptionDisabled
```

The command shown in Example 1 assigns the per-user online voicemail policy TranscriptionDisabled to a single user user@contoso.com.

### Example 2
```
Grant-CsOnlineVoicemailPolicy -Group sales@contoso.com -Rank 10 -PolicyName TranscriptionDisabled
```

The command shown in Example 2 assigns the online voicemail policy TranscriptionDisabled to the members of the group sales@contoso.com.

## PARAMETERS

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsOnlineVoicemailPolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
A unique identifier(name) of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: 1
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
applicable: Microsoft Teams

Required: True
Position: 0
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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP address or an Object ID.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

## NOTES

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS
[Get-CsOnlineVoicemailPolicy](Get-CsOnlineVoicemailPolicy.md)

[Set-CsOnlineVoicemailPolicy](Set-CsOnlineVoicemailPolicy.md)

[New-CsOnlineVoicemailPolicy](New-CsOnlineVoicemailPolicy.md)

[Remove-CsOnlineVoicemailPolicy](Remove-CsOnlineVoicemailPolicy.md)
