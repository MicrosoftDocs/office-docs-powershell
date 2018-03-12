---
title: "Set-EOPMailUser"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 834c3de6-1485-4d50-bb96-262a2c0c8619
description: "This cmdlet is available only in Exchange Online Protection."
---

# Set-EOPMailUser

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Set-EOPMailUser** cmdlet to modify mail users, also known asmail-enabled users, in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Set-MailUser** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-EOPMailUser [-Alias <String>] [-DisplayName <String>] [-EmailAddresses <ProxyAddressCollection>] [-ExternalDirectoryObjectId <String>] [-Identity <MailUserIdParameter>] [-MicrosoftOnlineServicesID <SmtpAddress>] [-Password <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the display name for the mail user Edward Meadows to "Ed Meadows."
  
```
Set-EOPMailUser -Identity "Edward Meadows" -DisplayName "Ed Meadows"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> |The  _Alias_ parameter specifies the alias of the mail user. <br/> The value of  _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the  _Alias_ value is 64 characters. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the display name of the mail user in the Exchange admin center (EAC). <br/> |
| _EmailAddresses_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ProxyAddressCollection  <br/> |The  _EmailAddresses_ parameter specifies the primary email address and other proxy addresses for the mail user. This parameter uses the syntax `SMTP:<PrimaryEmailAddress>,<ProxyAddress>`.  <br/> The values that you specify for this parameter overwrite any existing values.  <br/> |
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailUserIdParameter  <br/> | The _Identity_ parameter specifies the mail user that you want to modify. You can use any value that uniquely identifies the mail user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _MicrosoftOnlineServicesID_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _MicrosoftOnlineServicesID_ parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments. <br/> |
| _Password_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

