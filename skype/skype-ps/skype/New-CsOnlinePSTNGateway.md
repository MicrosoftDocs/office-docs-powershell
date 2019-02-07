---
external help file: tmp_lagl0bvw.h02-help.xml
Module Name: tmp_lagl0bvw.h02
online version:
schema: 2.0.0
---

# New-CsOnlinePSTNGateway

## SYNOPSIS
Creates a new Session Border Controller (SBC) Configuration that describes the settings for the peer entity.
This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

```
New-CsOnlinePSTNGateway [[-Identity] <Object>] [-InMemory] [-Enabled <Object>] [-GatewaySiteId <Object>]
 [-FailoverTimeSeconds <Object>] [-Force] [-Tenant <Object>] [-FailoverResponseCodes <Object>]
 [-SipSignallingPort <Object>] [-SendSipOptions <Object>] [-Confirm] [-WhatIf] [-Fqdn <Object>]
 [-MediaBypass <Object>] [-GatewaySiteLbrEnabled <Object>] [-ForwardCallHistory <Object>]
 [-MaxConcurrentSessions <Object>] [-ForwardPai <Object>] [-AsJob]
```

## DESCRIPTION
Use this cmdlet to create a new Session Border Controller (SBC) configuration.
Each configuration contains specific settings for an SBC.
These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state.
When the Enabled parameter is set to $false, the SBC will continue existing calls, but all new calls will be routed to another SBC in a route (if exists).

## EXAMPLES

### Example 1
```
PS C:\> New-CSOnlinePSTNGateway - FQDN sbc.contoso.com -SIPSignallingPort 5061
```

This example creates an SBC with FQDN sbc.contoso.com and signaling port 5061.
All others parameters will stay default.
Note the SBC will be in the disabled state.

### Example 2
```
PS C:\> New-CSOnlinePSTNGateway - FQDN sbc.contoso.com -SIPSignallingPort 5061 -ForwardPAI $true -Enabled $true
```

This example creates an SBC with FQDN sbc.contoso.com and signaling port 5061.
For each outbound to SBC session, the Direct Routing interface will report in P-Asserted-Identity fields the TEL URI and SIP address of the user who made a call.
This is useful when a tenant administrator set identity of the caller as "Anonymous" or a general number of the company, but for the billing purposes the real identity of the user should be reported.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Used to enable this SBC for outbound calls.
Can be used to temporarily remove the SBC, while it is being updated or during maintenance.
Note of the parameter not set the SBC will be created as disabled (default value -Enabled $false).

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverTimeSeconds
When set to 10 (default value), outbound calls that are not answered by the gateway within 10 seconds are routed to the next available trunk; if there are no additional trunks, then the call is automatically dropped.
In an organization with slow networks and gateway responses, that could potentially result in calls being dropped unnecessarily.
The default value is 10.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 10
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardCallHistory
Indicates whether call history information will be forwarded through the trunk.
If enabled, the Office 365 PSTN Proxy sends two headers: History-info and Referred-By.
The default value is False ($False).

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardPai
Indicates whether the P-Asserted-Identity (PAI) header will be forwarded along with the call.
The PAI header provides a way to verify the identity of the caller.
The default value is False ($False).

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Limited to 63 characters, the FQDN registered for the SBC.
Copied automatically to Identity of the SBC field.

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

### -Identity
The parameter is not mandatory when creating a new SBC, the identity must be identical to the -FQDN parameter, described below.
If the parameter not defined the Idetity will be copied from the -FQDN parameter.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentSessions
Used by alerting system.
When any value is set, the alerting system will generate an alert to the tenant administrator when the number of concurrent session is 90% or higher than this value.
If parameter is not set, the alerts are not generated.
However, the monitoring system will report number of concurrent session every 24 hours.

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

### -MediaBypass
Parameter indicated of the SBC supports Media Bypass and the administrator wants to use it for this SBC.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -GatewaySiteId
PSTN Gateway Site Id.

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

### -GatewaySiteLbrEnabled
Used to enable this SBC to report assigned site location.
Site location is used for Location Based Routing.
When this parameter is turned on, the SBC will report the site name as defined by tenant administrator.
On incoming call to a Teams user the value of the site assigned to the SBC is compared with the value of the site assigned to the user to make a routing decision.
The parameter is mandatory for enabling Location Based Routing feature.
The default value is False ($False).

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendSipOptions
Defines if an SBC will or will not send the SIP options.
If disabled, the SBC will be excluded from Monitoring and Alerting system.
We highly recommend that you enable SIP options.
Default value is True.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipSignallingPort
Listening port used for communicating with Direct Routing services by using the Transport Layer Security (TLS) protocol.
Must be value between 1 and 65535.

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

### -Tenant
@{Text=}

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverResponseCodes
{{Fill FailoverResponseCodes Description}}

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

## INPUTS

### None
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Set-CSOnlinePSTNGateway]()

[Get-CSOnlinePSTNGateway]()

[Remove-CSOnlinePSTNGateway]()

