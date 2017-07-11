---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsRgsHolidaySet

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an existing Response Group holiday set.
A Response Group holiday set is a collection of holidays.
For example, you might have one holiday set for a United States (U.S.)-based queue (a set which might include a holiday for the Fourth of July) and a different set for a queue based in France.
The latter queue might define a holiday for Bastille Day but not for the Fourth of July.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an existing Response Group holiday set.
A Response Group holiday set is a collection of holidays.
For example, you might have one holiday set for a United States (U.S.)-based queue (a set which might include a holiday for the Fourth of July) and a different set for a queue based in France.
The latter queue might define a holiday for Bastille Day but not for the Fourth of July.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsRgsHolidaySet [-Force] [-WhatIf] [-Confirm] -Instance <HolidaySet> [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

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
In order to accommodate these atypical closures, the Response Group application enables you to designate certain days as holidays: days when the organization would usually be open but, for whatever reason, is not.
Individual holidays (created by using the New-CsRgsHoliday cmdlet) are collected in holiday sets; for example, holidays for the U.S.
might be collected in a holiday set named US_Holidays, while holidays for Japan might be collected in a holiday set named Japanese_Holidays.
After they are collected, holidays and holiday sets can then be assigned to Response Group workflows.

The Remove-CsRgsHolidaySet cmdlet enables administrators to remove Response Group holiday sets.
By default, if you attempt to remove a holiday set currently assigned to an active workflow, the cmdlet will pause and ask if you are sure you want to delete the workflow.
The command will not continue, and the holiday set will not be removed, until you respond to the prompt.
To override this prompt, and to remove a holiday set even if it is currently being used by an active workflow, add the Force parameter:

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet -Force

Note that, when you call Remove-CsRgsHolidaySet, the entire set of holidays is removed and is no longer available for use.
If all you want to do is remove a single holiday from a holiday set (for example, because your company will be open on Thanksgiving Day after all), you should use Set-CsRgsHolidaySet to remove only the specified holiday.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsHolidaySet cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Remove-CsRgsHolidaySet"}

Below Content Applies To: Lync Server 2013

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
In order to accommodate these atypical closures, the Response Group application enables you to designate certain days as holidays: days when the organization would usually be open but, for whatever reason, is not.
Individual holidays (created by using the New-CsRgsHoliday cmdlet) are collected in holiday sets; for example, holidays for the U.S.
might be collected in a holiday set named US_Holidays, while holidays for Japan might be collected in a holiday set named Japanese_Holidays.
After they are collected, holidays and holiday sets can then be assigned to Response Group workflows.

The Remove-CsRgsHolidaySet cmdlet enables administrators to remove Response Group holiday sets.
By default, if you attempt to remove a holiday set currently assigned to an active workflow, the cmdlet will pause and ask if you are sure you want to delete the workflow.
The command will not continue, and the holiday set will not be removed, until you respond to the prompt.
To override this prompt, and to remove a holiday set even if it is currently being used by an active workflow, add the Force parameter:

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet -Force

Note that, when you call Remove-CsRgsHolidaySet, the entire set of holidays is removed and is no longer available for use.
If all you want to do is remove a single holiday from a holiday set (for example, because your company will be open on Thanksgiving Day after all), you should use Set-CsRgsHolidaySet to remove only the specified holiday.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsHolidaySet cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRgsHolidaySet"}

Below Content Applies To: Skype for Business Server 2015

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
In order to accommodate these atypical closures, the Response Group application enables you to designate certain days as holidays: days when the organization would usually be open but, for whatever reason, is not.
Individual holidays (created by using the New-CsRgsHoliday cmdlet) are collected in holiday sets; for example, holidays for the U.S.
might be collected in a holiday set named US_Holidays, while holidays for Japan might be collected in a holiday set named Japanese_Holidays.
After they are collected, holidays and holiday sets can then be assigned to Response Group workflows.

The Remove-CsRgsHolidaySet cmdlet enables administrators to remove Response Group holiday sets.
By default, if you attempt to remove a holiday set currently assigned to an active workflow, the cmdlet will pause and ask if you are sure you want to delete the workflow.
The command will not continue, and the holiday set will not be removed, until you respond to the prompt.
To override this prompt, and to remove a holiday set even if it is currently being used by an active workflow, add the Force parameter:

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet -Force

Note that, when you call Remove-CsRgsHolidaySet, the entire set of holidays is removed and is no longer available for use.
If all you want to do is remove a single holiday from a holiday set (for example, because your company will be open on Thanksgiving Day after all), you should use Set-CsRgsHolidaySet to remove only the specified holiday.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet
```

The command shown in Example 1 removes the holiday set "2010 Holidays" from the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHolidaySet along with two parameters: the Identity parameter (which specifies the location of the holiday set); and the Name parameter (which specifies the name of the set).
The returned object is then piped to Remove-CsRgsHolidaySet, which deletes the holiday set 2010 Holidays.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the holiday set "2010 Holidays" from the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHolidaySet along with two parameters: the Identity parameter (which specifies the location of the holiday set); and the Name parameter (which specifies the name of the set).
The returned object is then piped to Remove-CsRgsHolidaySet, which deletes the holiday set 2010 Holidays.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the holiday set "2010 Holidays" from the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHolidaySet along with two parameters: the Identity parameter (which specifies the location of the holiday set); and the Name parameter (which specifies the name of the set).
The returned object is then piped to Remove-CsRgsHolidaySet, which deletes the holiday set 2010 Holidays.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "2010 Holidays" | Remove-CsRgsHolidaySet

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"  | Select-Object Identity -ExpandProperty HolidayList | Where-Object {$_.Name -eq "New Year's Day"}  | Remove-CsRgsHolidaySet
```

The preceding command deletes all the holiday sets on the service ApplicationServer:atl-cs-001.litwareinc.com that include the holiday New Year's Day.
In order to do this, the command first uses Get-CsRgsHolidaySet to return a collection of all the holiday sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Select-Object cmdlet, which does two things: 1) selects the Identity property for each holiday set; and, 2) "expands" the value of the HolidayList property.
(When you expand a value you return the properties of the underlying object.
For a holiday, that means properties like Name, StartDate, and EndDate).
The selected information (holiday set Identity and holiday property values) is then piped to the Where-Object cmdlet, which picks out the sets that include a holiday where the Name is equal to (-eq) "New Year's Day".
The filtered collection of holiday sets is then piped to Remove-CsRgsHolidaySet, which deletes each holiday set that includes the holiday New Year's Day.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the holiday sets on the service ApplicationServer:atl-cs-001.litwareinc.com that include the holiday New Year's Day.
In order to do this, the command first uses Get-CsRgsHolidaySet to return a collection of all the holiday sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Select-Object cmdlet, which does two things: 1) selects the Identity property for each holiday set; and, 2) "expands" the value of the HolidayList property.
(When you expand a value you return the properties of the underlying object.
For a holiday, that means properties like Name, StartDate, and EndDate).
The selected information (holiday set Identity and holiday property values) is then piped to the Where-Object cmdlet, which picks out the sets that include a holiday where the Name is equal to (-eq) "New Year's Day".
The filtered collection of holiday sets is then piped to Remove-CsRgsHolidaySet, which deletes each holiday set that includes the holiday New Year's Day.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Select-Object Identity -ExpandProperty HolidayList | Where-Object {$_.Name -eq "New Year's Day"} | Remove-CsRgsHolidaySet

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the holiday sets on the service ApplicationServer:atl-cs-001.litwareinc.com that include the holiday New Year's Day.
In order to do this, the command first uses Get-CsRgsHolidaySet to return a collection of all the holiday sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Select-Object cmdlet, which does two things: 1) selects the Identity property for each holiday set; and, 2) "expands" the value of the HolidayList property.
(When you expand a value you return the properties of the underlying object.
For a holiday, that means properties like Name, StartDate, and EndDate).
The selected information (holiday set Identity and holiday property values) is then piped to the Where-Object cmdlet, which picks out the sets that include a holiday where the Name is equal to (-eq) "New Year's Day".
The filtered collection of holiday sets is then piped to Remove-CsRgsHolidaySet, which deletes each holiday set that includes the holiday New Year's Day.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Select-Object Identity -ExpandProperty HolidayList | Where-Object {$_.Name -eq "New Year's Day"} | Remove-CsRgsHolidaySet

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"  | Where-Object {$_.HolidayList.Count -lt 5} | Remove-CsRgsHolidaySet
```

The command shown in Example 3 deletes any holiday sets from the service ApplicationServer:atl-cs-001.litwareinc.com that have fewer than 5 holidays assigned to them.
To do this, the command first calls Get-CsRgsHolidaySet to return a collection of all the holiday sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those holiday sets where the number of assigned holidays ($_.HolidayList.Count) is less than 5.
These holiday sets are then piped to, and deleted by, the Remove-CsRgsHolidaySet cmdlet.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 deletes any holiday sets from the service ApplicationServer:atl-cs-001.litwareinc.com that have fewer than 5 holidays assigned to them.
To do this, the command first calls Get-CsRgsHolidaySet to return a collection of all the holiday sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those holiday sets where the number of assigned holidays ($_.HolidayList.Count) is less than 5.
These holiday sets are then piped to, and deleted by, the Remove-CsRgsHolidaySet cmdlet.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.HolidayList.Count -lt 5} | Remove-CsRgsHolidaySet

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 deletes any holiday sets from the service ApplicationServer:atl-cs-001.litwareinc.com that have fewer than 5 holidays assigned to them.
To do this, the command first calls Get-CsRgsHolidaySet to return a collection of all the holiday sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those holiday sets where the number of assigned holidays ($_.HolidayList.Count) is less than 5.
These holiday sets are then piped to, and deleted by, the Remove-CsRgsHolidaySet cmdlet.

Get-CsRgsHolidaySet -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.HolidayList.Count -lt 5} | Remove-CsRgsHolidaySet

## PARAMETERS

### -Force
Forces removal of the holiday set.
If this parameter is present, the holiday set will be deleted without warning, even if it is used by an active workflow.
If this parameter is not present then you will be asked to confirm the deletion of any holiday set currently assigned to an active workflow.

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
This parameter is for testing purposes only.

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

### -Instance
Below Content Applies To: Lync Server 2010

{{Fill Instance Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Object reference pointing to the holiday set to be removed.
When piping workflow objects to Remove-CsRgsHolidaySet you can leave off the Instance parameter.

To use the Instance parameter use commands similar to this:

$x = Get-CsRgsHolidaySet -Identity ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83

Remove-CsRgsHolidaySet -Instance $x

Note that you can only remove a single holiday set at a time when using the Instance parameter.
That means that your object reference ($x) cannot contain multiple holiday set objects.



```yaml
Type: HolidaySet
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Rgs.Management.WritableSettings.HolidaySet object.
Remove-CsRgsHolidaySet accepts pipelined instances of the Response Group holiday set object.

## OUTPUTS

###  
Remove-CsRgsHolidaySet deletes existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.HolidaySet object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6e1f4ec3-2f8a-4ab1-810b-3d64eecd2031(OCS.14).aspx)

[Get-CsRgsHolidaySet]()

[New-CsRgsHolidaySet]()

[Set-CsRgsHolidaySet]()

[Online Version](http://technet.microsoft.com/EN-US/library/6e1f4ec3-2f8a-4ab1-810b-3d64eecd2031(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6e1f4ec3-2f8a-4ab1-810b-3d64eecd2031(OCS.16).aspx)

