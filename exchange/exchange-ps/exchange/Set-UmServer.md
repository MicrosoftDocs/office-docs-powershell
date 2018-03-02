---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Set-UMServer

## SYNOPSIS
Use the Set-UMServer cmdlet to set the properties on a Unified Messaging (UM) server.

## SYNTAX

```
Set-UMServer [-Identity] <UMServerIdParameter> [-Confirm] [-DialPlans <MultiValuedProperty>]
 [-DomainController <Fqdn>] [-ExternalHostFqdn <UMSmartHost>] [-ExternalServiceFqdn <UMSmartHost>]
 [-GrammarGenerationSchedule <ScheduleInterval[]>] [-IrmLogEnabled <$true | $false>]
 [-IrmLogMaxAge <EnhancedTimeSpan>] [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>] [-IrmLogPath <LocalLongFullPath>] [-MaxCallsAllowed <Int32>]
 [-SIPAccessService <ProtocolConnectionSettings>] [-SipTcpListeningPort <Int32>] [-SipTlsListeningPort <Int32>]
 [-Status <Enabled | Disabled | NoNewCalls>] [-UMForwardingAddressTemplate <String>]
 [-UMPodRedirectTemplate <String>] [-UMStartupMode <TCP | TLS | Dual>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMServer cmdlet sets specific properties on a Unified Messaging server. This cmdlet can be used to set individual Unified Messaging parameters for a specified Unified Messaging server.

After this task is completed, the cmdlet sets the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM server" entry in the Unified Messaging Permissions topic.

## EXAMPLES

### Example 1
```
Set-UMServer -Identity MyUMServer -Status NoNewCalls
```

This example prevents the Unified Messaging server MyUMServer from accepting new calls.

### Example 2
```
Set-UMServer -Identity MyUMServer -DialPlans $null
```

This example removes the Unified Messaging server MyUMServer from all UM dial plans.

### Example 3
```
Set-UMServer -Identity MyUMServer -DialPlans MyUMDialPlanName -MaxCallsAllowed 50
```

This example adds the Unified Messaging server MyUMServer to the UM dial plan MyUMDialPlanName and also sets the maximum number of incoming voice calls to 50.

### Example 4
```
Set-UMServer -Identity MyUMServer -GrammarGenerationSchedule 0.02:30-1.03:00, 1.02:30-1.03:00, 2.02:30-2.03:00, 3.02:30-3.03:00, 4.02:30-4.03:00, 5.02:30-5.03:00, 6.02:30-6.03:00
```

This example changes the grammar generation schedule to 02:30-03:00 every day on the Unified Messaging server MyUMServer.

## PARAMETERS

### -Identity
The Identity parameter specifies the ID for the Unified Messaging server object to be configured. This parameter specifies the directory object ID for the Unified Messaging server.

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialPlans
The DialPlans parameter specifies all the dial plans for which this server will handle UM calls. If no dial plans are defined, the Unified Messaging server won't handle UM calls.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalHostFqdn
The ExternalHostFqdn parameter is the external FQDN or host name of a Unified Messaging server. This host name is sent as the target of a redirect when a Unified Messaging server receives an incoming call. This allows the Microsoft Exchange Unified Messaging service to redirect to the UM Worker Process on the same Unified Messaging server. The ExternalHostFqdn parameter must be used when a Unified Messaging server is located behind a load balancer. The host FQDN is limited to 256 characters.

```yaml
Type: UMSmartHost
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalServiceFqdn
The ExternalServiceFqdn parameter is the FQDN or host name of a load balancer servicing Unified Messaging servers. This parameter is useful when you're migrating Unified Messaging servers from within your organization to a Microsoft Exchange Server 2010 hosted environment. The external service host FQDN can contain up to 2,048 characters.

```yaml
Type: UMSmartHost
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrammarGenerationSchedule
The GrammarGenerationSchedule parameter specifies the scheduled times to start speech grammar generation. This parameter allows only one start time per day. The default scheduled time for grammar generation is 02:00-02:30 local time each day.

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogEnabled
The IrmLogEnabled parameter specifies whether to enable logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true Enable IRM logging

- $false Disable IRM logging

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxAge
The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days. To specify a value, enter the value as a time span: dd.hh:mm:ss, where d = days, h = hours, m = minutes, and s = seconds. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of IRM log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxDirectorySize
The IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 megabytes (MB). When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxFileSize
The IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogPath
The IrmLogPath parameter specifies the default IRM log directory location. The default value is C:\\Program Files\\Microsoft\\Exchange Server\\V14. If you set the value of the IrmLogPath parameter to $null, you effectively disable IRM logging. However, if you set the value of the IrmLogPath parameter to $null when the value of the IrmLogEnabled attribute is $true, Exchange will log errors in the Application event log. The preferred way for disabling IRM logging is to set the IrmLogEnabled parameter to $false.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCallsAllowed
The MaxCallsAllowed parameter specifies the maximum number of concurrent voice calls that the Unified Messaging server allows.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SIPAccessService
The SIPAccessService parameter specifies the FQDN and Transmission Control Protocol (TCP) port of Office Communications Server A/V Edge servers used for inbound or outbound calls from remote users located outside the network.

```yaml
Type: ProtocolConnectionSettings
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTcpListeningPort
The SipTcpListeningPort parameter specifies the TCP port used by the Unified Messaging server to receive incoming calls. This TCP port is used by Unified Messaging servers added to a UM dial plan that isn't configured to use SIP Secured or Secured mode. The default is port 5060.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTlsListeningPort
The SipTlsListeningPort parameter specifies the Transport Layer Security (TLS) port used by the Unified Messaging server to receive incoming calls. This TLS port is used by Unified Messaging servers that are added to a UM dial plan configured to use SIP Secured or Secured mode. The default is port 5061.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter specifies the Unified Messaging server status. The available options are Enabled, Disabled, and NoNewCalls.

```yaml
Type: Enabled | Disabled | NoNewCalls
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMForwardingAddressTemplate
The UMForwardingAddressTemplate parameter specifies the FQDN template for forwarding calls to another data center and is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMPodRedirectTemplate
The UMPodRedirectTemplate parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMStartupMode
The UMStartupMode parameter specifies whether the Microsoft Exchange Unified Messaging service on a Unified Messaging server will start up in TCP, TLS, or Dual mode. If the Unified Messaging server is being added to UM dial plans that have different security settings, you should choose Dual mode. In Dual mode, the Unified Messaging server can listen on ports 5060 and 5061 at the same time. If the startup mode is changed, the Microsoft Exchange Unified Messaging service must be restarted.

```yaml
Type: TCP | TLS | Dual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/11faf772-d000-4cf3-8c01-47a3d4196237.aspx)

