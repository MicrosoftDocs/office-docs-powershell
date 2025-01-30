---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csinboundblockednumberpattern
applicable: Microsoft Teams
title: Get-CsInboundBlockedNumberPattern
author: serdarsoysal
ms.author: serdars
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
Get-CsInboundBlockedNumberPattern [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsInboundBlockedNumberPattern [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a list of all blocked number patterns added to the tenant list including Name, Description, Enabled (True/False), and Pattern for each.

## EXAMPLES

### Example 1
```powershell
PS> Get-CsInboundBlockedNumberPattern
```

In this example, the *Get-CsInboundBlockedNumberPattern* cmdlet is called without any parameters in order to return all the blocked number patterns.

### Example 2
```powershell
PS> Get-CsInboundBlockedNumberPattern -Filter Block*
```

In this example, the *Get-CsInboundBlockedNumberPattern* cmdlet will return all the blocked number patterns which identity starts with Block.

## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on the Identity.

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
Type: String
Parameter Sets: Identity
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

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/new-csinboundblockednumberpattern)

[Set-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/set-csinboundblockednumberpattern)

[Remove-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/remove-csinboundblockednumberpattern)
