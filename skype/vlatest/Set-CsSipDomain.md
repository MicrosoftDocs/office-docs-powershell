---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsSipDomain

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to modify property values for the SIP domains in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to modify property values for the SIP domains in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsSipDomain [[-Identity] <XdsGlobalRelativeIdentity>] [-IsDefault <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2010), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.

You must always have one SIP domain configured as the default domain.
The Set-CsSipDomain cmdlet provides a way for you to change your default SIP domain.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSipDomain"}

**Below Content Applies To:** Lync Server 2013

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2013 Preview), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.

You must always have one SIP domain configured as the default domain.
The Set-CsSipDomain cmdlet provides a way for you to change your default SIP domain.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSipDomain"}

**Below Content Applies To:** Skype for Business Server 2015

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
That is something you can do by running the New-CsSipDomain cmdlet.

You must always have one SIP domain configured as the default domain.
The Set-CsSipDomain cmdlet provides a way for you to change your default SIP domain.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsSipDomain -Identity fabrikam.com -IsDefault $True
```

The command shown in Example 1 makes the SIP domain fabrikam.com the default SIP domain; this is done by using the IsDefault parameter and the parameter value $True.
When this command is run, Fabrikam.com will become the default domain, and the domain which previously served as the default will be "demoted." That's because you can have only one default domain.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 makes the SIP domain fabrikam.com the default SIP domain; this is done by using the IsDefault parameter and the parameter value $True.
When this command is run, Fabrikam.com will become the default domain, and the domain which previously served as the default will be "demoted." That's because you can have only one default domain.

Set-CsSipDomain -Identity fabrikam.com -IsDefault $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 makes the SIP domain fabrikam.com the default SIP domain; this is done by using the IsDefault parameter and the parameter value $True.
When this command is run, Fabrikam.com will become the default domain, and the domain which previously served as the default will be "demoted." That's because you can have only one default domain.

Set-CsSipDomain -Identity fabrikam.com -IsDefault $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of the SIP domain to be configured as the default domain.
For example: -Identity fabrikam.com.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of the SIP domain to be configured as the default domain.
For example:

-Identity fabrikam.com



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
**Below Content Applies To:** Lync Server 2010

Indicates whether the domain is the default SIP domain, the domain used by Lync Server 2010 any time a domain name is not explicitly stated.
If set to True, the new domain will become the new default domain.
You cannot set this value to False because that would leave you without a default SIP domain.



**Below Content Applies To:** Lync Server 2013

Indicates whether the domain is the default SIP domain, the domain used by Lync Server any time a domain name is not explicitly stated.
If set to True, the new domain will become the new default domain.
You cannot set this value to False because that would leave you without a default SIP domain.

If you change the default SIP domain you will need to restart the RTCCAA and RTCCAS services.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether the domain is the default SIP domain, the domain used by Skype for Business Server 2015 any time a domain name is not explicitly stated.
If set to True, the new domain will become the new default domain.
You cannot set this value to False because that would leave you without a default SIP domain.

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
Set-CsSipDomain does not accept pipelined data.

###  
None.
The Set-CsSipDomain cmdlet does not accept pipelined data.

## OUTPUTS

###  
Set-CsSipDomain does not return any objects or values.
Instead, the cmdlet is used to modify existing instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

###  
The Set-CsSipDomain cmdlet does not return any objects or values.
Instead, the cmdlet is used to modify existing instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c19aaa3f-04d3-467e-b9d5-d574674eb4a4(OCS.14).aspx)

[Get-CsSipDomain]()

[New-CsSipDomain]()

[Remove-CsSipDomain]()

[Online Version](http://technet.microsoft.com/EN-US/library/c19aaa3f-04d3-467e-b9d5-d574674eb4a4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c19aaa3f-04d3-467e-b9d5-d574674eb4a4(OCS.16).aspx)

