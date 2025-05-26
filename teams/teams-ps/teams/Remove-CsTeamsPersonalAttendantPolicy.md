---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamspersonalattendantpolicy
applicable: Microsoft Teams
title: Remove-CsTeamsPersonalAttendantPolicy
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# Remove-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Use this cmdlet to remove an existing instance of a Teams Personal Attendant Policy or reset the Global policy instance to the default values.

## SYNTAX

### Identity (Default)
```powershell
Remove-CsTeamsPersonalAttendantPolicy -Identity <string> 
 [-WhatIf] 
 [-Confirm] 
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing Teams Personal Attendant Policy instance or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsPersonalAttendantPolicy -Identity SalesPersonalAttendantPolicy
```

This example removes the Teams Personal Attendant Policy with identity SalesPersonalAttendantPolicy

### Example 2
```powershell
PS C:\> Remove-CsTeamsPersonalAttendantPolicy -Identity Global
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
Position: 0
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

The cmdlet is available in Teams PowerShell module ?.?.? or later.

## RELATED LINKS

[New-CsTeamsPersonalAttendantPolicy](./new-csteamspersonalattendantpolicy.md)

[Get-CsTeamsPersonalAttendantPolicy](./get-csteamspersonalattendantpolicy.md)

[Set-CsTeamsPersonalAttendantPolicy](./set-csteamspersonalattendantpolicy.md)

[Grant-CsTeamsPersonalAttendantPolicy](./grant-csteamspersonalattendantpolicy.md)

