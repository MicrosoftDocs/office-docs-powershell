---
external help file: Microsoft.Exchange.UM.TroubleshootingTool.dll-Help.xml
Module Name: Microsoft.Exchange.UM.TroubleshootingTool.dll
online version: https://technet.microsoft.com/library/2616c271-82cb-495e-97dc-d789a5f7a41f.aspx
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Test-UMConnectivity

## SYNOPSIS
**Note**: The Test-ExchangeUMCallFlow cmdlet (the Exchange UM Troubleshooting Tool) isn't included in Microsoft Exchange. You need to download the Exchange UM Troubleshooting Tool from the Microsoft Download Center. For more information, see [Unified Messaging Troubleshooting Tool](https://go.microsoft.com/fwlink/p/?linkId=182625). 

Use the Test-ExchangeUMCallFlow cmdlet to test call flow between the Microsoft Exchange Unified Messaging Call Router service (frontend), the Microsoft Exchange Unified Messaging service (backend), VoIP gateways, IP PBXs, Session Initiation Protocol (SIP) servers and Lync Server or Skype for Business servers. The Test-ExchangeUMCallFlow cmdlet can be used to diagnose configuration errors found in telephony components, Unified Messaging settings in Exchange 2010 SP1 or later, and connectivity issues between on-premises and hybrid Unified Messaging deployments.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Test-ExchangeUMCallFlow -Mode <Gateway> -Diversion <String> -NextHop <String> [-CertificateThumbprint <String>] [-HuntGroup <String>] [-VoIPSecurity <Unsecured | SIPSecured | Secured>] [<CommonParameters>]
```

### Set2
```
Test-ExchangeUMCallFlow -Mode <SIPClient> -CalledParty <String> -CallingParty <String> -NextHop <String> [-Credential <PSCredential>] [<CommonParameters>]
```

## DESCRIPTION
The UM Troubleshooting Tool is an Exchange Management Shell cmdlet named Test-ExchangeUMCallFlow. You can use this cmdlet to diagnose configuration errors specific to call answering scenarios to test whether voice mail is functioning correctly in both on-premises and hybrid UM deployments. The Test-ExchangeUMCallFlow cmdlet only supports testing of call answering scenarios; however, it can’t currently be used to test the following incoming call scenarios:

- Incoming calls to a UM auto attendant.

- Incoming calls to an Outlook Voice Access number as an unauthenticated user.

- Incoming calls to an Outlook Voice Access number as an authenticated Outlook Voice Access user.

You can use this cmdlet in deployments with Lync Server or Skype for Business Server in UM deployments with VoIP gateways or IP PBXs.

When you run the cmdlet, it states the reason and possible solutions for issues that have been detected. It also outputs general audio quality metrics for diagnosing audio quality issues related to network connectivity such as jitter and average packet loss. The Test-ExchangeUMCallFlow cmdlet supports testing UM components and services in Secured, SIP Secured, and Unsecured calls, and it can be run either in Gateway or SIPClient modes.

**Important**: You use the Test-ExchangeUMCallFlow cmdlet to test only the voice mail functionality of an Exchange server. 

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-ExchangeUMCallFlow -Mode Gateway -VoIPSecurity Unsecured -NextHop 10.1.1.1 -Diversion 12345
```

This example uses Gateway mode and tests the call flow in a non-Skype for Business environment. This example sets the VoIP security mode to Unsecured, uses the IP address 10.1.1.1 as the next hop, and includes an extension number in the diversion information.

### -------------------------- Example 2 --------------------------
```
Test-ExchangeUMCallFlow -Mode SIPClient -CallingParty tony@contoso.com -CalledParty david@contoso.com -Credential $get
```

This example uses SIPClient mode and tests the call flow with a Secured UM dial plan in an environment that contains servers running Skype for Business. By default, when you run the cmdlet, the cmdlet uses the credentials of the user currently logged onto the computer.

### -------------------------- Example 3 --------------------------
```
Test-ExchangeUMCallFlow -Mode Gateway -VoIPSecurity Secured -CertificateThumbprint a909502dd82ae41433e6f83886b00d4277a32a7b -NextHop gateway.contoso.com -HuntGroup 10000 -Diversion "History-Info: <sip:10001@10.176.10.194;user=phone?Reason=SIP%3Bcause%3D487%3Btext%3DTimeout>;index=1,<sip:10000@10.176.10.194;user=phone?Reason=SIP>;index=1.1"
```

This example uses Gateway mode and tests the call flow in a non-Skype for Business environment. This example sets the VoIP security mode to Secured, uses the IP address 10.176.10.194 as the next hop, and includes diversion information.

## PARAMETERS

### -Mode
The Mode parameter specifies whether the deployment being tested includes VoIP gateways, IP PBX, or Lync or Skype for Business servers. Valid values are:

- Gateway: The UM deployment includes VoIP gateways or IP PBXs. 

- SIPClient: The UM deployment includes Lync or Skype for Business server.

```yaml
Type: Gateway | SIPClient
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalledParty
The CalledParty parameter specifies the SIP URI of the Lync or Skype for Business user that has been enabled for the Enterprise Voice user that the Test-ExchangeUMCallFlow cmdlet will make the voice call to, for example: -CalledParty tonysmith@contoso.com. Use this parameter if you're running the tool in SIPClient mode.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallingParty
The CallingParty parameter specifies the SIP URI of the Lync or Skype for Business user that has been enabled for the Enterprise Voice user who's making the incoming call, for example: -CallingParty tonysmith@contoso.com. Use this parameter if you're running the tool in SIPClient mode.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diversion
The Diversion parameter specifies the string that should be sent as diversion information for the incoming call. This can be in the form of a Diversion or History-Info header. The diversion information can be either an extension number or also include additional diversion information.

When you provide diversion information as a History-Info header, verify the following:

- There are at least two different entries with different user parts.

- The last entry should contain the user's associated UM dial plan pilot number.

- The second to last entry should include the UM-enabled user's extension number. This entry must also include the appropriate Reason text. This text must be properly escaped in accordance with standard URL parameter escaping rules.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NextHop
The NextHop parameter specifies the IP address or fully qualified domain name (FQDN) and can also include the TCP port of the next hop that the Test-ExchangeUMCallFlow cmdlet connects to while emulating the VoIP gateway or IP PBX. When you include the TCP port, you need to include either port 5060 for Unsecured mode or port 5061 for Secured or SIPSecured mode, for example: gateway.contoso.com:5061. 

If you're using the cmdlet in a hybrid environment, you need to enter the FQDN of the Session Border Controller (SBC).

If you're using the cmdlet in an on-premises environment, you need to use the FQDN of one of the following types of servers:

- An Exchange 2013 or later Mailbox server that's running the Unified Messaging service.

- An Exchange 2010 SP1 or later Unified Messaging server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
The CertificateThumbprint parameter specifies the thumbprint of the certificate used for Transport Layer Security (TLS). This is required if either the SIPSecured or Secured mode is configured on the UM dial plan. You can find the thumbprint value by using the Get-ExchangeCertificate cmdlet.

This certificate thumbprint is the certificate that was exported from the VoIP gateway, IP Private Branch eXchange (PBX), or Session Border Controller (SBC). Also, the computer that has the UM Troubleshooting Tool installed and is being used to test for call flow must trust the next hop's certificate of authority.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the credentials that will be used to run the cmdlet.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see [Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122). 

```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HuntGroup
The HuntGroup parameter specifies the UM hunt group associated with the VoIP gateway being emulated. This is typically an extension number. Use this parameter if you're running the tool in Gateway mode.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoIPSecurity
The VoIPSecurity parameter specifies the security mode when using the cmdlet in Gateway mode. You can use one of the following Voice over IP (VoIP) security modes:

- Unsecured (TCP/RTP) (default)

- SIPSecured (TLS/RTP)

- Secured (TLS/SRTP)

```yaml
Type: Unsecured | SIPSecured | Secured
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/2616c271-82cb-495e-97dc-d789a5f7a41f.aspx)
