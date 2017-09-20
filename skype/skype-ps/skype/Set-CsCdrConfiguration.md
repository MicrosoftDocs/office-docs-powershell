---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsCdrConfiguration
schema: 2.0.0
---

# Set-CsCdrConfiguration

## SYNOPSIS
Modifies an existing collection of call detail recording (CDR) settings.
CDR enables you to track usage of such things as peer-to-peer instant messaging sessions, Voice over Internet Protocol (VoIP) phone calls and conferencing calls.
This usage data includes information about who called whom, when they called and how long they talked.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsCdrConfiguration [[-Identity] <XdsIdentity>] [-EnableCDR <Boolean>] [-EnablePurging <Boolean>]
 [-KeepCallDetailForDays <UInt32>] [-KeepErrorReportForDays <UInt32>] [-PurgeHourOfDay <UInt32>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsCdrConfiguration [-Instance <PSObject>] [-EnableCDR <Boolean>] [-EnablePurging <Boolean>]
 [-KeepCallDetailForDays <UInt32>] [-KeepErrorReportForDays <UInt32>] [-PurgeHourOfDay <UInt32>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Call detail recording (CDR) provides a way for you to track usage of Skype for Business Server capabilities such as Voice over Internet Protocol (VoIP) phone calls; instant messaging (IM); file transfers; audio/video (A/V) conferencing and application sharing sessions.
CDR (which is available only if you have deployed the Monitoring service) keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.
However, CDR does not make a recording of the call itself.

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

As an administrator, you can determine whether or not CDR is used in your organization; assuming that the Monitoring Service has been deployed, you can easily enable or disable CDR.
In addition, you can make this decision globally (in which case CDR will either be enabled or disabled throughout the organization) or on a site-by-site basis.
For example, you could use CDR in the Redmond site but not use CDR in the Paris site.

Administrators can also manage the CDR database; for example, you can specify the number of days CDR records are maintained before they are purged from that database.
Changes such as these can be made by using the `Set-CsCdrConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsCdrConfiguration -Identity site:Redmond -PurgeHourOfDay 23
```

Example 1 sets the time of day for purging old records.
In this case the time is set to 23 (11:00 P.M. on a 24-hour clock).
The Identity parameter is used to ensure that these changes are only made to the CDR settings that have the Identity site:Redmond.


### -------------------------- Example 2 --------------------------
```
Get-CsCdrConfiguration | Set-CsCdrConfiguration -PurgeHourOfDay 23
```

Example 2 is a variation of the command shown in Example 1.
In this case, the PurgeHourOfDay property is modified for each collection of CDR configuration settings currently in use in the organization.
To do this, the command first calls the `Get-CsCdrConfiguration` cmdlet without any parameters in order to return a collection of all the CDR settings currently in use.
This collection is then piped to the `Set-CsCdrConfiguration` cmdlet, which takes each item in the collection and changes the value of the PurgeHourOfDay property to 11:00 PM (23).


### -------------------------- Example 3 --------------------------
```
Get-CsCdrConfiguration -Filter "site:*"| Set-CsCdrConfiguration -PurgeHourOfDay 23
```

Another variation of the command used in Example 1 is shown in Example 3.
In this example, the PurgeHourOfDay property is changed for all the CDR settings that have been configured at the site scope.
To perform this task, the command first calls the `Get-CsCdrConfiguration` cmdlet along with the Filter parameter; the filter value "site:*" ensures that only CDR settings that have an Identity that begins with the string value "site:" will be returned.
The filtered collection is then piped to the `Set-CsCdrConfiguration` cmdlet, which changes the PurgeHourOfDay property for each item in that collection.


## PARAMETERS

### -Identity
Unique identifier assigned to the collection of CDR configuration settings.
To refer to the global settings, use this syntax: `-Identity global`.
To refer to a collection configured at the site scope, use syntax similar to this: `-Identity site:Redmond`.
Note that you cannot use wildcard characters when specifying an Identity.

If this parameter is omitted then the `Set-CsCdrConfiguration` cmdlet will modify the global settings.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EnableCDR
Indicates whether or not CDR is enabled.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePurging
Indicates whether or not CDR records will periodically be deleted from the CDR database.
If True (the default value), records will be deleted after the time period specified by the properties KeepCallDetailForDays (for CDR records) and KeepErrorReportForDays (for CDR errors).
If False, CDR records will be maintained indefinitely.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepCallDetailForDays
Indicates the number of days that CDR records will be kept in the CDR database; any records older than the specified number of days will automatically be deleted.
(Note that purging will take only place if the EnablePurging property has been set to true.)

You can set this property to any integer value between 1 and 2562 days (approximately 7 years).
The default value is 60.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepErrorReportForDays
Indicates the number of days that CDR error reports are kept; any reports older than the specified number of days will automatically be deleted.
CDR error reports are diagnostic reports uploaded by client applications such as Skype for Business.

You can set this property to any integer value between 1 and 2562 days (approximately 7 years).
The default value is 60.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurgeHourOfDay
Indicates the local time of day when expired records are deleted from the CDR database.
The time of day is specified using a 24-hour clock, with 0 representing midnight (12:00 A.M.) and 23 representing 11:00 P.M.
Note that you can only specify the hour of the day; that means that you can schedule purging to take place at 4:00 A.M., but you cannot schedule it to take place at 4:30 A.M.
or 4:15 A.M..
The default value is 2 (2:00 A.M.).
It is recommended that purging take place during non-working hours.

Database purging takes place only if the EnablePurging property is set to True.

```yaml
Type: UInt32
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
Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CdrSettings.
The `Set-CsCdrConfiguration` cmdlet accepts pipelined input of call detail recording configuration objects.

## OUTPUTS

###  
The `Set-CsCdrConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CDRSettings object.

## NOTES

## RELATED LINKS

[Get-CsCdrConfiguration]()

[New-CsCdrConfiguration]()

[Remove-CsCdrConfiguration]()
