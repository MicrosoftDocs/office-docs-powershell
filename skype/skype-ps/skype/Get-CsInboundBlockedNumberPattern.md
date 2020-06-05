---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-csinboundblockednumberpattern
applicable: Skype for Business Online 
title: Get-CsInboundBlockedNumberPattern 
author: tomkau
ms.author: tomkau
ms.reviewer:
manager: bulenteg
schema: 2.0.0 
---

# Get-CsInboundBlockedNumberPattern

## SYNOPSIS
Returns a list of all blocked number patterns added to the tenant list.

## SYNTAX

### Identity (Default)
```
Get-CsInboundBlockedNumberPattern [-Tenant <Guid>] [[-Identity] <XdsGlobalRelativeIdentity>]
 [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsInboundBlockedNumberPattern [-Tenant <Guid>] [-Filter <String>] [-LocalStore]
[<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a list of all blocked number patterns added to the tenant list including Name, Description, Enabled (True/False), and Pattern for each.

## EXAMPLES

### Example 1
```powershell
PS C:> Get-CsInboundBlockedNumberPattern
```

In the preceding example, the *Get-CsInboundBlockedNumberPattern* cmdlet is called without any parameters in order to return all the blocked number patterns.

## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on Skype for Business Online-specific attributes. The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the blocked number patterns to return.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
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
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](New-CsInboundBlockedNumberPattern.md)

[Set-CsInboundBlockedNumberPattern](Set-CsInboundBlockedNumberPattern.md)

[Remove-CsInboundBlockedNumberPattern](Remove-CsInboundBlockedNumberPattern.md)
