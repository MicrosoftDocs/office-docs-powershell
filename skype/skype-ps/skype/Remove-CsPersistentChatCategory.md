---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Remove-CsPersistentChatCategory
schema: 2.0.0
---

# Remove-CsPersistentChatCategory

## SYNOPSIS
Removes an existing Persistent Chat category.
A Persistent Chat category represents a collection of Persistent Chat chat rooms and each chat room must be associated with a category.
This cmdlet was introduced in Lync Server 2013.
Note that categories cannot be removed unless they are empty (that is, all the rooms within that category must be removed before you can remove the category).


## SYNTAX

### Identity
```
Remove-CsPersistentChatCategory [-Identity] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Remove-CsPersistentChatCategory [-Instance] <Category> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat categories provide a way for administrators to organize and manage, Persistent Chat chat rooms.
Categories provide a way for administrators to group related chat rooms; for example, all chat rooms used by the finance department can be grouped in the same category.
Likewise, categories provide a way for administrators to manage permissions to these rooms, dictating which users are allowed access to the rooms, which users are denied access to the rooms and which users are allowed to create new chat rooms within the category.

Note that all chat rooms must belong to a category; you cannot create a chat room without assigning that room to a category.
That means that you must create at least one category before you can add any chat rooms to your Persistent Chat implementation.

The `Remove-CsPersistentChatCategory` cmdlet provides a way to remove Persistent Chat categories.
Keep in mind that categories cannot be removed unless they are empty.
That means that all the rooms within that category must be removed before you can remove the category itself.

Skype for Business Server Control Panel: To remove a Persistent Chat category using the Skype for Business Server Control Panel, click Persistent Chat and then click Category.
Select the category to be removed, click Edit and then click Delete.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatCategory -Identity "atl-cs-001.litwareinc.com\helpdesk"
```

The command shown in Example 1 removes the Persistent Chat category that has the Identity `"atl-cs-001.litwareinc.com\helpdesk"`.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatCategory | Remove-CsPersistentChatCategory
```

In Example 2, all the Persistent Chat categories currently in use in the organization are removed.
To do this, the command first uses the `Get-CsPersistentChatCategory` cmdlet to retrieve a collection of all the Persistent Chat categories.
This collection is piped to the `Remove-CsPersistentChatCategory` cmdlet, which then deletes each category in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Persistent Chat category to be removed.
An Identity consists of the PoolFqdn plus the category Name; for example:

`-Identity "atl-cs-001.litwareinc.com\helpdesk"`

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
Allows you to pass a reference to an object to the cmdlet.

```yaml
Type: Category
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
The `Remove-CsPersistentChatCategory` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject object.
The cmdlet will also accept string values representing the Identity of an existing Persistent Chat category.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPersistentChatCategory` cmdlet deletes existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatCategory]()

[New-CsPersistentChatCategory]()

[Set-CsPersistentChatCategory]()
