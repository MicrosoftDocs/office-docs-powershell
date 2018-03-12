---
title: "Get-ClientAccessService"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/23/2016
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b46d6c59-6e46-4089-a984-09b280dcb1ba
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ClientAccessService

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ClientAccessService** cmdlet to view settings that are associated with the Client Access server role.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ClientAccessService [-Identity <ClientAccessServerIdParameter>] [-DomainController <Fqdn>] [-IncludeAlternateServiceAccountCredentialPassword <SwitchParameter>] [-IncludeAlternateServiceAccountCredentialStatus <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Exchange servers in your organization that have theClient Access server role installed.
  
```
Get-ClientAccessService | Format-Table Name
```

### Example 2

This example returns detailed information for the server mail.contoso.com.
  
```
Get-ClientAccessService -Identity mail.contoso.com | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessServerIdParameter  <br/> | The _Identity_ parameter specifies the server with the Client Access server role installed that you want to view. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name (for example, Exchange01) <br/>  Distinguished name (DN) (for example, `CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`)  <br/>  Exchange Legacy DN (for example, `/o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01`)  <br/>  GUID (for example, `bc014a0d-1509-4ecc-b569-f077eec54942`)  <br/> |
| _IncludeAlternateServiceAccountCredentialPassword_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeAlternateServiceAccountCredentialPassword_ switch specifies whether to include the password of the alternate service account in the results. You don't need to specify a value with this switch. <br/> The password is visible in the **AlternateServiceAccountConfiguration** property. To see this property, use the **Format-List** cmdlet. For example, `Get-ClientAccessService <ServerIdentity> | Format-List AlternateServiceAccountConfiguration`.  <br/> |
| _IncludeAlternateServiceAccountCredentialStatus_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeAlternateServiceAccountCredentialStatus_ parameter specifies whether to include the status of the alternate service account in the results. You don't need to specify a value with this switch. <br/> The status is visible in the **AlternateServiceAccountConfiguration** property. To see this property, use the **Format-List** cmdlet. For example, `Get-ClientAccessService <ServerIdentity> | Format-List AlternateServiceAccountConfiguration`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

