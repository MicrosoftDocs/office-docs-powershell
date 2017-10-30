---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsSipDomain
schema: 2.0.0
---

# New-CsSipDomain

## SYNOPSIS

Creates a new SIP domain for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipDomain [-Identity] <XdsGlobalRelativeIdentity> [-IsDefault <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain, located within your Active Directory forest, that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsSipDomain -Identity fabrikam.com
```

The command shown in Example 1 creates a new SIP domain, one that has the Identity fabrikam.com.


### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsSipDomain -Identity fabrikam.com -IsDefault $True
```

Example 2 creates a new SIP domain named fabrikam.com and makes this new domain the default SIP domain.
By making fabrikam.com the default domain, this command also "demotes" the domain that previously served as the default SIP domain.
That's because you can have only one default SIP domain.


## PARAMETERS

### -Identity

Fully qualified domain name (FQDN) for the new SIP domain.
For example:

`-Identity fabrikam.com`



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

### -IsDefault

Indicates whether the domain is the default SIP domain, the domain used by Skype for Business Server any time a domain name is not explicitly stated.
If set to True, the new domain will also become the new default domain

The default value for IsDefault is False.
If you do not want to make the new domain the default domain you can simply leave out the parameter.

If you change the default SIP domain you will need to restart the RTCCAA and RTCCAS services.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsSipDomain cmdlet does not accept pipelined data.

## OUTPUTS


###  
The New-CsSipDomain cmdlet creates new instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

## NOTES

## RELATED LINKS

[Get-CsSipDomain](Get-CsSipDomain.md)

[Remove-CsSipDomain](Remove-CsSipDomain.md)

[Set-CsSipDomain](Set-CsSipDomain.md)

