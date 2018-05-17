---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Invoke-CsComputerFailOver
schema: 2.0.0
---

# Invoke-CsComputerFailOver

## SYNOPSIS
Use the Invoke-CsComputerFailOver to force a computer in a Skype for Business Server pool to failover to other servers within the pool.
To successfully run this cmdlet you need to run it using an account that has administrator privileges on each server in the source and target pools.

## SYNTAX

```
Invoke-CsComputerFailOver [[-ComputerName] <String>] [-Confirm] [-Force] [-NoStop] [-Report <String>]
 [-WaitTime <TimeSpan>] [-WhatIf] [-DrainingTimeout <TimeSpan>] [-SkipFabricHealthCheck] [<CommonParameters>]
```

## DESCRIPTION
The Invoke-CsComputerFailOver cmdlet migrates the users and data, and drains the existing conferences and sessions before the Skype for Business services are stopped and disabled to prevent accidental restart when computer is rebooted.

The Invoke-CsComputerFailOver cmdlet functionality is not available in the Skype for Business Server Control Panel.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

Invoke-CsComputerFailOver -ComputerName "atl-mcs-001.litwareinc.com" -Report "C:\Logs\S1_FailOverLog.html" -WaitTime 1:30:00
```

This example directs that the users assigned to server "atl-mcs-001.litwareinc.com" will be moved to other servers in the pool.
The log output path is specified and the cmdlet will wait 1 hour 30 minutes before timing out.


## PARAMETERS

### -ComputerName
Specifies the computer name to fail over.
The computer should be referenced by using its fully qualified domain name (FQDN).
For example, `-ComputerName "atl-mcs-001.litwareinc.com".`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
If the Force parameter is specified, the server is failed over without verifying the pool's capacity to absorb the failed over server's workload.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoStop
If specified, Skype for Business Server services will not be stopped as part of the failover.
This maintains the failed over server's state for additional scripting or troubleshooting.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Specifies the file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\S1_FailOverLog.html".`
If this file already exists, it will be overwritten.
By default, reports are written to the "AppData\Local\Temp" folder in your user profile.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaitTime
Specifies the amount of time in TimeSpan format that the cmdlet will wait for confirmation that users and data have been migrated, and all conferences and sessions have been drained.
If the wait time is exceeded, the cmdlet fails and no action is taken on the specified server.
The default is one hour.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DrainingTimeout
Draining timeout in minutes to gracefully drain MCUs.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipFabricHealthCheck
{{Fill SkipFabricHealthCheck Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Invoke-CsComputerFailOver cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Invoke-CsComputerFailBack](Invoke-CsComputerFailBack.md)
