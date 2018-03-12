---
title: "Set-Group"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 924e6eb5-bb06-4e15-b122-cab414291cef
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-Group

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-Group** cmdlet to modify group object settings. If the group is a mail-enabled security group or a distribution group, you can use the **Set-DistributionGroup** cmdlet to modify other Microsoft Exchange settings that aren't available by using the **Set-Group** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-Group -Identity <GroupIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example applies the following changes to the existing global security group Legal Department:
  
- Change the group's scope to universal.
    
- Add a _Notes_ parameter value of verified.
    
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

### Example 2

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.
  
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can't use the **Set-Group** cmdlet to modify dynamic distribution groups. To modify dynamic distribution groups, use the **Set-DynamicDistributionGroup** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GroupIdParameter  <br/> | The _Identity_ parameter specifies the group that you want to modify. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _BypassSecurityGroupManagerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _BypassSecurityGroupManagerCheck_ switch specifies whether to allow a user who isn't an owner of the group to modify or delete the group. If you aren't defined in the **ManagedBy** property of the group, you need to use this switch in commands that modify or delete the group. To use this switch, your account requires specific permissions based on the group type: <br/> **Distribution groups or mail-enabled security groups**: You need to be a member of the Organization Management role group or have the Security Group Creation and Membership role assigned.  <br/> **Role groups**: You need to be a member of the Organization Management role group or have the Role Management role assigned.  <br/>  You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> This parameter is meaningful only if the group is mail-enabled.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _IsHierarchicalGroup_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsHierarchicalGroup_ parameter specifies whether the group is part of a hierarchical address book. Valid values are `$true` or `$false`. The default value is  `$false`.  <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralRecipientIdParameter[]  <br/> | The _ManagedBy_ parameter specifies an owner for the group. A group must have at least one owner. If you don't use this parameter to specify the owner when you create the group, the user account that created the group is the owner. The group owner is able to: <br/>  Modify the properties of the group <br/>  Add or remove group members <br/>  Delete the group <br/>  Approve member depart or join requests (if available) <br/>  Approve messages sent to the group if moderation is enabled, but no moderators are specified. <br/>  The owner you specify for this parameter must be a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  To enter multiple owners and overwrite all existing entries, use the following syntax: `<owner1>,<owner2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<owner1>","<owner2>"...`.  <br/>  To add or remove owners without affecting other existing entries, use the following syntax: `@{Add="<owner1>","<owner2>"...; Remove="<owner3>","<owner4>"...}`.  <br/>  An owner that you specify with this parameter isn't automatically a member of the group. You need to manually add the owner as a member. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _PhoneticDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _PhoneticDisplayName_ parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _SeniorityIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _SeniorityIndex_ parameter specifies the order in which this group will display in a hierarchical address book. A group with a value of 2 will display higher in an address book than a group with a value of 1. <br/> |
| _SimpleDisplayName_ <br/> |Optional  <br/> |System.String  <br/> | The _SimpleDisplayName_ parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are: <br/>  a - z <br/>  A - Z <br/>  0 - 9 <br/>  " `<space>`", " `"`", " `'`", " `(`", " `)`", " `+`", " `,`", " `-`", " `.`", " `/`", " `:`", and " `?`".  <br/>  This parameter is meaningful only if the group is mail-enabled. <br/> |
| _Universal_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Universal_ swtich changes the scope of the group from `Global` or `DomainLocal` to `Universal`. You don't need to specify a value with this switch.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsEmailAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> | The _WindowsEmailAddress_ parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the _WindowsEmailAddress_ parameter on a recipient has one of the following results: <br/>  In on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `True` for the recipient), the _WindowsEmailAddress_ parameter has no effect on the **WindowsEmailAddress** property or the primary email address value. <br/>  In cloud environments or in on-premises environments where the recipient isn't subject to email address policies (the **EmailAddressPolicyEnabled** property is set to the value `False` for the recipient), the _WindowsEmailAddress_ parameter updates the **WindowsEmailAddress** property and the primary email address to the same value. <br/>  The **WindowsEmailAddress** property is visible for the recipient in Active Directory Users and Computers in the **E-mail** attribute. The attribute common name is `E-mail-Addresses`, and the **Ldap-Display-Name** is `mail`. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

