---
title: "Test-ReplicationHealth"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: da55fa0f-e100-44b1-b9b4-bf14e55a5b4d
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-ReplicationHealth

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-ReplicationHealth** cmdlet to check all aspects of replication and replay, or to provide status for a specific Mailbox server in a database availability group (DAG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-ReplicationHealth [-Identity <ServerIdParameter>] [-ActiveDirectoryTimeout <Int32>] [-Confirm [<SwitchParameter>]] [-DatabaseAvailabilityGroup <DatabaseAvailabilityGroupIdParameter>] [-DomainController <Fqdn>] [-MonitoringContext <$true | $false>] [-OutputObjects <SwitchParameter>] [-TransientEventSuppressionWindow <UInt32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the health of replication for the Mailbox server MBX1.
  
```
Test-ReplicationHealth -Identity MBX1
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-ReplicationHealth** cmdlet is designed for the proactive monitoring of continuous replication and the continuous replication pipeline, the availability of Active Manager, and the health and status of the underlying cluster service, quorum, and network components. The **Test-ReplicationHealth** cmdlet can be run locally or remotely against any Mailbox server in a DAG.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ActiveDirectoryTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ActiveDirectoryTimeout_ parameter specifies the time interval in seconds that's allowed for each directory service operation before the operation times out. The default value is 15 seconds. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DatabaseAvailabilityGroup_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> | The _DatabaseAvailabilityGroup_parameter specifies whether to test all servers in the specified DAG. You can use any value that uniquely identifies the DAG. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the the Mailbox server that you want to test. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name (for example, Exchange01) <br/>  Distinguished name (DN) (for example, `CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`)  <br/>  Exchange Legacy DN (for example, `/o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01`)  <br/>  GUID (for example, `bc014a0d-1509-4ecc-b569-f077eec54942`)  <br/>  You can't use this parameter with the _DatabaseAvailabilityGroup_ parameter. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _OutputObjects_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _OutputObjects_ switch specifies whether to output an array of information regarding failures. You don't need to specify a value with this switch. <br/> |
| _TransientEventSuppressionWindow_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _TransientEventSuppressionWindow_ parameter specifies the number of minutes that the queue lengths can be exceeded before the queue length tests are considered to have failed. This parameter is used to reduce the number of failures due to transient load generation. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

