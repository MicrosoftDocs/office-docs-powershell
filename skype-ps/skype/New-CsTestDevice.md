---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsTestDevice

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new device update management test device.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new device update management test device.
Test devices provide a way for administrators to test firmware updates before those updates are distributed to all the devices in an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsTestDevice [-Identity] <XdsIdentity> -Identifier <String> -IdentifierType <IdentifierType> [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTestDevice -Identifier <String> -IdentifierType <IdentifierType> -Name <String> -Parent <String> [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

By identifying specific Microsoft Lync 2010 Phone Edition-compatible phones or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to the relevant devices in the organization.
When device update rules are imported to Microsoft Lync Server 2010, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
These devices can be configured at either the global scope or the site scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsTestDevice"}

**Below Content Applies To:** Lync Server 2013

By identifying specific phones that are compatible with Lync Phone Edition or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to the relevant devices in the organization.
When device update rules are imported to Lync Server, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
These devices can be configured at either the global scope or the site scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsTestDevice cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsTestDevice"}

**Below Content Applies To:** Skype for Business Server 2015

By identifying specific phones that are compatible with Skype for Business or other devices as test devices, administrators can verify and approve firmware updates before those updates are rolled out to the relevant devices in the organization.
When device update rules are imported to Skype for Business Server 2015, they are marked as "pending," which means that the updates corresponding to these rules will not automatically be downloaded and installed by the affected devices.

Instead, these pending rules will be downloaded and installed by any relevant test devices.
That's the idea behind test devices: new device update rules are automatically applied to test devices, giving administrators the opportunity to verify that the firmware updates work as expected.
If they do, those administrators can then mark the rules as approved; approved rules are then downloaded and installed by all the relevant devices in the organization.

Test devices are created by using the New-CsTestDevice cmdlet.
These devices can be configured at either the global scope or the site scope.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"
```

The preceding command creates a new test device (named UCPhone) for the Redmond site.
Note the syntax used to specify the device Identity: the device scope (site:Redmond) followed by the / character followed by the device Name (UCPhone).
This device uses the serial number as the IdentifierType, and has a serial number of 07823-A345.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new test device (named UCPhone) for the Redmond site.
Note the syntax used to specify the device Identity: the device scope (site:Redmond) followed by the / character followed by the device Name (UCPhone).
This device uses the serial number as the IdentifierType, and has a serial number of 07823-A345.

New-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new test device (named UCPhone) for the Redmond site.
Note the syntax used to specify the device Identity: the device scope (site:Redmond) followed by the / character followed by the device Name (UCPhone).
This device uses the serial number as the IdentifierType, and has a serial number of 07823-A345.

New-CsTestDevice -Identity site:Redmond/UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsTestDevice -Parent Redmond -Name UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the Identity parameter is not used.
Instead, the Parent parameter is used to specify the scope for the new test device (site:Redmond) and the Name parameter is used to indicate the name for the new device (UCPhone).
The New-CsTestDevice cmdlet will take those two parameter values and construct the test device Identity (site:Redmond/UCPhone) for you.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the Identity parameter is not used.
Instead, the Parent parameter is used to specify the scope for the new test device (site:Redmond) and the Name parameter is used to indicate the name for the new device (UCPhone).
The New-CsTestDevice cmdlet will take those two parameter values and construct the test device Identity (site:Redmond/UCPhone) for you.

New-CsTestDevice -Parent Redmond -Name UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the Identity parameter is not used.
Instead, the Parent parameter is used to specify the scope for the new test device (site:Redmond) and the Name parameter is used to indicate the name for the new device (UCPhone).
The New-CsTestDevice cmdlet will take those two parameter values and construct the test device Identity (site:Redmond/UCPhone) for you.

New-CsTestDevice -Parent "site:Redmond" -Name UCPhone -IdentifierType SerialNumber -Identifier "07823-A345"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the Identity for the new test device.
An Identity consists of both the scope where the test device is to be assigned (for example, site:Redmond) and the name for the new device (for example, UCPhone).
To assign a test device named UCPhone to the Redmond site, your Identity parameter must look like this: -Identity "site:Redmond/UCPhone".



**Below Content Applies To:** Skype for Business Server 2015

Indicates the Identity for the new test device.
An Identity consists of both the scope where the test device is to be assigned (for example, site:Redmond) and the name for the new device (for example, UCPhone).
To assign a test device named UCPhone to the Redmond site, your Identity parameter must look like this:

-Identity "site:Redmond/UCPhone"



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identifier
Based on the IdentifierType, indicates the Media Access Control (MAC) address or serial number of the new test device.
Serial numbers can be specified using numbers, letters, hyphens and underscores; for example:

-Identifier "AB37_679e"

MAC addresses must be specified as six or more two-character pairs; depending on the MAC address, these pairs can either be joined together in a single string or can be separated using hyphens or colons.
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

Required: True
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name for the new test device (names must be unique within a given scope).
The Name parameter should be used only when using the Parent parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
**Below Content Applies To:** Lync Server 2010

Name of the scope (for example, site:Redmond) where the new test device is to be assigned.
If you use the Parent parameter then you must also use the Name parameter; for example: -Parent site:Redmond -Name UCPhone.
If you use the Parent parameter then you should not use  the Identity parameter, and vice-versa.



**Below Content Applies To:** Lync Server 2013

Name of the scope (for example, site:Redmond) where the new test device is to be assigned.
If you use the Parent parameter then you must also use the Name parameter; for example: -Parent site:Redmond -Name UCPhone.
If you use the Parent parameter then you should not use the Identity parameter, and vice-versa.



**Below Content Applies To:** Skype for Business Server 2015

Name of the scope (for example, site:Redmond) where the new test device is to be assigned.
If you use the Parent parameter then you must also use the Name parameter; for example:

-Parent site:Redmond -Name UCPhone

If you use the Parent parameter then you should not use the Identity parameter, and vice-versa.



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
None.
New-CsTestDevice does not accept pipelined input.

###  
None.
The New-CsTestDevice cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.TestDevice object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3d223c5e-b987-4353-9bf7-b247a2bdfa25(OCS.14).aspx)

[Get-CsTestDevice]()

[Remove-CsTestDevice]()

[Set-CsTestDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/3d223c5e-b987-4353-9bf7-b247a2bdfa25(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3d223c5e-b987-4353-9bf7-b247a2bdfa25(OCS.16).aspx)

