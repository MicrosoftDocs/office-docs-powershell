---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPersistentChatCategory

## SYNOPSIS
Returns information about the Persistent Chat categories in use in your organization.
A Persistent Chat category represents a collection of Persistent Chat chat rooms.
Each chat room must be associated with a category.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Get-CsPersistentChatCategory [-Identity] <String> [-AsObject] [<CommonParameters>]
```

### Pool
```
Get-CsPersistentChatCategory [-AsObject] [-PersistentChatPoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat serviceprovides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Persistent Chat categories provide a way for administrators to organize, and manage, Persistent Chat chat rooms.
Categories provide a way for administrators to group related chat rooms; for example, all chat rooms used by the finance department can be grouped in the same category.
Likewise, categories provide a way for administrators to manage permissions to these rooms, dictating which users are allowed access to the rooms, which users are denied access to the rooms, and which users are allowed to create new chat rooms within the category.

Note that all chat rooms must belong to a category; you cannot create a chat room without assigning that room to a category.
That means that you must create at least one category before you can add any chat rooms to your Persistent Chat implementation.

To view Persistent Chat categories in Skype for Business Server Control Panel, click Persistent Chat and then click Category.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatCategory
```

The command shown in Example 1 returns information for all the Persistent Chat categories configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatCategory -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"
```

In Example 2, information is returned for all the Persistent Chat categories configured for use on the pool atl-cs-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatCategory | Where-Object {$_.Invites -eq $False}
```

Example 3 returns information for all the Persistent Chat categories where the Invites property has been set to False.
To do this, the command first uses the Get-CsPersistentChatCategory cmdlet to return a collection of all the Persistent Chat categories.
This collection is then piped to the Where-Object cmdlet, which picks out only those categories where the Invites property is set to False ($False).

### -------------------------- Example 4 --------------------------
```
Get-CsPersistentChatCategory | Where-Object {$_.Creators -contains "Ken Myer"}
```

In Example 4, information is returned for all the Persistent Chat categories where Ken Myer is listed as one of the creators.
To do this, the Get-CsPersistentChatCategory cmdlet is first used to return a collection of all the Persistent Chat categories.
This collection is then piped to the Where-Object cmdlet, which picks out any category where the Creators property includes (-contains) the name "Ken Myer".


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

### -AsObject
When specified, Active Directory display names are used when showing users who are on the AllowedMembers, DeniedMembers, or Creators lists.
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

### -PersistentChatPoolFqdn
Fully qualified domain name of the Persistent Chat pool that hosts Persistent Chat categories.
If you use the PoolFqdn parameter without including the Name parameter, information will be returned for all the Persistent Chat categories on the specified pool.
If you leave off both the Name and PoolFqdn parameters, then information will be returned for all your Persistent Chat categories.

```yaml
Type: String
Parameter Sets: Pool
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

### None


## OUTPUTS

### Microsoft.Rtc.Management.PersistentChat.Cmdlets.CategoryObject


## NOTES


## RELATED LINKS

[New-CsPersistentChatCategory]()

[Remove-CsPersistentChatCategory]()

[Set-CsPersistentChatCategory]()