---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsRgsHoursOfBusiness

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing set of Response Group business hours.
Business hours are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an existing set of Response Group business hours.
Business hours are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsRgsHoursOfBusiness [-Force] [-WhatIf] [-Confirm] -Instance <BusinessHours> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and the hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets can be created by using the New-CsRgsHoursOfBusiness cmdlet; these sets can later be removed by using the Remove-CsRgsHoursOfBusiness cmdlet.
Note that, when you call Remove-CsRgsHoursOfBusiness, the entire set of hours is removed and is no longer available for use.
If all you want to do is remove business hours for a particular day (for example, because your help desk is no longer open on Sundays), you should use Set-CsRgsHoursOfBusiness to remove only the applicable values from a collection.

By default, Remove-CsRgsHoursOfBusiness prompts you if you attempt to delete a business hours set currently in use by an active workflow.
That prompt asks you to verify that you want to remove the collection, and no action will be taken until you respond to the prompt.
To bypass this prompt, and to silently delete business hour sets, even if those sets are currently assigned to an active workflow, add the Force parameter.
For example:

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness -Force

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Remove-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Lync Server 2013

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and the hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets can be created by using the New-CsRgsHoursOfBusiness cmdlet; these sets can later be removed by using the Remove-CsRgsHoursOfBusiness cmdlet.
Note that, when you call Remove-CsRgsHoursOfBusiness, the entire set of hours is removed and is no longer available for use.
If all you want to do is remove business hours for a particular day (for example, because your help desk is no longer open on Sundays), you should use Set-CsRgsHoursOfBusiness to remove only the applicable values from a collection.

By default, Remove-CsRgsHoursOfBusiness prompts you if you attempt to delete a business hours set currently in use by an active workflow.
That prompt asks you to verify that you want to remove the collection, and no action will be taken until you respond to the prompt.
To bypass this prompt, and to silently delete business hour sets, even if those sets are currently assigned to an active workflow, add the Force parameter.
For example:

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness -Force

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Skype for Business Server 2015

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours; these hours indicate the days of the week and the hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

New business hour sets can be created by using the New-CsRgsHoursOfBusiness cmdlet; these sets can later be removed by using the Remove-CsRgsHoursOfBusiness cmdlet.
Note that, when you call Remove-CsRgsHoursOfBusiness, the entire set of hours is removed and is no longer available for use.
If all you want to do is remove business hours for a particular day (for example, because your help desk is no longer open on Sundays), you should use Set-CsRgsHoursOfBusiness to remove only the applicable values from a collection.

By default, Remove-CsRgsHoursOfBusiness prompts you if you attempt to delete a business hours set currently in use by an active workflow.
That prompt asks you to verify that you want to remove the collection, and no action will be taken until you respond to the prompt.
To bypass this prompt, and to silently delete business hour sets, even if those sets are currently assigned to an active workflow, add the Force parameter.
For example:

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness -Force



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness
```

The command shown in Example 1 removes all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which deletes each business hours set passed to it.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which deletes each business hours set that is passed to it.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on the service ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which deletes each business hours set that is passed to it.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsHoursOfBusiness

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" | Remove-CsRgsHoursOfBusiness
```

In Example 2, a single set of business hours is removed from ApplicationServer:atl-cs-001.litwareinc.com: the collection named Help Desk Business Hours.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, a single set of business hours is removed from ApplicationServer:atl-cs-001.litwareinc.com: the collection named Help Desk Business Hours.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" | Remove-CsRgsHoursOfBusiness

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, a single set of business hours is removed from ApplicationServer:atl-cs-001.litwareinc.com: the collection named Help Desk Business Hours.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours" | Remove-CsRgsHoursOfBusiness

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null} | Remove-CsRgsHoursOfBusiness
```

The preceding command deletes all the business hour sets that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Where-Object cmdlet, which selects only those items where one of the following criteria is true: the SundayTimeRange1 property is not equal to a null value, or the SundayTimeRange2 property is not equal to a null value.
(If a time range property is not null, then that means business hours have been configured for that time interval.) Any set that meets at least one of those criteria is then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which removes that set of business hours.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the business hour sets that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Where-Object cmdlet, which selects only those items where one of the following criteria is true: the SundayTimeRange1 property is not equal to a null value, or the SundayTimeRange2 property is not equal to a null value.
(If a time range property is not null, then that means business hours have been configured for that time interval.) Any set that meets at least one of those criteria is then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which removes that set of business hours.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null} | Remove-CsRgsHoursOfBusiness

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the business hour sets that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
These sets are then piped to the Where-Object cmdlet, which selects only those items where one of the following criteria is true: the SundayTimeRange1 property is not equal to a null value, or the SundayTimeRange2 property is not equal to a null value.
(If a time range property is not null, then that means business hours have been configured for that time interval.) Any set that meets at least one of those criteria is then piped to the Remove-CsRgsHoursOfBusiness cmdlet, which removes that set of business hours.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null} | Remove-CsRgsHoursOfBusiness

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $True} | Remove-CsRgsHoursOfBusiness -Force
```

The command shown in Example 4 deletes all the custom business hour sets (that is, sets that cannot be shared among workflows).
To carry out this task, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those sets where the Custom property is equal to True.
These sets are then piped to, and deleted by, Remove-CsRgsHoursOfBusiness.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 deletes all the custom business hour sets (that is, sets that cannot be shared among workflows).
To carry out this task, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those sets where the Custom property is equal to True.
These sets are then piped to, and deleted by, Remove-CsRgsHoursOfBusiness.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $True} | Remove-CsRgsHoursOfBusiness -Force

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 deletes all the custom business hour sets (that is, sets that cannot be shared among workflows).
To carry out this task, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour sets found on ApplicationServer:atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those sets where the Custom property is equal to True.
These sets are then piped to, and deleted by, Remove-CsRgsHoursOfBusiness.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $True} | Remove-CsRgsHoursOfBusiness -Force

## PARAMETERS

### -Force
Forces the deletion of a business hours set.
If this parameter is present, the set will be deleted without warning, even if the set is currently assigned to an active workflow.
If this parameter is not present then you will be asked to confirm the deletion of any business hours set currently assigned to an active workflow.

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

### -Instance
**Below Content Applies To:** Lync Server 2010

{{Fill Instance Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Object reference pointing to the business hours set to be removed.
When piping workflow objects to Remove-CsRgsHoursOfBusiness you can leave off the Instance parameter.

To use the Instance parameter use commands similar to this:

$x = Get-CsRgsHoursOfBusiness -Identity ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83

Remove-CsRgsHoursOfBusiness -Instance $x

Note that you can only remove a single business hours set at a time when using the Instance parameter.
That means that your object reference ($x) cannot contain multiple business hour objects.



```yaml
Type: BusinessHours
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
Microsoft.Rtc.Rgs.Management.WritableSettings.BusinessHours object.
Remove-CsRgsHoursOfBusiness accepts pipelined instances of the Response Group business hours object.

## OUTPUTS

###  
Deletes existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.BusinessHours object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/753b2cd7-709b-455b-85a3-8b80ea35d4e0(OCS.14).aspx)

[Get-CsRgsHoursOfBusiness]()

[New-CsRgsHoursOfBusiness]()

[Set-CsRgsHoursOfBusiness]()

[Online Version](http://technet.microsoft.com/EN-US/library/753b2cd7-709b-455b-85a3-8b80ea35d4e0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/753b2cd7-709b-455b-85a3-8b80ea35d4e0(OCS.16).aspx)

