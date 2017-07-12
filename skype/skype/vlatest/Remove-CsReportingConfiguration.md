---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsReportingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes an existing collection of reporting configuration settings.
Reporting configuration settings are used to specify the URL for installations of Microsoft Lync Server 2013 Preview Monitoring Reports.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing collection of reporting configuration settings.
Reporting configuration settings are used to specify the URL for installations of Skype for Business Server 2015 Monitoring Reports.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsReportingConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Reporting configuration settings are used to specify the home page for the Microsoft Lync Server 2013 Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsReportingConfiguration"}

Lync Server Control Panel: The functions carried out by the Remove-CsReportingConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Reporting configuration settings are used to specify the home page for the Skype for Business Server 2015 Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsReportingConfiguration cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the reporting configuration settings with the Identity service:MonitoringDatabase:atl-sql-002.litwareinc.com are removed.

Remove-CsReportingConfiguration -Identity "service:MonitoringDatabase:atl-sql-002.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the reporting configuration settings with the Identity service:MonitoringDatabase:atl-sql-002.litwareinc.com are removed.

Remove-CsReportingConfiguration -Identity "service:MonitoringDatabase:atl-sql-002.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the reporting configuration settings currently in use in the organization are removed.
To do this, the command first uses the Get-CsReportingConfiguration cmdlet to return a collection of all the reporting configuration settings.
This collection is then piped to Remove-CsReportingConfiguration, which removes each item in the collection.

Get-CsReportingConfiguration | Remove-CsReportingConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the reporting configuration settings currently in use in the organization are removed.
To do this, the command first uses the Get-CsReportingConfiguration cmdlet to return a collection of all the reporting configuration settings.
This collection is then piped to the Remove-CsReportingConfiguration cmdlet, which removes each item in the collection.

Get-CsReportingConfiguration | Remove-CsReportingConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 deletes any reporting configuration settings where the reporting URL is set to https://atl-sql-002.litwareinc.com/lync_reports.
To carry out this task, the command first uses Get-CsReportingConfiguration to return all the reporting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the ReportingURL property is equal to https://atl-sql-002.litwareinc.com/lync_reports.
That filtered collection is then piped to Remove-CsReportingConfiguration, which removes each item in the collection.

Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -eq "https://atl-sql-002.litwareinc.com/lync_reports" | Remove-CsReportingConfiguration

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 deletes any reporting configuration settings where the reporting URL is set to https://atl-sql-002.litwareinc.com/lync_reports.
To carry out this task, the command first uses the Get-CsReportingConfiguration cmdlet to return all the reporting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the ReportingURL property is equal to https://atl-sql-002.litwareinc.com/lync_reports.
That filtered collection is then piped to the Remove-CsReportingConfiguration cmdlet, which removes each item in the collection.

Get-CsReportingConfiguration | Where-Object {$_.ReportingUrl -eq "https://atl-sql-002.litwareinc.com/lync_reports" | Remove-CsReportingConfiguration

## PARAMETERS

### -Identity
Service Identity of the monitoring database whose reporting configuration settings are to be removed.
For example:

-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"

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
Remove-CsReportingConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

###  
The Remove-CsReportingConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## OUTPUTS

###  
None.
Instead, Remove-CsReportingConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

###  
None.
Instead, the Remove-CsReportingConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsReportingConfiguration]()

[New-CsReportingConfiguration]()

[Set-CsReportingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/17cc1865-4bd9-4630-9947-2c432d1203b3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/17cc1865-4bd9-4630-9947-2c432d1203b3(OCS.16).aspx)

