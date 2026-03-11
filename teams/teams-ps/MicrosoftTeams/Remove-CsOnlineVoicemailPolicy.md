---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinevoicemailpolicy
schema: 2.0.0
title: Remove-CsOnlineVoicemailPolicy
---

# Remove-CsOnlineVoicemailPolicy

## SYNOPSIS
Deletes an existing Online Voicemail policy or resets the Global policy instance to the default values.

## SYNTAX

```
Remove-CsOnlineVoicemailPolicy [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes an existing Online Voicemail policy or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```
Remove-CsOnlineVoicemailPolicy -Identity "CustomOnlineVoicemailPolicy"
```
The command shown in Example 1 deletes a per-user online voicemail policy CustomOnlineVoicemailPolicy.

## PARAMETERS

### -Confirm

Prompts you for confirmation before executing the command.

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

A unique identifier specifying the scope, and in some cases the name, of the policy.

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

Describes what would happen if you executed the command without actually executing the command.

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

## NOTES
You are not able to delete the pre-configured policy instances Default, TranscriptionProfanityMaskingEnabled and TranscriptionDisabled

## RELATED LINKS
[Get-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinevoicemailpolicy)

[Set-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoicemailpolicy)

[New-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinevoicemailpolicy)

[Grant-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csonlinevoicemailpolicy)
