---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsServerApplication

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the server applications in use in your organization.
Server applications are applications that are hosted by Microsoft Lync Server 2010.

Below Content Applies To: Lync Server 2013

Returns information about the server applications in use in your organization.
Server applications are applications that are hosted by Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the server applications in use in your organization.
Server applications are applications that are hosted by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsServerApplication [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsServerApplication [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Server applications refer to the individual programs that run under Lync Server 2010.
The Get-CsServerApplication cmdlet provides a way for administrators to return information about any (or all) of the applications running as part of Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsServerApplication cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsServerApplication"}

Below Content Applies To: Lync Server 2013

Server applications refer to the individual programs that run under Lync Server.
The Get-CsServerApplication cmdlet provides a way for administrators to return information about any (or all) of the applications running as part of Lync Server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsServerApplication cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsServerApplication"}

Below Content Applies To: Skype for Business Server 2015

Server applications refer to the individual programs that run under Skype for Business Server 2015.
The Get-CsServerApplication cmdlet provides a way for administrators to return information about any (or all) of the applications running as part of Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication
```

The command shown in Example 1 returns information about all the server applications currently in use in the organization.
This is done by calling Get-CsServerApplication without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the server applications currently in use in the organization.
This is done by calling Get-CsServerApplication without any parameters.

Get-CsServerApplication

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the server applications currently in use in the organization.
This is done by calling the Get-CsServerApplication cmdlet without any parameters.

Get-CsServerApplication

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com"
```

In Example 2, information is returned for all the server applications running on the service EdgeServer:atl-edge-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for all the server applications running on the service EdgeServer:atl-edge-001.litwareinc.com.

Get-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for all the server applications running on the service EdgeServer:atl-edge-001.litwareinc.com.

Get-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication -Identity "service:Registrar:atl-cs-001.litwareinc.com/ExumRouting"
```

Example 3 returns information for a single server application: the application that has the Identity Registrar:atl-cs-001.litwareinc.com/ExumRouting".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information for a single server application: the application that has the Identity Registrar:atl-cs-001.litwareinc.com/ExumRouting".

Get-CsServerApplication -Identity "service:Registrar:atl-cs-001.litwareinc.com/ExumRouting"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information for a single server application: the application that has the Identity Registrar:atl-cs-001.litwareinc.com/ExumRouting".

Get-CsServerApplication -Identity "service:Registrar:atl-cs-001.litwareinc.com/ExumRouting"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication -Filter "service:*:atl-cs-001.litwareinc.com*"
```

The preceding command returns all the server applications configured for use in the pool atl-cs-001.litwareinc.com.
This is done by using the Filter parameter and the filter value "service:*:atl-cs-001.litwareinc.com*".
The filter value limits the returned data to applications that have an Identity that begins with the characters "service:" and includes the characters ":atl-cs-001.litwareinc.com".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the server applications configured for use in the pool atl-cs-001.litwareinc.com.
This is done by using the Filter parameter and the filter value "service:*:atl-cs-001.litwareinc.com*".
The filter value limits the returned data to applications that have an Identity that begins with the characters "service:" and includes the characters ":atl-cs-001.litwareinc.com".

Get-CsServerApplication -Filter "service:*:atl-cs-001.litwareinc.com*"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the server applications configured for use in the pool atl-cs-001.litwareinc.com.
This is done by using the Filter parameter and the filter value "service:*:atl-cs-001.litwareinc.com*".
The filter value limits the returned data to applications that have an Identity that begins with the characters "service:" and includes the characters ":atl-cs-001.litwareinc.com".

Get-CsServerApplication -Filter "service:*:atl-cs-001.litwareinc.com*"

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication | Where-Object {$_.Enabled -eq $False}
```

In Example 5, information is returned for all the server applications that are currently disabled.
To carry out this task, the command first calls Get-CsServerApplication to return a collection of all the server applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, information is returned for all the server applications that are currently disabled.
To carry out this task, the command first calls Get-CsServerApplication to return a collection of all the server applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

Get-CsServerApplication | Where-Object {$_.Enabled -eq $False}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, information is returned for all the server applications that are currently disabled.
To carry out this task, the command first calls the Get-CsServerApplication cmdlet to return a collection of all the server applications configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

Get-CsServerApplication | Where-Object {$_.Enabled -eq $False}

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication | Where-Object {$_.Critical -eq $True -and $_.Enabled -eq $False}
```

Example 6 is a variation of the command shown in Example 5.
In Example 6, information is returned for all the server applications that are marked as critical and are currently disabled.
To do this, the command first calls Get-CsServerApplication without any parameters; that returns a collection of all the server applications configured for use.
This collection is then piped to Where-Object, which picks out only those applications that meet two criteria: the Critical property must be equal to True; and, the Enabled property must be equal to False.
The -and operator ensures that only objects that meet both criteria will be returned.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 is a variation of the command shown in Example 5.
In Example 6, information is returned for all the server applications that are marked as critical and are currently disabled.
To do this, the command first calls Get-CsServerApplication without any parameters; that returns a collection of all the server applications configured for use.
This collection is then piped to Where-Object, which picks out only those applications that meet two criteria: the Critical property must be equal to True; and, the Enabled property must be equal to False.
The -and operator ensures that only objects that meet both criteria will be returned.

Get-CsServerApplication | Where-Object {$_.Critical -eq $True -and $_.Enabled -eq $False}

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 is a variation of the command shown in Example 5.
In Example 6, information is returned for all the server applications that are marked as critical and are currently disabled.
To do this, the command first calls the Get-CsServerApplication cmdlet without any parameters; that returns a collection of all the server applications configured for use.
This collection is then piped to the Where-Object cmdlet, which picks out only those applications that meet two criteria: the Critical property must be equal to True; and, the Enabled property must be equal to False.
The -and operator ensures that only objects that meet both criteria will be returned.

Get-CsServerApplication | Where-Object {$_.Critical -eq $True -and $_.Enabled -eq $False}

### -------------------------- Example 7 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication | Where-Object {$_.Uri -like "*routing*"}
```

In Example 7, information is returned for any server application that has the string value "routing" somewhere in its Uri.
This task is accomplished by first using Get-CsServerApplication to retrieve all the server applications currently in use.
The resulting collection is then piped to Where-Object, which selects only those applications in which the Uri property includes the string value "routing".

### -------------------------- EXAMPLE 7 -------------------------- (Lync Server 2013)
```

```

In Example 7, information is returned for any server application that has the string value "routing" somewhere in its Uri.
This task is accomplished by first using Get-CsServerApplication to retrieve all the server applications currently in use.
The resulting collection is then piped to Where-Object, which selects only those applications in which the Uri property includes the string value "routing".

Get-CsServerApplication | Where-Object {$_.Uri -like "*routing*"}

### -------------------------- EXAMPLE 7 -------------------------- (Skype for Business Server 2015)
```

```

In Example 7, information is returned for any server application that has the string value "routing" somewhere in its Uri.
This task is accomplished by first using the Get-CsServerApplication cmdlet to retrieve all the server applications currently in use.
The resulting collection is then piped to the Where-Object cmdlet, which selects only those applications in which the Uri property includes the string value "routing".

Get-CsServerApplication | Where-Object {$_.Uri -like "*routing*"}

### -------------------------- Example 8 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication | Where-Object {$_.ScriptName -ne $Null}
```

The preceding command returns information for all the server applications that have been assigned a script.
To do this, the command first retrieves a collection of all the server applications currently in use; this information is retrieved by calling Get-CsServerApplication without any parameters.
The complete collection of server applications is then piped to the Where-Object cmdlet, which selects only those applications where the ScriptName property is not equal to a null value.
If the ScriptName property is not equal to a null value that means that a script has been assigned to that application.

### -------------------------- EXAMPLE 8 -------------------------- (Lync Server 2013)
```

```

Example 8 returns information for all the server applications that have been assigned a script.
To do this, the command first retrieves a collection of all the server applications currently in use; this information is retrieved by calling Get-CsServerApplication without any parameters.
The complete collection of server applications is then piped to the Where-Object cmdlet, which selects only those applications where the ScriptName property is not equal to a null value.
If the ScriptName property is not equal to a null value that means that a script has been assigned to that application.

Get-CsServerApplication | Where-Object {$_.ScriptName -ne $Null}

### -------------------------- EXAMPLE 8 -------------------------- (Skype for Business Server 2015)
```

```

Example 8 returns information for all the server applications that have been assigned a script.
To do this, the command first retrieves a collection of all the server applications currently in use; this information is retrieved by calling the Get-CsServerApplication cmdlet without any parameters.
The complete collection of server applications is then piped to the Where-Object cmdlet, which selects only those applications where the ScriptName property is not equal to a null value.
If the ScriptName property is not equal to a null value that means that a script has been assigned to that application.

Get-CsServerApplication | Where-Object {$_.ScriptName -ne $Null}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the server application to be retrieved.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: service: Registrar:atl-cs-001.litwareinc.com/QoEAgent.

To retrieve a collection of all the applications running on a given service, simply leave off the application name:

-Identity "Registrar:atl-cs-001.litwareinc.com "

If this parameter is omitted, then all the server applications will be returned when you call Get-CsServerApplication.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the server application to be retrieved.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: service: Registrar:atl-cs-001.litwareinc.com/QoEAgent.

To retrieve a collection of all the applications running on a given service, simply leave off the application name:

-Identity "Registrar:atl-cs-001.litwareinc.com "

If this parameter is omitted, then all the server applications will be returned when you call the Get-CsServerApplication cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcards when returning a server application or set of server applications.
For example, to return all the server applications that have the string value "IIMFilter" somewhere in their Identity use this syntax: -Filter "*IIMFilter*".



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards when returning a server application or set of server applications.
For example, to return all the server applications that have the string value "IIMFilter" somewhere in their Identity use this syntax:

-Filter "*IIMFilter*"



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the server application data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsServerApplication does not accept pipelined input.

###  
None.
The Get-CsServerApplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsServerApplication returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.

###  
The Get-CsServerApplication cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/46769cc2-9e61-4437-b74a-24f3cf118f39(OCS.14).aspx)

[New-CsServerApplication]()

[Remove-CsServerApplication]()

[Set-CsServerApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/46769cc2-9e61-4437-b74a-24f3cf118f39(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/46769cc2-9e61-4437-b74a-24f3cf118f39(OCS.16).aspx)

