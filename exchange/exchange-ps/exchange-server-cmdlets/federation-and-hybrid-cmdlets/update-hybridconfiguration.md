---
title: "Update-HybridConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a26f3af3-96a2-4ce8-bc6b-c7109325f321
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Update-HybridConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Update-HybridConfiguration** cmdlet to define the credentials that are used to update the hybrid configuration object.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-HybridConfiguration [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ForceUpgrade <SwitchParameter>] [-OnPremisesCredentials <PSCredential>] [-SuppressOAuthWarning <SwitchParameter>] [-TenantCredentials <PSCredential>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example defines the credentials that are used to update the hybrid configuration object and connect to the Microsoft Office 365 for enterprises organization.
  
1. Use the first command to specify your on-premises organization credentials. For example, run this command and enter _\<domain\>_\admin@contoso.com and the associated password in the resulting **Windows PowerShell Credential Request** dialog box.
    
2. Use the second command to specify your Office 365 for enterprises organization credentials. For example, run this command and then enter admin@contoso.onmicrosoft.com and the associated account password in the resulting **Windows PowerShell Credential Request** dialog box.
    
3. Use the last command to define the credentials that are used to update the hybrid configuration object and connect to the Office 365 for enterprises organization.
    
```
$OnPremisesCreds = Get-Credential; $TenantCreds = Get-Credential; Update-HybridConfiguration -OnPremisesCredentials $OnPremisesCreds -TenantCredentials $TenantCreds
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ForceUpgrade_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ForceUpgrade_ switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch. <br/> This confirmation prompt is only displayed when the existing HybridConfiguration Active Directory object version is Exchange 2010.  <br/> |
| _OnPremisesCredentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _OnPremisesCredentials_ parameter specifies the on-premises Active Directory account and password that's used to configure the hybrid configuration object. This account must be a member of the Organization Management role group. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _SuppressOAuthWarning_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _TenantCredentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _TenantCredentials_ parameter specifies the Office 365 for enterprises organization account and password that's used to configure the hybrid configuration object. This is often the administrator account that's assigned when the Office 365 organization was created. This account must be a member of the Office 365 Global admin role. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

