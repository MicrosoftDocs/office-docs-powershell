---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTestDevice

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves information about the device update management test devices that have been configured for use in your organization.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves information about the device update management test devices that have been configured for use in your organization.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsTestDevice [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTestDevice [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

By identifying specific Microsoft Lync 2010 Phone Edition-compatible phones or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Microsoft Lync Server 2010, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's what test devices are for: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices can be assigned to either the global or the site scope.
You can use the Get-CsTestDevice cmdlet to retrieve information about the test devices currently configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTestDevice cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsTestDevice"}

**Below Content Applies To:** Lync Server 2013

By identifying specific phones compatible with Lync Phone Edition or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Lync Server, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's what test devices are for: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices can be assigned to either the global or the site scope.
You can use the Get-CsTestDevice cmdlet to retrieve information about the test devices currently configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTestDevice cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTestDevice"}

**Below Content Applies To:** Skype for Business Server 2015

By identifying specific phones compatible with Skype for Business or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Skype for Business Server 2015, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's what test devices are for: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices can be assigned to either the global or the site scope.
You can use the Get-CsTestDevice cmdlet to retrieve information about the test devices currently configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice
```

Example 1 returns all the test devices in the organization.
Calling Get-CsTestDevice without any additional parameters will return all the test devices currently in use.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns all the test devices in the organization.
Calling Get-CsTestDevice without any additional parameters will return all the test devices currently in use.

Get-CsTestDevice

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns all the test devices in the organization.
Calling the Get-CsTestDevice cmdlet without any additional parameters will return all the test devices currently in use.

Get-CsTestDevice

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice -Identity site:Redmond/UCPhone
```

The preceding example returns the test device named UCPhone that was assigned to the Redmond site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example returns the test device named UCPhone that was assigned to the Redmond site.

Get-CsTestDevice -Identity site:Redmond/UCPhone

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example returns the test device named UCPhone that was assigned to the Redmond site.

Get-CsTestDevice -Identity site:Redmond/UCPhone

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice -Identity site:Redmond
```

In Example 3, the command returns all the test devices configured for the Redmond site.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the command returns all the test devices configured for the Redmond site.

Get-CsTestDevice -Identity site:Redmond

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the command returns all the test devices configured for the Redmond site.

Get-CsTestDevice -Identity site:Redmond

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice -Filter site:*
```

The preceding command returns all the test devices that have been configured at the site scope.
To do this, the command uses the Filter parameter; the filter value "site:*" limits the returned data to test devices that have an Identity that begins with the string value "site:".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the test devices that have been configured at the site scope.
To do this, the command uses the Filter parameter; the filter value "site:*" limits the returned data to test devices that have an Identity that begins with the string value "site:".

Get-CsTestDevice -Filter site:*

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the test devices that have been configured at the site scope.
To do this, the command uses the Filter parameter; the filter value "site:*" limits the returned data to test devices that have an Identity that begins with the string value "site:".

Get-CsTestDevice -Filter site:*

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Identity of the test device to be returned.
To refer to an individual device named UCPhone (stored in the global collection), use this syntax: -Identity global/UCPhone.
To refer to a device found in a site collection, use syntax similar to this: -Identity site:Redmond/UCPhone.
To refer to an entire collection, leave off the device name.
For example, this syntax returns all the test devices configured for the Redmond site: -Identity site:Redmond.

Note that you cannot use wildcards when specifying an Identity.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity of the test device to be returned.
To refer to an individual device named UCPhone (stored in the global collection), use this syntax:

-Identity global/UCPhone

To refer to a device found in a site collection, use syntax similar to this:

-Identity site:Redmond/UCPhone

To refer to an entire collection, leave off the device name.
For example, this syntax returns all the test devices configured for the Redmond site:

-Identity site:Redmond

Note that you cannot use wildcards when specifying an Identity.



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

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Provides a way for you to use wildcard characters when specifying the test device (or devices) to be returned.
For example, to return all the test device collections that have been configured at the site scope, use this syntax: -Filter "site:*".
To return all the devices that have the term "EMEA" in their Identity, use this syntax: -Filter "*EMEA*".
Note that Filter acts only on the Identity of the test device collection; you cannot filter on other collection properties.



**Below Content Applies To:** Skype for Business Server 2015

Provides a way for you to use wildcard characters when specifying the test device (or devices) to be returned.
For example, to return all the test device collections that have been configured at the site scope, use this syntax:

-Filter "site:*"

To return all the devices that have the term "EMEA" in their Identity, use this syntax:

-Filter "*EMEA*"

Note that Filter acts only on the Identity of the test device collection; you cannot filter on other collection properties.



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the test device data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsTestDevice does not accept pipelined input.

###  
None.
The Get-CsTestDevice cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsTestDevice returns one or more instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

###  
The Get-CsTestDevice cmdlet returns one or more instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4c88d448-4130-40de-b7e9-7389922322f4(OCS.14).aspx)

[New-CsTestDevice]()

[Remove-CsTestDevice]()

[Set-CsTestDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/4c88d448-4130-40de-b7e9-7389922322f4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4c88d448-4130-40de-b7e9-7389922322f4(OCS.16).aspx)

