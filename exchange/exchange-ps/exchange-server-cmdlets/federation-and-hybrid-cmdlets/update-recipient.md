---
title: "Update-Recipient"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 969b33b6-5165-4f9c-bcca-08923df4add6
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-Recipient

This cmdlet is available only in on-premises Exchange. 
  
Use the **Update-Recipient** cmdlet to add Microsoft Exchange attributes to recipient objects created by the global address list (GAL) synchronization management agent in Microsoft Forefront Identity Manager (FIM) 2010. The recipient objects you modify using this cmdlet must reside on a server running Microsoft Exchange Server 2010 or later.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-Recipient -Identity <RecipientIdParameter> [-Confirm [<SwitchParameter>]] [-Credential <PSCredential>] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds Exchange attributes to the mail contact that represents John Smith's mailbox.
  
```
Update-Recipient -Identity "John Smith"
```

### Example 2

This example updates all contacts in a specific organizational unit (OU). This example assumes that recipients are synchronized between two forests, contoso.com and fabrikam.com, and all the synchronized recipients from the fabrikam.com domain are stored in a specific OU called fabrikam.com Users in the contoso.com domain.
  
```
Get-MailContact -OrganizationalUnit "contoso.com/fabrikam.com Users" | Update-Recipient
```

## Detailed Description
<a name="DetailedDescription"> </a>

Because of mergers, acquisitions, or legal requirements, customers may need to deploy Exchange in a multiple Exchange forest topology. These deployments require the synchronization of recipient objects across disparate Active Directory forests.
  
Microsoft provides the GAL synchronization management agent for synchronizing recipient objects. The version of the GAL synchronization management agent included in Microsoft Identity Integration Server (MIIS) 2003 was designed to work with Exchange Server 2003 and relied on the Recipient Update Service. Because the Recipient Update Service is a deprecated feature and is no longer required, the new GAL synchronization management agent included in FIM 2010 is designed to function without the Recipient Update Service.
  
As part of the synchronization process, the FIM 2010 GAL synchronization management agent creates recipient objects in both Active Directory forests. After the recipients are created, the management agent uses the **Update-Recipient** cmdlet to add the attributes required by Microsoft Exchange to complete the provisioning of these recipients.
  
In Exchange, before you can run the **Update-Recipient** cmdlet to convert an Active Directory user object into an Exchange mailbox, you must stamp the user object with the following three mandatory Exchange attributes:
  
- **homeMDB**
    
- **mailNickname**
    
- **msExchHomeServerName**
    
> [!NOTE]
> If you're using MIIS 2003, you must run various cmdlets to complete the provisioning process of the mail contacts created by the GAL synchronization management agent. The **Update-Recipient** cmdlet provides an alternate and more efficient method to do this. You can run the **Update-Recipient** cmdlet against the recipient objects created by the MIIS 2003 GAL synchronization management agent to complete the provisioning process.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the recipient that you want to update. You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the user name and password to use to access Active Directory. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

