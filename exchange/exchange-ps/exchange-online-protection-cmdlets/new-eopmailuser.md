---
title: "New-EOPMailUser"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 0520cf33-4ad0-44e4-99a3-1b485739fc05
description: "This cmdlet is available only in Exchange Online Protection."
---

# New-EOPMailUser

This cmdlet is available only in Exchange Online Protection. 
  
Use the **New-EOPMailUser** cmdlet to create mail users, also known asmail-enabled users, in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **New-MailUser** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-EOPMailUser -MicrosoftOnlineServicesID <WindowsLiveId> -Name <String> -Password <String> [-Alias <String>] [-DisplayName <String>] [-ExternalEmailAddress <ProxyAddress>] [-FirstName <String>] [-Initials <String>] [-LastName <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a mail user object for Ed Meadows while specifying several additional optional parameters and using an in-line method of password encryption.
  
```
New-EOPMailUser -Name EdMeadows -MicrosoftOnlineServicesID EdMeadows@Contoso.onmicrosoft.com -ExternalEmailAddress EdMeadows@tailspintoys.com -Password (ConvertTo-SecureString -String 'Pa$$w0rd' -AsPlainText -Force) -FirstName Ed -LastName Meadows -DisplayName "Ed Meadows" -Alias edm
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _MicrosoftOnlineServicesID_ <br/> |Required  <br/> |Microsoft.Exchange.Data.WindowsLiveId  <br/> |The  _MicrosoftOnlineServicesID_ parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the mail user object. The value specified in the _Name_ parameter is also used for the _DisplayName_ parameter if the _DisplayName_ parameter isn't specified. <br/> The  _Name_ parameter value can't exceed 64 characters. <br/> |
| _Password_ <br/> |Required  <br/> |System.String  <br/> |The  _Password_ parameter the password for the mail user. <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> |The  _Alias_ parameter specifies the alias of the mail user. <br/> The value of  _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the  _Alias_ value is 64 characters. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the name of the mail user in the Exchange admin center (EAC). <br/> |
| _ExternalEmailAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ProxyAddress  <br/> |The  _ExternalEmailAddress_ parameter specifies the user's email address that's outside of the Exchange Online Protection organization. Email messages sent to the mail user are relayed to this external address. <br/> |
| _FirstName_ <br/> |Optional  <br/> |System.String  <br/> |The  _FirstName_ parameter specifies the user's first name. <br/> |
| _Initials_ <br/> |Optional  <br/> |System.String  <br/> |The  _Initials_ parameter specifies the user's middle initials. <br/> |
| _LastName_ <br/> |Optional  <br/> |System.String  <br/> |The  _LastName_ parameter specifies the user's last name. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

