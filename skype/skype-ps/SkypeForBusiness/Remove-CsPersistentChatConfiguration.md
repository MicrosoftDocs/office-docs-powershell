---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-cspersistentchatconfiguration
schema: 2.0.0
title: Remove-CsPersistentChatConfiguration
---

# Remove-CsPersistentChatConfiguration

## SYNOPSIS
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
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

The Persistent Chat service is managed, in part, by Persistent Chat configuration settings, which dictate such things as the number of previously-posted chat messages immediately available when you log on to a chat room (the chat history) or the maximum size of a file that can be uploaded to (or downloaded from) the service.
These settings can be configured at the global or the site scope, or at the service scope (that is, you can have a custom collection of settings assigned to an individual Persistent Chat pool).

Skype for Business Server Control Panel: To remove a collection of Persistent Chat configuration settings using the Skype for Business Server Control Panel, click Persistent Chat and then click Persistent Chat Configuration.
Select the collection to be removed, click Edit and then click Delete.


## EXAMPLES

### Example 1
```
Remove-CsPersistentChatConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the Persistent Chat configuration settings for the Redmond site.


### Example 2
```
Get-CsPersistentChatConfiguration -Filter "site:*" | Remove-CsPersistentChatConfiguration
```

In Example 2, all the Persistent Chat configuration settings applied to the site scope are removed.
To do this, the command first employs the `Get-CsPersistentChatConfiguration` cmdlet and the -Filter parameter; the filter value "site:*" limits the returned data to settings applied at the site scope.
These settings are then piped to the `Remove-CsPersistentChatConfiguration` cmdlet, which deletes all the settings applied to the site scope.


### Example 3
```
Get-CsPersistentChatConfiguration | Where-Object {$_.DefaultChatHistory -gt 30} | Remove-CsPersistentChatConfiguration
```

Example 3 deletes all the Persistent Chat configuration settings where the default chat history is greater than 30.
To carry out this task the command first uses the `Get-CsPersistentChatConfiguration` cmdlet to return a collection of all the Persistent Chat configuration settings.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the DefaultChatHistory property is greater than (-gt) 30.
The filtered collection is then piped to the `Remove-CsPersistentChatConfiguration` cmdlet, which deletes each item in the filtered collection.


## PARAMETERS

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015

Unique identifier for the Persistent Chat configuration settings to be removed.
To remove a collection of settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To remove a collection configured at the service scope, use syntax like this:

`-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"`

Note that you cannot use wildcards with the Identity parameter.

You can also run the `Remove-CsPersistentChatConfiguration` against cmdlet the global settings collection.
In that case, however, the global collection will not be removed.
Instead, all the properties within that collection will be reset to their default values.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration
The `Remove-CsPersistentChatConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatConfiguration object.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsPersistentChatConfiguration](Get-CsPersistentChatConfiguration.md)

[New-CsPersistentChatConfiguration](New-CsPersistentChatConfiguration.md)

[Set-CsPersistentChatConfiguration](Set-CsPersistentChatConfiguration.md)
