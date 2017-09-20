---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Get-CsXmppAllowedPartner
schema: 2.0.0
---

# Get-CsXmppAllowedPartner

## SYNOPSIS
Returns information about XMPP partners authorized to communicate with your organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
Allowed partners are IM and presence providers that have been authorized to exchange instant messages and presence information with your Skype for Business Server users.
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
The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

To view information about your XMPP allowed partners in the Skype for Business Server Control Panel, click External User Access and then click XMPP Federated Partners.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsXmppAllowedPartner
```

The command shown in Example 1 returns information about all the XMPP allowed partners configured for use in the organization.



### -------------------------- Example 2 --------------------------
```
Get-CsXmppAllowedPartner -Identity "xmpp.contoso.com"
```

In Example 2, information is returned for a single XMPP allowed partner: the partner with the Identity xmpp.contoso.com.



### -------------------------- Example 3 --------------------------
```
Get-CsXmppAllowedPartner - Filter "*.org"
```

Example 3 returns information for all the XMPP allowed partners that have an Identity that ends in the string value ".org" (for example, xmpp.contoso.org and xmpp.fabrikam.org).



### -------------------------- Example 4 --------------------------
```
Get-CsXmppAllowedPartner | Where-Object {$_.SaslNegotiation -eq "Required"}
```

The command shown in Example 4 returns information about all the XMPP allowed partners where Simple Authentication and Security Layer negotiation is required.
In order to do this, the command first uses the Get-CsXmppAllowedPartner cmdlet to return information about all the allowed XMPP allowed partners.
The returned partners are then piped to the Where-Object cmdlet, which selects only those partners where the SaslNegotiation property is equal to Required.


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
The Get-CsXmppAllowedPartner cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsXmppAllowedPartner cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[New-CsXmppAllowedPartner]()

[Remove-CsXmppAllowedPartner]()

[Set-CsXmppAllowedPartner]()