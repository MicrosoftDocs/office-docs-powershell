---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsReportingConfiguration
schema: 2.0.0
---

# Set-CsReportingConfiguration

## SYNOPSIS
Modifies the reporting URL for an existing collection of reporting configuration settings.
Reporting configuration settings are used to specify the URL used to access Skype for Business Server Monitoring Reports.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsReportingConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-ReportingUrl <String>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsReportingConfiguration [-Confirm] [-Force] [-Instance <PSObject>] [-ReportingUrl <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Reporting configuration settings are used to specify the home page for the Skype for Business Server Monitoring Reports; if you are not using Monitoring Reports then there is no reason for you to modify the reporting configuration settings.

If you do not know the URL for the Monitoring Reports home page you can determine that URL by doing the following:

Open the SQL Server Reporting Services Configuration Manager for the SQL Server instance that contains your monitoring database.

In the Configuration Manager, click Report Manager URL and then click the URL for your Monitoring Reports.
If you see two URLs, click the one that uses the https protocol.

In SQL Server Reporting Services, click LyncServerReports.

On the LyncServerReports page, click Reports Home Page.
That will take you to the home page for the Monitoring Reports.
You can then copy the URL and use that URL in conjunction with the CsReportingConfiguration cmdlets.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsReportingConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsReportingConfiguration -Identity "service:MonitoringDatabase:atl-sql-002.litwareinc.com" -ReportingURL "https://atl-sql-002.litwareinc.com/lync_reports"
```

The command shown in Example 1 modifies the reporting URL for the reporting configuration settings with the Identity service:MonitoringDatabase:atl-sql-002.litwareinc.com.
In this example, the reporting URL is changed to "https://atl-sql-002.litwareinc.com/lync_reports".


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Service Identity of the monitoring database whose reporting configuration settings are being modified.
For example:

`-Identity "Service:MonitoringDatabase:atl-sql-001.litwareinc.com"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ReportingUrl
URL for the Skype for Business Server Monitoring Reports.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsReportingConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## OUTPUTS

###  
None.
Instead, the `Set-CsReportingConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Reporting.ReportingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsReportingConfiguration](Get-CsReportingConfiguration.md)

[New-CsReportingConfiguration](New-CsReportingConfiguration.md)

[Remove-CsReportingConfiguration](Remove-CsReportingConfiguration.md)

