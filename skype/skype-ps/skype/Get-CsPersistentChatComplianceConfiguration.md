---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPersistentChatComplianceConfiguration
schema: 2.0.0
---

# Get-CsPersistentChatComplianceConfiguration

## SYNOPSIS
Returns information about the Persistent Chat compliance configuration settings currently in use in the organization.
Persistent Chat compliance enables administrators to maintain an archive of Persistent Chat items and activities including: new messages; new events (for example, a user entering or existing a chat room); file uploads and downloads; and any searches run against the chat history.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsPersistentChatComplianceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsPersistentChatComplianceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

Many organizations (including organizations involved in health care and organizations involved in the financial industry) are required to maintain archives of all their electronic communications; this includes conversations that might take place using the Persistent Chat service.
Lync Server allows you to create a separate compliance database that keeps a detailed of archive of everything that happens in your Persistent Chat chat rooms.
Persistent Chat compliance can be enabled or disabled at the site scope or at the service scope (that is, compliance can be enabled or disabled for a given Persistent Chat pool).
In addition, Persistent Chat compliance can only be managed using the Windows PowerShell command-line interface; there are no options available in the Skype for Business Server Control Panel for managing Persistent Chat compliance.

The functions carried out by the Get-CsPersistentChatComplianceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatComplianceConfiguration
```

The command shown in Example 1 returns information about all the Persistent Chat compliance configuration settings currently in use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatComplianceConfiguration -Identity "site:Redmond"
```

In Example 2, information is returned for the Persistent Chat compliance configuration settings applied to the Redmond site.

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatComplianceConfiguration -Filter "service:*"
```

Example 3 returns information about all the Persistent Chat compliance configuration settings applied to the service scope.
This is done by including the Filter parameter and the filter value "service:*".

### -------------------------- Example 4 --------------------------
```
Get-CsPersistentChatComplianceConfiguration | Where-Object {$_.OneChatRoomPerOutputFile -eq $True}
```

In Example 4, information is returned for all the Persistent Chat compliance configuration settings where the OneChatRoomPerOutputFile property is equal to True.
To do this, the command first uses the Get-CsPersistentChatComplianceConfiguration to return a collection consisting of all the Persistent Chat compliance configuration settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the OneChatRoomPerOutputFile property is equal to True ($True).

### -------------------------- Example 5 --------------------------
```
Get-CsPersistentChatComplianceConfiguration | Where-Object {$_.CustomConfiguration -ne $Null}
```

In Example 5, returned information is limited to Persistent Chat compliance configuration settings where the CustomConfiguration property is set to a null value.
To carry out this task, the command first uses the Get-CsPersistentChatComplianceConfiguration cmdlet to return a collection of all the Persistent Chat compliance configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which selects only those settings where CustomConfiguration is equal to a null value ($Null)


## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the collection (or collections) of Persistent Chat compliance settings to be returned.
For example, this syntax returns all the settings policies configured at the service scope:

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
Unique identifier for the Persistent Chat compliance settings to be returned.
To return the global collection, use this syntax:

`-Identity "global"`

To return a collection of settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To return a collection configured at the service scope, use syntax like this:

`-Identity "service:PersistentChatServer:atl-gc-001.litwareinc.com"`

Note that you cannot use wildcards with the Identity parameter.

If neither the Identity parameter nor the Filter parameter are included in a command then the Get-CsPersistentChatComplianceConfiguration cmdlet will return information about all the Persistent Chat compliance settings in use in your organization.

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
Retrieves the Persistent Chat compliance data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatComplianceConfiguration


## NOTES


## RELATED LINKS

[New-CsPersistentChatComplianceConfiguration](New-CsPersistentChatComplianceConfiguration.md)

[Remove-CsPersistentChatComplianceConfiguration](Remove-CsPersistentChatComplianceConfiguration.md)

[Set-CsPersistentChatComplianceConfiguration](Set-CsPersistentChatComplianceConfiguration.md)
