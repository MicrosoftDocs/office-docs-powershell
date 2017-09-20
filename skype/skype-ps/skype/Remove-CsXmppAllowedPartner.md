---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Remove-CsXmppAllowedPartner
schema: 2.0.0
---

# Remove-CsXmppAllowedPartner

## SYNOPSIS
Removes an existing XMPP allowed partner.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Skype for Business Server users.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsXmppAllowedPartner [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

Skype for Business Server Control Panel: To remove an XMPP allowed partner using the Skype for Business Server Control Panel, click External User Access and then click XMPP Federated Partners.
Select the partner to be removed, click Edit and then click Delete.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsXmppAllowedPartner -Identity "contoso.com"
```

Example 1 deletes the XMPP allowed partner with the Identity "contoso.com".


### -------------------------- Example 2 --------------------------
```
Get-CsXmppAllowedPartner | Remove-CsXmppAllowedPartner
```

The command shown in Example 2 deletes all the XMPP allowed partners.
To carry out this task the command first calls the `Get-CsXmppAllowedPartner` cmdlet to return a collection of all the XMPP allowed partners currently in use in the organization.
This collection is then piped to the `Remove-CsXmppAllowedPartner` cmdlet, which removes each partner in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsXmppAllowedPartner | Where-Object {$_.PartnerType -eq "PublicUnverified"} | Remove-CsXmppAllowedPartner
```

In Example 3, all the XMPP allowed partners with a partner type of PublicUnverified are deleted.
To do this, the command first uses the `Get-CsXmppAllowedPartner` cmdlet to return a collection of all the allowed partners.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those partners where the PartnerType property is equal to "PublicUnverified".
The partners that meet that criterion are then piped to and deleted by, the `Remove-CsXmppAllowedPartner` cmdlet.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the XMPP allowed partner to be deleted.
For example:

`-Identity "fabrikam.com"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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
The `Remove-CsXmppAllowedPartner` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsXmppAllowedPartner` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsXmppAllowedPartner]()

[New-CsXmppAllowedPartner]()

[Set-CsXmppAllowedPartner]()
