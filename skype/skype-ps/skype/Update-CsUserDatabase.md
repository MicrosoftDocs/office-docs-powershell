---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Update-CsUserDatabase
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Update-CsUserDatabase

## SYNOPSIS
Forces the back-end user database to clear its replication status with Active Directory.
This causes the database to re-read all the user-related information stored in Active Directory Domain Services.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Update-CsUserDatabase [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Skype for Business Server user database holds detailed information about such things as contacts, groups, and access permissions.
As such, the database is required to periodically synchronize its contents with the information stored in Active Directory.

More often than not, the automatic synch between the user database and Active Directory will keep the information in the user database up to date.
However, it is possible that a problem might occur that prevents this automatic synchronization from taking place.
In a case such as that, you can use the `Update-CsUserDatabase` cmdlet to force the user database to refresh its contents by re-reading all of the user information stored in Active Directory.
You might also need to run this cmdlet if a product update ever includes a change to the user replicator service.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-CsUserDatabase
```

The command shown in Example 1 locates the user database for the pool where the local computer is located, then forces that database to connect to and return complete user information from Active Directory.

### -------------------------- Example 2 --------------------------
```
Update-CsUserDatabase -Fqdn atl-cs-001.litwareinc.com
```

Example 2 shows how you can force a specific user database to re-read data from Active Directory.
In this case, that's the user database for the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -Fqdn
Fully qualified domain name (FQDN) of the computer hosting the user database.
If this parameter is not specified then the `Update-CsUserDatabase` cmdlet will update the user database for the pool that the local computer belongs to.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The Update-CsUserDatabase cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the `Update-CsUserDatabase` cmdlet updates instances of the Microsoft.Rtc.Management.Xds.DisplayUserDatabase object.

## NOTES

## RELATED LINKS

[Get-CsUserDatabaseState](Get-CsUserDatabaseState.md)

[Set-CsUserDatabaseState](Set-CsUserDatabaseState.md)

