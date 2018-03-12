---
title: "Set-SafeLinksPolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 3fd35540-61a3-4ad3-b66f-2d5a1aeda6dc
description: "This cmdlet is available only in the cloud-based service."
---

# Set-SafeLinksPolicy

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-SafeLinksPolicy** cmdlet to modify Safe Links policies in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SafeLinksPolicy -Identity <SafeLinksPolicyIdParameter> [-AdminDisplayName <String>] [-AllowClickThrough <$true | $false>] [-Confirm [<SwitchParameter>]] [-DoNotAllowClickThrough <$true | $false>] [-DoNotRewriteUrls <MultiValuedProperty>] [-DoNotTrackUserClicks <$true | $false>] [-Enabled <$true | $false>] [-EnableForInternalSenders <$true | $false>] [-ExcludedUrls <String[]>] [-IsEnabled <$true | $false>] [-ScanUrls <$true | $false>] [-TrackClicks <$true | $false>] [-WhatIf [<SwitchParameter>]] [-WhiteListedUrls <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the existing Safe Links policy named Engineering Block URL to track user clicks on URLs in URL trace.
  
```
Set-SafeAttachmentsPolicy -Identity "Engineering Block URL" -TrackClicks $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SafeLinksPolicyIdParameter  <br/> | The _Identity_ parameter specifies the Safe Links policy that you want to modify. <br/>  You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AdminDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _AdminDisplayName_parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _AllowClickThrough_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DoNotAllowClickThrough_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DoNotAllowClickThrough_ parameter specifies whether to allow users to click through to the original URL. Valid values are: <br/>  `$true`: The user isn't allowed to click through to the original URL. This is the default value.  <br/>  `$false`: The user is allowed to click through to the original URL.  <br/> |
| _DoNotRewriteUrls_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _DoNotRewriteUrls_ parameter specifies a URL that's skipped by Safe Links scanning. You can specify multiple values separated by commas. <br/> |
| _DoNotTrackUserClicks_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _DoNotTrackUserClicks_ parameter specifies whether to track user clicks related to links in email messages. Valid values are: <br/>  `$true`: User clicks aren't tracked. This is the default value.  <br/>  `$false`: User clicks are tracked.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter specifies whether the rule or policy is enabled. Valid values are: <br/>  `$true`: The rule or policy is enabled.  <br/>  `$false`: The rule or policy is disabled.  <br/> |
| _EnableForInternalSenders_ <br/> |Optional  <br/> |System.Boolean  <br/> |PARAMVALUE: $true | $false  <br/> |
| _ExcludedUrls_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _ExcludedUrls_ parameter specifies a URL that's skipped by Safe Links scanning. You can specify multiple values separated by commas. <br/> |
| _IsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter specifies whether the rule or policy is enabled. Valid values are: <br/>  `$true`: The rule or policy is enabled.  <br/>  `$false`: The rule or policy is disabled.  <br/> |
| _ScanUrls_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ScanUrls_ parameter specifies whether to enable or disable the scanning of links in email messages. Valid values are: <br/>  `$true`: Scanning links in email messages is enabled.  <br/>  `$false`: Scanning links in email messages is disabled. This is the default value.  <br/> |
| _TrackClicks_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WhiteListedUrls_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

