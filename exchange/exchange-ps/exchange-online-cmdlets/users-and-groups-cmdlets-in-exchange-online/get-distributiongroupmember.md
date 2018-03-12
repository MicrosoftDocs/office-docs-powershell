---
title: "Get-DistributionGroupMember"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 15c71bc5-4246-44ac-8b34-8ccd585294b5

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-DistributionGroupMember

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-DistributionGroupMember** cmdlet to view the members of distribution groups and mail-enabled security groups.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DistributionGroupMember -Identity <DistributionGroupMemberIdParameter> [-Credential <PSCredential>] [-DomainController <Fqdn>] [-IgnoreDefaultScope <SwitchParameter>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the existing distribution group members for the distribution group named Marketing USA.
  
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

### Example 2

This example sets the scope of the search to the entire forest by running the **Set-ADServerSettings** cmdlet, and then the **Get-DistributionGroupMember** cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.
  
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

## Detailed Description
<a name="DetailedDescription"> </a>

If your organization has multiple Active Directory domains, you may need to run the **Set-ADServerSettings** cmdlet with the _ViewEntireForest_ parameter set to `$true` before running the **Get-DistributionGroupMember** cmdlet to view the entire forest. For more information, see Example 2.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DistributionGroupMemberIdParameter  <br/> | The _Identity_ parameter specifies the distribution group or mail-enabled security group. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

