---
title: "New-ComplianceTag"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 2414a7c4-57d2-4f90-a1bc-3dc14643155d
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# New-ComplianceTag

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **New-ComplianceTag** cmdlet to create labels in the Security &amp; Compliance Center. Labels apply retention settings to content.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ComplianceTag -Name <String> [-Comment <String>] [-RetentionDuration <Unlimited>] [-Confirm [<SwitchParameter>]] [-EventType <ComplianceRuleIdParameter>] [-IsRecordLabel <$true | $false>] [-RetentionAction <String>] [-RetentionType <String>] [-ReviewerEmail <SmtpAddress[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new label named HR Content with the following settings:
  
- **Action**: Keep.
    
- **Duration**: 5 years (1825 days)
    
- **Type**: Modification age in days.
    
```
New-ComplianceTag -Name "HR Content" -RetentionAction Keep -RetentionDuration 1825 -RetentionType ModificationAgeInDays
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a unique name for the label. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _EventType_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _EventType_specifies the retention rule that's associated with the label. You can use any value that uniquely identifies the rule. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can use the **Get-RetentionComplianceRule** cmdlet to view the available retention rules. <br/> |
| _IsRecordLabel_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IsRecordLabel_parameter specifies whether the label is a record label. Valid values are:  <br/>  `$true`: The label is a record label. Once the label is applied to content, the label can't be removed.  <br/>  `$false`: The label isn't a record label. This is the default value.  <br/> |
| _RetentionAction_ <br/> |Optional  <br/> |System.String  <br/> | The _RetentionAction_ parameter specifies the action for the label. Valid values are: <br/>  `Delete` <br/>  `Keep` <br/>  `KeepAndDelete` <br/> |
| _RetentionDuration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _RetentionDuration_ parameter specifies the number of days to retain the content. Valid values are: <br/>  A positive integer. <br/>  The value `unlimited`.  <br/> |
| _RetentionType_ <br/> |Optional  <br/> |System.String  <br/> | The _RetentionType_ parameter specifies whether the retention duration is calculated from the content creation date, tagged date, or last modification date. Valid values are: <br/>  `CreationAgeInDays` <br/>  `EventAgeInDays` <br/>  `ModificationAgeInDays` <br/>  `TaggedAgeInDays` <br/> |
| _ReviewerEmail_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |The  _ReviewerEmail_ parameter specifies the email address of a reviewer for `Delete` and `KeepAndDelete` retention actions. You can specify multiple email addresses separated by commas. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

