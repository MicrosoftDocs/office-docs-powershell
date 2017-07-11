---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsServerApplication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing server application.
Server applications are applications that are hosted by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Removes an existing server application.
Server applications are applications that are hosted by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing server application.
Server applications are applications that are hosted by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsServerApplication [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Server applications refer to the individual programs that run under Lync Server 2010.
The Remove-CsServerApplication cmdlet provides a way for administrators to remove any application running as part of Lync Server.
Note that deleting a server application is not the same thing as uninstalling that application.
When you run Remove-CsServerApplication, the application no longer runs under Lync Server.
However, the software itself is not uninstalled, and the application can be re-enabled by running the New-CsServerApplication cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsServerApplication cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsServerApplication }

**Below Content Applies To:** Lync Server 2013

Server applications refer to the individual programs that run under Lync Server.
The Remove-CsServerApplication cmdlet provides a way for administrators to remove any application running as part of Lync Server.
Note that deleting a server application is not the same thing as uninstalling that application.
When you run Remove-CsServerApplication, the application no longer runs under Lync Server.
However, the software itself is not uninstalled, and the application can be re-enabled by running the New-CsServerApplication cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsServerApplication cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsServerApplication }

**Below Content Applies To:** Skype for Business Server 2015

Server applications refer to the individual programs that run under Skype for Business Server 2015.
The Remove-CsServerApplication cmdlet provides a way for administrators to remove any application running as part of Skype for Business Server 2015.
Note that deleting a server application is not the same thing as uninstalling that application.
When you run the Remove-CsServerApplication cmdlet, the application no longer runs under Skype for Business Server 2015.
However, the software itself is not uninstalled, and the application can be re-enabled by running the New-CsServerApplication cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor"
```

In Example 1, the server application that has the Identity service: EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor is removed.
Because Identities must be unique, this command will never delete more than a single application.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the server application that has the Identity service: EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor is removed.
Because Identities must be unique, this command will never delete more than a single application.

Remove-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the server application that has the Identity service: EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor is removed.
Because Identities must be unique, this command will never delete more than a single application.

Remove-CsServerApplication -Identity "service:EdgeServer:atl-edge-001.litwareinc.com/EdgeMonitor"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication | Where-Object {$_.Critical -eq $False} | Remove-CsServerApplication
```

In Example 2, all the non-critical server applications are removed.
To carry out this task, the command first calls Get-CsServerApplication in order to return a collection of all the server applications currently in use in the organization.
This collection is then piped to Where-Object, which picks all the applications where the Critical property is equal to False.
This filtered collection is then piped to Remove-CsServerApplication, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the non-critical server applications are removed.
To carry out this task, the command first calls Get-CsServerApplication in order to return a collection of all the server applications currently in use in the organization.
This collection is then piped to Where-Object, which picks all the applications where the Critical property is equal to False.
This filtered collection is then piped to Remove-CsServerApplication, which deletes each item in the collection.

Get-CsServerApplication | Where-Object {$_.Critical -eq $False} | Remove-CsServerApplication

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the non-critical server applications are removed.
To carry out this task, the command first calls the Get-CsServerApplication cmdlet in order to return a collection of all the server applications currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks all the applications where the Critical property is equal to False.
This filtered collection is then piped to the Remove-CsServerApplication cmdlet, which deletes each item in the collection.

Get-CsServerApplication | Where-Object {$_.Critical -eq $False} | Remove-CsServerApplication

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsServerApplication -Filter "service:EdgeServer:atl-cs-001.litwareinc.com/*" | Remove-CsServerApplication
```

The preceding command deletes all the server applications that have been configured for use by the service EdgeServer:atl-cs-001.litwareinc.com.
To do this, Get-CsServerApplication is used along with the Filter parameter; the filter value "service:EdgeServer:atl-cs-001.litwareinc.com/*" returns all the applications that have an Identity that begins with the characters "service:EdgeServer:atl-cs-001.litwareinc.com/".
In turn, that collection is piped to Remove-CsServerApplication, which deletes each application from the EdgeServer:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the server applications that have been configured for use by the service EdgeServer:atl-cs-001.litwareinc.com.
To do this, Get-CsServerApplication is used along with the Filter parameter; the filter value "service:EdgeServer:atl-cs-001.litwareinc.com/*" returns all the applications that have an Identity that begins with the characters "service:EdgeServer:atl-cs-001.litwareinc.com/".
In turn, that collection is piped to Remove-CsServerApplication, which deletes each application from the EdgeServer:atl-cs-001.litwareinc.com.

Get-CsServerApplication -Filter "service:EdgeServer:atl-cs-001.litwareinc.com/*" | Remove-CsServerApplication

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the server applications that have been configured for use by the service EdgeServer:atl-cs-001.litwareinc.com.
To do this, the Get-CsServerApplication cmdlet is used along with the Filter parameter; the filter value "service:EdgeServer:atl-cs-001.litwareinc.com/*" returns all the applications that have an Identity that begins with the characters "service:EdgeServer:atl-cs-001.litwareinc.com/".
In turn, that collection is piped to the Remove-CsServerApplication cmdlet, which deletes each application from the EdgeServer:atl-cs-001.litwareinc.com.

Get-CsServerApplication -Filter "service:EdgeServer:atl-cs-001.litwareinc.com/*" | Remove-CsServerApplication

## PARAMETERS

### -Identity
Unique identifier for the server application to be removed.
Server application Identities are composed of the service where the application is hosted plus the application name.
For example, the server application named QoEAgent might have an Identity similar to this: service:Registrar:atl-cs-001.litwareinc.com/QoEAgent.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.
Remove-CsServerApplication accepts pipelined instances of the server application object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.
The Remove-CsServerApplication cmdlet accepts pipelined instances of the server application object.

## OUTPUTS

###  
Remove-CsServerApplication deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.

###  
The Remove-CsServerApplication cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ServerApplication.Application object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/55325d8c-9c67-4e88-868d-ce62bc11322e(OCS.14).aspx)

[Get-CsServerApplication]()

[New-CsServerApplication]()

[Set-CsServerApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/55325d8c-9c67-4e88-868d-ce62bc11322e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/55325d8c-9c67-4e88-868d-ce62bc11322e(OCS.16).aspx)

