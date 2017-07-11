---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPersistentChatConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new collection of Persistent Chat configuration settings at the site or service scope.
Persistent Chat configuration settings are used to manage the Persistent Chat service.
For example, these settings allow you to specify the maximum number of users who can participate in a chat room.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Creates a new collection of Persistent Chat configuration settings at the site or service scope.
Persistent Chat configuration settings are used to manage the Persistent Chat service.
For example, these settings allow you to specify the maximum number of users who can participate in a chat room.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatConfiguration [-Identity] <XdsIdentity> [-Confirm] [-DefaultChatHistory <Int16>] [-Force]
 [-InMemory] [-MaxFileSizeKB <UInt32>] [-ParticipantUpdateLimit <UInt32>] [-RoomManagementUrl <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsPersistentChatConfiguration"}

Lync Server Control Panel: To create a new collection of Persistent Chat configuration settings using the Lync Server Control Panel, click Persistent Chat, click Persistent Chat Configuration, click New, and then click either Site configuration or Pool configuration.

Below Content Applies To: Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

Skype for Business Server Control Panel: To create a new collection of Persistent Chat configuration settings using the Skype for Business Server Control Panel, click Persistent Chat, click Persistent Chat Configuration, click New, and then click either Site configuration or Pool configuration.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new set of Persistent Chat configuration settings applied to the Redmond site.
In this example, the ParticipantUpdateLimit property is set to 100.

New-CsPersistentChatConfiguration -Identity "site:Redmond" -ParticipantUpdateLimit 100

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new set of Persistent Chat configuration settings applied to the Redmond site.
In this example, the ParticipantUpdateLimit property is set to 100.

New-CsPersistentChatConfiguration -Identity "site:Redmond" -ParticipantUpdateLimit 100

## PARAMETERS

### -Identity
Unique identifier for the new Persistent Chat configuration settings being created.
New configuration settings can be created at either the site or the service scope (for the Persistent Chat Server service, only).
To create new settings at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To create new settings at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwarein.com"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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

### -DefaultChatHistory
Default number of chat messages instantly available in a chat room.
Note that this value represents only the number of messages immediately available; it does not place a limit on the total amount of messages that can be retrieved.

DefaultChatHistory can be set to any value between 1 and 500, inclusive.
The default value is 30.

```yaml
Type: Int16
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -MaxFileSizeKB
Maximum size of a file (in kilobytes) that can be uploaded or downloaded by the web service.
The default value is 20000 KB.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParticipantUpdateLimit
Maximum number of users who can participate in a chat room before the active participant list updates are disabled.
The default value is 75.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomManagementUrl
URL for the Web page that administrators can use to manage individual chat rooms.

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
None.
New-CsPersistentChatConfiguration does not accept pipelined input.

###  
None.
The New-CsPersistentChatConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPersistentChatConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

###  
The New-CsPersistentChatConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatConfiguration]()

[Remove-CsPersistentChatConfiguration]()

[Set-CsPersistentChatConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/df83eebe-c20c-4e22-a5d4-1546a7f06e25(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/df83eebe-c20c-4e22-a5d4-1546a7f06e25(OCS.16).aspx)

