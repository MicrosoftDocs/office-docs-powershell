---
title: "Get-MailboxCalendarFolder"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: dba2cebb-3c37-40ce-8ac0-93ec8d79ce0d
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxCalendarFolder

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxCalendarFolder** cmdlet to retrieve the publishing or sharing settings for a specified mailbox calendar folder.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxCalendarFolder -Identity <MailboxFolderIdParameter> [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the _Identity_ parameter specifies the mailbox with the alias format.
  
```
Get-MailboxCalendarFolder -Identity kai:\Calendar
```

### Example 2

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. This example also specifies DC1 as the domain controller to retrieve this information from Active Directory.
  
```
Get-MailboxCalendarFolder -Identity kai:\Calendar -DomainController DC1
```

### Example 3

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the _Identity_ parameter specifies the mailbox with the _domain\account_ format.
  
```
Get-MailboxCalendarFolder -Identity contoso\kai:\Calendar
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MailboxCalendarFolder** cmdlet retrieves information for the specified calendar folder. This information includes the calendar folder name, whether the folder is currently published or shared, the start and end range of calendar days published, the level of details published for the calendar, whether the published URL of the calendar can be searched on the web, and the published URL for the calendar.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> | The _Identity_ parameter specifies the mailbox and folder path or folder name to the calendar folder that has the publishing settings configured. You can use the following values: <br/>  GUID <br/>  ADObjectID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

