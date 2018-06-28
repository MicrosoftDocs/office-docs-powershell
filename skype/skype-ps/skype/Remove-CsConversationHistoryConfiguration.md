---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsConversationHistoryConfiguration
schema: 2.0.0
---

# Remove-CsConversationHistoryConfiguration

## SYNOPSIS
Resets the conversation history configuration settings for the organization.
These settings manage conversation histories for mobile device users.

## SYNTAX

```
Remove-CsConversationHistoryConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Prior to the release of Skype for Business Server, conversation histories were stored in the Conversation History folder in users's mailbox, written by the Skype for Business rich client.
Unfortunately, that proved to be a problem for mobile device users, because the Conversation History folder is typically not replicated to mobile devices.
With Skype for Business Server, however, conversation histories, missed call notifications and missed IM notifications can be stored on the server in user mailboxes; this change makes these items readily available to mobile devices.
Administrators can manage the server-side storage of these conversation histories by using the conversation history configuration settings.
Just keep in mind that a single, global collection of these settings is used to manage conversation histories throughout your deployment.
There is no option for creating additional conversation history settings at the site, service, or per-user scope.

Despite the name, the `Remove-CsConversationHistoryConfiguration` cmdlet does not actually delete the global collection of settings; that's because the global collection cannot be deleted.
Instead, the `Remove-CsConversationHistoryConfiguration` cmdlet resets all the properties in the global collection to their default values.
For example, when you install Skype for Business Server the CachedUserThreshold property is set to 1000000.
Suppose you change this value to 500000.
If you run the `Remove-CsConversationHistoryConfiguration` cmdlet then CachedUserThreshold will revert back to its default value of 1000000.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsConversationHistoryConfiguration -Identity "global"
```

The command shown in Example 1 resets all the properties in the global collection of conversation history configuration settings to their default values.


## PARAMETERS

### -Identity
Unique identifier for the conversation history configuration settings to be deleted.
Because there is only a single, global collection of settings per deployment, the only allowed syntax is the following:

`-Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

###  
`Remove-CsConversationHistoryConfiguration` accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ConversationHistory.ConversationHistorySettings object.

## OUTPUTS

###  
None.
Instead, `Remove-CsConversationHistoryConfiguration` resets instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ConversationHistory.ConversationHistorySettings object.

## NOTES

## RELATED LINKS

[Get-CsConversationHistoryConfiguration](Get-CsConversationHistoryConfiguration.md)

[Set-CsConversationHistoryConfiguration](Set-CsConversationHistoryConfiguration.md)

