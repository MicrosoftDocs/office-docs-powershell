---
title: "Invoke-MonitoringProbe"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 932fada2-3d7a-4caa-b925-b7bfbae3ae51
description: "This cmdlet is available only in on-premises Exchange."
---

# Invoke-MonitoringProbe

This cmdlet is available only in on-premises Exchange. 
  
Use the **Invoke-MonitoringProbe** cmdlet to run a Managed Availability probe on a selected server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!NOTE]
> This cmdlet cannot be used to run every Managed Availability probe. Only some probes (mainly the deep test probes) can be run manually using this cmdlet. Probes that cannot be run with this cmdlet will generate an error message when Invoke-MonitoringProbe is used to run them. 
  
```
Invoke-MonitoringProbe -Identity <String> -Server <ServerIdParameter> [-Account <String>] [-Endpoint <String>] [-ItemTargetExtension <String>] [-Password <String>] [-PropertyOverride <String>] [-SecondaryAccount <String>] [-SecondaryEndpoint <String>] [-SecondaryPassword <String>] [-TimeOutSeconds <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an Exchange ActiveSync monitoring probe on the EX1 server.
  
```
Invoke-MonitoringProbe -Identity ActiveSync.Protocol\ActiveSyncSelfTestProbe -Server EX1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |System.String  <br/> |The _Identity_ parameter specifies the identity of the monitoring probe to run. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can't use this parameter to configure other Edge Transport servers remotely. <br/> |
| _Account_ <br/> |Optional  <br/> |System.String  <br/> |The _Account_ parameter specifies the identity of the mailbox or user account that will run the monitoring probe. <br/> |
| _Endpoint_ <br/> |Optional  <br/> |System.String  <br/> |The _Endpoint_ parameter specifies the name of the monitoring probe endpoint to connect to, for example, contoso.mail.com. <br/> |
| _ItemTargetExtension_ <br/> |Optional  <br/> |System.String  <br/> |The _ItemTargetExtension_ parameter specifies cmdlet extension data that you can pass to the monitoring probe. The probe that runs on the server may require specific data for its execution. This data is presented to the probe on execution in an XML format. <br/> |
| _Password_ <br/> |Optional  <br/> |System.String  <br/> |The _Password_ parameter specifies the password of the mailbox or user account that will run the monitoring probe. <br/> |
| _PropertyOverride_ <br/> |Optional  <br/> |System.String  <br/> |The _PropertyOverride_ parameter specifies a property that you want to override, for example, to set the time-out value to be extended beyond the default value. <br/> |
| _SecondaryAccount_ <br/> |Optional  <br/> |System.String  <br/> |The _SecondaryAccount_ parameter specifies the identity of the delegate mailbox or user account that will run the monitoring probe. <br/> |
| _SecondaryEndpoint_ <br/> |Optional  <br/> |System.String  <br/> |The _SecondaryEndpoint_ parameter specifies the name of the secondary monitoring probe endpoint to connect to, for example, contoso.mail.fabrikam.com. <br/> |
| _SecondaryPassword_ <br/> |Optional  <br/> |System.String  <br/> |The _SecondaryPassword_ parameter specifies the password of the delegate mailbox or user account that will run the monitoring probe. <br/> |
| _TimeOutSeconds_ <br/> |Optional  <br/> |System.String  <br/> |The _TimeOutSeconds_ parameter specifies the monitoring operation time-out period. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

