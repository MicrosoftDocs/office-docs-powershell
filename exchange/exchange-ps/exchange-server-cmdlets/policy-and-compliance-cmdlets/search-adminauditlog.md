---
title: "Search-AdminAuditLog"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 87a0cd2d-dd59-4098-b740-75f0cc7bf8e7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Search-AdminAuditLog

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Search-AdminAuditLog** cmdlet to search the contents of the administrator audit log.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Search-AdminAuditLog [-Cmdlets <MultiValuedProperty>] [-EndDate <ExDateTime>] [-ExternalAccess <$true | $false>] [-IsSuccess <$true | $false>] [-ObjectIds <MultiValuedProperty>] [-Parameters <MultiValuedProperty>] [-ResultSize <Int32>] [-StartDate <ExDateTime>] [-StartIndex <Int32>] [-UserIds <MultiValuedProperty>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example finds all the administrator audit log entries that contain either the **New-RoleGroup** or the **New-ManagementRoleAssignment** cmdlet.
  
```
Search-AdminAuditLog -Cmdlets New-RoleGroup, New-ManagementRoleAssignment
```

### Example 2

This example finds all the administrator audit log entries that match the following criteria:
  
- _Cmdlets_: **Set-Mailbox**
    
- _Parameters_: _UseDatabaseQuotaDefaults_, _ProhibitSendReceiveQuota_, _ProhibitSendQuota_
    
- _StartDate_: 01/24/2015
    
- _EndDate_: 02/12/2015
    
- The command completed successfully
    
```
Search-AdminAuditLog -Cmdlets Set-Mailbox -Parameters UseDatabaseQuotaDefaults, ProhibitSendReceiveQuota, ProhibitSendQuota -StartDate 01/24/2015 -EndDate 02/12/2015 -IsSuccess $true
```

### Example 3

This example displays all the comments written to the administrator audit log by the **Write-AdminAuditLog** cmdlet.
  
First, store the audit log entries in a temporary variable. Then, iterate through all the audit log entries returned and display the **Parameters** property.
  
```
$LogEntries = Search-AdminAuditLog -Cmdlets Write-AdminAuditLog; $LogEntries | ForEach { $_.CmdletParameters }
```

### Example 4

This example returns entries in the administrator audit log of an Exchange Online organization for cmdlets run by Microsoft datacenter administrators between September 17, 2015 and October 2, 2015.
  
```
Search-AdminAuditLog -ExternalAccess $true -StartDate 09/17/2015 -EndDate 10/02/2015
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you run the **Search-AdminAuditLog** cmdlet without any parameters, up to 1,000 log entries are returned by default.
  
 **Note**: In Exchange Online, if you don't use the _StartDate_ or _EndDate_ parameters, only results from the last 14 days are returned.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Cmdlets_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Cmdlets_ parameter specifies the cmdlets you want to search for in the administrator audit log. Only the log entries that contain the cmdlets you specify are returned. <br/> If you want to specify more than one cmdlet, separate each cmdlet with a comma.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EndDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _EndDate_ parameter specifies the end date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _ExternalAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ExternalAccess_ parameter returns only audit log entries for cmdlets that were run by a user outside of your organization. In Exchange Online, use this parameter to return audit log entries for cmdlets run by Microsoft datacenter administrators. <br/> |
| _IsSuccess_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsSuccess_ parameter specifies whether only administrator audit log entries that indicated a success or failure should be returned. Valid values are `$true` and `$false`.  <br/> |
| _ObjectIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ObjectIds_ parameter specifies that only administrator audit log entries that contain the specified changed objects should be returned. This parameter accepts a variety of objects, such as mailbox aliases, Send connector names, and so on. <br/> If you want to specify more than one object ID, separate each ID with a comma.  <br/> |
| _Parameters_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Parameters_ parameter specifies the parameters you want to search for in the administrator audit log. Only the log entries that contain the parameters you specify are returned. You can only use this parameter if you use the _Cmdlets_ parameter. <br/> If you want to specify more than one parameter, separate each parameter with a comma.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _StartDate_ <br/> |Optional  <br/> |Microsoft.Exchange.ExchangeSystem.ExDateTime  <br/> |The _StartDate_ parameter specifies the start date of the date range. <br/> Use the short date format that's defined in the **Regional Options** settings on the computer where you're running the command. For example, if the computer is configured to use the short date format _mm_/ _dd_/ _yyyy_, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example,"09/01/2015 5:00 PM".  <br/> |
| _StartIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _StartIndex_ parameter specifies the position in the result set where the displayed results start. <br/> |
| _UserIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _UserIds_ parameter specifies that only the administrator audit log entries that contain the specified ID of the user who ran the cmdlet should be returned. <br/> If you want to specify more than one user ID, separate each ID with a comma.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

