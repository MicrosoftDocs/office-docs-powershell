---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPersistentChatEndpoint

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new Persistent Chat endpoint.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Microsoft Lync Server 2013 Preview Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new Persistent Chat endpoint.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Skype for Business Server 2015 Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatEndpoint -PersistentChatPoolFqdn <Fqdn> -SipAddress <String> [-Confirm]
 [-DisplayName <String>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the New-CsPersistentChatEndpoint cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsPersistentChatEndpoint"}

Lync Server Control Panel: The functions carried out by the New-CsPersistentChatEndpoint cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the New-CsPersistentChatEndpoint cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.

Skype for Business Server Control Panel: The functions carried out by the New-CsPersistentChatEndpoint cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new Persistent Chat endpoint for the pool atl-pcpool-001.litwareinc.com.
This new endpoint has the SIP address "sip:pce@litwareinc.com" and the display name of "Persistent Chat Endpoint 1".

New-CsPersistentChatEndpoint -SipAddress "sip:pce@litwareinc.com" -PersistentChatPoolFqdn "atl-pcpool-001.litwareinc.com" -DisplayName "Persistent Chat Endpoint 1"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new Persistent Chat endpoint for the pool atl-pcpool-001.litwareinc.com.
This new endpoint has the SIP address "sip:pce@litwareinc.com" and the display name of "Persistent Chat Endpoint 1".

New-CsPersistentChatEndpoint -SipAddress "sip:pce@litwareinc.com" -PersistentChatPoolFqdn "atl-pcpool-001.litwareinc.com" -DisplayName "Persistent Chat Endpoint 1"

## PARAMETERS

### -PersistentChatPoolFqdn
Fully qualified domain name of the Persistent Chat pool that the new endpoint will be associated with.
For example:

-PersistentChatPoolFqdn "atl-pc-001.litwareinc.com"

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
**Below Content Applies To:** Lync Server 2013

Unique identifier that allows the endpoint to communicate with SIP devices such as Microsoft Lync 2013 Preview.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example:

-SipAddress "sip:pcEndpoint1@litwareinc.com"



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier that allows the endpoint to communicate with SIP devices such as Skype for Business.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example:

-SipAddress "sip:pcEndpoint1@litwareinc.com"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Active Directory display name for the new contact object.

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

### -PassThru
Enables you to pass a contact object through the pipeline that represents the new Persistent Chat endpoint.
By default, the New-CsPersistentChatEndpoint cmdlet does not pass objects through the pipeline.

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
None.
New-CsPersistentChatEndpoint does not accept pipelined input.

###  
None.
The New-CsPersistentChatEndpoint cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPersistentChatEndpoint creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

###  
The New-CsPersistentChatEndpoint cmdlet creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatEndpoint]()

[Remove-CsPersistentChatEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/3a3a7acc-3239-4140-8005-ef72ab2f61e1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3a3a7acc-3239-4140-8005-ef72ab2f61e1(OCS.16).aspx)

