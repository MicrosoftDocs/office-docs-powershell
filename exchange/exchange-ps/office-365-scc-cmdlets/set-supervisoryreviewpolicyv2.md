---
title: "Set-SupervisoryReviewPolicyV2"
ms.author: chrisda
author: chrisda
ms.date: 7/12/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ab911602-5108-4b96-9aa1-343d31102261
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-SupervisoryReviewPolicyV2

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-SupervisoryReviewPolicyV2** cmdlet to modify supervisory review policies in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SupervisoryReviewPolicyV2 -Identity <PolicyIdParameter> [-Comment <String>] [-Force <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds reviewers and updates the comment for the supervisory review policy named EU Brokers.
  
```
Set-SupervisoryReviewPolicyV2 -Identity "EU Brokers" -AddReviewers chris@contoso.com,michelle@contoso.com -Comment "Updated for new EU regulations"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_parameter specifies the supervisory review policy that you want to modify. You can use any value that uniquely identifies the policy. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AddReviewers_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _AddReviewers_ parameter specifies the SMTP addresses of reviewers to add to the supervisory review policy. You can specify multiple email addresses separated by commas. <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _RemoveReviewers_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _RemoveReviewers_ parameter specifies the SMTP addresses of reviewers to remove from the supervisory review policy. You can specify multiple email addresses separated by commas. <br/> |
| _RetentionPeriodInDays_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _RetentionPeriodInDays_ parameter specifies the number of days that the messages will be retained for review. <br/> |
| _Reviewers_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _Reviewers_ parameter specifies the SMTP addresses of the reviewers for the supervisory review policy. You can specify multiple email addresses separated by commas. <br/> The reviewers that you specify with this parameter replace the existing reviewers. To selectively add or remove reviewers, use the  _AddReviewers_ and _RemoveReviewers_ parameters. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

