---
title: "Get-MailboxPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 56bcc678-1598-4c9b-8b4f-4fa11c89ec41

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxPermission** cmdlet to retrieve permissions on a mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxPermission [-User <SecurityPrincipalIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns permissions on the mailbox by its SMTP address john@contoso.com.
  
```
Get-MailboxPermission -Identity john@contoso.com | Format-List
```

### Example 2

This example returns permissions that the user Ayla has on John's mailbox.
  
```
Get-MailboxPermission -Identity john@contoso.com -User "Ayla"
```

### Example 3

This example returns the owner information for the resource mailbox Room222.
  
```
Get-MailboxPermission -Identity Room222 -Owner
```

## Detailed Description
<a name="DetailedDescription"> </a>

The output of this cmdlet shows the following information:
  
- **Identity**: The mailbox in question.
    
- **User**: The security principal (user, security group, Exchange management role group, etc.) that has permission to the mailbox.
    
- **AccessRights**: The permission that the security principal has on the mailbox. The available values are  `ChangeOwner` (change the owner of the mailbox), `ChangePermission` (change the permissions on the mailbox), `DeleteItem` (delete the mailbox), `ExternalAccount` (indicates the account isn't in the same domain), `FullAccess` (open the mailbox, access its contents, but can't send mail), and `ReadPermission` (read the permissions on the mailbox). Whether the permissions are allowed or denied is indicated in the **Deny** column.
    
- **IsInherited**: Whether the permission is inherited ( `True`) or directly assigned to the mailbox ( `False`). Permissions are inherited from the mailbox database and/or Active Directory. Typically, directly assigned permissions override inherited permissions.
    
- **Deny**: Whether the permission is allowed ( `False`) or denied ( `True`). Typically, deny permissions override allow permissions.
    
By default, the following permissions are assigned to user mailboxes:
  
-  `FullAccess` and `ReadPermission` are directly assigned to `NT AUTHORITY\SELF`. This entry gives a user permission to their own mailbox.
    
-  `FullAccess` is denied to `Administrator`,  `Domain Admins`,  `Enterprise Admins`, and  `Organization Management`. These inherited permissions prevent these users and group members from opening other users' mailboxes.
    
-  `ChangeOwner`,  `ChangePermission`,  `DeleteItem`, and  `ReadPermission` are allowed for `Administrator`,  `Domain Admins`,  `Enterprise Admins`, and  `Organization Management`. Note that these inherited permission entries also appear to allow  `FullAccess`. However, these users and groups do not have  `FullAccess` to the mailbox because the inherited Deny permission entries override the inherited Allow permission entries.
    
-  `FullAccess` is inherited by `NT AUTHORITY\SYSTEM` and `ReadPermission` is inherited by `NT AUTHORITY\NETWORK`.
    
-  `FullAccess` and `ReadPermission` are inherited by `Exchange Servers`,  `ChangeOwner`,  `ChangePermission`,  `DeleteItem`, and  `ReadPermission` are inherited by `Exchange Trusted Subsystem`, and  `ReadPermission` is inherited by `Managed Availability Servers`.
    
By default, other security groups and role groups inherit permissions to mailboxes based on their location (on-premises Exchange or Office 365).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter identifies the mailbox. You can use one of the following values: <br/>  GUID <br/>  ADObjectID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the user name and password to use to access Active Directory. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Owner_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Owner_ parameter returns the owner information for the mailbox identified in the _Identity_ parameter. <br/> This parameter can't be used with the _User_ parameter. <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReadFromDomainController_ parameter specifies that the user information is read from a domain controller in the user's domain. <br/> If you set the recipient scope to include all recipients in the forest, and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information.  <br/> If you use this parameter, multiple reads might be necessary to get the information.  <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your servers that run Exchange.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of recipient objects returned. <br/> |
| _User_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |The _User_ parameter specifies the UPN, _domain\user_, or the alias of the user.  <br/> This parameter can't be used with the _Owner_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

