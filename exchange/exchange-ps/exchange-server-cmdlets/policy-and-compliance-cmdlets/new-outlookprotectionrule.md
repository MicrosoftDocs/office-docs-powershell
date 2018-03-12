---
title: "New-OutlookProtectionRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fd1ca109-ff80-492a-8112-62b3e9218594
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-OutlookProtectionRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-OutlookProtectionRule** cmdlet to create a Microsoft Outlook protection rule.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-OutlookProtectionRule -ApplyRightsProtectionTemplate <RmsTemplateIdParameter> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-Force <SwitchParameter>] [-FromDepartment <String[]>] [-Priority <Int32>] [-SentTo <RecipientIdParameter[]>] [-SentToScope <All | InOrganization>] [-UserCanOverride <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example applies the AD RMS template  `Template-Contoso` to messages sent to the SMTP address Joe@contoso.com.
  
```
New-OutlookProtectionRule -Name "Project Contoso" -SentTo Joe@contoso.com -ApplyRightsProtectionTemplate "Template-Contoso"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Outlook protection rules are administrator-created rules applied before a user sends a message using Outlook. Outlook inspects message content and protects messages by applying Active Directory Rights Management Services (AD RMS) rights templates.
  
For more information, see [Understanding Outlook Protection Rules](https://technet.microsoft.com/library/bd7d0ad7-1f8e-46da-a74b-58c58f3eff93.aspx).
  
> [!CAUTION]
> Outlook protection rules created without a condition apply to all messages. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplyRightsProtectionTemplate_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTemplateIdParameter  <br/> |The _ApplyRightsProtectionTemplate_ parameter specifies the AD RMS template to apply to the message. An AD RMS template can be specified using the template name. Use the **Get-RMSTemplate** cmdlet to retrieve templates from your AD RMS server. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the rule. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the Outlook protection rules are enabled. New Outlook protection rules are enabled by default. To create a rule without enabling it, set the _Enabled_ parameter to `$false`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress the confirmation prompt used to warn the administrator when rules are created without any conditions. Rules without any conditions specified apply to all messages. The _Force_ switch doesn't require a value. <br/> |
| _FromDepartment_ <br/> |Optional  <br/> |System.String[]  <br/> |The _FromDepartment_ parameter specifies the sender's department as a condition. The user's department property is compared with the value specified. <br/> |
| _Priority_ <br/> |Optional  <br/> |System.Int32  <br/> |The _Priority_ parameter specifies whether to set the order of processing of Outlook protection rules. Rules with a lower priority value are executed first. <br/> |
| _SentTo_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> |The _SentTo_ parameter specifies one or more recipients as a rule condition. The identity of recipients in the organization or the SMTP address of external recipients can be specified. <br/> The _SentTo_ parameter doesn't accept wildcard characters. When multiple recipients are specified, messages sent to any of the specified recipients are considered a match. <br/> |
| _SentToScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.OutlookProtectionRules.ToUserScope  <br/> | The _SentToScope_ parameter specifies the message scope as a condition. You can use one of the following values: <br/>  `InOrganization`: This value is for messages sent to recipients within the organization.  <br/>  `All`: This value is for messages sent to all recipients.  <br/> |
| _UserCanOverride_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _UserCanOverride_ parameter specifies whether users can override actions taken by Outlook protection rules. By default, users can override actions taken by Outlook protection rules. When set to `$false`, the _UserCanOverride_ parameter prevents the user from overriding the rule when sending the message. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

