---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsWindowsService

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Get-CsWindowsService returns detailed information about Microsoft Lync Server 2010 components that run as Windows services.

**Below Content Applies To:** Lync Server 2013

Get-CsWindowsService returns detailed information about Lync Server components that run as Windows services.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Get-CsWindowsService returns detailed information about Skype for Business Server 2015 components that run as Windows services.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsWindowsService [[-Name] <String>] [-ComputerName <String>] [-ExcludeActivityLevel] [-Report <String>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Many Lync Server 2010 components run as standard Windows services; for example, the Lync Server Conferencing Attendant application is actually a service named  RTCCAA.
The Get-CsWindowsService cmdlet enables you to retrieve detailed information about these Lync Server services and only these services.
That's because the cmdlet has been designed to ignore any service that is not part of Lync Server.

The fact that Get-CsWindowsService automatically filters out non-Lync Server services is one advantage the cmdlet offers over the generic Get-Service cmdlet that ships as part of Windows PowerShell.
In addition to that, there is another reason to use Get-CsWindowsService if you need to retrieve information for a Lync Server service: Get-CsWindowsService returns useful data that Get-Service does not return.
For example, when returning information about the Lync Server Conferencing Attendant service, Get-CsWindowsService reports back the number of concurrent calls being handled by the service (the service activity level).
Get-Service does not.

By default Get-CsWindowsService runs against the local computer.
However, by including the ComputerName parameter you can return information about the Lync Server services running on a remote computer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsWindowsService cmdlet locally: RTCUniversalServerAdmins.
In addition, you must also be a member of the Performance Monitor Users group on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsWindowsService"}

**Below Content Applies To:** Lync Server 2013

Many Lync Server components run as standard Windows services; for example, the Lync Server Conferencing Attendant application is actually a service named RTCCAA.
The Get-CsWindowsService cmdlet enables you to retrieve detailed information about these Lync Server services and only these services.
That's because the cmdlet has been designed to ignore any service that is not part of Lync Server.

The fact that Get-CsWindowsService automatically filters out non-Lync Server services is one advantage the cmdlet offers over the generic Get-Service cmdlet that ships as part of Windows PowerShell.
In addition to that, there is another reason to use Get-CsWindowsService if you need to retrieve information for a Lync Server service: Get-CsWindowsService returns useful data that Get-Service does not return.
For example, when returning information about the Lync Server Conferencing Attendant service, Get-CsWindowsService reports back the number of concurrent calls being handled by the service (the service activity level).
Get-Service does not.

By default Get-CsWindowsService runs against the local computer.
However, by including the ComputerName parameter you can return information about the Lync Server services running on a remote computer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsWindowsService cmdlet locally: RTCUniversalServerAdmins.
In addition, you must also be a member of the Performance Monitor Users group on the destination computer in order to run this cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsWindowsService"}

**Below Content Applies To:** Skype for Business Server 2015

Many Skype for Business Server 2015 components run as standard Windows services; for example, the Skype for Business Server 2015 Conferencing Attendant application is actually a service named RTCCAA.
The Get-CsWindowsService cmdlet enables you to retrieve detailed information about these Skype for Business Server 2015 services and only these services.
That's because the cmdlet has been designed to ignore any service that is not part of Skype for Business Server 2015.

The fact that the Get-CsWindowsService cmdlet automatically filters out non-Skype for Business Server 2015 services is one advantage the cmdlet offers over the generic Get-Service cmdlet that ships as part of Windows PowerShell.
In addition to that, there is another reason to use the Get-CsWindowsService cmdlet if you need to retrieve information for a Skype for Business Server 2015 service: the Get-CsWindowsService cmdlet returns useful data that the Get-Service cmdlet does not return.
For example, when returning information about the Skype for Business Server 2015 Conferencing Attendant service, the Get-CsWindowsService cmdlet reports back the number of concurrent calls being handled by the service (the service activity level).
The Get-Service cmdlet does not.

By default the Get-CsWindowsService cmdlet runs against the local computer.
However, by including the ComputerName parameter you can return information about the Skype for Business Server 2015 services running on a remote computer.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService
```

The command shown in Example 1 returns information about all the Lync Server services installed on the local computer.
This is done by calling Get-CsWindowsService without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the Lync Server services installed on the local computer.
This is done by calling Get-CsWindowsService without any parameters.

Get-CsWindowsService

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the Skype for Business Server 2015 services installed on the local computer.
This is done by calling the Get-CsWindowsService cmdlet without any parameters.

Get-CsWindowsService

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Format-List
```

Example 2 also returns information about the Lync Server services on the local computer; in this case, however, the data is displayed in list format.
(Among other things, this enables you to view all the property values for each service.
In the default, tabular view, only a subset of property values is displayed.) To carry out this task, Get-CsWindowsService is first called, then the resulting information is piped to the Format-List cmdlet.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also returns information about the Lync Server services on the local computer; in this case, however, the data is displayed in list format.
(Among other things, this enables you to view all the property values for each service.
In the default, tabular view, only a subset of property values is displayed.) To carry out this task, Get-CsWindowsService is first called, then the resulting information is piped to the Format-List cmdlet.

Get-CsWindowsService | Format-List

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also returns information about the Skype for Business Server 2015 services on the local computer; in this case, however, the data is displayed in list format.
(Among other things, this enables you to view all the property values for each service.
In the default, tabular view, only a subset of property values is displayed.) To carry out this task, the Get-CsWindowsService cmdlet is first called, then the resulting information is piped to the Format-List cmdlet.

Get-CsWindowsService | Format-List

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService -Name "RTCSrv"
```

Example 3 returns information for a single Lync Server service: the service with the name RTCSrv.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information for a single Lync Server service: the service with the name RTCSrv.

Get-CsWindowsService -Name "RTCSrv"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information for a single Skype for Business Server 2015 service: the service with the name RTCSrv.

Get-CsWindowsService -Name "RTCSrv"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService -Name "RTCSrv" | Select-Object -ExpandProperty RoleName
```

In Example 4, detailed information is displayed for all the service roles handled by the RTCSrv service.
To perform this task, Get-CsWindowsService is first used to return information about the RTCSrv service.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all the roles handled by the RTCSrv service.
Note that this command will return an error message if a service does not have a role name.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, detailed information is displayed for all the service roles handled by the RTCSrv service.
To perform this task, Get-CsWindowsService is first used to return information about the RTCSrv service.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all the roles handled by the RTCSrv service.
Note that this command will return an error message if a service does not have a role name.

Get-CsWindowsService -Name "RTCSrv" | Select-Object -ExpandProperty RoleName

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, detailed information is displayed for all the service roles handled by the RTCSrv service.
To perform this task, the Get-CsWindowsService cmdlet is first used to return information about the RTCSrv service.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all the roles handled by the RTCSrv service.
Note that this command will return an error message if a service does not have a role name.

Get-CsWindowsService -Name "RTCSrv" | Select-Object -ExpandProperty RoleName

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService -Computer atl-cs-001.litwareinc.com
```

The command shown in Example 5 returns information about the Lync Server services installed on the remote computer atl-cs-001.litwareinc.com.
This is done by including the ComputerName parameter followed by the FQDN of the remote computer.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns information about the Lync Server services installed on the remote computer atl-cs-001.litwareinc.com.
This is done by including the ComputerName parameter followed by the FQDN of the remote computer.

Get-CsWindowsService -Computer atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns information about the Skype for Business Server 2015 services installed on the remote computer atl-cs-001.litwareinc.com.
This is done by including the ComputerName parameter followed by the FQDN of the remote computer.

Get-CsWindowsService -Computer atl-cs-001.litwareinc.com

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService -Report C:\Logs\Services.html
```

The preceding command returns information about all the Lync Server services installed on the local computer.
In addition, the Report parameter is included in order to save error information to a file named C:\Logs\Services.html.
If Get-CsWindowsService encounters any problems in retrieving service data, information about that problem will be recorded in Services.html.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 returns information about all the Lync Server services installed on the local computer.
In addition, the Report parameter is included in order to save error information to a file named C:\Logs\Services.html.
If Get-CsWindowsService encounters any problems in retrieving service data, information about that problem will be recorded in Services.html.

Get-CsWindowsService -Report C:\Logs\Services.html

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 returns information about all the Skype for Business Server 2015 services installed on the local computer.
In addition, the Report parameter is included in order to save error information to a file named C:\Logs\Services.html.
If the Get-CsWindowsService cmdlet encounters any problems in retrieving service data, information about that problem will be recorded in Services.html.

Get-CsWindowsService -Report C:\Logs\Services.html

### -------------------------- Example 7 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Where-Object {$_.Status -eq "Running"}
```

In Example 7, information is returned only for the Lync Server services on the local computer that are currently running.
To accomplish this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services, running or not running.
This collection is then piped to the Where-Object cmdlet, which picks out only those services where the Status property is equal to Running.

### -------------------------- EXAMPLE 7 -------------------------- (Lync Server 2013)
```

```

In Example 7, information is returned only for the Lync Server services on the local computer that are currently running.
To accomplish this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services, running or not running.
This collection is then piped to the Where-Object cmdlet, which picks out only those services where the Status property is equal to Running.

Get-CsWindowsService | Where-Object {$_.Status -eq "Running"}

### -------------------------- EXAMPLE 7 -------------------------- (Skype for Business Server 2015)
```

```

In Example 7, information is returned only for the Skype for Business Server 2015 services on the local computer that are currently running.
To accomplish this, the command first calls the Get-CsWindowsService cmdlet to return a collection of all the Skype for Business Server 2015 services, running or not running.
This collection is then piped to the Where-Object cmdlet, which picks out only those services where the Status property is equal to Running.

Get-CsWindowsService | Where-Object {$_.Status -eq "Running"}

### -------------------------- Example 8 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Application Sharing*"}
```

Example 8 shows how you can retrieve information for a particular service even if you do not know the actual name of that service (in this case, RTCASMCU).
To perform this task, Get-CsWindowsService is first called without any parameters; that returns a collection of all the Lync Server services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects the one service where the DisplayName property includes (-like) the string value "Application Sharing".
The end result: information is displayed for the Lync Server Application Sharing Conferencing service.

### -------------------------- EXAMPLE 8 -------------------------- (Lync Server 2013)
```

```

Example 8 shows how you can retrieve information for a particular service even if you do not know the actual name of that service (in this case, RTCASMCU).
To perform this task, Get-CsWindowsService is first called without any parameters; that returns a collection of all the Lync Server services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects the one service where the DisplayName property includes (-like) the string value "Application Sharing".
The end result: information is displayed for the Lync Server Application Sharing Conferencing service.

Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Application Sharing*"}

### -------------------------- EXAMPLE 8 -------------------------- (Skype for Business Server 2015)
```

```

Example 8 shows how you can retrieve information for a particular service even if you do not know the actual name of that service (in this case, RTCASMCU).
To perform this task, the Get-CsWindowsService cmdlet is first called without any parameters; that returns a collection of all the Skype for Business Server 2015 services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects the one service where the DisplayName property includes (-like) the string value "Application Sharing".
The end result: information is displayed for the Skype for Business Server 2015 Application Sharing Conferencing service.

Get-CsWindowsService | Where-Object {$_.DisplayName -like "*Application Sharing*"}

### -------------------------- Example 9 ------------------------ (Lync Server 2010)
```
Get-CsWindowsService | Where-Object {$_.RoleName -contains "ApplicationServer"}
```

Example 9 returns information about any services that host the Application Server role.
To do this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects those services where the RoleName property includes (-contains) ApplicationServer.

### -------------------------- EXAMPLE 9 -------------------------- (Lync Server 2013)
```

```

Example 9 returns information about any services that host the Application Server role.
To do this, the command first calls Get-CsWindowsService to return a collection of all the Lync Server services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects those services where the RoleName property includes (-contains) ApplicationServer.

Get-CsWindowsService | Where-Object {$_.RoleName -contains "ApplicationServer"}

### -------------------------- EXAMPLE 9 -------------------------- (Skype for Business Server 2015)
```

```

Example 9 returns information about any services that host the Application Server role.
To do this, the command first calls the Get-CsWindowsService cmdlet to return a collection of all the Skype for Business Server 2015 services on the local computer.
This collection is then piped to the Where-Object cmdlet, which selects those services where the RoleName property includes (-contains) ApplicationServer.

Get-CsWindowsService | Where-Object {$_.RoleName -contains "ApplicationServer"}

## PARAMETERS

### -Name
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the service you want to return information for.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter; in addition you cannot use wildcards in the service name.

Note, too that Get-CsWindowsService can only return information for Lync Server services; you cannot use this cmdlet to return information for other Windows services.
For those services, you might be able to use the Windows PowerShell Get-Service cmdlet.

If you do not include this parameter, Get-CsWindowsService will return information about all your Lync Server services.



**Below Content Applies To:** Skype for Business Server 2015

Name of the service you want to return information for.
Note that you must use the service name (for example, RTCCAA) and not the service display name.
You can only pass a single service name to the Name parameter; in addition you cannot use wildcards in the service name.

Note, too that the Get-CsWindowsService cmdlet can only return information for Skype for Business Server 2015 services; you cannot use this cmdlet to return information for other Windows services.
For those services, you might be able to use the Windows PowerShell Get-Service cmdlet.

If you do not include this parameter, the Get-CsWindowsService cmdlet will return information about all your Skype for Business Server 2015 services.



```yaml
Type: String
Parameter Sets: (All)
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

Name of the remote computer from which service information is to be retrieved; if this parameter is not included, Get-CsWindowsService will return information about the Lync Server services running on the local computer.
The remote computer should be referenced by using its fully qualified domain name (FQDN); for example, atl-mcs-001.litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Name of the remote computer from which service information is to be retrieved; if this parameter is not included, the Get-CsWindowsService cmdlet will return information about the Skype for Business Server 2015 services running on the local computer.
The remote computer should be referenced by using its fully qualified domain name (FQDN); for example, atl-mcs-001.litwareinc.com.



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

### -ExcludeActivityLevel
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If included, this parameter causes Get-CsWindowsService to return only the service status and not the service activity level.



**Below Content Applies To:** Skype for Business Server 2015

If included, this parameter causes the Get-CsWindowsService cmdlet to return only the service status and not the service activity level.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsWindowsService does not accept pipelined input.

###  
None.
The Get-CsWindowsService cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsWindowsService returns instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

###  
The Get-CsWindowsService cmdlet returns instances of the Microsoft.Rtc.Management.Deployment.Core.NTService object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9b119dac-c3e6-4031-8ae4-972fca1ef728(OCS.14).aspx)

[Start-CsWindowsService]()

[Stop-CsWindowsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/9b119dac-c3e6-4031-8ae4-972fca1ef728(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9b119dac-c3e6-4031-8ae4-972fca1ef728(OCS.16).aspx)

