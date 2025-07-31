---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: chenc
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsemergencycallingpolicy
schema: 2.0.0
title: Remove-CsTeamsEmergencyCallingPolicy
---

# Remove-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

```
Remove-CsTeamsEmergencyCallingPolicy [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing Teams Emergency Calling policy.

## EXAMPLES

### Example 1
```powershell
Remove-CsTeamsEmergencyCallingPolicy -Identity testECP
```

This example removes an existing Teams Emergency Calling policy with identity testECP.

### Example 2
```powershell
Remove-CsTeamsEmergencyCallingPolicy -Identity Global
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
 The Identity parameter is the unique identifier of the Teams Emergency Calling policy to remove.

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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsemergencycallingpolicy)

[Grant-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsemergencycallingpolicy)

[Get-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsemergencycallingpolicy)

[Set-CsTeamsEmergencyCallingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsemergencycallingpolicy)
