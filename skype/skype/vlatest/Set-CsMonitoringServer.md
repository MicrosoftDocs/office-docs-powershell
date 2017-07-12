---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsMonitoringServer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to configure new locations for the Monitoring Server database and reporting pack.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to configure new locations for the Monitoring Server database and reporting pack.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsMonitoringServer [[-Identity] <XdsGlobalRelativeIdentity>] [-MonitoringDatabase <String>]
 [-ReportingUrl <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Monitoring Server provides you with two important capabilities.
For one, it enables you to maintain information about how, and how often, Enterprise Voice is used in your organization.
This information is tracked by using call detail recording (CDR), which records such things as who made a call, who that person called, and how long the call lasted.
(The actual conversation itself is not recorded.) In addition to that, you can also use Monitoring Server to keep track of Quality of Experience (QoE) data for your Enterprise Voice calls.
As the name implies, Quality of Experience data provides information about the quality of a call, measuring such items as packet loss, call degradation, network bitrate, and jitter.

When you install Monitoring Server you must specify the location of the SQL Server database used to store CDR and QoE data.
Optionally, you can also install SQL Server Reporting Services and the Monitoring Server Report Pack; these two items enable you to access a website that generates standard monitoring reports for you.

As a general rule, after Monitoring Server has been installed and configured you will not need to change the location of either the back-end database or the reporting URL.
However, if you do need to change the location of one (or both) of these items, you can do so by running the Set-CsMonitoringServer cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsMonitoringServer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsMonitoringServer"}

**Below Content Applies To:** Skype for Business Server 2015

Monitoring Server provides you with two important capabilities.
For one, it enables you to maintain information about how, and how often, Enterprise Voice is used in your organization.
This information is tracked by using call detail recording (CDR), which records such things as who made a call, who that person called, and how long the call lasted.
(The actual conversation itself is not recorded.) In addition to that, you can also use Monitoring Server to keep track of Quality of Experience (QoE) data for your Enterprise Voice calls.
As the name implies, Quality of Experience data provides information about the quality of a call, measuring such items as packet loss, call degradation, network bitrate, and jitter.

When you install Monitoring Server you must specify the location of the SQL Server database used to store CDR and QoE data.
Optionally, you can also install SQL Server Reporting Services and the Monitoring Server Report Pack; these two items enable you to access a website that generates standard monitoring reports for you.

As a general rule, after Monitoring Server has been installed and configured you will not need to change the location of either the back-end database or the reporting URL.
However, if you do need to change the location of one (or both) of these items, you can do so by running the Set-CsMonitoringServer cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsMonitoringServer -Identity "MonitoringServer:atl-cs-001.litwareinc.com" -ReportingUrl "https://atl-cs-001.litwareinc.com/reports"
```

The command shown in Example 1 configures a new URL for the Monitoring Server reporting pack.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 configures a new URL for the Monitoring Server reporting pack.

Set-CsMonitoringServer -Identity "MonitoringServer:atl-cs-001.litwareinc.com" -ReportingUrl "https://atl-cs-001.litwareinc.com/reports"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 configures a new URL for the Monitoring Server reporting pack.

Set-CsMonitoringServer -Identity "MonitoringServer:atl-cs-001.litwareinc.com" -ReportingUrl "https://atl-cs-001.litwareinc.com/reports"

## PARAMETERS

### -Identity
Service location of the Monitoring Server to be modified.
For example: -Identity "MonitoringServer:atl-cs-001.litwareinc.com".
You can retrieve the Identity for all of your Monitoring Servers by using this command:

Get-CsService -MonitoringServer | Select-Object Identity.

Note that you can leave off the prefix "MonitoringServer:" when specifying a Monitoring Server.
For example: -Identity "atl-cs-001.litwareinc.com".

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringDatabase
Service location for the new Monitoring Server database.
For example: -MonitoringDatabase "MonitoringDatabase:atl-sql-001.litwareinc.com".
Make sure you use the service location of the database store and not the SQL Server path name.

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

### -ReportingUrl
URL for the Monitoring Server reports.
Note that these reports will not be available unless you install SQL Server Reporting Services and the Monitoring Server Report Pack.

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
Set-CsMonitoringServer does not accept pipelined input.

###  
None.
The Set-CsMonitoringServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsMonitoringServer does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayMonitoringServer object.

###  
The Set-CsMonitoringServer cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayMonitoringServer object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2c6d6660-7e41-4c56-9e04-27c3d1ea3b95(OCS.14).aspx)

[Get-CsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/2c6d6660-7e41-4c56-9e04-27c3d1ea3b95(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2c6d6660-7e41-4c56-9e04-27c3d1ea3b95(OCS.16).aspx)

