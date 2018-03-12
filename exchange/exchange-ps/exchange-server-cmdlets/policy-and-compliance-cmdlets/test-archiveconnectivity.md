---
title: "Test-ArchiveConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0db98a12-8cbb-4e9a-add4-c1847b057a44
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-ArchiveConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-ArchiveConnectivity** cmdlet to verify archive functionality for a mailbox user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-ArchiveConnectivity -UserSmtp <SmtpAddress> [-Confirm [<SwitchParameter>]] [-IncludeArchiveMRMConfiguration <SwitchParameter>] [-MessageId <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples

### Example 1

This example tests archive connectivity to Gurinder Singh's archive.
  
```
Test-ArchiveConnectivity -UserSmtp gsingh@contoso.com
```

### Example 2

This command retrieves mailboxes that have a cloud-based archive provisioned and tests archive connectivity for each mailbox.
  
```
Get-Mailbox -Filter {ArchiveGuid -ne $null -and ArchiveDomain -ne $null} -ResultSize Unlimited | Test-ArchiveConnectivity
```

## Detailed Description

Running the **Test-ArchiveConnectivity** cmdlet validates connectivity to a user's archive mailbox. End-to-end verification includes testing whether an on-premises or cloud-based archive is provisioned for the on-premises mailbox user and whether it's enabled and logging on to the archive mailbox on behalf of the user. Successful completion of the command indicates that processes such as the Managed Folder Assistant and Outlook on the web are able to successfully access the archive mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _UserSmtp_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _UserSmtp_ parameter specifies the SMTP address of the mailbox. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _IncludeArchiveMRMConfiguration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeArchiveMRMConfiguration_ switch retrieves retention tags that are provisioned in the user's archive mailbox and the last time the archive was processed by the Managed Folder Assistant. You don't need to specify a value with this switch. <br/> |
| _MessageId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

