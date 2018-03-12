---
title: "Get-CalendarNotification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 62a20bc1-1e3c-43c5-8a33-94781e24baed
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-CalendarNotification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-CalendarNotification** cmdlet to return a list of all calendar notification settings for a user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-CalendarNotification -Identity <MailboxIdParameter> [-Credential <PSCredential>] [-DomainController <Fqdn>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the calendar notification settings for the user Tony Smith using the user's alias.
  
```
Get-CalendarNotification -Identity "TonySmith"
```

### Example 2

This example returns the calendar notification settings for the user Tony Smith.
  
```
Get-CalendarNotification -Identity tony@contoso.com -ReadFromDomainController
```

### Example 3

This example returns the calendar notification settings for the user Tony Smith using the user's domain and name.
  
```
Get-CalendarNotification -Identity "contoso\tonysmith"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-CalendarNotification** cmdlet retrieves and displays the rules used to trigger the calendar agenda notification, reminder notification, or update notification.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The  _Identity_ parameter specifies the mailbox ID for the user's mailbox. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credential_ parameter specifies the user credentials used to run the command. This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReadFromDomainController_ parameter specifies whether the command should return data from the domain controller. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the amount of data returned. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

