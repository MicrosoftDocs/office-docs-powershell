---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsConfigurationStoreLocation

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Sets the Active Directory service control point for the Central Management store.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Sets the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsConfigurationStoreLocation -SqlServerFqdn <Fqdn> [-GlobalSettingsDomainController <Fqdn>]
 [-SqlInstanceName <String>] [-SkipLookup] [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 [-MirrorSqlInstanceName <String>] [-MirrorSqlServerFqdn <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Microsoft Lync Server 2010, a service control point is created that provides location information for the Central Management store used to maintain Lync Server 2010 data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Lync Server an SCP that for the Central Management store is automatically created for you.
If you need to move that database to another computer or if you need to move that database to a different instance of SQL Server, then you will need to update the corresponding service control point.
That's a task that can be carried out by using the Set-CsConfigurationStoreLocation cmdlet.
When you run this cmdlet, Set-CsConfigurationStoreLocation searches Active Directory for the computer specified by the SqlServer parameter.
The cmdlet then sets the store location to the FQDN of that computer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConfigurationStoreLocation cmdlet: RTCUniversalServerAdmins.

Below Content Applies To: Lync Server 2013

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Lync Server, a service control point is created that provides location information for the Central Management store used to maintain Lync Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Lync Server an SCP that for the Central Management store is automatically created for you.
If you need to move that database to another computer or if you need to move that database to a different instance of SQL Server, then you will need to update the corresponding service control point.
That's a task that can be carried out by using the Set-CsConfigurationStoreLocation cmdlet.
When you run this cmdlet, Set-CsConfigurationStoreLocation searches Active Directory for the computer specified by the SqlServer parameter.
The cmdlet then sets the store location to the FQDN of that computer.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsConfigurationStoreLocation cmdlet: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Server 2015

Active Directory Domain Services uses service control points (SCP) to help computers locate services.
For example, when you install Skype for Business Server 2015, a service control point is created that provides location information for the Central Management store used to maintain Skype for Business Server 2015 data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Skype for Business Server 2015 an SCP that for the Central Management store is automatically created for you.
If you need to move that database to another computer or if you need to move that database to a different instance of SQL Server, then you will need to update the corresponding service control point.
That's a task that can be carried out by using the Set-CsConfigurationStoreLocation cmdlet.
When you run it, the Set-CsConfigurationStoreLocation cmdlet searches Active Directory for the computer specified by the SqlServer parameter.
The cmdlet then sets the store location to the FQDN of that computer.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc
```

The command shown in Example 1 sets the Active Directory service control point for the Lync Server Central Management store.
In this example, the SCP points to the computer atl-sql-001.litwareinc.com and to the SQL Server instance Rtc.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 sets the Active Directory service control point for the Lync Server Central Management store.
In this example, the SCP points to the computer atl-sql-001.litwareinc.com and to the SQL Server instance Rtc.

Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 sets the Active Directory service control point for the Skype for Business Server 2015 Central Management store.
In this example, the SCP points to the computer atl-sql-001.litwareinc.com and to the SQL Server instance Rtc.

Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc -Report C:\Logs\Store_Location.html
```

The command shown in Example 2 is a variation of the command shown in Example 1.
This command also sets the Active Directory SCP for the Lync Server Central Management store.
In addition, information regarding the success (or failure) of this operation is logged to the file C:\Logs\Store_Location.html.
This log is generated by including the Report parameter followed by the full path to the log file.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
This command also sets the Active Directory SCP for the Lync Server Central Management store.
In addition, information regarding the success (or failure) of this operation is logged to the file C:\Logs\Store_Location.html.
This log is generated by including the Report parameter followed by the full path to the log file.

Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc -Report C:\Logs\Store_Location.html

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
This command also sets the Active Directory SCP for the Skype for Business Server 2015 Central Management store.
In addition, information regarding the success (or failure) of this operation is logged to the file C:\Logs\Store_Location.html.
This log is generated by including the Report parameter followed by the full path to the log file.

Set-CsConfigurationStoreLocation -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName Rtc -Report C:\Logs\Store_Location.html

## PARAMETERS

### -SqlServerFqdn
Fully qualified domain name (FQDN) of the computer where the Central Management store has been installed.
For example: -SqlServer atl-sql-001.litwareinc.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
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

### -SqlInstanceName
Below Content Applies To: Lync Server 2010, Lync Server 2013

Name of the SQL Server instance containing the Lync Server tables and data.
For example: -SqlInstanceName "rtc".



Below Content Applies To: Skype for Business Server 2015

Name of the SQL Server instance containing the Skype for Business Server 2015 tables and data.
For example: -SqlInstanceName "rtc".



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

### -SkipLookup
Below Content Applies To: Lync Server 2010, Lync Server 2013

If this parameter is included then Set-CsConfigurationStoreLocation will not verify that the specified computer and the specified instance of SQL Server are available.
Instead, it will simply change the service control point.

If this parameter is not included then both the specified computer and the specified instance of SQL Server must be available before the SCP will be changed.



Below Content Applies To: Skype for Business Server 2015

If this parameter is included then the Set-CsConfigurationStoreLocation cmdlet will not verify that the specified computer and the specified instance of SQL Server are available.
Instead, it will simply change the service control point.

If this parameter is not included then both the specified computer and the specified instance of SQL Server must be available before the SCP will be changed.



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

### -MirrorSqlInstanceName
Below Content Applies To: Lync Server 2013

Name of the SQL Server instance containing the Lync Server mirror database tables and data.
For example: -SqlInstanceName "rtc".



Below Content Applies To: Skype for Business Server 2015

Name of the SQL Server instance containing the Skype for Business Server 2015 mirror database tables and data.
For example: -SqlInstanceName "rtc".



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MirrorSqlServerFqdn
Fully qualified domain name (FQDN) of the computer where the Central Management store mirror database has been installed.
For example: -SqlServer atl-mirror-001.litwareinc.com.

```yaml
Type: Fqdn
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
Set-CsConfigurationStoreLocation does not accept pipelined input.

###  
None.
The Set-CsConfigurationStoreLocation cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsConfigurationStoreLocation does not return any objects or values.

###  
The Set-CsConfigurationStoreLocation cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1c69a872-8e78-4c78-ba27-f20f04dce59f(OCS.14).aspx)

[Get-CsConfigurationStoreLocation]()

[Remove-CsConfigurationStoreLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/1c69a872-8e78-4c78-ba27-f20f04dce59f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1c69a872-8e78-4c78-ba27-f20f04dce59f(OCS.16).aspx)

