---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsXmppAllowedPartner

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about XMPP partners authorized to communicate with your organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
Allowed partners are IM and presence providers that have been authorized to exchange instant messages and presence information with your Lync Server 2013 Preview users.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about XMPP partners authorized to communicate with your organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
Allowed partners are IM and presence providers that have been authorized to exchange instant messages and presence information with your Skype for Business Server 2015 users.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsXmppAllowedPartner [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsXmppAllowedPartner [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsXmppAllowedPartner"}

Lync Server Control Panel: To view information about your XMPP allowed partners in the Lync Server Control Panel, click External User Access and then click XMPP Federated Partners.

**Below Content Applies To:** Skype for Business Server 2015

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

Skype for Business Server Control Panel: To view information about your XMPP allowed partners in the Skype for Business Server Control Panel, click External User Access and then click XMPP Federated Partners.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the XMPP allowed partners configured for use in the organization.

Get-CsXmppAllowedPartner

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the XMPP allowed partners configured for use in the organization.

Get-CsXmppAllowedPartner

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a single XMPP allowed partner: the partner with the Identity xmpp.contoso.com.

Get-CsXmppAllowedPartner -Identity "xmpp.contoso.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single XMPP allowed partner: the partner with the Identity xmpp.contoso.com.

Get-CsXmppAllowedPartner -Identity "xmpp.contoso.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information for all the XMPP allowed partners that have an Identity that ends in the string value ".org" (for example, xmpp.contoso.org and xmpp.fabrikam.org).

Get-CsXmppAllowedPartner - Filter "*.org"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information for all the XMPP allowed partners that have an Identity that ends in the string value ".org" (for example, xmpp.contoso.org and xmpp.fabrikam.org).

Get-CsXmppAllowedPartner - Filter "*.org"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns information about all the XMPP allowed partners where Simple Authentication and Security Layer negotiation is required.
In order to do this, the command first uses Get-CsXmppAllowedPartner to return information about all the allowed XMPP allowed partners.
The returned partners are then piped to the Where-Object cmdlet, which selects only those partners where the SaslNegotiation property is equal to Required.

Get-CsXmppAllowedPartner | Where-Object {$_.SaslNegotiation -eq "Required"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns information about all the XMPP allowed partners where Simple Authentication and Security Layer negotiation is required.
In order to do this, the command first uses the Get-CsXmppAllowedPartner cmdlet to return information about all the allowed XMPP allowed partners.
The returned partners are then piped to the Where-Object cmdlet, which selects only those partners where the SaslNegotiation property is equal to Required.

Get-CsXmppAllowedPartner | Where-Object {$_.SaslNegotiation -eq "Required"}

## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the Identities of the XMPP allowed partner (or partners) to be returned.
For example the filter value "*.org" returns a collection of all the XMPP allowed partners that have an Identity that ends with the string value ".org".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Fully qualified domain name (FQDN) of the XMPP allowed partner to be returned (for example, fabrikam.com).
If neither this parameter nor the Filter parameter is specified, then all the XMPP partners configured for use in your organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the XMPP allowed partner data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Get-CsXmppAllowedPartner does not accept pipelined input.

###  
None.
The Get-CsXmppAllowedPartner cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsXmppAllowedPartner returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

###  
The Get-CsXmppAllowedPartner cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[New-CsXmppAllowedPartner]()

[Remove-CsXmppAllowedPartner]()

[Set-CsXmppAllowedPartner]()

[Online Version](http://technet.microsoft.com/EN-US/library/6d031b38-325a-4196-998f-c473390f2055(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6d031b38-325a-4196-998f-c473390f2055(OCS.16).aspx)

