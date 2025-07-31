---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinetelephonenumber
schema: 2.0.0
title: Remove-CsOnlineTelephoneNumber
---

# Remove-CsOnlineTelephoneNumber

## SYNOPSIS
Use the `Remove-CsOnlineTelephoneNumber` cmdlet to remove one or more unassigned telephone numbers from your tenant.

## SYNTAX

```
Remove-CsOnlineTelephoneNumber -TelephoneNumber <String[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes one or more unassigned telephone numbers from your tenant. If at least one of the telephone numbers is assigned to a user or resource account, the cmdlet will fail and will not remove any of the specified telephone numbers.

## EXAMPLES

### Example 1
```
Remove-CsOnlineTelephoneNumber -TelephoneNumber 14258884567
```
```Output
NumberIdsDeleted NumberIdsDeleteFailed NumberIdsNotOwnedByTenant NumberIdsManagedByServiceDesk
---------------- --------------------- ------------------------- -----------------------------
{14258884567}    {}                    {}                        {}
```

This example removes the specified telephone number from the tenant.

### Example 2
```
[string[]]$tns="+14255551234","+14255551233"
Remove-CsOnlineTelephoneNumber -TelephoneNumber $tns
```
```Output
NumberIdsDeleted NumberIdsDeleteFailed NumberIdsNotOwnedByTenant NumberIdsManagedByServiceDesk
---------------- --------------------- ------------------------- -----------------------------
{14255551234,     {}                    {}                        {}
 14255551233}
```

This example removes the specified list of telephone numbers from the tenant.

## PARAMETERS

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -TelephoneNumber
Specifies the telephone number(s) to remove. The format can be with or without the prefixed +, but needs to include country code etc.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Input types
None

## OUTPUTS

### Output types
None

## NOTES
If one or more of the telephone numbers are assigned to a user or a service, the cmdlet will display an error message and none of the telephone numbers specified will be removed from your tenant.

## RELATED LINKS
[Get-CsOnlineTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumber)
