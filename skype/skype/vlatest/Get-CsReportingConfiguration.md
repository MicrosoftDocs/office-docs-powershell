---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsReportingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the reporting configuration settings in use in the organization.
Reporting configuration settings are used to specify the URL used for accessing Microsoft Lync Server 2013 Preview Monitoring Reports.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the reporting configuration settings in use in the organization.
Reporting configuration settings are used to specify the URL used for accessing Skype for Business Server 2015 Monitoring Reports.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsReportingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsReportingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Reporting configuration settings are used to specify the home page for the Microsoft Lync Server 2013 Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsReportingConfiguration

Lync Server Control Panel: The functions carried out by the Get-CsReportingConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Reporting configuration settings are used to specify the home page for the Skype for Business Server 2015 Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Get-CsReportingConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information for all the reporting configuration settings currently in use in the organization.

Get-CsReportingConfiguration

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information for all the reporting configuration settings currently in use in the organization.

Get-CsReportingConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a single collection of reporting configuration settings: the settings with the Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com".

Get-CsReportingConfiguration -Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single collection of reporting configuration settings: the settings with the Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com".

Get-CsReportingConfiguration -Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the reporting configuration settings that have an Identity that ends in ".litwareinc.com".
To do this, the command uses the Filter parameter and the filter value "*.litwareinc.com".

Get-CsReportingConfiguration -Filter "*.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the reporting configuration settings that have an Identity that ends in ".litwareinc.com".
To do this, the command uses the Filter parameter and the filter value "*.litwareinc.com".

Get-CsReportingConfiguration -Filter "*.litwareinc.com"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information for all the reporting configuration settings that include the string value "_ARCHINST" somewhere in their reporting URL.
To do this the command first uses Get-CsReportingConfiguration to return a collection of all the reporting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the ReportingUrl includes (-like) the string value "_ARCHINST".

Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -like "*_ARCHINST*"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information for all the reporting configuration settings that include the string value "_ARCHINST" somewhere in their reporting URL.
To do this the command first uses the Get-CsReportingConfiguration cmdlet to return a collection of all the reporting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the ReportingUrl includes (-like) the string value "_ARCHINST".

Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -like "*_ARCHINST*"}

## PARAMETERS

### -Filter
Enables you to use wildcard characters when specifying the reporting configuration settings to be returned.
For example, this syntax returns all the settings configured at the service scope:

-Filter "service:*"

Note that you cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Service Identity of the monitoring database associated with the reporting configuration settings.
For example:

-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"

If you do not include either the Identity parameter or the Filter parameter in your command, then Get-CsReportingConfiguration will return all the reporting configuration settings in use in your organization.



**Below Content Applies To:** Skype for Business Server 2015

Service Identity of the monitoring database associated with the reporting configuration settings.
For example:

-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"

If you do not include either the Identity parameter or the Filter parameter in your command, then the Get-CsReportingConfiguration cmdlet will return all the reporting configuration settings in use in your organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the reporting configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
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
Get-CsReportingConfiguration does not accept pipelined input.

###  
None.
The Get-CsReportingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsReportingConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

###  
The Get-CsReportingConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## NOTES

## RELATED LINKS

[New-CsReportingConfiguration]()

[Remove-CsReportingConfiguration]()

[Set-CsReportingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/e777a154-354a-49da-8140-79f80416bc49(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e777a154-354a-49da-8140-79f80416bc49(OCS.16).aspx)

