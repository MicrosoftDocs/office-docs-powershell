---
title: "Set-SharingPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 42bab80c-62af-4b37-bb41-fa0173b27d86

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-SharingPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-SharingPolicy** cmdlet to modify existing sharing policies that control how users inside your organization can share free/busy and contact information with users outside your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SharingPolicy -Identity <SharingPolicyIdParameter> [-Confirm [<SwitchParameter>]] [-Default <SwitchParameter>] [-DomainController <Fqdn>] [-Domains <MultiValuedProperty>] [-Enabled <$true | $false>] [-Name <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.
  
```
Set-SharingPolicy -Identity Contoso -Domains "mail.contoso.com: CalendarSharingFreeBusySimple"
```

### Example 2

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.
  
```
Set-SharingPolicy -Identity SharingPolicy01 -Domains "contoso.com: CalendarSharingFreeBusySimple", "atlanta.contoso.com: CalendarSharingFreeBusyReviewer", "beijing.contoso.com: CalendarSharingFreeBusyReviewer"
```

### Example 3

This example disables the sharing policy SharingPolicy01.
  
```
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

 Users can only share free/busy and contact information after federation has been configured between Exchange organizations. After that, users can send sharing invitations to the external recipients as long as those invitations comply with the sharing policy. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the lsharing options for the mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SharingPolicyIdParameter  <br/> | The _Identity_ parameter specifies the identity of the sharing policy that you want to modify. You can use one of the following values: <br/>  ADObjectID <br/>  Distinguished name (DN) <br/>  Legacy DN <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Default_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Default_ switch specifies that the sharing policy is the default sharing policy for all mailboxes. You don't need to specify a value with this switch. <br/> If no sharing policy has been applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you disable the default policy.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Domains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Domains_ parameter specifies domains to which this policy applies and the sharing policy action. Values for this parameter use the format `<Domain>: <SharingPolicyAction>`.  <br/>  The following sharing policy action values can be used: <br/>  `CalendarSharingFreeBusySimple`: Share free/busy hours only.  <br/>  `CalendarSharingFreeBusyDetail`: Share free/busy hours, subject, and location.  <br/>  `CalendarSharingFreeBusyReviewer`: Share free/busy hours, subject, location, and the body of the message or calendar item.  <br/>  `ContactsSharing`: Share contacts only.  <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> > [!NOTE]>  A domain doesn't include subdomains. You need to configure each subdomain separately.          |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether to enable the sharing policy. Valid values for this parameter are `$true` or `$false`. The default is  `$true`.  <br/> When the sharing policy is disabled, users who are provisioned to use this policy continue to share information until the sharing policy assistant runs.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the unique name of the sharing policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

