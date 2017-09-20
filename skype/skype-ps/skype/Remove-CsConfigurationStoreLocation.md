---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConfigurationStoreLocation

## SYNOPSIS
Removes the Active Directory service control point for the Central Management store.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsConfigurationStoreLocation [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Active Directory Domain Services uses service control points (SCP) to help computers locate services.
For example, when you install Skype for Business Server, an SCP is created that provides location information for the Central Management store used to maintain Skype for Business Server data.
Computers that need access to the database connect to Active Directory and use the information contained in the SCP to help them locate the correct computer and the correct instance of SQL Server.

As noted, when you install Skype for Business Server, an SCP for the Central Management store is automatically created for you.
Typically, you do not want to delete that SCP; if you do, computers will not be able to locate the database.
However, there might be times (perhaps when troubleshooting a problem) when you will need to delete the SCP.
To do that, use the `Remove-CsConfigurationStoreLocation` cmdlet.
After the SCP has been deleted, you can recreate it (or create a new service control point) by using the `Set-CsConfigurationStoreLocation` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsConfigurationStoreLocation
```

The command shown in Example 1 removes the Active Directory service control point for the Central Management store.
To restore this SCP (or to create a new SCP), you must run the `Set-CsConfigurationStoreLocation` cmdlet.


### -------------------------- Example 2 ------------------------
```
Remove-CsConfigurationStoreLocation -Report C:\Logs\Store_Location.html
```

Example 2 also removes the Active Directory service control point for the Central Management store.
In addition to deleting the SCP, this command records information about the success (or failure) of the operation to the log file C:\Logs\Store_Location.html.
To create this log file, the command uses the Report parameter followed by the path to the log file where information should be recorded.
If this file already exists, the contents will be overwritten when the command runs.
If the file does not exist, it will be created when the command runs.


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
For example: `-Report "C:\Logs\ConfigurationStore.html"`

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
The `Remove-CsConfigurationStoreLocation` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Remove-CsConfigurationStoreLocation` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Get-CsConfigurationStoreLocation]()

[Set-CsConfigurationStoreLocation]()
