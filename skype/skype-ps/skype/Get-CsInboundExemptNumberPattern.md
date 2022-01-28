---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csinboundexemptnumberpattern
applicable: Skype for Business Online and Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Get-CsInboundExemptNumberPattern

## SYNOPSIS
Returns a specific or the full list of all number patterns exempt from call blocking.

## SYNTAX

```
Get-CsInboundExemptNumberPattern [[-Identity] <XdsGlobalRelativeIdentity>] [-Tenant <Guid>] [-Filter <Object>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a specific or all exempt number patterns added to the tenant list for call blocking including Name, Description, Enabled (True/False), and Pattern for each.

## EXAMPLES

### Example 1
```powershell
Get-CsInboundExemptNumberPattern
```
This returns all exempt number patterns.

### Example 2
```powershell
Get-CsInboundExemptNumberPattern -Identity "Exempt1"
```

This returns the exempt number patterns with Identity Exempt1.

## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on specific attributes. The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
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
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

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

[Remove-CsInboundExemptNumberPattern](Remove-CsInboundExemptNumberPattern.md)

[Test-CsInboundBlockedNumberPattern](Test-CsInboundBlockedNumberPattern.md)

[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)

