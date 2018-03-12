---
title: "Enable-RemoteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 63a504e5-c1ee-4812-921f-d461e24afa1b

description: "This cmdlet is available only in on-premises Exchange."
---

# Enable-RemoteMailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **Enable-RemoteMailbox** cmdlet to create a mailbox in the cloud-based service for an existing user in the on-premises Active Directory.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-RemoteMailbox [-RemoteRoutingAddress <ProxyAddress>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example mail-enables an existing on-premises user and creates an associated mailbox in the service.
  
> [!NOTE]
> To mail-enable an existing user and create an associated mailbox in the service, run the [New-RemoteMailbox](new-remotemailbox.md) cmdlet and specify the identity of the existing user.
  
```
Enable-RemoteMailbox "Kim Akers" -RemoteRoutingAddress "kima@contoso.mail.onmicrosoft.com"
```

After the user is mail-enabled, directory synchronization synchronizes the mail-enabled user to the service and the associated mailbox is created.
  
### Example 2

This example does the following:
  
- Mail-enables an existing on-premises user.
    
- Creates the associated mailbox in the service.
    
- Creates an archive mailbox in the service for the mailbox.
    
To mail-enable an on-premises user, create the associated mailbox in the service, enable the archive mailbox in the service, and include the _Archive_ switch with the **Enable-RemoteMailbox** cmdlet.
  
```
Enable-RemoteMailbox "Kim Akers" -RemoteRoutingAddress "kima@contoso.mail.onmicrosoft.com"  -Archive
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Enable-RemoteMailbox** cmdlet mail-enables an existing on-premises user. The mail-enabled user contains a specific attribute that indicates that an associated mailbox in the service should be created when the user is synchronized to the service using directory synchronization.
  
Directory synchronization must be configured correctly for a mailbox to be created in the service. Creation of the mailbox in the service isn't immediate and depends on the directory synchronization schedule.
  
> [!IMPORTANT]
> The policies that you apply to recipients in the on-premises Exchange organization, such as Unified Messaging or compliance policies, aren't applied to mailboxes in the service. You must configure policies in the service if you want policies to be applied to recipients in the service. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Equipment_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Equipment_ switch specifies that the mailbox in the service should be created as an equipment resource mailbox. <br/> You can't use the _Equipment_ switch if you specified the _Room_ switch. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the identity of the existing on-premises user. You can use any value that uniquely identifies the user. For example: <br/>  ADObjectID <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\SamAccountName_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  User alias <br/> |
| _Room_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Room_ switch specifies that the mailbox in the service should be created as a room resource mailbox. You don't need to specify a value with this switch <br/> You can't use this switch with the _Equipment_ switch. <br/> |
| _ACLableSyncedObjectEnabled_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> | The _Alias_ parameter specifies the Exchange alias (also known as themail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/>  The value of _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the _Alias_ value is 64 characters. <br/>  When you create a recipient without specifying an email address, the _Alias_ value you specify is used to generate the primary email address ( _\<alias\>_@ _\<domain\>_). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.  <br/>  If you don't use the _Alias_ parameter when you create a recipient, the value of a different required parameter is used for the **Alias** property value: <br/> **Recipients with user accounts (for example, user mailboxes, and mail users)**: The left side of the _MicrosoftOnlineServicesID_ or _UserPrincipalName_ parameter is used. For example, `helpdesk@contoso.com` results in the **Alias** property value `helpdesk`.  <br/> **Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups)**: The value of the _Name_ parameter is used. Spaces are removed and unsupported characters are converted to question marks (?). <br/>  If you modify the _Alias_ value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is `True` for the recipient). <br/> > [!NOTE]>  The _Alias_ parameter never generates or updates the primary email address of a mail contact or a mail user.          |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch specifies whether to create an archive mailbox in the service in addition to the mailbox created in the service. <br/> You don't need to specify a value with this switch.  <br/> |
| _ArchiveName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ArchiveName_ parameter specifies the name of the archive mailbox. Use this parameter to change the name of the archive. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name for the mailbox that's created in the service. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _PrimarySmtpAddress_ parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the _EmailAddresses_ and _PrimarySmtpAddress_ parameters in the same command. <br/> |
| _RemoteRoutingAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ProxyAddress  <br/> |The _RemoteRoutingAddress_ parameter specifies the SMTP address of the mailbox in the service that this user is associated with. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

