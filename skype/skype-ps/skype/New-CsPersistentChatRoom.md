---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsPersistentChatRoom
schema: 2.0.0
---

# New-CsPersistentChatRoom

## SYNOPSIS

Creates a new Persistent Chat chat room.
A chat room is a discussion forum that typically revolves around a specific topic.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatRoom -Category <String> -Name <String> [-Addin <String>] [-Description <String>]
 [-Disabled <Boolean>] [-Invitations <ChatRoomInvitations>] [-PersistentChatPoolFqdn <String>]
 [-Privacy <ChatRoomPrivacy>] [-Type <ChatRoomType>] [<CommonParameters>]
```

## DESCRIPTION

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

The New-CsPersistentChatRoom cmdlet enables administrators to create new Persistent Chat chat rooms.
Note that not all the properties of a chat room are available using the New-CsPersistentChatRoom cmdlet; for example, you cannot assign chat room Managers or Presenters by using this cmdlet.
To assign Managers or Presenters, you must create the chat room, then make those assignments using the Set-CsPersistentChatRoom cmdlet.

Skype for Business Server Control Panel: To create a new Persistent Chat chat room using the Skype for Business Server Control Panel, click Persistent Chat, click Room, and then click New.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsPersistentChatRoom -Name "ITChatRoom" -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"-Category "IT"
```

The command shown in Example 1 creates a new Persistent Chat chat room named ITChatRoom on the pool atl-cs-001.litwareinc.com.
In this example, the chat room is added to the IT category.


## PARAMETERS

### -Category
Category under which the room is to be created; for example:

`-Category "IT"`

Note that the specified category must already exist or the command will fail.
Categories, which are collections of Persistent Chat chat rooms, can be created by using the New-CsPersistentChatCategory cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of the new Persistent Chat chat room.
Names must be unique per Persistent Chat pool.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Addin
Name of the Persistent Chat add-in, if any, associated with the chat room.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
Add-ins can be created by using the New-CsPersistentChatAddin cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional information about the new chat room

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
When present, the new chat room will be disabled and unavailable for use when it is first created.
If this parameter is not used then the new chat room will be enabled and available for immediate use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Invitations
Specifies whether or not Invitations for the new chat room will be inherited from the category.
Among other things, this means that users on the AllowedMembers list will automatically receive an invitation to join a new chat room at the time that new room is created.

```yaml
Type: ChatRoomInvitations
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatPoolFqdn
Fully qualified domain name of the Persistent Chat pool where the new chat room will be located.
For example:

`-PersistentChatPoolFqdn "atl-gc-001.litwareinc.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Privacy
Privacy settings for the new chat room.
Allowed values are:

* Open (any user can locate the chat room by doing a directory search, and anyone can participate in chat room activities)
* Secret (only chat room members can locate the room by doing a directory search, and only members can participate in chat room activities)
* Closed (any user can locate the chat room by doing a directory search, but only members can participate in chat room activities)

```yaml
Type: ChatRoomPrivacy
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Specifies whether the new chat room should be configured as a Normal chat room (where all members can post messages) or an Auditorium (where only presenters can post messages).
For example:

`-Type "Auditorium"`

The default value is Normal.

```yaml
Type: ChatRoomType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPersistentChatRoom cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsPersistentChatRoom cmdlet creates new instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## NOTES

## RELATED LINKS

[Clear-CsPersistentChatRoom](Clear-CsPersistentChatRoom.md)

[Get-CsPersistentChatRoom](Get-CsPersistentChatRoom.md)

[Remove-CsPersistentChatRoom](Remove-CsPersistentChatRoom.md)

[Set-CsPersistentChatRoom](Set-CsPersistentChatRoom.md)


