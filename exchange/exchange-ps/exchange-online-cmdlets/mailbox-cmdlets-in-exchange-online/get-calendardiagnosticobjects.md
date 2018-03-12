---
title: "Get-CalendarDiagnosticObjects"
ms.author: chrisda
author: chrisda
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0a867365-3c95-441a-96ce-c5a8413572a0
description: "This cmdlet is available only in the cloud-based service."
---

# Get-CalendarDiagnosticObjects

This cmdlet is available only in the cloud-based service.
  
Use the **Get-CalendarDiagnosticObjects** cmdlet to collect a range of calendar logs. The calendar diagnostic logs track important calendar-related event data for each mailbox, and can be used to troubleshoot calendar issues that occur in mailboxes. The logs track all calendar items and meeting messages.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-CalendarDiagnosticObjects -Identity <UnifiedGroupOrUserMailboxIdParameter> [-Credential <PSCredential>] [-CustomPropertyNames <String[]>] [-DomainController <Fqdn>] [-EndDate <ExDateTime>] [-EntryId <String>] [-ExactMatch <$true | $false>] [-ItemClass <String[]>] [-ItemIds <String[]>] [-MeetingId <String>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>] [-ShouldBindToItem <$true | $false>] [-ShouldFetchRecurrenceExceptions <$true | $false>] [-StartDate <ExDateTime>] [-Subject <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the calendar diagnostic logs from Pedro Pizarro's mailbox for all items where the Subject is an exact match for Team Meeting.
  
```
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true
```

### Example 2

This is the same as the previous example, but now the results are sorted by original last modified time.
  
```
$A = Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true; $A | Select-Object *,@{n='OLMT'; e={[DateTime]::Parse($_.OriginalLastModifiedTime.ToString())}} | sort OLMT |  Format-Table OriginalLastModifiedTime,CalendarLogTriggerAction,ItemClass,ClientInfoString
```

### Example 3

This example retrieves the calendar diagnostic logs for Pedro Pizarro's mailbox for a meeting with the specified unique global object ID (GOID).
  
```
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -MeetingID 40000008200E00074C5B7101A82E00800000000693ADAA3B5FCD201000000000000000010000000FF760A70460EAA4096B879872DF24F49
```

### Example 4

This example returns diagnostic information for meetings with the subject Team Lunch in Pedro Pizarro's mailbox in the month of July, 2017, and exports the results to the file C:\My Documents\Team Lunch Meeting.csv.
  
```
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Lunch" -StartDate 7/1/2017 -EndDate 7/31/2017 | Export-Csv "C:\My Documents\Team Lunch Meeting.csv" -NoTypeInformation 
```

## Detailed Description
<a name="DetailedDescription"> </a>

Some of the more interesting properties that are returned in the results are:
  
- **CalendarLogTriggerAction**: The action that's taken on the item (for example, `Create` or `Update`).
    
- **ClientInfoString**: The entity that made the change (for example, `Client=OWA;<AdditionalDetails>`,  `Client=WebServices;<AdditionalDetails>;`, or  `Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;`).
    
- **OriginalLastModifiedTime**: Used as the primary sort field to order the events.
    
- **ResponsibleUserName**: The **LegacyExchangeDN** value of the user who made the change (for example, `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant` or `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin`).
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UnifiedGroupOrUserMailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox or Office 365 Group whose calendar you want to view. You can use any value that uniquely identifies the mailbox or Office 365 Group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CustomPropertyNames_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _CustomPropertyNames_ parameter returns the specified calendar item custom property in the results. You can specify multiple values separated by commas. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EntryId_ <br/> |Optional  <br/> |System.String  <br/> |The  _EntryID_ parameter filters the results by the specified **EntryID** property value, which corresponds to the MAPI property **PR_ENTRYID**. <br/> |
| _ExactMatch_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExactMatch_ parameter specifies whether to use an exact match or a partial match for text values that you specify for the _Subject_ parameter. Valid values are: <br/>  `$true`: The subject search uses an exact match. For example, if you search for "budget", the command returns all calendar items that have "budget" anywhere in the subject, but not "budgeting".  <br/>  `$false`: The subject search uses a partial match. For example, if you search for "budget", the command returns all calendar items that have "budget" and "budgeting" anywhere in the subject. This is the default value.  <br/>  A partial subject match search may not return all of the relevant calendar items. Try using an exact subject match search for more accurate results. <br/> |
| _ItemClass_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _ItemClass_ parameter filters the results by the specified **MessageClass** property value of the calendar item (for example, `IPM.Appointment`). You can specify multiple values separated by commas.  <br/> |
| _ItemIds_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _ItemIds_ parameter filters the results by item ID. You can specify multiple values separated by commas. You can specify multiple values separated by commas. <br/> |
| _MeetingId_ <br/> |Optional  <br/> |System.String  <br/> |The  _MeetingId_ parameter filters the results by the globally unique identifier of the calendar item. The value is the **CleanGloablObjectId** property of the calendar item that's available in the output of this cmdlet, or by using other MAPI examination tools. An example value is `040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55`. This value is constant throughout the lifetime of the calendar item.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _ShouldBindToItem_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ShouldBindToItem_ parameter specifies whether to truncate large streamable property values (for example, **AppointmentRecurrenceBlob** ). Valid values are: <br/>  `$true`: The values of large streamable properties aren't truncated, so the full value is returned.  <br/>  `$false`: The values of large streamable properties are truncated. This is the default value.  <br/> |
| _ShouldFetchRecurrenceExceptions_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ShouldFetchRecurrenceExceptions_ parameter specifies whether to include exceptions to recurring meetings. Valid values are: <br/>  `$true`: Include exceptions to recurring meetings. When you use this value, you also need to use the  _ItemIds_ parameter. <br/>  `$false`: Don't Include exceptions to recurring meetings. This is the default value.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _Subject_ <br/> |Optional  <br/> |System.String  <br/> |The  _Subject_ parameter identifies the calendar items by the specified text in the **Subject** field. The text values that you specify aren't case sensitive. If the value contains spaces, enclose the value in quotation marks. You can control whether to use exact matching by using the _ExactMatch_ parameter <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

