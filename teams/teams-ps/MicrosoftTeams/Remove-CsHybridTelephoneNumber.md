---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-cshybridtelephonenumber
schema: 2.0.0
title: Remove-CsHybridTelephoneNumber
---

# Remove-CsHybridTelephoneNumber

## SYNOPSIS
This cmdlet removes a hybrid telephone number.

## SYNTAX

### Identity (Default)
```powershell
Remove-CsHybridTelephoneNumber -TelephoneNumber <string> [-Force] [-WhatIf] [-Confirm][<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a hybrid telephone number used for Audio Conferencing with Direct Routing for GCC High and DoD clouds.

> [!IMPORTANT]
> This cmdlet is being deprecated. Use the new **New-CsOnlineTelephoneNumberReleaseOrder** cmdlet to remove a telephone number for Audio Conferencing with Direct Routing in Microsoft 365 GCC High and DoD clouds. Detailed instructions on how to use the new cmdlet can be found at [New-CsOnlineTelephoneNumberReleaseOrder](new-csonlinetelephonenumberreleaseorder.md).

## EXAMPLES

### Example 1
```powershell
Remove-CsHybridTelephoneNumber -TelephoneNumber 14025551234
```
This example removes the hybrid phone number +1 (402) 555-1234.

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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -TelephoneNumber

> Applicable: Microsoft Teams

The telephone number to remove. The number should be specified without a prefixed "+". The phone number can't have "tel:" prefixed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

### None

## OUTPUTS

### None

## NOTES

The cmdlet is only available in GCC High and DoD cloud instances.

## RELATED LINKS

[New-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/new-cshybridtelephonenumber)

[Get-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/get-cshybridtelephonenumber)
