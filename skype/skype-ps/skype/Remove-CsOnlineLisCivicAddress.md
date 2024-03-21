---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/remove-csonlineliscivicaddress
applicable: Microsoft Teams
title: Remove-CsOnlineLisCivicAddress
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Remove-CsOnlineLisCivicAddress

## SYNOPSIS
Use the Remove-CsOnlineLisCivicAddress cmdlet to delete an existing civic address from the Location Information Server (LIS). 

You can't remove a civic address if any of its associated locations are assigned to users or phone numbers.

## SYNTAX

```
Remove-CsOnlineLisCivicAddress -CivicAddressId <guid> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Removes the specified emergency address or addresses.

## EXAMPLES

### Example 1
```powershell
Remove-CsOnlineLisCivicAddress -CivicAddressId ee38d9a5-33dc-4a32-9fb8-f234cedb91ac
```

This example removes the emergency civic address with the specified identification.

### Example 2
```powershell
Get-CsOnlineLisCivicAddress -City Redmond | Remove-CsOnlineLisCivicAddress
```

This example removes all the emergency civic addresses in the city of Redmond.

## PARAMETERS

### -CivicAddressId
Specifies the unique identifier of the civic address to be deleted.
You can find civic address identifiers by using the Get-CsOnlineLisCivicAddress cmdlet.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### This cmdlet accepts pipelined input from the Get-CsOnlineLisCivicAddress cmdlet.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Set-CsOnlineLisCivicAddress](set-csonlineliscivicaddress.md)

[New-CsOnlineLisCivicAddress](new-csonlineliscivicaddress.md)

[Get-CsOnlineLisCivicAddress](get-csonlineliscivicaddress.md)
