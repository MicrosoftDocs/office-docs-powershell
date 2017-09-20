---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsManagementConnection
schema: 2.0.0
---

# Set-CsManagementConnection

## SYNOPSIS
Modifies the management connection to the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsManagementConnection [-StoreProvider] <StoreProvider> [-Connection] <String> [-WhatIf] [-Confirm]
 [-EnableCaching <Boolean>] [<CommonParameters>]
```


## DESCRIPTION
Configuration data for Skype for Business Server is stored in the Central Management store.
It is crucial that both Windows PowerShell and the management replica services be able to locate this database.
When you install Skype for Business Server, a service control point is created in Active Directory Domain Services that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well as information about the SQL Server connection to that Central Management store) all you have to do is run the `Get-CsManagementConnection` cmdlet.

For the most part, after your management connection has been set you will not need to change it.
However, in case of hardware or software failure, you might need to temporarily use a connection; for example, you can configure a computer to work from the local replica.
The `Set-CsManagementConnection` cmdlet provides a way for you to provide a new location for the Central Management store.

Note that any changes you make to Skype for Business Server while using a temporary management connection will not persist if and when you switch back to your original connection.
(You can switch back by running the `Remove-CsManagementConnection` cmdlet.) For example, suppose you decide to temporarily use the file system as your store provider.
You change the management connection, and then create several new voice policies (each of which will be instantiated as XML files).
When you switch back to your original management connection, these new voice policies will disappear because they were never recorded in the Central Management store now being used.

You should also keep in mind that any changes made by running this cmdlet only affect the local computer.
You cannot use the `Set-CsManagementConnection` cmdlet to change the management connection on other computers.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsManagementConnection -StoreProvider Sql -Connection "atl-sql-001.litwareinc.com\rtcbackup"
```

The command shown in Example 1 changes the management connection to the SQL Server instance rtcbackup found on the computer atl-sql-001.litwareinc.com.


### -------------------------- Example 2 --------------------------
```
Set-CsManagementConnection -StoreProvider FileSystem -Connection "C:\TestTopology"
```

In Example 2, the management connection is set to file system and, more specifically, to the folder C:\TestTopology on the local computer.


## PARAMETERS

### -Connection
Location information for the SQL Server instance or the file system folder being used as the management connection.

For example, if the new management connection is to a SQL Server instance named rtcbackup on the computer atl-sql-001.litwareinc.com then use this syntax: `-Connection "atl-sql-001.litwareinc.com\rtcbackup"`.

If you want to create a management connection to the folder C:\TestTopology then use this syntax: `-Connection "C:\TestTopology"`.
If the folder does not exist, the `Set-CsManagementConnection` cmdlet will create it.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreProvider
Indicates the type of back-end store used for configuration information.
For example, to store configuration data in SQL Server, set the StoreProvider like this: -StoreProvider Sql.
In general, you should not modify the StoreProvider property unless instructed to do so by Microsoft support personnel.

The following store providers are available in Skype for Business Server:

Sql

FileSystem

Memory

Azure


```yaml
Type: StoreProvider
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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

### -EnableCaching
When set to True ($True), caching is enabled for the management connection.

```yaml
Type: Boolean
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
None.
The `Set-CsManagementConnection` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsManagementConnection` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.Store.StoreProvider object.

## NOTES

## RELATED LINKS

[Get-CsManagementConnection]()

[Remove-CsManagementConnection]()

[Set-CsConfigurationStoreLocation]()
