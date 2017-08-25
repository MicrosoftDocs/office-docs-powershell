---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsAnalogDevice

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing device from the collection of analog devices that can be managed by using Microsoft Lync Server 2010.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).

**Below Content Applies To:** Lync Server 2013

Removes an existing device from the collection of analog devices that can be managed by using Lync Server.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing device from the collection of analog devices that can be managed by using Skype for Business Server 2015.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsAnalogDevice [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Analog devices include telephones, fax machines, modems, and teletype/telecommunication devices for the deaf (TTY/TDD) devices connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices for organizations, Lync Server 2010  lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

Over time, you might need to delete a contact object associated with an analog device.
For example, if you phase out all of your fax machines, you will no longer need to have analog devices (and contact objects) associated with those machines.
The Remove-CsAnalogDevice cmdlet provides a way for you to delete analog devices.
When you run this cmdlet, the device will be deleted from the list of analog devices returned by Get-CsAnalogDevice.
Additionally, the contact object associated with that device will be deleted from Active Directory Domain Services (AD DS).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsAnalogDevice cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsAnalogDevice"}

**Below Content Applies To:** Lync Server 2013

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices for organizations, Lync Server lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

Over time, you might need to delete a contact object associated with an analog device.
For example, if you phase out all of your fax machines, you will no longer need to have analog devices (and contact objects) associated with those machines.
The Remove-CsAnalogDevice cmdlet provides a way for you to delete analog devices.
When you run this cmdlet, the device will be deleted from the list of analog devices returned by Get-CsAnalogDevice.
Additionally, the contact object associated with that device will be deleted from Active Directory Domain Services (AD DS).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsAnalogDevice cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsAnalogDevice"}

**Below Content Applies To:** Skype for Business Server 2015

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices for organizations, Skype for Business Server 2015 lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

Over time, you might need to delete a contact object associated with an analog device.
For example, if you phase out all of your fax machines, you will no longer need to have analog devices (and contact objects) associated with those machines.
The Remove-CsAnalogDevice cmdlet provides a way for you to delete analog devices.
When you run this cmdlet, the device will be deleted from the list of analog devices returned by the Get-CsAnalogDevice cmdlet.
Additionally, the contact object associated with that device will be deleted from Active Directory Domain Services.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsAnalogDevice -Identity "CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com"
```

Example 1 deletes the analog device that has the Identity CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the analog device that has the Identity CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com.

Remove-CsAnalogDevice -Identity "CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the analog device that has the Identity CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com.

Remove-CsAnalogDevice -Identity "CN={e5e7daba-394e-46ec-95a1-1f2a9947aad2},CN=Users,DC=litwareinc,DC=com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsAnalogDevice -Filter {DisplayName -eq "Building 14 Receptionist"} | Remove-CsAnalogDevice
```

The command shown in Example 2 deletes any analog devices that have been assigned the display name "Building 14 Receptionist".
To carry out this task, the command first calls Get-CsAnalogDevice along with the Filter parameter; the filter value {DisplayName -eq "Building 14 Receptionist"} limits the returned objects to analog devices where the DisplayName property is equal to "Building 14 Receptionist".
The returned items are then piped to, and removed by, Remove-CsAnalogDevice.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 deletes any analog devices that have been assigned the display name "Building 14 Receptionist".
To carry out this task, the command first calls Get-CsAnalogDevice along with the Filter parameter; the filter value {DisplayName -eq "Building 14 Receptionist"} limits the returned objects to analog devices where the DisplayName property is equal to "Building 14 Receptionist".
The returned items are then piped to, and removed by, Remove-CsAnalogDevice.

Get-CsAnalogDevice -Filter {DisplayName -eq "Building 14 Receptionist"} | Remove-CsAnalogDevice

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 deletes any analog devices that have been assigned the display name "Building 14 Receptionist".
To carry out this task, the command first calls the Get-CsAnalogDevice cmdlet along with the Filter parameter; the filter value {DisplayName -eq "Building 14 Receptionist"} limits the returned objects to analog devices where the DisplayName property is equal to "Building 14 Receptionist".
The returned items are then piped to, and removed by, the Remove-CsAnalogDevice cmdlet.

Get-CsAnalogDevice -Filter {DisplayName -eq "Building 14 Receptionist"} | Remove-CsAnalogDevice

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsAnalogDevice -Filter {VoicePolicy -eq "RedmondVoicePolicy"} | Remove-CsAnalogDevice
```

The preceding command deletes all of the analog devices that have been assigned the voice policy RedmondVoicePolicy.
To do this, Get-CsAnalogDevice and the Filter parameter are used to retrieve all of the analog devices where the VoicePolicy property is equal to RedmondVoicePolicy.
The filtered collection is then piped to the Remove-CsAnalogDevice cmdlet, which deletes each item in that collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all of the analog devices that have been assigned the voice policy RedmondVoicePolicy.
To do this, Get-CsAnalogDevice and the Filter parameter are used to retrieve all of the analog devices where the VoicePolicy property is equal to RedmondVoicePolicy.
The filtered collection is then piped to the Remove-CsAnalogDevice cmdlet, which deletes each item in that collection.

Get-CsAnalogDevice -Filter {VoicePolicy -eq "RedmondVoicePolicy"} | Remove-CsAnalogDevice

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all of the analog devices that have been assigned the voice policy RedmondVoicePolicy.
To do this, the Get-CsAnalogDevice cmdlet and the Filter parameter are used to retrieve all of the analog devices where the VoicePolicy property is equal to RedmondVoicePolicy.
The filtered collection is then piped to the Remove-CsAnalogDevice cmdlet, which deletes each item in that collection.

Get-CsAnalogDevice -Filter {VoicePolicy -eq "RedmondVoicePolicy"} | Remove-CsAnalogDevice

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsAnalogDevice -Filter {AnalogFax -eq $True} | Remove-CsAnalogDevice
```

The command shown in Example 4 removes all the analog fax machines currently in use in the organization.
To carry out this task, Get-CsAnalogDevice is called first along with the Filter parameter; the filter value {AnalogFax -eq $True} picks out only those devices where the AnalogFax property is equal to True.
In turn, this filtered collection is piped to Remove-CsAnalogDevice, which removes each item in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 removes all the analog fax machines currently in use in the organization.
To carry out this task, Get-CsAnalogDevice is called first along with the Filter parameter; the filter value {AnalogFax -eq $True} picks out only those devices where the AnalogFax property is equal to True.
In turn, this filtered collection is piped to Remove-CsAnalogDevice, which removes each item in the collection.

Get-CsAnalogDevice -Filter {AnalogFax -eq $True} | Remove-CsAnalogDevice

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 removes all the analog fax machines currently in use in the organization.
To carry out this task, the Get-CsAnalogDevice cmdlet is called first along with the Filter parameter; the filter value {AnalogFax -eq $True} picks out only those devices where the AnalogFax property is equal to True.
In turn, this filtered collection is piped to the Remove-CsAnalogDevice cmdlet, which removes each item in the collection.

Get-CsAnalogDevice -Filter {AnalogFax -eq $True} | Remove-CsAnalogDevice

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier for the analog device to be removed.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, these devices, use a GUID (globally unique identifier) as their common name; that means analog devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Because of that you might find it easier to retrieve analog devices by using the Get-CsAnalogDevice cmdlet, and then piping the returned objects to Remove-CsAnalogDevice.



**Below Content Applies To:** Lync Server 2013

Unique identifier for the analog device to be removed.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, these devices, use a globally unique identifier (GUID) as their common name; that means analog devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Because of that you might find it easier to retrieve analog devices by using the Get-CsAnalogDevice cmdlet, and then piping the returned objects to Remove-CsAnalogDevice.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the analog device to be removed.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, these devices, use a globally unique identifier (GUID) as their common name; that means analog devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Because of that you might find it easier to retrieve analog devices by using the Get-CsAnalogDevice cmdlet, and then piping the returned objects to the Remove-CsAnalogDevice cmdlet.



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.
Remove-CsAnalogDevice accepts pipelined instances of the analog device object.

###  
Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.
The Remove-CsAnalogDevice cmdlet accepts pipelined instances of the analog device object.

## OUTPUTS

###  
Remove-CsAnalogDevice deletes existing instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

###  
The Remove-CsAnalogDevice cmdlet deletes existing instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/61250894-fde6-476d-aaa2-ec5692af02b3(OCS.14).aspx)

[Get-CsAnalogDevice]()

[Move-CsAnalogDevice]()

[New-CsAnalogDevice]()

[Set-CsAnalogDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/61250894-fde6-476d-aaa2-ec5692af02b3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/61250894-fde6-476d-aaa2-ec5692af02b3(OCS.16).aspx)

