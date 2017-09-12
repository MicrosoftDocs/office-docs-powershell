---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAllowedDomain

## SYNOPSIS
Modifies property values for a domain (or domains) included on the list of domains approved for federation.
After a domain has been approved for federation (by being added to the allowed list), your users can exchange instant messages and presence information with people who have accounts in the federated domain.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsAllowedDomain [[-Identity] <XdsGlobalRelativeIdentity>] [-Comment <String>]
 [-MarkForMonitoring <Boolean>] [-ProxyFqdn <String>] [-Force] [-WhatIf] [-Confirm]
 [-VerificationLevel <VerificationLevelType>] [<CommonParameters>]
```

### Instance
```
Set-CsAllowedDomain [-Instance <PSObject>] [-Comment <String>] [-MarkForMonitoring <Boolean>]
 [-ProxyFqdn <String>] [-Force] [-WhatIf] [-Confirm] [-VerificationLevel <VerificationLevelType>]
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

The `Set-CsAllowedDomain` cmdlet provides a way for you to modify property values for any domain on the list of allowed domains.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsAllowedDomain -Identity fabrikam.com -Comment "Contact: Ken Myer (kenmyer@fabrikam.com)"
```

The command shown in Example 1 modifies the Comment property for the allowed domain with the Identity "fabrikam.com".
This is done by including the Comment parameter and the appropriate parameter value: "Contact: Ken Myer (kenmyer@fabrikam.com)".


### -------------------------- Example 2 ------------------------
```
Get-CsAllowedDomain -Filter *fabrikam* | Set-CsAllowedDomain -Comment "Contact: Ken Myer (kenmyer@fabrikam.com)"
```

Example 2 modifies the Comment property for all of the allowed domains that have the string value "fabrikam" somewhere in their Identity.
To carry out this task, the command first calls the `Get-CsAllowedDomain` cmdlet and the Filter parameter.
The filter value "*fabrikam*" instructs the `Get-CsAllowedDomain` cmdlet to return any domain where the Identity includes the string value "fabrikam".
(For example, this command returns domains such as fabrikam.com, us.fabrikam.net and fabrikam-users.org).
The filtered collection is then piped to the `Set-CsAllowedDomain` cmdlet, which modifies for Comment property.


### -------------------------- Example 3 ------------------------
```
Get-CsAllowedDomain | Where-Object {$_.Comment -eq $Null} | Set-CsAllowedDomain -Comment "Need contact information."
```

Example 3 adds a generic comment ("Need contact information.") to each domain on the allowed list where the Comment property currently has no value.
To carry out this task, the command first calls the `Get-CsAllowedDomain` cmdlet to retrieve a collection of all the domains on the allowed list.
This collection is then piped to the `Where-Object` cmdlet, which picks out those domains where the Comment property is equal to a null value.
That filtered collection is then piped to the `Set-CsAllowedDomain` cmdlet, which modifies the Comment property for each item in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsAllowedDomain | Where-Object {$_.Comment -eq $Null} | Set-CsAllowedDomain -Comment "Need contact information."
```

Example 4 adds a generic comment ("Need contact information.") to each domain on the allowed list where the Comment property currently has no value.
To carry out this task, the command first calls `Get-CsAllowedDomain` to retrieve a collection of all the domains on the allowed list.
This collection is then piped to `Where-Object`, which picks out those domains where the Comment property is equal to a null value.
That filtered collection is then piped to `Set-CsAllowedDomain`, which modifies the Comment property for each item in the collection.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the allowed domain for which the property values are being modified.
For example:

`-Identity fabrikam.com`

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Comment
Optional string value that provides additional information about the domain being modified.
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

### -MarkForMonitoring
Indicates whether the federation connection between your domain and the remote domain will be monitored by Monitoring Server.
By default, MarkForMonitoring is set to False, meaning that the connection will not be monitored.

This property has been deprecated and should be ignored.


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
Fully qualified domain name (for example, proxy-server.fabrikam.com) of the SIP proxy server deployed in the domain being added to the allowed list.
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
If a verification header is not found in the message it will be added by Skype for Business Server 2015.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowedDomain object.
The `Set-CsAllowedDomain` cmdlet accepts pipelined instances of the allowed domain object.

## OUTPUTS

###  
The `Set-CsAllowedDomain` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowedDomain object.

## NOTES

## RELATED LINKS

[Get-CsAllowedDomain]()

[New-CsAllowedDomain]()

[Remove-CsAllowedDomain]()

[Set-CsAccessEdgeConfiguration]()
