---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPersistentChatConfiguration
schema: 2.0.0
---

# Get-CsPersistentChatConfiguration

## SYNOPSIS
Returns information about the Persistent Chat configuration settings currently in use in your organization.
Persistent Chat configuration settings are used to manage the Persistent Chat service.
For example, these settings allow you to specify the maximum number of users who can participate in a chat room.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsPersistentChatConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsPersistentChatConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

To view Persistent Chat configuration information in the Skype for Business Server Control Panel, click Persistent Chat and then click Persistent Chat Configuration.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatConfiguration
```

The command shown in Example 1 returns information for all the Persistent Chat configuration settings in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatConfiguration -Identity "site:Redmond"
```

In Example 2, information is returned for a specified set of Persistent Chat configuration settings: the settings applied to the Redmond site.

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatConfiguration -Filter "service:*"
```

Example 3 returns information for all the Persistent Chat configuration settings applied to the site scope.
This is done by including the Filter parameter and the filter value "service:*".

### -------------------------- Example 4 --------------------------
```
Get-CsPersistentChatConfiguration | Where-Object {$_.DefaultChatHistory -gt 30}
```

In Example 4, information is returned for all the Persistent Chat configuration settings where the default chat history is set to a value greater than 30.
To carry out this task the command first uses the Get-CsPersistentChatConfiguration cmdlet to return a collection of all the Persistent Chat configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the DefaultChatHistory property is greater than (-gt) 30.

### -------------------------- Example 5 --------------------------
```
Get-CsPersistentChatConfiguration | Where-Object {$_.RoomManagementUrl -eq $Null}
```

Example 5 shows how you can return information for all the Persistent Chat configuration settings where the room management URL has not been defined.
To do this, the command first uses the Get-CsPersistentChatConfiguration cmdlet to return a collection of all the Persistent Chat configuration settings.
In turn, this collection is piped to the Where-Object cmdlet, which selects any settings where the RoomManagementUrl property is equal to a null value ($Null).


## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the collection (or collections) of Persistent Chat configuration settings to be returned.
For example, this syntax returns all the settings configured at the service scope:

`-Filter "service:*"`

The Filter and Identity parameters cannot be used in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the Persistent Chat configuration settings to be returned.
To return the global collection, use this syntax:

`-Identity "global"`

To return a collection of settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To return a collection configured at the service scope, use syntax like this:

`-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"`

Note that you cannot use wildcards with the Identity parameter.

If neither the Identity parameter nor the Filter parameter are included in a command then the Get-CsPersistentChatConfiguration cmdlet will return information about all the Persistent Chat configuration settings in use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the Persistent Chat configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration


## NOTES


## RELATED LINKS

[New-CsPersistentChatConfiguration](New-CsPersistentChatConfiguration.md)

[Remove-CsPersistentChatConfiguration](Remove-CsPersistentChatConfiguration.md)

[Set-CsPersistentChatConfiguration](Set-CsPersistentChatConfiguration.md)
