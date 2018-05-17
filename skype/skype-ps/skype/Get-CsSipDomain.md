---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsSipDomain
schema: 2.0.0
---

# Get-CsSipDomain

## SYNOPSIS
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
In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain located within your Active Directory forest that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
This is something you can do by running the New-CsSipDomain cmdlet.

The Get-CsSipDomain cmdlet provides a way for you to return information about the SIP domains authorized for use in your organization.
The Get-CsSipDomain cmdlet also identifies the default SIP domain for your organization; this is the domain that Skype for Business Server 2015 will use, by default, if a SIP domain is not specified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsSipDomain
```

In Example 1, the Get-CsSipDomain cmdlet is called without any parameters; this returns information about all the SIP domains configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsSipDomain -Identity fabrikam.com
```

The command shown in Example 2 returns information for any SIP domain that has the Identity fabrikam.com.
Because SIP domain Identities must be unique, this command will never return more than a single item.

### -------------------------- Example 3 --------------------------
```
Get-CsSipDomain -Filter "f*"
```

Example 3 uses the Get-CsSipDomain cmdlet and the Filter parameter to return information about all the SIP domains that have an Identity that begins with the letter "f".
For example: fabrikam.com; fabrikam.org; fabrikam-users.com; and so on.

### -------------------------- Example 4 --------------------------
```
Get-CsSipDomain | Where-Object {$_.IsDefault -eq $True}
```

The command shown in Example 4 returns information about the default SIP domain.
To do this, the Get-CsSipDomain cmdlet is first called without any parameters in order to return a collection of all the SIP domains configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which selects the one domain where the IsDefault property is equal to True.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the SIP domain to be returned (for example, fabrikam.com).
If neither this parameter nor the Filter parameter is specified, then all the SIP domains authorized for use in your organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Xds.SipDomain


## NOTES


## RELATED LINKS

[New-CsSipDomain](New-CsSipDomain.md)

[Remove-CsSipDomain](Remove-CsSipDomain.md)

[Set-CsSipDomain](Set-CsSipDomain.md)

