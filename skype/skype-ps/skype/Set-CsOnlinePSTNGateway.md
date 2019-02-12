---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version:
applicable: Skype for Business Online
title: Set-CsOnlinePSTNGateway
schema: 2.0.0
---

# Set-CsOnlinePSTNGateway

## SYNOPSIS
Modifies the previously defined Session Border Controller (SBC) Configuration that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

### Identity (Default)
```
Set-CsOnlinePSTNGateway [-Tenant <System.Guid>] [-SipSignallingPort <Int32>] [-FailoverTimeSeconds <Int32>] [-ForwardCallHistory <Boolean>]
 [-ForwardPai <Boolean>] [-SendSipOptions <Boolean>] [-MaxConcurrentSessions <System.Int32>]
 [-Enabled <Boolean>] [-MediaBypass <Boolean>] [-GatewaySiteId <String>] [-GatewaySiteLbrEnabled <Boolean>] [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsOnlinePSTNGateway [-Tenant <System.Guid>] [-SipSignallingPort <Int32>] [-FailoverTimeSeconds <Int32>] [-ForwardCallHistory <Boolean>]
 [-ForwardPai <Boolean>] [-SendSipOptions <Boolean>] [-MaxConcurrentSessions <System.Int32>]
 [-Enabled <Boolean>] [-MediaBypass <Boolean>] [-GatewaySiteId <String>] [-GatewaySiteLbrEnabled <Boolean>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
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
PS C:\> Set-CsOnlinePSTNGateway -Identity sbc.contoso.com -SIPSignallingPort 5064 -ForwardPAI $true -Enabled $true
```

This example modifies the configuration of an SBC with identity (and FQDN)  sbc.contoso.com. It changes the SIPSignallingPort to 5064 and enabled P-Asserted-Identity field on outbound connections (outbound from Direct Routing to SBC). For each outbound to SBC session, the Direct Routing interface will report in P-Asserted-Identity fields the TEL URI and SIP address of the user who made a call. This is useful when a tenant administrator set identity of the caller as "Anonymous" or a general number of the company, but for the billing purposes the real identity of the user should be reported.

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
Indicates whether the P-Asserted-Identity (PAI) header will be forwarded along with the call. The PAI header provides a way to verify the identity of the caller. The default value is False ($False).

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

### -SipSignallingPort
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
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsOnlinePSTNGateway](New-CsOnlinePSTNGateway.md)

[Get-CsOnlinePSTNGateway](Get-CsOnlinePSTNGateway.md)

[Remove-CsOnlinePSTNGateway](Remove-CsOnlinePSTNGateway.md)
