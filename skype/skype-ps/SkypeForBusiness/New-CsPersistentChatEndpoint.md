---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-cspersistentchatendpoint
schema: 2.0.0
title: New-CsPersistentChatEndpoint
---

# New-CsPersistentChatEndpoint

## SYNOPSIS

Creates a new Persistent Chat endpoint.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Skype for Business Server Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatEndpoint -PersistentChatPoolFqdn <Fqdn> -SipAddress <String> [-Confirm]
 [-DisplayName <String>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the New-CsPersistentChatEndpoint cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.

Skype for Business Server Control Panel: The functions carried out by the New-CsPersistentChatEndpoint cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### Example 1
```
New-CsPersistentChatEndpoint -SipAddress "sip:pce@litwareinc.com" -PersistentChatPoolFqdn "atl-pcpool-001.litwareinc.com" -DisplayName "Persistent Chat Endpoint 1"
```

The command shown in Example 1 creates a new Persistent Chat endpoint for the pool atl-pcpool-001.litwareinc.com.
This new endpoint has the SIP address "sip:pce@litwareinc.com" and the display name of "Persistent Chat Endpoint 1".



## PARAMETERS

### -DisplayName

> Applicable: Lync Server 2013, Skype for Business Server 2015

Active Directory display name for the new contact object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2013, Skype for Business Server 2015

Enables you to pass a contact object through the pipeline that represents the new Persistent Chat endpoint.
By default, the New-CsPersistentChatEndpoint cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatPoolFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015

Fully qualified domain name of the Persistent Chat pool that the new endpoint will be associated with.
For example:

`-PersistentChatPoolFqdn "atl-pc-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress

> Applicable: Lync Server 2013, Skype for Business Server 2015

Unique identifier that allows the endpoint to communicate with SIP devices such as Skype for Business.
The SIP address must use the sip: prefix as well as a valid SIP domain; for example:

`-SipAddress "sip:pcEndpoint1@litwareinc.com"`



```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None
The New-CsPersistentChatEndpoint cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact
The New-CsPersistentChatEndpoint cmdlet creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatEndpoint](Get-CsPersistentChatEndpoint.md)

[Remove-CsPersistentChatEndpoint](Remove-CsPersistentChatEndpoint.md)
