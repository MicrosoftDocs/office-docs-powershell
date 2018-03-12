---
title: "Set-User"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 56d7fc86-2ac3-4e28-bc7a-761e91ac655a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-User

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-User** cmdlet to modify user attributes. You can use this cmdlet to modify all objects that have user accounts (for example, user mailboxes, mail users, and user accounts).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-User -Identity <UserIdParameter> [-AllowUMCallsFromNonUsers <None | SearchEnabled>] [-Arbitration <SwitchParameter>] [-AssistantName <String>] [-AuthenticationPolicy <AuthPolicyIdParameter>] [-CertificateSubject <MultiValuedProperty>] [-City <String>] [-Company <String>] [-Confirm [<SwitchParameter>]] [-CountryOrRegion <CountryInfo>] [-CreateDTMFMap <$true | $false>] [-Department <String>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Fax <String>] [-FirstName <String>] [-GeoCoordinates <GeoCoordinates>] [-HomePhone <String>] [-IgnoreDefaultScope <SwitchParameter>] [-Initials <String>] [-LastName <String>] [-LinkedCredential <PSCredential>] [-LinkedDomainController <String>] [-LinkedMasterAccount <UserIdParameter>] [-Manager <UserContactIdParameter>] [-MobilePhone <String>] [-Name <String>] [-Notes <String>] [-Office <String>] [-OtherFax <MultiValuedProperty>] [-OtherHomePhone <MultiValuedProperty>] [-OtherTelephone <MultiValuedProperty>] [-Pager <String>] [-PermanentlyClearPreviousMailboxInfo <SwitchParameter>] [-Phone <String>] [-PhoneticDisplayName <String>] [-PostalCode <String>] [-PostOfficeBox <MultiValuedProperty>] [-PublicFolder <SwitchParameter>] [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>] [-SeniorityIndex <Int32>] [-SimpleDisplayName <String>] [-SkipDualWrite <SwitchParameter>] [-StateOrProvince <String>] [-StreetAddress <String>] [-TelephoneAssistant <String>] [-Title <String>] [-UMCallingLineIds <MultiValuedProperty>] [-UMDtmfMap <MultiValuedProperty>] [-UserPrincipalName <String>] [-WebPage <String>] [-WhatIf [<SwitchParameter>]] [-WindowsEmailAddress <SmtpAddress>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the display name for user Jill Frank.
  
```
Set-User -Identity Contoso\Jill -DisplayName "Jill Frank"
```

### Example 2

This example unlinks the linked mailbox Kweku@fabrikam.com and converts it to a user mailbox by setting the _LinkedMasterAccount_ parameter to `$null`.
  
> [!IMPORTANT]
> Performing this procedure on a linked mailbox removes all permissions on the mailbox such as Send As, Full Access, folder, and calendar delegation. 
  
```
Set-User -Identity Kweku@fabrikam.com -LinkedMasterAccount $null
```

## Detailed Description
<a name="DetailedDescription"> </a>

 The **Set-User** cmdlet contains no mail-related properties for mailboxes or mail users. To modify the mail-related properties for a user, you need to use the corresponding cmdlet based on the object type (for example, **Set-Mailbox** or **Set-MailUser** ).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the user that you want to modify. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _AllowUMCallsFromNonUsers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.AllowUMCallsFromNonUsersFlags  <br/> |The _AllowUMCallsFromNonUsers_ parameter specifies whether to exclude the user from directory searches. <br/> |
| _Arbitration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Arbitration_ parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval. <br/> |
| _AssistantName_ <br/> |Optional  <br/> |System.String  <br/> |The _AssistantName_ parameter specifies the name of the user's assistant. <br/> |
| _AuthenticationPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AuthPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CertificateSubject_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _CertificateSubject_ parameter specifies the value of the subject field of the user's digital certificate. <br/> |
| _City_ <br/> |Optional  <br/> |System.String  <br/> |The _City_ parameter specifies the user's city. <br/> |
| _Company_ <br/> |Optional  <br/> |System.String  <br/> |The _Company_ parameter specifies the user's company. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CountryOrRegion_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.CountryInfo  <br/> |The _CountryOrRegion_ parameter specifies the user's country or region. <br/> |
| _CreateDTMFMap_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _CreateDTMFMap_ parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are: <br/>  `$true`: A DTMF map is created for the recipient. This is the default value.  <br/>  `$false`: A DTMF map isn't created for the recipient.  <br/> |
| _Department_ <br/> |Optional  <br/> |System.String  <br/> |The _Department_ parameter specifies the user's department. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name of the user. The display name is visible in the Exchange admin center and in Active Directory. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Fax_ <br/> |Optional  <br/> |System.String  <br/> |The _Fax_ parameter specifies the user's fax number. <br/> |
| _FirstName_ <br/> |Optional  <br/> |System.String  <br/> |The _FirstName_ parameter specifies the user's first name. <br/> |
| _GeoCoordinates_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.GeoCoordinates  <br/> | The _GeoCoordinates_ parameter specifies the user's physical location in latitude, longitude, and altitude coordinates. Use this parameter to specify the global position of physical resources, such as conference rooms. You have to specify one of the following sets of coordinates; use semicolons to separate the values. <br/>  Latitude and longitude; for example, `"47.644125;-122.122411"` <br/>  Latitude, longitude, and altitude; for example, `"47.644125;-122.122411;161.432"` <br/> |
| _HomePhone_ <br/> |Optional  <br/> |System.String  <br/> |The _HomePhone_ parameter specifies the user's home telephone number. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _Initials_ <br/> |Optional  <br/> |System.String  <br/> |The _Initials_ parameter specifies the user's middle initials. <br/> |
| _LastName_ <br/> |Optional  <br/> |System.String  <br/> |The _LastName_ parameter specifies the user's last name. <br/> |
| _LinkedCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedCredential_ parameter specifies credentials to use to access the domain controller specified by the _LinkedDomainController_ parameter. <br/> You can only use the _LinkedCredential_ parameter with a linked user. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _LinkedDomainController_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedDomainController_ parameter specifies the domain controller in the forest where the user account resides, if this user is a linked user. The domain controller in the forest where the user account resides is used to get security information for the account specified by the _LinkedMasterAccount_ parameter. <br/> This parameter is required only if you're connecting a linked user.  <br/> |
| _LinkedMasterAccount_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _LinkedMasterAccount_ parameter specifies the master account in the forest where the user account resides, if this user is a linked user. The master account is the account to which the user links. The master account grants access to the user. You can use one of the following values: <br/>  GUID <br/>  DN <br/> _Domain_\ _Account_ <br/>  UPN <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/>  `$null` <br/>  If you set this parameter's value to `$null`, you will unlink the account and convert the linked mailbox into a non-linked user mailbox. The mailbox won't retain the permissions previously set on it such as Send As, full access, folder, and calendar delegation.  <br/>  This parameter is required only if you're connecting a linked user. <br/> |
| _Manager_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserContactIdParameter  <br/> |The _Manager_ parameter specifies the user's manager. <br/> |
| _MobilePhone_ <br/> |Optional  <br/> |System.String  <br/> |The _MobilePhone_ parameter specifies the user's primary mobile phone number. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name of the user. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Office_ <br/> |Optional  <br/> |System.String  <br/> |The _Office_ parameter specifies the user's physical office name or number. <br/> |
| _OtherFax_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _OtherFax_ parameter specifies the user's alternative fax number. <br/> |
| _OtherHomePhone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _OtherHomePhone_ parameter specifies the user's alternative home telephone number. <br/> |
| _OtherTelephone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _OtherTelephone_ parameter specifies the user's alternative telephone number. <br/> |
| _Pager_ <br/> |Optional  <br/> |System.String  <br/> |The _Pager_ parameter specifies the user's pager number. <br/> |
| _PermanentlyClearPreviousMailboxInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PermanentlyClearPreviousMailboxInfo_switch specifies whether to clear the Exchange mailbox attributes on a user. You don't need to specify a value with this switch.  <br/> Clearing these attributes might be required in mailbox move and re-licensing scenarios between on-premises Exchange and Office 365.  <br/> |
| _Phone_ <br/> |Optional  <br/> |System.String  <br/> |The _Phone_ parameter specifies the user's office telephone number. <br/> |
| _PhoneticDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _PhoneticDisplayName_ parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _PostalCode_ <br/> |Optional  <br/> |System.String  <br/> |The _PostalCode_ parameter specifies the user's zip code or postal code. <br/> |
| _PostOfficeBox_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _PostOfficeBox_ parameter specifies the user's post office box number. <br/> |
| _PublicFolder_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublicFolder_ switch specifies that the user is a public folder mailbox. This switch is required to only when you change the settings of public folder mailboxes. You don't need to specify a value with this switch. <br/> Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders.  <br/> |
| _RemotePowerShellEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _RemotePowerShellEnabled_ parameter specifies whether the user has access to remote PowerShell. Remote PowerShell access is required to open the Exchange Management Shell or the Exchange admin center (EAC), even if you're trying to open the Exchange Management Shell or the EAC on the local Mailbox server. Valid values are: <br/>  `$true`: The user has access to remote PowerShell.  <br/>  `$false`: The user doesn't have access to remote PowerShell.  <br/>  The default value depends on the management roles that are assigned to the user. <br/> |
| _ResetPasswordOnNextLogon_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ResetPasswordOnNextLogon_ parameter specifies whether the user must change their password the next time they log on. Valid values are: <br/>  `$true`: The user is required to change their password the next time they log on.  <br/>  `$false`: The user isn't required to change their password the next time they log on. This is the default value.  <br/> |
| _SamAccountName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _SamAccountName_ parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &amp;, -, _, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters. <br/> |
| _SeniorityIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _SeniorityIndex_ parameter specifies the order in which this user will display in a hierarchical address book. A user with a value of 2 will display higher in an address book than a user with a value of 1. <br/> |
| _SimpleDisplayName_ <br/> |Optional  <br/> |System.String  <br/> | The _SimpleDisplayName_ parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are: <br/>  a - z <br/>  A - Z <br/>  0 - 9 <br/>  " `<space>`", " `"`", " `'`", " `(`", " `)`", " `+`", " `,`", " `-`", " `.`", " `/`", " `:`", and " `?`".  <br/> |
| _SkipDualWrite_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StateOrProvince_ <br/> |Optional  <br/> |System.String  <br/> |The _StateOrProvince_ parameter specifies the user's state or province. <br/> |
| _StreetAddress_ <br/> |Optional  <br/> |System.String  <br/> |The _StreetAddress_ parameter specifies the user's physical address. <br/> |
| _TelephoneAssistant_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _TelephoneAssistant_ parameter specifies the telephone number of the user's assistant. <br/> |
| _Title_ <br/> |Optional  <br/> |System.String  <br/> |The _Title_ parameter specifies the user's title. <br/> |
| _UMCallingLineIds_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _UMCallingLineIds_ parameter specifies telephone numbers or extensions that can be mapped to a Unified Messaging (UM)-enabled user. You can specify more than one telephone number for each user, separated by a comma. This parameter accepts digits less than 128 characters in length and may include an optional plus sign (+) preceding the numbers. Each UM-enabled user must have a unique _UMCallingLineIds_ parameter value. <br/> |
| _UMDtmfMap_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UMDtmfMap_ parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax: <br/>  `emailAddress:<integers>` <br/>  `lastNameFirstName:<integers>` <br/>  `firstNameLastName:<integers>` <br/>  To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>`, `lastNameFirstName:<integers>`, `firstNameLastName:<integers>`.  <br/>  If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing  `lastNameFirstName` and `firstNameLastName` values are removed. <br/>  To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.  <br/>  If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<intgers2>}` to add two new values for `emailAddress` without affecting the existing `lastNameFirstName` and `firstNameLastName` values. <br/> |
| _UserPrincipalName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _UserPrincipalName_ parameter specifies the logon name for the user account. The UPN uses an email address format _\<username\>_@ _\<domain\>_. Typically, the _\<domain\>_ value is the domain where the user account resides. <br/> |
| _WebPage_ <br/> |Optional  <br/> |System.String  <br/> |The _WebPage_ parameter specifies the user's Web page. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsEmailAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> | The _WindowsEmailAddress_ parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the _WindowsEmailAddress_ parameter on a recipient has one of the following results: <br/>  In on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `True` for the recipient), the _WindowsEmailAddress_ parameter has no effect on the **WindowsEmailAddress** property or the primary email address value. <br/>  In cloud environments or in on-premises environments where the recipient isn't subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `False` for the recipient), the _WindowsEmailAddress_ parameter updates the **WindowsEmailAddress** property and the primary email address to the same value. <br/>  The **WindowsEmailAddress** property is visible for the recipient in Active Directory Users and Computers in the **E-mail** attribute. The attribute common name is `E-mail-Addresses`, and the **Ldap-Display-Name** is `mail`. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

