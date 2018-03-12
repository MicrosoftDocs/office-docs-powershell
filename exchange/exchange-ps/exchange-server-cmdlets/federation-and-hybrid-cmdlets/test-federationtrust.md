---
title: "Test-FederationTrust"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4af0c419-2302-4b67-a460-237e90425354
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-FederationTrust

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-FederationTrust** cmdlet to verify that the federation trust is properly configured and functioning as expected.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-FederationTrust [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-MonitoringContext <$true | $false>] [-UserIdentity <RecipientIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example validates the federation trust deployed in the Exchange organization and checks whether a security token can be retrieved from the Microsoft Federation Gateway.
  
```
Test-FederationTrust
```

## Detailed Description
<a name="DetailedDescription"> </a>

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.
  
```
&amp; $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1
```

You can run the **Test-FederationTrust** cmdlet from the Exchange Management Shell, or a monitoring system can run the test periodically.
  
The **Test-FederationTrust** cmdlet runs the following series of tests to ensure that federation is working as expected:
  
- A connection to the Microsoft Federation Gateway is established. This test ensures that communication between the local Exchange server and the Microsoft Federation Gateway is working correctly.
    
- Certificates are checked to ensure they're valid and can be used with the Microsoft Federation Gateway.
    
- A security token is requested from the Microsoft Federation Gateway. This test ensures that a token can be properly retrieved and used.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _UserIdentity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> |The _UserIdentity_ parameter specifies a mailbox user to request a token for. If a mailbox user isn't specified, the command uses the default test mailbox. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

