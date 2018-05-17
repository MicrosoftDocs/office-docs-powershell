---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Publish-CsTopology
schema: 2.0.0
---

# Publish-CsTopology

## SYNOPSIS
Publishes the Skype for Business Server topology retrieved by using the `Get-CsTopology` cmdlet.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Filename
```
Publish-CsTopology [-FileName] <String> [-BackupFileName <String>] [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Document
```
Publish-CsTopology [-BackupFileName <String>] -Document <XElement> [-GlobalCatalog <Fqdn>]
 [-GlobalSettingsDomainController <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Finalize
```
Publish-CsTopology [-BackupFileName <String>] [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>]
 [-Force] [-Report <String>] [-WhatIf] [-Confirm] [-FinalizeUninstall] [<CommonParameters>]
```

## DESCRIPTION
After you have installed Skype for Business Server, you will eventually need to make changes to the Skype for Business Server infrastructure; for example, you might need to add a new site, delete an existing Registrar pool, or add an additional Archiving Server.
These infrastructure changes must be made by using Topology Builder.
After you have made the changes in Topology Builder, you can then publish and enable those changes using that same tool.
These latter two steps are very important: although you can make as many modifications as you want using the Topology Builder, those modifications do not actually take effect and your Skype for Business Server infrastructure will not actually change, until the modifications have been published and the new topology has been enabled.

When changes are published, the new information (for example, a new site or a new server role) is written to the Central Management store.
However, these new (or the newly modified) objects do not immediately join your topology; that occurs only when the updated topology has been enabled.
If you select the Publish option in Topology Builder both of these steps will take place: the changes will be published (written to the Central Management store) and then the new topology will be enabled.

The `Publish-CsTopology` cmdlet is no longer the recommended way to publish topologies created by using Topology Builder; instead, publishing should be done within Topology Builder, using the steps outlined in the previous paragraph.
This is because Topology Builder now uses the Topology Builder XML file format (.tbxml); this file format cannot be published by using the `Publish-CsTopology` cmdlet.
The only thing you can do with the `Publish-CsTopology` cmdlet is republish a topology retrieved by using the `Get-CsTopology` cmdlet.
After publishing the topology in this manner, you will then need to reconfigure your simple URLs.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
(Get-CsTopology -AsXml).ToString() \> C:\Topologies\Topology.xml

Publish-CsTopology -FileName "C:\Topologies\Topology.xml"
```

The commands shown in Example 1 retrieve and then republish the current topology.
To carry out these tasks, the first command in the example uses the `Get-CsTopology` cmdlet and the AsXml parameter to retrieve the current topology; the Windows PowerShell redirection symbol \> is then used to save the retrieved data to a file named C:\Topologies\Topology.xml.
(Note, too, that the ToString method is used to convert the retrieved topology to a string value.) The second command in the example then uses the `Publish-CsTopology` cmdlet to republish the newly retrieved topology.


## PARAMETERS

### -FileName
Full path to the XML file containing the new topology information.

```yaml
Type: String
Parameter Sets: Filename
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupFileName
Full path to the backup file automatically created when you run the `Publish-CsTopology` cmdlet.
If this parameter is not specified, then the `Publish-CsTopology` cmdlet will create a backup file in your Temp folder (%temp%) similar to this: Publish-CsTopology-Backup-\[2010_10_01\]\[08_30_00\].
In that file name, 2010_10_01 represents the date that publication took place: year (2010), month (10) and day (01).
In addition, 08_30_00 represents the time of day when publication took place: hour (08), minutes (30) and seconds (00).


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

### -Document
Enables you to publish an XML element rather than an XML file.
This XML element must be configured as a System.XML.Linq.XElement object.

```yaml
Type: XElement
Parameter Sets: Document
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the `Publish-CsTopology` cmdlet on a computer with an account in your domain.


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

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.


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
For example: `-Report "C:\Logs\Publish_Topology.html"`

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

### -FinalizeUninstall
Used only when uninstalling Skype for Business Server. After the Central Management Server has been removed, use `Publish-CsTopology` and the FinalizeUninstall parameter to publish an empty topology.
Among other things, this removes all the Active Directory entries for the Central Management Server.


```yaml
Type: SwitchParameter
Parameter Sets: Finalize
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Publish-CsTopology` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the `Publish-CsTopology` cmdlet publishes instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.

## NOTES

## RELATED LINKS

[Enable-CsTopology](Enable-CsTopology.md)

[Get-CsTopology](Get-CsTopology.md)

[New-CsSimpleUrlConfiguration](New-CsSimpleUrlConfiguration.md)

[Test-CsTopology](Test-CsTopology.md)
