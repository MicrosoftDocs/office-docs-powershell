---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-UMMailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-UMMailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UMMailbox cmdlet to set the Unified Messaging (UM) properties for a user who is currently UM-enabled.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UMMailbox [-Identity] <MailboxIdParameter> [-AirSyncNumbers <MultiValuedProperty>]
 [-AllowUMCallsFromNonUsers <None | SearchEnabled>] [-AnonymousCallersCanLeaveMessages <$true | $false>]
 [-AutomaticSpeechRecognitionEnabled <$true | $false>] [-CallAnsweringAudioCodec <G711 | Wma | Gsm | Mp3>]
 [-CallAnsweringRulesEnabled <$true | $false>] [-Confirm] [-DomainController <Fqdn>]
 [-FaxEnabled <$true | $false>] [-IgnoreDefaultScope] [-MissedCallNotificationEnabled <$true | $false>]
 [-Name <String>] [-OperatorNumber <String>] [-PhoneNumber <String>] [-PhoneProviderId <String>]
 [-PinlessAccessToVoiceMailEnabled <$true | $false>] [-PlayOnPhoneEnabled <$true | $false>]
 [-SubscriberAccessEnabled <$true | $false>] [-TUIAccessToCalendarEnabled <$true | $false>]
 [-TUIAccessToEmailEnabled <$true | $false>] [-UMMailboxPolicy <MailboxPolicyIdParameter>]
 [-UMSMSNotificationOption <None | VoiceMail | VoiceMailAndMissedCalls>] [-VerifyGlobalRoutingEntry] [-WhatIf]
 [-ImListMigrationCompleted <$true | $false>] [-VoiceMailAnalysisEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMMailbox cmdlet sets UM properties associated with a user who has been UM-enabled. Many of the UM properties for the user are stored on the user's mailbox, and other UM properties for the user are stored in Active Directory.

After this task is completed, the parameters and values specified are configured on the UM mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UMMailbox -Identity tony@contoso.com -CallAnsweringAudioCodec Wma -CallAnsweringRulesEnabled $false -FaxEnabled $false -UMSMSNotificationOption VoiceMail
```

This example configures a UM-enabled user, tony@contoso.com with the following settings:

Changes the call answering audio codec to Wma

Disables call answering rules

Prevents him from receiving incoming faxes

Enables voice mail notifications but not missed call notifications using text messaging

### -------------------------- Example 2 --------------------------
```
Set-UMMailbox -Identity tony@contoso.com -TUIAccessToCalendarEnabled $false -TUIAccessToEmailEnabled $false
```

This example prevents the user tony@contoso.com from accessing his calendar and email when he's using Outlook Voice Access.

## PARAMETERS

### -Identity
The Identity parameter specifies the user to enable for Unified Messaging. The values for this parameter include the following:

- ADObjectID

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AirSyncNumbers
This parameter is available or functional only in Exchange Server 2010.

The AirSyncNumbers parameter specifies whether to register a mobile phone number with a hosted voice mail service. Each UM mailbox can have up to three numbers defined and numbers must be in E.164 format.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUMCallsFromNonUsers
The AllowUMCallsFromNonUsers parameter specifies whether to exclude the mailbox from directory searches.

```yaml
Type: None | SearchEnabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousCallersCanLeaveMessages
The AnonymousCallersCanLeaveMessages parameter specifies whether diverted calls without a caller ID are allowed to leave a message.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticSpeechRecognitionEnabled
The AutomaticSpeechRecognitionEnabled parameter specifies whether users can use Automatic Speech Recognition (ASR) when they log on to their mailbox. This parameter can only be set to $true if there is ASR support for the language selected by the user in Microsoft Outlook on the web Options.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallAnsweringAudioCodec
The CallAnsweringAudioCodec parameter specifies the audio codec used to encode voice mail messages left for the user. The audio codec used is the audio codec set on the UM dial plan. The default value is Mp3.

```yaml
Type: G711 | Wma | Gsm | Mp3
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallAnsweringRulesEnabled
The CallAnsweringRulesEnabled parameter specifies whether users can configure or set up Call Answering Rules for their accounts. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FaxEnabled
The FaxEnabled parameter specifies whether a user is allowed to receive incoming faxes.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MissedCallNotificationEnabled
The MissedCallNotificationEnabled parameter specifies whether to send missed call notifications.

When you're integrating Unified Messaging and Lync Server or Skype for Business Server, missed call notifications aren't available to users who have mailboxes located on Exchange 2010 Mailbox servers. A missed call notification is generated when a user disconnects before the call is sent to a Mailbox server.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name for the user. The display name is limited to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OperatorNumber
The OperatorNumber parameter specifies the string of digits for the personal operator.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
This parameter is available only in the cloud-based service.

The PhoneNumber parameter specifies whether to assign a phone number to a UM-enabled user. This is only used for E.164 consumer dial plans.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneProviderId
This parameter is available only in the cloud-based service.

The PhoneProviderId parameter specifies the user's phone number and mobile service provider. This information is used to provide custom call forwarding and cancelling voice mail setup instructions based on the mobile phone provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinlessAccessToVoiceMailEnabled
The PinlessAccessToVoiceMailEnabled parameter specifies whether UM-enabled users are required to use a PIN to access their voice mail. A PIN is still required to access email and the calendar. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlayOnPhoneEnabled
The PlayOnPhoneEnabled parameter specifies whether a user can use the Play on Phone feature to listen to voice messages. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriberAccessEnabled
The SubscriberAccessEnabled parameter specifies whether the users are allowed subscriber access to their individual mailboxes. If it's set to $true, after users are authenticated, they're able to retrieve voice mail over the telephone. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUIAccessToCalendarEnabled
The TUIAccessToCalendarEnabled parameter specifies whether UM-enabled users can access and manage their individual calendar using the Microsoft Outlook Voice Access telephone user interface (TUI) or touchtone interface. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUIAccessToEmailEnabled
The TUIAccessToEmailEnabled parameter specifies whether users can access their individual email messages over the telephone. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMMailboxPolicy
The UMMailboxPolicy parameter specifies the UM mailbox policy associated with the UM-enabled user's mailbox.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMSMSNotificationOption
The UMSMSNotificationOption parameter specifies whether a UM-enabled user gets SMS or text messaging notifications for voice mail only, voice mail and missed calls, or no notifications. The values for this parameter are: VoiceMail, VoiceMailAndMissedCalls, and None. The default value is None.

```yaml
Type: None | VoiceMail | VoiceMailAndMissedCalls
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerifyGlobalRoutingEntry
This parameter is available only in the cloud-based service.

The VerifyGlobalRoutingEntry parameter specifies the phone number has been successfully registered in the global routing database.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImListMigrationCompleted
The ImListMigrationCompleted parameter specifies whether the UM-enabled user's Lync or Skype for Business contact list is stored in their mailbox.

Valid values are:

- $true: The user's Lync or Skype for Business contact list is stored in their Exchange 2016 mailbox. This prevents you from migrating the mailbox back to an Exchange 2010 server.

- $false: The user's Lync or Skype for Business contact list is stored on a Lync or Skype for Business server. This doesn't prevent you from migrating the mailbox back to an Exchange 2010 server. This is the default value.

Lync Server 2013 and Skype for Business Server 2015 support storing the user's contact list in their Exchange 2016 mailbox. This feature is known as the unified contact store (UCS), and it allows applications to show a consistent, up-to-date contact list. However, Exchange 2010 doesn't support the unified contact store. Therefore, before you migrate a user's Exchange 2016 mailbox back to Exchange 2010, you need to move the user's Lync or Skype for Business contact list from the unified contact store back to a Lync 2013 or Skype for Business server. For more information, see Configuring Microsoft Lync Server 2013 to use the unified contact store (https://go.microsoft.com/fwlink/p/?LinkID=313550).

If you migrate an Exchange 2013 mailbox back to Exchange 2010 while the user's Lync or Skype for Business contact list is stored in the unified contact store, the user could permanently lose access to those contacts. After you verify the user's Lync or Skype for Business contact list has been moved back to a Lync 2013 or Skype for Business server, you should be able to complete the mailbox migration. If you need to migrate the mailbox despite the potential for data loss, you can manually set the ImListMigrationCompleted parameter to $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceMailAnalysisEnabled
The VoiceMailAnalysisEnabled parameter specifies whether a copy of each voice mail left for a UM-enabled user will be forwarded to Microsoft for analysis and improvement of speech recognition features.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/dd7b429d-53a8-46dd-b16b-3a8ca8424bbc.aspx)
