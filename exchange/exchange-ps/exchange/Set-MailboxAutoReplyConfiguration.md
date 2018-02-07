---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-MailboxAutoReplyConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-MailboxAutoReplyConfiguration cmdlet to configure Automatic Replies settings for a specific mailbox.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxAutoReplyConfiguration cmdlet to configure Automatic Replies settings for a specific mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxAutoReplyConfiguration [-Identity] <MailboxIdParameter>
 [-AutoReplyState <Disabled | Enabled | Scheduled>] [-Confirm] [-DomainController <Fqdn>] [-EndTime <DateTime>]
 [-ExternalAudience <None | Known | All>] [-ExternalMessage <String>] [-IgnoreDefaultScope]
 [-InternalMessage <String>] [-StartTime <DateTime>] [-WhatIf]
 [-AutoDeclineFutureRequestsWhenOOF <$true | $false>] [-CreateOOFEvent <$true | $false>]
 [-DeclineAllEventsForScheduledOOF <$true | $false>] [-DeclineEventsForScheduledOOF <$true | $false>]
 [-DeclineMeetingMessage <String>] [-EventsToDeleteIDs <String[]>] [-OOFEventSubject <String>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can disable Automatic Replies for a specified mailbox or organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User options" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can disable Automatic Replies for a specified mailbox or organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Automatic replies" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You can disable Automatic Replies for a specified mailbox or organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Scheduled -StartTime "7/10/2010 08:00:00" -EndTime "7/15/2010 17:00:00" -InternalMessage "Internal auto-reply message"
```

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal message.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Scheduled -StartTime "7/10/2012 08:00:00" -EndTime "7/15/2012 17:00:00" -InternalMessage "Internal auto-reply message"
```

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal message.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Scheduled -StartTime "7/10/2015 08:00:00" -EndTime "7/15/2015 17:00:00" -InternalMessage "Internal auto-reply message"
```

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal message.

### Example 1 -------------------------- (Exchange Online)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Scheduled -StartTime "7/10/2015 08:00:00" -EndTime "7/15/2015 17:00:00" -InternalMessage "Internal auto-reply message"
```

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal message.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message."
```

This example configures Automatic Replies to be sent for Tony's mailbox and includes an internal and an external message.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message."
```

This example configures Automatic Replies for Tony's mailbox to be sent and includes an internal and an external message.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message."
```

This example configures Automatic Replies for Tony's mailbox to be sent and includes an internal and an external message.

### Example 2 -------------------------- (Exchange Online)
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message."
```

This example configures Automatic Replies for Tony's mailbox to be sent and includes an internal and an external message.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies a unique identifier associated with a mailbox. You can use any value that uniquely identifies a mailbox. Accepted values for the mailbox are as follows:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)



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

### -AutoReplyState
!!! Exchange Server 2010

The AutoReplyState parameter specifies whether the mailbox is enabled for Automatic Replies. Accepted values are as follows:

- Enabled If you use this value, auto-replies are sent until the value is changed to Disabled

- Disabled This is the default value.

- Scheduled If you use this value, you must also specify the StartTime and EndTime parameters.



!!! Exchange Server 2013

The AutoReplyState parameter specifies whether the mailbox is enabled for Automatic Replies. Accepted values are as follows:

- Enabled If you use this value, auto-replies are sent until the value is changed to Disabled.

- Disabled This is the default value.

- Scheduled If you use this value, you must also specify the StartTime and EndTime parameters.



!!! Exchange Server 2016, Exchange Online

The AutoReplyState parameter specifies whether the mailbox is enabled for Automatic Replies. Valid values are:

- Enabled: Automatic Replies are sent for the mailbox.

- Disabled: Automatic Replies aren't sent for the mailbox. This is the default value.

- Scheduled: Automatic Replies are sent for the mailbox during the time period that's specified by the StartTime and EndTime parameters.

The Enabled and Scheduled values require these additional settings:

- A value for the InternalMessageValue parameter.

- A value for the ExternalMessageValue parameter if the ExternalAudience parameter is set to Known or All.



```yaml
Type: Disabled | Enabled | Scheduled
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
!!! Exchange Server 2010, Exchange Server 2013

The EndTime parameter specifies the end date and time that Automatic Replies are sent for the specified mailbox. To use this parameter, the AutoReplyState parameter must be set to Scheduled.



!!! Exchange Server 2016, Exchange Online

The EndTime parameter specifies the end date and time that Automatic Replies are sent for the mailbox. You use this parameter only when the AutoReplyState parameter is set to Scheduled, and the value of this parameter is meaningful only when AutoReplyState is Scheduled.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAudience
!!! Exchange Server 2010

The ExternalAudience parameter specifies whether Automatic Replies are sent to external senders. The values are None, Known, and All. The default value is None.



!!! Exchange Server 2013

The ExternalAudience parameter specifies whether Automatic Replies are sent to external senders. Accepted values are as follows:

- None This is the default value.

- Known

- All



!!! Exchange Server 2016, Exchange Online

The ExternalAudience parameter specifies whether Automatic Replies are sent to external senders. Valid values are:

- None: Automatic Replies aren't sent to any external senders.

- Known: Automatic Replies are sent only to external senders that are specified in the Contact list of the mailbox.

- All: Automatic Replies are sent to all external senders. This is the default value.

The value of this parameter is meaningful only when the AutoReplyState parameter is set to Enabled or Scheduled.



```yaml
Type: None | Known | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMessage
!!! Exchange Server 2010

The ExternalMessage parameter specifies the Automatic Replies message that's sent to external senders or senders outside of the organization.



!!! Exchange Server 2013

The ExternalMessage parameter specifies the Automatic Replies message that's sent to external senders or senders outside the organization.



!!! Exchange Server 2016, Exchange Online

The ExternalMessage parameter specifies the Automatic Replies message that's sent to external senders or senders outside the organization. If the value contains spaces, enclose the value in quotation marks (").

HTML tags are automatically added to the text. For example, if you enter the text, "I'm on vacation", the value automatically becomes: \<html\>\<body\>I'm on vacation\</body\>\</html\>. Additional HTML tags are supported if you enclose the value in quotation marks. For example, "\<html\>\<body\>I'm on vacation.\<br\>I'll respond when I return.\</body\>\</html\>".

The value of this parameter is meaningful only when both of the following conditions are true:

- The AutoReplyState parameter is set to Enabled or Scheduled.

- The ExternalAudience parameter is set to Known or All.

To clear the value of this parameter when it's no longer required (for example, if you change the ExternalAudience parameter to None), use the value $null.



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

### -IgnoreDefaultScope
!!! Exchange Server 2010, Exchange Server 2013

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2016, Exchange Online

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMessage
!!! Exchange Server 2010, Exchange Server 2013

The InternalMessage parameter specifies the Automatic Replies message that's sent to internal senders or senders within the organization.



!!! Exchange Server 2016, Exchange Online

The InternalMessage parameter specifies the Automatic Replies message that's sent to internal senders or senders within the organization. If the value contains spaces, enclose the value in quotation marks (").

HTML tags are automatically added to the text. For example, if you enter the text: "I'm on vacation", the value automatically becomes: \<html\>\<body\>I'm on vacation\</body\>\</html\>. Additional HTML tags are supported if you enclose the value in quotation marks. For example, "\<html\>\<body\>I'm on vacation.\<br\>Please contact my manager.\</body\>\</html\>".

The value of this parameter is meaningful only when the AutoReplyState parameter is set to Enabled or Scheduled.

To clear the value of this parameter when it's no longer required (for example, if you change the AutoReplyState parameter to Disabled), use the value $null.



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

### -StartTime
!!! Exchange Server 2010, Exchange Server 2013

The StartTime parameter specifies the start date and time that Automatic Replies are sent for the specified mailbox. To use this parameter, the AutoReplyState parameter must be set to Scheduled.



!!! Exchange Server 2016, Exchange Online

The StartTime parameter specifies the start date and time that Automatic Replies are sent for the specified mailbox. You use this parameter only when the AutoReplyState parameter is set to Scheduled, and the value of this parameter is meaningful only when AutoReplyState is Scheduled.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDeclineFutureRequestsWhenOOF
This parameter is available only in the cloud-based service.

The AutoDeclineFutureRequestsWhenOOF parameter specifies whether to automatically decline new meeting requests that are sent to the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: New meeting requests that are received during the scheduled time period are automatically declined.

- $false: Meeting requests received during the scheduled time period aren't automatically declined. This is the default value.

You can use this parameter only when the AutoReplyState parameter is set to Scheduled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateOOFEvent
This parameter is available only in the cloud-based service.

The CreateOOFEvent parameter specifies whether to create a calendar event that corresponds to the scheduled time period when Automatic Replies are being sent for the mailbox. Valid values are:

- $true: When you configure a scheduled time period for Automatic Replies by using the value Scheduled for the AutoReplyState parameter, a calendar event is created in the mailbox for those dates. You can specify the subject for the event by using the OOFEventSubject parameter.

- $false: When you configure a scheduled time period for Automatic Replies by using the value Scheduled for the AutoReplyState parameter, no calendar event is created for those dates. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeclineAllEventsForScheduledOOF
This parameter is available only in the cloud-based service.

The DeclineAllEventsForScheduledOOF parameter specifies whether to decline all existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: Existing calendar events in the mailbox that occur during the scheduled time period are declined and removed from the calendar.

- $false: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This is the default value.

You can use this parameter only when the DeclineEventsForScheduledOOF parameter is set to $true.

You can't use this parameter with the EventsToDeleteIDs parameter.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeclineEventsForScheduledOOF
This parameter is available only in the cloud-based service.

The DeclineEventsForScheduledOOF parameter specifies whether it's possible to decline existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are:

- $true: Existing calendar events in the mailbox that occur during the scheduled time period can be declined and removed from the calendar. To decline specific events during the scheduled time period, use the EventsToDeleteIDs parameter. To decline all events during the scheduled time period, use the DeclineAllEventsForScheduledOOF parameter.

- $false: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This is the default value.

You can use this parameter only when the AutoReplyState parameter is set to Scheduled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeclineMeetingMessage
This parameter is available only in the cloud-based service.

The DeclineMeetingMessage parameter specifies the text in the message when meetings requests that are sent to the mailbox are automatically declined. For example:

- The AutoDeclineFutureRequestsWhenOOF parameter is set to $true.

- The DeclineEventsForScheduledOOF parameter is set to $true, and the DeclineAllEventsForScheduledOOF parameter is set to $true, or individual events are specified by using the EventsToDeleteIDs parameter.

If the value contains spaces, enclose the value in quotation marks ("). HTML tags aren't automatically added to the text, but you can use values that contain HTML tags. For example, "\<html\>\<body\>I'm on vacation.\<br\>I can't attend the meeting.\</body\>\</html\>".

To clear the value of this parameter, use the value $null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventsToDeleteIDs
This parameter is available only in the cloud-based service.

The EventsToDeleteIDs parameter specifies the calendar events to delete from the mailbox when the DeclineEventsForScheduledOOF parameter is set to $true.

You can specify multiple calendar events separated by commas.

You can't use this parameter with the DeclineAllEventsForScheduledOOF parameter.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OOFEventSubject
This parameter is available only in the cloud-based service.

The OOFEventSubject parameter specifies the subject for the calendar event that's automatically created when the CreateOOFEvent parameter is set to $true.

If the value contains spaces, enclose the value in quotation marks ("). To clear the value of this parameter, use the value $null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/fda7b1fe-7f08-4711-aa91-9c270f62a8aa.aspx)

