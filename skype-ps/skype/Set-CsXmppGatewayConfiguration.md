---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsXmppGatewayConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies the XMPP gateway configuration settings in use in the organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
XMPP gateways enable Microsoft Lync Server 2013 Preview users to exchange instant message and presence information with users from IM and presence providers that employ XMPP.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies the XMPP gateway configuration settings in use in the organization.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
XMPP gateways enable Skype for Business Server 2015 users to exchange instant message and presence information with users from IM and presence providers that employ XMPP.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsXmppGatewayConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-ConnectionLimit <UInt32>]
 [-DialbackPassphrase <String>] [-EnableLoggingAllMessageBodies <Boolean>] [-Force]
 [-KeepAliveInterval <UInt32>] [-PartnerConnectionLimit <UInt32>] [-StreamEstablishmentTimeout <UInt32>]
 [-StreamInactivityTimeout <UInt32>] [-SubscriptionRefreshInterval <UInt32>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsXmppGatewayConfiguration [-Confirm] [-ConnectionLimit <UInt32>] [-DialbackPassphrase <String>]
 [-EnableLoggingAllMessageBodies <Boolean>] [-Force] [-Instance <PSObject>] [-KeepAliveInterval <UInt32>]
 [-PartnerConnectionLimit <UInt32>] [-StreamEstablishmentTimeout <UInt32>] [-StreamInactivityTimeout <UInt32>]
 [-SubscriptionRefreshInterval <UInt32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

The XMPP gateway that enables Lync 2013 Preview to communicate with users on an XMPP network was originally released as an add-on to Microsoft Lync Server 2010; in Lync Server 2013 Preview, this functionality is built into the software.
This means that your users can communicate with XMPP users provided that you:

Configure the XMPP gateway settings.

Configure the other XMPP network (for example, Google Talk) as an allowed XMPP partner.

Note that Lync Server 2013 Preview provides only a single, global set of XMPP configuration settings: you cannot selectively enable or disable XMPP for a given site or a given Registrar pool.
In fact you cannot enable or disable XMPP at all: XMPP is always enabled.
If you do not want users communicating with XMPP networks then you should remove all the allowed XMPP partners.
Users can only communicate with an XMPP network if that network has been configured as an allowed partner.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsXmppGatewayConfiguration"}

Lync Server Control Panel: The functions carried out by the Set-CsXmppGatewayConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

The XMPP gateway that enables Skype for Business to communicate with users on an XMPP network was originally released as an add-on to Microsoft Lync Server 2010; in Skype for Business Server 2015, this functionality is built into the software.
This means that your users can communicate with XMPP users provided that you:

Configure the XMPP gateway settings.

Configure the other XMPP network (for example, Google Talk) as an allowed XMPP partner.

Note that Skype for Business Server 2015 provides only a single, global set of XMPP configuration settings: you cannot selectively enable or disable XMPP for a given site or a given Registrar pool.
In fact you cannot enable or disable XMPP at all: XMPP is always enabled.
If you do not want users communicating with XMPP networks then you should remove all the allowed XMPP partners.
Users can only communicate with an XMPP network if that network has been configured as an allowed partner.

Skype for Business Server Control Panel: The functions carried out by the Set-CsXmppGatewayConfiguration cmdlet are not available in the Skype for Business Server Control Panel



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 modifies the ConnectionLimit property for the global collection of XMPP gateway settings.

Set-CsXmppGatewayConfiguration -Identity "global" -ConnectionLimit 1200

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 modifies the ConnectionLimit property for the global collection of XMPP gateway settings.

Set-CsXmppGatewayConfiguration -Identity "global" -ConnectionLimit 1200

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionLimit
Total number of simultaneous connections allowed for all XMPP partners.
The default value is 1000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialbackPassphrase
Password used when connecting to an XMPP partner over a TCP dialback connection.
With TCP dialback, the partner contacts the XMPP gateway and then hangs up.
The XMPP gateway calls the partner back, and the communication session can then begin.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLoggingAllMessageBodies
**Below Content Applies To:** Lync Server 2013

When set to True, Lync Server 2013 Preview will log the actual content of all instant messages.
For privacy reasons, message content is typically deleted and only information about the communicating endpoints is included in the log files.

The default value is False.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, Skype for Business Server 2015 will log the actual content of all instant messages.
For privacy reasons, message content is typically deleted and only information about the communicating endpoints is included in the log files.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command

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

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the XMPP gateway configuration settings to be modified.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling Set-CsXmppGatewaySettings.
If you prefer, however, you can use the following syntax to reference the global settings:

-Identity global



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the XMPP gateway configuration settings to be modified.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Set-CsXmppGatewayConfiguration cmdlet.
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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -KeepAliveInterval
Maximum amount of time (in seconds) that can elapse before the partner must send a "keep alive" message.
(A keep alive message simply verifies that the connection is still active.) If the time interval expires before a keep alive message is received, the connection will be closed.
The default value is 300 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartnerConnectionLimit
Total number of simultaneous connections allowed for a single XMPP partner.
The default value is 20.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreamEstablishmentTimeout
Maximum amount of time (in seconds) allotted for the XMPP partner to establish an XMPP stream.
If this timeout period is surpassed the connection will automatically be terminated.
The default value is 60 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreamInactivityTimeout
Maximum amount of time (in seconds) that an XMPP stream can be inactive before the connection is automatically terminated.
The default value is 600 seconds (10 minutes).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionRefreshInterval
Maximum amount of time (in seconds) that can elapse before the partner must refresh its presence subscription.
The default value is 28800 seconds (8 hours).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Set-CsXmppGatewaySettings accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppGatewaySettings object.

###  
The Set-CsXmppGatewayConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppGatewaySettings object.

## OUTPUTS

###  
None.
Instead, Set-CsXmppGatewaySettings modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppGatewaySettings object.

###  
None.
Instead, the Set-CsXmppGatewayConfiguration cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppGatewaySettings object.

## NOTES

## RELATED LINKS

[Get-CsXmppGatewayConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/2b90d563-a3fe-45bd-81da-210a7459411b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2b90d563-a3fe-45bd-81da-210a7459411b(OCS.16).aspx)

