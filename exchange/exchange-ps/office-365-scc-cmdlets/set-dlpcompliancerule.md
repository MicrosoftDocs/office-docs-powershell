---
title: "Set-DlpComplianceRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 10/12/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 7c819665-e1cb-4097-90b7-2530bea69c1c
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-DlpComplianceRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-DlpComplianceRule** to modify Data Loss Prevention (DLP) rules in the Security &amp; Compliance Center. DLP rules define sensitive information to be protected and the actions to take on rule violations.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DlpComplianceRule -Identity <ComplianceRuleIdParameter> [-AccessScope <InOrganization | NotInOrganization | None>] [-AccessTimeControl <PswsHashtable>] [-ActivationDate <DateTime>] [-BlockAccess <$true | $false>] [-BlockAccessScope <All | PerUser>] [-Comment <String>] [-Confirm [<SwitchParameter>]] [-ContentContainsSensitiveInformation <PswsHashtable[]>] [-ContentPropertyContainsWords <MultiValuedProperty>] [-Disabled <$true | $false>] [-DocumentIsUnsupported <$true | $false>] [-ExceptIfAccessScope <InOrganization | NotInOrganization | None>] [-ExceptIfContentContainsSensitiveInformation <PswsHashtable[]>] [-ExceptIfContentPropertyContainsWords <MultiValuedProperty>] [-ExceptIfDocumentIsUnsupported <$true | $false>] [-ExceptIfFrom <SmtpAddress[]>] [-ExceptIfFromMemberOf <SmtpAddress[]>] [-ExceptIfProcessingLimitExceeded <$true | $false>] [-ExpiryDate <DateTime>] [-From <SmtpAddress[]>] [-FromMemberOf <SmtpAddress[]>] [-GenerateAlert <MultiValuedProperty>] [-GenerateIncidentReport <MultiValuedProperty>] [-IncidentReportContent <ReportContentOption[]>] [-Name <String>] [-NotifyAllowOverride <OverrideOption[]>] [-NotifyEmailCustomText <String>] [-NotifyPolicyTipCustomText <String>] [-NotifyPolicyTipCustomTextTranslations <MultiValuedProperty>] [-NotifyUser <MultiValuedProperty>] [-ProcessingLimitExceeded <$true | $false>] [-ReportSeverityLevel <Low | Medium | High | None>] [-RuleErrorAction <Ignore | RetryThenBlock>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the access scope and blocking behavior of a DLP compliance rule that's identified by its GUID value.
  
```
Set-DlpComplianceRule -Identity 25bf67b6-3783-4f74-bde9-98dd40333082 -AccessScope NotInOrganization -BlockAccess $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_ parameter specifies the DLP rule that you want to modify. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Id <br/> |
| _AccessScope_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.AccessScope  <br/> | The _AccessScope_ parameter specifies a condition for the DLP rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are: <br/>  `InOrganization`: The rule is applied to content that's accessible inside the organization.  <br/>  `NotInOrganization`: The rule is applied to content that's accessible outside the organization.  <br/>  `None`: The condition isn't used.  <br/> |
| _AccessTimeControl_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PswsHashtable  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ActivationDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _BlockAccess_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _BlockAccess_ parameter specifies an action for the DLP rule that blocks access to the source item when the conditions of the rule are met. Valid values are: <br/>  `$true`: Blocks further access to the source item that matched the rule. The owner, author, and site owner can still access the item.  <br/>  `$false`: Allows access to the source item that matched the rule. This is the default value.  <br/> |
| _BlockAccessScope_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.BlockAccessScope  <br/> | The _BlockAccessScope_ parameter specifies the scope of the block access action. Valid values are: <br/>  `All`: Block access to everyone except the owner and the last modifier.  <br/>  `PerUser`: Block access to external users.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContentContainsSensitiveInformation_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PswsHashtable[]  <br/> |The  _ContentContainsSensitiveInformation_ parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type. <br/> This parameter uses the basic syntax  `@(@{Name="<SensitiveInformationType1>";[minCount="<Value>"],@{Name="<SensitiveInformationType2>";[minCount="<Value>"],...)`. For example,  `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`.  <br/> Use the **Get-DLPSensitiveInformationType** cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see[Sensitive information types inventory](https://go.microsoft.com/fwlink/p/?LinkId=529420).  <br/> |
| _ContentPropertyContainsWords_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ContentPropertyContainsWords_ parameter specifies a condition for the DLP rule that's based on a property match in content. The rule is applied to content that contains the specified property. <br/> This parameter accepts values in the format:  `"<Property1>:<Value1>,<Value2>","<Property2>:<Value3>,<Value4>"...`.  <br/> |
| _Disabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Disabled_ parameter specifies whether the DLP rule is disabled. Valid values are: <br/>  `$true`: The rule is disabled.  <br/>  `$false`: The rule is enabled. This is the default value.  <br/> |
| _DocumentIsUnsupported_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfAccessScope_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.AccessScope  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfContentContainsSensitiveInformation_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PswsHashtable[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfContentPropertyContainsWords_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfDocumentIsUnsupported_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfFrom_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfFromMemberOf_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfProcessingLimitExceeded_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExpiryDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _From_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _FromMemberOf_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _GenerateAlert_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _GenerateAlert_ parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are: <br/>  An email address. <br/>  `SiteAdmin` <br/>  You can specify multiple values separated by commas. <br/>  The email message that's generated by this action contains a link to detailed information in the Security &amp; Compliance Center (the details aren't in the email message itself). <br/> |
| _GenerateIncidentReport_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _GenerateIncidentReport_parameter specifies an action for the DLP rule that sends an incident report to the specified users when the conditions of the rule are met. Valid values are:  <br/>  An email address. <br/>  `SiteAdmin` <br/>  You can specify multiple values separated by commas. <br/> |
| _IncidentReportContent_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ReportContentOption[]  <br/> | The _IncidentReportContent_ parameter specifies the content to include in the report when you use the _GenerateIncidentReport_ parameter. Valid values are: <br/>  `All` <br/>  `Default` <br/>  `Detections` <br/>  `DocumentAuthor` <br/>  `DocumentLastModifier` <br/>  `MatchedItem` <br/>  `RulesMatched` <br/>  ` Service` <br/>  `Severity` <br/>  ` Service` <br/>  ` Title` <br/>  You can specify multiple values separated by commas. You can only use the value `All` by itself. If you use the value `Default`, the report includes the following content:  <br/>  `DocumentAuthor` <br/>  `MatchedItem` <br/>  `RulesMatched` <br/>  `Service` <br/>  `Title` <br/>  Therefore, if you use any of these redundant values with the value `Default`, they will be ignored.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _NotifyAllowOverride_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.OverrideOption[]  <br/> | The _NotifyAllowOverride_ parameter specifies the notification override options when the conditions of the rule are met. Valid values are: <br/>  `FalsePositive`: Allows overrides in the case of false positives.  <br/>  `WithoutJustification`: Allows overrides without justification.  <br/>  `WithJustification`: Allows overrides with justification.  <br/>  You can specify multiple values separated by commas. The values `WithoutJustification` and `WithJustification` are mutually exclusive. <br/> |
| _NotifyEmailCustomText_ <br/> |Optional  <br/> |System.String  <br/> | The _NotifyEmailCustomText_ parameter specifies the custom text in the email notification message that's sent to recipients when the conditions of the rule are met. <br/>  This parameter has a 5000 character limit, and supports plain text, HTML tags and the following tokens (variables): <br/>  `%%AppliedActions%%`: The actions applied to the content.  <br/>  `%%ContentURL%%`: The URL of the document on the SharePoint site or OneDrive for Business site.  <br/>  `%%MatchedConditions%%`: The conditions that were matched by the content. Use this token to inform people of possible issues with the content.  <br/> |
| _NotifyPolicyTipCustomText_ <br/> |Optional  <br/> |System.String  <br/> |The  _NotifyPolicyTipCustomText_ parameter specifies the custom text in the Policy Tip notification message that's shown to recipients when the conditions of the rule are met. The maximum length is 256 characters. HTML tags and tokens (variables) aren't supported. <br/> |
| _NotifyPolicyTipCustomTextTranslations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _NotifyUser_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _NotifyUser_parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are:  <br/>  An email address. <br/>  `LastModifier` <br/>  `Owner` <br/>  `SiteAdmin` <br/>  You can specify multiple values separated by commas. <br/> |
| _ProcessingLimitExceeded_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ReportSeverityLevel_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.RuleSeverity  <br/> | The _ReportSeverityLevel_ parameter specifies the severity level of the incident report for content detections based on the rule. Valid values are: <br/>  `None`: You can't select this value if the rule has no actions configured.  <br/>  `Low`: This is the default value.  <br/>  `Medium` <br/>  `High` <br/> |
| _RuleErrorAction_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.PolicyRuleErrorAction  <br/> | The _RuleErrorAction_ parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are: <br/>  `Ignore` <br/>  `RetryThenBlock` <br/>  Blank (the value `$null`): This is the default value.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

