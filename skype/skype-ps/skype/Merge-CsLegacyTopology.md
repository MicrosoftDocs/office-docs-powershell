---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Merge-CsLegacyTopology
schema: 2.0.0
---

# Merge-CsLegacyTopology

## SYNOPSIS

The Merge-CsLegacyTopology cmdlet enables you to migrate topology information from Microsoft Office Communications Server 2007 R2 or Microsoft Office Communications Server 2007 to Skype for Business Server.
This helps provide interoperability between Skype for Business Server and earlier versions of the software.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Topology
```
Merge-CsLegacyTopology [-TopologyXmlFileName] <String> [[-UserInputFileName] <String>] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### PartialTopology
```
Merge-CsLegacyTopology [[-UserInputFileName] <String>] [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 -Reserved <PSObject> [<CommonParameters>]
```

## DESCRIPTION

The Merge-CsLegacyTopology cmdlet is the first tool to use when migrating from an earlier version of Office Communications Server (either Office Communications Server 2007 R2 or Office Communications Server 2007) to Skype for Business Server.
The Merge-CsLegacyTopology cmdlet is used to migrate trusted service entries and topology information for the following components: domains, user services, Registrar, Mediation Server, and Edge Server.
In addition, the cmdlet migrates trusted service entries for the Conferencing Attendant application; Communicator Web Access; and conferencing directories.
(A trusted service entry is an Active Directory record that represents a server trusted by Skype for Business Serve.) Merging the topology information enables users homed on Skype for Business Server to communicate with users homed on Communications Server 2007 or Communications Server 2007 R2.

Before you can run the Merge-CsLegacyTopology cmdlet you must first install the Windows Management Instrumentation (WMI) Backward Compatibility interfaces package; this application is installed by running OCSWMIBC.msi.
(OCSWMIBC.msi can be found on the installation DVD in the Setup.) After installing the Compatibility interfaces package, the Merge-CsLegacyTopology cmdlet can then be called.
The Merge-CsLegacyTopology cmdlet will use WMI to read legacy data from the earlier version of Office Communications Server; it will then take the retrieved data and create corresponding objects in Skype for Business Server.
For example, for each SIP domain found in your installation of Office Communications Server, a corresponding SIP domain will be created in your new installation of Skype for Business Server.

After running the Merge-CsLegacyTopology cmdlet, you should then run the Import-CsLegacyConfiguration cmdlet and the Import-CsLegacyConferenceDirectory cmdlet.

The Merge-CsLegacyTopology cmdlet needs to be run at least twice: once at the start of a migration (in order to introduce the Communications Server 2007 or Communications Server 2007 R2 topology), and once at the end of migration, when the previous Office Communications Server environment has been decommissioned.
You will also need to run the cmdlet any time you make a change to your legacy Office Communications Server environment.
For example, if you add a Mediation Server to or decommission a pool from your Office Communications Server topology, you will need to re-run the Merge-CsLegacyTopology cmdlet in order to import the modified topology.

The Import-CsLegacyConfiguration cmdlet and the Import-CsLegacyConferenceDirectory cmdlet depend on values configured by the Merge-CsLegacyTopology cmdlet.
That means that you might receive error messages from either the Import-CsLegacyConfiguration cmdlet or the Import-CsLegacyConferenceDirectory cmdlet that instruct you to run the Merge-CsLegacyTopology cmdlet as a possible solution to the problem that just occurred.
If you do not re-run the Merge-CsLegacyTopology cmdlet, then additional errors can occur, especially if an item is removed from the Office Communications Server environment while it is still in use by Skype for Business Server.

If you need to merge Edge Servers from a previous installation of Office Communications Server you must first create a custom XML file that contains your Edge Server; you must create the file yourself because Edge Server settings are not stored in Active Directory, and, as a result, cannot be retrieved by the Merge-CsLegacyTopology cmdlet.
After you have created this XML file (see the Skype for Business Server Deployment Guide for information on how to create this file) you must include the path to that file and the UserInputFileName parameter when running the Merge-CsLegacyTopology cmdlet.
If you do not do this no Edge Servers will be included in your merged topology.



## EXAMPLES
### -------------------------- EXAMPLE 1 -------------------------- 
```

Merge-CsLegacyTopology -TopologyXmlFileName C:\New_Topology.xml
```

The command shown in Example 1 merges topology information and trusted service entries from Communications Server 2007 R2 or Communications Server 2007 with a new installation of Skype for Business Server.
The required parameter TopologyXmlFileName is used to indicate the path to the output file generated when you run the Merge-CsLegacyTopology cmdlet.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Merge-CsLegacyTopology -TopologyXmlFileName C:\New_Topology.xml -UserInputFileName C:\EdgeServers.xml
```

Example 2 is a variation of the command used in Example 1.
In Example 2, however, the UserInputFileName parameter is included in order to merge Edge Server information into the topology.
The parameter value C:\EdgeServers.xml points to a custom XML file containing Edge Server information for Office Communications Server.


## PARAMETERS

### -TopologyXmlFileName

Path to the output file to be created when the Merge-CsLegacyTopology cmdlet is run.
Note that this file differs from the file specified using the Report parameter; the latter file is used for recording error information while the Topology XML file contains your newly created Skype for Business Server topology.
This file will later be used to publish the new topology.

If the specified file already exists, it will be overwritten when you run the Merge-CsLegacyTopology cmdlet.



```yaml
Type: String
Parameter Sets: Topology
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserInputFileName

Path to the XML file used to import Edge Server data from an earlier version of Skype for Business Server.
This XML file (which you must create following the guidelines detailed in the Skype for Business Server Deployment Guide) is required because Edge Server settings are not stored in Active Directory Domain Services.
If you do not need to import Edge Server information, then this parameter can be omitted.

If this parameter is not used, remote and external access features (including federation) might not function as expected in an environment running both Communications Server 2007 R2 or Communications Server 2007 R2 and .



```yaml
Type: String
Parameter Sets: (All)
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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\MergeTopology.html"`

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

### -Reserved

Enables you to merge the topology using a topology object instead of a topology XML file.



```yaml
Type: PSObject
Parameter Sets: PartialTopology
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
The Merge-CsLegacyTopology cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Merge-CsLegacyTopology cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Import-CsLegacyConfiguration](Import-CsLegacyConfiguration.md)

[Import-CsLegacyConferenceDirectory](Import-CsLegacyConferenceDirectory.md)

[Move-CsLegacyUser](Move-CsLegacyUser.md)
