---
title: "Get-AuditLogSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5550b2c9-cb38-41cd-82a5-41d2125ad2d5
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-AuditLogSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-AuditLogSearch** cmdlet to return a list of current audit log searches that were created with the **New-AdminAuditLogSearch** or **New-MailboxAuditLogSearch** cmdlets. The **Get-AuditLogSearch** cmdlet also returns audit log searches that are initiated whenever an administrator uses the Exchange admin center (EAC) to export audit logs.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-AuditLogSearch [-CreatedAfter <ExDateTime>] [-CreatedBefore <ExDateTime>] [-Identity <AuditLogSearchIdParameter>] [-ResultSize <Int32>] [-Type <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information for all current audit log searches.
  
```
Get-AuditLogSearch | FL
```

### Example 2

This example returns a list of current administrator audit log searches.
  
```
Get-AuditLogSearch -Type admin
```

## Detailed Description
<a name="DetailedDescription"> </a>

Run the **Get-AuditLogSearch** cmdlet to return a list of pending audit log searches. If an audit log search has been completed, it won't be displayed in the list of audit log searches.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CreatedAfter_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _CreatedAfter_ parameter filters the results to audit log searches that were created after the specified date. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _CreatedBefore_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _CreatedBefore_ parameter filters the results to audit log searches that were created before the specified date. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AuditLogSearchIdParameter  <br/> |The _Identity_ parameter specifies the GUID for an audit log search. You can run the command `Get-AuditLogSearch | Format-List Identity` to display the GUIDs for all current audit log searches. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Type_ <br/> |Optional  <br/> |System.String  <br/> |The _Type_ parameter specifies the type of audit log searches to return. Use the value `Admin` to return administrator audit log searches or use `mailbox` to return mailbox audit log searches. If the _Type_ parameter isn't used, the cmdlet returns both administrator and mailbox audit log searches. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

