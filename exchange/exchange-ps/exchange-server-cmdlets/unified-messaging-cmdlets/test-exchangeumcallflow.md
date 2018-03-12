---
title: "Test-ExchangeUMCallFlow"
ms.author: tonysmit
author: tonysmit
manager: scotv
ms.date: 10/27/2015
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2616c271-82cb-495e-97dc-d789a5f7a41f
description: "Use the Test-ExchangeUMCallFlow cmdlet (the UM Troubleshooting Tool) to test call flow between the Microsoft Exchange Unified Messaging Call Router service (frontend), the Microsoft Exchange Unified Messaging service (backend), VoIP gateways, IP PBXs, Session Initiation Protocol (SIP) servers and Lync Server or Skype for Business servers. The Test-ExchangeUMCallFlow cmdlet can be used to diagnose configuration errors found in telephony components, Unified Messaging settings in Exchange 2010 SP1 or later, and connectivity issues between on-premises and hybrid Unified Messaging deployments."
---

# Test-ExchangeUMCallFlow

> [!NOTE]
> The **Test-ExchangeUMCallFlow** cmdlet (the UM Troubleshooting Tool) isn't included in Microsoft Exchange. You need to download the UM Troubleshooting Tool from the Microsoft Download Center. For more information, see[Unified Messaging Troubleshooting Tool](http://go.microsoft.com/fwlink/p/?linkId=182625). 
  
Use the **Test-ExchangeUMCallFlow** cmdlet (the UM Troubleshooting Tool) to test call flow between the Microsoft Exchange Unified Messaging Call Router service (frontend), the Microsoft Exchange Unified Messaging service (backend), VoIP gateways, IP PBXs, Session Initiation Protocol (SIP) servers and Lync Server or Skype for Business servers. The **Test-ExchangeUMCallFlow** cmdlet can be used to diagnose configuration errors found in telephony components, Unified Messaging settings in Exchange 2010 SP1 or later, and connectivity issues between on-premises and hybrid Unified Messaging deployments.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Test-ExchangeUMCallFlow [-Mode <Gateway | SIPClient>] [-VoIPSecurity <Unsecured | SIPSecured | Secured>] [-CertificateThumbprint <string>] [-NextHop <string>] [-Diversion <string>] [-HuntGroup <string>]
```

## Examples

### EXAMPLE 1

This example uses the  `Gateway` mode and tests the call flow in a non-Skype for Business environment. This example sets the VoIP security mode to `Unsecured`, uses the IP address 10.1.1.1 as the next hop, and includes an extension number in the diversion information.
  
```
Test-ExchangeUMCallFlow -Mode Gateway -VoIPSecurity Unsecured -NextHop 10.1.1.1 -Diversion 12345
```

### EXAMPLE 2

This example uses the  `SIPClient` mode and tests the call flow with a Secured UM dial plan in an environment that contains servers running Skype for Business. By default, when you run the cmdlet, the cmdlet uses the credentials of the user currently logged onto the computer.
  
```
Test-ExchangeUMCallFlow -Mode SIPClient -CallingParty tony@contoso.com -CalledParty david@contoso.com -Credential $get
```

### EXAMPLE 3

This example uses the  `Gateway` mode and tests the call flow in a non-Skype for Business environment. This example sets the VoIP security mode to `Secured`, uses the IP address 10.176.10.194 as the next hop, and includes diversion information.
  
```
Test-ExchangeUMCallFlow -Mode Gateway -VoIPSecurity Secured -CertificateThumbprint a909502dd82ae41433e6f83886b00d4277a32a7b -NextHop gateway.contoso.com -HuntGroup 10000 -Diversion "History-Info: <sip:10001@10.176.10.194;user=phone?Reason=SIP%3Bcause%3D487%3Btext%3DTimeout>;index=1,<sip:10000@10.176.10.194;user=phone?Reason=SIP>;index=1.1"
```

## Detailed Description

The UM Troubleshooting Tool is an Exchange Management Shell cmdlet named **Test-ExchangeUMCallFlow**. You can use this cmdlet to diagnose configuration errors specific to call answering scenarios to test whether voice mail is functioning correctly in both on-premises and hybrid UM deployments. The **Test-ExchangeUMCallFlow** cmdlet only supports testing of call answering scenarios; however, it can't currently be used to test the following incoming call scenarios:
  
- Incoming calls to a UM auto attendant.
    
- Incoming calls to an Outlook Voice Access number as an unauthenticated user.
    
- Incoming calls to an Outlook Voice Access number as an authenticated Outlook Voice Access user.
    
You can use this cmdlet in deployments with Lync Server or Skype for Business in UM deployments with VoIP gateways or IP PBXs.
  
When you run the cmdlet, it states the reason and possible solutions for issues that have been detected. It also outputs general audio quality metrics for diagnosing audio quality issues related to network connectivity such as jitter and average packet loss. The **Test-ExchangeUMCallFlow** cmdlet supports testing UM components and services in `Secured`,  `SIP Secured`, and  `Unsecured` calls, and it can be run either in `Gateway` or `SIPClient` modes.
  
> [!IMPORTANT]
> You use the **Test-ExchangeUMCallFlow** cmdlet to test only the voice mail functionality of an Exchange server.
  
## Parameters

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CalledParty_ <br/> |Required  <br/> |System.String  <br/> |The _CalledParty_ parameter specifies the SIP URI of the Lync or Skype for Business user that has been enabled for the Enterprise Voice user that the **Test-ExchangeUMCallFlow** cmdlet will make the voice call to, for example: `-CalledParty tonysmith@contoso.com`. Use this parameter if you're running the tool in  `SIPClient` mode. <br/> |
| _CallingParty_ <br/> |Required  <br/> |System.String  <br/> |The _CallingParty_ parameter specifies the SIP URI of the Lync or Skype for Business user that has been enabled for the Enterprise Voice user who's making the incoming call, for example: `-CallingParty tonysmith@contoso.com`. Use this parameter if you're running the tool in  `SIPClient` mode. <br/> |
| _Diversion_ <br/> |Required  <br/> |System.String  <br/> | The _Diversion_ parameter specifies the string that should be sent as diversion information for the incoming call. This can be in the form of a Diversion or History-Info header. The diversion information can be either an extension number or also include additional diversion information. <br/>  When you provide diversion information as a History-Info header, verify the following: <br/>  There are at least two different entries with different user parts. <br/>  The last entry should contain the user's associated UM dial plan pilot number. <br/>  The second to last entry should include the UM-enabled user's extension number. This entry must also include the appropriate Reason text. This text must be properly escaped in accordance with standard URL parameter escaping rules. <br/> |
| _Mode_ <br/> |Required  <br/> |Microsoft.Exchange.UM.TroubleshootingTool.TestMode  <br/> |The _Mode_ parameter specifies whether the deployment being tested includes VoIP gateways, IP PBX, or Lync or Skype for Business servers. You can specify either `Gateway` mode when your UM deployment includes VoIP gateways or IP PBXs or `SIPClient` mode if your UM deployment includes Lync or Skype for Business. <br/> |
| _NextHop_ <br/> |Required  <br/> |System.String  <br/> | The _NextHop_ parameter specifies the IP address or fully qualified domain name (FQDN) and can also include the TCP port of the next hop that the **Test-ExchangeUMCallFlow** cmdlet connects to while emulating the VoIP gateway or IP PBX. When you include the TCP port, you need to include either port 5060 for `Unsecured` mode or port 5061 for `Secured` or `SIPSecured` mode, for example: `gateway.contoso.com:5061`.  <br/>  If you're using the cmdlet in a hybrid environment, you need to enter the FQDN of the Session Border Controller (SBC). <br/>  If you're using the cmdlet in an on-premises environment, you need to use the FQDN of one of the following types of servers: <br/>  An Exchange 2013 or later Mailbox server that's running the Unified Messaging service. <br/>  An Exchange 2010 SP1 or later Unified Messaging server. <br/> |
| _CertificateThumbprint_ <br/> |Optional  <br/> |System.String  <br/> |The _CertificateThumbprint_ parameter specifies the thumbprint of the certificate used for Transport Layer Security (TLS). This is required if either the `SIPSecured` or `Secured` mode is configured on the UM dial plan. This certificate thumbprint is the certificate that was exported from the VoIP gateway, IP Private Branch eXchange (PBX), or Session Border Controller (SBC). Also, the computer that has the UM Troubleshooting Tool installed and is being used to test for call flow must trust the next hop's certificate of authority. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.String  <br/> |The _Credential_ parameter specifies the credentials that will be used to run the cmdlet. <br/> |
| _HuntGroup_ <br/> |Optional  <br/> |System.String  <br/> |The _HuntGroup_ parameter specifies the UM hunt group associated with the VoIP gateway being emulated. This is typically an extension number. Use this parameter if you're running the tool in `Gateway` mode. <br/> |
| _VoIPSecurity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMVoIPSecurityType  <br/> | The _VoIPSecurity_ parameter specifies the security mode when using the cmdlet in `Gateway` mode. You can use one of the following Voice over IP (VoIP) security modes: <br/>  `Secured` (TLS/SRTP) <br/>  `Unsecured` (TCP/RTP) (default) <br/>  `SIPSecured` (TLS/RTP) <br/> |
   
## Input Types

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

