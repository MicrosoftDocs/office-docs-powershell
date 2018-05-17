---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Invoke-CsComputerFailBack
schema: 2.0.0
---

# Invoke-CsComputerFailBack

## SYNOPSIS
Use the Invoke-CsComputerFailBack to flag a server as available for load balancing in a Skype for Business Server pool.
To successfully run this cmdlet you need to run it using an account that has administrator privileges on each server in the source and target pools.

## SYNTAX

```
Invoke-CsComputerFailBack [[-ComputerName] <String>] [-Confirm] [-NoStart] [-Report <String>]
 [-WaitTime <TimeSpan>] [-WhatIf] [-SkipFabricHealthCheck] [<CommonParameters>]
```

## DESCRIPTION
The Invoke-CsComputerFailBack cmdlet functionality is not available in the Skype for Business Server Control Panel.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

Invoke-CsComputerFailBack -ComputerName "atl-mcs-001.litwareinc.com" -NoStart
```

This example marks the computer "atl-mcs-001.litwareinc.com" as available to the pool and enables the services, but does not start them.


## PARAMETERS

### -ComputerName
Specifies the computer name to fail back.
The computer should be referenced by using its fully qualified domain name (FQDN).
For example, `-ComputerName "atl-mcs-001.litwareinc.com".`
The computer name used during failback must be the same name used during failover.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoStart
If the NoStart parameter is specified, the Skype for Business server is added back into the pool and marked as available, but all the Skype for Business services are not started.
Only the Skype for Business service (rtcsrv) is verified by the cmdlet.
This allows for follow-up scripting to start the remaining services and configure the server for your environment before users and data are assigned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Specifies the file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\Server1FailbackLog.html".`
If this file already exists, it will be overwritten.
By default, reports are written to the AppData\Local\Temp folder in your user profile.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaitTime
Specifies the amount of time in TimeSpan format that the cmdlet will wait for a confirmation of failback success.
If the time is exceeded, the cmdlet will fail and Skype for Business services will not be started or enabled.
The default is one hour.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The Invoke-CsComputerFailBack cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Invoke-CsComputerFailOver](Invoke-CsComputerFailOver.md)

