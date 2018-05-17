---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Move-CsManagementServer
schema: 2.0.0
---

# Move-CsManagementServer

## SYNOPSIS

Moves the Central Management Server from one pool to another.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Move-CsManagementServer [-ConfigurationFileName <String>] [-LisConfigurationFileName <String>] [-Force]
 [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### FromBackup
```
Move-CsManagementServer [-ConfigurationFileName <String>] [-Confirm] [-Force]
 [-LisConfigurationFileName <String>] [-Report <String>] [-TargetFqdn <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Move-CsManagementServer cmdlet enables administrators to move the Central Management Server (and the accompanying Central Management store) from one pool to another.
Because there is always the potential for data loss, not to mention service interruption, any time you move the Central Management Server, it is recommended that you do not make such a transfer unless:

1.
You need to decommission the existing management pool, and must transfer the Central Management Server before doing so.

2.
You've encountered a disaster recovery scenario in which the existing Central Management Server is no longer accessible.

Before you move the Central Management Server, you must do the following:

1.
Verify that you have created the new Central Management store.
This is done by running the Install-CsDatabase cmdlet and using the CentralManagementDatabase parameter.

2.
If you are moving the Central Management Server to a Standard Edition server, verify that you have used local setup to run the Prepare Standard Edition server option.
This advance preparation is required to add firewall rules that will allow Windows PowerShell to remotely access the new Central Management store.

3.
Verify that there is enough free disk space on the computer where the Move-CsManagementServer cmdlet is being run to accommodate the Central Management Server.

4.
Verify that the Front End Server service has been installed on the computer where the Move-CsManagementServer cmdlet is being run.
If this service is not installed, and running, then the move will fail.

5.
Verify that you can successfully run the Enable-CsTopology cmdlet on the computer where the Move-CsManagementServer cmdlet is going to be run.
If the Enable-CsTopology cmdlet cannot be run on that computer then the move will fail and you will no longer have a functioning Central Management store.

After you have completed these steps, all you need to do to move the Central Management Server from Pool A to Pool B is log on to a computer in Pool B and then call the Move-CsManagementServer cmdlet without any additional parameters:

`Move-CsManagementServer`

When you do that, the Move-CsManagementServer cmdlet will consult the topology to determine the prior location of the Central Management Server (Pool A), and then transfer the Central Management Server and the Central Management store to the current pool (Pool B).

If the move succeeds, the Move-CsManagementServer cmdlet will display a list of computers on the screen.
In order to finish the move, you must run local setup on each of these computers.
Computers in Pool A will still be running an inactive version of the Central Management service; running local setup will delete that service.
The computer in Pool B where the Central Management Server was moved will be running the Central Management service; however, other computers in the pool will not.
Running local setup on these computers will install the Central Management service.

To transfer the Central Management Server in a disaster recovery scenario you should have, ideally, used the Export-CsConfiguration cmdlet and the Export-CsLisConfiguration cmdlet to create backup files of your Skype for Business Server configuration and your Enhanced 9-1-1 (E9-1-1) configuration, respectively.
(Because disasters typically occur without warning, you should routinely run these cmdlets and make backup files of your configuration settings.) When calling the Move-CsManagementServer cmdlet you should include both the ConfigurationFileName and LisConfigurationFileName parameters in order to read in these backup files.

You must also include the Force parameter any time you are trying to move a Central Management Server that is offline or otherwise inaccessible.
When you call the Move-CsManagementServer cmdlet, the cmdlet temporarily sets the Central Management store to read-only before the move takes place; that helps guard against data loss.
In a disaster recovery scenario, however, the Central Management store cannot be marked as read-only.
The Force parameter instructs the cmdlet to move the Central Management store even though it has not been configured as read-only.

If the Move-CsManagementServer cmdlet fails then you might find yourself in a situation where you no longer have a functioning Central Management Server.
To restore the Central Management Server, you will need to fix the problem that caused the Move-CsManagementServer cmdlet to fail, and then re-run the cmdlet.
This re-run can take place either on a new pool or on the old pool.
If you run the Move-CsManagementServer cmdlet on the old pool, that will effectively cancel the move and leave you with your original configuration.

Note that the Move-CsManagementServer cmdlet must be run locally; it cannot be called from a remote management session.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsManagementServer
```

The command shown in Example 1 moves the Central Management Server from its existing pool to a new pool.
To perform this live migration (that is, to move a Central Management Server that is online and accessible), you must run the command from a computer located in the pool where the server is to be moved.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Move-CsManagementServer -ConfigurationFileName "C:\CsConfiguration.zip" -LisConfigurationFileName "C:\CsLisConfiguration.zip" -Force
```

Example 2 moves the Central Management Server in a disaster recovery scenario; that is, in a scenario where the existing management server is offline or otherwise inaccessible.
To perform this type of migration, you must run the preceding command from a computer located in the pool where the server is to be moved.
In addition, you must include the ConfigurationFileName parameter to import your previously saved configuration backup file; the LisConfigurationFileName parameter, to import your previously saved E9-1-1 backup file (if you are using E9-11); and the Force parameter to force the transfer of the Central Management Server even though the existing server cannot be contacted.


## PARAMETERS

### -ConfigurationFileName

Full path to the Skype for Business Server configuration backup file created by running the Export-CsConfiguration cmdlet.
This parameter should only be used in a disaster recovery scenario.



```yaml
Type: String
Parameter Sets: (All)
Aliases: CsConfiguration
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LisConfigurationFileName
Full path to the E9-1-1 backup file created by running the Export-CsLisConfiguration cmdlet.
This parameter should only be used in a disaster recovery scenario.

```yaml
Type: String
Parameter Sets: (All)
Aliases: CsLisConfiguration
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Forces the Central Management Server move even if the existing store is offline; this parameter is required in a disaster recovery scenario.
Note that there is the potential for some data loss any time you force the movement of the Central Management Server.

The Force parameter can also be used if your previous attempts at calling the Move-CsManagementServer cmdlet have failed.



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
For example: `-Report "C:\Logs\MoveManagementServer.html"`

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

### -TargetFqdn
Fully qualified domain name of the pool where the Management Server should be moved to.

```yaml
Type: Fqdn
Parameter Sets: FromBackup
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
The Move-CsManagementServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
The Move-CsManagementServer cmdlet does not return any objects.

## NOTES

## RELATED LINKS

[Set-CsManagementServer](Set-CsManagementServer.md)

