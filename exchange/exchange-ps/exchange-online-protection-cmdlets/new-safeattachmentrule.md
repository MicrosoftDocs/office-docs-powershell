---
title: "New-SafeAttachmentRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 12/5/2017
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 05e1f1c0-801b-4534-b138-3a0522f36a26

description: "This cmdlet is available only in the cloud-based service."
---

# New-SafeAttachmentRule

This cmdlet is available only in the cloud-based service. 
  
Use the **New-SafeAttachmentRule** cmdlet to create Safe Attachments rules in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-SafeAttachmentRule -Name <String> -SafeAttachmentPolicy <SafeAttachmentPolicyIdParameter> [-Comments <String>] [-Confirm [<SwitchParameter>]] [-Enabled <$true | $false>] [-ExceptIfRecipientDomainIs <Word[]>] [-ExceptIfSentTo <RecipientIdParameter[]>] [-ExceptIfSentToMemberOf <RecipientIdParameter[]>] [-Priority <Int32>] [-RecipientDomainIs <Word[]>] [-SentTo <RecipientIdParameter[]>] [-SentToMemberOf <RecipientIdParameter[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new Safe Attachments rule named Research Department Attachment Rule with the following conditions:
  
- The rule is associated with the Safe Attachments policy named Research Block Attachments.
    
- The rule applies to members of the group named Research Department.
    
- The rule doesn't apply to members of the group named Research Department Managers.
    
```
New-SafeAttachmentRule -Name "Research Department Attachment Rule" -SafeAttachmentPolicy "Research Block Attachments" -SentToMemberOf "Research Department" -ExceptIfSentToMemberOf "Research Department Managers"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to specify at least one condition for the rule.
  
You need to add the Safe Attachments rule to an existing policy by using the  _SafeAttachmentPolicy_ parameter. You create Safe Attachments policies by using the **New-SafeAttachmentPolicy** cmdlet.
  
Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a unique name for the Safe Attachments rule. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _SafeAttachmentPolicy_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SafeAttachmentPolicyIdParameter  <br/> | The _SafeAttachmentPolicy_ parameter specifies the Safe Attachments policy that's associated with this Safe Attachments rule. The rule defines the conditions, and the policy defines the actions. <br/>  You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can't specify a Safe Attachments policy that's already associated with another Safe Attachments rule. <br/> |
| _Comments_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comments_ parameter specifies informative comments for the rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 1024 characters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter specifies whether the rule or policy is enabled. Valid values are: <br/>  `$true`: The rule or policy is enabled.  <br/>  `$false`: The rule or policy is disabled.  <br/>  The default value is `$true`.  <br/>  In the properties of the rule, the value of this parameter is visible in the **State** property. <br/> |
| _ExceptIfRecipientDomainIs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Word[]  <br/> |The  _ExceptIfRecipientDomainIs_ parameter specifies an exception that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas. <br/> |
| _ExceptIfSentTo_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _ExceptIfSentTo_ parameter specifies an exception that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Display name <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _ExceptIfSentToMemberOf_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _ExceptIfSentToMemberOf_ parameter specifies an exception that looks for messages sent to members of groups. You can use any value that uniquely identifies the group. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Display name <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> > [!NOTE]>  If you remove the group after you create the rule, no exception is made for messages that are sent to members of the group.          |
| _Priority_ <br/> |Optional  <br/> |System.Int32  <br/> | The _Priority_ parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value. <br/>  Valid values and the default value for this parameter depend on the number of existing rules. For example, if there are 8 existing rules: <br/>  Valid priority values for the existing 8 rules are from 0 through 7. <br/>  Valid priority values for a new rule (the 9th rule) are from 0 through 8. <br/>  The default value for a new rule (the 9th rule) is 8. <br/>  If you modify the priority value of a rule, the position of the rule in the list changes to match the priority value you specify. In other words, if you set the priority value of a rule to the same value as an existing rule, the priority value of the existing rule and all other lower priority rules after it is increased by 1. <br/> |
| _RecipientDomainIs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Word[]  <br/> |The  _RecipientDomainIs_ parameter specifies a condition that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas. <br/> |
| _SentTo_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _SentTo_ parameter specifies a condition that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Display name <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SentToMemberOf_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _SentToMemberOf_ parameter specifies a condition that looks for messages sent to members of groups. You can use any value that uniquely identifies the group. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Display name <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> > [!NOTE]>  If you remove the group after you create the rule, no action is taken on messages that are sent to members of the group.          |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

