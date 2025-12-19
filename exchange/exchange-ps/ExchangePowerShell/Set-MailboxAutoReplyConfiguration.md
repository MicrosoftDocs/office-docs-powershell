---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxautoreplyconfiguration
schema: 2.0.0
search.appverid: MET150
title: Set-MailboxAutoReplyConfiguration
---

# Set-MailboxAutoReplyConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-MailboxAutoReplyConfiguration cmdlet to configure Automatic Replies settings for a specific mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxAutoReplyConfiguration [-Identity] <MailboxIdParameter>
 [-AutoDeclineFutureRequestsWhenOOF <Boolean>]
 [-AutoReplyState <OofState>]
 [-Confirm]
 [-CreateOOFEvent <Boolean>]
 [-DeclineAllEventsForScheduledOOF <Boolean>]
 [-DeclineEventsForScheduledOOF <Boolean>]
 [-DeclineMeetingMessage <String>]
 [-DomainController <Fqdn>]
 [-EndTime <DateTime>]
 [-EventsToDeleteIDs <String[]>]
 [-ExternalAudience <ExternalAudience>]
 [-ExternalMessage <String>]
 [-IgnoreDefaultScope]
 [-InternalMessage <String>]
 [-OOFEventSubject <String>]
 [-StartTime <DateTime>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can disable Automatic Replies for a specified mailbox or organization.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxAutoReplyConfiguration -Identity tony@contoso.com -AutoReplyState Scheduled -StartTime "7/10/2018 08:00:00" -EndTime "7/15/2018 17:00:00" -InternalMessage "Internal auto-reply message"
```

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal reply.

### Example 2
```powershell
Set-MailboxAutoReplyConfiguration -Identity tony@contoso.com -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message." -ExternalAudience All
```

This example configures Automatic Replies for Tony's mailbox to be sent, specifies the reply for messages from internal and external senders, and specifies the external reply is sent to any external address.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -AutoDeclineFutureRequestsWhenOOF

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The AutoDeclineFutureRequestsWhenOOF parameter specifies whether to automatically decline new meeting requests that are sent to the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: New meeting requests that are received during the scheduled time period are automatically declined.
- $false: Meeting requests received during the scheduled time period aren't automatically declined. This value is the default.

You can use this parameter only when the AutoReplyState parameter is set to Scheduled.

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

### -AutoReplyState

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AutoReplyState parameter specifies whether the mailbox is enabled for Automatic Replies. Valid values are:

- Enabled: Automatic Replies are sent for the mailbox.
- Disabled: Automatic Replies aren't sent for the mailbox. This value is the default.
- Scheduled: Automatic Replies are sent for the mailbox during the time period that's specified by the StartTime and EndTime parameters.

The Enabled and Scheduled values require these additional settings:

- A value for the InternalMessageValue parameter.
- A value for the ExternalMessageValue parameter if the ExternalAudience parameter is set to Known or All.

```yaml
Type: OofState
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -CreateOOFEvent

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The CreateOOFEvent parameter specifies whether to create a calendar event that corresponds to the scheduled time period when Automatic Replies are being sent for the mailbox. Valid values are:

- $true: When you configure a scheduled time period for Automatic Replies by using the value Scheduled for the AutoReplyState parameter, a calendar event is created in the mailbox for those dates. You can specify the subject for the event by using the OOFEventSubject parameter.
- $false: When you configure a scheduled time period for Automatic Replies by using the value Scheduled for the AutoReplyState parameter, no calendar event is created for those dates. This value is the default.

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

### -DeclineAllEventsForScheduledOOF

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The DeclineAllEventsForScheduledOOF parameter specifies whether to decline all existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: Existing calendar events in the mailbox that occur during the scheduled time period are declined and removed from the calendar. If the mailbox is the meeting organizer, the events are cancelled for all other attendees.
- $false: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This value is the default.

You can use this parameter only when the DeclineEventsForScheduledOOF parameter is set to $true.

You can't use this parameter with the EventsToDeleteIDs parameter.

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

### -DeclineEventsForScheduledOOF

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The DeclineEventsForScheduledOOF parameter specifies whether it's possible to decline existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: Existing calendar events in the mailbox that occur during the scheduled time period can be declined and removed from the calendar. If the mailbox is the meeting organizer, the events are cancelled for all other attendees.

  To decline specific events during the scheduled time period, use the EventsToDeleteIDs parameter. To decline all events during the scheduled time period, use the DeclineAllEventsForScheduledOOF parameter.

- $false: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This value is the default.

You can use this parameter only when the AutoReplyState parameter is set to Scheduled.

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

### -DeclineMeetingMessage

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The DeclineMeetingMessage parameter specifies the text in the message when meetings requests that are sent to the mailbox are automatically declined. For example:

- The AutoDeclineFutureRequestsWhenOOF parameter is set to $true.
- The DeclineEventsForScheduledOOF parameter is set to $true, and the DeclineAllEventsForScheduledOOF parameter is set to $true, or individual events are specified by using the EventsToDeleteIDs parameter.

If the value contains spaces, enclose the value in quotation marks ("). HTML tags aren't automatically added to the text, but you can use values that contain HTML tags. For example, `"<html><body>I'm on vacation. <b>I can't attend the meeting.</b></body></html>"`.

To clear the value of this parameter, use the value $null.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

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

### -EndTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EndTime parameter specifies the end date and time that Automatic Replies are sent for the mailbox. You use this parameter only when the AutoReplyState parameter is set to Scheduled, and the value of this parameter is meaningful only when AutoReplyState is Scheduled.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventsToDeleteIDs

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The EventsToDeleteIDs parameter specifies the calendar events to delete from the mailbox when the DeclineEventsForScheduledOOF parameter is set to $true.

You can specify multiple calendar events separated by commas.

You can't use this parameter with the DeclineAllEventsForScheduledOOF parameter.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAudience

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ExternalAudience parameter specifies whether Automatic Replies are sent to external senders. Valid values are:

- None: Automatic Replies aren't sent to any external senders.
- Known: Automatic Replies are sent only to external senders that are specified in the Contact list of the mailbox.
- All: Automatic Replies are sent to all external senders. This value is the default.

The value of this parameter is meaningful only when the AutoReplyState parameter is set to Enabled or Scheduled.

```yaml
Type: ExternalAudience
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMessage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ExternalMessage parameter specifies the Automatic Replies message that's sent to external senders or senders outside the organization. If the value contains spaces, enclose the value in quotation marks (").

HTML tags are automatically added to the text. For example, if you enter the text, "I'm on vacation", the value automatically becomes: `<html><body>I'm on vacation</body></html>`. Additional HTML tags are supported if you enclose the value in quotation marks. For example, `"<html><body><b>I'm on vacation</b>. I'll respond when I return.</body></html>"`.

The value of this parameter is meaningful only when both of the following conditions are true:

- The AutoReplyState parameter is set to Enabled or Scheduled.
- The ExternalAudience parameter is set to Known or All.

To clear the value of this parameter when it's no longer required (for example, if you change the ExternalAudience parameter to None), use the value $null.

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

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -InternalMessage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The InternalMessage parameter specifies the Automatic Replies message that's sent to internal senders or senders within the organization. If the value contains spaces, enclose the value in quotation marks (").

HTML tags are automatically added to the text. For example, if you enter the text: "I'm on vacation", the value automatically becomes: `<html><body>I'm on vacation</body></html>`. Additional HTML tags are supported if you enclose the value in quotation marks. For example, `"<html><body>I'm on vacation. <b>Please contact my manager.</b></body></html>"`.

The value of this parameter is meaningful only when the AutoReplyState parameter is set to Enabled or Scheduled.

To clear the value of this parameter when it's no longer required (for example, if you change the AutoReplyState parameter to Disabled), use the value $null.

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

### -OOFEventSubject

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in the cloud-based service.

The OOFEventSubject parameter specifies the subject for the calendar event that's automatically created when the CreateOOFEvent parameter is set to $true.

If the value contains spaces, enclose the value in quotation marks ("). To clear the value of this parameter, use the value $null.

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

### -StartTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The StartTime parameter specifies the start date and time that Automatic Replies are sent for the specified mailbox. You use this parameter only when the AutoReplyState parameter is set to Scheduled, and the value of this parameter is meaningful only when AutoReplyState is Scheduled.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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
