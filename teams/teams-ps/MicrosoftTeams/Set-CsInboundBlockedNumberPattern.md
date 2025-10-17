---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csinboundblockednumberpattern
schema: 2.0.0
title: Set-CsInboundBlockedNumberPattern
---

# Set-CsInboundBlockedNumberPattern

## SYNOPSIS
Modifies one or more parameters of a blocked number pattern in the tenant list.

## SYNTAX

### Identity (Default)
```
Set-CsInboundBlockedNumberPattern [[-Identity] <string>] [-Description <string>] [-Enabled <boolean>] [-Pattern <string>] [-ResourceAccount <guid>]
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

### Example 2
```powershell
PS> Set-CsInboundBlockedNumberPattern -Identity "BlockAutomatic" -ResourceAccount "d290f1ee-6c54-4b01-90e6-d701748f0851"
```

This example modifies a blocked number pattern to redirect inbound calls from its pattern number to the specified resource account instead of blocking it.

## PARAMETERS

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

### -ResourceAccount
The GUID of a resource account to redirect calls to when the pattern matches. If specified, matched calls will be redirected to this resource account instead of being blocked.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/microsoftteams/new-csinboundblockednumberpattern)

[Get-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/microsoftteams/get-csinboundblockednumberpattern)

[Remove-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csinboundblockednumberpattern)
