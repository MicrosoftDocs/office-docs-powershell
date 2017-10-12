---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsConfigurationStoreLocation
schema: 2.0.0
---

# Get-CsConfigurationStoreLocation

## SYNOPSIS
Reports back the location of the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsConfigurationStoreLocation [-GlobalSettingsDomainController <Fqdn>] [-Report <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Active Directory Domain Services uses service control points (SCP) to help computers locate services.
For example, when you install Skype for Business Server, a service control point is created that provides location information for the Central Management store used to maintain Skype for Business Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

The Get-CsConfigurationStoreLocation cmdlet is used to report back the SQL Server path (for example, atl-sql-001.litwareinc.com/rtc) to the computer running the Central Management store.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsConfigurationStoreLocation
```

The command shown in Example 1 returns the SQL Server path to the computer (or pool) hosting the Central Management store.

### -------------------------- Example 2 --------------------------
```
Get-CsConfigurationStoreLocation -Report "C:\Logs\ConfigurationStore.html"
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the Report parameter is included in order to specify a path for the report generated when you run the Get-CsConfigurationStoreLocation cmdlet.


## PARAMETERS

### -GlobalSettingsDomainController
Fully qualified domain name (FQDN) of a domain controller where global settings are stored.
If global settings are stored in the Active Directory System container, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.

```yaml
Type: Fqdn
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
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 

`-Report "C:\Logs\ConfigurationStore.html"`

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

### None


## OUTPUTS

### String
The Get-CsConfigurationStoreLocation cmdlet reports back the location of the configuration store.


## NOTES


## RELATED LINKS

[Remove-CsConfigurationStoreLocation](Remove-CsConfigurationStoreLocation.md)

[Set-CsConfigurationStoreLocation](Set-CsConfigurationStoreLocation.md)
