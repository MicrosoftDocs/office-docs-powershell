---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/test-csinboundblockednumberpattern
applicable: Skype for Business Online 
title: Test-CsInboundBlockedNumberPattern
author: tomkau
ms.author: tomkau
ms.reviewer:
manager: bulenteg
schema: 2.0.0 
---

# Test-CsInboundBlockedNumberPattern

## SYNOPSIS
This cmdlet tests the given number against the created (by using New-CsInboundBlockedNumberPattern cmdlet) blocked numbers pattern.

## SYNTAX

```
Test-CsInboundBlockedNumberPattern -PhoneNumber <String> [-TenantId <Guid>] [-FQDN <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet tests the given number against the created (by using New-CsInboundBlockedNumberPattern cmdlet) blocked numbers pattern.

## EXAMPLES

### Example 1
```powershell
PS C:\> Test-CsInboundBlockedNumberPattern -PhoneNumber "321321321"
```

Tests the "321321321" number to check if it will be blocked for inbound calls.

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

### -FQDN
This parameter is reserved for internal Microsoft use.

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

### -PhoneNumber
The phone number to be tested.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -TenantId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### System.String

### System.Guid

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
