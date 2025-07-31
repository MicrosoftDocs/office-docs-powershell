---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-cscallinglineidentity
schema: 2.0.0
title: Remove-CsCallingLineIdentity
---

# Remove-CsCallingLineIdentity

## SYNOPSIS
Use the `Remove-CsCallingLineIdentity` cmdlet to remove a Caller ID policy from your organization.

## SYNTAX

```
Remove-CsCallingLineIdentity [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will remove a Caller ID policy from your organization or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```
PS C:\> Remove-CsCallingLineIdentity -Identity Anonymous
```

This example removes a Caller ID policy.

## PARAMETERS

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

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

### -Identity
The Identity parameter identifies the Caller ID policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/get-cscallinglineidentity)

[Grant-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/grant-cscallinglineidentity)

[New-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/new-cscallinglineidentity)

[Set-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/set-cscallinglineidentity)
