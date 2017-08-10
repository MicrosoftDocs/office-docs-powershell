---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipDomain

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new SIP domain for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new SIP domain for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipDomain [-Identity] <XdsGlobalRelativeIdentity> [-IsDefault <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2010), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain, located within your Active Directory forest, that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipDomain"}

**Below Content Applies To:** Lync Server 2013

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2013 Preview), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain, located within your Active Directory forest, that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipDomain"}

**Below Content Applies To:** Skype for Business Server 2015

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain, located within your Active Directory forest, that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsSipDomain -Identity fabrikam.com
```

The command shown in Example 1 creates a new SIP domain, one that has the Identity fabrikam.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new SIP domain, one that has the Identity fabrikam.com.

New-CsSipDomain -Identity fabrikam.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new SIP domain, one that has the Identity fabrikam.com.

New-CsSipDomain -Identity fabrikam.com

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsSipDomain -Identity fabrikam.com -IsDefault $True
```

The preceding command creates a new SIP domain named fabrikam.com and makes this new domain the default SIP domain.
By making fabrikam.com the default domain, this command also "demotes" the domain that previously served as the default SIP domain.
That's because you can have only one default SIP domain.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 creates a new SIP domain named fabrikam.com and makes this new domain the default SIP domain.
By making fabrikam.com the default domain, this command also "demotes" the domain that previously served as the default SIP domain.
That's because you can have only one default SIP domain.

New-CsSipDomain -Identity fabrikam.com -IsDefault $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 creates a new SIP domain named fabrikam.com and makes this new domain the default SIP domain.
By making fabrikam.com the default domain, this command also "demotes" the domain that previously served as the default SIP domain.
That's because you can have only one default SIP domain.

New-CsSipDomain -Identity fabrikam.com -IsDefault $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) for the new SIP domain.
For example: -Identity fabrikam.com.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) for the new SIP domain.
For example:

-Identity fabrikam.com



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
**Below Content Applies To:** Lync Server 2010

Indicates whether the domain is the default SIP domain, the domain used by Lync Server 2010 any time a domain name is not explicitly stated.
If set to True, the new domain will also become the new default domain

The default value for IsDefault is False.
If you do not want to make the new domain the default domain you can simply leave out the parameter.



**Below Content Applies To:** Lync Server 2013

Indicates whether the domain is the default SIP domain, the domain used by Lync Server any time a domain name is not explicitly stated.
If set to True, the new domain will also become the new default domain

The default value for IsDefault is False.
If you do not want to make the new domain the default domain you can simply leave out the parameter.

If you change the default SIP domain you will need to restart the RTCCAA and RTCCAS services.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether the domain is the default SIP domain, the domain used by Skype for Business Server 2015 any time a domain name is not explicitly stated.
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsSipDomain does not accept pipelined data.

###  
None.
The New-CsSipDomain cmdlet does not accept pipelined data.

## OUTPUTS

###  
New-CsSipDomain creates new instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

###  
The New-CsSipDomain cmdlet creates new instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/385f0f23-397b-4d8d-b9b7-ec942cda4a99(OCS.14).aspx)

[Get-CsSipDomain]()

[Remove-CsSipDomain]()

[Set-CsSipDomain]()

[Online Version](http://technet.microsoft.com/EN-US/library/385f0f23-397b-4d8d-b9b7-ec942cda4a99(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/385f0f23-397b-4d8d-b9b7-ec942cda4a99(OCS.16).aspx)

