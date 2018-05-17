---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsManagementConnection
schema: 2.0.0
---

# Get-CsManagementConnection

## SYNOPSIS
Returns information about the management connection to the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsManagementConnection [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Configuration data for Skype for Business Server is stored in the Central Management store; it is crucial that both Windows PowerShell and the management replica services be able to locate this database.
When you install Skype for Business Server, a service control point is created in Active Directory Domain Services that provides location information for this database.
Typically, computers rely on this service control point in order to connect to the Central Management store.
To see the details behind this connection (that is, if you want to know which computer the Central Management store is running on, as well information about the SQL Server connection to that Central Management store) you can run the Get-CsManagementConnection cmdlet.

If you have used the Set-CsManagementConnection cmdlet to set up a temporary management connection for your current instance of Windows PowerShell (for example, in order to work from the local replica), the Get-CsManagementConnection cmdlet will report back information for that temporary connection.
By comparison, the Get-CsConfigurationStoreLocation cmdlet always returns information for the service control point in Active Directory, regardless of where the local management connection is pointed.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsManagementConnection
```

The command in Example 1 returns information about the management connection to the Central Management store.


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

### None


## OUTPUTS

### Microsoft.Rtc.Management.Xds.ManagementConnection


## NOTES


## RELATED LINKS

[Remove-CsManagementConnection](Remove-CsManagementConnection.md)

[Set-CsManagementConnection](Set-CsManagementConnection.md)
