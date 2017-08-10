---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Update-CsUserDatabase

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Forces the back-end user database to clear its replication status with Active Directory.
This causes the database to re-read all the user-related information stored in Active Directory Domain Services (AD DS).

**Below Content Applies To:** Lync Server 2013

Forces the back-end user database to clear its replication status with Active Directory.
This causes the database to re-read all the user-related information stored in Active Directory Domain Services (AD DS).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Forces the back-end user database to clear its replication status with Active Directory.
This causes the database to re-read all the user-related information stored in Active Directory Domain Services.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Update-CsUserDatabase [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Microsoft Lync Server 2010 user database holds detailed information about such things as contacts, groups, and access permissions.
As such, the database is required to periodically synch its contents with the information stored in Active Directory.

More often than not, the automatic synch between the user database and Active Directory will keep the information in the user database up to date.
However, it is possible that a problem might occur that prevents this automatic synchronization from taking place.
In a case such as that, you can use the Update-CsUserDatabase cmdlet to force the user database to refresh its contents by re-reading all of the user information stored in Active Directory.
You might also need to run this cmdlet if a product update ever includes a change to the user replicator service.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Update-CsUserDatabase cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsUserDatabase"}

**Below Content Applies To:** Lync Server 2013

The Lync Server user database holds detailed information about such things as contacts, groups, and access permissions.
As such, the database is required to periodically synch its contents with the information stored in Active Directory.

More often than not, the automatic synch between the user database and Active Directory will keep the information in the user database up to date.
However, it is possible that a problem might occur that prevents this automatic synchronization from taking place.
In a case such as that, you can use the Update-CsUserDatabase cmdlet to force the user database to refresh its contents by re-reading all of the user information stored in Active Directory.
You might also need to run this cmdlet if a product update ever includes a change to the user replicator service.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Update-CsUserDatabase cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsUserDatabase"}

**Below Content Applies To:** Skype for Business Server 2015

The Skype for Business Server 2015 user database holds detailed information about such things as contacts, groups, and access permissions.
As such, the database is required to periodically synch its contents with the information stored in Active Directory.

More often than not, the automatic synch between the user database and Active Directory will keep the information in the user database up to date.
However, it is possible that a problem might occur that prevents this automatic synchronization from taking place.
In a case such as that, you can use the Update-CsUserDatabase cmdlet to force the user database to refresh its contents by re-reading all of the user information stored in Active Directory.
You might also need to run this cmdlet if a product update ever includes a change to the user replicator service.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Update-CsUserDatabase
```

The command shown in Example 1 locates the user database for the pool where the local computer is located, then forces that database to connect to and return complete user information from Active Directory.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 locates the user database for the pool where the local computer is located, then forces that database to connect to and return complete user information from Active Directory.

Update-CsUserDatabase

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 locates the user database for the pool where the local computer is located, then forces that database to connect to and return complete user information from Active Directory.

Update-CsUserDatabase

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Update-CsUserDatabase -Fqdn atl-cs-001.litwareinc.com
```

Example 2 shows how you can force a specific user database to re-read data from Active Directory.
In this case, that's the user database for the pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 shows how you can force a specific user database to re-read data from Active Directory.
In this case, that's the user database for the pool atl-cs-001.litwareinc.com.

Update-CsUserDatabase -Fqdn atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 shows how you can force a specific user database to re-read data from Active Directory.
In this case, that's the user database for the pool atl-cs-001.litwareinc.com.

Update-CsUserDatabase -Fqdn atl-cs-001.litwareinc.com

## PARAMETERS

### -Fqdn
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of the computer hosting the user database.
If this parameter is not specified then Update-CsUserDatabase will update the user database for the pool that the local computer belongs to.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of the computer hosting the user database.
If this parameter is not specified then the Update-CsUserDatabase cmdlet will update the user database for the pool that the local computer belongs to.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Update-CsUserDatabase does not accept pipelined input.

###  
None.
The Update-CsUserDatabase cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Update-CsUserDatabase updates instances of the Microsoft.Rtc.Management.Xds.DisplayuserDatabase object.

###  
None.
Instead, the Update-CsUserDatabase cmdlet updates instances of the Microsoft.Rtc.Management.Xds.DisplayUserDatabase object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/86ed4291-70cc-4c41-ab2a-e5f7546a0f1f(OCS.14).aspx)

[Get-CsUserDatabaseState]()

[Set-CsUserDatabaseState]()

[Online Version](http://technet.microsoft.com/EN-US/library/86ed4291-70cc-4c41-ab2a-e5f7546a0f1f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/86ed4291-70cc-4c41-ab2a-e5f7546a0f1f(OCS.16).aspx)

