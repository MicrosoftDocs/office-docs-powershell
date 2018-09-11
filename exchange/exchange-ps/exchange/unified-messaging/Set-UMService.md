---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Set-UMService
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-UMService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-UMService cmdlet to modify the properties of the Microsoft Exchange Unified Messaging service on Exchange 2013 or Exchange 2016 Mailbox servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UMService [-Identity] <UMServerIdParameter> [-Confirm] [-DialPlans <MultiValuedProperty>]
 [-DomainController <Fqdn>] [-GrammarGenerationSchedule <ScheduleInterval[]>]
 [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [-IPAddressFamilyConfigurable <$true | $false>]
 [-IrmLogEnabled <$true | $false>] [-IrmLogMaxAge <EnhancedTimeSpan>] [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>] [-IrmLogPath <LocalLongFullPath>] [-MaxCallsAllowed <Int32>]
 [-SIPAccessService <ProtocolConnectionSettings>] [-Status <Enabled | Disabled | NoNewCalls>]
 [-UMStartupMode <TCP | TLS | Dual>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UMService -Identity MyUMServer -IPAddressFamily Any -UMStartupMode Dual
```

This example performs the following actions:

- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to accept both IPv4 and IPv6 data packets.

- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to start up using both TCP and TLS mode.

### -------------------------- Example 2 --------------------------
```
Set-UMService -Identity MyUMServer -DialPlans $null
```

This example removes the Mailbox server MyUMServer from all UM dial plans.

### -------------------------- Example 3 --------------------------
```
Set-UMService -Identity MyUMServer -DialPlans MySIPDialPlan -MaxCallsAllowed 50 -SipAccessService northamerica.lyncpoolna.contoso.com -UMStartupMode TLS
```

This example performs the following actions:

- Adds the Mailbox server MyUMServer to the UM dial plan MySIPDialPlan.

- Sets the maximum number of incoming calls to 50.

- Sets northamerica.lyncpoolna.contoso.com as the FQDN for the SIP access service that is used by Microsoft Lync Server or Skype for Business Server for inbound and outbound calling from remote Lync or Skype for Business clients.

- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to start up in TLS mode.

## PARAMETERS

### -Identity
The Identity parameter specifies the Exchange server that hosts the Unified Messaging service that you want to modify. For example:

You can use any value that uniquely identifies the Exchange server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialPlans
The DialPlans parameter specifies all dial plans that the Unified Messaging service handles incoming calls for.

Exchange 2016 and Exchange 2013 servers can't be associated with a TelExt or E.164 UM dial plan, but can be associated or added to SIP dial plans. If you're integrating Unified Messaging with Lync Server 2010, Lync Server 2013, or Skype for Business Server 2015, you need to associate or add all Exchange 2016 and Exchange 2013 servers to SIP dial plans.

You can also use this parameter to associate Exchange 2010 Unified Messaging servers to a UM dial plan.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressFamily
The IPAddressFamily parameter specifies whether the UM IP gateway will use IPv4, IPv6, or both to communicate. Valid values are:

- IPv4

- IPv6

- Any: IPv6 is used first and if necessary, the UM IP gateway falls back to IPv4. This is the default value.

```yaml
Type: IPv4Only | IPv6Only | Any
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressFamilyConfigurable
The IPAddressFamilyConfigurable parameter specifies whether you're able to set the IPAddressFamily parameter to IPv6Only or Any. The default is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogEnabled
The IrmLogEnabled parameter specifies whether to enable logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Valid values are:

- $true: Enable IRM logging

- $false: Disable IRM logging

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxAge
The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of IRM log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxDirectorySize
The IrmLogMaxDirectorySize parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 megabytes (MB).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the connectivity log directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxFileSize
The IrmLogMaxFileSize parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the IrmLogMaxFileSize parameter must be less than or equal to the value of the IrmLogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the IRM log files.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogPath
The IrmLogPath parameter specifies the default IRM log directory location. The default location is %ExchangeInstallPath%IRMLogs.

If you set the value of this parameter to $null, you effectively disable IRM logging. However, setting this parameter to $null when the value of the IrmLogEnabledparameter is $true, generates errors in the Application event log. The preferred way to disable IRM logging is to set the IrmLogEnabled parameter to $false.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCallsAllowed
The MaxCallsAllowed parameter specifies the maximum number of concurrent voice calls that the Unified Messaging service allows. The default value is 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SIPAccessService
The SIPAccessService parameter specifies the FQDN and TCP port of the nearest Lync Server pool or Skype for Business Server pool location for inbound and outbound calls from remote Lync or Skype for Business users located outside of the network. When this parameter isn't set, the Microsoft Exchange Unified Messaging service may select a Lync Server pool or Skype for Business Server pool for Real-Time Transport Protocol (RTP) media traffic that isn't the closest geographically to the remote user.

This parameter is optional when you're configuring Unified Messaging with single Lync Server pool or Skype for Business Server pool deployments. However, for Lync Server or Skype for Business Server deployments that span multiple geographic regions, it's recommended that you specify this parameter. This parameter is set on a per-Unfined Messaging service basis and must point to the Lync Server pool or Skype for Business Server pool that is located the closest geographically to the Exchange server.

```yaml
Type: ProtocolConnectionSettings
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
This parameter has been deprecated and is no longer used.

```yaml
Type: Enabled | Disabled | NoNewCalls
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMStartupMode
The UMStartupMode parameter specifies the startup mode for the Unified Messaging service. Valid values are:

- TCP (This is the default value)

- TLS

- Dual: The service can listen on ports 5060 and 5061 at the same time. If you add the Exchange server to UM dial plans that have different security settings, you should use this value.

If you change the value of this parameter, you need to restart the Unified Messaging service.

```yaml
Type: TCP | TLS | Dual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/daa3a3f4-fff6-407e-b83e-496728f0f1e4.aspx)
