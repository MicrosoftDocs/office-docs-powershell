---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsAllowedDomain

## SYNOPSIS
Removes a domain from the list of domains approved for federation.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsAllowedDomain [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications and otherwise communicate with one another by using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider and 3) federation between your organization and a third-party hosting provider.

Setting up direct federation with another organization involves several tasks.
To begin with, you must enable your servers running the Skype for Business Server Access Edge service to allow federation.
In addition, the other organization must enable federation with you; federation cannot be established unless both parties agree to the relationship.

To set up a federated relationship you might also need to manage two federation-related lists: the allowed list and the blocked list.
The allowed list represents the organizations you have chosen to federate with.
If a domain appears on the allowed list then (depending on your configuration settings) your users will be able to exchange instant messages and presence information with users who have accounts in that federated domain.
Conversely, the blocked list represents domains that users are expressly forbidden from federating with; for example, messages sent from a blocked domain will automatically be rejected by Skype for Business Server.

If you want to discontinue a federation relationship, you can use the `Remove-CsAllowedDomain` cmdlet to remove the appropriate domain from the list of allowed domains and then, if appropriate, use the `New-CsBlockedDomain` cmdlet to add the domain to the blocked domain list.
Note that a domain cannot simultaneously appear on both the allowed and the blocked lists.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsAllowedDomain -Identity fabrikam.com
```

The command shown in Example 1 removes the domain fabrikam.com from the list of allowed domains.


### -------------------------- Example 2 ------------------------
```
Get-CsAllowedDomain -Filter *fabrikam* | Remove-CsAllowedDomain
```

In Example 2, all of the domains that have the string value "fabrikam" somewhere in their Identity are removed from the list of allowed domains.
To do this, the command first uses the `Get-CsAllowedDomain` cmdlet and the Filter parameter to return a collection of domains that have the string value "fabrikam" somewhere in their Identity (the Identity is the only property you can filter for).
That filtered collection is then piped to the `Remove-CsAllowedDomain` cmdlet, which, in turn, removes all of the items in the filtered collection from the list of allowed domains.


### -------------------------- Example 3 ------------------------
```
Get-CsAllowedDomain | Where-Object {$_.ProxyFqdn -eq $Null} | Remove-CsAllowedDomain
```

Example 3 removes all the domains without an identified proxy server from the list of allowed domains.
To carry out this task, the `Get-CsAllowedDomain` cmdlet is called to return a collection of all the domains currently on the allowed list.
That collection is piped to the `Where-Object` cmdlet, which picks out only those domains where the ProxyFqdn property is equal to a null value.
The filtered collection is then piped to the `Remove-CsAllowedDomain` cmdlet, which removes each domain in the collection from the allowed list.


### -------------------------- Example 4 ------------------------
```
Get-CsAllowedDomain | Where-Object {$_.Comment -match "Ken Myer"} | Remove-CsAllowedDomain
```

In Example 4, all of the domains where the Comment field contains the string value "Ken Myer" are removed from the list of allowed domains.
To do this, the command first uses the `Get-CsAllowedDomain` cmdlet to retrieve a collection of all the domains currently on the allowed domains list.
This collection is then piped to the `Where-Object` cmdlet, which selects only those domains where the Comment property contains the string value "Ken Myer".
This filtered collection is then piped to the `Remove-CsAllowedDomain` cmdlet, which removes each item in the collection from the list of allowed domains.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the domain to be removed from the allowed list; for example, fabrikam.com.
You cannot use wildcards when specifying a domain Identity.

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
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowedDomain object.
The `Remove-CsAllowedDomain` cmdlet accepts pipelined instances of the allowed domain object.

## OUTPUTS

###  
Deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowedDomain object.

## NOTES

## RELATED LINKS

[Get-CsAllowedDomain]()

[New-CsAllowedDomain]()

[Set-CsAccessEdgeConfiguration]()

[Set-CsAllowedDomain]()
