---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Publish-CsTopology

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Publishes the Microsoft Lync Server 2010 topology retrieved by using the Get-CsTopology cmdlet.

**Below Content Applies To:** Lync Server 2013

Publishes the Lync Server topology retrieved by using the Get-CsTopology cmdlet.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Publishes the Skype for Business Server 2015 topology retrieved by using the Get-CsTopology cmdlet.
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
**Below Content Applies To:** Lync Server 2010

After you have installed Lync Server 2010, you will eventually need to make changes to the Lync Server infrastructure; for example, you might need to add a new site, delete an existing Registrar pool, or add an additional Archiving Server.
These infrastructure changes must be made by using Topology Builder.
After you have made the changes in Topology Builder, you can then publish and enable those changes using that same tool.
These latter two steps are very important: although you can make as many modifications as you want using the Topology Builder, those modifications do not actually take effect, and your Lync Server infrastructure will not actually change, until the modifications have been published and the new topology has been enabled.

When changes are published, the new information (for example, a new site or a new server role) is written to the Central Management store.
However, these new (or the newly modified) objects do not immediately join your topology; that occurs only when the updated topology has been enabled.
If you select the Publish option in Topology Builder both of these steps will take place: the changes will be published (written to the Central Management store) and then the new topology will be enabled.

The Publish-CsTopology cmdlet is no longer the recommended way to publish topologies created by using Topology Builder; instead, publishing should be done within Topology Builder, using the steps outlined in the previous paragraph.
This is because Topology Builder now uses the Topology Builder XML file format (.tbxml); this file format cannot be published by using Publish-CsTopology.
The only thing you can do with Publish-CsTopology is republish a topology retrieved by using the Get-CsTopology cmdlet.
After publishing the topology in this manner, you will then need to reconfigure your simple URLs.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Publish-CsTopology cmdlet: RTCUniversalServerAdmins.
However, if setup permissions have not been delegated then you must be a domain administrator in order to run Publish-CsTopology.
In order to give RTCUniversalServerAdmins the right to actually use the Publish-CsTopology cmdlet, you must run the Grant-CsSetupPermission cmdlet against every Active Directory container that contains computers running Lync Server services.
Note that this restriction also applies to enabling a topology through Topology Builder.
If you have not delegated permissions by using Set-CsSetupPermission, then only a domain administrator will be able to publish a topology through Topology Builder.

**Below Content Applies To:** Lync Server 2013

After you have installed Lync Server, you will eventually need to make changes to the Lync Server infrastructure; for example, you might need to add a new site, delete an existing Registrar pool, or add an additional Archiving Server.
These infrastructure changes must be made by using Topology Builder.
After you have made the changes in Topology Builder, you can then publish and enable those changes using that same tool.
These latter two steps are very important: although you can make as many modifications as you want using the Topology Builder, those modifications do not actually take effect, and your Lync Server infrastructure will not actually change, until the modifications have been published and the new topology has been enabled.

When changes are published, the new information (for example, a new site or a new server role) is written to the Central Management store.
However, these new (or the newly modified) objects do not immediately join your topology; that occurs only when the updated topology has been enabled.
If you select the Publish option in Topology Builder both of these steps will take place: the changes will be published (written to the Central Management store) and then the new topology will be enabled.

The Publish-CsTopology cmdlet is no longer the recommended way to publish topologies created by using Topology Builder; instead, publishing should be done within Topology Builder, using the steps outlined in the previous paragraph.
This is because Topology Builder now uses the Topology Builder XML file format (.tbxml); this file format cannot be published by using Publish-CsTopology.
The only thing you can do with Publish-CsTopology is republish a topology retrieved by using the Get-CsTopology cmdlet.
After publishing the topology in this manner, you will then need to reconfigure your simple URLs.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Publish-CsTopology cmdlet: RTCUniversalServerAdmins.
However, if setup permissions have not been delegated then you must be a domain administrator in order to run Publish-CsTopology.
In order to give RTCUniversalServerAdmins the right to actually use the Publish-CsTopology cmdlet, you must run the Grant-CsSetupPermission cmdlet against every Active Directory container that contains computers running Lync Server services.
Note that this restriction also applies to enabling a topology through Topology Builder.
If you have not delegated permissions by using Set-CsSetupPermission, then only a domain administrator will be able to publish a topology through Topology Builder.

**Below Content Applies To:** Skype for Business Server 2015

After you have installed Skype for Business Server 2015, you will eventually need to make changes to the Skype for Business Server 2015 infrastructure; for example, you might need to add a new site, delete an existing Registrar pool, or add an additional Archiving Server.
These infrastructure changes must be made by using Topology Builder.
After you have made the changes in Topology Builder, you can then publish and enable those changes using that same tool.
These latter two steps are very important: although you can make as many modifications as you want using the Topology Builder, those modifications do not actually take effect, and your Skype for Business Server 2015 infrastructure will not actually change, until the modifications have been published and the new topology has been enabled.

When changes are published, the new information (for example, a new site or a new server role) is written to the Central Management store.
However, these new (or the newly modified) objects do not immediately join your topology; that occurs only when the updated topology has been enabled.
If you select the Publish option in Topology Builder both of these steps will take place: the changes will be published (written to the Central Management store) and then the new topology will be enabled.

The Publish-CsTopology cmdlet is no longer the recommended way to publish topologies created by using Topology Builder; instead, publishing should be done within Topology Builder, using the steps outlined in the previous paragraph.
This is because Topology Builder now uses the Topology Builder XML file format (.tbxml); this file format cannot be published by using the Publish-CsTopology cmdlet.
The only thing you can do with the Publish-CsTopology cmdlet is republish a topology retrieved by using the Get-CsTopology cmdlet.
After publishing the topology in this manner, you will then need to reconfigure your simple URLs.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
(Get-CsTopology -AsXml).ToString() > C:\Topologies\Topology.xml 
Publish-CsTopology -FileName "C:\Topologies\Topology.xml"
```

The commands shown in Example 1 retrieve and then republish the current topology.
To carry out these tasks, the first command in the example uses Get-CsTopology and the AsXml parameter to retrieve the current topology; the Windows PowerShell redirection symbol \> is then used to save the retrieved data to a file named C:\Topologies\Topology.xml.
(Note, too, that the ToString method is used to convert the retrieved topology to a string value.) The second command in the example then uses Publish-CsTopology to republish the newly retrieved topology.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 retrieve and then republish the current topology.
To carry out these tasks, the first command in the example uses Get-CsTopology and the AsXml parameter to retrieve the current topology; the Windows PowerShell redirection symbol \> is then used to save the retrieved data to a file named C:\Topologies\Topology.xml.
(Note, too, that the ToString method is used to convert the retrieved topology to a string value.) The second command in the example then uses Publish-CsTopology to republish the newly retrieved topology.

(Get-CsTopology -AsXml).ToString() \> C:\Topologies\Topology.xml

Publish-CsTopology -FileName "C:\Topologies\Topology.xml"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 retrieve and then republish the current topology.
To carry out these tasks, the first command in the example uses the Get-CsTopology cmdlet and the AsXml parameter to retrieve the current topology; the Windows PowerShell redirection symbol \> is then used to save the retrieved data to a file named C:\Topologies\Topology.xml.
(Note, too, that the ToString method is used to convert the retrieved topology to a string value.) The second command in the example then uses the Publish-CsTopology cmdlet to republish the newly retrieved topology.

(Get-CsTopology -AsXml).ToString() \> C:\Topologies\Topology.xml

Publish-CsTopology -FileName "C:\Topologies\Topology.xml"

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Full path to the backup file automatically created when you run Publish-CsTopology.
If this parameter is not specified, then Publish-CsTopology will create a backup file in your Temp folder (%temp%) similar to this: Publish-CsTopology-Backup-\[2010_10_01\]\[08_30_00\].
In that file name, 2010_10_01 represents the date that publication took place: year (2010), month (10), and day (01).
In addition, 08_30_00 represents the time of day when publication took place: hour (08), minutes (30), and seconds (00).



**Below Content Applies To:** Skype for Business Server 2015

Full path to the backup file automatically created when you run the Publish-CsTopology cmdlet.
If this parameter is not specified, then the Publish-CsTopology cmdlet will create a backup file in your Temp folder (%temp%) similar to this: Publish-CsTopology-Backup-\[2010_10_01\]\[08_30_00\].
In that file name, 2010_10_01 represents the date that publication took place: year (2010), month (10), and day (01).
In addition, 08_30_00 represents the time of day when publication took place: hour (08), minutes (30), and seconds (00).



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Publish-CsTopology on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Publish-CsTopology cmdlet on a computer with an account in your domain.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services (AD DS), then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



**Below Content Applies To:** Skype for Business Server 2015

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
For example: -Report "C:\Logs\Publish_Topology.html"

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
**Below Content Applies To:** Lync Server 2010

{{Fill FinalizeUninstall Description}}



**Below Content Applies To:** Lync Server 2013

Used only when uninstall Lync Server.After the Central Management Server has been removed, use Publish-CsTopology and the FinalizeUninstall parameter to publish an empty topology.
Among other things, this removes all the Active Directory entries for the Central Management Server.



**Below Content Applies To:** Skype for Business Server 2015

Used only when uninstalling Skype for Business Server 2015.After the Central Management Server has been removed, use Publish-CsTopology and the FinalizeUninstall parameter to publish an empty topology.
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
Publish-CsTopology does not accept pipelined input.

###  
None.
The Publish-CsTopology cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Publish-CsTopology publishes instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.

###  
None.
Instead, the Publish-CsTopology cmdlet publishes instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d8f5dfd9-0ab6-4703-9d50-2fa50b3fd58b(OCS.14).aspx)

[Enable-CsTopology]()

[Get-CsTopology]()

[New-CsSimpleUrlConfiguration]()

[Test-CsTopology]()

[Online Version](http://technet.microsoft.com/EN-US/library/d8f5dfd9-0ab6-4703-9d50-2fa50b3fd58b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d8f5dfd9-0ab6-4703-9d50-2fa50b3fd58b(OCS.16).aspx)

