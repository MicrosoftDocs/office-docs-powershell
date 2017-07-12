---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsXmppAllowedPartner

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes an existing XMPP allowed partner.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Lync Server 2013 Preview users.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing XMPP allowed partner.
The extensible Messaging and Presence Protocol (XMPP) is an open-standard communications protocol for exchanging messages using XML.
An allowed partner is an IM and presence provider whose users are allowed to exchange instant messages and presence information with your Skype for Business Server 2015 users.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsXmppAllowedPartner [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsXmppAllowedPartner"}

Lync Server Control Panel: To remove an XMPP allowed partner using the Lync Server Control Panel, click External User Access and then click XMPP Federated Partners.
Select the partner to be removed, click Edit, and then click Delete.

**Below Content Applies To:** Skype for Business Server 2015

The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.

In order for your users to be able to exchange instant messages and presence information with users on an XMPP network, that network must be configured as an XMPP allowed partner.
(You must also assign your users an external access policy that allows XMPP access.) By design, your users will be allowed to communicate with users on any XMPP network that is listed on the allowed partners list.
If you do not want users communicating with users from a given network then you must delete that network from the allowed partners list.

Skype for Business Server Control Panel: To remove an XMPP allowed partner using the Skype for Business Server Control Panel, click External User Access and then click XMPP Federated Partners.
Select the partner to be removed, click Edit, and then click Delete.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the XMPP allowed partner with the Identity "contoso.com".

Remove-CsXmppAllowedPartner -Identity "contoso.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the XMPP allowed partner with the Identity "contoso.com".

Remove-CsXmppAllowedPartner -Identity "contoso.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 deletes all the XMPP allowed partners.
To carry out this task the command first calls Get-CsXmppAllowedPartner to return a collection of all the XMPP allowed partners currently in use in the organization.
This collection is then piped to Remove-CsXmppAllowedPartner, which removes each partner in the collection.

Get-CsXmppAllowedPartner | Remove-CsXmppAllowedPartner

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 deletes all the XMPP allowed partners.
To carry out this task the command first calls the Get-CsXmppAllowedPartner cmdlet to return a collection of all the XMPP allowed partners currently in use in the organization.
This collection is then piped to the Remove-CsXmppAllowedPartner cmdlet, which removes each partner in the collection.

Get-CsXmppAllowedPartner | Remove-CsXmppAllowedPartner

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the XMPP allowed partners with a partner type of PublicUnverified are deleted.
To do this, the command first uses the Get-CsXmppAllowedPartner cmdlet to return a collection of all the allowed partners.
This collection is then piped to the Where-Object cmdlet, which picks out only those partners where the PartnerType property is equal to "PublicUnverified".
The partners that meet that criterion are then piped to, and deleted by, the Remove-CsXmppAllowedPartner cmdlet.

Get-CsXmppAllowedPartner | Where-Object {$_.PartnerType -eq "PublicUnverified"} | Remove-CsXmppAllowedPartner

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the XMPP allowed partners with a partner type of PublicUnverified are deleted.
To do this, the command first uses the Get-CsXmppAllowedPartner cmdlet to return a collection of all the allowed partners.
This collection is then piped to the Where-Object cmdlet, which picks out only those partners where the PartnerType property is equal to "PublicUnverified".
The partners that meet that criterion are then piped to, and deleted by, the Remove-CsXmppAllowedPartner cmdlet.

Get-CsXmppAllowedPartner | Where-Object {$_.PartnerType -eq "PublicUnverified"} | Remove-CsXmppAllowedPartner

## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the XMPP allowed partner to be deleted.
For example:

-Identity "fabrikam.com"

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
Remove-CsXmppAllowedPartner accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

###  
The Remove-CsXmppAllowedPartner cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## OUTPUTS

###  
None.
Instead, Remove-CsXmppAllowedPartner deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

###  
None.
Instead, the Remove-CsXmppAllowedPartner cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.XmppFederation.XmppAllowedPartner#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsXmppAllowedPartner]()

[New-CsXmppAllowedPartner]()

[Set-CsXmppAllowedPartner]()

[Online Version](http://technet.microsoft.com/EN-US/library/858a07a3-891e-4678-b989-6339b0978427(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/858a07a3-891e-4678-b989-6339b0978427(OCS.16).aspx)

