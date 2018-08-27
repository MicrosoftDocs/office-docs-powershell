---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPersistentChatAddin
schema: 2.0.0
---

# Remove-CsPersistentChatAddin

## SYNOPSIS
Removes an existing Persistent Chat add-in.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Remove-CsPersistentChatAddin [-Identity] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Remove-CsPersistentChatAddin [-Instance] <Addin> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Add-ins serve as extensions to a Persistent Chat chat room.
Add-ins are external applications (that is, items not built into Persistent Chat itself) that are associated with a particular chat room.
For example, a help desk chat room might include a URL that links to a Web page or to a Silverlight application that shows the status of the day's help requests.
The Skype for Business Server Windows PowerShell command-line interface cmdlets do not provide the ability to create these add-ins.
Instead, the CsPersistentChatAddin cmdlets are used to associate (or disassociate) an add-in from a chat room.

Skype for Business Server Control Panel: To remove a Persistent Chat add-in using the Skype for Business Server Control Panel, click Persistent Chat and then click Add-in.
Select the add-in to be removed, click Edit and then click Delete.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatAddin -Identity "atl-cs-001.litwareinc.com\ITChatAddin"
```

Example 1 removes the Persistent Chat add-in ITChatAddin found on the pool `atl-cs-001.litwareinc.com`.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatAddin | Remove-CsPersistentChatAddin
```

The command shown in Example 2 removes all the Persistent Chat add-ins currently in use in the organization.
To do this, the command first uses the `Get-CsPersistentChatAddin` cmdlet to return a collection of all the Persistent Chat add-ins currently in use.
This collection is piped to the `Remove-CsPersistentChatAddin` cmdlet, which then deletes each add-in in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Persistent Chat add-in to be removed.
The Identity is composed of the fully qualified domain name of the Persistent Chat pool where the add-in is located, a "\" character and the add-in name.
For example:

`-Identity "atl-gc-001.litwareincom\ITPersistentChatAddin"`

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet.

```yaml
Type: Addin
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command; for example, attempting to remove an add-in that is currently associated with one or more chat rooms.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

###  
The `Remove-CsPersistentChatAddin` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.
The cmdlet will also accept a string value representing the Identity of an existing add-in.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPersistentChatAddin` cmdlet deletes existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatAddin](Get-CsPersistentChatAddin.md)

[New-CsPersistentChatAddin](New-CsPersistentChatAddin.md)

[Set-CsPersistentChatAddin](Set-CsPersistentChatAddin.md)

