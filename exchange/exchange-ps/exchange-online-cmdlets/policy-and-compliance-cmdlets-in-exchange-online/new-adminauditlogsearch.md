---
title: "New-AdminAuditLogSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 52a221e0-ded1-44dc-a626-ca264eca4113
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-AdminAuditLogSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-AdminAuditLogSearch** cmdlet to search the contents of the administrator audit log and send the results to one or more mailboxes that you specify.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-AdminAuditLogSearch -EndDate <ExDateTime> -StartDate <ExDateTime> -StatusMailRecipients <MultiValuedProperty> [-Cmdlets <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExternalAccess <$true | $false>] [-Name <String>] [-ObjectIds <MultiValuedProperty>] [-Parameters <MultiValuedProperty>] [-UserIds <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example finds all the administrator audit log entries that match the following criteria and sends the results to the david@contoso.com and chris@contoso.com SMTP addresses:
  
- **Cmdlets**: **Set-Mailbox**
    
- **Parameters**:  _UseDatabaseQuotaDefaults_,  _ProhibitSendReceiveQuota_,  _ProhibitSendQuota_
    
- **StartDate**: 01/24/2015
    
- **EndDate**: 02/12/2015
    
```
New-AdminAuditLogSearch -Name "Mailbox Quota Change Audit" -Cmdlets Set-Mailbox -Parameters UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota -StartDate 01/24/2015 -EndDate 02/12/2015 -StatusMailRecipients david@contoso.com, chris@contoso.com
```

### Example 2

This example returns entries in the administrator audit log of an Exchange Online organization for cmdlets run by Microsoft datacenter administrators between September 25, 2015 and October 24, 2015. The search results are sent to the admin@contoso.com and pilarp@contoso.com SMTP addresses and the text "Datacenter admin audit log" is added to the subject line of the message.
  
```
New-AdminAuditLogSearch -ExternalAccess $true -StartDate 07/25/2015 -EndDate 10/24/2015 -StatusMailRecipients admin@contoso.com,pilarp@contoso.com -Name "Datacenter admin audit log"
```

## Detailed Description
<a name="DetailedDescription"> </a>

After the **New-AdminAuditLogSearch** cmdlet is run, the report is delivered to the mailboxes you specify within 15 minutes. The log is included as an XML attachment on the report email message. The maximum size of the log that can be generated is 10 megabytes (MB).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EndDate_ <br/> |Required  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StartDate_ <br/> |Required  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The  _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StatusMailRecipients_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _StatusMailRecipients_ parameter specifies the recipients that should receive the administrator audit log report. The recipient must be a valid SMTP address. <br/> If you want to specify more than one recipient, separate each SMTP address with a comma.  <br/> |
| _Cmdlets_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Cmdlets_ parameter specifies the cmdlets you want to search for in the administrator audit log. Only the log entries that contain the cmdlets you specify are returned. <br/> If you want to specify more than one cmdlet, separate each cmdlet with a comma.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExternalAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ExternalAccess_ parameter returns only audit log entries for cmdlets that were run by a user outside of your organization. In Exchange Online, use this parameter to return audit log entries for cmdlets run by Microsoft datacenter administrators. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the administrator audit log search. The name is shown in the subject line of the audit log report email message. <br/> If the name of the report contains spaces, enclose the name in quotation marks (").  <br/> |
| _ObjectIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ObjectIds_ parameter specifies that only administrator audit log entries that contain the specified changed objects should be returned. This parameter accepts a variety of objects, such as mailboxes, aliases, Send connector names, and so on. <br/> If you want to specify more than one object ID, separate each ID with a comma.  <br/> |
| _Parameters_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Parameters_ parameter specifies the parameters you want to search for in the administrator audit log. Only the log entries that contain the parameters you specify are returned. You can only use this parameter if you use the _Cmdlets_ parameter. <br/> If you want to specify more than one parameter, separate each parameter with a comma.  <br/> |
| _UserIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _UserIds_ parameter specifies that only the administrator audit log entries that contain the specified ID of the user who ran the cmdlet should be returned. <br/> If you want to specify more than one user ID, separate each ID with a comma.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

