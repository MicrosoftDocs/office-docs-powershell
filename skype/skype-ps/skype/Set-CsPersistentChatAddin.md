---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPersistentChatAddin

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies an existing Persistent Chat add-in.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing Persistent Chat add-in.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsPersistentChatAddin [-Identity] <String> [-Confirm] [-Name <String>] [-Url <String>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatAddin [-Instance] <Addin> [-Confirm] [-Name <String>] [-Url <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Add-ins serve as extensions to a Persistent Chat chat room.
Add-ins are external applications (that is, items not built into Persistent Chat itself) that are associated with a particular chat room.
For example, a help desk chat room might include a URL that links to a Web page or to a Silverlight application that shows the status of the day's help requests.
Lync Server PowerShell does not provide the ability to create these add-ins.
Instead, the CsPersistentChatAddin cmdlets are used to associate (or disassociate) an add-in from a chat room.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPersistentChatAddin"}

Lync Server Control Panel: To modify an existing Persistent Chat add-in using the Lync Server Control Panel, click Persistent Chat, click Add-in, then double-click the add-in to be modified.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Add-ins serve as extensions to a Persistent Chat chat room.
Add-ins are external applications (that is, items not built into Persistent Chat itself) that are associated with a particular chat room.
For example, a help desk chat room might include a URL that links to a Web page or to a Silverlight application that shows the status of the day's help requests.
The Skype for Business Server 2015 Windows PowerShell command-line interface cmdlets do not provide the ability to create these add-ins.
Instead, the CsPersistentChatAddin cmdlets are used to associate (or disassociate) an add-in from a chat room.

Skype for Business Server Control Panel: To modify an existing Persistent Chat add-in using the Skype for Business Server Control Panel, click Persistent Chat, click Add-in, then double-click the add-in to be modified.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 modifies the URL assigned to the Persistent Chat add-in ITPersistentChatAddin.
In this case, the URL is changed to http://atl-cs-001.litwareinc.com/itchat2.

Set-CsPersistentChatAddin -Identity "atl-cs-001.litwareinc.com\ITPersistentChatAddin" -Url "http://atl-cs-001.litwareinc.com/itchat2"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 modifies the URL assigned to the Persistent Chat add-in ITPersistentChatAddin.
In this case, the URL is changed to http://atl-cs-001.litwareinc.com/itchat2.

Set-CsPersistentChatAddin -Identity "atl-cs-001.litwareinc.com\ITPersistentChatAddin" -Url "http://atl-cs-001.litwareinc.com/itchat2"

## PARAMETERS

### -Identity
Unique identifier for the Persistent Chat add-in.
The Identity is composed of the fully qualified domain name of the Persistent Chat pool where the add-in is located, a "\" character, and the add-in name.
For example:

-Identity "atl-gc-001.litwareincom\ITPersistentChatAddin"

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: Addin
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Friendly name given to the Persistent Chat add-in.
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

### -Url
URL of the Web page to be displayed by the Persistent Chat add-in.

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
Set-CsPersistentChatAddin accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

###  
The Set-CsPersistentChatAddin cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

## OUTPUTS

###  
None.
Instead, Set-CsPersistentChatAddin modifies existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

###  
None.
Instead, the Set-CsPersistentChatAddin cmdlet modifies existing instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatAddin]()

[New-CsPersistentChatAddin]()

[Remove-CsPersistentChatAddin]()

[Online Version](http://technet.microsoft.com/EN-US/library/1badd6b5-e519-47a1-9434-9fa5a00b79ff(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1badd6b5-e519-47a1-9434-9fa5a00b79ff(OCS.16).aspx)

