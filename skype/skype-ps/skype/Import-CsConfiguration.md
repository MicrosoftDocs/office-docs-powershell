---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Import-CsConfiguration
schema: 2.0.0
---

# Import-CsConfiguration

## SYNOPSIS

Imports your Skype for Business Server topology, policies, and configuration settings to either the Central Management store or to the local computer.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ByteInput
```
Import-CsConfiguration [-ByteInput] <Byte[]> [-Force] [-LocalStore] [<CommonParameters>]
```

### FileName
```
Import-CsConfiguration [-FileName] <String> [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

Computers that run Skype for Business Server services or server roles must have a copy of the current topology, current configuration settings, current policies, and so on before they can function in their appointed role.
Skype for Business Server is responsible for ensuring that this information is passed along to each computer that needs it.

The Import-CsConfiguration cmdlet and Export-CsConfiguration cmdlet are used to backup and restore your Skype for Business Server topology, configuration settings, and policies during a Central Management store upgrade.
The Export-CsConfiguration cmdlet enables you to export data to a .ZIP file; you can then use the Import-CsConfiguration cmdlet to read that .ZIP file and restore the topology, settings, and policies to the Central Management store.
After that, the Skype for Business Server replication services will replicate the restored information to computers running services.

The ability to export and import configuration data is also used when initially configuring computers located in your perimeter network (for example, Edge Server).
When configuring a computer located in the perimeter network, you must first perform a manual replication using the CsConfiguration cmdlets: you will need to export the configuration data using the Export-CsConfiguration cmdlet and then copy the .ZIP file to the computer in the perimeter network.
After that, you can use the Import-CsConfiguration cmdlet and the LocalStore parameter to import the data.
You only need to do this once; after that, replication will take place automatically.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```


Import-CsConfiguration -FileName "C:\Config.zip"
```

The command shown in Example 1 imports the current topology, configuration settings, and policies from a file named C:\Config.zip to the Central Management store.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Import-CsConfiguration -FileName "C:\Config.zip" -LocalStore
```

Example 2 shows how data can be initially replicated to a computer located in the perimeter network.
In this example, configuration data has been exported to a file named Config.zip; this file has then been copied to the C:\ folder on the computer located in the perimeter network.
Import-CsConfiguration is then used to import that data, with the LocalStore parameter causing that data to be imported to the local computer instead of the Central Management store.


### -------------------------- EXAMPLE 3 -------------------------- 
```

$x = Export-CsConfiguration -AsBytes

Import-CsConfiguration -ByteInput $x -LocalStore
```

The two commands shown in Example 3 export the current topology, configuration settings, and policies and then import that data to the local computer, all without using a .ZIP file.
To do this, the first command uses the Export-CsConfiguration cmdlet and the AsBytes parameter to export the current topology, configuration settings, and policies as a byte array; this byte array is stored in a variable named $x.
In the second command, the Import-CsConfiguration cmdlet and the ByteInput parameter are used to import the information stored in $x.
The LocalStore parameter causes the data to be imported to the local computer instead of the Central Management store.
The net effect is that data is copied from the Central Management store to the local computer.


## PARAMETERS

### -ByteInput

Reads topology information from a byte array stored in a variable.
This byte array is created by using the ByteInput parameter when calling the Export-CsConfiguration cmdlet.

You cannot use both the ByteInput parameter and the FileName parameter in the same command.



```yaml
Type: Byte[]
Parameter Sets: ByteInput
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FileName

Path to the .ZIP file created by Export-CsConfiguration.
For example: `-FileName "C:\Config.zip".`
Note that you must include either the FileName or the ByteInput parameter, but not both, when calling the Import-CsConfiguration cmdlet.



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

### -Force
Bypasses any prompts that would otherwise appear should a non-fatal error occur when running the command.
To set the Force parameter to True, use this syntax:

`-Force:$True`

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

### -LocalStore
Copies the configuration data to the local computer rather than the Central Management store.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Import-CsConfiguration cmdlet does not accept pipelined input.

## OUTPUTS


###  
The Import-CsConfiguration cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Export-CsConfiguration](Export-CsConfiguration.md)

