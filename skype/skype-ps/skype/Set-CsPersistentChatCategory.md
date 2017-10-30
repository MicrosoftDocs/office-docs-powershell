---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Set-CsPersistentChatCategory
schema: 2.0.0
---

# Set-CsPersistentChatCategory

## SYNOPSIS
Modifies an existing Persistent Chat category.
A Persistent Chat category represents a collection of Persistent Chat chat rooms.
Each chat room must be associated with a category.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsPersistentChatCategory [-Identity] <String>
 [-AllowedMembers <System.Management.Automation.PSListModifier`1[System.String]>] [-AsObject]
 [-ChatHistory <Boolean>] [-Confirm] [-Creators <System.Management.Automation.PSListModifier`1[System.String]>]
 [-DeniedMembers <System.Management.Automation.PSListModifier`1[System.String]>] [-Description <String>]
 [-FileUpload <Boolean>] [-Invitations <Boolean>] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatCategory -Instance <Category>
 [-AllowedMembers <System.Management.Automation.PSListModifier`1[System.String]>] [-AsObject]
 [-ChatHistory <Boolean>] [-Confirm] [-Creators <System.Management.Automation.PSListModifier`1[System.String]>]
 [-DeniedMembers <System.Management.Automation.PSListModifier`1[System.String]>] [-Description <String>]
 [-FileUpload <Boolean>] [-Invitations <Boolean>] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat categories provide a way for administrators to organize and manage, Persistent Chat chat rooms.
Categories provide a way for administrators to group related chat rooms; for example, all chat rooms used by the finance department can be grouped in the same category.
Likewise, categories provide a way for administrators to manage permissions to these rooms, dictating which users are allowed access to the rooms, which users are denied access to the rooms, and which users are allowed to create new chat rooms within the category.

Note that all chat rooms must belong to a category; you cannot create a chat room without assigning that room to a category.
That means that you must create at least one category before you can add any chat rooms to your Persistent Chat implementation.

Skype for Business Server Control Panel: To modify an existing Persistent Chat category using the Skype for Business Server Control Panel, click Persistent Chat, click Category, then double-click the category to be modified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsPersistentChatCategory -Identity "atl-cs-001.litwareinc.com\helpdesk" -FileUpload $False
```

In Example 1, file uploads are disabled for the Persistent Chat category atl-cs-001.litwareinc.com\helpdesk.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatCategory | Set-CsPersistentChatCategory -FileUpload $False
```

Example 2 disables file uploads for all the Persistent Chat categories currently in use in the organization.
To carry out this task, the command first calls the `Get-CsPersistentChatCategory` cmdlet without any parameters in order to return a collection of all the Persistent Chat categories.
The categories in this collection are then piped to the `Set-CsPersistentChatCategory` cmdlet to disable file uploads for each category.


## PARAMETERS

### -Identity
Unique identifier for the chat room category.
The Identity consists of the Persistent Chat pool were the category is located followed by the category Name; for example:

`-Identity "atl-gc-001.litwareinc.com\ITChat"`

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
Type: Category
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowedMembers
Lists the users who are allowed to access chat rooms within the category.
To add a new user to the Members list, use syntax similar to this:

`-Members @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-Members @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the Members list use the Remove method:

`-Members @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the Members list, set the value of the Members property to null:

`-AllowedMembers $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command enables all the users in the IT OU to access chat rooms:

`-Members @{Add="OU=IT,DC=litwareinc,DC=com"}`

To add all the users in a distribution list, use the Active Directory distinguished name of that distribution list:

`-Members @{Add="CN=ChatSupportGroup,OU=IT,DC=litwareinc,DC=com"}`

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsObject
When specified, Active Directory display names are used when adding users to or removing users from the AllowedMembers, DeniedMembers and Creators lists.
When not specified, SIP addresses are used when managing these lists.

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

### -ChatHistory
When set the False ($False), the chat history feature will be disabled for the new category.
Typically, chat history is only disabled for chat rooms that are used for announcements that are posted once and then never need to be referred to again.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Creators
Lists the users who are allowed to create chat rooms within the category.
To add a new user to the Creators list, use syntax similar to this:

`-Creators @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-Creators @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the Creators list use the Remove method:

`-Creators @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the Creators list, set the value of the Creators property to null:

`-Creators $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command enables all the users in the IT OU to create chat rooms:

`-Creators @{Add="OU=IT,DC=litwareinc,DC=com"}`

To add all the users in a distribution list, use the Active Directory distinguished name of that distribution list:

`-Creators @{Add="CN=ChatSupportGroup.OU=IT,DC=litwareinc,DC=com"}`

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeniedMembers
Lists the users who are not allowed to access chat rooms within the category.
To add a new user to the DeniedMembers list, use syntax similar to this:

`-DeniedMembers @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-DeniedMembers @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the DeniedMembers list use the Remove method:

`-DeniedMembers @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the DeniedMembers list, set the value of the DeniedMembers property to null:

`-DeniedMembers $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command denies chat room access to all the users in the IT OUs:

`-DeniedMembers @{Add="OU=IT,DC=litwareinc,DC=com"}`

To deny access to all the users in a distribution list, use the Active Directory distinguished name of that distribution list:

`-DeniedMembers @{Add="CN=ChatSupportGroup.OU=IT,DC=litwareinc,DC=com"}`

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileUpload
When set to True ($True), allows file uploads to the chat rooms in the category.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Invitations
When set to False ($False), Invitations will be enabled for the category.
Among other things, this means that users on the AllowedMembers list will automatically receive an invitation to join a new chat room at the time that new room is created.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name given to the Persistent Chat category.
Names must be unique per Persistent Chat pool.

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
The `Set-CsPersistentChatCategory` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject object.

## OUTPUTS

###  
None.
Instead, the `Set-CsPersistentChatCategory` cmdlet modifies existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatCategory](Get-CsPersistentChatCategory.md)

[New-CsPersistentChatCategory](New-CsPersistentChatCategory.md)

[Remove-CsPersistentChatCategory](Remove-CsPersistentChatCategory.md)
