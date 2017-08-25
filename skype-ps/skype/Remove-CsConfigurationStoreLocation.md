---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConfigurationStoreLocation

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the Active Directory service control point for the Central Management store.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsConfigurationStoreLocation [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Microsoft Lync Server 2010, an SCP is created that provides location information for the Central Management store used to maintain Lync Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Lync Server, an SCP for the Central Management store is automatically created for you.
Typically, you do not want to delete that SCP; if you do, computers will not be able to locate the database.
However, there might be times (perhaps when troubleshooting a problem) when you will need to delete the SCP.
To do that, use the cmdlet Remove-CsConfigurationStoreLocation.
After the SCP has been deleted, you can recreate it (or create a new service control point) by using the Set-CsConfigurationStoreLocation cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConfigurationStoreLocation cmdlet: RTCUniversalServerAdmins.

**Below Content Applies To:** Lync Server 2013

Active Directory Domain Services (AD DS) uses service control points (SCP) to help computers locate services.
For example, when you install Lync Server, an SCP is created that provides location information for the Central Management store used to maintain Lync Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Lync Server, an SCP for the Central Management store is automatically created for you.
Typically, you do not want to delete that SCP; if you do, computers will not be able to locate the database.
However, there might be times (perhaps when troubleshooting a problem) when you will need to delete the SCP.
To do that, use the cmdlet Remove-CsConfigurationStoreLocation.
After the SCP has been deleted, you can recreate it (or create a new service control point) by using the Set-CsConfigurationStoreLocation cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConfigurationStoreLocation cmdlet: RTCUniversalServerAdmins.

**Below Content Applies To:** Skype for Business Server 2015

Active Directory Domain Services uses service control points (SCP) to help computers locate services.
For example, when you install Skype for Business Server 2015, an SCP is created that provides location information for the Central Management store used to maintain Skype for Business Server 2015 data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Skype for Business Server 2015, an SCP for the Central Management store is automatically created for you.
Typically, you do not want to delete that SCP; if you do, computers will not be able to locate the database.
However, there might be times (perhaps when troubleshooting a problem) when you will need to delete the SCP.
To do that, use the Remove-CsConfigurationStoreLocation cmdlet.
After the SCP has been deleted, you can recreate it (or create a new service control point) by using the Set-CsConfigurationStoreLocation cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsConfigurationStoreLocation
```

The command shown in Example 1 removes the Active Directory service control point for the Central Management store.
To restore this SCP (or to create a new SCP), you must run the Set-CsConfigurationStoreLocation cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the Active Directory service control point for the Central Management store.
To restore this SCP (or to create a new SCP), you must run the Set-CsConfigurationStoreLocation cmdlet.

Remove-CsConfigurationStoreLocation

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the Active Directory service control point for the Central Management store.
To restore this SCP (or to create a new SCP), you must run the Set-CsConfigurationStoreLocation cmdlet.

Remove-CsConfigurationStoreLocation

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Remove-CsConfigurationStoreLocation -Report C:\Logs\Store_Location.html
```

Example 2 also removes the Active Directory service control point for the Central Management store.
In addition to deleting the SCP, this command records information about the success (or failure) of the operation to the log file C:\Logs\Store_Location.html.
To create this log file, the command uses the Report parameter followed by the path to the log file where information should be recorded.
If this file already exists, the contents will be overwritten when the command runs.
If the file does not exist, it will be created when the command runs.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also removes the Active Directory service control point for the Central Management store.
In addition to deleting the SCP, this command records information about the success (or failure) of the operation to the log file C:\Logs\Store_Location.html.
To create this log file, the command uses the Report parameter followed by the path to the log file where information should be recorded.
If this file already exists, the contents will be overwritten when the command runs.
If the file does not exist, it will be created when the command runs.

Remove-CsConfigurationStoreLocation -Report C:\Logs\Store_Location.html

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also removes the Active Directory service control point for the Central Management store.
In addition to deleting the SCP, this command records information about the success (or failure) of the operation to the log file C:\Logs\Store_Location.html.
To create this log file, the command uses the Report parameter followed by the path to the log file where information should be recorded.
If this file already exists, the contents will be overwritten when the command runs.
If the file does not exist, it will be created when the command runs.

Remove-CsConfigurationStoreLocation -Report C:\Logs\Store_Location.html

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Remove-CsConfigurationStoreLocation does not accept pipelined input.

###  
None.
The Remove-CsConfigurationStoreLocation cmdlet does not accept pipelined input.

## OUTPUTS

###  
Remove-CsConfigurationStoreLocation does not return any objects or values.

###  
The Remove-CsConfigurationStoreLocation cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/141be225-c6e4-4377-913b-ba61528929d4(OCS.14).aspx)

[Get-CsConfigurationStoreLocation]()

[Set-CsConfigurationStoreLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/141be225-c6e4-4377-913b-ba61528929d4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/141be225-c6e4-4377-913b-ba61528929d4(OCS.16).aspx)

