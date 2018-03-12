---
title: "Import-JournalRuleCollection"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 89ecb780-0998-4c61-ba43-7d17b49df363
description: "This cmdlet is available only in on-premises Exchange."
---

# Import-JournalRuleCollection

This cmdlet is available only in on-premises Exchange. 
  
Use the **Import-JournalRuleCollection** cmdlet to import journal rules from an XML file. You can import a journal rule collection you previously exported as a backup, or import rules you exported from an older version of Exchange.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Import-JournalRuleCollection -FileData <Byte[]> [-Identity <RuleIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports journal rules from the XML file ExportedJournalRules.xml in a two-step process.
  
The first step retrieves journal rules from the previously exported XML file ExportedJournalRules.xml using the **Get-Content** cmdlet, and then stores the results in the variable _$Data_. The second step retrieves data from the variable _$Data_ and imports journal rules to your organization, overwriting existing journal rules.
  
```
[Byte[]]$Data = Get-Content -Path "C:\JournalRules\ExportedJournalRules.xml" -Encoding Byte -ReadCount 0; Import-JournalRuleCollection -FileData $Data
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Import-JournalRuleCollection** cmdlet imports a journal rule collection you previously exported.
  
> [!CAUTION]
> Importing a journal rule collection from an XML file removes or overwrites all pre-existing journal rules in your organization. Make sure that you have a backup of your current journal rule collection before you import and overwrite your current journal rules. 
  
Importing file data is a two-step process. First you must load the data to a variable using the **Get-Content** cmdlet, and then use that variable to transmit the data to the cmdlet.
  
For more information about how to export a journal rule collection to an XML file, see [Export-JournalRuleCollection](export-journalrulecollection.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The _FileData_ parameter specifies the variable name that contains the content of the XML file. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.Tasks.RuleIdParameter  <br/> |The _Identity_ parameter specifies the name of a journal rule to be imported. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

