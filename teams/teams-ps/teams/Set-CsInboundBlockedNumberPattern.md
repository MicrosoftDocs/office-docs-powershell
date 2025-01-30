---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csinboundblockednumberpattern
applicable: Microsoft Teams
title: Set-CsInboundBlockedNumberPattern
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager: bulenteg
schema: 2.0.0
---

# Set-CsInboundBlockedNumberPattern

## SYNOPSIS
Modifies one or more parameters of a blocked number pattern in the tenant list.

## SYNTAX

### Identity (Default)
```
Set-CsInboundBlockedNumberPattern [[-Identity] <string>] [-Description <string>] [-Enabled <boolean>] [-Pattern <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies one or more parameters of a blocked number pattern in the tenant list.

## EXAMPLES

### Example 1
```powershell
PS> Set-CsInboundBlockedNumberPattern -Identity "BlockAutomatic" -Pattern "^\+11234567890"
```

This example modifies a blocked number pattern to block inbound calls from +11234567890 number.

## PARAMETERS

### -Description
A friendly description for the blocked number pattern to be modified.

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
If this parameter is set to True, the inbound calls matching the pattern will be blocked.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the blocked number pattern to be modified.

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

### -Pattern
A regular expression that the calling number must match in order to be blocked.

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

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/new-csinboundblockednumberpattern)

[Get-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/get-csinboundblockednumberpattern)

[Remove-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/remove-csinboundblockednumberpattern)
