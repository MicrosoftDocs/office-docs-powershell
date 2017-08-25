---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAnalogDevice

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing device in the collection of analog devices that can be managed by using Microsoft Lync Server 2010.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).

**Below Content Applies To:** Lync Server 2013

Modifies an existing device in the collection of analog devices that can be managed by using Lync Server.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing device in the collection of analog devices that can be managed by using Skype for Business Server 2015.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsAnalogDevice [-Identity] <UserIdParameter> [-Gateway <Fqdn>] [-AnalogFax <Boolean>] [-LineURI <String>]
 [-SipAddress <String>] [-DisplayName <String>] [-DisplayNumber <String>] [-DomainController <Fqdn>]
 [-EnterpriseVoiceEnabled <Boolean>] [-PassThru] [-WhatIf] [-Confirm] [-Enabled <Boolean>]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (that is, the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices, Lync Server 2010 lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

The Set-CsAnalogDevice cmdlet provides a way for you to modify the properties of the contact objects associated with analog devices.
For example, you can change the contact's Active Directory display name or the line Uniform Resource Identifier (URI) associated with the device.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAnalogDevice cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAnalogDevice"}

**Below Content Applies To:** Lync Server 2013

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (that is, the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices, Lync Server lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

The Set-CsAnalogDevice cmdlet provides a way for you to modify the properties of the contact objects associated with analog devices.
For example, you can change the contact's Active Directory display name or the line Uniform Resource Identifier (URI) associated with the device.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAnalogDevice cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAnalogDevice"}

**Below Content Applies To:** Skype for Business Server 2015

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (that is, the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices, Skype for Business Server 2015 lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

The Set-CsAnalogDevice cmdlet provides a way for you to modify the properties of the contact objects associated with analog devices.
For example, you can change the contact's Active Directory display name or the line Uniform Resource Identifier (URI) associated with the device.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsAnalogDevice -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -LineUri "TEL:+14255551298"
```

The preceding command changes the value of the LineUri property for the analog device that has the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 changes the value of the LineUri property for the analog device that has the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

Set-CsAnalogDevice -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -LineUri "TEL:+14255551298"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 changes the value of the LineUri property for the analog device that has the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

Set-CsAnalogDevice -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -LineUri "TEL:+14255551298"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsAnalogDevice -Filter {Gateway -eq "192.168.0.240"} | Set-CsAnalogDevice -Gateway "192.168.1.100"
```

The command shown in Example 2 changes the gateway for each analog device currently using the gateway 192.168.0.240.
To perform this task, Get-CsAnalogDevice is called along with the Filter parameter; the filter value {Gateway -eq "192.168.0.240"} ensures that only devices with a Gateway equal to (-eq) 192.168.0.240 are returned.
This filtered collection is then piped to Set-CsAnalogDevice, which takes each item in the collection and changes the value of the Gateway property to 192.168.1.100.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 changes the gateway for each analog device currently using the gateway 192.168.0.240.
To perform this task, Get-CsAnalogDevice is called along with the Filter parameter; the filter value {Gateway -eq "192.168.0.240"} ensures that only devices with a Gateway equal to (-eq) 192.168.0.240 are returned.
This filtered collection is then piped to Set-CsAnalogDevice, which takes each item in the collection and changes the value of the Gateway property to 192.168.1.100.

Get-CsAnalogDevice -Filter {Gateway -eq "192.168.0.240"} | Set-CsAnalogDevice -Gateway "192.168.1.100"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 changes the gateway for each analog device currently using the gateway 192.168.0.240.
To perform this task, the Get-CsAnalogDevice cmdlet is called along with the Filter parameter; the filter value {Gateway -eq "192.168.0.240"} ensures that only devices with a Gateway equal to (-eq) 192.168.0.240 are returned.
This filtered collection is then piped to the Set-CsAnalogDevice cmdlet, which takes each item in the collection and changes the value of the Gateway property to 192.168.1.100.

Get-CsAnalogDevice -Filter {Gateway -eq "192.168.0.240"} | Set-CsAnalogDevice -Gateway "192.168.1.100"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Unique identifier for the analog device being modified.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, analog devices use a GUID (globally unique identifier) as their common name, which means devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
This means you might find it easier to retrieve devices by using the Get-CsAnalogDevice cmdlet, rather than by piping the returned objects to Set-CsAnalogDevice.



**Below Content Applies To:** Lync Server 2013

Unique identifier for the analog device being modified.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, analog devices use a GUID (globally unique identifier) as their common name, which means devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
This means you might find it easier to modify analog devices by using the Get-CsAnalogDevice cmdlet to return the analog devices objects and then piping those objects to Set-CsAnalogDevice.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the analog device being modified.
Analog devices are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, analog devices use a GUID (globally unique identifier) as their common name, which means devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
This means you might find it easier to modify analog devices by using the Get-CsAnalogDevice cmdlet to return the analog devices objects and then piping those objects to the Set-CsAnalogDevice cmdlet.



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

### -Gateway
IP address of the PSTN gateway to be used by the analog device.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnalogFax
Set to True ($True) if the analog device is a fax machine.
Set to False ($False) if the device is not a fax machine.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineURI
Phone number for the analog device.
The line URI should be specified by using the E.164 format, and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI; for example: TEL:+14255551297;ext=51297.

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

### -SipAddress
**Below Content Applies To:** Lync Server 2010

Unique identifier that allows the analog device to communicate with SIP devices such as Microsoft Lync 2010.
The SIP address must be prefaced by the prefix "sip:".
For example: sip:bldg14lobby@litwareinc.com.



**Below Content Applies To:** Lync Server 2013

Unique identifier that allows the analog device to communicate with SIP devices such as Microsoft Lync 2013 Preview.
The SIP address must be prefaced by the prefix "sip:".
For example: sip:bldg14lobby@litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier that allows the analog device to communicate with SIP devices such as Skype for Business Server 2015.
The SIP address must be prefaced by the prefix "sip:".
For example: sip:bldg14lobby@litwareinc.com.



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

### -DisplayName
Configures the Active Directory display name of the analog device.

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

### -DisplayNumber
**Below Content Applies To:** Lync Server 2010

Phone number as displayed in Lync 2010.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; etc.



**Below Content Applies To:** Lync Server 2013

Phone number as displayed in Lync.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; etc.



**Below Content Applies To:** Skype for Business Server 2015

Phone number as displayed in Skype for Business.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; etc.



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

### -DomainController
Enables you to connect to the specified domain controller in order to modify contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-mcs-001) or its fully qualified domain name (FQDN) (for example, atl-mcs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
Indicates whether the contact object for the analog device has been enabled for Enterprise Voice, the VoIP solution offered by Microsoft.
With Enterprise Voice, telephone calls can be made using the Internet rather than using the standard telephone network.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns an object representing the common area phone.

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

### -Enabled
**Below Content Applies To:** Lync Server 2010

{{Fill Enabled Description}}



**Below Content Applies To:** Lync Server 2013

When set to True ($True) the analog device can be used with Lync.



**Below Content Applies To:** Skype for Business Server 2015

When set to True ($True) the analog device can be used with Skype for Business.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchivingPolicy
**Below Content Applies To:** Lync Server 2013

Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

* Uninitialized
* UseLyncArchivingPolicy
* ArchivingToExchange
* NoArchiving



**Below Content Applies To:** Skype for Business Server 2015

Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

ArchivingToExchange

NoArchiving



```yaml
Type: ExchangeArchivingPolicyOptionsEnum
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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.
Set-CsAnalogDevice accepts pipelined instances of the analog device object.

###  
Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.
The Set-CsAnalogDevice cmdlet accepts pipelined instances of the analog device object.

## OUTPUTS

###  
By default, Set-CsAnalogDevice does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

###  
By default, the Set-CsAnalogDevice cmdlet does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b05e729e-cdef-4c78-8ce7-b183c3208a93(OCS.14).aspx)

[Get-CsAnalogDevice]()

[Move-CsAnalogDevice]()

[New-CsAnalogDevice]()

[Remove-CsAnalogDevice]()

[Online Version](http://technet.microsoft.com/EN-US/library/b05e729e-cdef-4c78-8ce7-b183c3208a93(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b05e729e-cdef-4c78-8ce7-b183c3208a93(OCS.16).aspx)

