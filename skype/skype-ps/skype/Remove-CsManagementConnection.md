---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsManagementConnection
schema: 2.0.0
---

# Remove-CsManagementConnection

## SYNOPSIS
Resets the management connection to the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsManagementConnection [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Configuration data for Skype for Business Server is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replication services be able to locate this database.
When you install Skype for Business Server, a service control point is created in Active Directory Domain Services that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store), you can run the `Get-CsManagementConnection` cmdlet.

As a general rule, you will not need to change your management connection.
However, it is possible that you might need to temporarily use a new management connection.
When you are ready to switch back to the default connection all you need to do is run the `Remove-CsManagementConnection` cmdlet; this cmdlet erases the current connection information and replaces it with the connection information stored in the Active Directory service control point.
This means you do not have to recreate the original connection information; the `Remove-CsManagementConnection` cmdlet will do that for you.

Note that no problems will occur if you call this cmdlet while using the default connection.
If you do so, you will simply continue to use the default connection information stored in Active Directory.
Note, too that this cmdlet only affects the management connection information for your current Windows PowerShell session: any changes to the management connection are limited to your local computer and local instance of Windows PowerShell.


## EXAMPLES

### ------------------------- Example 1 ------------------------
```
Remove-CsManagementConnection
```

The command shown in Example 1 removes the existing management connection information and replaces it with the default connection information stored in Active Directory.


## PARAMETERS

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsManagementConnection` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the `Remove-CsManagementConnection` cmdlet deletes instances of the Microsoft.Rtc.Management.Xds.ManagementConnection object.

## NOTES

## RELATED LINKS

[Get-CsManagementConnection](Get-CsManagementConnection.md)

[Remove-CsConfigurationStoreLocation](Remove-CsConfigurationStoreLocation.md)

[Set-CsManagementConnection](Set-CsManagementConnection.md)

