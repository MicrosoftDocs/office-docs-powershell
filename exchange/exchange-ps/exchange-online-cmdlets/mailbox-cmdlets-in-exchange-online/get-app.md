---
title: "Get-App"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 85dfb69d-d637-410e-931c-36685dda84c7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-App

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-App** cmdlet to view installed apps.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-App [-Identity <AppIdParameter>] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>] [-OrganizationApp <SwitchParameter>] [-PrivateCatalog <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the summary list of apps installed for user Tony. The command returns the name of the app, whether the app is enabled, and the app version number.
  
```
Get-App -Mailbox Tony
```

### Example 2

This example displays detailed information for the Bing Maps app for the currently logged on user.
  
```
Get-App -Identity 7a774f0c-7a6f-11e0-85ad-07fb4824019b | Format-List
```

### Example 3

This example displays the summary list of apps installed by administrators for the entire organization.
  
```
Get-App -OrganizationApp
```

For information about installing or removing apps for Outlook, see [Install and Remove Apps for Outlook for Your Organization](http://technet.microsoft.com/library/112f3ef7-9943-4a1e-8a42-e08e8e9f67f4.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-App** cmdlet returns information about all installed apps or the details of a specific installed app.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AppIdParameter  <br/> |The  _Identity_ parameter specifies the GUID of the app that you want to view. To find the GUID value of an app, run the command `Get-App | Format-Table -Auto DisplayName,AppId`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the identity of the mailbox where the apps are installed. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _OrganizationApp_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _OrganizationApp_switch includes apps that are installed for the organization (not bound to a specific user) in the results. You don't need to specify a value with this switch.  <br/> |
| _PrivateCatalog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PrivateCatalog_switch includes private catalog add-ins in the results. You don't need to specify a value with this switch.  <br/> You need to use this switch with the  _OrganizationApp_ switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

