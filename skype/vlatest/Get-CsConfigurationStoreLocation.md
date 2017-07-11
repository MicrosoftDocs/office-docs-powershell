---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsConfigurationStoreLocation

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Reports back the location of the Active Directory service control point for the Central Management store.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Reports back the location of the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsConfigurationStoreLocation [-GlobalSettingsDomainController <Fqdn>] [-Report <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Microsoft Lync Server 2010, a service control point is created that provides location information for the Central Management store used to maintain Lync Server 2010 data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

The Get-CsConfigurationStoreLocation cmdlet is used to report back the SQL Server path (for example, atl-sql-001.litwareinc.com/rtc) to the computer running the Central Management store.

Below Content Applies To: Lync Server 2013

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Lync Server, a service control point is created that provides location information for the Central Management store used to maintain Lync Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

The Get-CsConfigurationStoreLocation cmdlet is used to report back the SQL Server path (for example, atl-sql-001.litwareinc.com/rtc) to the computer running the Central Management store.

Below Content Applies To: Skype for Business Server 2015

Active Directory Domain Services uses service control points (SCP) to help computers locate services.
For example, when you install Skype for Business Server 2015, a service control point is created that provides location information for the Central Management store used to maintain Skype for Business Server 2015 data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

The Get-CsConfigurationStoreLocation cmdlet is used to report back the SQL Server path (for example, atl-sql-001.litwareinc.com/rtc) to the computer running the Central Management store.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsConfigurationStoreLocation
```

The command shown in Example 1 returns the SQL Server path to the computer (or pool) hosting the Central Management store.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns the SQL Server path to the computer (or pool) hosting the Central Management store.

Get-CsConfigurationStoreLocation

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns the SQL Server path to the computer (or pool) hosting the Central Management store.

Get-CsConfigurationStoreLocation

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsConfigurationStoreLocation -Report "C:\Logs\ConfigurationStore.html"
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the Report parameter is included in order to specify a path for the report generated when you run Get-CsConfigurationStoreLocation.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the Report parameter is included in order to specify a path for the report generated when you run Get-CsConfigurationStoreLocation.

Get-CsConfigurationStoreLocation -Report "C:\Logs\ConfigurationStore.html"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the Report parameter is included in order to specify a path for the report generated when you run the Get-CsConfigurationStoreLocation cmdlet.

Get-CsConfigurationStoreLocation -Report "C:\Logs\ConfigurationStore.html"

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
For example: -Report "C:\Logs\ConfigurationStore.html"

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

###  
None.
Get-CsConfigurationStoreLocation does not accept pipelined input.

###  
None.
The Get-CsConfigurationStoreLocation cmdlet does not accept pipelined input.

## OUTPUTS

###  
String.
Get-CsConfigurationStoreLocation reports back the location of the configuration store.

###  
String.
The Get-CsConfigurationStoreLocation cmdlet reports back the location of the configuration store.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/abfda147-02fa-46a5-a988-d83daf4cc455(OCS.14).aspx)

[Remove-CsConfigurationStoreLocation]()

[Set-CsConfigurationStoreLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/abfda147-02fa-46a5-a988-d83daf4cc455(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/abfda147-02fa-46a5-a988-d83daf4cc455(OCS.16).aspx)

