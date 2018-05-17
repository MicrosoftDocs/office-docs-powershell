---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Clear-CsPersistentChatRoom
schema: 2.0.0
---

# Clear-CsPersistentChatRoom

## SYNOPSIS
Removes all the content from a Persistent Chat chat room beginning with the oldest item in the room and continuing through the specified end date.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Clear-CsPersistentChatRoom [-Identity] <String> -EndDate <DateTime> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Clear-CsPersistentChatRoom [-Instance] <ChatRoom> -EndDate <DateTime> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

However, there might be times when administrators need to clear a chat room of all (or at least some) of its messages; this might done to free up space in the database or because the chat room is changing its focus.
Regardless, the `Clear-CsPersistentChatRoom` cmdlet provides a way for you to delete all the messages in a chat room or to delete all the message posted during a specified period of time (for example, all the messages posted before August 1, 2018).

NOTE: To remove a more finely-targeted set of messages (for example, all the messages posted by a specific user) use the Remove-CsPersistentChatMessage cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Clear-CsPersistentChatRoom"}`

Skype for Business Server Control Panel: The functions carried out by the `Clear-CsPersistentChatRoom` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Clear-CsPersistentChatRoom -Identity "atl-cs-001.litwareinc.com\ITChatRoom" -EndDate "3/1/2018"
```

The command shown in Example removes all the content from the Persistent Chat chat room ITChatRoom that was added to the room on or before March 1, 2018.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatRoom | Clear-CsPersistentChatRoom -EndDate "3/1/2018" -Confirm:$False
```

In Example 2, content added on or before March 1, 2018 is removed from all the chat rooms in the organization.
To do this, the command first calls the `Get-CsPersistentChatRoom` cmdlet without any parameters in order to return a collection of all the chat rooms in the organization.
That collection is then piped to the `Clear-CsPersistentChatRoom` cmdlet, which removes content added on or before March 1, 2018 from each room in the collection.
Note that, in order to suppress the confirmation prompt which would otherwise appear each time you tried to clear a different chat room, the Confirm parameter is added using this syntax: -Confirm:$False


## PARAMETERS

### -EndDate
Indicates the last date for which content should be removed.
For example, if you specify an EndDate of 3/1/2018 (March 1, 2018 in US English) then all the Persistent Chat content added to the room on or before 3/1/2018 will be deleted.

You must specify an EndDate when running the `Clear-CsPersistentChatRoom` cmdlet.


```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identity of the chat room whose content is to be removed.
For example:

-Identity "atl-cs-001.litwareinc.com\ITChatRoom"

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
If you set the value of this parameter to False then you will not get a confirmation prompt when you run the cmdlet:

-Confirm:$False

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
The `Clear-CsPersistentChatRoom` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.GroupChat.Cmdlets.ChatRoomObject object.

## OUTPUTS

###  
None. Instead, `Clear-CsPersistentChatRoom` modifies existing instances of the Microsoft.Rtc.Management.GroupChat.Cmdlets.ChatRoomObject object.

## NOTES

## RELATED LINKS

[Remove-CsPersistentChatMessage](Remove-CsPersistentChatMessage.md)
