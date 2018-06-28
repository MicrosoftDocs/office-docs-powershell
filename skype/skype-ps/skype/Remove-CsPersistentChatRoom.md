---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPersistentChatRoom
schema: 2.0.0
---

# Remove-CsPersistentChatRoom

## SYNOPSIS
Removes one or more Persistent Chat chat rooms.
A chat room is a discussion forum that typically revolves around a specific topic.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Remove-CsPersistentChatRoom [-Identity] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Remove-CsPersistentChatRoom [-Instance] <ChatRoom> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

The `Remove-CsPersistentChatRoom` cmdlet provides a way for administrators to remove one or more of the Persistent Chat chat rooms that have been configured for use in the organization.

Skype for Business Server Control Panel: To delete an existing Persistent Chat chat room using the Skype for Business Server Control Panel, click Persistent Chat, click Room and then select the room to be deleted.
To delete the room, click Edit and then click Delete.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatRoom -Identity "atl-gc-001.litwareinc.com\RedmondChatRoom"
```

The command shown in Example 1 removes the Persistent Chat chat room RedmondChatRoom.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatRoom | Remove-CsPersistentChatRoom
```

In Example 2, all the Persistent Chat chat rooms in use in the organization are removed.
To do this, the command first calls the `Get-CsPersistentChatRoom` cmdlet without any parameters in order to return a collection of all the available chat rooms.
This collection is then piped to the `Remove-CsPersistentChatRoom` cmdlet, which deletes each room in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatRoom -Privacy "Closed" | Remove-CsPersistentChatRoom
```

Example 3 removes all the "closed" chat rooms.
(A closed chat room means that any user can locate the chat room by doing a directory search, but only members can participate in chat room activities.) To accomplish this task, the command first uses the `Get-CsPersistentChatRoom` cmdlet and the Privacy parameter to return a collection of all the closed chat rooms.
This collection is then piped to the `Remove-CsPersistentChatConfiguration` cmdlet, which deletes each room in the collection.


## PARAMETERS

### -Identity
Unique Identifier for the Persistent Chat chat room being removed.
The Identity for a chat room consists of the Persistent Chat pool where the room has been configured plus the name of the room; for example:

`-Identity "atl-gc-001.litwareinc.com\RedmondChatRoom"`

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: ChatRoom
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsPersistentChatRooms` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPersistentChatRoom` cmdlet deletes existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## NOTES

## RELATED LINKS

[Clear-CsPersistentChatRoom](Clear-CsPersistentChatRoom.md)

[Get-CsPersistentChatRoom](Get-CsPersistentChatRoom.md)

[New-CsPersistentChatRoom](New-CsPersistentChatRoom.md)

[Set-CsPersistentChatRoom](Set-CsPersistentChatRoom.md)

