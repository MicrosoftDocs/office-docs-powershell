---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsConversationHistoryConfiguration
schema: 2.0.0
---

# Set-CsConversationHistoryConfiguration

## SYNOPSIS
Modifies the conversation history configuration settings for the organization.
These settings manage conversation histories for mobile device users.

## SYNTAX

### Identity
```
Set-CsConversationHistoryConfiguration [[-Identity] <XdsIdentity>] [-Confirm]
 [-EnableServerConversationHistory <Boolean>] [-Force] [-MaxContinuedConversationRetry <UInt32>] [-WhatIf]
 [-EnableDisplayNameResolution <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsConversationHistoryConfiguration [-Confirm] [-EnableServerConversationHistory <Boolean>] [-Force]
 [-Instance <PSObject>] [-MaxContinuedConversationRetry <UInt32>] [-WhatIf]
 [-EnableDisplayNameResolution <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Prior to the release of Skype for Business Server, conversation histories were stored exclusively in the Conversation History folder, written by the Skype for Business rich client.
Unfortunately, that proved to be a problem for mobile device users, because the Conversation History folder is typically not replicated to mobile devices.
With Skype for Business Server, however, conversation histories, missed call notifications, and missed IM notifications can now be stored on the server instead of in client mailboxes; this change makes these items readily available to mobile devices.
That also means that administrators can manage the server-side storage of these conversation histories by using the conversation history configuration settings.
Keep in mind that a single, global collection of these settings is used to manage conversation history throughout your deployment; there is no option for creating additional conversation history.
However, the global settings can be modified by using the `Set-CsConversationHistoryConfiguration` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsConversationHistoryConfiguration -Identity "global" -EnableServerConversationHistory $True
```

In Example 1, the EnableServerConversationHistory property is set to True ($True).
In turn, conversation histories, missed call notifications, and missed IM notifications will be stored on the server rather than in client mailboxes.


### -------------------------- Example 2 --------------------------
```
Set-CsConversationHistoryConfiguration -Identity "global" -CachedUserThreshold 2000000
```

The command shown in Example 2 modifies the global collection of conversation history configuration settings.
(Each deployment is limited to a single, global collection of conversation history configuration settings.) In this example, the CachedUserThreshold property is set to 2000000.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableServerConversationHistory
When set to True ($True), conversation histories and related information will be stored on the server.
The default value is False, which means that this information is stored in user mailboxes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique Identity of the conversation history configuration settings being modified.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the `Set-CsConversationHistoryConfiguration` cmdlet.
However, you can still use the following syntax to reference the global settings:

`-Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxContinuedConversationRetry
Specifies the maximum number of times the Skype for Business Server will search for a previous conversation item from Exchange to create a continued conversation.
If the previous conversation is not found in the specified number of attempts, a new conversation is created.
Increasing this value will present more continued conversations, but at the cost of decreased performance.
This parameter should not be used except in situations where Exchange connections are known to be unreliable.
The default value is 3.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDisplayNameResolution
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
`Set-CsConversationHistoryConfiguration` accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ConversationHistory.ConversationHistorySettings object.

## OUTPUTS

###  
None.
Instead, `Set-CsConversationHistoryConfiguration` modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ConversationHistory.ConversationHistorySettings object.

## NOTES

## RELATED LINKS

[Get-CsConversationHistoryConfiguration](Get-CsConversationHistoryConfiguration.md)

[Remove-CsConversationHistoryConfiguration](Remove-CsConversationHistoryConfiguration.md)
