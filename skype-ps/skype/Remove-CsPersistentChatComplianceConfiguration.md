---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPersistentChatComplianceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes an existing collection of Persistent Chat compliance configuration settings.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing collection of Persistent Chat compliance configuration settings.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and searches run against the chat history.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsPersistentChatComplianceConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Lync Server allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using Windows PowerShell; there are no options available in the Lync Server 2013 Preview Control Panel for managing Persistent Chat compliance.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPersistentChatComplianceConfiguration"}

Lync Server Control Panel: The functions carried out by the Remove-CsPersistentChatComplianceConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Skype for Business Server 2015 allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using the Windows PowerShell command-line interface; there are no options available in the Skype for Business Server Control Panel for managing Persistent Chat compliance.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsPersistentChatComplianceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the Persistent Chat compliance configuration settings applied to the Redmond site.

Remove-CsPersistentChatComplianceConfiguration -Identity "site:Redmond"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the Persistent Chat compliance configuration settings applied to the Redmond site.

Remove-CsPersistentChatComplianceConfiguration -Identity "site:Redmond"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the Persistent Chat compliance configuration settings applied to the site scope are removed.
To do that, the command first uses Get-CsPersistentChatComplianceConfiguration and the Filter parameter to retrieve all the settings assigned to the site scope; that task is performed by using the filter value "site:*".
After the site-scoped settings have been retrieved, they are then piped to, and removed by, the Remove-CsPersistentChatComplianceConfiguration cmdlet.

Get-CsPersistentChatComplianceConfiguration -Filter "site:*" | Remove-CsPersistentChatComplianceConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the Persistent Chat compliance configuration settings applied to the site scope are removed.
To do that, the command first uses the Get-CsPersistentChatComplianceConfiguration cmdlet and the Filter parameter to retrieve all the settings assigned to the site scope; that task is performed by using the filter value "site:*".
After the site-scoped settings have been retrieved, they are then piped to, and removed by, the Remove-CsPersistentChatComplianceConfiguration cmdlet.

Get-CsPersistentChatComplianceConfiguration -Filter "site:*" | Remove-CsPersistentChatComplianceConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can remove all the Persistent Chat compliance configuration settings where both the AddUserDetails and AddChatRoomDetails properties are set to True.
To carry out this task, the command first uses the Get-CsPersistentChatComplianceConfiguration cmdlet to return a collection of all the Persistent Chat compliance configuration settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AddUserDetails property and the AddChatRoomDetails properties are equal to True ($True).
This filtered collection is then piped to the Remove-CsPersistentChatComplianceConfiguration cmdlet, which proceeds to delete each item in that filtered collection.

Get-CsPersistentChatComplianceConfiguration | Where-Object {$_.AddUserDetals -eq $True -and $_.AddChatRoomDetails -eq $True} | Remove-CsPersistentChatComplianceConfiguration

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can remove all the Persistent Chat compliance configuration settings where both the AddUserDetails and AddChatRoomDetails properties are set to True.
To carry out this task, the command first uses the Get-CsPersistentChatComplianceConfiguration cmdlet to return a collection of all the Persistent Chat compliance configuration settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AddUserDetails property and the AddChatRoomDetails properties are equal to True ($True).
This filtered collection is then piped to the Remove-CsPersistentChatComplianceConfiguration cmdlet, which proceeds to delete each item in that filtered collection.

Get-CsPersistentChatComplianceConfiguration | Where-Object {$_.AddUserDetals -eq $True -and $_.AddChatRoomDetails -eq $True} | Remove-CsPersistentChatComplianceConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the Persistent Chat compliance settings to be removed.
To remove a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

Note that you cannot use wildcards with the Identity parameter.

You can also run Remove-CsPersistentChatComplianceConfiguration against the global settings collection.
In that case, however, the global collection will not be removed.
Instead, all the properties within that collection will be reset to their default values.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the Persistent Chat compliance settings to be removed.
To remove a collection of settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove a collection configured at the service scope, use syntax like this:

-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"

Note that you cannot use wildcards with the Identity parameter.

You can also run the Remove-CsPersistentChatComplianceConfiguration cmdlet against the global settings collection.
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
Remove-CsPersistentChatComplianceConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

###  
The Remove-CsPersistentChatComplianceConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

## OUTPUTS

###  
None.
Instead, Remove-CsPersistentChatComplianceConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

###  
None.
Instead, the Remove-CsPersistentChatComplianceConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatComplianceConfiguration]()

[New-CsPersistentChatComplianceConfiguration]()

[Set-CsPersistentChatComplianceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/2d54eabf-fbb5-435b-9a71-d6b03beb09a5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2d54eabf-fbb5-435b-9a71-d6b03beb09a5(OCS.16).aspx)

