---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Import-CsLegacyConferenceDirectory
schema: 2.0.0
---

# Import-CsLegacyConferenceDirectory

## SYNOPSIS

The Import-CsLegacyConferenceDirectory cmdlet enables you to import conference directories from Microsoft Office Communications Server 2007 R2 to Skype for Business Server.
This helps provide interoperability between Skype for Business Server and Office Communications Server 2007 R2.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Import-CsLegacyConferenceDirectory [-Report <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Import-CsLegacyConferenceDirectory cmdlet is used in conjunction with the Merge-CsLegacyTopology cmdlet to enable organizations to migrate from Office Communications Server 2007 R2 to Skype for Business Server.
The Import-CsLegacyConfiguration cmdlet imports conferencing directories from Communications Server 2007 R2 to Skype for Business Server.

Before you can run the Import-CsLegacyConferenceDirectory cmdlet, you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the Skype for Business Server installation DVD in the Setup folder.) After installing the Backward Compatibility interfaces package, you should next run the Merge-CsLegacyTopology cmdlet.

When the Merge-CsLegacyTopology cmdlet finishes running, you can call the Import-CsLegacyConferenceDirectory cmdlet.
The Import-CsLegacyConferenceDirectory cmdlet first uses WMI to read legacy data from Communications Server 2007 R2, then takes the retrieved data and creates corresponding objects in Skype for Business Server: for each conferencing directory found in your installation of Communications Server 2007 R2, a corresponding directory will be created in your new installation of Skype for Business Server.

The Import-CsLegacyConferenceDirectory cmdlet should be rerun anytime conferences directories are added, deleted, or moved in the Communications Server 2007 R2 environment.
The Import-CsLegacyConferenceDirectory cmdlet should also be run anytime the Merge-CsLegacyTopology cmdlet is run; this helps to ensure the conference directories and the topology remain in sync.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Import-CsLegacyConferenceDirectory

```

The command shown in Example 1 imports conferencing directories from Communications Server 2007 R2 to Skype for Business Server.

## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\ImportDirectories.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The Import-CsLegacyConferenceDirectory cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Import-CsLegacyConferenceDirectory cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Import-CsLegacyConfiguration](Import-CsLegacyConfiguration.md)

[Merge-CsLegacyTopology](Merge-CsLegacyTopology.md)

[Move-CsLegacyUser](Move-CsLegacyUser.md)


