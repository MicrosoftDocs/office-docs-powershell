---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Stop-CsWindowsService
schema: 2.0.0
---

# Stop-CsWindowsService

## SYNOPSIS
`Stop-CsWindowsService` enables you to stop a Skype for Business Server service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Name
```
Stop-CsWindowsService [[-Name] <String>] [-ComputerName <String>] [-Graceful] [-NoWait] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [-LeaveClsAgentRunning] [-LeaveWebServerRunning] [<CommonParameters>]
```

### InputObject
```
Stop-CsWindowsService [-Graceful] [-InputObject <NTService>] [-NoWait] [-Force] [-Report <String>] [-WhatIf]
 [-Confirm] [-LeaveClsAgentRunning] [-LeaveWebServerRunning] [<CommonParameters>]
```

## DESCRIPTION
Many Skype for Business Server components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If you need to stop a Skype for Business Server service, you can do so by using the `Stop-CsWindowsService` cmdlet.

Keep in mind that the `Stop-CsWindowsService` cmdlet can only stop Skype for Business Server services; an error will occur if you attempt to stop a non-Skype for Business Server service (such as the print spooler) using this cmdlet.

Functionally, the `Stop-CsWindowsService` cmdlet is very similar to the generic Windows PowerShell Stop-Service cmdlet; if you wanted to, you could use the `Stop-Service` cmdlet to stop a Skype for Business Server service.
However, the `Stop-CsWindowsService` cmdlet includes a ComputerName parameter that makes it easy to stop a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
The `Stop-Service` cmdlet does not have a comparable parameter.
In addition, the `Stop-CsWindowsService` cmdlet has a Report parameter that enables you to keep a log of any errors that might occur when calling that cmdlet.

The `Stop-CsWindowsService` cmdlet does exactly what the name implies: it stops any service you ask it to stop.
This includes services that have dependent services (services that can only run if the service you are attempting to stop is running).
By default, if you try to stop a service that has dependent services, the `Stop-CsWindowsService` cmdlet will not only stop the service in question, but will stop all those dependent services as well.
Because that could result in unexpected consequences, you can include the Graceful parameter when calling the `Stop-CsWindowsService` cmdlet.
When you include the Graceful parameter, the `Stop-CsWindowsService` cmdlet will prevent the service from accepting any new requests.
All existing service requests will remain as is; however, new requests will be rejected.
As existing requests finish, those requests will not be replaced.
Eventually, all the existing requests will be filled and the service will then shut down.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Stop-CsWindowsService -Name "RTCRGS"
```

The command shown in Example 1 stops the Response Group application service on the local computer.
The Response Group application service is identified by including the Name parameter and the name of that service: RTCRGS.


### -------------------------- Example 2 ------------------------
```
Stop-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com
```

Example 2 also stops the Response Group application service; in this example, however, that service is located on the remote computer atl-cs-001.litwareinc.com.
To stop a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.


### -------------------------- Example 3 ------------------------
```
Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Call Park*"} | Stop-CsWindowsService
```

Example 3 demonstrates how you can stop a service even if you do not know the service name (in this example, RTCCPS).
To do this, the command first calls the `Get-CsWindowsService` cmdlet without any parameters in order to return a collection of all the Skype for Business Server services on the local computer.
This complete collection is then piped to the `Where-Object` cmdlet, which selects only those services where the DisplayName property includes the string value "Call Park".
The filtered collection is then piped to the `Stop-CsWindowsService` cmdlet, which stops the Call Park application service.


## PARAMETERS

### -Name
Name of the Skype for Business Server service you want to stop.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
You can use the `Get-CsWindowsService` cmdlet to retrieve service names.

Keep in mind that the `Stop-CsWindowsService` cmdlet can only stop Skype for Business Server services; you cannot use this cmdlet to stop other Windows services.
For those services, you might be able to use the Windows PowerShell `Stop-Service` cmdlet.


```yaml
Type: String
Parameter Sets: Name
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerName
Name of the remote computer running the service to be stopped; if this parameter is not included, then the `Stop-CsWindowsService` cmdlet will stop the specified service on the local computer.
The remote computer should be referenced using its FQDN; for example, atl-mcs-001.litwareinc.com.


```yaml
Type: String
Parameter Sets: Name
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Graceful
Instead of immediately shutting down a service, waits until all existing service requests have been filled.
(However, all new service requests will be rejected.) The service will not completely shut down until all the existing requests have been filled.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
Enables you to stop a service using an object reference rather than a service name.
For example, if you use the `Get-CsWindowsService` cmdlet to return information about a service and if you store the returned object in a variable named $x, you can then stop the service using this command:

`$x = Get-CsWindowsService -Name "RTCCPS"`

`Stop-CsWindowsService -InputObject $x.Name`


```yaml
Type: NTService
Parameter Sets: InputObject
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NoWait
When present, causes the command to run and then immediately return control to the Windows PowerShell prompt.
If not present, control will not be returned until the command has completed and a status report has been written to the screen.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Path to an HTML file where error information can be written.
If this parameter is included, any errors that occur during the running of this cmdlet will be logged to the specified file (for example, C:\Logs\Service_report.html).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeaveClsAgentRunning
When specified, stops all the Skype for Business Server services except for the centralized logging agent service.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeaveWebServerRunning
When present, shuts down all services except the Web Server service on the specified computer.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.Deployment.Core.NTService object.
The `Stop-CsWindowsService` cmdlet accepts pipelined instances of the Windows service object.

## OUTPUTS

###  
None.
Instead, the `Stop-CsWindowsService` cmdlet stops instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

## NOTES

## RELATED LINKS

[Get-CsWindowsService](Get-CsWindowsService.md)

[Start-CsWindowsService](Start-CsWindowsService.md)

