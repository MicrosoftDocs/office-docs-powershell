---
title: "Get-DataClassification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7f1daf42-8805-4313-831c-f473ddfd6371
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-DataClassification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-DataClassification** cmdlet to view the data classification rules in your organization. This cmdlet shows built-in data classification rules, and rules that you created that use document fingerprints.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DataClassification [-Identity <DataClassificationIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all data classification rules in the organization.
  
```
Get-DataClassification
```

### Example 2

This example returns a summary list of all new data classification rules based on document fingerprints that you created.
  
```
Get-DataClassification -ClassificationRuleCollectionIdentity "Fingerprint Classification Collection"
```

### Example 3

This example returns details of the built-in data classification rule named SWIFT Code.
  
```
Get-DataClassification "SWIFT Code" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ClassificationRuleCollectionIdentity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.ClassificationDefinitions.ClassificationRuleCollectionIdParameter  <br/> |The  _ClassificationRuleCollectionIdentity_ parameter filters the results by the name of the data classification rule collection. The data classification rule collection that contains the built-in data classification rules is named `Microsoft Rule Package`. The data classification that contains new data classification rules that you create that use document fingerprints is named  `Fingerprint Classification Collection`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.ClassificationDefinitions.DataClassificationIdParameter  <br/> | The _Identity_ parameter specifies the data classification rule that you want to view. You can use any value that uniquely identifies the data classification rule. For example: <br/>  Name <br/> **LocalizedName** <br/> **Identity** GUID value <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

