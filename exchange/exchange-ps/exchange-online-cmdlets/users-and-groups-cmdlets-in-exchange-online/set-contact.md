---
title: "Set-Contact"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: c86ca5af-bb1d-4619-8af8-9f04c83d84c5
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-Contact

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-Contact** cmdlet to modify contact object settings. If the contact is a mail contact, you can use the **Set-MailContact** cmdlet to modify other Microsoft Exchange settings that aren't available by using the **Set-Contact** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-Contact -Identity <ContactIdParameter> [-AllowUMCallsFromNonUsers <None | SearchEnabled>] [-AssistantName <String>] [-City <String>] [-Company <String>] [-Confirm [<SwitchParameter>]] [-CountryOrRegion <CountryInfo>] [-CreateDTMFMap <$true | $false>] [-Department <String>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Fax <String>] [-FirstName <String>] [-GeoCoordinates <GeoCoordinates>] [-HomePhone <String>] [-IgnoreDefaultScope <SwitchParameter>] [-Initials <String>] [-LastName <String>] [-Manager <UserContactIdParameter>] [-MobilePhone <String>] [-Name <String>] [-Notes <String>] [-Office <String>] [-OtherFax <MultiValuedProperty>] [-OtherHomePhone <MultiValuedProperty>] [-OtherTelephone <MultiValuedProperty>] [-Pager <String>] [-Phone <String>] [-PhoneticDisplayName <String>] [-PostalCode <String>] [-PostOfficeBox <MultiValuedProperty>] [-SeniorityIndex <Int32>] [-SimpleDisplayName <String>] [-StateOrProvince <String>] [-StreetAddress <String>] [-TelephoneAssistant <String>] [-Title <String>] [-UMCallingLineIds <MultiValuedProperty>] [-UMDtmfMap <MultiValuedProperty>] [-WebPage <String>] [-WhatIf [<SwitchParameter>]] [-WindowsEmailAddress <SmtpAddress>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example makes the following changes to the existing contact named Arlene Huff in the Users container in the Active Directory domain contoso.com:
  
- Change the  _City_ parameter value to Seattle.
    
- Change the  _Company_ parameter value to Contoso.
    
```
Set-Contact -Identity "contoso.com/Users/Arlene Huff" -City "Seattle" -Company "Contoso"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ContactIdParameter  <br/> | The _Identity_ parameter specifies the contact that you want to modify. You can use any value that uniquely identifies the contact. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _AllowUMCallsFromNonUsers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.AllowUMCallsFromNonUsersFlags  <br/> |The  _AllowUMCallsFromNonUsers_ parameter specifies whether to exclude the contact from directory searches. <br/> |
| _AssistantName_ <br/> |Optional  <br/> |System.String  <br/> |The  _AssistantName_ parameter specifies the name of the contact's assistant. <br/> |
| _City_ <br/> |Optional  <br/> |System.String  <br/> |The  _City_ parameter specifies the contact's city. <br/> |
| _Company_ <br/> |Optional  <br/> |System.String  <br/> |The  _Company_ parameter specifies the contact's company. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CountryOrRegion_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.CountryInfo  <br/> |The  _CountryOrRegion_ parameter specifies the contact's country or region. <br/> |
| _CreateDTMFMap_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _CreateDTMFMap_ parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are: <br/>  `$true`: A DTMF map is created for the recipient. This is the default value.  <br/>  `$false`: A DTMF map isn't created for the recipient.  <br/> |
| _Department_ <br/> |Optional  <br/> |System.String  <br/> |The  _Department_ parameter specifies the contact's department. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the display name of the contact. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> This parameter is meaninful only if the contact is mail-enabled.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Fax_ <br/> |Optional  <br/> |System.String  <br/> |The  _Fax_ parameter specifies the contact's fax number. <br/> |
| _FirstName_ <br/> |Optional  <br/> |System.String  <br/> |The  _FirstName_ parameter specifies the user's first name. <br/> |
| _GeoCoordinates_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.GeoCoordinates  <br/> | The _GeoCoordinates_ parameter specifies the contact's physical location in latitude, longitude, and altitude coordinates. Use this parameter to specify the global position of the contact's location. You have to specify one of the following sets of coordinates; use semicolons to separate the values: <br/> **Latitude and longitude**: For example,  `"47.644125;-122.122411"` <br/> **Latitude, longitude, and altitude**: For example,  `"47.644125;-122.122411;161.432"` <br/> |
| _HomePhone_ <br/> |Optional  <br/> |System.String  <br/> |The  _HomePhone_ parameter specifies the contact's home telephone number. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _Initials_ <br/> |Optional  <br/> |System.String  <br/> |The  _Initials_ parameter specifies the user's middle initials. <br/> |
| _LastName_ <br/> |Optional  <br/> |System.String  <br/> |The  _LastName_ parameter specifies the user's last name. <br/> |
| _Manager_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserContactIdParameter  <br/> |The  _Manager_ parameter specifies the contact's manager. <br/> |
| _MobilePhone_ <br/> |Optional  <br/> |System.String  <br/> |The  _MobilePhone_ parameter specifies the contact's primary mobile phone number. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the contact. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The  _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Office_ <br/> |Optional  <br/> |System.String  <br/> |The  _Office_ parameter specifies the user's physical office name or number. <br/> |
| _OtherFax_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _OtherFax_ parameter specifies the contact's alternative fax number. <br/> |
| _OtherHomePhone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _OtherHomePhone_ parameter specifies the contact's alternative home telephone number. <br/> |
| _OtherTelephone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _OtherTelephone_ parameter specifies the contact's alternative office telephone number. <br/> |
| _Pager_ <br/> |Optional  <br/> |System.String  <br/> |The  _Pager_ parameter specifies the contact's pager number. <br/> |
| _Phone_ <br/> |Optional  <br/> |System.String  <br/> |The  _Phone_ parameter specifies the contact's office telephone number. <br/> |
| _PhoneticDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _PhoneticDisplayName_ parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _PostalCode_ <br/> |Optional  <br/> |System.String  <br/> |The  _PostalCode_ parameter specifies the contact's postal code. <br/> |
| _PostOfficeBox_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _PostOfficeBox_ parameter specifies the contact's post office box number. <br/> |
| _SeniorityIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _SeniorityIndex_ parameter specifies the order in which this contact will display in a hierarchical address book. A contact with a value of 2 will display higher in an address book than a contact with a value of 1. <br/> |
| _SimpleDisplayName_ <br/> |Optional  <br/> |System.String  <br/> | The _SimpleDisplayName_ parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are: <br/>  a - z <br/>  A - Z <br/>  0 - 9 <br/>  " `<space>`", " `"`", " `'`", " `(`", " `)`", " `+`", " `,`", " `-`", " `.`", " `/`", " `:`", and " `?`".  <br/>  This parameter is meaningful only if the contact is mail-enabled. <br/> |
| _StateOrProvince_ <br/> |Optional  <br/> |System.String  <br/> |The  _StateOrProvince_ parameter specifies the contact's state or province. <br/> |
| _StreetAddress_ <br/> |Optional  <br/> |System.String  <br/> |The  _StreetAddress_ parameter specifies the contact's physical address. <br/> |
| _TelephoneAssistant_ <br/> |Optional  <br/> |System.String  <br/> |The  _TelephoneAssistant_ parameter specifies the telephone number of the contact's assistant. <br/> |
| _Title_ <br/> |Optional  <br/> |System.String  <br/> |The  _Title_ parameter specifies the contact's title. <br/> |
| _UMCallingLineIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _UMCallingLineIds_ parameter specifies telephone numbers or extensions that can be mapped to a Unified Messaging (UM)-enabled user. You can specify more than one telephone number for each user, separated by a comma. Values for this parameter must be less than 128 characters in length and may include an optional plus sign (+) that precedes the numbers. Each UM-enabled user must have a unique _UMCallingLineIds_ parameter value. <br/> |
| _UMDtmfMap_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UMDtmfMap_ parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax: <br/>  `emailAddress:<integers>` <br/>  `lastNameFirstName:<integers>` <br/>  `firstNameLastName:<integers>` <br/>  To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>`, `lastNameFirstName:<integers>`, `firstNameLastName:<integers>`.  <br/>  If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing  `lastNameFirstName` and `firstNameLastName` values are removed. <br/>  To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.  <br/>  If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<intgers2>}` to add two new values for `emailAddress` without affecting the existing `lastNameFirstName` and `firstNameLastName` values. <br/> |
| _WebPage_ <br/> |Optional  <br/> |System.String  <br/> |The  _WebPage_ parameter specifies the contact's web page. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsEmailAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> | The _WindowsEmailAddress_ parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the _WindowsEmailAddress_ parameter on a recipient has one of the following results: <br/>  In on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `True` for the recipient), the _WindowsEmailAddress_ parameter has no effect on the **WindowsEmailAddress** property or the primary email address value. <br/>  In cloud environments or in on-premises environments where the recipient isn't subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `False` for the recipient), the _WindowsEmailAddress_ parameter updates the **WindowsEmailAddress** property and the primary email address to the same value. <br/>  The **WindowsEmailAddress** property is visible for the recipient in Active Directory Users and Computers in the **E-mail** attribute. The attribute common name is `E-mail-Addresses`, and the **Ldap-Display-Name** is `mail`. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

