---
title: "Set-ComplianceCase"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: de2b0b79-9ab1-4a77-bf93-206ff5d83055
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-ComplianceCase

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-ComplianceCase** cmdlet to modify eDiscovery cases in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ComplianceCase -Identity <ComplianceCaseIdParameter> [-AddOrUpdateSources <SwitchParameter>] [-Close <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-Name <String>] [-RemoveSources <SwitchParameter>] [-Reopen <SwitchParameter>] [-Sources <Object[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a description to the existing eDiscovery case named Fabrikam Litigation.
  
```
Set-ComplianceCase -Identity "Fabrikam Litigation" -Description "For details, contact the Laura at the Contoso law firm"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.ComplianceCase.Tasks.ComplianceCaseIdParameter  <br/> | The _Identity_ parameter specifies the eDiscovery case that you want to modify. You can use any value that uniquely identifies the eDiscovery case. For example: <br/>  Name <br/>  Identity (GUID value) <br/> |
| _AddOrUpdateSources_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Close_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Close_ switch specifies that you want to close the eDiscovery case. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_parameter specifies a description for the compliance case. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the eDiscovery case. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _RemoveSources_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Reopen_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Reopen_ switch specifies that you want to re-open a closed eDiscovery case. You don't need to specify a value with this switch. <br/> |
| _Sources_ <br/> |Optional  <br/> |System.Object[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

