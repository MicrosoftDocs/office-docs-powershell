---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Export-CsConfiguration

## SYNOPSIS
Exports your Skype for Business Server topology, policies, and configuration settings to a file.
Among other things, this file can then be used to restore this information to the Central Management store after an upgrade, a hardware failure, or some other issue has resulted in data loss.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### FileName
```
Export-CsConfiguration [-FileName] <String> [-Force] [-LocalStore] [<CommonParameters>]
```

### AsBytes
```
Export-CsConfiguration [-AsBytes] [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Computers that run Skype for Business Server services or server roles must have a copy of the current topology, current configuration settings, and current policies before they can function in their appointed role.
Skype for Business Server is responsible for ensuring that this information is passed along to each computer that needs it.

The Export-CsConfiguration cmdlet and the Import-CsConfiguration cmdlet are used to backup and restore your Skype for Business Server topology, configuration settings, and policies during a Central Management store upgrade.
The Export-CsConfiguration cmdlet enables you to export data to a .ZIP file; you can then use the Import-CsConfiguration cmdlet to read that .ZIP file and restore the topology, configuration settings, and policies to the Central Management store.
After that, the replication services of Skype for Business Server will replicate the restored information to other computers running Skype for Business Server services.

The ability to export and import configuration data is also used when initially configuring computers located in your perimeter network (for example, Edge Servers).
When configuring a computer in the perimeter network, you must first perform a manual replication using the CsConfiguration cmdlets: you will need to export the configuration data using the Export-CsConfiguration cmdlet and then copy the .ZIP file to the computer in the perimeter network.
After that, you can use the Import-CsConfiguration cmdlet and the LocalStore parameter to import the data.
You only need to do this once; after that, replication will take place automatically.

By default, members of the following groups are authorized to run the Export-CsConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsConfiguration"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-CsConfiguration -FileName "C:\Config.zip"
```

The command shown in Example 1 exports Skype for Business Server data from the Central Management store to a file named C:\Config.zip.


## PARAMETERS

### -FileName
Path to the .ZIP file to be created when you run the Export-CsConfiguration cmdlet.
For example: 

`-FileName "C:\Config.zip".`

Note that you must include either the FileName or the AsBytes parameters, but not both, when calling the Export-CsConfiguration cmdlet.

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
Returns topology information as a byte array; the returned data must then be stored in a variable in order to be used by the Import-CsConfiguration cmdlet.
You cannot use both AsBytes and FileName in the same command.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.
To set the Force parameter to True use this syntax:

-Force:$True

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
Retrieves the configuration data from the local computer rather than from the Central Management store itself.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

###  
If called along with the AsBytes parameter, the Export-CsConfiguration cmdlet returns configuration information in the form of a byte array.


## NOTES


## RELATED LINKS

[Import-CsConfiguration]()