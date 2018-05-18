---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsPersistentChatCategory
schema: 2.0.0
---

# New-CsPersistentChatCategory

## SYNOPSIS

Creates a new Persistent Chat category.
A Persistent Chat category represents a collection of Persistent Chat chat rooms.
Each chat room must be associated with a category.
Note that you cannot assign chat rooms to a category when you create that category.
Instead, existing rooms must later be assigned to a category by using the Set-CsPersistentChatRoom cmdlet.
However, new chat rooms can be assigned to the category at the same time the room is created.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatCategory -Name <String> [-Description <String>] [-EnableFileUpload] [-EnableInvitations]
 [-PersistentChatPoolFqdn <String>] [-RemoveChatHistory] [<CommonParameters>]
```

## DESCRIPTION

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat categories provide a way for administrators to organize, and manage, Persistent Chat chat rooms.
Categories provide a way for administrators to group related chat rooms; for example, all chat rooms used by the finance department can be grouped in the same category.
Likewise, categories provide a way for administrators to manage permissions to these rooms, dictating which users are allowed access to the rooms, which users are denied access to the rooms, and which users are allowed to create new chat rooms within the category.

Note that all chat rooms must belong to a category; you cannot create a chat room without assigning that room to a category.
That means that you must create at least one category before you can add any chat rooms to your Persistent Chat implementation.

Skype for Business Server Control Panel: To create a new Persistent Chat category using the Skype for Business Server Control Panel, click Persistent Chat, click Category, and then click New.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsPersistentChatCategory -Name "HelpDesk" -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com" -EnableFileUpload

```

The command shown in Example 1 creates a new Persistent Chat category named HelpDesk on the pool atl-cs-001.litwareinc.com.
In this example, file upload is enabled (by including the parameter EnableFileUpload).

## PARAMETERS

### -Name
Name given to the Persistent Chat category.
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

### -Description
Additional text accompanying the Persistent Chat category.
For example, the Description might explain the purpose of the category and what type of rooms you can expect to find within the category.

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

### -EnableFileUpload
When present, allows file uploads to the chat rooms in the category.

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

### -EnableInvitations
When this parameter is included, Invitations will be enabled for the category.
Among other things, this means that users on the AllowedMembers list will automatically receive an invitation to join a new chat room at the time that new room is created.

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

### -PersistentChatPoolFqdn
Fully qualified domain name of the Persistent Chat pool where the category should be created.

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

### -RemoveChatHistory
When this parameter is included, the chat history feature will be disabled for the new category.
Typically, chat history is only disabled for chat rooms that are used for announcements that are posted once and then never need to be referred to again.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPersistentChatCategory cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsPersistentChatCategory cmdlet creates new instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatCategory](Get-CsPersistentChatCategory.md)

[Remove-CsPersistentChatCategory](Remove-CsPersistentChatCategory.md)

[Set-CsPersistentChatCategory](Set-CsPersistentChatCategory.md)

