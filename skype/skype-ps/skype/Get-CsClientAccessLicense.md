---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClientAccessLicense
schema: 2.0.0
---

# Get-CsClientAccessLicense

## SYNOPSIS
Returns information about client license usage in your organization.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### LicenseSet
```
Get-CsClientAccessLicense [-License] [<CommonParameters>]
```

### DefaultSet
```
Get-CsClientAccessLicense -LicenseBasedType <String> -LicenseName <String> -MonitoringDatabase <String>
 -StartDate <DateTime> [-DailyUsage] [-EndDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsClientAccessLicense cmdlet enables administrators to monitor use of their Skype for Business Server client licenses; this is done by showing client license usage (based on user registrations) during a specified period of time.
Note that the cmdlet does not manage your client licenses for you; for example, it will not tell you that you need additional licenses.
Instead, the cmdlet simply returns information about the number of licenses that were in use during the specified time period.

You cannot use the Get-CsClientAccessLicense cmdlet unless you have enabled the Monitoring Service and call detail recording; that's because registration information is stored in the call detail recording database.
Note, too that, as the name suggests, the Get-CsClientAccessLicense cmdlet only returns only returns information about your client licenses.
If you need information about your server licenses, you can use the Get-CsService cmdlet to return the fully qualified domain names (FQDN) of all your Skype for Business Server databases.
If the FQDN of a front End server matches the FQDN of a backend database that means you have a Standard license.
If the two FQDNs do not match then that means that you have an Enterprise license.

You might also encounter instances when the Get-CsClientAccessLicense cmdlet returns incorrect license counts.
For example:

* Licenses can be overcounted if a mobile user logs on from more than one location using a desktop client.
* Licenses can be undercounted if a user connects with a mobile client, because the IP address for the device cannot be determined. In addition, licenses can be overcounted if the mobile device changes its IP address during a session.
* Licenses can be counted twice for PSTN calls to a Skype for Business client or for a call from a Skype for Business client to a PSTN phone. This is due to the fact that both the Skype for Business user account and the PSTN phone number are used when determining the number of licenses employed in the session.
* Licenses for Skype for Business phones might not be counted if the phone was logged on to the system before you ran the license usage query.
* If a user joins a conference using a PSTN phone, a single license usage will be recorded for that call. However, no license is actually required to join a conference using a PSTN phone.

The functions carried out by the Get-CsClientAccessLicense cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClientAccessLicense -MonitoringDatabase "atl-sql-001\Archinst" -LicenseName "Standard" -LicenseBasedType "UserBased" -StartDate "6/1/2018"
```

The command shown in Example 1 returns Standard license usage for user-based licenses as recorded in the monitoring database atl-sql-001\Archinst.
License usage information will be returned for the time period beginning on June 1, 2018 (6/1/2018) and continuing through the current date.


## PARAMETERS

### -License
Returns the available license names.
This parameter cannot be used with any other parameters; this is the only valid syntax:

`Get-CsClientAccessLicense -License`

```yaml
Type: SwitchParameter
Parameter Sets: LicenseSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LicenseBasedType
Indicates whether the license is UserBased or DeviceBased.
With UserBased licenses, each user who accesses Skype for Business Server is required to have a client access license, regardless of the number of devices he or she uses to access Skype for Business Server.
With DeviceBased licenses, each device used to access Skype for Business Server requires a separate license.

User-based licensing is typically recommended for users who are not always on site, and who might access Skype for Business Server using any number of different devices.
Device-based licensing is aimed at on-site users who typically access Skype for Business Server only through shared devices (such as their desktop computer).

```yaml
Type: String
Parameter Sets: DefaultSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LicenseName
Indicates the kind of license being retrieved.
Valid values are:

* Standard
* Enterprise
* Plus

```yaml
Type: String
Parameter Sets: DefaultSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringDatabase
SQL Server instance for the monitoring database.
This is typically specified by using the fully qualified domain name of the SQL Server computer and SQL Server instance of the monitoring database.
For example:

`-MonitoringDatabase "atl-sql-001.litwareinc.com\archinst"`

If the monitoring database is in the default SQL Server instance then you only need to specify the FQDN of the computer running SQL Server:

`-MonitoringDatabase "atl-sql-001.litwareinc.com"`

```yaml
Type: String
Parameter Sets: DefaultSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Beginning date for the time period for which client license usage should be checked.
For example, using the US English format the StartDate parameter might look like this:

`-StartDate "1/1/2018"`

The StartDate must be earlier than the EndDate.

```yaml
Type: DateTime
Parameter Sets: DefaultSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DailyUsage
If specified, license usage is broken down on a day-by-day basis for the specified time period.
If not specified, then license usage is summarized for the specified time period.

```yaml
Type: SwitchParameter
Parameter Sets: DefaultSet
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
Ending date for the time period for which client license usage should be checked.
For example:

`-EndDate "2/1/2018"`

The EndDate must be later than the StartDate.
Note that the end date does not appear in the output when you call the Get-CsClientAccessLicense cmdlet.

```yaml
Type: DateTime
Parameter Sets: DefaultSet
Aliases: 
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

### None


## OUTPUTS

### 
The Get-CsClientAccessLicense cmdlet returns licensing information.


## NOTES


## RELATED LINKS

[Get-CsUser](Get-CsUser.md)

