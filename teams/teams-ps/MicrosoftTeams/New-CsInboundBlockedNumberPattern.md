---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-csinboundblockednumberpattern
schema: 2.0.0
title: New-CsInboundBlockedNumberPattern
---

# New-CsInboundBlockedNumberPattern

## SYNOPSIS
Adds a blocked number pattern to the tenant list.

## SYNTAX

### Identity (Default)
```
New-CsInboundBlockedNumberPattern [-Identity] <string> -Pattern <string> [-Description <string>] [-Enabled <boolean>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsInboundBlockedNumberPattern -Pattern <string> -Name <string> [-Description <string>] [-Enabled <boolean>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a blocked number pattern to the tenant list. An inbound PSTN call from a number that matches the blocked number pattern will be blocked.

## EXAMPLES

### Example 1
```powershell
PS> New-CsInboundBlockedNumberPattern -Description "Avoid Unwanted Automatic Call" -Name "BlockAutomatic" -Pattern "^\+11234567890"
```

This example adds a blocked number pattern to block inbound calls from +11234567890 number.

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
A friendly description for the blocked number pattern to be created.

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
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the blocked number pattern to be created.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
A displayable name describing the blocked number pattern to be created.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
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

Required: True
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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/get-csinboundblockednumberpattern)

[Set-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/set-csinboundblockednumberpattern)

[Remove-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/remove-csinboundblockednumberpattern)
