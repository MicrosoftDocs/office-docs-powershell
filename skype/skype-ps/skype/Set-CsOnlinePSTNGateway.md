---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlinepstngateway
applicable: Skype for Business Online
title: Set-CsOnlinePSTNGateway
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlinePSTNGateway

## SYNOPSIS
Modifies the previously defined Session Border Controller (SBC) Configuration that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

```
Set-CsOnlinePSTNGateway [-Tenant <System.Guid>] [-SipSignalingPort <Int32>] [-FailoverTimeSeconds <Int32>] 
[-ForwardCallHistory <Boolean>]  [-ForwardPai <Boolean>] [-SendSipOptions <Boolean>] 
[-MaxConcurrentSessions <System.Int32>]  [-Enabled <Boolean>] [-MediaBypass <Boolean>] [-GatewaySiteId <String>] 
[-GatewaySiteLbrEnabled <Boolean>] [-MediaRelayRoutingLocationOverride] [-Identity <XdsGlobalRelativeIdentity>] 
[-BypassMode <String>] [-GenerateRingingWhileLocatingUser <Boolean>] 
[-InboundTeamsNumberTranslationRules <String>] [-InboundPSTNNumberTranslationRules <String>] 
[-OutboundTeamsNumberTranslationRules <String>] [-OutboundPSTNNumberTranslationRules <String>] 
[-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to modify the configuration of the previously created Session Border Controller (SBC) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state. When the Enabled parameter set to $false, the SBC will continue existing calls, but all new calls routed to another SBC in a route (if exists).

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsOnlinePSTNGateway -Identity sbc.contoso.com -Enabled $true
```

This example enables previously created SBC with Identity (and FQDN) sbc.contoso.com. All others parameters will stay default.

### Example 2
```powershell
PS C:\> Set-CsOnlinePSTNGateway -Identity sbc.contoso.com -SIPSignalingPort 5064 -ForwardPAI $true -Enabled $true
```

This example modifies the configuration of an SBC with identity (and FQDN)  sbc.contoso.com. It changes the SIPSignalingPort to 5064 and enabled P-Asserted-Identity field on outbound connections (outbound from Direct Routing to SBC). For each outbound to SBC session, the Direct Routing interface will report in P-Asserted-Identity fields the TEL URI and SIP address of the user who made a call. This is useful when a tenant administrator set identity of the caller as "Anonymous" or a general number of the company, but for the billing purposes the real identity of the user should be reported.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online
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
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverTimeSeconds
When set to 10 (default value), outbound calls that are not answered by the gateway within 10 seconds are routed to the next available trunk; if there are no additional trunks, then the call is automatically dropped. In an organization with slow networks and slow gateway responses, that could potentially result in calls being dropped unnecessarily. The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: 10
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardCallHistory
Indicates whether call history information will be forwarded through the trunk. If enabled, the Office 365 PSTN Proxy sends two headers: History-info and Referred-By. The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
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
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The parameter is mandatory when modifying an existing SBC.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:
Applicable: Skype for Business Online
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxConcurrentSessions
Used by the alerting system. When any value is set, the alerting system will generate an alert to the tenant administrator when the number of concurrent session is 90% or higher than this value. If this parameter is not set, the alerts are not generated. However, the monitoring system will report the number of concurrent sessions every 24 hours.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaBypass
Parameter indicated of the SBC supports Media Bypass and the administrator wants to use it for this SBC.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaRelayRoutingLocationOverride
Allows selecting path for media manually. Direct Routing assigns a datacenter for media path based on the public IP of the SBC. We always select closest to the SBC datacenter. However, in some cases a public IP from for example a US range can be assigned to an SBC located in Europe. In this case we will be using not optimal media path. This parameter allows manually set the preferred region for media traffic. We only recommend setting this parameter if the call logs clearly indicate that automatic assignment of the datacenter for media path does not assign the closest to the SBC datacenter

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
If Direct Routing receives any 4xx or 6xx SIP error code in response on outgoing Invite (outgoing means call from a Teams client to PSTN with traffic flow :Teams Client -> Direct Routing -> SBC -> Telephony network) the call is considered completed by default.
Setting the SIP codes in this parameter forces Direct Routing on receiving the specified codes try another SBC (if another SBC exists in the voice routing policy of the user). Please find more in "Reference" section of "Phone System Direct Routing" documentation

```yaml
Type: Int
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: 408, 503, 504
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySiteId
PSTN Gateway Site Id.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySiteLbrEnabled
Used to enable this SBC to report assigned site location. Site location is used for Location Based Routing. When this parameter is turned on, the SBC will report the site name as defined by tenant administrator. On incoming call to a Teams user the value of the site assigned to the SBC is compared with the value of the site assigned to the user to make a routing decision. The parameter is mandatory for enabling Location Based Routing feature. The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendSipOptions
Defines if an SBC will or will not send the SIP options. If disabled, the SBC will be excluded from Monitoring and Alerting system. We highly recommend that you enable SIP options. Default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipSignalingPort
Listening port used for communicating with Direct Routing services by using the Transport Layer Security (TLS) protocol. The value must be between 1 and 65535.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
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
### -GenerateRingingWhileLocatingUser
This parameter is applicableis only for Direct Routing in non-media bypass mode. Sometimes inbound calls from the public switched telephone network (PSTN) to Teams clients can take longer than expected to be established. This can occur for various reasons. When this happens, the caller might not hear anything, the Teams client doesn't ring, and the call might be canceled by some telecommunications providers. This parameter helps to avoid unexpected silences that can occur in this scenario. When enabled for inbound calls from the PSTN to Teams clients, a distinctive audio signal is played to the caller to indicate that Teams is in the process of establishing the call.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundTeamsNumberTranslationRules
This parameter assigns an ordered list of Teams translation rules, that apply to Teams numbers on inbound direction.

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

### -InboundPSTNNumberTranslationRules
Creates an ordered list of Teams translation rules, that apply to PSTN number on inbound direction.

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

### -OutbundTeamsNumberTranslationRulesList
Creates an ordered list of Teams translation rules, that apply to Teams Number on outbound direction.

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

### -OutboundPSTNNumberTranslationRulesList
Assigns an ordered list of Teams translation rules, that apply to PSTN number on outbound direction.

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

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
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
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsOnlinePSTNGateway](New-CsOnlinePSTNGateway.md)

[Get-CsOnlinePSTNGateway](Get-CsOnlinePSTNGateway.md)

[Remove-CsOnlinePSTNGateway](Remove-CsOnlinePSTNGateway.md)
