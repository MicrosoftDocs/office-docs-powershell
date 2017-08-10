---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPersistentChatRoom

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the Persistent Chat chat rooms configured for use in your organization.
A chat room is a discussion forum that typically revolves around a specific topic.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the Persistent Chat chat rooms configured for use in your organization.
A chat room is a discussion forum that typically revolves around a specific topic.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### All
```
Get-CsPersistentChatRoom [-Addin <String>] [-AsObject] [-Category <String>] [-ChatContentExceedsMB <Int32>]
 [-Disabled <Boolean>] [-Filter <String>] [-Invitations <ChatRoomInvitations>] [-Manager <String>]
 [-Member <String>] [-PersistentChatPoolFqdn <String>] [-Privacy <ChatRoomPrivacy>] [-ResultSize <Int32>]
 [-SearchDescription] [-Type <ChatRoomType>] [<CommonParameters>]
```

### Identity
```
Get-CsPersistentChatRoom [[-Identity] <String>] [-AsObject] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

The Get-CsPersistentChatRoom cmdlet provides a way to return information about all the chat rooms configured for use in your organization.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPersistentChatRoom"}

Lync Server Control Panel: To view Persistent Chat chat rooms in the Lync Server Control Panel, click Persistent Chat and then click Room.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat discussions take the form of messages posted in individual chat rooms; chat rooms are discussion forums based on specific topics.
By design, messages posted in a chat room remain there forever; at any time, users can return to the room and review all the messages that have been previously posted.

The Get-CsPersistentChatRoom cmdlet provides a way to return information about all the chat rooms configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about the Persistent Chat chat rooms configured for use in the organization.

Get-CsPersistentChatRoom

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about the Persistent Chat chat rooms configured for use in the organization.

Get-CsPersistentChatRoom

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information for a single Persistent Chat chat room: the room with the Identity atl-cs-001.litwareinc.com\ITChatRoom.

Get-CsPersistentChatRoom -Identity "atl-cs-001.litwareinc.com\ITChatRoom"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information for a single Persistent Chat chat room: the room with the Identity atl-cs-001.litwareinc.com\ITChatRoom.

Get-CsPersistentChatRoom -Identity "atl-cs-001.litwareinc.com\ITChatRoom"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the Persistent Chat chat rooms configured for the pool atl-cs-001.litwareinc.com.

Get-CsPersistentChatRoom -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the Persistent Chat chat rooms configured for the pool atl-cs-001.litwareinc.com.

Get-CsPersistentChatRoom -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -Addin
Returns chat rooms associated with the specified chat room add-in.

Note that you can only specify one add-in per command.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsObject
When specified, Active Directory display names are used when showing users who are on the Managers or Presenters lists.
When not specified, SIP addresses are used when showing these users.

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
Returns information for all the Persistent Chat chat rooms in the specified category.
For example:

-Category "ITChat"

You can only specify a single category when using the Category parameter.
In addition, you cannot use the PersistentChatPoolFqdn, Filter, or Identity parameters in any command that uses the Category parameter.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChatContentExceedsMB
Returns chat rooms whose cumulative chat content exceeds the specified value (in megabytes).

```yaml
Type: Int32
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
Enables you to search for active chat rooms (by using the parameter value $False) or disabled chat rooms (by using the parameter value $True).

```yaml
Type: Boolean
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to return information for Persistent Chat chat rooms based on the Name and/or the Description of the room.
To return information for a chat room with a specific name, use syntax similar to this:

-Filter {Name -like "ITChat"}

That syntax returns information only for chat rooms that have the name ITChat.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identifier for the Persistent Chat chat room being returned.
The Identity for a chat room consists of the Persistent Chat pool where the room has been configured plus the name of the room; for example:

-Identity "atl-gc-001.litwareinc.com\RedmondChatRoom"

You cannot use the Category, Filter, or PersistentChatPoolFqdn parameters in any command that uses the Identity parameter.
If you call Get-CsPersistentChatRoom without any parameters the cmdlet will return information about all the chat rooms configured for use in your organization.



**Below Content Applies To:** Skype for Business Server 2015

Unique Identifier for the Persistent Chat chat room being returned.
The Identity for a chat room consists of the Persistent Chat pool where the room has been configured plus the name of the room; for example:

-Identity "atl-gc-001.litwareinc.com\RedmondChatRoom"

You cannot use the Category, Filter, or PersistentChatPoolFqdn parameters in any command that uses the Identity parameter.
If you call the Get-CsPersistentChatRoom cmdlet without any parameters the cmdlet will return information about all the chat rooms configured for use in your organization.



```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Invitations
**Below Content Applies To:** Lync Server 2013

Returns chat rooms that use invitations (by using the parameter value Inherit) or chat rooms that do not use inivtations (by using the parameter value False).



**Below Content Applies To:** Skype for Business Server 2015

Returns chat rooms that use invitations (by using the parameter value Inherit) or chat rooms that do not use invitations (by using the parameter value False).



```yaml
Type: ChatRoomInvitations
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Manager
Returns chat rooms managed by the specified user.
For example:

-Manager "sip:kenmyer@litwareinc.com"

Note that you can only specify a single manager per command.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Member
Returns chat rooms that the specified user is a member of.
For example:

-Member "sip:kenmyer@litwareinc.com"

Note that you can only specify a single member per command.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatPoolFqdn
Returns information about all the Persistent Chat chat rooms configured on the specified Persistent Chat pool.
For example:

-PersistentChatPoolFqdn "atl-gc-001.litwareinc.com"

You cannot use the Category, Filter, or Identity parameters in any command that uses the PersistentChatPoolFqdn parameter.

```yaml
Type: String
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Privacy
Enables you to return chat rooms that meet the specified privacy setting.
Allowed values are:

* Open (any user can locate the chat room by doing a directory search, and anyone can participate in chat room activities)
* Secret (only chat room members can locate the room by doing a directory search, and only members can participate in chat room activities)
* Closed (any user can locate the chat room by doing a directory search, but only members can participate in chat room activities)

```yaml
Type: ChatRoomPrivacy
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven chat rooms (regardless of the number of rooms in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven rooms will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three rooms in your forest, the command will return those three rooms, and then complete without error.

```yaml
Type: Int32
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchDescription
Enables you to search for the specified text value in either the chat room Name or the chat room Description.
To search both the Name and the Description, include the SearchDescription parameter along with the Filter parameter.
For example:

-SearchDescription -Filter "IT chat room"

```yaml
Type: SwitchParameter
Parameter Sets: All
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Returns chat rooms by room type.
Allowed values are:

* Normal (chat rooms where all members can post messages)
* Auditorium (chat rooms where only presenters can post messages)

```yaml
Type: ChatRoomType
Parameter Sets: All
Aliases: 
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
None.
Get-CsPersistentChatRoom does not accept pipelined input.

###  
None.
The Get-CsPersistentChatRoom cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPersistentChatRoom returns instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

###  
The Get-CsPersistentChatRoom cmdlet returns instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.ChatRoomObject object.

## NOTES

## RELATED LINKS

[Clear-CsPersistentChatRoom]()

[New-CsPersistentChatRoom]()

[Remove-CsPersistentChatRoom]()

[Set-CsPersistentChatRoom]()

[Online Version](http://technet.microsoft.com/EN-US/library/9826c44b-35a6-473e-97d4-952415d640d1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9826c44b-35a6-473e-97d4-952415d640d1(OCS.16).aspx)

