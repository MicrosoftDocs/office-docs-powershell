---
title: "Set-SupervisoryReviewRule"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 8ed4a806-ffab-497a-bfea-22aaf05870bb
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-SupervisoryReviewRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-SupervisoryReviewRule** cmdlet to modify supervisory review rules in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SupervisoryReviewRule -Identity <ComplianceRuleIdParameter> [-Condition <String>] [-Confirm [<SwitchParameter>]] [-SamplingRate <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the reviewer julia@contoso.com to the rule named EU Brokers Rule.
  
```
Set-SupervisoryReviewRule -Identity "EU Brokers Rule" -AddReviewers julia@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_parameter specifies the supervisory review rule that you want to modify. You can use any value that uniquely identifies the rule. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Condition_ <br/> |Optional  <br/> |System.String  <br/> | The _Condition_ parameter specifies the conditions and exceptions for the rule. This parameter uses the following syntax: <br/> **User or group communications to supervise**:  `((Reviewee:<emailaddress1>) -OR (Reviewee:<emailaddress2>)...)`. Exceptions use the syntax  `(NOT((Reviewee:<emailaddress1>) -OR (Reviewee:<emailaddress2>)...))`.  <br/> **Direction**:  `((Direction:Inbound) -OR (Direction:Outbound) -OR (Direction:Internal))`.  <br/> **Message contains words**:  `((<Word1orPhrase1>)-OR (<Word2orPhrase2>)...)`. Exceptions use the syntax  `(NOT((<Word1orPhrase1>)-OR (<Word2orPhrase2>)...))`.  <br/> **Any attachment contains words**:  `((Attachment:<word1>)-OR (Attachment:<word2>)...)`. Exceptions use the syntax  `(NOT((Attachment:<word1>)-OR (Attachment:<word2>)...))`.  <br/> **Any attachment has the extension**:  `((AttachmentName:.<extension1>)-OR (AttachmentName:.<extension2>)...)`. Exceptions use the syntax  `(NOT((AttachmentName:.<extension1>)-OR (AttachmentName:.<extension2>)...))`.  <br/> **Message size is larger than**:  `(MessageSize:<size in B, KB, MB or GB>)`. For example  `(MessageSize:300KB)`. Exceptions use the syntax  `(NOT(MessageSize:<size in B, KB, MB or GB>))` <br/> **Any attachment is larger than**:  `(AttachmentSize:<size in B, KB, MB or GB>)`. For example  `(AttachmentSize:3MB)`. Exceptions use the syntax  `(NOT(AttachmentSize:<size in B, KB, MB or GB>))` <br/>  Braces `{ }` are required around the whole filter. <br/>  Separate multiple conditions or exception types with the `-AND` operator. For example, `{(Reviewee:chris@contoso.com) -AND (AttachmentSize:3MB)}`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _SamplingRate_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _SamplingRate_ parameter specifies the percentage of communications for review. If you want reviewers to review all detected items, use the value `100`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

