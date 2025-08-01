---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamscallingpolicy
schema: 2.0.0
title: Remove-CsTeamsCallingPolicy
---

# Remove-CsTeamsCallingPolicy

## SYNOPSIS

## SYNTAX

```
Remove-CsTeamsCallingPolicy [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
 This cmdlet removes an existing Teams Calling Policy instance or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsCallingPolicy -Identity Sales
```

This example removes the Teams Calling Policy with identity Sales

### Example 2
```powershell
PS C:\> Remove-CsTeamsCallingPolicy -Identity Global
```

This example resets the Global Policy instance to the default values.

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
 The Identity parameter is the unique identifier of the Teams Calling Policy instance to remove or reset.

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

## RELATED LINKS

[Set-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy)

[Get-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamscallingpolicy)

[Grant-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamscallingpolicy)

[New-CsTeamsCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamscallingpolicy)
