---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsReportingConfiguration
schema: 2.0.0
---

# Get-CsReportingConfiguration

## SYNOPSIS
Returns information about the reporting configuration settings in use in the organization.
Reporting configuration settings are used to specify the URL used for accessing Skype for Business Server Monitoring Reports.
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
Reporting configuration settings are used to specify the home page for the Skype for Business Server Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

The functions carried out by the Get-CsReportingConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsReportingConfiguration
```

The command shown in Example 1 returns information for all the reporting configuration settings currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsReportingConfiguration -Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"
```

In Example 2, information is returned for a single collection of reporting configuration settings: the settings with the Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com".

### -------------------------- Example 3 --------------------------
```
Get-CsReportingConfiguration -Filter "*.litwareinc.com"
```

In Example 3, information is returned for all the reporting configuration settings that have an Identity that ends in ".litwareinc.com".
To do this, the command uses the Filter parameter and the filter value "*.litwareinc.com".

### -------------------------- Example 4 --------------------------
```
Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -like "*_ARCHINST*"}
```

Example 4 returns information for all the reporting configuration settings that include the string value "_ARCHINST" somewhere in their reporting URL.
To do this the command first uses the Get-CsReportingConfiguration cmdlet to return a collection of all the reporting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the ReportingUrl includes (-like) the string value "_ARCHINST".


## PARAMETERS

### -Filter
Enables you to use wildcard characters when specifying the reporting configuration settings to be returned.
For example, this syntax returns all the settings configured at the service scope:

`-Filter "service:*"`

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
Service Identity of the monitoring database associated with the reporting configuration settings.
For example:

`-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"`

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration


## NOTES


## RELATED LINKS

[New-CsReportingConfiguration](New-CsReportingConfiguration.md)

[Remove-CsReportingConfiguration](Remove-CsReportingConfiguration.md)

[Set-CsReportingConfiguration](Set-CsReportingConfiguration.md)
