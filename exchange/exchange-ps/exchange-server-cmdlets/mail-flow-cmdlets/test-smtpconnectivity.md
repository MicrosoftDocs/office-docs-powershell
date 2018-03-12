---
title: "Test-SmtpConnectivity"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 40e81fee-c9ce-472d-8626-b1d3fa85d365
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-SmtpConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-SmtpConnectivity** cmdlet to diagnose whether an SMTP connection can successfully be established to the Receive connectors on a specific server. Although you can run this cmdlet manually to verify SMTP connectivity for a specified server, it's primarily used by Microsoft System Center Operations Manager 2007 to test your transport servers' ability to receive SMTP connections to each of the bindings on all the Receive connectors on those servers.
  
```
Test-SmtpConnectivity [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Identity <ServerIdParameter>] [-MonitoringContext <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example verifies SMTP connectivity for all Receive connectors on the Mailbox server named Mailbox01.
  
```
Test-SmtpConnectivity Mailbox01
```

### Example 2

This example verifies SMTP connectivity for all Receive connectors on all Mailbox servers in the organization.
  
```
Get-TransportService | Test-SmtpConnectivity
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you run the **Test-SmtpConnectivity** cmdlet against a Mailbox server, the cmdlet attempts to establish an SMTP connection to all bindings of all Receive connectors hosted on that server. For each attempt, the cmdlet returns the following information:
  
- **Server**: The name of the server that hosts the Receive connector.
    
- **ReceiveConnector**: The name of the Receive connector to which the SMTP connection was attempted.
    
- **Binding**: The binding that was configured on the Receive connector.
    
- **EndPoint**: The actual IP address and port to which the SMTP connection was attempted.
    
- **StatusCode**: The result of the connection attempt. This can be one of the following values: Success, Unable to connect, Transient error, Permanent error, External error.
    
- **Details**: The actual response received from the server being tested. If the connection attempt isn't successful, this field contains an error string.
    
The **Test-SmtpConnectivity** results are displayed on-screen. You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding "> <filename>" to the command. For example:
  
```
Test-SmtpConnectivity Mailbox01 | ConvertTo-Csv > "C:\My Documents\SMTP Test.csv"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Identity_ parameter specifies the transport server for which the cmdlet verifies SMTP connectivity. The cmdlet verifies SMTP connectivity for all Receive connectors hosted on the specified server. If no server is specified, the cmdlet attempts to perform the SMTP connectivity test against all Receive connectors on the local server. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

