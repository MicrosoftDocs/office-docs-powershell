---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/update-csadminrole
schema: 2.0.0
title: Update-CsAdminRole
---

# Update-CsAdminRole

## SYNOPSIS
Updates the role-based access control (RBAC) definitions stored in the Central Management database without affecting any other database tables.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Update-CsAdminRole [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Update-CsAdminRole` cmdlet provides a way for you to update the RBAC role definitions stored in the Central Management database.
This cmdlet is typically used in coexistence/migration.

Skype for Business Server Control Panel: The functions carried out by the `Update-CsAdminRole` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Update-CsAdminRole
```

The command shown in Example 1 updates the RBAC definitions stored in the Central Management database.


## PARAMETERS

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

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

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

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
The Update-CsAdminRole cmdlet does not accept pipelined input.

## OUTPUTS

### None
The Update-CsAdminRole cmdlet does not return any data or objects.

## NOTES

## RELATED LINKS
