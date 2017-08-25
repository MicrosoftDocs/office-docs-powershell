---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAnalogDevice

## SYNOPSIS
Returns information about the analog devices you can manage by using Skype for Business Server.
An analog device is a telephone or other device that is connected to the public switched telephone network.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsAnalogDevice [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
Analog devices include telephones, fax machines, modems, and teletype/telecommunication device for the deaf (TTY/TDD) devices that are connected to the public switched telephone network (PSTN).
Unlike devices that take advantage of Enterprise Voice (the Voice over Internet Protocol (VoIP) solution offered by Microsoft), analog devices do not transmit information by using digital packets.
Instead, information is transmitted by using a continuous signal.
This signal is commonly referred to as an analog signal; hence the term "analog devices."

In addition to analog phones and phones that take advantage of Enterprise Voice, there is another class of phones: digital non-IP phones.
These phones are proprietary to the private branch exchange (PBX) system they were purchased with, and cannot be managed by using Skype for Business Server cmdlets.

In order to enable administrators to manage analog devices for organizations, Skype for Business Server lets you associate analog devices with Active Directory contact objects.
After a device has been associated with a contact object, you can then manage the analog device by doing such things as assigning policies and dial plans to the contact.

The Get-CsAnalogDevice cmdlet provides a way for you to retrieve information about the analog devices configured for use in your organization.
If you call the Get-CsAnalogDevice cmdlet without any parameters the cmdlet will return information about all of your analog devices.
Optional parameters provide different ways for you to filter information; for example, you can return all of the devices that have contact objects in a specified OU, or all of the analog devices located in a specified building.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAnalogDevice
```

The command shown in Example 1 returns a collection of all the analog devices currently configured for use in the organization.
This is done by calling the Get-CsAnalogDevice cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsAnalogDevice | Select-Object DisplayName, LineUri
```

In Example 2, only two property values -- DisplayName and LineUri -- are returned for all the analog devices in the organization.
To carry out this task, the command first calls the Get-CsAnalogDevice cmdlet without any parameters; this returns all the property values for all the analog devices in the organization.
This collection is then piped to the Select-Object cmdlet, which selects and displays only the values for the DisplayName and the LineUri properties.

### -------------------------- Example 3 --------------------------
```
Get-CsAnalogDevice -Filter {DisplayName -eq "Building 14 Receptionist"}
```

Example 3 returns information about the analog device that has the Active Directory display name "Building 14 Receptionist".
To do this, the command calls Get-CsAnalogDevice and the Filter parameter; the filter value {DisplayName -eq "Building 14 Receptionist"} limits the returned items to analog devices where the DisplayName property is equal to "Building 14 Receptionist".

### -------------------------- Example 4 --------------------------
```
Get-CsAnalogDevice -Filter {Gateway -eq "192.168.0.240"}
```

Example 4 returns all of the analog devices configured for the gateway 192.168.0.240.
This is done by calling the Get-CsAnalogDevice cmdlet and including the Filter parameter; the filter value "192.168.0.240" ensures that the only objects returned are analog devices where the Gateway property is equal to 192.168.0.240.

### -------------------------- Example 5 --------------------------
```
Get-CsAnalogDevice -Filter {AnalogFax -eq $True}
```

The command shown in Example 5 returns information about all the analog fax machines in the organization.
To perform this task, the command calls the Get-CsAnalogDevice cmdlet along with the Filter parameter.
The filter value {AnalogFax -eq $True} limits the returned objects to fax machines: analog devices where the AnalogFax property is equal to True.

### -------------------------- Example 6 --------------------------
```
Get-CsAnalogDevice -Filter {LineUri -eq "tel:+14255556001"}
```

In Example 6, a single analog device is returned: the device that has a LineUri (phone number) equal to tel:+14255556001.

### -------------------------- Example 7 --------------------------
```
Get-CsAnalogDevice -Filter {LineUri -like "tel:+1425555*"}
```

Example 7 returns all of the analog devices that have an area code of 425 and the phone prefix 555.
To carry out this task, the Get-CsAnalogDevice cmdlet is used along with the Filter parameter; the filter value {LineUri -like "tel:+1425555*"} limits the returned data to devices where the LineUri property begins with the characters "tel:+1425555".
That's equivalent to a phone number that begins with these characters: 1425555 (for example, the 1-425-555-1298).

### -------------------------- Example 8 --------------------------
```
Get-CsAnalogDevice -OU "ou=Telecommunications,dc=litwareinc,dc=com"
```

Example 8 returns a collection of all the analog devices that have a contact object in the Telecommunications OU in Active Directory Domain Services.
To do this, the Get-CsAnalogDevice cmdlet is called along with the OU parameter; the parameter value limits the returned objects to analog devices that have contacts objects in the OU with the distinguished name ou=Telecommunications,dc=litwareinc,dc=com.

### -------------------------- Example 9 --------------------------
```
Get-CsAnalogDevice | Grant-CsVoicePolicy -PolicyName "AnalogVoicePolicy"
```

The command shown in Example 9 shows how you can return a collection of analog devices and then assign a voice policy to each device in the collection.
To do this, the Get-CsAnalogDevice cmdlet is first called without any parameters; this returns a collection of all the analog devices configured for use in the organization.
This collection is then piped to the Grant-CsVoicePolicy cmdlet, which assigns the voice policy AnalogVoicePolicy to each device in the collection.


## PARAMETERS

### -Identity
Unique identifier for the analog device.
Analog devices are identified by using the Active Directory distinguished name of the associated contact object.
By default, analog devices use a GUID (globally unique identifier) as their common name, which means devices will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsAnalogDevice cmdlet under alternate credentials.
This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, first use the Get-Credential cmdlet to create a PSCredential object.
For details, see the Get-Credential cmdlet Help topic.

```yaml
Type: PSCredential
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
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN) of the computer; for example, atl-cs-001.litwareinc.com.

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

### -Filter
Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server.
For example, you can limit returned data to analog device contact objects that have been assigned a specific voice policy, or contacts that have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only fax machines would look like this, with AnalogFax representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

`-Filter {AnalogFax -eq $True}`

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

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server).
For example, you can limit returned data to contact objects that have been assigned to a specific department or are located in a specific building.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only contact objects representing analog devices in the city of Redmond would look like this:

`-LdapFilter "l=Redmond"`

In the preceding filter, "l" represents the Active Directory attribute (locality); "=" represents the comparison operator (equal to); and "Redmond" represents the filter value.

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

### -OU
Enables you to return contact objects from a specific Active Directory organizational unit (OU).
This returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable -- analog device information will be returned from each of these OUs.

When specifying an OU, use the distinguished name of that container; for example: 

`-OU "OU=Finance,dc=litwareinc,dc=com"`

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return seven analog devices (regardless of how many analog devices are in your forest), include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven phones will be returned.
If you set the ResultSize to 7 but you have only three analog devices in your forest, the command will return those three devices and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
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

### String
The Get-CsAnalogDevice cmdlet accepts a pipelined string value that represents the Identity of the analog device.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADAnalogDeviceContact


## NOTES


## RELATED LINKS

[Move-CsAnalogDevice]()

[New-CsAnalogDevice]()

[Remove-CsAnalogDevice]()

[Set-CsAnalogDevice]()