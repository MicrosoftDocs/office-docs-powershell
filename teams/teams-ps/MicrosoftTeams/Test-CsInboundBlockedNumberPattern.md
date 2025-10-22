---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/test-csinboundblockednumberpattern
title: Test-CsInboundBlockedNumberPattern
---

# Test-CsInboundBlockedNumberPattern

## SYNOPSIS
This cmdlet tests the given number against the created (by using New-CsInboundBlockedNumberPattern cmdlet) blocked numbers pattern.
Cmdlet will return an object with two properties:
- IsMatch: True if the given number matches any of the blocked number patterns, otherwise False
- ResourceAccount: If the matched blocked number pattern has a ResourceAccount assigned, it will return the ResourceAccount Guid, otherwise null.

## SYNTAX

```
Test-CsInboundBlockedNumberPattern -PhoneNumber <String> [-TenantId <Guid>] [-WhatIf]
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

### System.Guid

## OUTPUTS

### System.Object
An object with two properties:
- IsMatch: True if the given number matches any of the blocked number patterns, otherwise False
- ResourceAccount: If the matched blocked number pattern has a ResourceAccount assigned, it will return the ResourceAccount Guid, otherwise null.

#### Example
```json
{
    "IsMatch": true,
    "ResourceAccount": "00000000-0000-0000-0000-000000000000"
}
```

## NOTES

## RELATED LINKS
