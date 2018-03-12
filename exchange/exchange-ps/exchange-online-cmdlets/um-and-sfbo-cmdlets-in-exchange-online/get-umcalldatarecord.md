---
title: "Get-UMCallDataRecord"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7b75c817-820e-4863-9865-e17ad9ade903
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMCallDataRecord

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMCallDataRecord** cmdlet to display Unified Messaging (UM) call data records for a specific UM-enabled user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMCallDataRecord -Mailbox <MailboxIdParameter> [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the UM call data records for the UM-enabled user Tony.
  
```
Get-UMCallDataRecord -Mailbox tony@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMCallDataRecord** cmdlet displays UM call data records for the last 90 days for a UM-enabled mailbox that you specify. Each UM call data record provides detailed information about all calls either placed to or received by the specified user. The following list details each of the properties that are returned:
  
- 
    
- **Date**: Date and time of the Mailbox server running the Microsoft Exchange Unified Messaging service that took the call in the Coordinated Universal Time (UTC) format.
    
- **Duration**: Total duration of this call. For Find Me calls, this will always be zero because the call is being transferred and won't be handled by Unified Messaging any longer.
    
- **AudioCodec**: Audio codec used for the call including G.711 or Group System Mobile (GSM).
    
- **DialPlan**: Name of the UM dial plan handling the call.
    
- **CallType**: Type of the call (localized in the user's language): `Call Answering Voice Message`,  `Call Answering Missed Call`, ,  `Auto Attendant`,  `Subscriber Access`,  `Fax`,  `PlayOnPhone`,  `Find Me`,  `None`,  `UnauthenticatedPilotNumber`, or  `PromptProvisioning`.
    
- **CallingNumber**: Phone number or address of the caller.
    
- **CalledNumber**: Phone number or address of the intended recipient of the call.
    
- **Gateway**: Fully qualified domain name (FQDN) of the UM IP gateway handling the call.
    
- **Network MOS (NMOS)**: Mean opinion score for the network performance.
    
- **NMOSDegradation**: Total NMOS degradation, which is how far the NMOS reported value was from its top value for the corresponding audio codec.
    
- **PercentagePacketLoss**: Percentage that reflects the average network packet loss during the call.
    
- **Jitter**: Average jitter of the network.
    
- **RoundTripMilliseconds**: Round trip time for Real Time Control Protocol (RTCP) statistics in milliseconds.
    
- **BurstLossDurationMilliseconds**: Average duration of packet loss during bursts during the call.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the UM-enabled mailbox that UM call data records are displayed for. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

