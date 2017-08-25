---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Update-CsAdminRole

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Updates the role-based access control (RBAC) definitions stored in the Central Management database without affecting any other database tables.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Updates the role-based access control (RBAC) definitions stored in the Central Management database without affecting any other database tables.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Update-CsAdminRole [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Update-CsAdminRole cmdlet provides a way for you to update the RBAC role definitions stored in the Central Management database.
This cmdlet is typically used in coexistence/migration scenarios where the Central Management database is currently located in a Microsoft Lync Server 2010 pool.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsAdminRole"}

Lync Server Control Panel: The functions carried out by the Update-CsAdminRole cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Update-CsAdminRole cmdlet provides a way for you to update the RBAC role definitions stored in the Central Management database.
This cmdlet is typically used in coexistence/migration.

Skype for Business Server Control Panel: The functions carried out by the Update-CsAdminRole cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 updates the RBAC definitions stored in the Central Management database.

Update-CsAdminRole

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 updates the RBAC definitions stored in the Central Management database.

Update-CsAdminRole

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Update-CsAdminRole does not accept pipelined input.

###  
None.
The Update-CsAdminRole cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Update-CsAdminRole does not return any data or objects.

###  
None.
The Update-CsAdminRole cmdlet does not return any data or objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/42cc9cc2-c408-4d0c-814a-6c6367cba834(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/42cc9cc2-c408-4d0c-814a-6c6367cba834(OCS.16).aspx)

