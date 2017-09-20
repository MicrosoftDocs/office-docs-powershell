---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsAnalogDevice
schema: 2.0.0
---

# New-CsAnalogDevice

## SYNOPSIS

Creates a new analog device that can be managed by using Skype for Business Server.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### OU
```
New-CsAnalogDevice -LineUri <String> [-SipAddress <String>] -RegistrarPool <Fqdn> [-DisplayName <String>]
 [-DisplayNumber <String>] -AnalogFax <Boolean> -Gateway <Fqdn> -OU <OUIdParameter> [-PassThru] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### DN
```
New-CsAnalogDevice -LineUri <String> [-SipAddress <String>] -RegistrarPool <Fqdn> [-DisplayName <String>]
 [-DisplayNumber <String>] -AnalogFax <Boolean> -Gateway <Fqdn> -DN <ADObjectId> [-PassThru] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices, Skype for Business Server lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

New analog devices are created by using the New-CsAnalogDevice cmdlet.
This cmdlet can either create new contact objects for use with analog devices or it can associate existing contact objects with a new device.
For details, see the OU and the DN parameter descriptions in this topic.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsAnalogDevice -LineUri tel:+14255556001 -DisplayName "Building 14 Receptionist" -RegistrarPool redmond-Cs-001.litwareinc.com -AnalogFax $False -Gateway 192.168.0.240 -OU "ou=Telecommunications,dc=litwareinc,dc=com"
```

The command shown in Example 1 creates a new analog device with the phone number (LineUri) 1-425-555-6001.
(Note that the phone number must be specified using the E.164 format.) In addition to the LineUri parameter, the other parameters used in this command are DisplayName (to set the Active Directory display name of the device); RegistrarPool (to specify the Registrar pool); AnalogFax (set to $False, to indicate that this is a phone and not a fax machine); Gateway (set to the IP address of the gateway); and OU (the distinguished name of the Active Directory OU where the device's contact object should be created).


## PARAMETERS

### -LineUri
Phone number for the analog device.
The line Uniform Resource Identifier (URI) should be specified by using the E.164 format, and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: "TEL:+14255551297;ext=51297".

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

### -SipAddress

Unique identifier (similar to an e-mail address) that allows the analog device to communicate with SIP devices such as Skype for Business.
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

### -RegistrarPool
Fully qualified domain name (FQDN) of the Registrar pool where the contact object should be homed.
For example: -RegistrarPool "atl-cs-001.litwareinc.com".

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -AnalogFax
Set to True ($True) if the analog device is a fax machine.
Set to False ($False) if the device is not a fax machine.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Gateway
IP address of the PSTN gateway to be used by the analog device.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Distinguished name of the Active Directory organizational unit (OU) where the contact object should be located.
For example: `-OU "ou=Redmond,dc=litwareinc,dc=com".`

If you include the OU parameter, a new contact will be created in the specified OU, and the contact will automatically be assigned a GUID (globally unique identifier) as its common name.
As a result, the contact object will have a name similar to this: {ce84964a-c4da-4622-ad34-c54ff3ed361f}.

```yaml
Type: OUIdParameter
Parameter Sets: OU
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DN
Enables you to associate an existing Active Directory contact object with the analog device.
If you have a contact object you want to associate with an analog device, use the DN parameter followed by the distinguished name of that contact.
For example: `-DN "cn=Building 14 Lobby,dc=litwareinc,dc=com".`
Note that the command will fail if the specified contact does not exist.

You cannot use the OU and the DN parameters in the same command.

```yaml
Type: ADObjectId
Parameter Sets: DN
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsAnalogDevice cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsAnalogDevice cmdlet creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

## NOTES

## RELATED LINKS

[Get-CsAnalogDevice]()

[Move-CsAnalogDevice]()

[Remove-CsAnalogDevice]()

[Set-CsAnalogDevice]()
