---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/remove-csinboundblockednumberpattern
applicable: Skype for Business Online 
title: Remove-CsInboundBlockedNumberPattern 
author: tomkau
ms.author: tomkau
ms.reviewer:
manager: bulenteg
schema: 2.0.0 
---

# Remove-CsInboundBlockedNumberPattern

## SYNOPSIS
Removes a blocked number pattern from the tenant list.

## SYNTAX

```
Remove-CsInboundBlockedNumberPattern [-Tenant <System.Guid>] [-Identity] <XdsGlobalRelativeIdentity> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a blocked number pattern from the tenant list.

## EXAMPLES

### Example 1
```powershell
PS C:> Remove-CsInboundBlockedNumberPattern -Identity "BlockAutomatic"
```

This example removes a blocked number pattern identified as "BlockAutomatic".

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

### -Force
The *Force* switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the *Force* switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity
A unique identifier specifying the blocked number pattern to be removed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](New-CsInboundBlockedNumberPattern.md)

[Set-CsInboundBlockedNumberPattern](Set-CsInboundBlockedNumberPattern.md)

[Get-CsInboundBlockedNumberPattern](Get-CsInboundBlockedNumberPattern.md)
