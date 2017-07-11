---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Export-CsLisConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Exports an Enterprise Voice Enhanced 9-1-1 (E9-1-1) configuration to a file in compressed format for backup purposes.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Exports an Enterprise Voice Enhanced 9-1-1 (E9-1-1) configuration to a file in compressed format for backup purposes.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### FileName
```
Export-CsLisConfiguration [-FileName] <String> [<CommonParameters>]
```

### AsBytes
```
Export-CsLisConfiguration [-AsBytes] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Implementing E9-1-1 in an organization can, depending on the size of the organization, involve mapping thousands of subnets, ports, switches, and wireless access points (WAPs) to locations.
An E9-1-1 configuration also includes information about web services provided by the E9-1-1 Network Routing Provider, and about locations and civic addresses and whether or not they've been validated.
Given the volume of information and settings required to implement E9-1-1, it's recommended that you regularly back up the entire configuration.
You can use this cmdlet to back up the E9-1-1 configuration to a file, which will save the entire configuration in compressed format.
To recover the configuration, call the Import-CsLisConfiguration cmdlet.

This cmdlet creates a new backup file; it will not overwrite an existing file.
That means the file name that is specified in the call to this cmdlet cannot be the name of an existing file.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Export-CsLisConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsLisConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Implementing E9-1-1 in an organization can, depending on the size of the organization, involve mapping thousands of subnets, ports, switches, and wireless access points (WAPs) to locations.
An E9-1-1 configuration also includes information about web services provided by the E9-1-1 Network Routing Provider, and about locations and civic addresses and whether or not they've been validated.
Given the volume of information and settings required to implement E9-1-1, it's recommended that you regularly back up the entire configuration.
You can use this cmdlet to back up the E9-1-1 configuration to a file, which will save the entire configuration in compressed format.
To recover the configuration, call the Import-CsLisConfiguration cmdlet.

This cmdlet creates a new backup file; it will not overwrite an existing file.
That means the file name that is specified in the call to this cmdlet cannot be the name of an existing file.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Export-CsLisConfiguration -FileName C:\E911Config.bak
```

This example exports the entire E9-1-1 configuration from the Location Information Server (LIS) to the backup file named E911Config.bak.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example exports the entire E9-1-1 configuration from the Location Information Server (LIS) to the backup file named E911Config.bak.

Export-CsLisConfiguration -FileName C:\E911Config.bak

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example exports the entire E9-1-1 configuration from the Location Information Server (LIS) to the backup file named E911Config.bak.

Export-CsLisConfiguration -FileName C:\E911Config.bak

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$lisconfig = Export-CsLisConfiguration -AsBytes
```

In this example, the LIS configuration is stored as an array of bytes in a variable, $lisconfig.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In this example, the LIS configuration is stored as an array of bytes in a variable, $lisconfig.

$lisconfig = Export-CsLisConfiguration -AsBytes

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In this example, the LIS configuration is stored as an array of bytes in a variable, $lisconfig.

$lisconfig = Export-CsLisConfiguration -AsBytes

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$lisconfig = Export-CsLisConfiguration -AsBytes
$lisconfig | Set-Content -Path C:\E911Config.bak -Encoding byte
Get-Content -ReadCount 0 -Encoding byte -Path C:\E911Config.bak  | Import-CsLisConfiguration
```

Example 3 is a more complete version of Example 2.
The first line is the same, we call Export-CsLisConfiguration with the AsBytes parameter to store the LIS configuration as an array of bytes in the variable $lisconfig.
The rest of this example shows how to save that configuration to a file and then import it back into the location configuration database.

In line 2 we pipe the contents of $lisconfig, which is the byte array representing the LIS configuration, to the Windows PowerShell Set-Content cmdlet.
We assign values to two parameters of Set-Content: Path and Encoding.
We assign the full path and file name of the file to which we want to save the configuration to the Path parameter.
We use the Encoding parameter with a value of byte to ensure the configuration is stored as an array of bytes.

Finally, in line 3 we import the configuration back into the location configuration database.
First we call Get-Content to retrieve the contents from the file.
We pass a value of 0 to the ReadCount property, which tells Get-Content to read all the contents of the file at once rather than one line at a time.
We again use the Encoding parameter with a value of byte to specify what type of data we're reading from the file.
Finally we pass the file name to the Path parameter.
The contents of the file that we read with Get-Content are piped to the Import-CsLisConfiguration cmdlet, which imports the saved configuration into the location database.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 is a more complete version of Example 2.
The first line is the same, we call Export-CsLisConfiguration with the AsBytes parameter to store the LIS configuration as an array of bytes in the variable $lisconfig.
The rest of this example shows how to save that configuration to a file and then import it back into the location configuration database.

In line 2 we pipe the contents of $lisconfig, which is the byte array representing the LIS configuration, to the Windows PowerShell Set-Content cmdlet.
We assign values to two parameters of Set-Content: Path and Encoding.
We assign the full path and file name of the file to which we want to save the configuration to the Path parameter.
We use the Encoding parameter with a value of byte to ensure the configuration is stored as an array of bytes.

Finally, in line 3 we import the configuration back into the location configuration database.
First we call Get-Content to retrieve the contents from the file.
We pass a value of 0 to the ReadCount property, which tells Get-Content to read all the contents of the file at once rather than one line at a time.
We again use the Encoding parameter with a value of byte to specify what type of data we're reading from the file.
Finally we pass the file name to the Path parameter.
The contents of the file that we read with Get-Content are piped to the Import-CsLisConfiguration cmdlet, which imports the saved configuration into the location database.

$lisconfig = Export-CsLisConfiguration -AsBytes

$lisconfig | Set-Content -Path C:\E911Config.bak -Encoding byte

Get-Content -ReadCount 0 -Encoding byte -Path C:\E911Config.bak | Import-CsLisConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

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
The contents of the file that we read with the Get-Content cmdlet are piped to the Import-CsLisConfiguration cmdlet, which imports the saved configuration into the location database.

$lisconfig = Export-CsLisConfiguration -AsBytes

$lisconfig | Set-Content -Path C:\E911Config.bak -Encoding byte

Get-Content -ReadCount 0 -Encoding byte -Path C:\E911Config.bak | Import-CsLisConfiguration

## PARAMETERS

### -FileName
The path and file name of the file to which you want to save the configuration.
This cannot be the name of an existing file.

If you supply a value to the AsBytes parameter, you cannot supply a value to the FileName parameter.
If you're accessing this cmdlet remotely, you must use AsBytes rather than FileName.

```yaml
Type: String
Parameter Sets: FileName
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsBytes
Returns the configuration as a byte array.
The output of the command should be assigned to a variable for later import.
(If you don't assign the output to a variable, the byte array representing the configuration will scroll down your Lync Server Management Shell window.) You cannot specify both the AsBytes parameter and the FileName parameter; you can use only one or the other for each call to this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: AsBytes
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Returns a byte array (Byte\[\]) when the AsBytes parameter is used.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/714bd67e-4cd6-4066-a065-59f7e079b6ad(OCS.14).aspx)

[Import-CsLisConfiguration]()

[Debug-CsLisConfiguration]()

[Publish-CsLisConfiguration]()

[Unpublish-CsLisConfiguration]()

[Test-CsLisConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/714bd67e-4cd6-4066-a065-59f7e079b6ad(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/714bd67e-4cd6-4066-a065-59f7e079b6ad(OCS.16).aspx)

