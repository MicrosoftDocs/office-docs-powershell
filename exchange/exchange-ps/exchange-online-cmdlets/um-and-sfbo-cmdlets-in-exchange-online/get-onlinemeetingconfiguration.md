---
title: "Get-OnlineMeetingConfiguration"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 76c698d3-7b0c-444e-bfdd-da4ecd906300
description: "This cmdlet is available only in the cloud-based service."
---

# Get-OnlineMeetingConfiguration

This cmdlet is available only in the cloud-based service.
  
Use the **Get-OnlineMeetingConfiguration** cmdlet to view status and usage information about Skype Meetings and Skype for Business Online for mailboxes. Skype Meetings automatically includes Skype for Business Online conference join information in Exchange Online meeting invitations.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-OnlineMeetingConfiguration -Identity <MailboxIdParameter> [-DomainController <Fqdn>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example gets the Skype Meetings configuration for the specified mailbox.
  
```
Get-OnlineMeetingConfiguration -Identity carlam@fourthcoffee.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Exchange Online maintains a per-user cache of Skype for Business Online meeting information that's updated every 24 hours. The **Get-OnlineMeetingConfiguration** cmdlet provides the following information about the Skype Meetings configuration and the Skype for Business Online meeting information for the user:
  
- **IsAutoOnlineMeetingEnabled**: Indicates if Skype Meetings is enabled for the mailbox.
    
- **OnlineMeetingInfo**: Skype for Business Online meeting coordinates.
    
- **LastSyncTime**: The last time Exchange Online successfully synchronized meeting coordinates from Skype for Business Online.
    
- **LastSuccessfulSyncTime**: The last time Exchange Online successfully cleaned the cached of used Skype for Business Online meeting coordinates.
    
To enable and disable Skype Meetings for an Office 365 organization, you use the  _EnableAutoSchedule_ parameter on the **Set-CsCloudMeetingConfiguration** cmdlet in Skype for Business Online PowerShell. After you enable Skype Meetings in the organization, you can enable or disable it on specific users by using the **Grant-CsCloudMeetingPolicy** cmdlet in Skype for Business Online PowerShell. For more information, see the following Skype for Business Online PowerShell topics:
  
- [Set-CsCloudMeetingConfiguration](https://go.microsoft.com/fwlink/p/?LinkId=826065)
    
- [Grant-CsCloudMeetingPolicy](https://go.microsoft.com/fwlink/p/?LinkId=826066)
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

