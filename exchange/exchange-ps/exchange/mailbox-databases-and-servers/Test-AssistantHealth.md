---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Test-AssistantHealth
schema: 2.0.0
---

# Test-AssistantHealth

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-AssistantHealth cmdlet to verify that the Microsoft Exchange Mailbox Assistants service (MSExchangeMailboxAssistants) is healthy, to recover from health issues, and to report the status of the diagnosis or recovery action.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-AssistantHealth [[-ServerName] <ServerIdParameter>] [-Confirm] [-IncludeCrashDump]
 [-MaxProcessingTimeInMinutes <UInt32>] [-MonitoringContext] [-ResolveProblems] [-WhatIf]
 [-WatermarkBehindWarningThreholdInMinutes <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
The Mailbox Assistants service runs on all servers that have the Mailbox server role installed. This service is responsible for scheduling and dispatching several assistants that ensure mailboxes function correctly.

By default, when you run this cmdlet, it returns the RunspaceId, events, and performance counters in a table format.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-AssistantHealth -ServerName MBXSVR01 -IncludeCrashDump -ResolveProblems | Format-List
```

This example detects and repairs the mailbox assistant's health on MBXSVR01, includes the error information, and formats the output to a list.

### -------------------------- Example 2 --------------------------
```
Test-AssistantHealth -MaxProcessingTimeInMinutes 30 | Format-List
```

This example detects the mailbox assistant's health on the local Mailbox server. The MaxProcessingTimeInMinutes parameter specifies 30 minutes as the maximum amount of time the service is allowed to process an event without responding, and formats the output to a list.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeCrashDump
The IncludeCrashDump parameter specifies that the command should take an error report prior to taking any recovery actions. This parameter should only be used if running from a local computer. If you use the parameter while connected remotely, the command fails.

The default value for this parameter is $false.

You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxProcessingTimeInMinutes
The MaxProcessingTimeInMinutes parameter specifies the maximum amount of time the MSExchangeMailboxAssistants service is allowed to process an event without responding. You can specify a value from 1 through 3600 minutes. The default value is 15 minutes.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
The MonitoringContext switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResolveProblems
This ResolveProblems parameter specifies that if the command detects an issue, it attempts to fix it. This command attempts to fix the following issues:

- Starts the Mailbox Assistants service if it isn't running.

- Restarts the Mailbox Assistants service if it detects that the service is hung or deadlocked for more than 15 minutes.

You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerName
The ServerName parameter specifies the identity of the Mailbox server on which the mailbox assistant that's being tested resides.

If this parameter isn't specified, the command runs on the local server. If the local server isn't a Mailbox server, the command fails.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WatermarkBehindWarningThreholdInMinutes
The WatermarkBehindWarningThreholdInMinutes parameter specifies the threshold for watermark age. Event watermarks indicate the last time that events were successfully processed by an assistant. An event watermark that hasn't been updated in a while may indicate a problem. For each Mailbox Assistant, the Test-AssistantHealth cmdlet compares the current time with the time stamp of the last event watermark to determine the watermark age. If that age exceeds the value set by the WatermarkBehindWarningThreholdInMinutes parameter, a warning is generated.

You can specify a value from 1 through 10080 minutes. The default value is 60 minutes.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b220cb2b-2206-42c7-8699-1f93300c45a7.aspx)
