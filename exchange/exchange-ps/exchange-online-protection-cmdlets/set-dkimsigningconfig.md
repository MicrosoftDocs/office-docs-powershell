---
title: "Set-DkimSigningConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 8065e93d-3600-4fab-b72c-d783ba354c9c
description: "This cmdlet is available only in the cloud-based service."
---

# Set-DkimSigningConfig

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-DkimSigningConfig** cmdlet to modify the DomainKeys Identified Mail (DKIM) signing policy settings for domains in a cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DkimSigningConfig -Identity <DkimSigningConfigIdParameter> [-AdminDisplayName <String>] [-BodyCanonicalization <Simple | Relaxed>] [-Confirm [<SwitchParameter>]] [-Enabled <$true | $false>] [-HeaderCanonicalization <Simple | Relaxed>] [-PublishTxtRecords <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables the DKIM signing policy for the contoso.com domain.
  
```
Set-DkimSigningConfig -Identity contoso.com -Enabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DkimSigningConfigIdParameter  <br/> | The _Identity_ parameter specifies the DKIM signing policy that you want to modify. You can use any value that uniquely identifies the policy. For example: <br/>  Name: The domain name (for example, contoso.com). <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _AdminDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _AdminDisplayName_parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _BodyCanonicalization_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Dkim.CanonicalizationType  <br/> | The _BodyCanonicalization_ parameter specifies the canonicalization algorithm that's used to create and verify the message body part of the DKIM signature. This value effectively controls the sensitivity of DKIM to changes to the message body in transit. Valid values are: <br/>  `Relaxed`: Changes in whitespace and changes in empty lines at the end of the message body are tolerated. This is the default value.  <br/>  `Simple`: Only changes in empty lines at the end of the message body are tolerated.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether the policy is enabled. Valid values are: <br/>  `$true`: The policy is enabled. This is the default value.  <br/>  `$false`: The policy is disabled.  <br/> |
| _HeaderCanonicalization_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Dkim.CanonicalizationType  <br/> | The _HeaderCanonicalization_ parameter specifies the canonicalization algorithm that's used to create and verify the message header part of the DKIM signature. This value effectively controls the sensitivity of DKIM to changes to the message headers in transit. Valid values are: <br/>  `Relaxed`: Common modifications to the message header are tolerated (for example, header field line rewrapping, changes in unnecessary whitespace or empty lines, and changes in case for header fields). This is the default value.  <br/>  `Simple`: No changes to the header fields are tolerated.  <br/> |
| _PublishTxtRecords_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

