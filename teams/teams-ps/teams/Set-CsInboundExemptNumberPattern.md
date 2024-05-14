---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/teams/set-csinboundexemptnumberpattern
applicable: Microsoft Teams
author: jenstrier
ms.author: serdars
ms.reviewer: 
manager:
schema: 2.0.0
---

# Set-CsInboundExemptNumberPattern

## SYNOPSIS

Modifies one or more parameters of an exempt number pattern in the tenant list.

## SYNTAX

### Identity (Default)
```
Set-CsInboundExemptNumberPattern [[-Identity] <string>] [-Description <string>] [-Enabled <boolean>] [-Pattern <string>]
  [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet modifies one or more parameters of an exempt number pattern in the tenant list.

## EXAMPLES

### EXAMPLE 1

```powershell
PS> Set-CsInboundExemptNumberPattern -Identity "AllowContoso1" -Pattern "^\+?1312555888[2|3]$"
```

Sets the inbound exempt number pattern for AllowContoso1

### EXAMPLE 2

```powershell
PS> Set-CsInboundExemptNumberPattern -Identity "AllowContoso1" -Enabled $False
```

Disables the exempt number pattern from usage in call blocking

## PARAMETERS

### -Description

Sets the description of the number pattern.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
This parameter determines whether the number pattern is enabled for exemption or not.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the exempt number pattern to be changed.

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

### -Pattern

A regular expression that the calling number must match in order to be exempt from blocking. It is best practice to start the regular expression with the hat character and end it with the dollar character. You can use various regular expression test sites on the Internet to validate the expression.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
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

## OUTPUTS

## NOTES

You can use Test-CsInboundBlockedNumberPattern to test your block and exempt phone number ranges.

## RELATED LINKS

[Get-CsInboundExemptNumberPattern](Get-CsInboundExemptNumberPattern.md)

[New-CsInboundExemptNumberPattern](New-CsInboundExemptNumberPattern.md)

[Remove-CsInboundExemptNumberPattern](Remove-CsInboundExemptNumberPattern.md)

[Test-CsInboundBlockedNumberPattern](Test-CsInboundBlockedNumberPattern.md)

[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)
