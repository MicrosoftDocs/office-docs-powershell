---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsTestDevice

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies one or more of the device update management test devices that have been configured for use in your organization.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies one or more of the device update management test devices that have been configured for use in your organization.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsTestDevice [[-Identity] <XdsIdentity>] [-Identifier <String>] [-IdentifierType <IdentifierType>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTestDevice [-Instance <PSObject>] [-Identifier <String>] [-IdentifierType <IdentifierType>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

By identifying specific phones running Microsoft Lync 2010 Phone Edition or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Microsoft Lync Server 2010, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
After a test device has been created, you can then use the Set-CsTestDevice cmdlet to change the Identifier and the IdentifierType of that device, or any other test device.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsTestDevice"}

Below Content Applies To: Lync Server 2013

By identifying specific phones running Lync Phone Edition or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Lync Server, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
After a test device has been created, you can then use the Set-CsTestDevice cmdlet to change the Identifier and the IdentifierType of that device, or any other test device.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsTestDevice"}

Below Content Applies To: Skype for Business Server 2015

By identifying specific phones running Skype for Business or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to all the relevant devices in the organization.
When device update rules are imported to Skype for Business Server 2015, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
After a test device has been created, you can then use the Set-CsTestDevice cmdlet to change the Identifier and the IdentifierType of that device, or any other test device.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsTestDevice -Identity site:Redmond/UCPhone -Identifier "09768-ABDR-83295"
```

The preceding command modifies the Identifier property for the test device named UCPhone assigned to the Redmond site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 modifies the Identifier property for the test device named UCPhone assigned to the Redmond site.

Set-CsTestDevice -Identity site:Redmond/UCPhone -Identifier "09768-ABDR-83295"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 modifies the Identifier property for the test device named UCPhone assigned to the Redmond site.

Set-CsTestDevice -Identity site:Redmond/UCPhone -Identifier "09768-ABDR-83295"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "09768-ABDR-83295"
```

The command shown in Example 2 also modifies the test device named UCPhone assigned to the Redmond site.
In this case, however, the command not only specifies a new Identifier but also assigns a new IdentifierType: SerialNumber.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 also modifies the test device named UCPhone assigned to the Redmond site.
In this case, however, the command not only specifies a new Identifier but also assigns a new IdentifierType: SerialNumber.

Set-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "09768-ABDR-83295"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 also modifies the test device named UCPhone assigned to the Redmond site.
In this case, however, the command not only specifies a new Identifier but also assigns a new IdentifierType: SerialNumber.

Set-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "09768-ABDR-83295"

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Indicates the Identity of the test device to be modified.
For example: -Identity site:Redmond/UCPhoneTestDevice.
Note that you cannot use wildcards when specifying an Identity.



Below Content Applies To: Skype for Business Server 2015

Indicates the Identity of the test device to be modified.
For example:

-Identity site:Redmond/UCPhoneTestDevice

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

### -Identifier
Based on the IdentifierType, indicates the Media Access Control (MAC) address or serial number of the new test device.
Serial numbers can be specified using numbers, letters, hyphens and underscores; for example:

-Identifier "AB37_679e"

MAC addresses must be specified as six or more two-character pairs; depending on the MAC address, these pairs can be a single string value or they can be separated using hyphens or colons.
(Note that MAC addresses can include both letters and/or numbers.) Each of the following are valid MAC addresses:

010203040506

01-02-03-04-05-06

01:02:03:04:05:06

A MAC address such as 01-02-03-04-05 will not be accepted because it does not have at least six two-character pairs.

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

### -IdentifierType
Indicates whether the test device will be uniquely identified by its MAC address or by its serial number.
To identify a device by its MAC address, set the IdentifierType to MACAddress.
To identify a device by its serial number, set the IdentifierType to SerialNumber.
MACAddress and SerialNumber are the only allowed values.

```yaml
Type: IdentifierType
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
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.
Set-CsTestDevice accepts pipelined input of the test device object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.
The Set-CsTestDevice cmdlet accepts pipelined input of the test device object.

## OUTPUTS

###  
Set-CsTestDevice does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

###  
The Set-CsTestDevice cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0a9fabfc-b0d3-4c94-ae04-0a87f0886db8(OCS.14).aspx)

[Get-CsTestDevice]()

[New-CsTestDevice]()

[Remove-CsTestDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/0a9fabfc-b0d3-4c94-ae04-0a87f0886db8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0a9fabfc-b0d3-4c94-ae04-0a87f0886db8(OCS.16).aspx)

