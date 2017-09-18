---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsTrustedApplicationComputer

## SYNOPSIS
Adds a computer that hosts trusted applications to an existing pool.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsTrustedApplicationComputer [-Identity] <XdsGlobalRelativeIdentity> -Pool <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
We recommend that the computers that are running trusted applications within a Skype for Business Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
By default, when you create a pool, a computer with the same fully qualified domain name (FQDN) as the pool is also created.
Use this cmdlet to create a new computer and add it to a pool.

The trusted application pool must already exist in order for this cmdlet to succeed.
In addition, you can't add an additional trusted application computer to a pool that contains service roles other than the ExternalServer role.
For example, if the pool also supports Registrar or CentralMgmt roles, the pool can contain only one trusted application computer.
In addition, if you did not specify a computer FQDN for the default computer when you created the pool (by calling the `New-CsTrustedApplicationPool`) cmdlet, the computer will have the same FQDN as the pool and you cannot add another computer.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsTrustedApplicationComputer -Identity Trust1.litwareinc.com -Pool TrustPool.litwareinc.com
```

This example adds a new computer with the FQDN Trust1.litwareinc.com to the pool TrustPool.litwareinc.com.
We use the Identity parameter to specify the FQDN of the new computer and the Pool parameter to specify the FQDN of the pool.
The pool must exist and must be a trusted application pool.
(Note: To create a trusted application pool, call the `New-CsTrustedApplicationPool` cmdlet.)


## PARAMETERS

### -Identity
The FQDN of the computer that hosts the trusted application.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pool
The FQDN of the pool hosting the trusted application computer.
You can find available pools by running the `Get-CsTrustedApplicationPool` cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.Xds.DisplayComputer.

## NOTES

## RELATED LINKS

[Remove-CsTrustedApplicationComputer]()

[Get-CsTrustedApplicationComputer]()

[New-CsTrustedApplicationPool]()

[Get-CsTrustedApplicationPool]()
