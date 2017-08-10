---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsSipDomain

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the SIP domains configured for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the SIP domains configured for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic, and are used when assigning SIP addresses to users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsSipDomain [[-Identity] <XdsGlobalRelativeIdentity>] [<CommonParameters>]
```

### Filter
```
Get-CsSipDomain [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2010), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
This is something you can do by running the New-CsSipDomain cmdlet.

The Get-CsSipDomain cmdlet provides a way for you to return information about the SIP domains authorized for use in your organization.
Get-CsSipDomain also identifies the default SIP domain for your organization; this is the domain that Microsoft Lync Server 2010 will use, by default, if a SIP domain is not specified.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Set-CsSipDomain"}

**Below Content Applies To:** Lync Server 2013

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Microsoft Lync 2013 Preview), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
This is something you can do by running the New-CsSipDomain cmdlet.

The Get-CsSipDomain cmdlet provides a way for you to return information about the SIP domains authorized for use in your organization.
Get-CsSipDomain also identifies the default SIP domain for your organization; this is the domain that Lync Server will use, by default, if a SIP domain is not specified.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSipDomain cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSipDomain"}

**Below Content Applies To:** Skype for Business Server 2015

In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
This is something you can do by running the New-CsSipDomain cmdlet.

The Get-CsSipDomain cmdlet provides a way for you to return information about the SIP domains authorized for use in your organization.
The Get-CsSipDomain cmdlet also identifies the default SIP domain for your organization; this is the domain that Skype for Business Server 2015 will use, by default, if a SIP domain is not specified.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsSipDomain
```

In Example 1, Get-CsSipDomain is called without any parameters; this returns information about all the SIP domains configured for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Get-CsSipDomain is called without any parameters; this returns information about all the SIP domains configured for use in your organization.

Get-CsSipDomain

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Get-CsSipDomain cmdlet is called without any parameters; this returns information about all the SIP domains configured for use in your organization.

Get-CsSipDomain

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsSipDomain -Identity fabrikam.com
```

The command shown in Example 2 returns information for any SIP domain that has the Identity fabrikam.com.
Because SIP domain Identities must be unique, this command will never return more than a single item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns information for any SIP domain that has the Identity fabrikam.com.
Because SIP domain Identities must be unique, this command will never return more than a single item.

Get-CsSipDomain -Identity fabrikam.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns information for any SIP domain that has the Identity fabrikam.com.
Because SIP domain Identities must be unique, this command will never return more than a single item.

Get-CsSipDomain -Identity fabrikam.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsSipDomain -Filter "f*"
```

The preceding command uses Get-CsSipDomain and the Filter parameter to return information about all the SIP domains that have an Identity that begins with the letter "f".
For example: fabrikam.com; fabrikam.org; fabrikam-users.com; and so on.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses Get-CsSipDomain and the Filter parameter to return information about all the SIP domains that have an Identity that begins with the letter "f".
For example: fabrikam.com; fabrikam.org; fabrikam-users.com; and so on.

Get-CsSipDomain -Filter "f*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Get-CsSipDomain cmdlet and the Filter parameter to return information about all the SIP domains that have an Identity that begins with the letter "f".
For example: fabrikam.com; fabrikam.org; fabrikam-users.com; and so on.

Get-CsSipDomain -Filter "f*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsSipDomain | Where-Object {$_.IsDefault -eq $True}
```

The command shown in Example 4 returns information about the default SIP domain.
To do this, Get-CsSipDomain is first called without any parameters in order to return a collection of all the SIP domains configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which selects the one domain where the IsDefault property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns information about the default SIP domain.
To do this, Get-CsSipDomain is first called without any parameters in order to return a collection of all the SIP domains configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which selects the one domain where the IsDefault property is equal to True.

Get-CsSipDomain | Where-Object {$_.IsDefault -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns information about the default SIP domain.
To do this, the Get-CsSipDomain cmdlet is first called without any parameters in order to return a collection of all the SIP domains configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which selects the one domain where the IsDefault property is equal to True.

Get-CsSipDomain | Where-Object {$_.IsDefault -eq $True}

## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the SIP domain to be returned (for example, fabrikam.com).
If neither this parameter nor the Filter parameter is specified, then all the SIP domains authorized for use in your organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the Identities of the SIP domain (or domains) to be returned.
For example the filter value "*.org" returns a collection of all the authorized SIP domains that have an Identity that ends with the string value ".org".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
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
Get-CsSipDomain does not accept pipelined data.

###  
None.
The Get-CsSipDomain cmdlet does not accept pipelined data.

## OUTPUTS

###  
Get-CsSipDomain returns instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

###  
The Get-CsSipDomain cmdlet returns instances of the Microsoft.Rtc.Management.Xds.SipDomain object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8a8def42-7b14-40c3-be5a-57905069b405(OCS.14).aspx)

[New-CsSipDomain]()

[Remove-CsSipDomain]()

[Set-CsSipDomain]()

[Online Version](http://technet.microsoft.com/EN-US/library/8a8def42-7b14-40c3-be5a-57905069b405(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8a8def42-7b14-40c3-be5a-57905069b405(OCS.16).aspx)

