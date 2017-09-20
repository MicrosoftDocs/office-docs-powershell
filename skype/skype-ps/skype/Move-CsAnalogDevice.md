---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Move-CsAnalogDevice
schema: 2.0.0
---

# Move-CsAnalogDevice

## SYNOPSIS

Moves one or more analog devices to a new Registrar pool.
An analog device is a telephone or other device that is connected to the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Move-CsAnalogDevice [-Identity] <UserIdParameter> [-Target] <Fqdn> [-DomainController <Fqdn>]
 [-ProxyPool <Fqdn>] [-Force] [-PassThru] [-WhatIf] [-Confirm] [-IgnoreBackendStoreException]
 [<CommonParameters>]
```

### Identity
```
Move-CsAnalogDevice [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm] [-DomainController <Fqdn>]
 [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### Users
```
Move-CsAnalogDevice [-Target] <Fqdn> -UserList <String> [-ConcurrentMovesPerFE <Int32>] [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>]
 [-Report <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In order to enable administrators to manage analog devices, Skype for Business Server lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by assigning policies and dial plans to the contact.

The Move-CsAnalogDevice cmdlet provides a way for you to move an existing analog device to a new Registrar pool.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsAnalogDevice -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -Target atl-cs-001.litwareinc.com
```

The command shown in Example 1 moves the analog device with the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com to the Registrar pool atl-cs-001.litwareinc.com.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsAnalogDevice | Where-Object {$_.DisplayName -eq "Building 14, Room 142"} | Move-CsAnalogDevice -Target atl-cs-001.litwareinc.com
```

In Example 2, the analog device that has the Active Directory display name, "Building 14, Room 142", is moved to the Registrar pool atl-cs-001.litwareinc.com.
To do this, the Get-CsAnalogDevice cmdlet is first called without any parameters in order to return a collection of all the analog devices currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the devices that have the display name "Building 14, Room 142".
That filtered collection is then piped to the Move-CsAnalogDevice cmdlet, which moves all of the devices in the collection to the Registrar pool atl-cs-001.litwareinc.com.


### -------------------------- EXAMPLE 3 -------------------------- 
```

Get-CsAnalogDevice | Where-Object {$_.DisplayName -like "Building 14*"} | Move-CsAnalogDevice -Target atl-cs-001.litwareinc.com
```

The command shown in Example 3 moves all of the analog devices that have a display name that begins with the string value "Building 14".
To carry out this task, the command first calls the Get-CsAnalogDevice cmdlet to return a collection of all the analog devices currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects all the devices that have a display name that begins with the string value "Building 14".
The filtered collection is then piped to the Move-CsAnalogDevice cmdlet, which moves each device in the collection to the Registrar pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -Identity
Unique identifier for the analog device.
Analog devices are identified by using the Active Directory distinguished name of the associated contact object.
By default, analog devices use a GUID (globally unique identifier) as their common name, which means devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

```yaml
Type: UserIdParameter
Parameter Sets: (All), Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
The fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com) of the Registrar pool where the analog device should be moved.
In addition to a Registrar pool, the Target can also be the FQDN of a hosting provider.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to move the analog device.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its FQDN (for example, atl-cs-001.litwareinc.com).

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

### -ProxyPool

This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Server.



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

### -Force
If present, moves the analog device but deletes any associated data (such as policies that were assigned to the device).
If not present, the device is moved along with any associated data.

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being moved.
By default, the Move-CsAnalogDevice cmdlet does not pass objects through the pipeline.

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

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the common area phone despite those errors.

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

### -UserList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentMovesPerFE
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Identity, Users
Aliases: 
Applicable: Skype for Business Server 2015

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
String.
The Move-CsAnalogDevice cmdlet accepts a pipelined string value that represents the Identity of the analog device.

## OUTPUTS

###  
By default, the Move-CsAnalogDevice cmdlet does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact object.

## NOTES

## RELATED LINKS

[Get-CsAnalogDevice]()

[New-CsAnalogDevice]()

[Remove-CsAnalogDevice]()

[Set-CsAnalogDevice]()
