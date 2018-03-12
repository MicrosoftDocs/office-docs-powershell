---
title: "New-SharingPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ffca8853-3429-448f-ad5e-5435dc44f9d0

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-SharingPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-SharingPolicy** cmdlet to create a sharing policy to regulate how users inside your organization can share calendar and contact information with users outside the organization. Users can only share this information after federation has been configured in Exchange. After federation is configured, users can send sharing invitations that comply with a sharing policy to external recipients in other Exchange Server 2010 or later organizations that have federation enabled. A sharing policy needs to get assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the level of sharing permitted for this mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-SharingPolicy -Domains <MultiValuedProperty> -Name <String> [-Confirm [<SwitchParameter>]] [-Default <SwitchParameter>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the sharing policy Contoso for the contoso.com domain, which is a domain outside the organization. This policy allows users in the contoso.com domain to see detailed free/busy information and contacts. By default, this policy is enabled.
  
```
New-SharingPolicy -Name "Contoso" -Domains 'mail.contoso.com: CalendarSharingFreeBusyDetail, ContactsSharing'
```

### Example 2

This example creates a default sharing policy, which is applied to all mailboxes that don't implicitly have a sharing policy assigned to them. This sharing policy SharingPolicy01 applies to two different domains, and the sharing policy is disabled.
  
```
New-SharingPolicy -Name "SharingPolicy01" -Domains 'mail.contoso.com: CalendarSharingFreeBusySimple', 'mail.fabrikam.com: CalendarSharingFreeBusySimple' -Enabled $false -Default $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Domains_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Domains_ parameter specifies the domains to which this sharing policy applies and the sharing policy actions. Values for this parameter take the format: _'Domain: SharingPolicyAction'_.  <br/>  The following sharing policy action values can be used: <br/> **CalendarSharingFreeBusySimple**: Share free/busy hours only  <br/> **CalendarSharingFreeBusyDetail**: Share free/busy hours, subject, and location  <br/> **CalendarSharingFreeBusyReviewer**: Share free/busy hours, subject, location, and the body of the message or calendar item  <br/> **ContactsSharing**: Share contacts only  <br/>  Separate multiple domains with a comma, for example, 'mail.contoso.com: CalendarSharingFreeBusySimple', 'mail.fabrikam.com: CalendarSharingFreeBusyDetail, ContactsSharing'. <br/> > [!NOTE]>  A domain doesn't include subdomains. You must configure each subdomain separately.          |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the new sharing policy. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Default_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Default_ switch specifies that this sharing policy is the default sharing policy for all mailboxes. If no sharing policy has been applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you can set the default policy as disabled. <br/> You don't have to specify a value with this switch.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether to enable the new sharing policy. Valid input for this parameter is `$true` or `$false`. The default is  `$true`.  <br/> When the sharing policy is disabled, users who are provisioned to use this policy continue to share information until the sharing policy assistant runs and removes the permissions on the shared folder. The frequency with which the sharing policy assistant runs is assigned in the **Set-MailboxServer** cmdlet using the _SharingPolicySchedule_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

