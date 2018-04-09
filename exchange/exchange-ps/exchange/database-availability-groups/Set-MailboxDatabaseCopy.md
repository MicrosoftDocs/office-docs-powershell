---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-MailboxDatabaseCopy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-MailboxDatabaseCopy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-MailboxDatabaseCopy cmdlet to configure the properties of a database copy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Set-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-ActivationPreference <UInt32>] [-Confirm]
 [-DomainController <Fqdn>] [-ReplayLagTime <EnhancedTimeSpan>] [-TruncationLagTime <EnhancedTimeSpan>]
 [-WhatIf] [<CommonParameters>]
```

### Set1
```
Set-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-ActivationPreference <UInt32>] [-Confirm]
 [-DatabaseCopyAutoActivationPolicy <Unrestricted | IntrasiteOnly | Blocked>] [-DomainController <Fqdn>]
 [-ReplayLagTime <EnhancedTimeSpan>] [-TruncationLagTime <EnhancedTimeSpan>] [-WhatIf]
 [-ReplayLagMaxDelay <EnhancedTimeSpan>] [<CommonParameters>]
```

### Set2
```
Set-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-ClearHostServer] [-Confirm]
 [-DatabaseCopyAutoActivationPolicy <Unrestricted | IntrasiteOnly | Blocked>] [-DomainController <Fqdn>]
 [-ReplayLagMaxDelay <EnhancedTimeSpan>] [-ReplayLagTime <EnhancedTimeSpan>]
 [-TruncationLagTime <EnhancedTimeSpan>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
With this cmdlet, you can configure the replay lag time, truncation lag time, and activation preference value for a mailbox database copy.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxDatabaseCopy -Identity DB2\MBX1 -ReplayLagTime 3.0:0:0
```

This example configures the replay lag time with a value of 3 days for a copy of the database DB2 hosted on the Mailbox server MBX1.

### -------------------------- Example 2 --------------------------
```
Set-MailboxDatabaseCopy -Identity DB1\MBX2 -ActivationPreference 3
```

This example configures an activation preference of 3 for the copy of the database DB1 hosted on the Mailbox server MBX2.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the database whose copy is being modified.

```yaml
Type: DatabaseCopyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivationPreference
The ActivationPreference parameter value is used as part of Active Manager's best copy selection process and to redistribute active mailbox databases throughout the database availability group (DAG) when using the RedistributeActiveDatabases.ps1 script. The value for the ActivationPreference parameter is a number equal to or greater than 1, where 1 is at the top of the preference order. The position number can't be larger than the number of database copies of the mailbox database.

```yaml
Type: UInt32
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayLagTime
The ReplayLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before replaying log files that have been copied to the passive database copy. Setting this parameter to a value greater than 0 creates a lagged database copy.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log replay activity.

For example, to specify a 14-day replay lag period, enter 14.00:00:00. The default value is 00.00:00:00, which specifies that there's no replay lag.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TruncationLagTime
The TruncationLagTime parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before truncating log files that have replayed into the passive copy of the database. The time period begins after the log has been successfully replayed into the copy of the database.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 00.00:00:00, which specifies that there's no truncation lag. The maximum value is 14.00:00:00 (14 days).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCopyAutoActivationPolicy
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unrestricted | IntrasiteOnly | Blocked
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearHostServer
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayLagMaxDelay
The ReplayLagMaxDelay parameter specifies the maximum delay for lagged database copy play down (also known as deferred lagged copy play down). If the disk read IO latency is greater than 25 ms, lagged copy play down is delayed up to the value of this parameter.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

The default value is 24:00:00 (24 hours). To disable deferred lagged copy play down, specify the value ([TimeSpan]::Zero).

Note that when the disk is running out of space, the value of this parameter is ignored, and lagged copy play down occurs without delay.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/839f8781-2eb1-47bd-85ff-a31c8773998a.aspx)
