---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRgsHolidaySet

## SYNOPSIS

Creates a new Response Group holiday set.
A Response Group holiday set is a collection of holidays.
For example, you might have one holiday set for a United States (U.S.)-based queue (a set which might include a holiday for the Fourth of July) and a different set for a queue based in France.
The latter queue might define a holiday for Bastille Day but not for the Fourth of July.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsHolidaySet [-Parent] <RgsIdentity>
 -HolidayList <System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.WritableSettings.Holiday]>
 -Name <String> [-InMemory] [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these business hours indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

However, in many organizations there are exceptions to the typical work week; for example, in the U.S.
an organization might be closed on Christmas Day or Thanksgiving Day.
In order to accommodate for atypical closures, the Response Group application enables you to designate certain days as holidays: days when the organization would usually be open but, for whatever reason, is not.
Individual holidays (created using the New-CsRgsHoliday cmdlet) are collected in holiday sets; for example, holidays for the U.S.
might be collected in a holiday set named US_Holidays, while holidays for Japan might be collected in a holiday set named Japanese_Holidays.
After they are collected, holidays and their corresponding holiday sets can then be assigned to Response Group workflows.

The New-CsRgsHolidaySet cmdlet provides a way for you to configure new holiday sets for use in your organization.
Note that, when you create a new holiday set, you must include at least one holiday; these individual holidays must be created by using the New-CsRgsHoliday cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

-HolidayList($x, $y, $z)

$x = New-CsRgsHoliday -StartDate "1/1/2013 12:00 AM" -EndDate "1/2/2013 12:00 AM" -Name "New Year's Day"

New-CsRgsHolidaySet -Parent "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2013 Holidays" -HolidayList($x)
```

The commands shown in Example 1 create a new holiday set named 2013 Holidays and then assign this holiday set a new holiday (New Year's Day).
In order to do this, the first command uses New-CsRgsHoliday to create a holiday for New Year's Day.
New-CsRgsHoliday takes three parameters: StartDate, which indicates the starting date for the holiday (1/1/2013 12:00 A.M.); EndDate, which represents the end date for the holiday (1/2/2013 12:00 A.M.); and Name, used to store the name assigned to the holiday.
The resulting holiday object is stored in the variable $x.

After the new holiday has been created in memory, New-CsRgsHolidaySet is employed to create a new holiday set on the service ApplicationServer:atl-cs-001.litwareinc.com.
This holiday set is given the name 2013 Holidays (`-Name "2013 Holidays"`) and is assigned the holiday stored in the variable $x: `-HolidayList ($x).`
If you want to assign multiple holidays to the holiday set simply create the new holidays, assigning each to a unique variable.
You can then include all those variable names as the parameter value passed to HolidayList:


## PARAMETERS

### -HolidayList

One or more holidays to be added to the holiday set.
Holidays must be created by using the New-CsRgsHoliday cmdlet and then stored in an object reference.
These object references are then passed to the Holidays parameter in order to add the holidays to the holiday set.
For example, this command creates a holiday named New Year's Day and then stores the resulting value in an object reference named $x:

`$x = New-CsRgsHoliday -StartDate "1/1/2013 12:00 AM" -EndDate "1/2/2013 12:00 AM" -Name "New Year's Day"`

Note that the format used for specifying dates and times will depend on your Regional and Language options.
The examples shown in this topic use U.S.
English.



```yaml
Type: System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.WritableSettings.Holiday]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique name to be assigned to the holiday set.
The combination of the Parent property and the Name property enables you to uniquely identify holiday sets without having to refer to the set's globally unique identifier (GUID).

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
Service where the new holiday set will be hosted.
For example: `-Parent "service:ApplicationServer:atl-cs-001.litwareinc.com".`

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

### -InMemory

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



**Below Content Applies To:** Lync Server 2013, Skype for Business Server

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
New-CsRgsHolidaySet does not accept pipelined input.

## OUTPUTS

###  
New-CsRgsHolidaySet creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.HolidaySet object.

## NOTES

## RELATED LINKS

[Get-CsRgsHolidaySet]()

[New-CsRgsHoliday]()

[Remove-CsRgsHolidaySet]()

[Set-CsRgsHolidaySet]()

