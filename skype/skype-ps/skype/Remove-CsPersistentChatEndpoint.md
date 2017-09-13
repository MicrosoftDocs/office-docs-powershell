---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPersistentChatEndpoint

## SYNOPSIS
Removes an existing Persistent Chat endpoint.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Skype for Business Server Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsPersistentChatEndpoint [-Identity] <UserIdParameter> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the `New-CsPersistentChatEndpoint` cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.
These endpoints can later be removed by using the `Remove-CsPersistentChatEndpoint` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsPersistentChatEndpoint` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatEndpoint -Identity "sip:pce@litwareinc.com"
```

The command shown in Example 1 deletes the Persistent Chat endpoint that has the Identity "sip:pce@litwareinc.com".
In this example, the SIP address is used for the Identity


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatEndpoint -PersistentChatPoolFqdn "atl-pcpool-001.litwareinc.com" | Remove-CsPersistentChatEndpoint
```

Example 2 deletes all the Persistent Chat endpoints configured for the pool `atl-pcpool-001.litwareinc.com`.
To carry out this task, the command first uses the `Get-CsPersistentChatEndpoint` cmdlet and the PoolFqdn parameter to return all the endpoints for the pool `atl-pcpool-001.litwareinc.com`.
The endpoints in that collection are then piped to and removed by, the `Remove-CsPersistentChatEndpoint` cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatEndpoint | Remove-CsPersistentChatEndpoint
```

The command shown in Example 3 deletes all the Persistent Chat endpoints configured for use in the organization.
To do this, the command first calls the `Get-CsPersistentChatEndpoint` cmdlet to return a collection of all the Persistent Chat endpoints.
This collection is then piped to the `Remove-CsPersistentChatEndpoint` cmdlet, which deletes each endpoint in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Persistent Chat endpoint to be removed.
Endpoint Identities are typically specified using the endpoint's SIP address or display name; for example:

`-Identity "sip:pcEndpoint1@litwareinc.com"`

However, you can also use the full Identity of the endpoint; for example:

`-Identity "CN={33e5014b-dcba-46b5-9bf7-48f4d5fca69d}, CN=Application Contacts,CN=RTC Service,CN=Services,CN=Configuration,DC=litwareinc,DC=com"`

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
The `Remove-CsPersistentChatEndpoint` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

## OUTPUTS

###  
None.
The `Remove-CsPersistentChatEndpoint` cmdlet does not return objects or data.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatEndpoint]()

[New-CsPersistentChatEndpoint]()
