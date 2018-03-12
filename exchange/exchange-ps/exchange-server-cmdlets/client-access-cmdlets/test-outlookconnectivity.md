---
title: "Test-OutlookConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 09d810f1-0550-4cd3-8feb-f524018a5d6b
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-OutlookConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-OutlookConnectivity** cmdlet to test end-to-end Microsoft Outlook client connectivity in the Microsoft Exchange organization. This includes testing for both Outlook Anywhere (RPC over HTTP) and MAPI over HTTP connections.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-OutlookConnectivity -ProbeIdentity <String> [-Credential <PSCredential>] [-Hostname <String>] [-MailboxId <MailboxIdParameter>] [-RunFromServerId <ServerIdParameter>] [-TimeOutSeconds <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example runs an OutlookRpcSelfTestProbe on the mailbox server that you're currently connected to.
  
```
Test-OutlookConnectivity -ProbeIdentity "OutlookRpcSelfTestProbe"
```

### Example 2

This example runs the OutlookRpcDeepTestProbe from the "PrimaryMailbox" server for the mailbox "johnd@contoso.com" mounted on "Mailbox Database 1234512345". Because the _Credential_ parameter is not specified, the probe will use the default testing credentials.
  
```
Test-OutlookConnectivity "OutlookRpcDeepTestProbe\Mailbox Database 1234512345" -RunFromServerId PrimaryMailbox -MailboxId johnd@contoso.com
```

### Example 3

This example runs the OutlookRpcCtpProbe and verifies the log-on credentials for the "johnd@contoso.com" mailbox.
  
```
$TestCredentials = Get-Credential; Test-OutlookConnectivity -ProbeIdentity OutlookRpcCtpProbe -MailboxId johnd@contoso.com -Credential $TestCredentials
```

### Example 4

This example runs a logon test from the client access services on a Mailbox server for the mailbox johnd@contoso.com.
  
```
Test-OutlookConnectivity -ProbeIdentity "OutlookRpcCTPProbe" -MailboxID johnd@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Running the **Test-OutlookConnectivity** cmdlet validates an Outlook connection defined by the provided parameters. The command is able to validate a single mailbox.
  
The **Test-OutlookConnectivity** cmdlet runs the same process as the monitoring probes. The Microsoft Exchange Health Manager (MSExchangeHM) service must be running and have created the Outlook probes on the machine that will be tested. You need to select one of the Outlook probe identities to run the test. Use the[Get-MonitoringItemIdentity](https://go.microsoft.com/fwlink/p/?LinkId=510841) cmdlet to see what probes are active.
  
This example lists the probes running in the backend services on a Mailbox server.
  
```
Get-MonitoringItemIdentity -Server MailboxServer1 -Identity outlook.protocol | ?{$_.Name -like '*probe'}
```

This example lists the probes running in the client access services on a Mailbox server.
  
```
Get-MonitoringItemIdentity -Server MailboxServer1 -Identity outlook | ?{$_.Name -like '*probe'}
```

For more information on probes and the monitoring framework, see [Managed Availability](https://go.microsoft.com/fwlink/p/?LinkId=510838), [Managed Availability and Server Health](https://go.microsoft.com/fwlink/p/?LinkId=510839), and [Customizing Managed Availability](https://go.microsoft.com/fwlink/p/?LinkId=510840)
  
By default, the cmdlet uses the test monitoring account attached to the specifed probe. You may enter a different mailbox instead via the _MailboxId_ parameter. The options and results follow.
  
- _MailboxId_ and _Credential_ are not specified: Generic connectivity test against a test mailbox using the system's test credentials.
    
- _MailboxId_ is specified, _Credential_ is not: Connectivity test to the specific mailbox using the system's test credentials.
    
- _MailboxId_ and _Credential_ are both specified: You get a connectivity test to the specific mailbox, and also a test that the credentials provided are valid for that mailbox
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ProbeIdentity_ <br/> |Required  <br/> |System.String  <br/> | The _ProbeIdentity_ parameter specifies the probe to use. <br/> **RPC over HTTP (Outlook Anywhere) probes** <br/>  *OutlookRpcSelfTestProbe*  : Validates that the RPC/HTTP endpoint is able to receive traffic on the Mailbox server. It does not attempt to log onto a mailbox. It is a high level check of connectivity. <br/>  *OutlookRpcDeepTestProbe*  : Validates that the RPC/HTTP endpoint is working on the Mailbox server. It will attempt to connect and log onto the mailbox. Since no database is specified, it will attempt to connect to the first database listed by the **Get-Mailboxdatabase** cmdlet. <br/>  *OutlookRpcDeepTestProbe/\<Database name\>*  : Validates that the RPC/HTTP endpoint is working on the Mailbox Server. It will attempt to connect and log onto the mailbox in the specified database. <br/>  *OutlookRpcCtpProbe*  : Validates that the RPC/HTTP endpoint is working in the client access services on the Mailbox server. Since no database is specified, it will attempt to connect to the first database listed by the **Get-Mailboxdatabase** cmdlet. <br/>  *OutlookRpcCtpProbe/\<database name\>*  : Validates that the RPC/HTTP endpoint is working in the client access services on the Mailbox server. It will attempt to route the connection to the correct back end Mailbox server, and connect and log onto a mailbox in the database. <br/> **MAPI over HTTP probes** <br/>  *OutlookMapiHttpSelfTestProbe*  : Validates that the MAPI/HTTP endpoint is able to receive traffic on the Mailbox server. It does not attempt to log onto a mailbox. It is a high level check of connectivity. <br/>  *OutlookMapiHttpDeepTestProbe*  : Validates that the MAPI/HTTP endpoint is working on the Mailbox server. It will attempt to connect and log onto the mailbox. Since no database is specified, it will attempt to connect to the first database listed by the **Get-Mailboxdatabase** cmdlet. <br/>  *OutlookMapiHttpDeepTestProbe/\<Database name\>*  : Validates that the MAPI/HTTP endpoint is working on the Mailbox Server. It will attempt to connect and log onto the mailbox in the specified database. <br/>  *OutlookMapiHttpCtpProbe*  : Validates that the MAPI/HTTP endpoint is working in the client access services on the Mailbox server. Since no database is specified, it will attempt to connect to the first database listed by the **Get-Mailboxdatabase** cmdlet. <br/>  *OutlookMapiHttpCtpProbe/\<database name\>*  : Validates that the MAPI/HTTP endpoint is working in the client access services on the Mailbox server. It will attempt to route the connection to the correct back end Mailbox server, and connect and log onto a mailbox in the database. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the credential used by the probe. The system's test credentials are used by default. This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _Hostname_ <br/> |Optional  <br/> |System.String  <br/> |The _Hostname_ parameter specifies the protocol endpoint target of the probe. You can use a specific Mailbox server or route through Distributed Name Service server. <br/> |
| _MailboxId_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _MailboxID_ parameter specifies the target mailbox. IF not specified, this uses the test account. <br/> |
| _RunFromServerId_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _RunFromServerID_ parameter specifies the server on which the probe should be run. <br/> |
| _TimeOutSeconds_ <br/> |Optional  <br/> |System.String  <br/> |The _TimeOutSeconds_ parameter specifies the timeout period in seconds before the probe is ended. The default value is 30 seconds. The digits can be entered with or with the use of quotation marks. Either 10 or "10" will work. Any input error will default back to 30 seconds. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

