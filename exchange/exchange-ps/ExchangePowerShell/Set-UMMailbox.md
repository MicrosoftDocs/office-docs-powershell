---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-ummailbox
schema: 2.0.0
title: Set-UMMailbox
---

# Set-UMMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-UMMailbox cmdlet to set the Unified Messaging (UM) properties for a user who is currently UM-enabled.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UMMailbox [-Identity] <MailboxIdParameter>
 [-AllowUMCallsFromNonUsers <AllowUMCallsFromNonUsersFlags>]
 [-AnonymousCallersCanLeaveMessages <Boolean>]
 [-AutomaticSpeechRecognitionEnabled <Boolean>]
 [-CallAnsweringAudioCodec <AudioCodecEnum>]
 [-CallAnsweringRulesEnabled <Boolean>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-FaxEnabled <Boolean>]
 [-IgnoreDefaultScope]
 [-ImListMigrationCompleted <Boolean>]
 [-MissedCallNotificationEnabled <Boolean>]
 [-Name <String>]
 [-OperatorNumber <String>]
 [-PinlessAccessToVoiceMailEnabled <Boolean>]
 [-PlayOnPhoneEnabled <Boolean>]
 [-SubscriberAccessEnabled <Boolean>]
 [-TUIAccessToCalendarEnabled <Boolean>]
 [-TUIAccessToEmailEnabled <Boolean>]
 [-UMMailboxPolicy <MailboxPolicyIdParameter>]
 [-UMSMSNotificationOption <UMSMSNotificationOptions>]
 [-VoiceMailAnalysisEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-UMMailbox cmdlet sets UM properties associated with a user who is UM-enabled. Many of the UM properties for the user are stored on the user's mailbox, and other UM properties for the user are stored in Active Directory.

After this task is completed, the parameters and values specified are configured on the UM mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UMMailbox -Identity tony@contoso.com -CallAnsweringAudioCodec Wma -CallAnsweringRulesEnabled $false -FaxEnabled $false -UMSMSNotificationOption VoiceMail
```

This example configures a UM-enabled user, tony@contoso.com with the following settings:

Changes the call answering audio codec to Wma

Disables call answering rules

Prevents him from receiving incoming faxes

Enables voice mail notifications but not missed call notifications using text messaging

### Example 2
```powershell
Set-UMMailbox -Identity tony@contoso.com -TUIAccessToCalendarEnabled $false -TUIAccessToEmailEnabled $false
```

This example prevents the user tony@contoso.com from accessing his calendar and email when he's using Outlook Voice Access.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowUMCallsFromNonUsers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AllowUMCallsFromNonUsers parameter specifies whether to exclude the mailbox from Unified Messaging directory searches.

```yaml
Type: AllowUMCallsFromNonUsersFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousCallersCanLeaveMessages

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AnonymousCallersCanLeaveMessages parameter specifies whether diverted calls without a caller ID are allowed to leave a message.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticSpeechRecognitionEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AutomaticSpeechRecognitionEnabled parameter specifies whether users can use Automatic Speech Recognition (ASR) when they log on to their mailbox. This parameter can only be set to $true if there is ASR support for the language selected by the user in Microsoft Outlook on the web Options.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallAnsweringAudioCodec

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The CallAnsweringAudioCodec parameter specifies the audio codec used to encode voice mail messages left for the user. The audio codec used is the audio codec set on the UM dial plan. The default value is Mp3.

```yaml
Type: AudioCodecEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallAnsweringRulesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The CallAnsweringRulesEnabled parameter specifies whether users can configure or set up Call Answering Rules for their accounts. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FaxEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The FaxEnabled parameter specifies whether a user is allowed to receive incoming faxes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

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

### -ImListMigrationCompleted

> Applicable: Exchange Server 2013, Exchange Server 2016

The ImListMigrationCompleted parameter specifies whether the UM-enabled user's Lync or Skype for Business contact list is stored in their mailbox.

Valid values are:

- $true: The user's Lync or Skype for Business contact list is stored in their Exchange 2016 mailbox. This prevents you from migrating the mailbox back to an Exchange 2010 server.
- $false: The user's Lync or Skype for Business contact list is stored on a Lync or Skype for Business server. This doesn't prevent you from migrating the mailbox back to an Exchange 2010 server. This value is the default.

Lync Server 2013 and Skype for Business Server 2015 support storing the user's contact list in their Exchange 2016 mailbox. This feature is known as the unified contact store (UCS), and it allows applications to show a consistent, up-to-date contact list. However, Exchange 2010 doesn't support the unified contact store. Therefore, before you migrate a user's Exchange 2016 mailbox back to Exchange 2010, you need to move the user's Lync or Skype for Business contact list from the unified contact store back to a Lync 2013 or Skype for Business server. For more information, see [Configuring Microsoft Lync Server 2013 to use the unified contact store](https://learn.microsoft.com/lyncserver/lync-server-2013-configuring-lync-server-to-use-the-unified-contact-store).

If you migrate an Exchange 2013 mailbox back to Exchange 2010 while the user's Lync or Skype for Business contact list is stored in the unified contact store, the user could permanently lose access to those contacts. After you verify the user's Lync or Skype for Business contact list is moved back to a Lync 2013 or Skype for Business server, you should be able to complete the mailbox migration. If you need to migrate the mailbox despite the potential for data loss, you can manually set the ImListMigrationCompleted parameter to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MissedCallNotificationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The MissedCallNotificationEnabled parameter specifies whether to send missed call notifications.

When you're integrating Unified Messaging and Lync Server or Skype for Business Server, missed call notifications aren't available to users who have mailboxes located on Exchange 2010 Mailbox servers. A missed call notification is generated when a user disconnects before the call is sent to a Mailbox server.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Name parameter specifies the display name for the user. The display name is limited to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OperatorNumber

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The OperatorNumber parameter specifies the string of digits for the personal operator.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinlessAccessToVoiceMailEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PinlessAccessToVoiceMailEnabled parameter specifies whether UM-enabled users are required to use a PIN to access their voice mail. A PIN is still required to access email and the calendar. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlayOnPhoneEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PlayOnPhoneEnabled parameter specifies whether a user can use the Play on Phone feature to listen to voice messages. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriberAccessEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The SubscriberAccessEnabled parameter specifies whether the users are allowed subscriber access to their individual mailboxes. If it's set to $true, after users are authenticated, they're able to retrieve voice mail over the telephone. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUIAccessToCalendarEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The TUIAccessToCalendarEnabled parameter specifies whether UM-enabled users can access and manage their individual calendar using the Microsoft Outlook Voice Access telephone user interface (TUI) or touchtone interface. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUIAccessToEmailEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The TUIAccessToEmailEnabled parameter specifies whether users can access their individual email messages over the telephone. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMMailboxPolicy parameter specifies the UM mailbox policy associated with the UM-enabled user's mailbox.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMSMSNotificationOption

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMSMSNotificationOption parameter specifies whether a UM-enabled user gets SMS or text messaging notifications for voice mail only, voice mail and missed calls, or no notifications. The values for this parameter are: VoiceMail, VoiceMailAndMissedCalls, and None. The default value is None.

```yaml
Type: UMSMSNotificationOptions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceMailAnalysisEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016

The VoiceMailAnalysisEnabled parameter specifies whether a copy of each voice mail left for a UM-enabled user is forwarded to Microsoft for analysis and improvement of speech recognition features.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
