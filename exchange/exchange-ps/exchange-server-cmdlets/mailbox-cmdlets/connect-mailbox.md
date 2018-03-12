---
title: "Connect-Mailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 48757062-abe5-4c61-acc5-5884569c1d8b

description: "This cmdlet is available only in on-premises Exchange."
---

# Connect-Mailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **Connect-Mailbox** cmdlet to connect disconnected mailboxes to existing user accounts that don't already have mailboxess.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Connect-Mailbox [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-AllowLegacyDNMismatch <SwitchParameter>] [-Archive <SwitchParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed <SwitchParameter>] [-RetentionPolicy <MailboxPolicyIdParameter>] [-User <UserIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example connects John Evans' disconnected mailbox. The example doesn't specify a user to connect the mailbox to, so the command attempts to find a uniquely matched user object.
  
```
Connect-Mailbox -Database "Mailbox Database" -Identity "John Evans"
```

### Example 2

This example connects a linked mailbox.
  
```
Connect-Mailbox -Identity "John Evans" -Database "MBXDB02" -LinkedDomainController FabrikamDC01 -LinkedMasterAccount john@fabrikam.com
```

### Example 3

This example connects an equipment mailbox.
  
```
Connect-Mailbox -Identity "CAR001" -Database "MBXResourceDB" -Equipment -User "CAR001"
```

### Example 4

This example connects a room mailbox.
  
```
Connect-Mailbox -Identity "ConfRm212" -Database "MBXResourceDB" -Room -User "Conference Room 212"
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you link a mailbox to an existing user account, that user account has full access to the mailbox and all mail in the mailbox. 
  
If you use the _User_ parameter to specify the user account, make sure you specify the correct account. If you don't use the _User_ parameter, we recommend that you use the _ValidateOnly_switch to verify which user account the mailbox will try to connect to.
  
There is no **Disconnect-Mailbox** cmdlet. You can use the **Disable-Mailbox** or **Remove-Mailbox** cmdlets to effectively disconnect mailboxes from user accounts.
  
Use the **Disable-Mailbox** cmdlet to:
  
- Disconnect the mailbox from the user account.
    
- Keep the mailbox in the disabled state before it's permanently deleted, subject to the deleted mailbox retention period.
    
- Keep the user account, but remove the Exchange attributes from the account.
    
Use the **Remove-Mailbox** cmdlet to:
  
- Disconnect the mailbox from the user account.
    
- Keep the mailbox in the disabled state before it's permanently deleted, subject to the deleted mailbox retention period (except if you use the _Permanent_ or _StoreMailboxIdentity_ parameters, which immediately deletes the mailbox from the database).
    
- Remove the user account.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the Exchange database that contains the mailbox that you want to connect. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You use this parameter with the _Identity_ parameter to specify the mailbox that you want to connect. <br/> |
| _Equipment_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Equipment_ switch specifies that you are connecting an equipment mailbox, if this mailbox is a resource mailbox. You don't need to specify a value with this switch. This switch is required only if you're connecting a resource mailbox <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to connect to a user account. This parameter doesn't specify an Active Directory object. You can use the following values to identify the mailbox: <br/>  Display name <br/>  GUID <br/>  `LegacyExchangeDN` <br/>  You use this parameter with the _Database_ parameter to specify the mailbox that you want to connect. <br/> |
| _LinkedDomainController_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _LinkedDomainController_ parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the _LinkedMasterAccount_ parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter. <br/> This parameter is required only if you're connecting a linked mailbox.  <br/> |
| _LinkedMasterAccount_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _LinkedMasterAccount_ parameter specifies the master account in the forest where the user account resides, if this mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox. You can use any value that uniquely identifies the master account. For example: <br/>  The _LinkedMasterAccount_ parameter specifies the master account in the forest where the user account resides, if this mailbox is a linked mailbox. The master account is the account to which the mailbox links. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  This parameter is required only if you're connecting a linked mailbox. <br/> |
| _Room_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Room_ switch specifies that you are connecting a room mailbox, if this mailbox is a resource mailbox. You don't need to specify a value with this switch. This switch is required only if you're connecting a resource mailbox. <br/> |
| _Shared_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Shared_ switch specifies that you are connecting a shared mailbox. You don't need to specify a value with this switch. This switch is required only if you're connecting a shared mailbox. <br/> A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. This mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.  <br/> |
| _ValidateOnly_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ValidateOnly_ switch tells the cmdlet to evaluate the conditions and requirements necessary to perform the operation and then reports whether the operation will succeed or fail. No changes are made when the _ValidateOnly_ switch is used. <br/> |
| _ActiveSyncMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _ActiveSyncMailboxPolicy_ parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:. <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  If you don't use this parameter, the default mobile device mailbox policy is used. <br/> |
| _AddressBookPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressBookMailboxPolicyIdParameter  <br/> | The _AddressBookPolicy_ parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  For more information about address book policies, see[Understanding Address Book Policies](https://technet.microsoft.com/library/d0a916a1-e3ed-49ae-b116-a559be0dcce6.aspx).  <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> | The _Alias_ parameter specifies the Exchange alias (also known as themail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/>  The value of _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the _Alias_ value is 64 characters. <br/>  When you create a recipient without specifying an email address, the _Alias_ value you specify is used to generate the primary email address ( _\<alias\>_@ _\<domain\>_). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.  <br/>  If you don't use the _Alias_ parameter when you create a recipient, the value of a different required parameter is used for the **Alias** property value: <br/> **Recipients with user accounts (for example, user mailboxes, and mail users)**: The left side of the _MicrosoftOnlineServicesID_ or _UserPrincipalName_ parameter is used. For example, `helpdesk@contoso.com` results in the **Alias** property value `helpdesk`.  <br/> **Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups)**: The value of the _Name_ parameter is used. Spaces are removed and unsupported characters are converted to question marks (?). <br/>  If you modify the _Alias_ value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is `True` for the recipient). <br/> > [!NOTE]>  The _Alias_ parameter never generates or updates the primary email address of a mail contact or a mail user.          |
| _AllowLegacyDNMismatch_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch specifies whether to connect the associated archive mailbox. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _LinkedCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _LinkedCredential_ parameter specifies the credentials used to access the domain controller that's specified by the _LinkedDomainController_ parameter. This parameter is optional, even if you're connecting a linked mailbox. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _ManagedFolderMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ManagedFolderMailboxPolicyAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RetentionPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _RetentionPolicy_ parameter specifies the retention policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained. <br/> |
| _User_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _User_ parameter specifies the user object in Active Directory that you want to connect the mailbox to. You can use any value that uniquely identifies the user. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  If you don't use this parameter, the command uses the **LegacyExchangeDN** and **DisplayName** property values of the mailbox to find a user account that has those same values. If it can't find a unique match, it doesn't connect the mailbox. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

