---
title: "Get-CalendarDiagnosticLog"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 25b0fe23-6b15-4e02-b451-ea90442d54ed

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-CalendarDiagnosticLog

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-CalendarDiagnosticLog** cmdlet to collect a range of calendar logs. The Calendar Diagnostic logs track all calendar items and meeting requests in mailboxes. You can use this information to troubleshoot calendar issues that occur in mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-CalendarDiagnosticLog <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the Calendar Diagnostic log entries for Shannon Steele's mailbox by using the subject Weekly development meeting.
  
```
Get-CalendarDiagnosticLog -Identity "Shannon Steele" -Subject "Weekly development meeting" -ExactMatch $true
```

### Example 2

This example retrieves the Calendar Diagnostic log entries for Oscar Evans' mailbox from 6/1/2015 to 6/30/2015.
  
```
Get-CalendarDiagnosticLog -Identity oevans -StartDate "6/1/2015 6:00:00 AM" -EndDate "6/30/2015 5:00:00 PM"
```

### Example 3

This example retrieves the Calendar Diagnostic log data only for the most recent calendar item in Jasen Kozma's mailbox with a message subject of "Weekly development meeting".
  
```
Get-CalendarDiagnosticLog -Identity jkozma@contoso.com -Subject "Weekly development meeting" -Latest
```

### Example 4

This example exports all calendar items in the Calendar Diagnostic log for Jasen Kozma's mailbox that have "Budget Meeting" anywhere in the subject to the specified folder.
  
```
Get-CalendarDiagnosticLog -Identity "Jasen Kozma" -Subject "Budget Meeting" -ExactMatch $true -LogLocation "C:\My Documents\Calendar Diagnostic Export"
```

 **Notes**:
  
- In this example, the message files are written to  `C:\My Documents\Calendar Diagnostic Export\jkozma@contoso.com`.
    
- In on-premises Exchange organizations, you can use the **Get-CalendarDiagnosticAnalysis** cmdlet with the _LogLocation_ parameter to analyze the exported .msg files.
    
## Detailed Description
<a name="DetailedDescription"> </a>

The output of this cmdlet contains the following information:
  
- **IsFileLink**: Indicates whether the calendar item has been exported to a .msg file by using the _LogLocation_ parameter. Values are `True` or `False`.
    
- **Identity**: Identifies the mailbox that holds the calendar item. An example value is: `excallog://laura@contoso.com/?id=RgAAAACF/h/dHTTkQbdPrk7z+G4SBwCoatc7EmnEQq1iF35p17stAAAAAAFEAACoatc7EmnEQq1iF35p17stAAAAABEIAAAP`.
    
- **LogDate**: The date-time that the calendar item was logged.
    
- **NormalizedSubject**: The **Subject** field of the calendar item.
    
- **CleanGlobalObjectId**: The identifier that's constant throughout the lifetime of the calendar item. For example, `040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55`.
    
After you run the **Get-CalendarDiagnosticLog** cmdlet, you can analyze the calendar data using the **Get-CalendarDiagnosticAnalysis** cmdlet. For more information, see[Get-CalendarDiagnosticAnalysis](get-calendardiagnosticanalysis.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UnifiedGroupOrUserMailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that contains the calendar items. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _LogLocation_ <br/> |Required  <br/> |System.String  <br/> |The _LogLocation_ parameter specifies the location to export the calendar items to .msg files. You can specify a local path, or a UNC path (\\ _\<Server\>_\ _\<Share\>_). If the value contains spaces, enclose the value in quotation marks (").  <br/> In the location you specify, a subfolder is automatically created for the specified mailbox that holds the exported calendar items. For example, if you specify the value  `"C:\My Documents\Calendar Export"` to export calendar items from the mailbox of Shannon Steele, the .msg files are actually stored in `C:\My Documents\Calendar Export\ssteele@contoso.com`.  <br/> In on-premises Exchange organizations, you can use the **Get-CalendarDiagnosticAnalysis** cmdlet with the _LogLocation_ parameter to analyze the exported .msg files. <br/> **Note**: Commands that use this parameter might fail if the calendar item doesn't have a title. If you receive errors when you use this parameter, run the command again and replace this parameter with redirection to a file ( `> "C:\My Documents\Calendar Export"`) or substitute the output to a PowerShell variable.  <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _EntryId_ <br/> |Optional  <br/> |System.String  <br/> |The _EntryId_parameter filters the results by entry ID. You can specify multiple values separated by commas.  <br/> |
| _ExactMatch_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExactMatch_ parameter specifies whether to use an exact match or a partial match for text values that you specify for the _Subject_ parameter. Valid values are: <br/>  `$true`: The subject search uses an exact match. For example, if you search for "budget", the command returns all calendar items that have "budget" anywhere in the subject, but not "budgeting".  <br/>  `$false`: The subject search uses a partial match. For example, if you search for "budget", the command returns all calendar items that have "budget" and "budgeting" anywhere in the subject. This is the default value.  <br/>  A partial subject match search may not return all of the relevant calendar items. Try using an exact subject match search for more accurate results. <br/> |
| _ItemClass_ <br/> |Optional  <br/> |System.String[]  <br/> |The _ItemClass_ parameter filters the results by item class . You can specify multiple values separated by commas.. <br/> You can only use this parameter with the _MeetingID_ parameter. <br/> |
| _ItemIds_ <br/> |Optional  <br/> |System.String[]  <br/> |The _ItemIds_parameter filters the results by item ID. You can specify multiple values separated by commas.  <br/> |
| _Latest_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Latest_ switch specifies whether to return calendar log data for only the most recent calendar item. You don't need to specify a value with this switch. <br/> |
| _MeetingId_ <br/> |Optional  <br/> |System.String  <br/> |The _MeetingID_ parameter filters the results by the globally unique identifier of the calendar item. The value is the **CleanGloablObjectId** property of the calendar item that's available in the output of this cmdlet, or by using other MAPI examination tools. An example value is `040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55`. This value is constant throughout the lifetime of the calendar item.  <br/> To find this value, it's easiest to first search for the calendar item by using the _Subject_, _StartDate_, and _EndDate_ parameters. After you find the calendar item that you want, you can use its **CleanGloablObjectId** value for the _MeetingID_ parameter in future commands. <br/> Don't use this parameter with the _Subject_ parameter, because the value of the _MeetingID_ parameter takes precedence. <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _Subject_ <br/> |Optional  <br/> |System.String  <br/> |The _Subject_ parameter identifies the calendar items by the specified text in the **Subject** field. The text values that you specify aren't case sensitive. If the value contains spaces, enclose the value in quotation marks ("). You can control whether to use exact matching by using the _ExactMatch_ parameter. <br/> Don't use this parameter with the _MeetingID_ parameter, because the value of the _MeetingID_ parameter takes precedence. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

