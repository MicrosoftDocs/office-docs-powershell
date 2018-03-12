---
title: "Set-EOPUser"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 497785d1-c2ae-4ddd-af28-a96cb3e62332
description: "This cmdlet is available only in Exchange Online Protection."
---

# Set-EOPUser

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Set-EOPUser** cmdlet to modify general user object attributes in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Set-User** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-EOPUser [-City <String>] [-Company <String>] [-CountryOrRegion <CountryInfo>] [-Department <String>] [-DisplayName <String>] [-ExternalDirectoryObjectId <String>] [-Fax <String>] [-FirstName <String>] [-HomePhone <String>] [-Identity <UserIdParameter>] [-Initials <String>] [-LastName <String>] [-MobilePhone <String>] [-Notes <String>] [-Office <String>] [-Phone <String>] [-PostalCode <String>] [-StateOrProvince <String>] [-StreetAddress <String>] [-Title <String>] [-WebPage <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the company, display name, and title properties for the user Kitty Petersen.
  
```
Set-EOPUser -Identity "Kitty Petersen" -Company Contoso -DisplayName "Kitty Petersen" -Title "Vice President"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _City_ <br/> |Optional  <br/> |System.String  <br/> |The  _City_ parameter specifies the user's city. <br/> |
| _Company_ <br/> |Optional  <br/> |System.String  <br/> |The  _Company_ parameter specifies the user's company. <br/> |
| _CountryOrRegion_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.CountryInfo  <br/> |The  _CountryOrRegion_ parameter specifies the user's country or region. <br/> |
| _Department_ <br/> |Optional  <br/> |System.String  <br/> |The  _Department_ parameter specifies the user's department. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the user's display name. <br/> |
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Fax_ <br/> |Optional  <br/> |System.String  <br/> |The  _Fax_ parameter specifies the user's fax number. <br/> |
| _FirstName_ <br/> |Optional  <br/> |System.String  <br/> |The  _FirstName_ parameter specifies the user's first name. <br/> |
| _HomePhone_ <br/> |Optional  <br/> |System.String  <br/> |The  _HomePhone_ parameter specifies the user's home telephone number. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the user object that you want to modify. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _Initials_ <br/> |Optional  <br/> |System.String  <br/> |The  _Initials_ parameter specifies the user's middle initials. <br/> |
| _LastName_ <br/> |Optional  <br/> |System.String  <br/> |The  _FirstName_ parameter specifies the user's first name. <br/> |
| _MobilePhone_ <br/> |Optional  <br/> |System.String  <br/> |The  _MobilePhone_ parameter specifies the user's primary mobile phone number. <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The  _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Office_ <br/> |Optional  <br/> |System.String  <br/> |The  _Office_ parameter specifies the user's physical office name or number. <br/> |
| _Phone_ <br/> |Optional  <br/> |System.String  <br/> |The  _Phone_ parameter specifies the user's telephone number. <br/> |
| _PostalCode_ <br/> |Optional  <br/> |System.String  <br/> |The  _PostalCode_ parameter specifies the user's zip code or postal code. <br/> |
| _StateOrProvince_ <br/> |Optional  <br/> |System.String  <br/> |The  _StateOrProvince_ parameter specifies the user's state or province. <br/> |
| _StreetAddress_ <br/> |Optional  <br/> |System.String  <br/> |The  _StreetAddress_ parameter specifies the user's physical address. <br/> |
| _Title_ <br/> |Optional  <br/> |System.String  <br/> |The  _Title_ parameter specifies the user's title. <br/> |
| _WebPage_ <br/> |Optional  <br/> |System.String  <br/> |The  _WebPage_ parameter specifies the user's Web page. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

