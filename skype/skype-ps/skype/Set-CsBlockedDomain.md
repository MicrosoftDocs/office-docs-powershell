---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsBlockedDomain
schema: 2.0.0
---

# Set-CsBlockedDomain

## SYNOPSIS
Modifies the Comment property for one or more of the domains included on the list of domains that are blocked for federation.
By definition, your users are not allowed to use Skype for Business Server applications to communicate with people from the blocked domain; for example, users cannot employ Skype for Business to exchange instant messages with anyone with a SIP account in a domain that appears on the blocked list.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsBlockedDomain [[-Identity] <XdsGlobalRelativeIdentity>] [-Comment <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsBlockedDomain [-Instance <PSObject>] [-Comment <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another by using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider and 3) federation between your organization and a third-party hosting provider.

Setting up direct federation with another organization involves several tasks.
To begin with, you must enable your Access Edge servers to allow federation.
In addition, the other organization must enable federation with you; federation cannot be established unless both parties agree to the relationship.

To set up a federated relationship you might also need to manage two federation-related lists: the allowed list and the blocked list.
The allowed list represents the organizations you have chosen to federate with; if a domain appears on the allowed list then (depending on your configuration settings) your users will be able to exchange instant messages and presence information with users who have accounts in that federated domain.
Conversely, the blocked list represents domains that users are expressly forbidden from federating with; for example, messages sent from a blocked domain will automatically be rejected by Skype for Business Server.

The Comment property, the only property of a blocked domain that can be modified, is used to store additional information about a domain on the blocked list (for example, why the domain is being blocked; when the domain can be removed from the blocked list; or who to contact if you would like to have the domain removed from the blocked list).
If you need to change the Comment property for any domain on the list of blocked domains, use the `Set-CsBlockedDomain` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsBlockedDomain -Identity fabrikam.com -Comment "Block this domain pending legal review."
```

The command shown in Example 1 modifies the Comment for the blocked domain with the Identity "fabrikam.com".
In this example, the Comment parameter is included along with the parameter value, "Block this domain pending legal review."


### -------------------------- Example 2 ------------------------
```
Get-CsBlockedDomain | Set-CsBlockedDomain -Comment "Block this domain pending legal review."
```

In Example 2, the Comment property is updated for all the domains included on the blocked domains list.
To do this, the command first calls the `Get-CsBlockedDomain` cmdlet, which returns a collection of all the domains currently on the blocked domain list.
That collection is then piped to the `Set-CsBlockedDomain` cmdlet, which proceeds to modify the Comment property for each domain in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsBlockedDomain | Where-Object {$_.Comment -eq $Null} | Set-CsBlockedDomain -Comment "Block this domain pending legal review."
```

In Example 3, a new comment ("Block this domain pending legal review.") is added to each domain on the blocked list that doesn't already have a value configured for the Comment property.
To carry out this task, the command first uses the `Get-CsBlockedDomain` cmdlet to return a collection of all the domains currently on the blocked list.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those domains where the Comment property is equal to a null value.
The filtered collection is then piped to the `Set-CsBlockedDomain` cmdlet, which assigns the same comment to the Comment property of each domain in the filtered collection.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the blocked domain for which the Comment property is being modified.
For example: fabrikam.com

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Comment
Enables you to provide additional information about the domain being modified.
For example, you might add a Comment that indicates why the domain has been placed on the blocked list.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.BlockedDomain object.
The `Set-CsBlockedDomain` cmdlet accepts pipelined instances of the blocked domain object.

## OUTPUTS

###  
The `Set-CsBlockedDomain` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.BlockedDomain object.

## NOTES

## RELATED LINKS

[Get-CsBlockedDomain](Get-CsBlockedDomain.md)

[New-CsBlockedDomain](New-CsBlockedDomain.md)

[Remove-CsBlockedDomain](Remove-CsBlockedDomain.md)

[Set-CsAccessEdgeConfiguration](Set-CsAccessEdgeConfiguration.md)

