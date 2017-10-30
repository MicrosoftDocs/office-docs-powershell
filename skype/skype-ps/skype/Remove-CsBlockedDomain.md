---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsBlockedDomain
schema: 2.0.0
---

# Remove-CsBlockedDomain

## SYNOPSIS
Removes a domain from the list of domains that are blocked for federation.
By definition, your users are not allowed to use Skype for Business Server applications to communicate with people from the blocked domain; for example, users cannot use Skype for Business to exchange instant messages with anyone with a SIP account in a domain that appears on the blocked list.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsBlockedDomain [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications and otherwise communicate with one another by using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider and 3) federation between your organization and a third-party hosting provider.

Setting up direct federation with another organization involves several tasks.
To begin with, you must enable your servers running the Skype for Business Server Access Edge service to allow federation.
In addition, the other organization must enable federation with you; federation cannot be established unless both parties agree to the relationship.

To establish a federated relationship you might also need to manage two federation-related lists: the allowed list and the blocked list.
The allowed list represents the organizations you have chosen to federate with; if a domain appears on the allowed list then (depending on your configuration settings) your users will be able to exchange instant messages and presence information with users who have accounts in that federated domain.
Conversely, the blocked list represents domains that users are expressly forbidden from federating with; for example, messages sent from a blocked domain will automatically be rejected by Skype for Business Server.

Of course, messages are rejected only as long as the domain appears on the blocked list; after a domain has been removed from the list you can then establish a federated relationship with that domain.
To enable federation with a previously-prohibited domain, you must first use the `Remove-CsBlockedDomain` cmdlet to remove that domain from the list of blocked domains.
A domain cannot simultaneously appear on both the allowed and the blocked lists.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsBlockedDomain -Identity fabrikam.com
```

The command shown in Example 1 removes the domain fabrikam.com from the list of blocked domains.
This is done by calling the `Remove-CsBlockedDomain` cmdlet and specifying the domain with the Identity "fabrikam.com".


### -------------------------- Example 2 ------------------------
```
Get-CsBlockedDomain -Filter *fabrikam* | Remove-CsBlockedDomain
```

In Example 2, all the domains that have an Identity that includes the string value "fabrikam" are removed from the list of blocked domains.
To do this, the `Get-CsBlockedDomain` cmdlet and the Filter parameter are first used to return a collection of all the blocked domains that include the string "fabrikam" somewhere in their Identity (for example, fabrikam.com, fabrikam.org, or us.fabrikam.net).
That collection is then piped to the `Remove-CsBlockedDomain` cmdlet, which deletes each item in the collection from the list of blocked domains.


### -------------------------- Example 3 ------------------------
```
Get-CsBlockedDomain | Remove-CsBlockedDomain
```

The command shown in Example 3 completely clears the list of blocked domains.
This is done by first calling the `Get-CsBlockedDomain` cmdlet without any parameters; that results in a returned collection that consists of all the domains currently on the blocked domain list.
That collection is then piped to the `Remove-CsBlockedDomain` cmdlet, which removes each item in the collection from the blocked domain list.
The net result: no domains will be left on the blocked domain list.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the domain to be removed from the blocked list; for example, fabrikam.com.
Note that you cannot use wildcards when specifying a domain Identity.

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
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.BlockedDomain object.
The `Remove-CsBlockedDomain` cmdlet accepts pipelined instances of the blocked domain object.

## OUTPUTS

###  
Deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.BlockedDomain object.

## NOTES

## RELATED LINKS

[Get-CsBlockedDomain](Get-CsBlockedDomain.md)

[New-CsBlockedDomain](New-CsBlockedDomain.md)

[Set-CsAccessEdgeConfiguration](Set-CsAccessEdgeConfiguration.md)

[Set-CsBlockedDomain](Set-CsBlockedDomain.md)
