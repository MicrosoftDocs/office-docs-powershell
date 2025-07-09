---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinepstngateway
applicable: Microsoft Teams
title: New-CsOnlinePSTNGateway
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsOnlinePSTNGateway

## SYNOPSIS
Creates a new Session Border Controller (SBC) Configuration that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

### Identity (Default)
```
New-CsOnlinePSTNGateway [-Identity] <string> -SipSignalingPort <int>
 [-BypassMode <string>]
 [-Confirm]
 [-Description <string>]
 [-Enabled <boolean>]
 [-FailoverResponseCodes <string>]
 [-FailoverTimeSeconds <int>]
 [-ForwardCallHistory <boolean>]
 [-ForwardPai <boolean>]
 [-GatewayLbrEnabledUserOverride <boolean>]
 [-GatewaySiteId <string>]
 [-GatewaySiteLbrEnabled <boolean>]
 [-IPAddressVersion <string>]
 [-InboundPstnNumberTranslationRules <Object>]
 [-InboundTeamsNumberTranslationRules <Object>]
 [-MaxConcurrentSessions <int>]
 [-MediaBypass <boolean>]
 [-MediaRelayRoutingLocationOverride <string>]
 [-OutboundPstnNumberTranslationRules <Object>]
 [-OutboundTeamsNumberTranslationRules <Object>]
 [-PidfLoSupported <boolean>]
 [-ProxySbc <string>]
 [-SendSipOptions <boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsOnlinePSTNGateway -Fqdn <string> -SipSignalingPort <int>
 [-BypassMode <string>]
 [-Confirm]
 [-Description <string>]
 [-Enabled <boolean>]
 [-FailoverResponseCodes <string>]
 [-FailoverTimeSeconds <int>]
 [-ForwardCallHistory <boolean>]
 [-ForwardPai <boolean>]
 [-GatewayLbrEnabledUserOverride <boolean>]
 [-GatewaySiteId <string>]
 [-GatewaySiteLbrEnabled <boolean>]
 [-IPAddressVersion <string>]
 [-InboundPstnNumberTranslationRules <Object>]
 [-InboundTeamsNumberTranslationRules <Object>]
 [-MaxConcurrentSessions <int>]
 [-MediaBypass <boolean>]
 [-MediaRelayRoutingLocationOverride <string>]
 [-OutboundPstnNumberTranslationRules <Object>]
 [-OutboundTeamsNumberTranslationRules <Object>]
 [-PidfLoSupported <boolean>]
 [-ProxySbc <string>]
 [-SendSipOptions <boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to create a new Session Border Controller (SBC) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as the SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP Options, and specify the limit of maximum concurrent sessions. The cmdlet also lets the administrator drain the SBC by setting parameter -Enabled to $true or $false state. When the Enabled parameter is set to $false, the SBC will continue existing calls, but all new calls will be routed to another SBC in a route (if one exists).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsOnlinePSTNGateway -FQDN sbc.contoso.com -SIPSignalingPort 5061
```

This example creates an SBC with FQDN sbc.contoso.com and signaling port 5061. All others parameters will stay default. Note the SBC will be in the disabled state.

### Example 2
```powershell
PS C:\> New-CsOnlinePSTNGateway -FQDN sbc.contoso.com -SIPSignalingPort 5061 -ForwardPAI $true -Enabled $true
```

This example creates an SBC with FQDN sbc.contoso.com and signaling port 5061. For each outbound to SBC session, the Direct Routing interface will report in P-Asserted-Identity fields the TEL URI and SIP address of the user who made a call. This is useful when a tenant administrator sets the identity of the caller as "Anonymous" or a general number of the company, but for billing purposes the real identity of the user is required.

## PARAMETERS

### -Identity
When creating a new SBC, the identity must be identical to the -FQDN parameter, described above. If the parameter is not defined the Identity will be copied from the -FQDN parameter. The Identity parameter is not mandatory.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Limited to 63 characters, the FQDN registered for the SBC. Copied automatically to Identity of the SBC field.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipSignalingPort
Listening port used for communicating with Direct Routing services by using the Transport Layer Security (TLS) protocol. Must be value between 1 and 65535.
Please note: Spelling of this parameter changed recently from SipSignallingPort to SipSignalingPort.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassMode
Possible values are "None", "Always" and "OnlyForLocalUsers". By setting "Always" mode you indicate that your network is fully routable. If a user usually in site "Seattle", travels to site "Tallinn" and tries to use SBC located in Seattle we will try to deliver the traffic to Seattle assuming that there is connection between Tallinn and Seattle offices. With "OnlyForLocaUsers" you indicate that there is no direct connection between sites. In example above, the traffic will not be send directly from Tallinn to Seattle.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Free-format string to describe the gateway.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Used to enable this SBC for outbound calls. Can be used to temporarily remove the SBC from service while it is being updated or during maintenance. Note if the parameter is not set the SBC will be created as disabled (default value -Enabled $false).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverResponseCodes
If Direct Routing receives any 4xx or 6xx SIP error code in response to an outgoing Invite the call is considered completed by default. (Outgoing in this context is a call
from a Teams client to the PSTN with traffic flow: Teams Client -> Direct Routing -> SBC -> Telephony network). Setting the SIP codes in this parameter forces Direct Routing
on receiving the specified codes try another SBC (if another SBC exists in the voice routing policy of the user). Find more information in the "Reference" section of "Phone
System Direct Routing" documentation.

Setting this parameter overwrites the default values, so if you want to include the default values, please add them to string.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: 408, 503, 504
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverTimeSeconds
When set to 10 (default value), outbound calls that are not answered by the gateway within 10 seconds are routed to the next available trunk; if there are no additional trunks, then the call is automatically dropped. In an organization with slow networks and slow gateway responses, that could potentially result in calls being dropped unnecessarily. The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: 10
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardCallHistory
Indicates whether call history information will be forwarded to the SBC. If enabled, the Office 365 PSTN Proxy sends two headers: History-info and Referred-By. The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardPai
Indicates whether the P-Asserted-Identity (PAI) header will be forwarded along with the call. The PAI header provides a way to verify the identity of the caller. The default value is False ($False). Setting this parameter to $true will render the from header anonymous, in accordance of RFC5379 and RFC3325.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySiteId
PSTN Gateway Site Id.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySiteLbrEnabled
Used to enable this SBC to report assigned site location. Site location is used for Location Based Routing. When this parameter is enabled ($True), the SBC will report the site
name as defined by the tenant administrator. On an incoming call to a Teams user the value of the site assigned to the SBC is compared with the value of the site assigned to
the user to make a routing decision. The parameter is mandatory for enabling Location Based Routing feature. The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewayLbrEnabledUserOverride
Allows an LBR enabled user working from a network site outside the corporate network or a network site on the corporate network not configured using a tenant network site to make outbound PSTN calls or receive inbound PSTN calls via an LBR enabled gateway. The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundTeamsNumberTranslationRules
This parameter assigns an ordered list of Teams translation rules, that apply to Teams numbers on inbound direction.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundPSTNNumberTranslationRules
Creates an ordered list of Teams translation rules, that apply to PSTN number on inbound direction.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressVersion
Possible values are "IPv4" and '"Pv6". When "IPv6" is set, the SBC must use IPv6 for both signaling and media. **Note: IPv6 is supported only for non-media bypass scenarios.**

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: IPv4
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentSessions
Used by the alerting system. When any value is set, the alerting system will generate an alert to the tenant administrator when the number of concurrent sessions is 90% or higher than this value. If the parameter is not set, alerts are not generated. However, the monitoring system will report the number of concurrent sessions every 24 hours.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaBypass
Parameter indicates if the SBC supports Media Bypass and the administrator wants to use it for this SBC.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaRelayRoutingLocationOverride
Allows selecting path for media manually. Direct Routing assigns a datacenter for media path based on the public IP of the SBC. We always select closest to the SBC datacenter. However, in some cases a public IP from for example a US range can be assigned to an SBC located in Europe. In this case we will be using not optimal media path. We only recommend setting this parameter if the call logs clearly indicate that automatic assignment of the datacenter for media path does not assign the closest to the SBC datacenter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundPSTNNumberTranslationRules
Assigns an ordered list of Teams translation rules, that apply to PSTN number on outbound direction.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutbundTeamsNumberTranslationRules
Creates an ordered list of Teams translation rules, that apply to Teams Number on outbound direction.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PidfloSupported
Enables PIDF-LO support on the PSTN Gateway. If turned on the .xml body payload is sent to the SBC with the location details of the user.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxySbc
The FQDN of the proxy SBC. Used in Local Media Optimization configurations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendSipOptions
Defines if an SBC will or will not send SIP Options messages. If disabled, the SBC will be excluded from the Monitoring and Alerting system. We highly recommend that you enable SIP Options. The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/set-csonlinepstngateway)

[Get-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/get-csonlinepstngateway)

[Remove-CsOnlinePSTNGateway](https://learn.microsoft.com/powershell/module/teams/remove-csonlinepstngateway)
