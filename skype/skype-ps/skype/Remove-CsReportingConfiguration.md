---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsReportingConfiguration

## SYNOPSIS
Removes an existing collection of reporting configuration settings.
Reporting configuration settings are used to specify the URL for installations of Skype for Business Server Monitoring Reports.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsReportingConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Reporting configuration settings are used to specify the home page for the Skype for Business Server Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsReportingConfiguration` cmdlet are not available in the Skype for Business Server.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsReportingConfiguration -Identity "service:MonitoringDatabase:atl-sql-002.litwareinc.com"
```

In Example 1, the reporting configuration settings with the Identity service:MonitoringDatabase:atl-sql-002.litwareinc.com are removed.


### -------------------------- Example 2 --------------------------
```
Get-CsReportingConfiguration | Remove-CsReportingConfiguration
```

In Example 2, all the reporting configuration settings currently in use in the organization are removed.
To do this, the command first uses the `Get-CsReportingConfiguration` cmdlet to return a collection of all the reporting configuration settings.
This collection is then piped to the `Remove-CsReportingConfiguration` cmdlet, which removes each item in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -eq "https://atl-sql-002.litwareinc.com/lync_reports" | Remove-CsReportingConfiguration
```

The command shown in Example 3 deletes any reporting configuration settings where the reporting URL is set to https://atl-sql-002.litwareinc.com/lync_reports.
To carry out this task, the command first uses the `Get-CsReportingConfiguration` cmdlet to return all the reporting configuration settings currently in use.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the ReportingURL property is equal to https://atl-sql-002.litwareinc.com/lync_reports.
That filtered collection is then piped to the `Remove-CsReportingConfiguration` cmdlet, which removes each item in the collection.


## PARAMETERS

### -Identity
Service Identity of the monitoring database whose reporting configuration settings are to be removed.
For example:

`-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Remove-CsReportingConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsReportingConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsReportingConfiguration]()

[New-CsReportingConfiguration]()

[Set-CsReportingConfiguration]()
