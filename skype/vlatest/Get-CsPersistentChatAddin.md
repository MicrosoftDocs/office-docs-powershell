---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPersistentChatAddin

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about all the Persistent Chat add-ins configured for use in the organization.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about all the Persistent Chat add-ins configured for use in the organization.
A Persistent Chat add-in is a customized web page that can be embedded within a Persistent Chat client.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Get-CsPersistentChatAddin [-Identity] <String> [<CommonParameters>]
```

### Pool
```
Get-CsPersistentChatAddin [-PersistentChatPoolFqdn <String>] [<CommonParameters>]
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

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPersistentChatAddin"}

Lync Server Control Panel: To view Persistent Chat add-in information in Lync Server Control Panel, click Persistent Chat and then click Add-in.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Add-ins serve as extensions to a Persistent Chat chat room.
Add-ins are external applications (that is, items not built into Persistent Chat itself) that are associated with a particular chat room.
For example, a help desk chat room might include a URL that links to a Web page or to a Silverlight application that shows the status of the day's help requests.
The Skype for Business Server 2015 Windows PowerShell command-line interface cmdlets do not provide the ability to create these add-ins.
Instead, the CsPersistentChatAddin cmdlets are used to associate (or disassociate) an add-in from a chat room.

Skype for Business Server Control Panel: To view Persistent Chat add-in information in Skype for Business Server Control Panel, click Persistent Chat and then click Add-in.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the Persistent Chat add-ins configured for use in the organization.

Get-CsPersistentChatAddin

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the Persistent Chat add-ins configured for use in the organization.

Get-CsPersistentChatAddin

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a specific Persistent Chat add-in: the add-in with the Identity atl-cs-001.litwareinc.com\ITPersistentChatAddin.

Get-CsPersistentChatAddin -Identity "atl-cs-001.litwareinc.com\ITPersistentChatAddin"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a specific Persistent Chat add-in: the add-in with the Identity atl-cs-001.litwareinc.com\ITPersistentChatAddin.

Get-CsPersistentChatAddin -Identity "atl-cs-001.litwareinc.com\ITPersistentChatAddin"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information for all the Persistent Chat add-ins configured for use on the pool atl-cs-001.litwareinc.com.

Get-CsPersistentChatAddin -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information for all the Persistent Chat add-ins configured for use on the pool atl-cs-001.litwareinc.com.

Get-CsPersistentChatAddin -PersistentChatPoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the Persistent Chat add-in to be returned.
The Identity is composed of the fully qualified domain name of the Persistent Chat pool where the add-in is located, a "\" character, and the add-in name.
For example:

-Identity "atl-gc-001.litwareincom\ITPersistentChatAddin"

If this parameter is not specified then Get-CsPersistentChatAddin returns information about all your Persistent Chat add-ins.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the Persistent Chat add-in to be returned.
The Identity is composed of the fully qualified domain name of the Persistent Chat pool where the add-in is located, a "\" character, and the add-in name.
For example:

-Identity "atl-gc-001.litwareincom\ITPersistentChatAddin"

If this parameter is not specified then the Get-CsPersistentChatAddin cmdlet returns information about all your Persistent Chat add-ins.



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

### -PersistentChatPoolFqdn
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name for the Persistent Chat pool.
If this parameter is used then only Persistent Chat add-ins found on the specified pool will be returned.
If this parameter is not used then get-CsPersistentChatAddin will return add-ins from all your Persistent Chat pools.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name for the Persistent Chat pool.
If this parameter is used then only Persistent Chat add-ins found on the specified pool will be returned.
If this parameter is not used then the Get-CsPersistentChatAddin cmdlet will return add-ins from all your Persistent Chat pools.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"



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

###  
None.
Get-CsPersistentChatAddin does not accept pipelined input.

###  
None.
The Get-CsPersistentChatAddin cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPersistentChatAddin returns instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

###  
The Get-CsPersistentChatAddin cmdlet returns instances of the Microsoft.Rtc.Management.PersistentChat.Cmdlets.AddinObject object.

## NOTES

## RELATED LINKS

[New-CsPersistentChatAddin]()

[Remove-CsPersistentChatAddin]()

[Set-CsPersistentChatAddin]()

[Online Version](http://technet.microsoft.com/EN-US/library/0d6b3283-c73d-4b83-b0f8-8f03aa4bba14(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0d6b3283-c73d-4b83-b0f8-8f03aa4bba14(OCS.16).aspx)

