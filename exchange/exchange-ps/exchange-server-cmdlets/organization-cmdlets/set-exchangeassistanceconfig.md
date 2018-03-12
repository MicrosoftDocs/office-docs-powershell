---
title: "Set-ExchangeAssistanceConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 75a38090-d854-4138-9b78-c514f85eb76c
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ExchangeAssistanceConfig

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ExchangeAssistanceConfig** cmdlet to modify the Microsoft Exchange Help configurations for your organization.
  
```
Set-ExchangeAssistanceConfig [-Identity <OrganizationIdParameter>] [-CommunityLinkDisplayEnabled <$true | $false>] [-CommunityURL <Uri>] [-Confirm [<SwitchParameter>]] [-ControlPanelFeedbackEnabled <$true | $false>] [-ControlPanelFeedbackURL <Uri>] [-ControlPanelHelpURL <Uri>] [-DomainController <Fqdn>] [-ExchangeHelpAppOnline <$true | $false>] [-ManagementConsoleFeedbackEnabled <$true | $false>] [-ManagementConsoleFeedbackURL <Uri>] [-ManagementConsoleHelpURL <Uri>] [-OWAFeedbackEnabled <$true | $false>] [-OWAFeedbackURL <Uri>] [-OWAHelpURL <Uri>] [-OWALightFeedbackEnabled <$true | $false>] [-OWALightFeedbackURL <Uri>] [-OWALightHelpURL <Uri>] [-PrivacyLinkDisplayEnabled <$true | $false>] [-PrivacyStatementURL <Uri>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the Help location for the Exchange admin center.
  
```
Set-ExchangeAssistanceConfig -ExchangeHelpAppOnline $false -ManagementConsoleHelpURL 'http://exhelponline'
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CommunityLinkDisplayEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CommunityURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ControlPanelFeedbackEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ControlPanelFeedbackURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ControlPanelHelpURL_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ControlPanelHelpURL_ parameter specifies the URL where help for the Exchange admin center (EAC) is hosted. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _ExchangeHelpAppOnline_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExchangeHelpAppOnline_ specifies whether your organization uses the public help that's hosted by Microsoft. Valid values are: <br/>  `$true`: Your organization uses the help that's hosted by Microsoft. This is the default value.  <br/>  `$false`: Your organization doesn't use the help that's hosted by Microsoft. You need to use the _ControlPanelHelpURL_, _ManagementConsoleHelpURL_, _OWAHelpURL_, and _OWALightHelpURL_ parameters to configure the URLs where the help files are hosted. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ManagementConsoleFeedbackEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ManagementConsoleFeedbackURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ManagementConsoleHelpURL_ <br/> |Optional  <br/> |System.Uri  <br/> |The _ManagementConsoleHelpURL_ parameter specifies the URL where help for the Exchange Management Console (EMC) is hosted. <br/> |
| _OWAFeedbackEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWAFeedbackURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWAHelpURL_ <br/> |Optional  <br/> |System.Uri  <br/> |The _OWAHelpURL_ parameter specifies the URL for where help for the standard version of Outlook on the web is hosted. <br/> |
| _OWALightFeedbackEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWALightFeedbackURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OWALightHelpURL_ <br/> |Optional  <br/> |System.Uri  <br/> |The _OWALightHelpURL_ parameter specifies the URL for where help for the light version of Outlook on the web is hosted. <br/> |
| _PrivacyLinkDisplayEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PrivacyStatementURL_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

