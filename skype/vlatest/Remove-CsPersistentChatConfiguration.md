---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPersistentChatConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Removes an existing collection of Persistent Chat configuration settings.
Persistent Chat configuration settings are used to manage the Persistent Chat service.
For example, these settings allow you to specify the maximum number of users who can participate in a chat room.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Removes an existing collection of Persistent Chat configuration settings.
Persistent Chat configuration settings are used to manage the Persistent Chat service.
For example, these settings allow you to specify the maximum number of users who can participate in a chat room.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsPersistentChatConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPersistentChatConfiguration"}

Lync Server Control Panel: To remove a collection of Persistent Chat configuration settings using the Lync Server Control Panel, click Persistent Chat and then click Persistent Chat Configuration.
Select the collection to be removed, click Edit, and then click Delete.

Below Content Applies To: Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

Skype for Business Server Control Panel: To remove a collection of Persistent Chat configuration settings using the Skype for Business Server Control Panel, click Persistent Chat and then click Persistent Chat Configuration.
Select the collection to be removed, click Edit, and then click Delete.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the Persistent Chat configuration settings for the Redmond site.

Remove-CsPersistentChatConfiguration -Identity "site:Redmond"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the Persistent Chat configuration settings for the Redmond site.

Remove-CsPersistentChatConfiguration -Identity "site:Redmond"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the Persistent Chat configuration settings applied to the site scope are removed.
To do this, the command first employs the Get-CsPersistentChatConfiguration cmdlet and the -Filter parameter; the filter value "site:*" limits the returned data to settings applied at the site scope.
These settings are then piped to the Remove-CsPersistentChatConfiguration cmdlet, which deletes all the settings applied to the site scope.

Get-CsPersistentChatConfiguration -Filter "site:*" | Remove-CsPersistentChatConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the Persistent Chat configuration settings applied to the site scope are removed.
To do this, the command first employs the Get-CsPersistentChatConfiguration cmdlet and the -Filter parameter; the filter value "site:*" limits the returned data to settings applied at the site scope.
These settings are then piped to the Remove-CsPersistentChatConfiguration cmdlet, which deletes all the settings applied to the site scope.

Get-CsPersistentChatConfiguration -Filter "site:*" | Remove-CsPersistentChatConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the Persistent Chat configuration settings where the default chat history is greater than 30.
To carry out this task the command first uses Get-CsPersistentChatConfiguration to return a collection of all the Persistent Chat configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the DefaultChatHistory property is greater than (-gt) 30.
The filtered collection is then piped to Remove-CsPersistentChatConfiguration, which deletes each item in the filtered collection.

Get-CsPersistentChatConfiguration | Where-Object {$_.DefaultChatHistory -gt 30} | Remove-CsPersistentChatConfiguration

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the Persistent Chat configuration settings where the default chat history is greater than 30.
To carry out this task the command first uses the Get-CsPersistentChatConfiguration cmdlet to return a collection of all the Persistent Chat configuration settings.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the DefaultChatHistory property is greater than (-gt) 30.
The filtered collection is then piped to the Remove-CsPersistentChatConfiguration cmdlet, which deletes each item in the filtered collection.

Get-CsPersistentChatConfiguration | Where-Object {$_.DefaultChatHistory -gt 30} | Remove-CsPersistentChatConfiguration

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2013

Unique identifier for the Persistent Chat configuration settings to be removed.
To remove a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

Note that you cannot use wildcards with the Identity parameter.

You can also run Remove-CsPersistentChatConfiguration against the global settings collection.
In that case, however, the global collection will not be removed.
Instead, all the properties within that collection will be reset to their default values.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the Persistent Chat configuration settings to be removed.
To remove a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

Note that you cannot use wildcards with the Identity parameter.

You can also run the Remove-CsPersistentChatConfiguration against cmdlet the global settings collection.
In that case, however, the global collection will not be removed.
Instead, all the properties within that collection will be reset to their default values.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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
Remove-CsPersistentChatConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

###  
The Remove-CsPersistentChatConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

## OUTPUTS

###  
None.
Instead, Remove-CsPersistentChatConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

###  
None.
Instead, the Remove-CsPersistentChatConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatConfiguration]()

[New-CsPersistentChatConfiguration]()

[Set-CsPersistentChatConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/5b71b66b-9b9b-4833-94b8-528260cd7589(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/5b71b66b-9b9b-4833-94b8-528260cd7589(OCS.16).aspx)

