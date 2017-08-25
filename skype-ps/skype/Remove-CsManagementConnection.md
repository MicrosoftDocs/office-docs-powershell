---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsManagementConnection

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Resets the management connection to the Active Directory service control point for the Central Management store.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Resets the management connection to the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsManagementConnection [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Configuration data for Microsoft Lync 2010 is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replication services be able to locate this database.
When you install Microsoft Lync Server 2010, a service control point is created in Active Directory Domain Services (AD DS) that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store), you can run the Get-CsManagementConnection cmdlet.

As a general rule, you will not need to change your management connection.
However, it is possible that you might need to temporarily use a new management connection.
When you are ready to switch back to the default connection  all you need to do is run the Remove-CsManagementConnection cmdlet; this cmdlet erases the current connection information and replaces it with the connection information stored in the Active Directory service control point.
This means you do not have to recreate the original connection information; Remove-CsManagementConnection will do that for you.

Note that no problems will occur if you call this cmdlet while using the default connection.
If you do so, you will simply continue to use the default connection information stored in Active Directory.
Note, too that this cmdlet only affects the management connection information for your current Windows PowerShell session: any changes to the management connection are limited to your local computer and local instance of Windows PowerShell.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsManagementConnection cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsManagementConnection"}

**Below Content Applies To:** Lync Server 2013

Configuration data for Lync Server is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replication services be able to locate this database.
When you install Lync Server, a service control point is created in Active Directory Domain Services (AD DS) that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store), you can run the Get-CsManagementConnection cmdlet.

As a general rule, you will not need to change your management connection.
However, it is possible that you might need to temporarily use a new management connection.
When you are ready to switch back to the default connection all you need to do is run the Remove-CsManagementConnection cmdlet; this cmdlet erases the current connection information and replaces it with the connection information stored in the Active Directory service control point.
This means you do not have to recreate the original connection information; Remove-CsManagementConnection will do that for you.

Note that no problems will occur if you call this cmdlet while using the default connection.
If you do so, you will simply continue to use the default connection information stored in Active Directory.
Note, too that this cmdlet only affects the management connection information for your current Windows PowerShell session: any changes to the management connection are limited to your local computer and local instance of Windows PowerShell.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsManagementConnection cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsManagementConnection"}

**Below Content Applies To:** Skype for Business Server 2015

Configuration data for Skype for Business Server 2015 is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replication services be able to locate this database.
When you install Skype for Business Server 2015, a service control point is created in Active Directory Domain Services that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store), you can run the Get-CsManagementConnection cmdlet.

As a general rule, you will not need to change your management connection.
However, it is possible that you might need to temporarily use a new management connection.
When you are ready to switch back to the default connection all you need to do is run the Remove-CsManagementConnection cmdlet; this cmdlet erases the current connection information and replaces it with the connection information stored in the Active Directory service control point.
This means you do not have to recreate the original connection information; the Remove-CsManagementConnection cmdlet will do that for you.

Note that no problems will occur if you call this cmdlet while using the default connection.
If you do so, you will simply continue to use the default connection information stored in Active Directory.
Note, too that this cmdlet only affects the management connection information for your current Windows PowerShell session: any changes to the management connection are limited to your local computer and local instance of Windows PowerShell.



## EXAMPLES

### ------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsManagementConnection
```

The command shown in Example 1 removes the existing management connection information and replaces it with the default connection information stored in Active Directory.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the existing management connection information and replaces it with the default connection information stored in Active Directory.

Remove-CsManagementConnection

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the existing management connection information and replaces it with the default connection information stored in Active Directory.

Remove-CsManagementConnection

## PARAMETERS

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
None.
Remove-CsManagementConnection does not accept pipelined input.

###  
None.
The Remove-CsManagementConnection cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Remove-CsManagementConnection deletes instances of the Microsoft.Rtc.Management.Xds.ManagementConnection object.

###  
None.
Instead, the Remove-CsManagementConnection cmdlet deletes instances of the Microsoft.Rtc.Management.Xds.ManagementConnection object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2fe69a3d-0154-418f-b6ee-99a88e5a9c7d(OCS.14).aspx)

[Get-CsManagementConnection]()

[Remove-CsConfigurationStoreLocation]()

[Set-CsManagementConnection]()

[Online Version](http://technet.microsoft.com/EN-US/library/2fe69a3d-0154-418f-b6ee-99a88e5a9c7d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2fe69a3d-0154-418f-b6ee-99a88e5a9c7d(OCS.16).aspx)

