---
title: "Get-DatabaseAvailabilityGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ea64d731-55ae-4a39-9eec-a72aa36d6dad
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-DatabaseAvailabilityGroup

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-DatabaseAvailabilityGroup** cmdlet to obtain a variety of configuration settings, status, and other information about a database availability group (DAG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DatabaseAvailabilityGroup [-Identity <DatabaseAvailabilityGroupIdParameter>] [-DomainController <Fqdn>] [-Status <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the basic properties of the DAG DAG1. The output for the command is formatted as a list.
  
```
Get-DatabaseAvailabilityGroup DAG1 | Format-List
```

### Example 2

This example displays the properties of the DAG DAG2. Because it includes the _Status_ parameter, the task also displays real-time status information for DAG2, such as the current list of operational servers, and the server currently holding the Primary Active Manager role. In addition, several properties of the DAG, such as the witness server and directory configuration information are also displayed. The output for the command is formatted as a list.
  
```
Get-DatabaseAvailabilityGroup DAG2 -Status | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

In addition to obtaining a list of DAG members, the **Get-DatabaseAvailabilityGroup** cmdlet can also be used to view real-time status information about a DAG, such as:
  
- **OperationalServers**
    
- **PrimaryActiveManager**
    
- **ReplicationPort**
    
- **NetworkNames**
    
- **WitnessShareInUse**
    
Use the _Status_ parameter with the command to include the values for these listed properties. Without the _Status_ parameter, the values returned for these properties are blank.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> |The _Identity_ parameter specifies the name of the DAG to query. <br/> |
| _Status_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Status_ parameter instructs the command to query Active Directory for additional information, and to include real-time status information in the output. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

