---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsRgsHolidaySet
schema: 2.0.0
---

# Set-CsRgsHolidaySet

## SYNOPSIS
Modifies the property values of an existing Response Group holiday set.
A Response Group holiday set is a collection of holidays.
For example, you might have one holiday set for a United States (U.S.)-based queue (a set that might include a holiday for the Fourth of July) and a different set for a queue based in France.
The latter queue might define a holiday for Bastille Day but not for the Fourth of July.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsRgsHolidaySet [-Instance] <HolidaySet> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application you can define business hours, which indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

However, in many organizations there are exceptions to the typical work week; for example, in the U.S.
an organization might be closed on Christmas Day or Thanksgiving Day.
In order to accommodate these atypical closures, the Response Group application enables you to designate certain days as holidays: days when the organization would usually be open but, for some reason, is not.
Individual holidays (created by using the `New-CsRgsHoliday` cmdlet) are collected in holiday sets; for example, holidays for the U.S.
might collected in a holiday set named US_Holidays, while holidays for Japan might be collected in a holiday set named Japanese_Holidays.
After they are collected, holiday sets can then be assigned to Response Group workflows.

The `Set-CsRgsHolidaySet` cmdlet provides a way for you to modify an existing holiday set.
(For the most part, this means adding holidays to or removing holidays from the set.) `Set-CsRgsHolidaySet` is not directly used to make changes to a holiday set.
Instead, an object reference is created to an existing holiday set by using the `Get-CsRgsHolidaySet` cmdlet.
(An object reference is a variable that, in this case, refers to an existing holiday set). Changes to the set are made in memory, then the `Set-CsRgsHolidaySet` is used to write those changes to the actual holiday set.
If you do not call `Set-CsRgsHolidaySet`, then the changes you make will exist in memory only and will disappear as soon as you close Windows PowerShell or delete the object reference.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = New-CsRgsHoliday -StartDate "12/25/2010" -EndDate "12/26/2010" -Name "Christmas Day"

$y = Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays"

$y.HolidayList.Add($x)

Set-CsRgsHolidaySet -Instance $y
```

The commands shown in Example 1 create a new holiday (Christmas Day) and then assign that holiday to an existing holiday set.
To do this, the first command in the example uses the cmdlet `New-CsRgsHoliday` to create a new holiday (a "virtual" holiday that exists only in memory, and is stored in the variable $x).
`New-CsRgsHoliday` uses three parameters: StartDate, which represents the starting date for the holiday (12/25/2010); EndDate, which represents the end date for the holiday (12/26/2010); and Name, which represents the unique name to be given to the holiday.

After creating the new holiday, the second command uses `Get-CsRgsHolidaySet` to retrieve the holiday set "2010 Holidays" from the service ApplicationServer:atl-cs-001.litwareinc.com.
This holiday set is stored in the variable $y.

Command 3 uses the Add method to add the new holiday ($x) to the virtual copy of the holiday set ($y).
The final command then uses `Set-CsRgsHolidaySet` to write these changes (and add the new holiday) to the service ApplicationServer:atl-cs-001.litwareinc.com.


### -------------------------- Example 2 ------------------------
```
$x = Get-CsRgsHolidaySet -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "2010 Holidays"

$y = $x.HolidayList | Where-Object {$_.Name -eq "Christmas Day"}

$x.HolidayList.Remove($y)

Set-CsRgsHolidaySet -Instance $x
```

The commands in Example 2 remove a holiday (in this case, Christmas day) from an existing holiday set.
To accomplish this task, the first command in the example uses `Get-CsRgsHolidaySet` to retrieve the holiday set 2010 Holidays (-Name "2010 Holidays") from the service ApplicationServer:atl-cs-001.litwareinc.com.
The retrieved data is stored in a variable named $x.

In the second command, the HolidayList property from the retrieved holiday set is piped to the `Where-Object` cmdlet, which picks out the one holiday where the name property is equal to "Christmas Day".
That single holiday is stored in the variable $y.

After the Christmas Day holiday has been retrieved, command 3 uses the Remove method to remove the Christmas Day holiday ($y) from the holiday set ($x).
The final command in the example then uses `Set-CsRgsHolidaySet` to write these changes (removing the Christmas Day holiday) to the actual 2010 Holidays holiday set on ApplicationServer:atl-cs-001.litwareinc.com.


### -------------------------- Example 3 ------------------------
```
$x = Get-CsRgsHolidaySet -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "2010 Holidays"

$x.HolidayList.Clear()

Set-CsRgsHolidaySet -Instance $x
```

The commands shown in Example 3 delete all the holidays from the holiday set 2010 Holidays found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the first command in the example uses `Get-CsRgsHolidaySet` to retrieve the appropriate holiday set from ApplicationServer:atl-cs-001.litwareinc.com.
That holiday set is then stored in a variable named $x.

After the holiday set has been retrieved, the Clear method is used to remove all the values stored in the HolidayList property.
After this property has been cleared, the final command in the example uses the `Set-CsRgsHolidaySet` cmdlet to write these changes back to the holiday set 2010 Holidays.


## PARAMETERS

### -Instance
Object reference to the Response Group holiday set to be modified.
An object reference is typically retrieved by using the `Get-CsRgsHolidaySet` cmdlet and assigning the returned value to a variable; for example, this command returns an object reference to the Help Desk holiday set and stores that object reference in a variable named $x:

`$x = Get-CsRgsHolidaySet -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"`

```yaml
Type: HolidaySet
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
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
Microsoft.Rtc.Rgs.Management.WritableSettings.HolidaySet object.
`Remove-CsRgsHolidaySet` accepts pipelined instances of the Response Group holiday set object.

## OUTPUTS

###  
`Set-CsRgsHolidaySet` does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.HolidaySet object.

## NOTES

## RELATED LINKS

[Get-CsRgsHolidaySet]()

[New-CsRgsHoliday]()

[New-CsRgsHolidaySet]()

[Remove-CsRgsHolidaySet]()
