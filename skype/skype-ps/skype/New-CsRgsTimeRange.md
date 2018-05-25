---
external help file: Microsoft.Rtc.Rgs.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsRgsTimeRange
schema: 2.0.0
---

# New-CsRgsTimeRange

## SYNOPSIS

Creates a new Response Group time range.
Time ranges are used by the Response Group application to specify opening and closing times for a business day.
For example, if your help desk agents are available only from 12:00 P.M.
to 5:00 P.M.
on Sundays, then you would create a time range for Sunday that had an opening time of 12:00 P.M.
and a closing time of 5:00 P.M.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsTimeRange -CloseTime <TimeSpan> -OpenTime <TimeSpan> [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION

The Response Group application uses business hour collections to keep track of the days of the week and the times of day that agents are typically available to answer phones.
For example, suppose your help desk is open every Monday from 7:00 A.M.
to 7:00 P.M.
In that case, you need to do two things: you need to use the New-CsRgsHoursOfBusiness cmdlet to create a collection of business hours for the help desk, and you need to modify the MondayTimeRange1 property in order to indicate that the help desk opens at 7:00 A.M.
and closes at 7:00 P.M.

Modifying an existing business hours collection requires you to use the Set-CsRgsHoursOfBusiness cmdlet.
However, you cannot use that cmdlet to directly modify a time range property; for example, Set-CsRgsHoursOfBusiness has no parameter that corresponds to the MondayTimeRange1 property.
Instead, modifying a business hours collection requires you to retrieve that collection by using Get-CsRgsHoursOfBusiness, make changes to the collection in memory only, and then use Set-CsRgsHoursOfBusiness to write those changes to the actual collection of business hours.

More often than not, changes you make to a business hours collection will involve changing the opening and/or closing times for a given day (or days).
To modify opening and closing times, you must specify those times by using the New-CsRgsTimeRange cmdlet.
When you call this cmdlet, the resulting value must be stored in an object reference variable.
This variable will then be used to set opening and closing times within the business hours of collection.

You must also use New-CsRgsTimeRange to specify opening and closing hours any time you create a new collection of business hours.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$sundayHours = New-CsRgsTimeRange -Name "Sunday hours" -OpenTime "08:30" -CloseTime "13:30"

$y = Get-CsRgsHoursOfBusiness -Identity Service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Hours"

$y.SundayHours1 = $sundayHours

Set-CsRgsHoursOfBusiness -Instance $y
```

Example 1 shows how you can use the New-CsRgsTimeRange cmdlet to modify the properties of an existing set of business hours.
In this example, New-CsRgsTimeRange is first called in order to create a new time range named "Sunday hours." This time range sets the opening time for 8:30 A.M.
(08:30), and sets the closing time for 1:30 P.M.
(13:30).
The in-memory-only time range created by this command is stored in a variable named $sundayHours.

After the time range has been configured, the second command in the example uses the Get-CsRgsHoursOfBusiness cmdlet to return the business hours collection named Help Desk Hours (found on the service ApplicationServer:atl-cs-001.litwareinc.com).
The returned collection is stored in a variable named $y.

After the collection has been retrieved, command 3 sets the value of the SundayHours1 property to $sundayHours, the object reference containing the newly created time range.
When that command completes, Set-CsRgsHoursOfBusiness is then used to write those changes to the Help Desk Hours business hours collection.
Note that if you fail to call Set-CsRgsHoursOfBusiness, the newly created time range will exist in memory only, and will disappear the moment you close Windows PowerShell or delete the variable $sundayHours.
If that happens, then the Help Desk Hours business hours collection will not be updated.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$sundayHours = New-CsRgsTimeRange -Name "Sunday hours" -OpenTime "08:30" -CloseTime "13:30"

New-CsRgsHoursOfBusiness -Parent Service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Hours" -SundayHours1 $sundayHours
```

Example 2 shows how you can create a new Response Group time range, and then use that time range in a new set of business hours.
The first command in the example uses the New-CsRgsTimeRange cmdlet to create a new time range named Sunday Hours.
The OpenTime for the range is set for 8:30 A.M.
("08:30") and the CloseTime is set for 1:30 P.M.
("13:30" equals 13 hours and 30 minutes when using the 24-hour time format).
The resulting time range object is stored in a variable named $sundayHours.

In the second command, the New-CsRgsBusinessHours cmdlet is used to create a new collection of business hours named Help Desk Hours.
In this command, the variable $sundayHours specifies the time range for the property SundayHours1.


## PARAMETERS

### -CloseTime
Time of day when business hours end.
CloseTime should be formatted using a 24-hour clock; for example, to indicate that business hours end at 9:00 P.M.
use this format: `-CloseTime "21:00".`

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenTime
Time of day when business hours begin.
OpenTime should be formatted using a 24-hour clock; for example, to indicate that business hours begin at 1:30 P.M.
use this format: `-OpenTime "13:30".`

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique identifier for the time range being created.
The Name is limited to a maximum of 128 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
New-CsRgsTimeRange does not accept pipelined input.

## OUTPUTS

###  
New-CsRgsTimeRange creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.TimeRange object.

## NOTES

## RELATED LINKS

[New-CsRgsHoursOfBusiness](New-CsRgsHoursOfBusiness.md)

[Set-CsRgsHoursOfBusiness](Set-CsRgsHoursOfBusiness.md)

