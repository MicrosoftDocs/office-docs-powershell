---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-umserver
schema: 2.0.0
title: Set-UMServer
---

# Set-UMServer

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-UMServer cmdlet to modify settings that are associated with the Unified Messaging (UM) server role.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UMServer [-Identity] <UMServerIdParameter>
 [-Confirm]
 [-DialPlans <MultiValuedProperty>]
 [-DomainController <Fqdn>]
 [-ExternalServiceFqdn <UMSmartHost>]
 [-GrammarGenerationSchedule <ScheduleInterval[]>]
 [-IrmLogEnabled <Boolean>]
 [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>]
 [-MaxCallsAllowed <Int32>]
 [-SIPAccessService <ProtocolConnectionSettings>]
 [-SipTcpListeningPort <Int32>]
 [-SipTlsListeningPort <Int32>]
 [-Status <ServerStatus>]
 [-UMStartupMode <UMStartupMode>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-UMServer cmdlet sets specific properties on a Unified Messaging server. This cmdlet can be used to set individual Unified Messaging parameters for a specified Unified Messaging server.

After this task is completed, the cmdlet sets the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UMServer -Identity MyUMServer -Status NoNewCalls
```

This example prevents the Unified Messaging server MyUMServer from accepting new calls.

### Example 2
```powershell
Set-UMServer -Identity MyUMServer -DialPlans $null
```

This example removes the Unified Messaging server MyUMServer from all UM dial plans.

### Example 3
```powershell
Set-UMServer -Identity MyUMServer -DialPlans MyUMDialPlanName -MaxCallsAllowed 50
```

This example adds the Unified Messaging server MyUMServer to the UM dial plan MyUMDialPlanName and also sets the maximum number of incoming voice calls to 50.

### Example 4
```powershell
Set-UMServer -Identity MyUMServer -GrammarGenerationSchedule 0.02:30-1.03:00,1.02:30-1.03:00,2.02:30-2.03:00,3.02:30-3.03:00,4.02:30-4.03:00,5.02:30-5.03:00,6.02:30-6.03:00
```

This example changes the grammar generation schedule to 02:30-03:00 every day on the Unified Messaging server MyUMServer.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the Unified Messaging server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- GUID
- Distinguished name (DN)
- ExchangeLegacyDN

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialPlans

> Applicable: Exchange Server 2010

The DialPlans parameter specifies the dial plans that the server handles UM calls for. You can specify multiple values separated by commas.

If no dial plans are specified, the Unified Messaging server doesn't handle UM calls.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalServiceFqdn

> Applicable: Exchange Server 2010

The ExternalServiceFqdn parameter is the FQDN or host name of a load balancer servicing Unified Messaging servers. This parameter is useful when you're migrating Unified Messaging servers from within your organization to a Microsoft Exchange Server 2010 hosted environment. The external service host FQDN can contain up to 2,048 characters.

```yaml
Type: UMSmartHost
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrammarGenerationSchedule

> Applicable: Exchange Server 2010

The GrammarGenerationSchedule parameter specifies the scheduled times to start speech grammar generation. This parameter allows only one start time per day. The default scheduled time for grammar generation is 02:00-02:30 local time each day.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`. You can specify multiple schedules separated by commas: `"Schedule1","Schedule2",..."ScheduleN"`.

You can use the following values for days:

- Full name of the day.
- Abbreviated name of the day.
- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"
- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)
- "Sun.1:15 AM-Monday.23:00"
- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Run on Monday and Wednesday mornings from 4:30 until 5:30.)

```yaml
Type: ScheduleInterval[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogEnabled

> Applicable: Exchange Server 2010

The IrmLogEnabled parameter specifies whether to enable logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Values include:

- $true Enable IRM logging
- $false Disable IRM logging

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxAge

> Applicable: Exchange Server 2010

The IrmLogMaxAge parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days. To specify a value, enter the value as a time span: dd.hh:mm:ss, where d = days, h = hours, m = minutes, and s = seconds. The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the IrmLogMaxAge parameter to 00:00:00 prevents the automatic removal of IRM log files because of their age.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxDirectorySize

> Applicable: Exchange Server 2010

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxFileSize

> Applicable: Exchange Server 2010

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogPath

> Applicable: Exchange Server 2010

The IrmLogPath parameter specifies the default IRM log directory location. The default value is %ExchangeInstallPath%IRMLogs.

If you set the value of this parameter to $null, you effectively disable IRM logging. However, if the value of the IrmLogEnabled parameter is $true, Exchange adds errors to the Application event log. The preferred way to disable IRM logging is to set the IrmLogEnabled parameter to $false.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCallsAllowed

> Applicable: Exchange Server 2010

The MaxCallsAllowed parameter specifies the maximum number of concurrent voice calls that the Unified Messaging server allows.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SIPAccessService

> Applicable: Exchange Server 2010

The SIPAccessService parameter specifies the FQDN and TCP port of the nearest Lync Server Edge pool or Skype for Business Server Edge pool location for inbound and outbound calls from remote Lync or Skype for Business users located outside of the network.

We recommend that you always use this parameter in Lync Server or Skype for Business Server deployments that span multiple geographic regions; otherwise, the Unified Messaging server might select a pool for Real-Time Transport Protocol (RTP) media traffic that isn't the closest geographically to the remote user.

You configure this parameter for each Unified Messaging server so the value identifies the closest Lync Server Edge pool or Skype for Business Server Edge pool to the Exchange server.

```yaml
Type: ProtocolConnectionSettings
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTcpListeningPort

> Applicable: Exchange Server 2010

The SipTcpListeningPort parameter specifies the TCP port used by the Unified Messaging server to receive incoming calls. This TCP port is used by Unified Messaging servers added to a UM dial plan that isn't configured to use SIP Secured or Secured mode. The default is port 5060.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTlsListeningPort

> Applicable: Exchange Server 2010

The SipTlsListeningPort parameter specifies the Transport Layer Security (TLS) port used by the Unified Messaging server to receive incoming calls. This TLS port is used by Unified Messaging servers that are added to a UM dial plan configured to use SIP Secured or Secured mode. The default is port 5061.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status

> Applicable: Exchange Server 2010

The Status parameter specifies the Unified Messaging server status. The available options are Enabled, Disabled, and NoNewCalls.

```yaml
Type: ServerStatus
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMStartupMode

> Applicable: Exchange Server 2010

The UMStartupMode parameter specifies the startup mode for the Microsoft Exchange Unified Messaging service on an Exchange server. Valid values are:

- TCP
- TLS
- Dual: Use this value to add the Unified Messaging server to UM dial plans with different security settings. The Unified Messaging server can listen on ports 5060 and 5061 at the same time.

If you change the startup mode, you need to restart the Microsoft Exchange Unified Messaging service.

```yaml
Type: UMStartupMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
