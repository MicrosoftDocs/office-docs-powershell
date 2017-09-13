---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsSipDomain

## SYNOPSIS
Removes a SIP domain previously configured for use in your organization.
SIP domains are domains authorized to send and receive SIP traffic and are used when assigning SIP addresses to users.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsSipDomain [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In order to configure SIP addresses for your users (and thus enable them to use SIP-related software such as Skype for Business), you need two pieces of information: a user ID (for example, Ken.Myer) and a SIP domain (for example, litwareinc.com).
The SIP domain used to construct a SIP address must be a domain, located within your Active Directory forest, that is authorized to send and receive SIP traffic.
For example, suppose you have domains named litwareinc.com, fabrikam.com, and contoso.com, but only litwareinc.com has been identified as being a SIP domain.
In that case, you cannot use a SIP address like sip:Ken.Myer@fabrikam.com or sip:Ken.Myer@contoso.com, at least not until fabrikam.com and contoso.com have been configured as valid SIP domains.
This is something you can do by running the `New-CsSipDomain` cmdlet.

After a SIP domain has been authorized, it can be "unauthorized" by using the `Remove-CsSipDomain` cmdlet.
This cmdlet removes the specified domain from the list of approved SIP domains.
Note, however, that you cannot remove the default domain; if you need to do this, you will first have to configure another SIP domain to act as the default domain.
If you only have one SIP domain, that domain will automatically be configured as the default domain and you will not be able to remove it.

In addition, you cannot remove any SIP domain that has one or more SIP addresses assigned to it.
For example, you cannot remove Contoso.com as a SIP domain if Ken Myer has the SIP address "sip:kenmyer@contoso.com".
To remove a SIP domain currently in use, you must first assign new SIP addresses to all the users who have that domain in their SIP address.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsSipDomain -Identity fabrikam.com
```

Example 1 removes the SIP domain with the Identity fabrikam.com from the list of supported domain names.
Note that this command will fail if fabrikam.com is the only SIP domain currently in use in your organization.
That's because your topology must include at least one SIP domain.


### -------------------------- Example 2 ------------------------
```
Get-CsSipDomain | Where-Object {$_.IsDefault -ne $True} | Remove-CsSipDomain
```

The command shown in Example 2 deletes all the SIP domains in your organization except for the default domain.
To do this, the command first calls the `Get-CsSipDomain` cmdlet in order to return a collection of all your SIP domains.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those domains where the IsDefault property is not equal to True.
The net effect: the default domain is filtered out and the remaining domains are then piped to the `Remove-CsSipDomain` cmdlet and deleted.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the SIP domain to be removed: For example:

`-Identity fabrikam.com`


```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.Xds.SipDomain object.
The `Remove-CsSipDomain` cmdlet accepts pipelined instances of the SIP domain object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsSipDomain` cmdlet deletes existing instance of the Microsoft.Rtc.Management.Xds.SipDomain object.

## NOTES

## RELATED LINKS

[Get-CsSipDomain]()

[New-CsSipDomain]()

[Set-CsSipDomain]()
