---
title: "Enable-Mailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.collection: IT_Exchange
ms.custom: jan17secnews
ms.assetid: 58de5b3c-05c3-4a1f-84c6-f082d990f22b

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Enable-Mailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Enable-Mailbox** cmdlet to create mailboxes for existing users who don't already have mailboxes. You can also use this cmdlet to create In-Place archives for existing mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-Mailbox [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Database <DatabaseIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a mailbox for the existing user named Ayla.
  
```
Enable-Mailbox -Identity Ayla
```

### Example 2

This example creates an In-Place archive for the existing user name Ayla who already has a mailbox.
  
```
Enable-Mailbox -Identity Ayla -Archive
```

### Example 3

This example creates a remote archive for the existing on-premises user named Ayla. The archive is created in the cloud-based organization that uses the domain archive.contoso.com.
  
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDomain "archive.contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Enable-Mailbox** cmdlet mailbox-enables existing users, public folders, or **InetOrgPerson** objects by adding the mailbox attributes that are required by Exchange. When the user logs on to the mailbox or receives email messages, the mailbox object is actually created in the Exchange database.
  
> [!IMPORTANT]
> When mailbox-enabling an existing user, beware of non-supported characters in the user account or Name property. If you don't specify an _Alias_ value when you mailbox-enable the user, Exchange converts all non-supported characters to question marks (?). To avoid question marks in the _Alias_, verify that the user account and Name properties have only supported ASCII or Unicode characters or specify an _Alias_ value when you mailbox-enable the user.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Arbitration_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Arbitration_ parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval. <br/> |
| _ArchiveDomain_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ArchiveDomain_ parameter specifies the domain in the cloud-based service where the archive that's associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com. <br/> > [!NOTE]> Only use this parameter if the archive is hosted in the cloud-based service.           |
| _Discovery_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Discovery_switch specifies that the mailbox is a Discovery mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a Discovery mailbox.  <br/> Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox. For more information, see [In-Place eDiscovery](https://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx).  <br/> |
| _Equipment_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Equipment_ parameter specifies that the resource mailbox is an equipment mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling an equipment resource mailbox. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the user or **InetOrgPerson** object that you want to mailbox-enable. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _LinkedDomainController_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedDomainController_ parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the _LinkedMasterAccount_ parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter. <br/> This parameter is required only if you're enabling a linked mailbox.  <br/> |
| _LinkedMasterAccount_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _LinkedMasterAccount_ parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/>  This parameter is required only if you're enabling a linked mailbox. <br/> |
| _LinkedRoom_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedRoom_switchspecifies that the mailbox is a linked resource mailbox. You don't need to specify a value with this switch.  <br/> A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.  <br/> |
| _PublicFolder_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _PublicFolder_switch specifies that the mailbox is a public folder mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a public folder mailbox.  <br/> Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.  <br/> |
| _Room_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Room_switch specifies that the resource mailbox is a room mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a room resource mailbox.  <br/> |
| _Shared_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Shared_switch specifies that the mailbox is a shared mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a shared mailbox.  <br/> A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. The mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.  <br/> |
| _ActiveSyncMailboxPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _ActiveSyncMailboxPolicy_ parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:. <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  If you don't use this parameter, the default mobile device mailbox policy is applied to the mailbox. <br/> |
| _AddressBookPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AddressBookMailboxPolicyIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AddressBookPolicy_ parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  For more information about address book policies, see[Understanding Address Book Policies](https://technet.microsoft.com/library/d0a916a1-e3ed-49ae-b116-a559be0dcce6.aspx).  <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Alias_ parameter specifies the Exchange alias (also known as themail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/>  The value of _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the _Alias_ value is 64 characters. <br/>  When you create a recipient without specifying an email address, the _Alias_ value you specify is used to generate the primary email address ( _\<alias\>_@ _\<domain\>_). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.  <br/>  If you don't use the _Alias_ parameter when you create a recipient, the value of a different required parameter is used for the **Alias** property value: <br/> **Recipients with user accounts (for example, user mailboxes, and mail users)**: The left side of the _MicrosoftOnlineServicesID_ or _UserPrincipalName_ parameter is used. For example, `helpdesk@contoso.com` results in the **Alias** property value `helpdesk`.  <br/> **Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups)**: The value of the _Name_ parameter is used. Spaces are removed and unsupported characters are converted to question marks (?). <br/>  If you modify the _Alias_ value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is `True` for the recipient). <br/> > [!NOTE]>  The _Alias_ parameter never generates or updates the primary email address of a mail contact or a mail user.          |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_switchcreates an archive mailbox for an existing user that already has a mailbox. You don't need to specify a value with this switch.  <br/> |
| _ArchiveDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _ArchiveDatabase_ parameter specifies the Exchange database that contains the archive that's associated with this mailbox. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ArchiveGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ArchiveName_ parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook and Outlook Web App. <br/> If you don't use this parameter, the default value is  `In-Place Archive - <Mailbox User's Display Name>`.  <br/> |
| _AuditLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoExpandingArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _AutoExpandingArchive_ switch enables the unlimited archiving feature (calledauto-expanding archiving) for the specified mailbox. After you enable auto-expanding archiving, additional storage space is automatically added to the user's archive mailbox when it approaches the storage limit. Note that the user's archive mailbox has to be enabled before auto-expanding archiving can be enabled. Also note that after you enable auto-expanding archiving for the user's mailbox, it can't be disabled.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Database_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Database_ parameter specifies the Exchange database that contains the new mailbox. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> If you don't use _DisplayName_ parameter, the value of the **Name** property is used for the display name. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _HoldForMigration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _HoldForMigration_switch specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging on to a public folder mailbox. You don't need to specify a value with this switch.  <br/> You need to use this parameter when you create the first public folder, which is called the hierarchy mailbox, in your organization.  <br/> > [!CAUTION]> Use this parameter only if you plan to migrate legacy Exchange 2010 public folders to Exchange 2016. If you use this switch but don't have legacy public folders to migrate, you won't be able to create any public folders.           |
| _LinkedCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedCredential_ parameter specifies the credentials used to access the domain controller that's specified by the _LinkedDomainController_ parameter. This parameter is optional, even if you're enabling a linked mailbox. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _PrimarySmtpAddress_ parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the _EmailAddresses_ and _PrimarySmtpAddress_ parameters in the same command. <br/> If you use the _PrimarySmtpAddress_ parameter to specify the primary email address, the command sets the **EmailAddressPolicyEnabled** property of the mailbox to `False`, which means the email addresses of the mailbox aren't automatically updated by email address policies.  <br/> |
| _RemoteArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RemoteArchive_switch specifies that a remote archive mailbox is created for this mailbox. A remote archive exists in the cloud-based service. You don't need to specify a value with this switch.  <br/> You need to use this parameter with the _ArchiveDomain_ parameter, and you can't use this parameter with the _Archive_ parameter. <br/> |
| _RetentionPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RetentionPolicy_ parameter specifies the retention policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained. <br/> |
| _RoleAssignmentPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _RoleAssignmentPolicy_ parameter specifies the management role assignment policy that's assign to the mailbox. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  If you don't use this parameter, the default role assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of `$null`. For more information about assignment policies, see [Understanding Management Role Assignment Policies](https://technet.microsoft.com/library/25913e43-326a-4371-90b5-021a35f100fe.aspx).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

