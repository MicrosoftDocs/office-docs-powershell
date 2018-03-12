---
title: "Get-SafeAttachmentRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/23/2016
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 1e9ffcca-ad71-404a-8344-0c38b5cd0d34
description: "This cmdlet is available only in the cloud-based service."
---

# Get-SafeAttachmentRule

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-SafeAttachmentRule** cmdlet to view Safe Attachments rules in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SafeAttachmentRule [-Identity <RuleIdParameter>] [-State <Enabled | Disabled>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Safe Attachments rules in your organization.
  
```
Get-SafeAttachmentRule
```

### Example 2

This example returns detailed information about the Safe Attachments rule named Research Department Attachment Rule.
  
```
Get-SafeAttachmentRule -Identity "Research Department Attachment Rule" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.Tasks.RuleIdParameter  <br/> | The _Identity_ parameter specifies the Safe Attachments rule that you want to view. <br/>  You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguised name (DN) <br/>  GUID <br/> |
| _State_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.RuleState  <br/> |The  _State_ parameter filters the results by the state of the rule. Valid values are `Enabled` and `Disabled`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

