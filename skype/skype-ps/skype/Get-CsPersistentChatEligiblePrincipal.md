---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPersistentChatEligiblePrincipal
schema: 2.0.0
---

# Get-CsPersistentChatEligiblePrincipal

## SYNOPSIS
Returns the eligible principals for a Persistent Chat category or chat room.
Eligible principals include allowed members or managers (for a category of chat room) as well as allowed presenters (chat room only).
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Category
```
Get-CsPersistentChatEligiblePrincipal -Category <String> [-Filter <String>] [-PersistentChatPoolFqdn <String>]
 [-ResultSize <Int32>] [<CommonParameters>]
```

### Room
```
Get-CsPersistentChatEligiblePrincipal -Room <String> [-Filter <String>] [-PersistentChatPoolFqdn <String>]
 [-Presenters] [-ResultSize <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Chat categories provide the option of specifying certain users as Creators; that is, users who are allowed to create chat rooms within the category.
Likewise, chat rooms provide the option of specifying users as Managers and/or Presenters.
In order to be assigned any of these roles, however, the users in question must appear on the AllowedMembers list for the specified category/room.
You can retrieve the list of allowed members for a room or category by using the Get-CsPersistentChatRoom cmdlet and the Get-CsPersistentChatCategory cmdlets However, if a security group, OU, or domain has been added to the allowed members list you will not see the names of the users in that security group, OU, or domain.
For example, if the security group FinanceManagers is on the allowed list you will not see the names of the users who belong to FinanceManagers; instead, you will only see the name of the group.

To view the names of all the users in that group (as well as the names of all the users on the allowed members list for a category or room) use the Get-CsPersistentChatEligiblePrincipal room instead.

The functions carried out by the Get-CsPersistentChatEligiblePrincipal cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatEligiblePrincipal -PersistentChatPoolFqdn "atl-persistentchat-001.litwareinc.com" -Category "ITChat"
```

The command shown in Example 1 returns information about the eligible principals for the Persistent Chat category ITChat.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatEligiblePrincipal -PersistentChatPoolFqdn "atl-persistentchat-001.litwareinc.com" -Room "HelpDeskChatRoom" -Presenters
```

In Example 2, information is returned for all the eligible presenters for the chat room HelpDeskChatRoom.

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatEligiblePrincipal -PersistentChatPoolFqdn "atl-persistentchat-001.litwareinc.com" -Room "HelpDeskChatRoom" -Presenters | Where-Object {$_.PersistentChatPrincipalType -ne "user"}
```

Example 3 is a variation on the command shown in Example 2; in this example, however, information is returned only for Persistent Chat presenters which do not represent user accounts.
To do this, the Get-CsPersistentChatEligiblePrincipal cmdlet is first used to return all the presenters for the chat room HelpDeskChatRoom.
That collection is then piped to the Where-Object cmdlet, which selects only those presenters where the PersistentChatPrincipalType property is not equal to (-ne) "user".


## PARAMETERS

### -Category
Name of the Group Chat category for which eligible principals are to be returned.
You must use either the Category or the Room parameter when calling the Get-CsPersistentChatEligiblePrincipal cmdlet; however, you cannot use both of those parameters in the same command.

```yaml
Type: String
Parameter Sets: Category
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
Name of the Group Chat room for which eligible principals are to be returned.
You must use either the Category or the Room parameter when calling the Get-CsPersistentChatEligiblePrincipal cmdlet; however, you cannot use both of those parameters in the same command.

```yaml
Type: String
Parameter Sets: Room
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Provides a way to filter for eligible principals by using a wildcard search.
For example:

`-Filter "*smith*"`

Note that the Filter parameter can only filter on user SIP addresses.

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

### -PersistentChatPoolFqdn
Fully qualified domain name of the persistent Chat pool.
For example:

`-PersistentChatPoolFqdn "atl-persistentchat-001.litwareinc.com"`

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

### -Presenters
When included in the command, returns the eligible presenters for a Persistent Chat chat room.
When not included in the command, the Get-CsPersistentChatEligiblePrincipal cmdlet returns eligible members and managers instead.

This parameter can only be used along with the Room parameter, and can only return information for rooms configured as auditoriums.

```yaml
Type: SwitchParameter
Parameter Sets: Room
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven Persistent Chat principals (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven principals will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three principals in your forest, the command will return those three principals, and then complete without error.

```yaml
Type: Int32
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.GroupChat.Cmdlets.ADPersistentChatPrincipal


## NOTES


## RELATED LINKS

[Set-CsPersistentChatCategory](Set-CsPersistentChatCategory.md)

[New-CsPersistentChatRoom](New-CsPersistentChatRoom.md)

