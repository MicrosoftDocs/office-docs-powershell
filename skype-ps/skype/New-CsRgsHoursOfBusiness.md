---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRgsHoursOfBusiness

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new set of Response Group application business hours.
Business hour sets are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new set of Response Group application business hours.
Business hour sets are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsHoursOfBusiness [-Parent] <RgsIdentity> -Name <String> [-Custom <Boolean>] [-MondayHours1 <TimeRange>]
 [-MondayHours2 <TimeRange>] [-TuesdayHours1 <TimeRange>] [-TuesdayHours2 <TimeRange>]
 [-WednesdayHours1 <TimeRange>] [-WednesdayHours2 <TimeRange>] [-ThursdayHours1 <TimeRange>]
 [-ThursdayHours2 <TimeRange>] [-FridayHours1 <TimeRange>] [-FridayHours2 <TimeRange>]
 [-SaturdayHours1 <TimeRange>] [-SaturdayHours2 <TimeRange>] [-SundayHours1 <TimeRange>]
 [-SundayHours2 <TimeRange>] [-InMemory] [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets are created by using the New-CsRgsHoursOfBusiness cmdlet.
When configuring business hours within a business hour set, keep in mind that each day of the week has both an Hours1 and an Hours2 property.
If your help desk is open from 8:00 A.M to 5:00 P.M., you only need to assign values to the appropriate Hours1 property.
However, suppose the help desk is open from 8:00 A.M.
to 2:00 P.M., then open again from 5:00 P.M.
until 11:00 P.M..
In that case you need to assign the time range 8:00 A.M.
to 2:00 P.M.
to Hours1 and 5:00 P.M.
to 11:00 P.M.
to Hours2.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Lync Server 2013

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets are created by using the New-CsRgsHoursOfBusiness cmdlet.
When configuring business hours within a business hour set, keep in mind that each day of the week has both an Hours1 and an Hours2 property.
If your help desk is open from 8:00 A.M to 5:00 P.M., you only need to assign values to the appropriate Hours1 property.
However, suppose the help desk is open from 8:00 A.M.
to 2:00 P.M., then open again from 5:00 P.M.
until 11:00 P.M..
In that case you need to assign the time range 8:00 A.M.
to 2:00 P.M.
to Hours1 and 5:00 P.M.
to 11:00 P.M.
to Hours2.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Skype for Business Server 2015

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets are created by using the New-CsRgsHoursOfBusiness cmdlet.
When configuring business hours within a business hour set, keep in mind that each day of the week has both an Hours1 and an Hours2 property.
If your help desk is open from 8:00 A.M to 5:00 P.M., you only need to assign values to the appropriate Hours1 property.
However, suppose the help desk is open from 8:00 A.M.
to 2:00 P.M., then open again from 5:00 P.M.
until 11:00 P.M..
In that case you need to assign the time range 8:00 A.M.
to 2:00 P.M.
to Hours1 and 5:00 P.M.
to 11:00 P.M.
to Hours2.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"
```

The command shown in Example 1 creates a new business hours set named Help Desk Business Hours on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, no business hours are configured for the set.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new business hours set named Help Desk Business Hours on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, no business hours are configured for the set.

New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new business hours set named Help Desk Business Hours on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, no business hours are configured for the set.

New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$weekday = New-CsRgsTimeRange -Name "Weekday Hours" -OpenTime "8:00" -CloseTime "18:00" 

New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" -MondayHours1 $weekday -TuesdayHours1 $weekday -WednesdayHours1 $weekday -ThursdayHours1 $weekday -FridayHours1 $weekday
```

In Example 2, a new business hours set named Help Desk Business Hours is created on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, business hours are configured for each day of the week, Monday through Friday.
To do this, the first command in the example uses the New-CsRgsTimeRange command to create a time range with an OpenTime of 8:00 AM (8:00) and a CloseTime of 6:00 PM (18:00).
This time range is stored in a variable named $weekday.

The second command in the example then creates the new business hours set.
In addition to specifying the set's Parent and Name, additional parameters (such as MondayHours1) are used to configure business hours for the weekdays Monday through Friday.
In each case, those business hours are set to 8:00 A.M.
to 6:00 P.M., and by using the time range variable $weekday.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, a new business hours set named Help Desk Business Hours is created on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, business hours are configured for each day of the week, Monday through Friday.
To do this, the first command in the example uses the New-CsRgsTimeRange command to create a time range with an OpenTime of 8:00 AM (8:00) and a CloseTime of 6:00 PM (18:00).
This time range is stored in a variable named $weekday.

The second command in the example then creates the new business hours set.
In addition to specifying the set's Parent and Name, additional parameters (such as MondayHours1) are used to configure business hours for the weekdays Monday through Friday.
In each case, those business hours are set to 8:00 A.M.
to 6:00 P.M., and by using the time range variable $weekday.

$weekday = New-CsRgsTimeRange -Name "Weekday Hours" -OpenTime "8:00" -CloseTime "18:00"

New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" -MondayHours1 $weekday -TuesdayHours1 $weekday -WednesdayHours1 $weekday -ThursdayHours1 $weekday -FridayHours1 $weekday

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, a new business hours set named Help Desk Business Hours is created on ApplicationServer:atl-cs-001.litwareinc.com.
In this example, business hours are configured for each day of the week, Monday through Friday.
To do this, the first command in the example uses the New-CsRgsTimeRange command to create a time range with an OpenTime of 8:00 AM (8:00) and a CloseTime of 6:00 PM (18:00).
This time range is stored in a variable named $weekday.

The second command in the example then creates the new business hours set.
In addition to specifying the set's Parent and Name, additional parameters (such as MondayHours1) are used to configure business hours for the weekdays Monday through Friday.
In each case, those business hours are set to 8:00 A.M.
to 6:00 P.M., and by using the time range variable $weekday.

$weekday = New-CsRgsTimeRange -Name "Weekday Hours" -OpenTime "8:00" -CloseTime "18:00"

New-CsRgsHoursOfBusiness -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" -MondayHours1 $weekday -TuesdayHours1 $weekday -WednesdayHours1 $weekday -ThursdayHours1 $weekday -FridayHours1 $weekday

## PARAMETERS

### -Name
Unique name to be assigned to the business hours set.
The combination of the Parent property and the Name property enables you to uniquely identify business hour sets without having to refer to the collection's globally unique identifier (GUID).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Service where the new business hours set will be hosted.
For example: -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com".

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Custom
If set to True, the business hours can only be used by the specified workflow.
If set to False (the default value) the business hours can be shared among multiple workflows.

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

### -MondayHours1
First set of opening and closing times for Monday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Monday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Monday.

If your organization is closed on Mondays, then do not configure a value for either MondayHours1 or MondayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MondayHours2
Second set of opening and closing times for Monday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Monday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M.
you will need to create two time ranges for Monday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TuesdayHours1
First set of opening and closing times for Tuesday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Tuesday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Tuesday.

If your organization is closed on Tuesdays, then do not configure a value for either TuesdayHours1 or TuesdayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TuesdayHours2
Second set of opening and closing times for Tuesday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Tuesday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Tuesday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WednesdayHours1
First set of opening and closing times for Wednesday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Wednesday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Wednesday.

If your organization is closed on Wednesday, then do not configure a value for either WednesdayHours1 or WednesdayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WednesdayHours2
Second set of opening and closing times for Wednesday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Wednesday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Wednesday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThursdayHours1
First set of opening and closing times for Thursday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Thursday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Thursday.

If your organization is closed on Thursdays, then do not configure a value for either ThursdayHours1 or ThursdayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThursdayHours2
Second set of opening and closing times for Thursday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Thursday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Thursday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FridayHours1
First set of opening and closing times for Friday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Friday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Friday.

If your organization is closed on Fridays, then do not configure a value for either FridayHours1 or FridayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FridayHours2
Second set of opening and closing times for Friday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Friday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Friday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaturdayHours1
First set of opening and closing times for Saturday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Saturday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Saturday.

If your organization is closed on Saturdays, then do not configure a value for either SaturdayHours1 or SaturdayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaturdayHours2
Second set of opening and closing times for Saturday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Saturday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Saturday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SundayHours1
First set of opening and closing times for Sunday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Sunday then you will only need to configure a single time range.
However, if your organization is open from 8:00 AM to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M., you will need to create two time ranges for Sunday.

If your organization is closed on Sundays, then do not configure a value for either SundayHours1 or SundayHours2.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SundayHours2
Second set of opening and closing times for Sunday.
If your organization is open from, say, 9:00 A.M.
to 5:00 P.M.
every Sunday then you will only need to configure a single time range.
However, if your organization is open from 8:00 A.M.
to noon, closes for an hour lunch, then is open again from 1:00 P.M.
to 5:00 P.M.
you will need to create two time ranges for Sunday.

```yaml
Type: TimeRange
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -Confirm
**Below Content Applies To:** Lync Server 2010

Prompts you for confirmation before running the cmdlet.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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

### -WhatIf
**Below Content Applies To:** Lync Server 2010

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsRgsHoursOfBusiness does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.BusinessHours object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/21869ba6-526e-4c70-b84d-de73536d8a43(OCS.14).aspx)

[Get-CsRgsHoursOfBusiness]()

[New-CsRgsTimeRange]()

[Remove-CsRgsHoursOfBusiness]()

[Set-CsRgsHoursOfBusiness]()

[Online Version](http://technet.microsoft.com/EN-US/library/21869ba6-526e-4c70-b84d-de73536d8a43(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/21869ba6-526e-4c70-b84d-de73536d8a43(OCS.16).aspx)

