---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csinboundexemptnumberpattern
applicable: Microsoft Teams
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
schema: 2.0.0
---

# New-CsInboundExemptNumberPattern

## SYNOPSIS

This cmdlet lets you configure a new number pattern that is exempt from tenant call blocking.

## SYNTAX

### Identity (Default)

```powershell
New-CsInboundExemptNumberPattern -Identity <String> -Pattern <String> [-Description <String>] [-Enabled <Boolean>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsInboundExemptNumberPattern -Pattern <string> -Name <string> [-Description <string>] [-Enabled <boolean>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## EXAMPLES

### EXAMPLE 1

```powershell
PS> New-CsInboundExemptNumberPattern -Identity "AllowContoso1" -Pattern "^\+?1312555888[2|3]$" -Description "Allow Contoso helpdesk" -Enabled $True
```

Creates a new inbound exempt number pattern for the numbers 1 (312) 555-88882 and 1 (312) 555-88883 and enables it

## PARAMETERS

### -Description

Sets the description of the number pattern.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
This parameter determines whether the number pattern is enabled for exemption or not.

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
Unique identifier for the exempt number pattern to be created.

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

### -Name
A displayable name describing the exempt number pattern to be created.

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

A regular expression that the calling number must match in order to be exempt from blocking. It is best practice to start the regular expression with the hat character and end it with the dollar character. You can use various regular expression test sites on the Internet to validate the expression.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

You can use Test-CsInboundBlockedNumberPattern to test your block and exempt phone number ranges.

## RELATED LINKS

[Get-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/get-csinboundexemptnumberpattern)

[Set-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/set-csinboundexemptnumberpattern)

[Remove-CsInboundExemptNumberPattern](https://learn.microsoft.com/powershell/module/teams/remove-csinboundexemptnumberpattern)

[Test-CsInboundBlockedNumberPattern](https://learn.microsoft.com/powershell/module/teams/test-csinboundblockednumberpattern)

[Get-CsTenantBlockedCallingNumbers](https://learn.microsoft.com/powershell/module/teams/get-cstenantblockedcallingnumbers)
