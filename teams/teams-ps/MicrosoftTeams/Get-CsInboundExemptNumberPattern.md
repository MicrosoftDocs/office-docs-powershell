---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csinboundexemptnumberpattern
schema: 2.0.0
title: Get-CsInboundExemptNumberPattern
---

# Get-CsInboundExemptNumberPattern

## SYNOPSIS
Returns a specific or the full list of all number patterns exempt from call blocking.

## SYNTAX

### Identity (Default)
```
Get-CsInboundBlockedNumberPattern [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsInboundBlockedNumberPattern [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a specific or all exempt number patterns added to the tenant list for call blocking including Name, Description, Enabled (True/False), and Pattern for each.

## EXAMPLES

### Example 1
```powershell
PS>Get-CsInboundExemptNumberPattern
```
This returns all exempt number patterns.

### Example 2
```powershell
PS>Get-CsInboundExemptNumberPattern -Identity "Exempt1"
```

This returns the exempt number patterns with Identity Exempt1.

### Example 3
```powershell
PS>Get-CsInboundExemptNumberPattern -Filter "Exempt*"
```

This example returns the exempt number patterns with Identity starting with Exempt.

## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on Identity.

```yaml
Type: String
Parameter Sets: (Filter)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the exempt number pattern to be listed.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:

Required: False
Position: 1
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

[Remove-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/remove-csinboundexemptnumberpattern)

[Test-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/test-csinboundblockednumberpattern)

[Get-CsTenantBlockedCallingNumbers](https://learn.microsoft.com/powershell/module/teams/get-cstenantblockedcallingnumbers)
