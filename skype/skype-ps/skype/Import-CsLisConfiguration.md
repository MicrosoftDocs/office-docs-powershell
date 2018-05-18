---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Import-CsLisConfiguration
schema: 2.0.0
---

# Import-CsLisConfiguration

## SYNOPSIS

Imports an Enterprise Voice Enhanced 9-1-1 (E9-1-1) configuration from a backup file.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ByteInput
```
Import-CsLisConfiguration [-ByteInput] <Byte[]> [<CommonParameters>]
```

### FileName
```
Import-CsLisConfiguration [-FileName] <String> [<CommonParameters>]
```

## DESCRIPTION

Implementing E9-1-1 in an organization can, depending on the size of the organization, involve mapping thousands of subnets, ports, switches, and wireless access points to locations.
An E9-1-1 configuration also includes information about the Location Information Server (LIS) provided by the E9-1-1 Network Routing Provider, and about locations and civic addresses and whether or not they've been validated.
Given the volume of information and settings required to implement E9-1-1, it's highly recommended that you regularly back up the entire configuration.
You can back up the entire E9-1-1 configuration to a file by calling the Export-CsLisConfiguration cmdlet.
Calling the Import-CsLisConfiguration cmdlet will restore the configuration from that file.

Restoring the configuration by calling this cmdlet will not overwrite the existing configuration.
It will insert information that has been removed, but it will not remove existing records that were added after the backup file was created.

IMPORTANT: Because the import from backup will not replace existing records, any records that have been changed will be restored and you could be left with orphaned locations.
For example, suppose you've defined a wireless access point (WAP) with a Location value of Building30/Room10.
You call the Export-CsLisConfiguration cmdlet to back up your configuration.
Later, you modify the Location property of that wireless access point to Building30/Rooms20-40.
If you then call the Import-CsLisConfiguration cmdlet to restore the backed-up configuration, the location for that WAP will be Building30/Room10 (the location before the backup), but the location for Building30/Rooms20-40 will remain in the location configuration database.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```

Import-CsLisConfiguration -FileName C:\E911Config.bak
```

This example imports the E9-1-1 configuration from the backup file named E911Config.back to the location configuration database.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$lisconfig = Export-CsLisConfiguration -AsBytes

Import-CsLisConfiguration -ByteInput $lisconfig
```

Example 2 demonstrates how to use the ByteInput parameter of the Import-CsLisConfiguration cmdlet.
Line 1 shows a call to the Export-CsLisConfiguration cmdlet with the AsBytes parameter.
The output of the command is a byte array containing the LIS configuration.
This array is assigned to the variable $lisconfig.
In line 2 the Import-CsLisConfiguration cmdlet is called.
The ByteInput parameter receives a value of $lisconfig, which is the variable containing the byte array we exported.
This will import that byte array back into the location configuration database.



### -------------------------- EXAMPLE 3 -------------------------- 
```

$lisconfig = Export-CsLisConfiguration -AsBytes

$listconfig | Set-Content -Path C:\E911Config.bak -Encoding byte

Get-Content -ReadCount 0 -Encoding byte -Path C:\E911Config.bak | Import-CsLisConfiguration
```

Example 3 is a more complete version of Example 2.
The first line is the same, we call the Export-CsLisConfiguration cmdlet with the AsBytes parameter to store the LIS configuration as an array of bytes in the variable $lisconfig.
The rest of this example shows how to save that configuration to a file and then import it back into the location configuration database.

In line 2 we pipe the contents of $lisconfig, which is the byte array representing the LIS configuration, to the Windows PowerShell Set-Content cmdlet.
We assign values to two parameters of the Set-Content cmdlet: Path and Encoding.
We assign the full path and file name of the file to which we want to save the configuration to the Path parameter.
We use the Encoding parameter with a value of byte to ensure the configuration is stored as an array of bytes.

Finally, in line 3 we import the configuration back into the location configuration database.
First we call the Get-Content cmdlet to retrieve the contents from the file.
We pass a value of 0 to the ReadCount property, which tells the Get-Content cmdlet to read all the contents of the file at once rather than one line at a time.
We again use the Encoding parameter with a value of byte to specify what type of data we're reading from the file.
Finally we pass the file name to the Path parameter.
The contents of the file that we read with the Get-Content cmdlet is piped to the Import-CsLisConfiguration cmdlet, which imports the saved configuration into the location configuration database.


## PARAMETERS

### -ByteInput
The value passed to this parameter is a variable containing a byte array of the LIS configuration that was created by the Export-CsLisConfiguration cmdlet with the AsBytes parameter.

```yaml
Type: Byte[]
Parameter Sets: ByteInput
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FileName
The name of the backup file from which to import the configuration.
You cannot specify a FileName and a ByteInput.
Only one of these two parameters can be used with each call to this cmdlet.

```yaml
Type: String
Parameter Sets: FileName
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
Byte\[\].
Accepts a byte array from an exported LIS configuration.
The byte array must be piped as a single record.
See Example 3.

## OUTPUTS

###  
This cmdlet does not return a value.

## NOTES

## RELATED LINKS

[Export-CsLisConfiguration](Export-CsLisConfiguration.md)

[Publish-CsLisConfiguration](Publish-CsLisConfiguration.md)

[Unpublish-CsLisConfiguration](Unpublish-CsLisConfiguration.md)

[Debug-CsLisConfiguration](Debug-CsLisConfiguration.md)

[Test-CsLisConfiguration](Test-CsLisConfiguration.md)

