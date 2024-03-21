---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/skype/get-csinboundexemptnumberpattern
applicable: Microsoft Teams, Skype for Business Online
author: jenstrier
ms.author: serdars
ms.reviewer: 
manager:
schema: 2.0.0
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

## INPUTS

## OUTPUTS

## NOTES

You can use Test-CsInboundBlockedNumberPattern to test your call block and exempt phone number ranges.

## RELATED LINKS
[New-CsInboundExemptNumberPattern](New-CsInboundExemptNumberPattern.md)

[Set-CsInboundExemptNumberPattern](Set-CsInboundExemptNumberPattern.md)

[Remove-CsInboundExemptNumberPattern](Remove-CsInboundExemptNumberPattern.md)

[Test-CsInboundBlockedNumberPattern](Test-CsInboundBlockedNumberPattern.md)

[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)
