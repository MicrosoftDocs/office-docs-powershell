---
title: "Get-MailboxCalendarConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2a794a69-3029-49df-920c-5d91ecdb057e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxCalendarConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxCalendarConfiguration** cmdlet to show the calendar settings for a specified mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxCalendarConfiguration -Identity <MailboxIdParameter> [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves all the calendar settings for Kai's mailbox where the _Identity_ parameter is specified in the alias format.
  
```
Get-MailboxCalendarConfiguration -Identity kai | Format-List
```

### Example 2

This example uses the _Identity_ parameter specified in the _domain\account_ format and returns the calendar settings for Tony's mailbox.
  
```
Get-MailboxCalendarConfiguration -Identity contoso\tony
```

### Example 3

This example requests that the domain controller DC1 retrieves calendar settings for Kai's mailbox from Active Directory.
  
```
Get-MailboxCalendarConfiguration -Identity kai -DomainController DC1
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MailboxCalendarConfiguration** cmdlet returns settings for the calendar of the specified mailbox, including the following:
  
- **Workdays**: Days that appear in the calendar as work days in Outlook on the web
    
- **WorkingHoursStartTime**: Time that the calendar work day starts
    
- **WorkingHoursEndTime**: Time that the calendar work day ends
    
- **WorkingHoursTimeZone**: Time zone set on the mailbox for the working hours start and end times
    
- **WeekStartDay**: First day of the calendar work week
    
- **ShowWeekNumbers**: Number for each week ranging from 1 through 52 for the calendar while in month view in Outlook on the web
    
- **TimeIncrement**: Increments in minutes in which the calendar displays time in Outlook on the web
    
- **RemindersEnabled**: Whether Outlook on the web provides a visual cue when a calendar reminder is due
    
- **ReminderSoundEnabled**: Whether a sound is played when a calendar reminder is due
    
- **DefaultReminderTime**: Length of time before each meeting or appointment that the calendar in Outlook on the web shows the reminder
    
To see all of the settings returned, pipeline the command to the **Format-List** command. To view a code sample, see "Example 1."
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

