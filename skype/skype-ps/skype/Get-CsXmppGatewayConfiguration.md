---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsXmppGatewayConfiguration

## SYNOPSIS

Returns information about the XMPP gateway configuration settings in use in the organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
XMPP gateways enable Skype for Business Server users to exchange instant message and presence information with users belonging to IM and presence providers that employ XMPP.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsXmppGatewayConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsXmppGatewayConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

The XMPP gateway that enables Skype for Business to communicate with users on an XMPP network was originally released as an add-on to Microsoft Lync Server 2010; in Skype for Business Server, this functionality is built into the software.
This means that your users can communicate with XMPP users provided that you:

Configure the XMPP gateway settings.

Configure the other XMPP network (for example, Google Talk) as an allowed XMPP partner.

Note that Skype for Business Server provides only a single, global set of XMPP configuration settings: you cannot selectively enable or disable XMPP for a given site or a given Registrar pool.
In fact you cannot enable or disable XMPP at all: XMPP is always enabled.
If you do not want users communicating with XMPP networks then you should remove all the allowed XMPP partners.
Users can only communicate with an XMPP network if that network has been configured as an allowed partner.

Skype for Business Server Control Panel: The functions carried out by the Get-CsXmppGatewayConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsXmppGatewayConfiguration
```

In Example 1, information is returned for the XMPP gateway settings currently in use in the organization.
Because Skype for Business Server 2015 only allows for a single, global collection of gateway settings you do not need to include the Identity parameter in order to get back information for the global settings.



## PARAMETERS

### -Filter
Enables you to use wildcard values when referencing a collection of XMPP gateway configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

-Filter "g*"

That syntax brings back all the XMPP gateway configuration settings that have an Identity that begins with the letter "g".

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

Unique identifier for the XMPP gateway configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsXmppGatewayConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

-Identity global



```yaml
Type: XdsIdentity
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
Retrieves the XMPP gateway data from the local replica of the Central Management store rather than from the Central Management store itself.

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
The Get-CsXmppGatewayConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsXmppGatewayConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppGatewaySettings object.

## NOTES

## RELATED LINKS

[Set-CsXmppGatewayConfiguration]()