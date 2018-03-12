---
title: "Test-UMConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4e8f5561-a098-4bfe-94e1-baf7c24b01bb
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-UMConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-UMConnectivity** cmdlet to test the operation of the Microsoft Exchange Unified Messaging service on an Exchange Server 2016 Mailbox server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Test-UMConnectivity [-CallRouter <SwitchParameter>] [-CertificateThumbprint <String>] [-ListenPort <Int32>] [-MediaSecured <$true | $false>] [-MonitoringContext <$true | $false>] [-RemotePort <Int32>] [-Secured <$true | $false>] [-Timeout <Int32>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example performs connectivity and operational tests on the local Mailbox server, and then displays the Voice over IP (VoIP) connectivity information.
  
```
Test-UMConnectivity
```

### Example 2

This example tests the ability of the local Mailbox server to use an unsecured TCP connection instead of a secured mutual TLS connection to place a call through the UM IP gateway MyUMIPGateway by using the telephone number 56780.
  
```
Test-UMConnectivity -UMIPGateway MyUMIPGateway -Phone 56780 -Secured $false
```

### Example 3

This example tests a SIP dial plan by using a SIP URI. This example can be used in an environment that includes Lync Server or Skype for Business Server.
  
```
Test-UMConnectivity -Phone sip:sipdp.contoso.com@contoso.com -UMIPGateway MyUMIPGateway -Secured $true -From sip:user1@contoso.com -MediaSecured $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

Two diagnostic tests are designed to test the operation of the Mailbox server software (mode 1) and the operation of the whole system that includes the connected telephony components (mode 2).
  
The **Test-UMConnectivity** cmdlet can be used to test the operation of a Mailbox server and related connected telephony equipment. When you run this cmdlet and include the _UMIPGateway_ parameter, the Mailbox server tests the full end-to-end operation of the Unified Messaging system. This test includes the telephony components connected to the Mailbox server, such as IP gateways, Private Branch eXchanges (PBXs), and cabling. If the _UMIPGateway_ parameter isn't specified, the Mailbox server tests only the operation of the Unified Messaging components that are installed and configured on the server.
  
When you run this cmdlet in an on-premises Unified Messaging deployment, you need to create a UM IP gateway object for the computer or server that the cmdlet is testing. When you create the UM IP gateway object, you must configure it with a fully qualified domain name (FQDN) and that FQDN must match the name of the computer running this cmdlet.
  
After this task is complete, the cmdlet will have tested the operation of the Mailbox server and related telephony components.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Phone_ <br/> |Required  <br/> |System.String  <br/> |The _Phone_ parameter specifies the telephone number or Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) used when the test call is redirected. The extension number should be configured in the PBX to forward calls to the UM hunt group. <br/> |
| _PIN_ <br/> |Required  <br/> |System.String  <br/> |The _PIN_ parameter specifies the PIN associated with the UM-enabled mailbox. <br/> |
| _ResetPIN_ <br/> |Required  <br/> |System.Boolean  <br/> |The _ResetPIN_ parameter specifies whether to generate or regenerate a new PIN for all the test mailboxes in the current site. <br/> |
| _TUILogon_ <br/> |Required  <br/> |System.Boolean  <br/> |The _TUILogon_ parameter specifies whether the cmdlet tries to log on to one or more UM-enabled mailboxes. The mailboxes must be UM-enabled and associated with the UM dial plan to which the Mailbox server running the Microsoft Exchange Unified Messaging service belongs. The default setting is `$false`.  <br/> |
| _TUILogonAll_ <br/> |Required  <br/> |System.Boolean  <br/> |The _TUILogonAll_ parameter specifies whether to try to connect to all test mailboxes in the current Active Directory site. The default setting is `$false`. The accounts that are tested must be generated by calling the New-TestCasConnectivityUser.ps1 script, and the corresponding mailboxes must be UM-enabled. Otherwise, no action is taken.  <br/> |
| _UMDialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies the UM dial plan to be tested. This parameter must be used with the _TUILogon_ parameter. <br/> |
| _UMIPGateway_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMIPGatewayIdParameter  <br/> |The _UMIPGateway_ parameter specifies the name of the UM IP gateway or IP PBX to use for the outgoing test call. <br/> |
| _CallRouter_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _CallRouter_ switch specifies whether to test the Microsoft Exchange Unified Messaging Call Router service (front-end). You don't need to specify a value with this switch. <br/> |
| _CertificateThumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _CertificateThumbprint_ parameter specifies the certificate thumbprint used for SIP Secured and Secured mode. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DiagDtmfDurationInMilisecs_ <br/> |Optional  <br/> |System.Int32  <br/> |The _DiagDtmfDurationInMilisecs_ parameter specifies the duration of each digit sent. <br/> |
| _DiagDtmfSequence_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagDtmfSequence_ parameter specifies the sequence of digits sent. <br/> |
| _DiagInitialSilenceInMilisecs_ <br/> |Optional  <br/> |System.Int32  <br/> |The _DiagInitialSilenceInMilisecs_ parameter specifies the time period in milliseconds that the cmdlet pauses before the digit sequence is sent. <br/> |
| _DiagInterDtmfDiffGapInMilisecs_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagInterDtmfDiffGapInMilisecs_ parameter specifies whether to customize the time between the digits in the diagnostic sequence. This is a comma-delimited list that can accept null entries. This should include multiple values. <br/> |
| _DiagInterDtmfGapInMilisecs_ <br/> |Optional  <br/> |System.Int32  <br/> |The _DiagInterDtmfGapInMilisecs_ parameter specifies the time in milliseconds between each digit sent in the digit sequence. This is a single value. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _From_ <br/> |Optional  <br/> |System.String  <br/> |The _From_ parameter specifies the SIP URI or SIP address that the call originated from. It's used only when you use the _Phone_ parameter. The default setting is the SIP URI specified when you use the _Phone_ parameter. <br/> |
| _ListenPort_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ListenPort_ parameter specifies the IP port number on which to listen. If not specified, IP port 9000 is used. <br/> |
| _MediaSecured_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MediaSecured_ parameter specifies whether to use Secure RTP or RTP (unsecured) mode. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _RemotePort_ <br/> |Optional  <br/> |System.Int32  <br/> |The _RemotePort_ parameter specifies the port used for the call. If not specified, the default is port 5060 for Transmission Control Protocol (TCP) and 5061 for mutual Transport Layer Security (TLS). <br/> |
| _Secured_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Secured_ parameter specifies whether the test is run in SIP Secured mode. <br/> |
| _Timeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The _Timeout_ parameter specifies the length of time in seconds to wait for the test operation to finish. The default is 600 seconds. You can't set this parameter with a value of less than 60 seconds. However, we recommend that you always configure this parameter with a value of 60 seconds or more. The maximum value for this parameter is 1800 seconds. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

