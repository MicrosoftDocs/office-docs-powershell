---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/grant-csonlinevoicemailpolicy
applicable: Microsoft Teams, Skype for Business Online
title: Grant-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Grant-CsOnlineVoicemailPolicy

## SYNOPSIS
Assigns an online voice mail policy at the per-user scope. Online voicemail policies manage usages for Voicemail service.

## SYNTAX
### GrantToTenant (Default)
```
Grant-CsOnlineVoicemailPolicy [[-PolicyName] <string>] [-Global] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```
### Identity
```
Grant-CsOnlineVoicemailPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing user-specific online voicemail policy to a user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Grant-CsOnlineVoicemailPolicy -Identity "user@contoso.com" -PolicyName TranscriptionDisabled
```

The command shown in Example 1 assigns the per-user online voicemail policy TranscriptionDisabled to a single user user@contoso.com.

## PARAMETERS

### -PolicyName
A unique identifier(name) of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

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
Applicable: Microsoft Teams, Skype for Business Online

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

## RELATED LINKS
[Get-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/get-csonlinevoicemailpolicy?view=skype-ps)

[Set-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoicemailpolicy?view=skype-ps)

[New-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/new-csonlinevoicemailpolicy?view=skype-ps)

[Remove-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csonlinevoicemailpolicy?view=skype-ps)
