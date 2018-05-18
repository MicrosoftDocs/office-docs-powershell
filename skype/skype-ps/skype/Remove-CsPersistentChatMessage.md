---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPersistentChatMessage
schema: 2.0.0
---

# Remove-CsPersistentChatMessage

## SYNOPSIS
Replaces one or more Persistent Chat messages in the Persistent Chat database with a default message or with an administrator-provided message.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Remove
```
Remove-CsPersistentChatMessage -Identity <String> [-Remove] [-CaseSensitive <Boolean>] [-Confirm]
 [-EndDate <DateTime>] [-Filter <String>] [-MatchClause <AndOr>] [-StartDate <DateTime>] [-UserUri <String>]
 [-WhatIf] [<CommonParameters>]
```

### Replace
```
Remove-CsPersistentChatMessage -Identity <String> -ReplaceMessage <String> [-CaseSensitive <Boolean>]
 [-Confirm] [-EndDate <DateTime>] [-Filter <String>] [-MatchClause <AndOr>] [-StartDate <DateTime>]
 [-UserUri <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

However, there might be times when administrators need to remove messages from a chat room; for example, perhaps a user posted a series of messages with erroneous information regarding the forthcoming company meeting.
The `Remove-CsPersisentChatMessage` cmdlet enables administrators to remove a single chat message, or to remove an entire set of chat messages based on criteria such as the user who posted the message or keywords found in that message.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsPersistentChatMessage` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatMessage -Identity "atl-persistentchat-001.litwareinc.com\ITChatRoom" -EndDate "4/1/2012"
```

The command shown in Example 1 removes all the Persistent Chat messages posted on or before April 1, 2012 from the ITChatRoom chat room on the server atl-persistentchat-001.litwareinc.com.


### -------------------------- Example 2 --------------------------
```
Remove-CsPersistentChatMessage -Identity "atl-persistentchat-001.litwareinc.com\ITChatRoom" -UserUri "sip:kenmyer@litwareinc.com"
```

In Example 2, all Persistent Chat messages posted by the user kenmyer@litwareinc.com are removed from the ITChatRoom chat room on the server atl-persistentchat-001.litwareinc.com.


## PARAMETERS

### -Identity
Unique identifier for the chat room containing the message to be deleted.
For example:

`-Identity "atl-persistentchat-001.litwareinc.com\ITChatRoom"`

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

### -Remove
When present, removes the Persistent Chat message without leaving a replacement message.

You cannot use both the Remove parameter and the ReplaceMessage parameter in the same command.

```yaml
Type: SwitchParameter
Parameter Sets: Remove
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplaceMessage
Enables administrators to specify the text of the replacement message.
By default, the replacement message reads "This message was replaced by the Persistent Chat administrator."

```yaml
Type: String
Parameter Sets: Replace
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaseSensitive
When present, indicates that case sensitivity should be used when searching for messages to be removed.
(In other words, an uppercase "A" will be treated as a different character than a lowercase "a".) By default, searches are not case sensitive.

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

### -EndDate
Enables you to filter for messages that were posted on or before the specified date.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Keywords that can be used to help identify the messages to be deleted.
For example, to search for all messages that include the keyword "Fabrikam" use this syntax:

`-Filter "Fabrikam"`

To search for multiple keywords, put all the keywords in a single string, separated by using blank spaces:

`-Filter "Fabrikam Contoso TailspinToys"`

By default, the `Remove-CsPersistentChatMessage` cmdlet will look for messages using all the specified keywords.
To look for messages using any one of the provided keywords, use the MatchClause parameter and set the parameter value to "Or".


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

### -MatchClause
Specifies how the `Remove-CsPersistentChatMessage` cmdlet handles multiple keywords.
Allowed values are:

* All (A message must include all the specified keywords in order to be a match)
* Or (A message containing one or more of the specified keywords will be considered a match)
* Exact (Messages must exactly match the specified phrase, including the word order, in order to be a match)

For example, this syntax searches for messages that have the exact phrase "For internal use only) in the message text:

`-Filter "For internal use only" -MatchClause "Exact"`


```yaml
Type: AndOr
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Enables you to filter for messages that were posted on or after the specified date.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserUri
SIP address of the user who posted the message (or messages) that should be removed.

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
None.
The `Remove-CsPersistentChatMessage` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Clear-CsPersistentChatRoom](Clear-CsPersistentChatRoom.md)

