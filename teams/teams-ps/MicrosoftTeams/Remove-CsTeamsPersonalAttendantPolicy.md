---
applicable: Microsoft Teams
author: juliiva
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: jomarque
Module Name: MicrosoftTeams
ms.author: juliiva
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamspersonalattendantpolicy
schema: 2.0.0
title: Remove-CsTeamsPersonalAttendantPolicy
---

# Remove-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Use this cmdlet to remove an existing instance of a Teams Personal Attendant Policy or reset the Global policy instance to the default values.

## SYNTAX

```
Remove-CsTeamsPersonalAttendantPolicy -Identity <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing Teams Personal Attendant Policy instance or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```
Remove-CsTeamsPersonalAttendantPolicy -Identity SalesPersonalAttendantPolicy
```

This example removes the Teams Personal Attendant Policy with identity SalesPersonalAttendantPolicy

### Example 2
```
Remove-CsTeamsPersonalAttendantPolicy -Identity Global
```

This example resets the Global Personal Attendant Policy instance to the default values.

## PARAMETERS

### -Identity
 The Identity parameter is the unique identifier of the Teams Personal Attendant Policy instance to remove or reset.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
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

### None

## OUTPUTS

### System.Object

## NOTES

The cmdlet is available in Teams PowerShell module 7.2.1-preview or later.

## RELATED LINKS

[New-CsTeamsPersonalAttendantPolicy](./new-csteamspersonalattendantpolicy.md)

[Get-CsTeamsPersonalAttendantPolicy](./get-csteamspersonalattendantpolicy.md)

[Set-CsTeamsPersonalAttendantPolicy](./set-csteamspersonalattendantpolicy.md)

[Grant-CsTeamsPersonalAttendantPolicy](./grant-csteamspersonalattendantpolicy.md)
