---
title: "Test-Mailflow"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 00acaba4-66ee-454a-b9db-fe6d80c13f28
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-Mailflow

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-Mailflow** cmdlet to diagnose whether mail can be successfully sent from and delivered to the system mailbox on a Mailbox server. You can also use this cmdlet to verify that email is sent between Mailbox servers within a defined latency threshold.
  
```
Test-Mailflow [-Identity <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests message flow from the server name Mailbox1 to the server named Mailbox2. Note that you need to run this command while connected to Mailbox1.
  
```
Test-Mailflow Mailbox1 -TargetMailboxServer Mailbox2
```

### Example 2

This example tests message flow from the local Mailbox server where you're running this command to the email address john@contoso.com.
  
```
Test-Mailflow -TargetEmailAddress john@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-Mailflow** cmdlet tests mail submission, transport, and delivery. The cmdlet verifies that each Mailbox server can successfully send itself a message. You can also use this cmdlet to verify that the system mailbox on one Mailbox server can successfully send a message to the system mailbox on another Mailbox server. A system mailbox is required on all servers that are involved in the test.
  
The test messages are available in the target user or system mailbox. The message subject is  `Test-Mailflow <GUID>`, and the message body contains the text  `This is a Test-Mailflow probe message.`
  
The **Test-Mailflow** results are displayed on-screen. The interesting values in the results are:
  
- **TestMailflowResult**: The values returned are typically  `Success` or `*FAILURE*`.
    
- **MessageLatencyTime**: The time required to complete the test (deliver the test message). The value uses the syntax _hh:mm:ss.ffff_ where _hh_ = hours, _mm_ = minutes, _ss_ = seconds and _ffff_ = fractions of a second.
    
You can write the **Test-Mailflow** results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding "> <filename>" to the command. For example:
  
```
Test-Mailflow -AutoDiscoverTargetMailboxServer | ConvertTo-Csv > "C:\My Documents\test-mailflow 2014-05-01.csv"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AutoDiscoverTargetMailboxServer_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AutoDiscoverTargetMailboxServer_ switch specifies whether to automatically populate a list of target Mailbox servers to which to send a test message. The task queries Active Directory to discover all Mailbox servers and then sends each server a test message. <br/> When you use this switch, you can't use the _CrossPremises_, _TargetDatabase_, _TargetEmailAddress_ or _TargetMailboxServer_ parameters. <br/> |
| _CrossPremises_ <br/> |Required  <br/> |System.Boolean  <br/> |The _CrossPremises_ parameter specifies whether the mail flow test will be conducted in cross-premises mode. <br/> Set this parameter to  `$true` if your organization is using a cross-premises deployment and you want to verify cross-premises mail flow. <br/> When you use this parameter, you can't use the _AutoDiscoverTargetMailboxServer_, _TargetDatabase_, _TargetEmailAddress_ or _TargetMailboxServer_ parameters. <br/> |
| _TargetDatabase_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |The _TargetDatabase_ parameter specifies the mailbox database to which test messages are sent. <br/> When you use this parameter, you can't use the _AutoDiscoverTargetMailboxServer_, _CrossPremises_, _TargetEmailAddress_ or _TargetMailboxServer_ parameters. <br/> |
| _TargetEmailAddress_ <br/> |Required  <br/> |System.String  <br/> |The _TargetEmailAddress_ parameter specifies the SMTP address of the mailbox to which test messages are sent. Use this parameter to send test messages to a Mailbox server in a remote forest. If this parameter is used, the test is always a remote test. <br/> When you use this parameter, you can't use the _AutoDiscoverTargetMailboxServer_, _CrossPremises_, _TargetDatabase_ or _TargetMailboxServer_ parameters. <br/> |
| _TargetMailboxServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _TargetMailboxServer_ parameter specifies one or more Mailbox servers in the local Exchange organization to which test messages are sent. <br/> When you use this parameter, you can't use the _AutoDiscoverTargetMailboxServer_, _CrossPremises_, _TargetDatabase_ or _TargetEmailAddress_ parameters. <br/> |
| _ActiveDirectoryTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ActiveDirectoryTimeout_ parameter specifies the number of seconds that elapse before the task provides an informational message about the delay. The default value is 15 seconds. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CrossPremisesExpirationTimeout_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _CrossPremisesExpirationTimeout_ parameter is used when this cmdlet is run by Microsoft System Center Operations Manager 2007 agents for asynchronous monitoring. We don't recommend using this parameter when running this cmdlet manually. <br/> |
| _CrossPremisesPendingErrorCount_ <br/> |Optional  <br/> |System.Int32  <br/> |The _CrossPremisesPendingErrorCount_ parameter is used when this cmdlet is run by System Center Operations Manager 2007 agents for asynchronous monitoring. We don't recommend using this parameter when running this cmdlet manually. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ErrorLatency_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ErrorLatency_ parameter specifies how long to wait for a test message to be delivered before an error event is logged in Microsoft System Center Operations Manager 2007. The default value when a test message is sent to the local Mailbox server is 15 seconds and 180 seconds when a test message is sent to a remote Mailbox server. <br/> |
| _ExecutionTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ExecutionTimeout_ parameter specifies the maximum time that this task can run before the test is determined to be a failure. If no test message or delivery report arrives before this time expires, the task ends and an error is reported. When the task is run in the Exchange Management Shell, the default setting is 240 seconds. When the _MonitoringContext_ parameter is used, the default setting is 15 seconds. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Identity_ parameter specifies the source Mailbox server name from which a test message is sent. If you don't use this parameter, the local Mailbox server is used. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _TargetEmailAddressDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _TargetEmailAddressDisplayName_ parameter specifies a custom display name that's used on events and reports in Microsoft System Center Operations Manager 2007 when the _TargetEmailAddress_ parameter is used. If you don't use the _TargetEmailAddressDisplayName_ parameter, the events and reports use the email address value specified by the _TargetEmailAddress_ parameter. <br/> This parameter is available only with the _TargetEmailAddress_ parameter, and has no effect on the output of the cmdlet outside of Microsoft System Center Operations Manager. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

