---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CSOnlinePSTNGateway
schema: 2.0.0
---

# Set-CSOnlinePSTNGateway

## SYNOPSIS
Modifies the previously defined Session Border Controller (SBC) Configuration that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

```
Set-CSOnlinePSTNGateway -Identity <SBCFQDN> [-FQDN <SBCFQDN>] [-SipSignallingPort <o to 65535>] [-MediaBypass <$true | $false>] [-FailoverTimerSeconds <Int32>] [-ForwardCallHistory <$true | $false> ] [-ForwardPAI <$true | $false> ] [-SendSIPOptions <$true| $false>] [- MaxConcurrentSessions <0 to 100,000>] | [-Enabled <$true | $false>]
```

## DESCRIPTION
Use this cmdlet to modify the configuration of the previously created Session Border Controller (SBC) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state. When the Enabled parameter set to $false, the SBC will continue existing calls, but all new calls routed to another SBC in a route (if exists).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CSOnlinePSTNGateway - Identity sbc.contoso.com -Enabled $true
```

This example enables previously created SBC with Identity (and FQDN) sbc.contoso.com. All others parameters will stay default.

### -------------------------- Example 2 --------------------------
```
Set-CSOnlinePSTNGateway -Identity sbc.contoso.com -SIPSignallingPort 5064 -ForwardPAI $true -Enabled $true
```

This example modifies the configuration of an SBC with identity (and FQDN)  sbc.contoso.com. It changes the SIPSignallingPort to 5064 and enabled P-Asserted-Identity field on outbound connections (outbound from Direct Routing to SBC). For each outbound to SBC session, the Direct Routing interface will report in P-Asserted-Identity fields the TEL URI and SIP address of the user who made a call. This is useful when a tenant administrator set identity of the caller as "Anonymous" or a general number of the company, but for the billing purposes the real identity of the user should be reported.


## PARAMETERS

### -Identity
The parameter is not mandatory when creating a new SBC, the identity must be identical to the -FQDN parameter, described below. If the parameter not defined the Idetity will be copied from the -FQDN parameter.

```yaml
Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FQDN
Limited to 63 characters, the FQDN registered for the SBC. Copied automatically to Identity of the SBC field.

```yaml
Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaBypass
Parameter indicated of the SBC supports Media Bypass and the administrator wants to use it for this SBC.

```yaml
Required: False
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipSignallingPort
Listening port used for communicating with Direct Routing services by using the Transport Layer Security (TLS) protocol.

```yaml
Required: True
Default value: 5061
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverTimerSeconds
When set to 10 (default value), outbound calls that are not answered by the gateway within 10 seconds are routed to the next available trunk; if there are no additional trunks, then the call is automatically dropped. In an organization with slow networks and gateway responses, that could potentially result in calls being dropped unnecessarily. The default value is 10.

```yaml
Required: False
Default value: 10
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardCallHistory
Indicates whether call history information will be forwarded through the trunk. If enabled, the Office 365 PSTN Proxy sends two headers: History-info and Referred-By. The default value is False ($False).

```yaml
Required: False
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardPAI
Indicates whether the P-Asserted-Identity (PAI) header will be forwarded along with the call. The PAI header provides a way to verify the identity of the caller. The default value is False ($False).

```yaml
Required: False
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendSIPOptions
Defines if an SBC will or will not send the SIP options. If disabled, the SBC will be excluded from Monitoring and Alerting system. We highly recommend that you enable SIP options. Default value is True.

```yaml
Required: False
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentSessions
Used by alerting system. When any value is set, the alerting system will generate an alert to the tenant administrator when the number of concurrent session is 90% or higher than this value. If parameter is not set, the alerts are not generated. However, the monitoring system will report number of concurrent session every 24 hours.

```yaml
Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Used to enable this SBC for outbound calls. Can be used to temporarily remove the SBC, while it is being updated or during maintenance. Note of the parameter not set the SBC will be created as disabled (default value -Enabled $false).

```yaml
Required: False
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[New-CSOnlinePSTNGateway](New-CSOnlinePSTNGateway.md)
[Get-CSOnlinePSTNGateway](Get-CSOnlinePSTNGateway.md)
[Remove-CSOnlinePSTNGateway](Remove-CSOnlinePSTNGateway.md)