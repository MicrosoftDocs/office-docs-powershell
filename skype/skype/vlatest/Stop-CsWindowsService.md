---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Stop-CsWindowsService

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Stop-CsWindowsService enables you to stop a Microsoft Lync Server 2010 service.

**Below Content Applies To:** Lync Server 2013

Stop-CsWindowsService enables you to stop a Lync Server service.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Stop-CsWindowsService enables you to stop a Skype for Business Server 2015 service.
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
**Below Content Applies To:** Lync Server 2010

Many Lync Server 2010 components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If you need to stop a Lync Server service, you can do so by using the Stop-CsWindowsService cmdlet.

Keep in mind that Stop-CsWindowsService can only stop Lync Server services; an error will occur if you attempt to stop a non-Lync Server service (such as the print spooler) using this cmdlet.

Functionally, Stop-CsWindowsService is very similar to the generic Windows PowerShell cmdlet Stop-Service; if you want, you could use Stop-Service to stop a Lync Server service.
However, Stop-CsWindowsService includes a ComputerName parameter that makes it easy to stop a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
The Stop-Service cmdlet does not have a comparable parameter.
In addition, Stop-CsWindowsService has a Report parameter that enables you to keep a log of any errors that might occur when calling Stop-CsWindowsService.

Stop-CsWindowsService does exactly what the name implies: it stops any service you ask it to stop.
This includes services that have dependent services (services that can only run if the service you are attempting to stop is running).
By default, if you try to stop a service that has dependent services, Stop-CsWindowsService will not only stop the service in question, but will stop all those dependent services as well.
Because that could result in unexpected consequences, you can include the Graceful parameter when calling Stop-CsWindowsService.
When you include the Graceful parameter, Stop-CsWindowsService will the service from accepting any new requests.
All existing service requests will remain as is; however, new requests will be rejected.
As existing requests finish, those requests will not be replaced.
Eventually, all the existing requests will be filled and the service will then shut down.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Stop-CsWindowsService cmdlet locally: RTCUniversaServerAdmins.
In addition, you must also have local administrator rights on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Stop-CsWindowsService"}

**Below Content Applies To:** Lync Server 2013

Many Lync Server components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If you need to stop a Lync Server service, you can do so by using the Stop-CsWindowsService cmdlet.

Keep in mind that Stop-CsWindowsService can only stop Lync Server services; an error will occur if you attempt to stop a non-Lync Server service (such as the print spooler) using this cmdlet.

Functionally, Stop-CsWindowsService is very similar to the generic Windows PowerShell cmdlet Stop-Service; if you want, you could use Stop-Service to stop a Lync Server service.
However, Stop-CsWindowsService includes a ComputerName parameter that makes it easy to stop a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
The Stop-Service cmdlet does not have a comparable parameter.
In addition, Stop-CsWindowsService has a Report parameter that enables you to keep a log of any errors that might occur when calling Stop-CsWindowsService.

Stop-CsWindowsService does exactly what the name implies: it stops any service you ask it to stop.
This includes services that have dependent services (services that can only run if the service you are attempting to stop is running).
By default, if you try to stop a service that has dependent services, Stop-CsWindowsService will not only stop the service in question, but will stop all those dependent services as well.
Because that could result in unexpected consequences, you can include the Graceful parameter when calling Stop-CsWindowsService.
When you include the Graceful parameter, Stop-CsWindowsService will prevent the service from accepting any new requests.
All existing service requests will remain as is; however, new requests will be rejected.
As existing requests finish, those requests will not be replaced.
Eventually, all the existing requests will be filled and the service will then shut down.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Stop-CsWindowsService cmdlet locally: RTCUniversalServerAdmins.
In addition, you must also have local administrator rights on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Stop-CsWindowsService"}

**Below Content Applies To:** Skype for Business Server 2015

Many Skype for Business Server 2015 components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If you need to stop a Skype for Business Server 2015 service, you can do so by using the Stop-CsWindowsService cmdlet.

Keep in mind that the Stop-CsWindowsService cmdlet can only stop Skype for Business Server 2015 services; an error will occur if you attempt to stop a non-Skype for Business Server 2015 service (such as the print spooler) using this cmdlet.

Functionally, the Stop-CsWindowsService cmdlet is very similar to the generic Windows PowerShell Stop-Service cmdlet; if you wanted to, you could use the Stop-Service cmdlet to stop a Skype for Business Server 2015 service.
However, the Stop-CsWindowsService cmdlet includes a ComputerName parameter that makes it easy to stop a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
The Stop-Service cmdlet does not have a comparable parameter.
In addition, the Stop-CsWindowsService cmdlet has a Report parameter that enables you to keep a log of any errors that might occur when calling that cmdlet.

The Stop-CsWindowsService cmdlet does exactly what the name implies: it stops any service you ask it to stop.
This includes services that have dependent services (services that can only run if the service you are attempting to stop is running).
By default, if you try to stop a service that has dependent services, the Stop-CsWindowsService cmdlet will not only stop the service in question, but will stop all those dependent services as well.
Because that could result in unexpected consequences, you can include the Graceful parameter when calling the Stop-CsWindowsService cmdlet.
When you include the Graceful parameter, the Stop-CsWindowsService cmdlet will prevent the service from accepting any new requests.
All existing service requests will remain as is; however, new requests will be rejected.
As existing requests finish, those requests will not be replaced.
Eventually, all the existing requests will be filled and the service will then shut down.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Stop-CsWindowsService -Name "RTCRGS"
```

The command shown in Example 1 stops the Response Group application service on the local computer.
The Response Group application service is identified by including the Name parameter and the name of that service: RTCRGS.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 stops the Response Group application service on the local computer.
The Response Group application service is identified by including the Name parameter and the name of that service: RTCRGS.

Stop-CsWindowsService -Name "RTCRGS"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 stops the Response Group application service on the local computer.
The Response Group application service is identified by including the Name parameter and the name of that service: RTCRGS.

Stop-CsWindowsService -Name "RTCRGS"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Stop-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com
```

Example 2 also stops the Response Group application service; in this example, however, that service is located on the remote computer atl-cs-001.litwareinc.com.
To stop a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also stops the Response Group application service; in this example, however, that service is located on the remote computer atl-cs-001.litwareinc.com.
To stop a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

Stop-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also stops the Response Group application service; in this example, however, that service is located on the remote computer atl-cs-001.litwareinc.com.
To stop a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

Stop-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Call Park*"} | Stop-CsWindowsService
```

Example 3 demonstrates how you can stop a service even if you do not know the service name (in this example, RTCCPS).
To do this, the command first calls Get-CsWindowsService without any parameters in order to return a collection of all the Lync Server services on the local computer.
This complete collection is then piped to the Where-Object cmdlet, which selects only those services where the DisplayName property includes the string value "Call Park".
The filtered collection is then piped to Stop-CsWindowsService, which stops the Call Park application service.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 demonstrates how you can stop a service even if you do not know the service name (in this example, RTCCPS).
To do this, the command first calls Get-CsWindowsService without any parameters in order to return a collection of all the Lync Server services on the local computer.
This complete collection is then piped to the Where-Object cmdlet, which selects only those services where the DisplayName property includes the string value "Call Park".
The filtered collection is then piped to Stop-CsWindowsService, which stops the Call Park application service.

Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Call Park*"} | Stop-CsWindowsService

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 demonstrates how you can stop a service even if you do not know the service name (in this example, RTCCPS).
To do this, the command first calls the Get-CsWindowsService cmdlet without any parameters in order to return a collection of all the Skype for Business Server 2015 services on the local computer.
This complete collection is then piped to the Where-Object cmdlet, which selects only those services where the DisplayName property includes the string value "Call Park".
The filtered collection is then piped to the Stop-CsWindowsService cmdlet, which stops the Call Park application service.

Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Call Park*"} | Stop-CsWindowsService

## PARAMETERS

### -Name
**Below Content Applies To:** Lync Server 2010

Name of the Lync Server service you want to stop.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
You can use the Get-CsWindowsService cmdlet to retrieve service names.

Keep in mind that Stop-CsWindowsService can only stop Lync Server services; you cannot use this cmdlet to stop other Windows services.
For those services, you might be able to use the Windows PowerShell  Stop-Service cmdlet.



**Below Content Applies To:** Lync Server 2013

Name of the Lync Server service you want to stop.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
You can use the Get-CsWindowsService cmdlet to retrieve service names.

Keep in mind that Stop-CsWindowsService can only stop Lync Server services; you cannot use this cmdlet to stop other Windows services.
For those services, you might be able to use the Windows PowerShell Stop-Service cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Name of the Skype for Business Server 2015 service you want to stop.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
You can use the Get-CsWindowsService cmdlet to retrieve service names.

Keep in mind that the Stop-CsWindowsService cmdlet can only stop Skype for Business Server 2015 services; you cannot use this cmdlet to stop other Windows services.
For those services, you might be able to use the Windows PowerShell Stop-Service cmdlet.



```yaml
Type: String
Parameter Sets: Name
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerName
**Below Content Applies To:** Lync Server 2010

Name of the remote computer running the service to be stopped; if this parameter is not included, then Stop-CsWindowsService will stop the specified service on the local computer.
The remote computer should be referenced using its  FQDN; for example, atl-mcs-001.litwareinc.com.



**Below Content Applies To:** Lync Server 2013

Name of the remote computer running the service to be stopped; if this parameter is not included, then Stop-CsWindowsService will stop the specified service on the local computer.
The remote computer should be referenced using its FQDN; for example, atl-mcs-001.litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Name of the remote computer running the service to be stopped; if this parameter is not included, then the Stop-CsWindowsService cmdlet will stop the specified service on the local computer.
The remote computer should be referenced using its FQDN; for example, atl-mcs-001.litwareinc.com.



```yaml
Type: String
Parameter Sets: Name
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to stop a service using an object reference rather than a service name.
For example, if you use Get-CsWindowsService to return information about a service, and if you store the returned object in a variable named $x, you can then stop the service using this command:

$x = Get-CsWindowsService -Name "RTCCPS"

Stop-CsWindowsService -InputObject $x.Name



**Below Content Applies To:** Skype for Business Server 2015

Enables you to stop a service using an object reference rather than a service name.
For example, if you use the Get-CsWindowsService cmdlet to return information about a service, and if you store the returned object in a variable named $x, you can then stop the service using this command:

$x = Get-CsWindowsService -Name "RTCCPS"

Stop-CsWindowsService -InputObject $x.Name



```yaml
Type: NTService
Parameter Sets: InputObject
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeaveClsAgentRunning
**Below Content Applies To:** Lync Server 2013

When specified, stops all the Lync Server services except for the centralized logging agent service.



**Below Content Applies To:** Skype for Business Server 2015

When specified, stops all the Skype for Business Server 2015 services except for the centralized logging agent service.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Stop-CsWindowsService accepts pipelined instances of the Windows service object.

###  
Microsoft.Rtc.Management.Deployment.Core.NTService object.
The Stop-CsWindowsService cmdlet accepts pipelined instances of the Windows service object.

## OUTPUTS

###  
None.
Instead, Stop-CsWindowsService stops instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

###  
None.
Instead, the Stop-CsWindowsService cmdlet stops instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/60318b9f-2291-4b99-a271-d206e4074b70(OCS.14).aspx)

[Get-CsWindowsService]()

[Start-CsWindowsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/60318b9f-2291-4b99-a271-d206e4074b70(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/60318b9f-2291-4b99-a271-d206e4074b70(OCS.16).aspx)

