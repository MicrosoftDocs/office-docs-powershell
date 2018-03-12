---
title: "Remove-CalendarEvents"
ms.author: chrisda
author: chrisda
ms.date: 7/12/2017
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: bf188d1c-d6e5-4c82-9508-35f9b788ff82
description: "This cmdlet is available only in the cloud-based service."
---

# Remove-CalendarEvents

This cmdlet is available only in the cloud-based service. 
  
Use the **Remove-CalendarEvents** cmdlet to cancel future meetings in user or resource mailboxes in Office 365. Cancelling future meetings removes them from attendee and resource calendars (for example, you're going to remove the mailbox, or the user is going on a leave of absence).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-CalendarEvents -Identity <MailboxIdParameter> [-CancelOrganizedMeetings <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-PreviewOnly <SwitchParameter>] [-QueryStartDate <ExDateTime>] [-QueryWindowInDays <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples

### Example 1

This example cancels every meeting in the mailbox chris@contoso.com that occurs on or after today's date. After you cancel the meetings, you can remove the mailbox.
  
```
Remove-CalendarEvents -Identity chris@contoso.com -CancelOrganizedMeetings
```

### Example 2

This example cancels the meetings in Angela Gruber's calendar for the specified date range. Angela is taking a temporary leave of absence from the company, so cancelling these meetings removes them from the user and resource calendars during her absence.
  
```
Remove-CalendarEvents -Identity "Angela Gruber" -CancelOrganizedMeetings -QueryStartDate 11-1-2018 -QueryWindowInDays 120
```

### Example 3

This example previews the meetings that would be cancelled in Jacob Berger's calender for the specified date range. No changes are made to the mailbox.
  
```
Remove-CalendarEvents -Identity "Jacob Berger" -CancelOrganizedMeetings -QueryStartDate 9-1-2018 -QueryWindowInDays 90 -PreviewOnly -Verbose
```

## Detailed Description

This cmdlet cancels meetings in the specified mailbox where the mailbox is the meeting organizer, and the meeting has one or more attendees or resources. It doesn't cancel appointments or meetings without attendees or resources.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _CancelOrganizedMeetings_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _CancelOrganizedMeetings_ switch specifies whether to cancel meetings in the mailbox. You don't need to specify a value with this switch. <br/> To cancel meetings in the mailbox, you need to use this switch.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _PreviewOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PreviewOnly_ switch specifies whether to preview the results of the command without actually cancelling any meetings. You don't need to specify a value with this switch. <br/> You use this switch with the  _Verbose_ switch. <br/> |
| _QueryStartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _QueryStartDate_ parameter specifies the start date to look for meetings that you want to cancel. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> If you don't use this parameter, today's date is used.  <br/> You use the  _QueryWindowInDays_ parameter to specify the end date. <br/> |
| _QueryWindowInDays_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _QueryWindowInDays_ parameter specifies the number of days after the _QueryStartDate_ parameter value to look for meetings that you want to cancel. <br/> If you don't use this parameter, all future meetings on or after the specified start date will be cancelled.  <br/> If an instance of a recurring meeting occurs during the specified time period, the entire series is cancelled (not just the instances during the time period).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

