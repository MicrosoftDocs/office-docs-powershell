---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsBlockedDomain
schema: 2.0.0
---

# Get-CsBlockedDomain

## SYNOPSIS
Returns information about the domains that are included on the list of domains blocked for federation.
By definition, your users are not allowed to use Skype for Business Server applications to communicate with people from the blocked domain; for example, users cannot use Skype for Business to exchange instant messages with anyone with a Session Initiation Protocol (SIP) account in a domain on the blocked list.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsBlockedDomain [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsBlockedDomain [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another by using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

Setting up direct federation with another organization involves several tasks.
To begin with, you must configure the Lync Server Access Edge service to allow federation.
In addition, the other organization must enable federation with you; federation cannot be established unless both parties agree to the relationship.

To set up a federated relationship you might also need to manage two federation-related lists: the allowed list and the blocked list.
The allowed list represents the organizations you have chosen to federate with; if a domain appears on the allowed list then (depending on your configuration settings) your users will be able to exchange instant messages and presence information with users who have accounts in that federated domain.
Conversely, the blocked list represents domains that users are expressly forbidden from federating with; for example, messages sent from a blocked domain will automatically be rejected by Skype for Business Server.

The Get-CsBlockedDomain cmdlet enables you to return information about the domains that appear on the blocked domain list.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsBlockedDomain
```

The command shown in Example 1 returns a collection of all the domains included on the blocked domain list.
This is done by calling the Get-CsBlockedDomain cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```

```

In Example 2, the only blocked domain returned is the one with the Identity "fabrikam.com".
Because domains on the blocked list must have unique identities, this command will return, at most, a single item.

### -------------------------- Example 3 --------------------------
```
Get-CsBlockedDomain -Filter *.net
```

Example 3 uses the Filter parameter to return a collection of all the blocked domains that have an identity that ends in the string value ".net".
This sample command returns such domains as northwindtraders.net, contoso.net, and fabrikam.net.

### -------------------------- Example 4 --------------------------
```
Get-CsBlockedDomain | Where-Object {$_.Comment -eq $Null}
```

Example 4 returns a collection of all the domains where the Comment property has no value.
To do this, the command first uses the Get-CsBlockedDomain cmdlet to return a collection of all the domains on the blocked list.
This collection is then piped to the Where-Object cmdlet, which selects only those domains where the Comment property is equal to a null value.

### -------------------------- Example 5 --------------------------
```
Get-CsBlockedDomain | Where-Object {$_.Comment -match "Ken Myer"}
```

In Example 5, all the blocked domains that include the string value "Ken Myer" somewhere in the Comment property are returned.
To carry out this task, the Get-CsBlockedDomain cmdlet is first called in order to return a collection of all the domains on the blocked domains list.
This collection is then piped to the Where-Object cmdlet, which picks out those domains where the Comment property contains the string value "Ken Myer".


## PARAMETERS

### -Identity
Name of the domain to be returned.
Domains are listed on the blocked list by their fully qualified domain name (FQDN); thus the Identity for a given domain will be similar to fabrikam.com or contoso.net.
Note that you cannot use wildcards when specifying a domain Identity.
To use wildcards to return a given domain (or set of domains), use the Filter parameter instead.

If this parameter is not specified, then all the domains on the blocked domain list will be returned.

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
Enables you to use wildcard characters in order to return one or more domains from the list of blocked domains.
To return all the domains that have an Identity that begins with the letter "r" use this syntax: -Filter r*.
To return all the domains that have an Identity that ends with ".net" use this syntax: -Filter "*.net".
To return all the domains that have an Identity that begins with the letter "f" or with the letter "g" use this syntax: -Filter \[fg\]*.

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

### -LocalStore
Retrieves the blocked domain data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Edge.BlockedDomain


## NOTES


## RELATED LINKS

[New-CsBlockedDomain](New-CsBlockedDomain.md)

[Remove-CsBlockedDomain](Remove-CsBlockedDomain.md)

[Set-CsAccessEdgeConfiguration](Set-CsAccessEdgeConfiguration.md)

[Set-CsBlockedDomain](Set-CsBlockedDomain.md)

