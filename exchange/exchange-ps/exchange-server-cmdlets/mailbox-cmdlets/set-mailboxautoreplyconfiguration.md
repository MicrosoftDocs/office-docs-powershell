---
title: "Set-MailboxAutoReplyConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fda7b1fe-7f08-4711-aa91-9c270f62a8aa
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxAutoReplyConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxAutoReplyConfiguration** cmdlet to configure Automatic Replies settings for a specific mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxAutoReplyConfiguration -Identity <MailboxIdParameter> [-AutoDeclineFutureRequestsWhenOOF <$true | $false>] [-AutoReplyState <Disabled | Enabled | Scheduled>] [-Confirm [<SwitchParameter>]] [-CreateOOFEvent <$true | $false>] [-DeclineAllEventsForScheduledOOF <$true | $false>] [-DeclineEventsForScheduledOOF <$true | $false>] [-DeclineMeetingMessage <String>] [-DomainController <Fqdn>] [-EndTime <DateTime>] [-EventsToDeleteIDs <String[]>] [-ExternalAudience <None | Known | All>] [-ExternalMessage <String>] [-IgnoreDefaultScope <SwitchParameter>] [-InternalMessage <String>] [-OOFEventSubject <String>] [-StartTime <DateTime>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures Automatic Replies for Tony's mailbox to be sent between the specified start and end dates and includes an internal message.
  
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Scheduled -StartTime "7/10/2015 08:00:00" -EndTime "7/15/2015 17:00:00" -InternalMessage "Internal auto-reply message"
```

### Example 2

This example configures Automatic Replies for Tony's mailbox to be sent and includes an internal and an external message.
  
```
Set-MailboxAutoReplyConfiguration -Identity tony -AutoReplyState Enabled -InternalMessage "Internal auto-reply message." -ExternalMessage "External auto-reply message."
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can disable Automatic Replies for a specified mailbox or organization.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _AutoDeclineFutureRequestsWhenOOF_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _AutoDeclineFutureRequestsWhenOOF_ parameter specifies whether to automatically decline new meeting requests that are sent to the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are: <br/>  `$true`: New meeting requests that are received during the scheduled time period are automatically declined.  <br/>  `$false`: Meeting requests received during the scheduled time period aren't automatically declined. This is the default value.  <br/>  You can use this parameter only when the _AutoReplyState_ parameter is set to `Scheduled`.  <br/> |
| _AutoReplyState_ <br/> |Optional  <br/> |Microsoft.Exchange.InfoWorker.Common.OOF.OofState  <br/> | The _AutoReplyState_ parameter specifies whether the mailbox is enabled for Automatic Replies. Valid values are: <br/>  `Enabled`: Automatic Replies are sent for the mailbox.  <br/>  `Disabled`: Automatic Replies aren't sent for the mailbox. This is the default value.  <br/>  `Scheduled`: Automatic Replies are sent for the mailbox during the time period that's specified by the _StartTime_ and _EndTime_ parameters. <br/>  The `Enabled` and `Scheduled` values require these additional settings: <br/>  A value for the _InternalMessageValue_ parameter. <br/>  A value for the _ExternalMessageValue_ parameter if the _ExternalAudience_ parameter is set to `Known` or `All`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CreateOOFEvent_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _CreateOOFEvent_ parameter specifies whether to create a calendar event that corresponds to the scheduled time period when Automatic Replies are being sent for the mailbox. Valid values are: <br/>  `$true`: When you configure a scheduled time period for Automatic Replies by using the value  `Scheduled` for the _AutoReplyState_ parameter, a calendar event is created in the mailbox for those dates. You can specify the subject for the event by using the _OOFEventSubject_ parameter. <br/>  `$false`: When you configure a scheduled time period for Automatic Replies by using the value  `Scheduled` for the _AutoReplyState_ parameter, no calendar event is created for those dates. This is the default value. <br/> |
| _DeclineAllEventsForScheduledOOF_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _DeclineAllEventsForScheduledOOF_ parameter specifies whether to decline all existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are: <br/>  `$true`: Existing calendar events in the mailbox that occur during the scheduled time period are declined and removed from the calendar.  <br/>  `$false`: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This is the default value.  <br/>  You can use this parameter only when the _DeclineEventsForScheduledOOF_ parameter is set to `$true`.  <br/>  You can't use this parameter with the _EventsToDeleteIDs_ parameter. <br/> |
| _DeclineEventsForScheduledOOF_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _DeclineEventsForScheduledOOF_ parameter specifies whether it's possible to decline existing calendar events in the mailbox during the scheduled time period when Automatic Replies are being sent. Valid values are: <br/>  `$true`: Existing calendar events in the mailbox that occur during the scheduled time period can be declined and removed from the calendar. To decline specific events during the scheduled time period, use the _EventsToDeleteIDs_ parameter. To decline all events during the scheduled time period, use the _DeclineAllEventsForScheduledOOF_ parameter. <br/>  `$false`: Existing calendar events in the mailbox that occur during the scheduled time period remain in the calendar. This is the default value.  <br/>  You can use this parameter only when the _AutoReplyState_ parameter is set to _Scheduled_.  <br/> |
| _DeclineMeetingMessage_ <br/> |Optional  <br/> |System.String  <br/> | This parameter is available only in the cloud-based service. <br/>  The _DeclineMeetingMessage_ parameter specifies the text in the message when meetings requests that are sent to the mailbox are automatically declined. For example: <br/>  The _AutoDeclineFutureRequestsWhenOOF_ parameter is set to `$true`.  <br/>  The _DeclineEventsForScheduledOOF_ parameter is set to `$true`, and the _DeclineAllEventsForScheduledOOF_ parameter is set to `$true`, or individual events are specified by using the _EventsToDeleteIDs_ parameter. <br/>  If the value contains spaces, enclose the value in quotation marks ("). HTML tags aren't automatically added to the text, but you can use values that contain HTML tags. For example, `"<html><body>I'm on vacation.<br>I can't attend the meeting.</body></html>"`.  <br/>  To clear the value of this parameter, use the value `$null`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndTime_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _EndTime_ parameter specifies the end date and time that Automatic Replies are sent for the mailbox. You use this parameter only when the _AutoReplyState_ parameter is set to `Scheduled`, and the value of this parameter is meaningful only when _AutoReplyState_ is `Scheduled`.  <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EventsToDeleteIDs_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is available only in the cloud-based service.  <br/> The _EventsToDeleteIDs_ parameter specifies the calendar events to delete from the mailbox when the _DeclineEventsForScheduledOOF_ parameter is set to `$true`.  <br/> You can specify multiple calendar events separated by commas.  <br/> You can't use this parameter with the _DeclineAllEventsForScheduledOOF_ parameter. <br/> |
| _ExternalAudience_ <br/> |Optional  <br/> |Microsoft.Exchange.InfoWorker.Common.OOF.ExternalAudience  <br/> | The _ExternalAudience_ parameter specifies whether Automatic Replies are sent to external senders. Valid values are: <br/>  `None`: Automatic Replies aren't sent to any external senders.  <br/>  `Known`: Automatic Replies are sent only to external senders that are specified in the Contact list of the mailbox.  <br/>  `All`: Automatic Replies are sent to all external senders. This is the default value.  <br/>  The value of this parameter is meaningful only when the _AutoReplyState_ parameter is set to `Enabled` or `Scheduled`.  <br/> |
| _ExternalMessage_ <br/> |Optional  <br/> |System.String  <br/> | The _ExternalMessage_ parameter specifies the Automatic Replies message that's sent to external senders or senders outside the organization. If the value contains spaces, enclose the value in quotation marks ("). <br/>  HTML tags are automatically added to the text. For example, if you enter the text, "I'm on vacation", the value automatically becomes: `<html><body>I'm on vacation</body></html>`. Additional HTML tags are supported if you enclose the value in quotation marks. For example,  `"<html><body>I'm on vacation.<br>I'll respond when I return.</body></html>"`.  <br/>  The value of this parameter is meaningful only when both of the following conditions are true: <br/>  The _AutoReplyState_ parameter is set to `Enabled` or `Scheduled`.  <br/>  The _ExternalAudience_ parameter is set to `Known` or `All`.  <br/>  To clear the value of this parameter when it's no longer required (for example, if you change the _ExternalAudience_ parameter to `None`), use the value  `$null`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _InternalMessage_ <br/> |Optional  <br/> |System.String  <br/> |The _InternalMessage_ parameter specifies the Automatic Replies message that's sent to internal senders or senders within the organization. If the value contains spaces, enclose the value in quotation marks ("). <br/> HTML tags are automatically added to the text. For example, if you enter the text: "I'm on vacation", the value automatically becomes:  `<html><body>I'm on vacation</body></html>`. Additional HTML tags are supported if you enclose the value in quotation marks. For example,  `"<html><body>I'm on vacation.<br>Please contact my manager.</body></html>"`.  <br/> The value of this parameter is meaningful only when the _AutoReplyState_ parameter is set to `Enabled` or `Scheduled`.  <br/> To clear the value of this parameter when it's no longer required (for example, if you change the _AutoReplyState_ parameter to `Disabled`), use the value  `$null`.  <br/> |
| _OOFEventSubject_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _OOFEventSubject_ parameter specifies the subject for the calendar event that's automatically created when the _CreateOOFEvent_ parameter is set to `$true`.  <br/> If the value contains spaces, enclose the value in quotation marks ("). To clear the value of this parameter, use the value  `$null`.  <br/> |
| _StartTime_ <br/> |Optional  <br/> |System.DateTime  <br/> |The _StartTime_ parameter specifies the start date and time that Automatic Replies are sent for the specified mailbox. You use this parameter only when the _AutoReplyState_ parameter is set to `Scheduled`, and the value of this parameter is meaningful only when _AutoReplyState_ is `Scheduled`.  <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

