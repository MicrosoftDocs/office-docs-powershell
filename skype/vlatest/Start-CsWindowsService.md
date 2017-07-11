---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Start-CsWindowsService

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Start-CsWindowsService enables you to start a Microsoft Lync Server 2010 service.

**Below Content Applies To:** Lync Server 2013

Start-CsWindowsService enables you to start a Lync Server service.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

The Start-CsWindowsService cmdlet enables you to start a Skype for Business Server 2015 service.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Name
```
Start-CsWindowsService [[-Name] <String>] [-ComputerName <String>] [-NoWait] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### InputObject
```
Start-CsWindowsService [-InputObject <NTService>] [-NoWait] [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Many Lync Server 2010 components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If one of your Lync Server services is currently stopped, you can restart that service by using the Start-CsWindowsService cmdlet.

Note, however, that Start-CsWindowsService can only start Lync Server services; an error will occur if you attempt to start a non-Lync Server service (such as the print spooler) using this cmdlet.

Functionally, Start-CsWindowsService is very similar to the generic Windows PowerShell cmdlet Start-Service; if you want, you could also use Start-Service to start a Lync Server service.
On the other hand, Start-CsWindowsService includes a ComputerName parameter that makes it easy to start a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
Stop-Service does not have a comparable parameter.
In addition, the cmdlet's Report parameter enables you to keep a log of any errors that might occur when calling Start-CsWindowsService.

Like other Windows services, some Lync Server services have a dependency on another service; for example, the Lync Server Conferencing Attendant service cannot run unless the Application service is already running.
If you try to start a service that depends on another service, Start-CsWindowsService will start both of those services.
That means that, if you try to start the Conferencing Attendant service, the cmdlet will first start the Application service and then start the Conferencing Attendant service.
However, Start-CsWindowsService will not automatically start any dependent services of a service: if you start the Application service, the command will not automatically start the Conferencing Attendant service as well.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Start-CsWindows cmdlet locally: RTCUniversalServerAdmins.
In addition, you must also have local administrator rights on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Start-CsWindowsService"}

**Below Content Applies To:** Lync Server 2013

Many Lync Server components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If one of your Lync Server services is currently stopped, you can restart that service by using the Start-CsWindowsService cmdlet.

Note, however, that Start-CsWindowsService can only start Lync Server services; an error will occur if you attempt to start a non-Lync Server service (such as the print spooler) using this cmdlet.

Functionally, Start-CsWindowsService is very similar to the generic Windows PowerShell cmdlet Start-Service; if you want, you could also use Start-Service to start a Lync Server service.
On the other hand, Start-CsWindowsService includes a ComputerName parameter that makes it easy to start a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
Stop-Service does not have a comparable parameter.
In addition, the cmdlet's Report parameter enables you to keep a log of any errors that might occur when calling Start-CsWindowsService.

Like other Windows services, some Lync Server services have a dependency on another service; for example, the Lync Server Conferencing Attendant service cannot run unless the Application service is already running.
If you try to start a service that depends on another service, Start-CsWindowsService will start both of those services.
That means that, if you try to start the Conferencing Attendant service, the cmdlet will first start the Application service and then start the Conferencing Attendant service.
However, Start-CsWindowsService will not automatically start any dependent services of a service: if you start the Application service, the command will not automatically start the Conferencing Attendant service as well.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Start-CsWindows cmdlet locally: RTCUniversalServerAdmins.
In addition, you must also have local administrator rights on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Start-CsWindowsService"}

**Below Content Applies To:** Skype for Business Server 2015

Many Skype for Business Server 2015 components run as standard Windows services; for example, the Conferencing Attendant application is actually a service named RTCCAA.
If one of your Skype for Business Server 2015 services is currently stopped, you can restart that service by using the Start-CsWindowsService cmdlet.

Note, however, that the Start-CsWindowsService cmdlet can only start Skype for Business Server 2015 services; an error will occur if you attempt to start a non-Skype for Business Server 2015 service (such as the print spooler) using this cmdlet.

Functionally, the Start-CsWindowsService cmdlet is very similar to the generic Windows PowerShell Start-Service cmdlet; if you wanted to, you could use the Start-Service cmdlet to start a Skype for Business Server 2015 service.
On the other hand, the Start-CsWindowsService cmdlet includes a ComputerName parameter that makes it easy to start a service on a remote computer: you simply include the ComputerName parameter followed by the fully qualified domain name (FQDN) of the remote computer.
The Start-Service cmdlet does not have a comparable parameter.
In addition, the cmdlet's Report parameter enables you to keep a log of any errors that might occur when calling Start-CsWindowsService.

Like other Windows services, some Skype for Business Server 2015 services have a dependency on another service; for example, the Skype for Business Server 2015 Conferencing Attendant service cannot run unless the Application service is already running.
If you try to start a service that depends on another service, the Start-CsWindowsService cmdlet will start both of those services.
That means that, if you try to start the Conferencing Attendant service, the cmdlet will first start the Application service and then start the Conferencing Attendant service.
However, the Start-CsWindowsService cmdlet will not automatically start any dependent services of a service: if you start the Application service, the command will not automatically start the Conferencing Attendant service as well.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Start-CsWindowsService
```

The command shown in Example 1 starts all the Lync Server services on the local computer.
This is done by calling Start-CsWindowsService without any parameters.
Note that you will not receive an error if you try to start a service that has already been started.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 starts all the Lync Server services on the local computer.
This is done by calling Start-CsWindowsService without any parameters.
Note that you will not receive an error if you try to start a service that has already been started.

Start-CsWindowsService

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 starts all the Skype for Business Server 2015 services on the local computer.
This is done by calling the Start-CsWindowsService cmdlet without any parameters.
Note that you will not receive an error if you try to start a service that has already been started.

Start-CsWindowsService

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Start-CsWindowsService -Name "RTCRGS"
```

The preceding command starts the Response Group application service on the local computer.
To do this, the command uses the Name parameter followed by the service name: RTCRGS.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 starts the Response Group application service on the local computer.
To do this, the command uses the Name parameter followed by the service name: RTCRGS.

Start-CsWindowsService -Name "RTCRGS"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 starts the Response Group application service on the local computer.
To do this, the command uses the Name parameter followed by the service name: RTCRGS.

Start-CsWindowsService -Name "RTCRGS"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Start-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com
```

The command shown in Example 3 also starts the Response Group application service; in this case, however, the service is started on the remote computer atl-cs-001.litwareinc.com.
To start a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 also starts the Response Group application service; in this case, however, the service is started on the remote computer atl-cs-001.litwareinc.com.
To start a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

Start-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 also starts the Response Group application service; in this case, however, the service is started on the remote computer atl-cs-001.litwareinc.com.
To start a service on a remote computer, include the ComputerName parameter followed by the FQDN of the remote computer.

Start-CsWindowsService -Name "RTCRGS" -ComputerName atl-cs-001.litwareinc.com

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Where-Object {$_.Status -ne "Running"} | Start-CsWindowsService
```

In Example 4, the command searches the local computer for all the Lync Server services that are not currently running, then starts each of these inactive services.
To do this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services.
This collection is then piped to the Where-Object cmdlet, which selects only those services where the Status property is not equal to Running.
This filtered collection is then piped to Start-CsWindowsService, which starts each service in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the command searches the local computer for all the Lync Server services that are not currently running, then starts each of these inactive services.
To do this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services.
This collection is then piped to the Where-Object cmdlet, which selects only those services where the Status property is not equal to Running.
This filtered collection is then piped to Start-CsWindowsService, which starts each service in the collection.

Get-CsWindowsService | Where-Object {$_.Status -ne "Running"} | Start-CsWindowsService

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the command searches the local computer for all the Skype for Business Server 2015 services that are not currently running, then starts each of these inactive services.
To do this, the command first calls the Get-CsWindowsService cmdlet to return a collection of all the Skype for Business Server 2015 services.
This collection is then piped to the Where-Object cmdlet, which selects only those services where the Status property is not equal to Running.
This filtered collection is then piped to the Start-CsWindowsService cmdlet, which starts each service in the collection.

Get-CsWindowsService | Where-Object {$_.Status -ne "Running"} | Start-CsWindowsService

## PARAMETERS

### -Name
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the Lync Server service you want to start.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
Service names can be retrieved using the Get-CsWindowsService cmdlet.

Keep in mind that Start-CsWindowsService can only start Lync Server services; you cannot use this cmdlet to start other Windows services.
For those services, you might be able to use the Windows PowerShell Start-Service cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Name of the Skype for Business Server 2015 service you want to start.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter, and you cannot use wildcards in the service name.
Service names can be retrieved using the Get-CsWindowsService cmdlet.

Keep in mind that the Start-CsWindowsService cmdlet can only start Skype for Business Server 2015 services; you cannot use this cmdlet to start other Windows services.
For those services, you might be able to use the Windows PowerShell Start-Service cmdlet.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the remote computer hosting the service to be started; if this parameter is not included, then Start-CsWindowsService will start the specified service (or services) on the local computer.
The remote computer should be referenced using its FQDN; for example, atl-cs-001.litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Name of the remote computer hosting the service to be started; if this parameter is not included, then the Start-CsWindowsService cmdlet will start the specified service (or services) on the local computer.
The remote computer should be referenced using its FQDN; for example, atl-cs-001.litwareinc.com.



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

### -InputObject
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to start a service using an object reference rather than a service name.
For example, if you use Get-CsWindowsService to return information about a service, and if you store the returned object in a variable named $x, you can then start the service using this command:

$x = Get-CsWindowsService -Name "RTCCPS"

Start-CsWindowsService -InputObject $x.Name



**Below Content Applies To:** Skype for Business Server 2015

Enables you to start a service using an object reference rather than a service name.
For example, if you use the Get-CsWindowsService cmdlet to return information about a service, and if you store the returned object in a variable named $x, you can then start the service using this command:

$x = Get-CsWindowsService -Name "RTCCPS"

Start-CsWindowsService -InputObject $x.Name



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
Path to an HTML file where error information can be stored.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.Deployment.Core.NTService object.
Start-CsWindowsService accepts pipelined instances of the Windows service object.

###  
Microsoft.Rtc.Management.Deployment.Core.NTService object.
The Start-CsWindowsService cmdlet accepts pipelined instances of the Windows service object.

## OUTPUTS

###  
None.
Instead, Start-CsWindowsService starts instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

###  
None.
Instead, the Start-CsWindowsService cmdlet starts instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7491b91f-d342-4f9a-878b-d20b35294a9c(OCS.14).aspx)

[Get-CsWindowsService]()

[Stop-CsWindowsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/7491b91f-d342-4f9a-878b-d20b35294a9c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7491b91f-d342-4f9a-878b-d20b35294a9c(OCS.16).aspx)

