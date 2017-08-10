---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsRgsHoursOfBusiness

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves information about the Response Group business hour collections configured for use in your organization.
Business hour collections are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves information about the Response Group business hour collections configured for use in your organization.
Business hour collections are used to indicate the days of the week and the times of day when Response Group agents are typically available to answer phone calls.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsRgsHoursOfBusiness [[-Identity] <RgsIdentity>] [-Name <String>] [-Owner <RgsIdentity>] [-ShowAll]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours that indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

The Get-CsRgsHoursOfBusiness cmdlet provides a way for you to retrieve information about the business hour collections configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Lync Server 2013

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours that indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

The Get-CsRgsHoursOfBusiness cmdlet provides a way for you to retrieve information about the business hour collections configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRgsHoursOfBusiness cmdlet locally: RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsRgsHoursOfBusiness"}

**Below Content Applies To:** Skype for Business Server 2015

In order to provide callers with the best possible experience, the Response Group application makes it possible for you to clearly define when Response Group agents are available to answer calls and when they are not available to answer calls.
With the Response Group application, you can define business hours that indicate the days of the week and hours of the day that agents are available to answer calls.
For example, if your organization is typically open from 9:00 A.M.
to 5:00 P.M.
Monday through Friday, then you would configure business hours that show that agents are available from 9:00 A.M.
to 5:00 P.M.
Monday through Friday (and, by extension, that agents are not available at, say, 8:00 P.M.
on a Thursday or 2:30 P.M.
on a Sunday).

The Get-CsRgsHoursOfBusiness cmdlet provides a way for you to retrieve information about the business hour collections configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness
```

Example 1 returns information about all the business hour collections configured for use in your organization.
This is done by calling Get-CsRgsHoursOfBusiness without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the business hour collections configured for use in your organization.
This is done by calling Get-CsRgsHoursOfBusiness without any parameters.

Get-CsRgsHoursOfBusiness

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the business hour collections configured for use in your organization.
This is done by calling Get-CsRgsHoursOfBusiness without any parameters.

Get-CsRgsHoursOfBusiness

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"
```

The command shown in Example 2 returns all the business hour collections configured for use on atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns all the business hour collections configured for use on atl-cs-001.litwareinc.com.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns all the business hour collections configured for use on atl-cs-001.litwareinc.com.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"
```

The preceding command returns a single collection of business hours from atl-cs-001.litwareinc.com: the collection with the Name "Help Desk Business Hours".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns a single collection of business hours from atl-cs-001.litwareinc.com: the collection with the Name "Help Desk Business Hours".

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns a single collection of business hours from atl-cs-001.litwareinc.com: the collection with the Name "Help Desk Business Hours".

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" -Name "Help Desk Business Hours"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null}
```

The preceding command returns all the business hour collections that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those items where one of the following two criteria is true: the SundayTimeRange1 property is not equal to a null value and/or the SundayTimeRange2 property is not equal to a null value.
If a time range property is not null, then that means business hours have been configured for that time period.

### -------------------------- EXAMLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns all the business hour collections that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those items where one of the following two criteria is true: the SundayTimeRange1 property is not equal to a null value and/or the SundayTimeRange2 property is not equal to a null value.
If a time range property is not null, then that means business hours have been configured for that time period.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null}

### -------------------------- EXAMLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns all the business hour collections that have business hours configured for Sundays.
To do this, the command first calls Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those items where one of the following two criteria is true: the SundayTimeRange1 property is not equal to a null value and/or the SundayTimeRange2 property is not equal to a null value.
If a time range property is not null, then that means business hours have been configured for that time period.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.SundayTimeRange1 -ne $Null -or $_.SundayTimeRange2 -ne $Null}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.MondayTimeRange1.OpenTime -le "08:00:00"}
```

The command shown in Example 5 returns all the business hour collections from atl-cs-001.litwareinc.com where the opening time for the MondayTimeRange1 property is equal to (or earlier than) 8:00 A.M.
In order to do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections from atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those collections where the value of the MondayTimeRange1.OpenTime property is less than or equal to 8:00 A.M.
(08:00:00).

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns all the business hour collections from atl-cs-001.litwareinc.com where the opening time for the MondayTimeRange1 property is equal to (or earlier than) 8:00 A.M.
In order to do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections from atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those collections where the value of the MondayTimeRange1.OpenTime property is less than or equal to 8:00 A.M.
(08:00:00).

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.MondayTimeRange1.OpenTime -le "08:00:00"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns all the business hour collections from atl-cs-001.litwareinc.com where the opening time for the MondayTimeRange1 property is equal to (or earlier than) 8:00 A.M.
In order to do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections from atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which selects only those collections where the value of the MondayTimeRange1.OpenTime property is less than or equal to 8:00 A.M.
(08:00:00).

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.MondayTimeRange1.OpenTime -le "08:00:00"}

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $False}
```

The command shown in Example 6 returns all the public business hour collections; that is, collections that can be shared among workflows.
To do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those collections where the Custom property is equal to False.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 6 returns all the public business hour collections; that is, collections that can be shared among workflows.
To do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those collections where the Custom property is equal to False.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $False}

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 6 returns all the public business hour collections; that is, collections that can be shared among workflows.
To do this, the command first uses Get-CsRgsHoursOfBusiness to return all the business hour collections found on atl-cs-001.litwareinc.com.
This data is then piped to the Where-Object cmdlet, which picks out only those collections where the Custom property is equal to False.

Get-CsRgsHoursOfBusiness -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Where-Object {$_.Custom -eq $False}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Represents either the Identity of the service where the business hours collection is hosted or the full Identity of the collection itself.
If you specify the service Identity (for example, service:ApplicationServer:atl-cs-001.litwareinc.com), then all the business hours collections hosted on that service will be returned.
If you specify the Identity of the collection, then only the specified business hours collection will be returned.
Note that the Identity of a business hours collection consists of the service Identity followed by a globally unique identifier (GUID); for example: service:ApplicationServer-1/1987d3c2-4544-489d-bbe3-59f79f530a83.

An alternate way to return a business hours collection is to specify the service Identity, then include the Name parameter and the collection name.
That enables you to retrieve a specific business hours collection without having to know the GUID assigned to that collection.

If called without any parameters, Get-CsRgsHoursOfBusiness returns all the business hour collections configured for use in your organization.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Represents either the Identity of the service where the business hours collection is hosted or the full Identity of the collection itself.
If you specify the service Identity (for example, service:ApplicationServer:atl-cs-001.litwareinc.com), then all the business hours collections hosted on that service will be returned.
If you specify the Identity of the collection, then only the specified business hours collection will be returned.
Note that the Identity of a business hours collection consists of the service Identity followed by a globally unique identifier (GUID); for example: service:ApplicationServer-1/1987d3c2-4544-489d-bbe3-59f79f530a83.

An alternate way to return business hours collection is to specify the service Identity, then include the Name parameter and the collection name.
That enables you to retrieve a specific business hours collection without having to know the GUID assigned to that collection.

If called without any parameters, Get-CsRgsHoursOfBusiness returns all the business hour collections configured for use in your organization.



```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Unique name given to the business hours collection at the time the collection was created.

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

### -Owner
Fully qualified domain name of the pool that "owns" the business hours.
The Owner pool ID and the Pool ID of a collection of business hours are typically the same.
However, if a collection needs to temporarily be moved (perhaps in a disaster recovery procedure) then the Pool ID will change.
However, the Owner ID will continue to point to the original pool.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAll
When present, shows all the Response Group business hour collections, including those collections where the Owner pool ID and the Pool ID are different.
By default, Get-CsRgsHoursOfBusiness only returns information about business hour collections where the Owner pool ID and the Pool ID are identical.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Get-CsRgsHoursOfBusiness does not accept pipelined input.

## OUTPUTS

###  
Returns instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.BusinessHours object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2008d55c-fd53-4004-b6e6-08cdf0175af8(OCS.14).aspx)

[New-CsRgsHoursOfBusiness]()

[Remove-CsRgsHoursOfBusiness]()

[Set-CsRgsHoursOfBusiness]()

[Online Version](http://technet.microsoft.com/EN-US/library/2008d55c-fd53-4004-b6e6-08cdf0175af8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2008d55c-fd53-4004-b6e6-08cdf0175af8(OCS.16).aspx)

