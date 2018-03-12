---
title: "Get-CalendarDiagnosticAnalysis"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1ccb3442-1101-45c5-8508-599af6e56076
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-CalendarDiagnosticAnalysis

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-CalendarDiagnosticAnalysis** cmdlet to troubleshoot calendar-related reliability issues. You can use this cmdlet to analyze calendar item data that's recorded in the Calendar Diagnostic logs. You provide the calendar item data to this cmdlet by using the **Get-CalendarDiagnosticLog** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-CalendarDiagnosticAnalysis -CalendarLogs <CalendarLog[]> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example gets the specified calendar item from Oscar Evans' mailbox, stores the item as a variable, and writes the advanced analysis of the item to a CSV file.
  
```
$logs = Get-CalendarDiagnosticLog -Identity oevans -MeetingID 040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F; Get-CalendarDiagnosticAnalysis -CalendarLogs $logs -DetailLevel Advanced> "C:\My Documents\Oscar Evans Analysis.csv"
```

For basic analysis of the item, don't include the _DetailLevel_ parameter, or use the value `Basic` instead of `Advanced`.
  
### Example 2

This example analyzes the calendar items that were exported from Jasen Kozma's mailbox by using the **Get-CalendarDiagnosticLog** cmdlet with the _LogLocation_ parameter, and writes the advanced analysis of the items to an HTML file.
  
```
Get-CalendarDiagnosticAnalysis -LogLocation "C:\My Documents\Exported Calendar Logs\jkozma@contoso.com" -DetailLevel Advanced -OutputAs HTML > "C:\My Documents\Jasen Kozma Analysis.html"
```

For basic analysis of the items, don't include the _DetailLevel_ parameter, or use the value `Basic` instead of `Advanced`.
  
## Detailed Description
<a name="DetailedDescription"> </a>

The following properties of the calendar item are returned in the default output of the cmdlet (when the _DetailLevel_ parameter is set to `Basic`):
  
- **Local Log Time**
    
- **ItemId**
    
- **NormalizedSubject**
    
- **StartTime**
    
- **EndTime**
    
- **CalendarLogTriggerAction**
    
- **ClientInfoString**
    
- **OriginalLastModifiedTime**
    
- **ClientIntent**
    
- **CleanGlobalObjectId**
    
- **ItemClass**
    
- **ParentDisplay**
    
- **Duration**
    
- **AppointmentRecurring**
    
- **SentRepresentingEmailAddress**
    
- **SenderEmailAddress**
    
- **SentRepresentingDisplayName**
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CalendarLogs_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.CalendarLog[]  <br/> |The _CalendarLogs_ parameter specifies the calendar item that you want to analyze. You identify the calendar item by storing the output of the **Get-CalendarDiagnosticLog** cmdlet to a variable, and using that variable for the value of this parameter. <br/> For example, to analyze the meeting with the subject "November Budget Meeting" in Shannon Steele's mailbox, run the command  `$Budget = Get-CalendarDiagnosticLog -Identity "Shannon Steele" -Subject "November Budget Meeting" -ExactMatch`, and then use the value  `$Budget` for this parameter. <br/> Note that you can't use this parameter to analyze multiple calendar items. The value that you use for this parameter must identify a single item.  <br/> You can't use this parameter with the _LogLocation_ parameter. <br/> |
| _LogLocation_ <br/> |Required  <br/> |System.String[]  <br/> |The _LogLocation_ parameter specifies the location of the exported calendar items that you want to analyze. You can specify a local path, or a UNC path (\\ _\<Server\>_\ _\<Share\>_\ _\<User\>_). If the value contains spaces, enclose the value in quotation marks (").  <br/> You export the calender items to .msg files by using the **Get-CalendarDiagnosticLog** cmdlet with the _LogLocation_ parameter. If the path contains multiple .msg files, all of those files are analyzed when you run **Get-CalendarDiagnosticAnalysis**. <br/> You can't use this parameter with the _CalendarLogs_ parameter. <br/> |
| _DetailLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.StoreTasks.AnalysisDetailLevel  <br/> | The _DetailLevel_ parameter specifies the level of detail you want to see in the analysis output. Valid values are: <br/>  `Basic`: This is the default value. The calendar item properties that are returned are listed in the Detailed Description.  <br/>  `Advanced`: 37 additional calendar item properties are returned. You should use this value only for detailed debugging information.  <br/> |
| _GlobalObjectId_ <br/> |Optional  <br/> |System.String  <br/> |The _GlobalObjectId_ parameter specifies the identity of the calendar item you want to analyze. You can use this parameter with the _LogLocation_ parameter to specify the calendar item if the location contains multiple exported .msg files. <br/> The **GlobalObjectId** property of the meeting uses the same format as the **CleanGlobalObjectId** property (for example, `040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F`), and the value of the two properties is likely the same. However, the value of **GlobalObjectId** might not stay the same for all instances of the same meeting in multiple calendars (for example, different attendees invited to different instances of the same recurring meeting). <br/> |
| _OutputAs_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.StoreTasks.OutputType  <br/> | The _OutputAs_ parameter specifies the output format of the command. Valid values are: <br/>  `CSV` (This is the default value) <br/>  `HTML` <br/>  `XML` <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

