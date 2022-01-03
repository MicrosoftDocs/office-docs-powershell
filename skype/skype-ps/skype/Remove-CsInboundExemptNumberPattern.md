---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/remove-csinboundexemptnumberpattern
applicable: Skype for Business Online and Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Remove-CsInboundExemptNumberPattern

## SYNOPSIS
Removes a number pattern exempt from call blocking.

## SYNTAX

```
Remove-CsInboundExemptNumberPattern -Identity <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a specific exempt number pattern from the tenant list for call blocking

## EXAMPLES

### Example 1
```powershell
Remove-CsInboundExemptNumberPattern -Identity "Exempt1"
```

This removes the exempt number patterns with Identity Exempt1.

## PARAMETERS

### -Identity
Unique identifier for the exempt number pattern to be listed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

You can use Test-CsInboundBlockedNumberPattern to test your call block and exempt phone number ranges.

## RELATED LINKS
[New-CsInboundExemptNumberPattern](New-CsInboundExemptNumberPattern.md)

[Set-CsInboundExemptNumberPattern](Set-CsInboundExemptNumberPattern.md)

[Get-CsInboundExemptNumberPattern](Get-CsInboundExemptNumberPattern.md)

[Test-CsInboundBlockedNumberPattern](Test-CsInboundBlockedNumberPattern.md)

[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)
