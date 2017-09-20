---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Export-CsRgsConfiguration
schema: 2.0.0
---

# Export-CsRgsConfiguration

## SYNOPSIS
Exports data from an existing Response Group application configuration.
This data, saved as a .ZIP file, can later be imported using the Import-CsRgsConfiguration cmdlet.
The ability to export and import Response Group configuration data is particularly useful disaster recovery scenarios.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Export-CsRgsConfiguration -FileName <String> -Source <RgsIdentity> [-Force] [-Owner <RgsIdentity>]
 [-RemoveExportedConfiguration] [<CommonParameters>]
```

## DESCRIPTION
The Export-CsRgsConfiguration cmdlet and the Import-CsRgsConfiguration cmdlet enable you to export data about your current implementation of the Response Group application (including such things as workflows, queues, agent groups, holiday sets and business hours, as well as audio files and service configuration settings) and then later import (or re-import) that information.
This can be extremely useful in a disaster recovery scenario (for example, in a case where the server hosting the Response Group application has failed) or if you simply need to transfer the Response Group application to a different pool.

Note that the Export-CsRgsConfiguration cmdlet and the Import-CsRgsConfiguration cmdlet are designed to work only with Lync Server 2013 and Skype for Business Server.
If you want to migrate Response Group data from Microsoft Lync Server 2010 to Skype for Business Server, you should use the Move-CsRgsConfiguration cmdlet instead.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsRgsConfiguration"}`

The functions carried out by the Export-CsRgsConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-CsRgsConfiguration -Source "ApplicationServer:atl-rgs-001.litwareinc.com" -FileName "C:\Exports\Rgs.zip"
```

The command shown in Example 1 exports the Response Group configuration settings from the pool atl-rgs-001.litwareinc.com to a file with the path C:\Exports\Rgs.zip.


## PARAMETERS

### -FileName
Path to the .ZIP file to be created when you run the Export-CsRgsConfiguration cmdlet.
For example:

`-FileName "C:\Exports\RgsConfig.zip"`

Note that your command will fail if this file already exists.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
Identity of the Response Group instance whose configuration settings are being exported.
For example:

`-Source "ApplicationServer:atl-rgs-001.litwareinc.com"`

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Owner
If specified, configuration information for all the Response Group instances found on the designated pool will be exported.
For example:

`-Owner "atl-rgs-001.litwareinc.com"`

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExportedConfiguration
When specified, the Response Group instance will be deleted after the configuration information has been exported.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

###  
The Export-CsRgsConfiguration cmdlet creates compressed files with the .ZIP file extension.


## NOTES


## RELATED LINKS

[Import-CsRgsConfiguration]()