---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Update-CsAdminRole
schema: 2.0.0
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

### -------------------------- Example 1 --------------------------
```
Update-CsAdminRole
```

The command shown in Example 1 updates the RBAC definitions stored in the Central Management database.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The Update-CsAdminRole cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
The Update-CsAdminRole cmdlet does not return any data or objects.

## NOTES

## RELATED LINKS

