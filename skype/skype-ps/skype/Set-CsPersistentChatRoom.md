---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPersistentChatRoom

## SYNOPSIS
Modifies and existing Persistent Chat chat room.
A chat room is a discussion forum that typically revolves around a specific topic.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsPersistentChatRoom [-Identity] <String> [-Addin <String>] [-AsObject] [-Category <String>] [-Confirm]
 [-Description <String>] [-Disabled <Boolean>] [-Force] [-Invitations <ChatRoomInvitations>]
 [-Managers <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Members <System.Management.Automation.PSListModifier`1[System.String]>] [-Name <String>]
 [-Presenters <System.Management.Automation.PSListModifier`1[System.String]>] [-Privacy <ChatRoomPrivacy>]
 [-Type <ChatRoomType>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatRoom [-Instance] <ChatRoom> [-Addin <String>] [-AsObject] [-Category <String>] [-Confirm]
 [-Description <String>] [-Disabled <Boolean>] [-Force] [-Invitations <ChatRoomInvitations>]
 [-Managers <System.Management.Automation.PSListModifier`1[System.String]>]
 [-Members <System.Management.Automation.PSListModifier`1[System.String]>] [-Name <String>]
 [-Presenters <System.Management.Automation.PSListModifier`1[System.String]>] [-Privacy <ChatRoomPrivacy>]
 [-Type <ChatRoomType>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

The `Set-CsPersistentChatRoom` cmdlet enables you to modify any (or all) of the chat rooms that have been configured for use in your organization.
This includes assigning Managers and Presenters to a room.

Skype for Business Server Control Panel: To modify an existing Persistent Chat chat room using the Skype for Business Server Control Panel, click Persistent Chat, click Room, then double-click the chat room to be modified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsPersistentChatRoom -Identity "atl-cs-001.litwareinc.com\ITChatRoom" -Disabled $True
```

The command shown in Example 1 disables the Persistent Chat chat room with the Identity atl-cs-001.litwareinc.com\ITChatRoom.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatRoom -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com" | Set-CsPersistentChatRoom -Disabled $True
```

In Example 2, all the Persistent Chat chat rooms on the pool `atl-cs-001.litwareinc.com are disabled`.
This task is performed by first using the `Get-CsPersistentChatRoom` cmdlet and the Identity parameter to return all the chat rooms configured for the pool `atl-cs-001.litwareinc.com`.
These chat rooms are then piped to the `Set-CsPersistentChatRoom` cmdlet, which sets the Disabled property of each room to True ($True).


### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatRoom | Set-CsPersistentChatRoom -Disabled $True
```

Example 3 disables all the Persistent Chat chat rooms in the organization.
To do this, the command first calls the `Get-CsPersistentChatRoom` cmdlet without any parameters in order to return a collection of all the Persistent Chat chat rooms.
This collection is then piped to the `Set-CsPersistentChatRoom` cmdlet, which disables each room in the collection.


## PARAMETERS

### -Identity
Unique Identifier for the Persistent Chat chat room being modified.
The Identity for a chat room consists of the Persistent Chat pool where the room has been configured plus the name of the room; for example:

`-Identity "atl-gc-001.litwareinc.com\RedmondChatRoom"`

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

### -Addin
Name of the Persistent Chat add-in, if any, associated with the chat room.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
Add-ins can be created by using the `New-CsPersistentChatAddin` cmdlet.

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

### -AsObject
When specified, Active Directory display names are used when adding users to or removing users from the Managers or Presenters lists.
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

### -Category
Category under which the room is located; for example:

`-Category "IT"`

Note that the specified category must already exist or the command will fail.
Categories, which are a collection of chat rooms, can be created by using the `New-CsPersistentChatCategory` cmdlet.

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

### -Description
Enables administrators to provide additional information about the new chat room.

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

### -Disabled
When set to True ($True), the new chat room will be disabled and unavailable for use when it is first created.
If this parameter is not used then the new chat room will be enabled and available for immediate use.

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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Invitations
Specifies whether or not invitations for the chat room will be inherited from the category.
Among other things, this means that users on the Members list will automatically receive an invitation to join a new chat room at the time that new room is created.
If set to False, invitations will not be used for the room.
If set to Inherit, the room will use the Invitations setting specified for its Category.

```yaml
Type: ChatRoomInvitations
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Managers
List of users allowed to define the membership of the chat room as well as configure other settings for the room.

To add a new user to the Managers list, use syntax similar to this:

`-Managers @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-Managers @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the Managers list use the Remove method:

`-Managers @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the Managers list, set the value of the Managers property to null:

`-Managers $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command adds all the users in the IT OU to the managers list:

`-Managers @{Add="OU=IT,DC=litwareinc,DC=com"}`

To make all the users in a distribution list chat room managers, use the Active Directory distinguished name of that distribution list:

`-Managers @{Add="CN=ChatSupportGroup,OU=IT,DC=litwareinc,DC=com"}`

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

### -Members
List of users who are allowed to access the chat room.
If the Members property is null then the chat room inherits the membership list from its Persistent Chat category.

To add a new user to the Members list, use syntax similar to this:

`-Members @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-Members @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the Members list use the Remove method:

`-Members @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the Members list, set the value of the Members property to null:

`-Members $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command adds all the users in the IT OU to the Members list:

`-Members @{Add="OU=IT,DC=litwareinc,DC=com"}`

To make all the users in a distribution list chat room members, use the Active Directory distinguished name of that distribution list:

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

### -Name
Name of the Persistent Chat chat room.
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

### -Presenters
List of users who are allowed to post messages in an auditorium chat room.

To add a new user to the Presenters list, use syntax similar to this:

`-Presenters @{Add="sip:kenmyer@litwareinc.com"}`

Multiple users can be added by separating the user SIP addresses with commas:

`-Presenters @{Add="sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"}`

To remove a user from the Presenters list use the Remove method:

`-Presenters @{Remove="sip:kenmyer@litwareinc.com"}`

To remove all the users from the Presenters list, set the value of the Presenters property to null:

`-Presenters $Null`

In addition to working with individual users you can also work with entire OUs.
For example, this command adds all the users in the IT OU to the Presenters list:

`-Presenters @{Add="OU=IT,DC=litwareinc,DC=com"}`

To make all the users in a distribution list chat room presenters, use the Active Directory distinguished name of that distribution list:

`-Presenters @{Add="CN=ChatSupportGroup,OU=IT,DC=litwareinc,DC=com"}`

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

### -Privacy
Privacy settings for the chat room.
Allowed values are:

* Open (any user can locate the chat room by doing a directory search, and anyone can participate in chat room activities)
* Secret (only chat room members can locate the room by doing a directory search, and only members can participate in chat room activities)
* Closed (any user can locate the chat room by doing a directory search, but only members can participate in chat room activities)

```yaml
Type: ChatRoomPrivacy
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Specifies whether the chat room is configured as a Normal chat room (where all members can post messages) or an Auditorium (where only presenters can post messages).
For example:

`-Type "Auditorium"`

The default value is Normal.

```yaml
Type: ChatRoomType
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
The `Set-CsPersistentChatRoom` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## OUTPUTS

###  
None.
Instead, the `Set-CsPersistentChatRoom` cmdlet modifies existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## NOTES

## RELATED LINKS

[Clear-CsPersistentChatRoom]()

[Get-CsPersistentChatRoom]()

[New-CsPersistentChatRoom]()

[Remove-CsPersistentChatRoom]()
