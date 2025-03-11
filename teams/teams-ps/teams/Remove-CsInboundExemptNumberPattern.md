---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csinboundexemptnumberpattern
applicable: Microsoft Teams
title: Remove-CsInboundExemptNumberPattern
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# Remove-CsInboundExemptNumberPattern

## SYNOPSIS
Removes a number pattern exempt from call blocking.

## SYNTAX

```
Remove-CsInboundExemptNumberPattern [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a specific exempt number pattern from the tenant list for call blocking.

## EXAMPLES

### Example 1
```powershell
PS>Remove-CsInboundExemptNumberPattern -Identity "Exempt1"
```

This removes the exempt number patterns with Identity Exempt1.

## PARAMETERS

### -Identity
Unique identifier for the exempt number pattern to be listed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
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

## OUTPUTS

## NOTES

You can use Test-CsInboundBlockedNumberPattern to test your call block and exempt phone number ranges.

## RELATED LINKS
[New-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/new-csinboundexemptnumberpattern)

[Set-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/set-csinboundexemptnumberpattern)

[Get-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/get-csinboundexemptnumberpattern)

[Test-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/test-csinboundblockednumberpattern)

[Get-CsTenantBlockedCallingNumbers](https://learn.microsoft.com/powershell/module/teams/get-cstenantblockedcallingnumbers)
