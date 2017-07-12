---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTestDevice

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified device update management test device.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified device update management test device.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsTestDevice [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

By identifying specific Microsoft Lync 2010 Phone Edition-compatible phones or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Microsoft Lync Server 2010, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are hardware devices that run Lync 2010 Phone Edition.
These devices are created by using the New-CsTestDevice cmdlet.
Once created, the devices can later be removed by running the Remove-CsTestDevice cmdlet.
Note that removing the device as a test device does not affect the actual device itself; for example, your Lync 2010 Phone Edition-compatible phone can still be used to access Lync Server 2010.
The only difference is that, because the device is no longer a test device, it will no longer download device update rules that are in the pending state.
Instead, the device will wait until the rules have been approved before downloading and installing them.

Remove-CsTestDevice can be used to remove individual test devices configured at either the global or site scope.
You can also use the cmdlet to remove all the test devices configured for a given scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTestDevice"}

**Below Content Applies To:** Lync Server 2013

By identifying specific Lync Phone Edition-compatible phones or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Lync Server, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are hardware devices that run Lync Server.
These devices are created by using the New-CsTestDevice cmdlet.
Once created, the devices can later be removed by running the Remove-CsTestDevice cmdlet.
Note that removing the device as a test device does not affect the actual device itself; for example, your Lync Phone Edition-compatible phone can still be used to access Lync Server.
The only difference is that, because the device is no longer a test device, it will no longer download device update rules that are in the pending state.
Instead, the device will wait until the rules have been approved before downloading and installing them.

Remove-CsTestDevice can be used to remove individual test devices configured at either the global or site scope.
You can also use the cmdlet to remove all the test devices configured for a given scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTestDevice"}

**Below Content Applies To:** Skype for Business Server 2015

By identifying specific Skype for Business-compatible phones or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Skype for Business Server 2015, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are hardware devices that run Skype for Business.
These devices are created by using the New-CsTestDevice cmdlet.
Once created, the devices can later be removed by running the Remove-CsTestDevice cmdlet.
Note that removing the device as a test device does not affect the actual device itself; for example, your Skype for Business-compatible phone can still be used to access Skype for Business Server 2015.
The only difference is that, because the device is no longer a test device, it will no longer download device update rules that are in the pending state.
Instead, the device will wait until the rules have been approved before downloading and installing them.

The Remove-CsTestDevice cmdlet can be used to remove individual test devices configured at either the global or site scope.
You can also use the cmdlet to remove all the test devices configured for a given scope.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsTestDevice -Identity site:Redmond
```

The preceding command removes all the test devices from the Redmond site.
This will remove the device collection as well as the individual test devices.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes all the test devices from the Redmond site.
This will remove the device collection as well as the individual test devices.

Remove-CsTestDevice -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes all the test devices from the Redmond site.
This will remove the device collection as well as the individual test devices.

Remove-CsTestDevice -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice | Remove-CsTestDevice
```

The command shown in Example 2 removes all the test devices configured for use in the organization; this is done by using Get-CsTestDevice to return all the test device collections, and then piping all of those items to Remove-CsTestDevice.
Note that the global test device collection cannot be removed; however, this command will delete all the individual test devices configured at the global level.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all the test devices configured for use in the organization; this is done by using Get-CsTestDevice to return all the test device collections, and then piping all of those items to Remove-CsTestDevice.
Note that the global test device collection cannot be removed; however, this command will delete all the individual test devices configured at the global level.

Get-CsTestDevice | Remove-CsTestDevice

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all the test devices configured for use in the organization; this is done by using the Get-CsTestDevice cmdlet to return all the test device collections, and then piping all of those items to the Remove-CsTestDevice cmdlet.
Note that the global test device collection cannot be removed; however, this command will delete all the individual test devices configured at the global level.

Get-CsTestDevice | Remove-CsTestDevice

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice -Filter "site:" | Remove-CsTestDevice
```

In Example 3, all the test devices configured at the site scope are removed.
To carry out this task, Get-CsTestDevice and the Filter parameter are used to return all the test devices that have an Identity that begins with the string value "site:".
This filtered collection is then piped to Remove-CsTestDevice, which deletes all the items in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the test devices configured at the site scope are removed.
To carry out this task, Get-CsTestDevice and the Filter parameter are used to return all the test devices that have an Identity that begins with the string value "site:".
This filtered collection is then piped to Remove-CsTestDevice, which deletes all the items in the collection.

Get-CsTestDevice -Filter "site:" | Remove-CsTestDevice

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the test devices configured at the site scope are removed.
To carry out this task, the Get-CsTestDevice cmdlet and the Filter parameter are used to return all the test devices that have an Identity that begins with the string value "site:".
This filtered collection is then piped to the Remove-CsTestDevice cmdlet, which deletes all the items in the collection.

Get-CsTestDevice -Filter "site:" | Remove-CsTestDevice

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsTestDevice | Where-Object {$_.Name -match "LG-Nortel Phone"} | Remove-CsTestDevice
```

The command shown in Example 4 deletes all the LG-Nortel Phone test devices.
To do this, the command first calls Get-CsTestDevice to return all the test devices configured for use in the organization.
That information is then piped to the Where-Object cmdlet, which uses the -match operator to return any devices that have the string value "LG-Nortel" anywhere in the Name property.
Any test device meeting that criterion is then deleted by using Remove-CsTestDevice.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 deletes all the LG-Nortel Phone test devices.
To do this, the command first calls Get-CsTestDevice to return all the test devices configured for use in the organization.
That information is then piped to the Where-Object cmdlet, which uses the -match operator to return any devices that have the string value "LG-Nortel" anywhere in the Name property.
Any test device meeting that criterion is then deleted by using Remove-CsTestDevice.

Get-CsTestDevice | Where-Object {$_.Name -match "LG-Nortel Phone"} | Remove-CsTestDevice

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 deletes all the LG-Nortel Phone test devices.
To do this, the command first calls the Get-CsTestDevice cmdlet to return all the test devices configured for use in the organization.
That information is then piped to the Where-Object cmdlet, which uses the -match operator to return any devices that have the string value "LG-Nortel" anywhere in the Name property.
Any test device meeting that criterion is then deleted by using the Remove-CsTestDevice cmdlet.

Get-CsTestDevice | Where-Object {$_.Name -match "LG-Nortel Phone"} | Remove-CsTestDevice

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Identity of the test device to be removed.
To remove a specific device, include both the scope (for example, site:Redmond) and the device name; for example: -Identity "site:Redmond/UCPhoneTest".
To remove all the devices from a particular site use syntax similar to this: -Identity "site:Redmond".

Test devices can also be removed from the global scope.
The global test device collection itself cannot be removed; however, the following command will delete all the devices stored in the global collection:

Remove-CsTestDevice -Identity global



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity of the test device to be removed.
To remove a specific device, include both the scope (for example, site:Redmond) and the device name; for example:

-Identity "site:Redmond/UCPhoneTest"

To remove all the devices from a particular site use syntax similar to this:

-Identity "site:Redmond"

Test devices can also be removed from the global scope.
The global test device collection itself cannot be removed; however, the following command will delete all the devices stored in the global collection:

Remove-CsTestDevice -Identity global



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.
Remove-CsTestDevice accepts pipelined input of the test device object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.
The Remove-CsTestDevice cmdlet accepts pipelined input of the test device object.

## OUTPUTS

###  
Remove-CsTestDevice does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

###  
The Remove-CsTestDevice cmdlet does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/995111e0-2ab2-49a1-83f0-fc873f5b5426(OCS.14).aspx)

[Get-CsTestDevice]()

[New-CsTestDevice]()

[Set-CsTestDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/995111e0-2ab2-49a1-83f0-fc873f5b5426(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/995111e0-2ab2-49a1-83f0-fc873f5b5426(OCS.16).aspx)

