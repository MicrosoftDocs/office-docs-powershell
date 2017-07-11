---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsManagementConnection

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the management connection to the Central Management store.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about the management connection to the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsManagementConnection [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Configuration data for Microsoft Lync 2010 is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replica services be able to locate this database.
When you install Microsoft Lync Server 2010, a service control point is created in Active Directory Domain Services (AD DS) that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store) you can run the Get-CsManagementConnection cmdlet.

If you have used the Set-CsManagementConnection cmdlet to set up a temporary management connection for your current instance of Windows PowerShell (for example, in order to work from the local replica), Get-CsManagementConnection will report back information for that temporary connection.
By comparison, the Get-CsConfigurationStoreLocation always returns information for the service control point in Active Directory, regardless of where the local management connection is pointed.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsManagementConnection cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsManagementConnection"}

Below Content Applies To: Lync Server 2013

Configuration data for Lync Server is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replica services be able to locate this database.
When you install Lync Server, a service control point is created in Active Directory Domain Services (AD DS) that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store) you can run the Get-CsManagementConnection cmdlet.

If you have used the Set-CsManagementConnection cmdlet to set up a temporary management connection for your current instance of Windows PowerShell (for example, in order to work from the local replica), Get-CsManagementConnection will report back information for that temporary connection.
By comparison, the Get-CsConfigurationStoreLocation always returns information for the service control point in Active Directory, regardless of where the local management connection is pointed.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsManagementConnection cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsManagementConnection"}

Below Content Applies To: Skype for Business Server 2015

Configuration data for Skype for Business Server 2015 is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replica services be able to locate this database.
When you install Skype for Business Server 2015, a service control point is created in Active Directory Domain Services that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store) you can run the Get-CsManagementConnection cmdlet.

If you have used the Set-CsManagementConnection cmdlet to set up a temporary management connection for your current instance of Windows PowerShell (for example, in order to work from the local replica), the Get-CsManagementConnection cmdlet will report back information for that temporary connection.
By comparison, the Get-CsConfigurationStoreLocation cmdlet always returns information for the service control point in Active Directory, regardless of where the local management connection is pointed.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsManagementConnection
```

The command in Example 1 returns information about the management connection to the Central Management store.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command in Example 1 returns information about the management connection to the Central Management store.

Get-CsManagementConnection

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command in Example 1 returns information about the management connection to the Central Management store.

Get-CsManagementConnection

## PARAMETERS

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

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
Get-CsManagementConnection does not accept pipelined input.

###  
None.
The Get-CsManagementConnection cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsManagementConnection returns instances of the Microsoft.Rtc.Management.Xds.ManagementConnection object.

###  
The Get-CsManagementConnection cmdlet returns instances of the Microsoft.Rtc.Management.Xds.ManagementConnection object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b0e2377c-6aab-45d8-b71d-0d37c6f6dae3(OCS.14).aspx)

[Remove-CsManagementConnection]()

[Set-CsManagementConnection]()

[Online Version](http://technet.microsoft.com/EN-US/library/b0e2377c-6aab-45d8-b71d-0d37c6f6dae3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b0e2377c-6aab-45d8-b71d-0d37c6f6dae3(OCS.16).aspx)

