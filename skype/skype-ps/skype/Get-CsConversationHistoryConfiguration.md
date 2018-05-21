---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsConversationHistoryConfiguration
schema: 2.0.0
---

# Get-CsConversationHistoryConfiguration

## SYNOPSIS
Returns the conversation history configuration settings for the organization.
These settings manage conversation histories for mobile device users.

## SYNTAX

### Filter
```
Get-CsConversationHistoryConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsConversationHistoryConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Prior to the release of Skype for Business Server, conversation histories were stored in the Conversation History folder in users's mailbox, written by the rich client.
This made it difficult to access the conversation history from mobile devices because the Conversation History folder is typically not replicated to mobile devices.
With Skype for Business Server, conversation histories and missed IM notifications can be stored on the server in user mailboxes, which makes them easily accessible from mobile devices.
Administrators can manage the server-side processing of these conversation histories by using the conversation history configuration settings.
Just keep in mind that a single, global, collection of these settings is used to manage conversation histories throughout your deployment.
There is no option for creating additional conversation history settings at the site, service, or per-user scope.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsConversationHistoryConfiguration
```

The command shown in Example 1 returns the conversation history configuration settings for the organization.
Note that you will always get back just one collection of settings; that's because Skype for Business Server 2015 limits you to a single, global collection of conversation history settings.


## PARAMETERS

### -Filter
Enables you to use wildcard values when referencing a collection of conversation history configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

`-Filter "g*"`

That syntax brings back all the conversation history configuration settings that have an Identity that begins with the letter "g".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique Identity of the conversation history configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsConversationHistoryConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

`-Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the conversation history configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Settings.ConversationHistory.ConversationHistorySettings


## NOTES


## RELATED LINKS

[Remove-CsConversationHistoryConfiguration](Remove-CsConversationHistoryConfiguration.md)

[Set-CsConversationHistoryConfiguration](Set-CsConversationHistoryConfiguration.md)

