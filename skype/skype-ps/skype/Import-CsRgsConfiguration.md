---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Import-CsRgsConfiguration
schema: 2.0.0
---

# Import-CsRgsConfiguration

## SYNOPSIS

Imports Response Group configuration data that was previously exported using the Export-CsRgsConfiguration cmdlet.
The ability to export and import Response Group configuration data is particularly useful disaster recovery scenarios.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Import-CsRgsConfiguration -Destination <RgsIdentity> -FileName <String> [-Force] [-OverwriteOwner]
 [-ReplaceExistingRgsSettings] [-ResolveNameConflicts] [<CommonParameters>]
```

## DESCRIPTION

The Export-CsRgsConfiguration cmdlet and the Import-CsRgsConfiguration cmdlet enable you to export data about your current implementation of the Response Group application (including such things as workflows, queues, agent groups, holiday sets and business hours, as well as audio files and service configuration settings) and then later import (or re-import) that information.
This can be extremely useful in a disaster recovery scenario (for example, in a case where the server hosting the Response Group application has failed) or if you simply need to transfer the Response Group application to a different pool.

Note that the Export-CsRgsConfiguration cmdlet and the Import-CsRgsConfiguration cmdlet are designed to work only with Lync Server 2013 and Skype for Business Server.
If you want to migrate Response Group data from Microsoft Lync Server 2010 to Skype for Business Server, you should use the Move-CsRgsConfiguration cmdlet instead.

Skype for Business Server Control Panel: The functions carried out by the Import-CsRgsConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Import-CsRgsConfiguration -FileName "C:\Export\RgsExport.zip" -Destination "ApplicationServer:atl-cs-001.litwareinc.com"
```

The command shown in Example 1 imports a previously exported collection of Response Group application settings, and then applies those settings to the Response Group installation hosted by the Application Server on atl-cs-001.litwareinc.com.


## PARAMETERS

### -Destination

Identity of the Response Group instance where the configuration settings are being imported.
For example:

`-Destination "ApplicationServer:atl-rgs-001.litwareinc.com"`



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

### -FileName

Path to the .ZIP file created by the Export-CsRgsConfiguration cmdlet.
For example:

`-FileName "C:\Exports\RgsConfig.zip"`



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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -OverwriteOwner
When present the current owner of the Response Group objects will be overwritten with the service identity of the new Response Group pool.

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

### -ReplaceExistingRgsSettings
When specified, all the existing service settings for the destination pool are replaced with the imported settings.
If not specified, then service settings will remain as-is and only Response Group object (such as workflows and agent groups) will be imported.

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

### -ResolveNameConflicts
When present, duplicate names will be resolved by appending a unique identifying number.
For example, if there are two workflows named Help Desk Workflow one of the two will be renamed Help Desk Workflow (2).

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Import-CsRgsConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Export-CsRgsConfiguration](Export-CsRgsConfiguration.md)
