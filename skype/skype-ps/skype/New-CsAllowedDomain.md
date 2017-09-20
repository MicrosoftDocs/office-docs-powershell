---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsAllowedDomain
schema: 2.0.0
---

# New-CsAllowedDomain

## SYNOPSIS

Adds a domain to the list of domains approved for federation.
After a domain has been approved for federation (by being added to the allowed list), your users can exchange instant messages and presence information with people who have accounts in the federated domain.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsAllowedDomain [-Identity] <XdsGlobalRelativeIdentity> [-Comment <String>] [-MarkForMonitoring <Boolean>]
 [-ProxyFqdn <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-VerificationLevel <VerificationLevelType>]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsAllowedDomain [-Comment <String>] -Domain <String> [-MarkForMonitoring <Boolean>] [-ProxyFqdn <String>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm] [-VerificationLevel <VerificationLevelType>] [<CommonParameters>]
```

## DESCRIPTION

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another by using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and 3) federation between your organization and a third-party hosting provider.

Setting up direct federation with another organization involves several tasks.
To begin with, you must enable your servers running the Skype for Business Server Access Edge service to allow federation.
In addition, the other organization must enable federation with you; federation cannot be established unless both parties agree to the relationship.

To establish a federated relationship you might also need to manage two federation-related lists: the allowed list and the blocked list.
The allowed list represents the organizations you have chosen to federate with; if a domain appears on the allowed list then (depending on your configuration settings) your users will be able to exchange instant messages and presence information with users who have accounts in that federated domain.
Conversely, the blocked list represents domains that users are expressly forbidden from federating with; for example, messages sent from a blocked domain will automatically be rejected by Skype for Business Server.

If you want to create a new federation relationship, you can use the New-CsAllowedDomain cmdlet to add a domain to the list of allowed domains.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsAllowedDomain -Identity "fabrikam.com"

```

In Example 1, the domain fabrikam.com is added to the list of allowed domains.
To do this, the New-CsAllowedDomain cmdlet is called, along with the Identity parameter; this parameter is assigned the name of the domain to be added to the allowed list.
Note that this command will fail if fabrikam.com is already on the allowed list or on the blocked list.

### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsAllowedDomain -Identity "fabrikam.com" -ProxyFqdn "proxyserver.fabrikam.com" -MarkForMonitoring $True -Comment "Contact: Ken Myer (kenmyer@fabrikam.com)"

```

Example 2 is a variation of the command shown in Example 1.
In this case, however, two additional parameters are included along with Identity: ProxyFqdn is used to specify the FQDN of the proxy server for fabrikam.com, and MarkForMonitoring is used to add this federation connection to the list of items monitored by Monitoring Server.

### -------------------------- EXAMPLE 3 -------------------------- 
```

$x = New-CsAllowedDomain -Identity "fabrikam.com" -InMemory

$x.ProxyFqdn = "proxyserver.fabrikam.com"

$x.MarkForMonitoring = $True

$x.Comment = "Contact: Ken Myer (kenmyer@fabrikam.com)"

Set-CsAllowedDomain -Instance $x
```

Example 3 demonstrates how you can use the InMemory parameter to create a new allowed domain that initially exists only in memory.
After you modify the property values of this in-memory-only domain, you can then call the Set-CsAllowedDomain cmdlet to add the domain to the allowed list.

In order to do this, the first command in the example uses the New-CsAllowedDomain cmdlet and the InMemory parameter to create an allowed domain that has the Identity fabrikam.com.
After that, the virtual domain is stored in the variable $x.

Lines 2, 3, and 4 are used to modify the values of the ProxyFqdn, MarkForMonitoring, and Comment properties, respectively.
After all of the property values have been modified, the final command uses the Set-CsAllowedDomain cmdlet to add the virtual domain to the allowed domain list.
Keep in mind that, until the Set-CsAllowedDomain cmdlet is called, fabrikam.com exists only in memory: if you run the Get-CsAllowedDomain cmdlet any time prior to the last line in the example, fabrikam.com will not appear on the list of allowed domains.
Fabrikam.com will not show up on the allowed list until after you have called the Set-CsAllowedDomain cmdlet.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the domain to be added to the allowed list; for example, fabrikam.com.
You can use either the Identity or the Domain parameter (but not both) in order to specify the domain name.
If you use Identity, the Domain property will be set to the same value assigned to Identity.
If you use Domain, the Identity property will be set to the same value assigned to Domain.

Note that Identities must be unique: if the specified domain already exists on either the blocked or the allowed list, your command will fail.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
Optional string value that provides additional information about the domain being added to the allowed list.
For example, you might add a Comment that provides contact information for the federated domain.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
FQDN (for example, fabrikam.com) of the domain to be added to the allowed list.
You can use either the Identity or the Domain parameter (but not both) in order to specify the domain name.
If you use Identity, the Domain property will be set to the same value assigned to Identity.
If you use Domain, the Identity property will be set to the same value assigned to Domain.

Note that Domains must be unique: if the specified domain already exists on either the blocked or the allowed list, your command will fail.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkForMonitoring
Indicates whether or not the federation connection between your domain and the remote domain will be monitored by Monitoring Server.
By default, MarkForMonitoring is set to False, meaning that the connection will not be monitored.

This property will be ignored if you have not deployed Monitoring Server.

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

### -ProxyFqdn
FQDN (for example, proxy-server.fabrikam.com) of the SIP proxy server deployed in the domain being added to the allowed list.
This property is optional: if it is not specified then DNS SRV discovery procedures will be used to determine the location of the SIP proxy server.

```yaml
Type: String
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -VerificationLevel
Indicates how (or if) messages sent from a domain are verified to ensure that they were sent from that domain.
The VerificationLevel must be set to one of the following values:

AlwaysVerifiable.
All messages purportedly sent from this domain will be accepted.
If a verification header is not found in the message it will be added by Skype for Business Server.

AlwaysUnverifiable.
All messages purportedly sent from a domain are considered unverified.
They will be delivered only if they were sent from a person who is on the recipient's Contacts list.
For example, if Ken Myer is on your Contacts list you will be able to receive messages from him.
If David Longmire is not on your Contacts list then you will not be able to receive messages from him.
Note that Skype for Business users can manually override this setting, thereby allowing themselves to receive messages people not on their Contacts list.

UseSourceVerification.
Uses the verification header added to the message by the public provider.
If the verification information is missing the message will be rejected.
This is the default value.

```yaml
Type: VerificationLevelType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
The New-CsAllowedDomain cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowedDomain object.

## NOTES

## RELATED LINKS

[Get-CsAllowedDomain]()

[Remove-CsAllowedDomain]()

[Set-CsAccessEdgeConfiguration]()

[Set-CsAllowedDomain]()

