---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Enable-CsTopology
schema: 2.0.0
---

# Enable-CsTopology

## SYNOPSIS
Enables the most recently published Skype for Business Server topology.
After you have made changes to your topology, the changes will not take effect until they have been both published and enabled.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Enable-CsTopology [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>]
 [-SkipPrepareCheck <Boolean>] [-Report <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
After you have installed Skype for Business Server you will eventually need to make changes to the infrastructure; for example, you might need to add a new site, delete an existing Registrar pool, or add an additional Archiving Server.
These infrastructure changes must be made by using Topology Builder.
After you have made the changes in Topology Builder, you can then publish and enable those changes using that same tool.
These latter two steps are very important: although you can make as many modifications as you want using Topology Builder, those modifications do not actually take effect, and your infrastructure will not actually change, until the modifications have been published and the new topology has been enabled.

When changes are published, the new information (for example, a new site or a new server role) is written to the Central Management store.
However, these new (or newly modified) objects do not immediately join your topology; that occurs only when the updated topology has been enabled.
If you select the Publish option in Topology Builder you can carry out both of these steps at the same time: the changes will be published (written to the Central Management store) and the new topology will be enabled.

There might be times, however, when you would prefer to publish your changes and enable your topology as separate steps; doing so gives you an opportunity to confirm that deployment has succeeded before you bring the new objects into the topology.
To separately publish and then enable topology changes, you must do the following:

1. Publish the modified topology in Topology Builder.
2. Use the Enable-CsTopology cmdlet to cause the published changes to take effect.

From time-to-time you might also need to call the Enable-CsTopology cmdlet in order to enable changes made outside Topology Builder.
For example, the cmdlet must be run after you have used the CsKerberosAccountAssignment cmdlets to modify Kerberos web authentication.

By default, members of the following groups are authorized to run Enable-CsTopology locally: RTCUniversalServerAdmins.
However, if setup permissions have not been delegated, then you must be a domain administrator in order to run the cmdlet.
In order to give RTCUniversalServerAdmins the right to actually use the Enable-CsTopology cmdlet, you must run the Set-CsSetupPermission cmdlet against every Active Directory container that contains computers running Skype for Business Server services.
Note that this restriction also applies to enabling a topology through Topology Builder.
If you have not delegated permissions by using Set-CsSetupPermission, then only a domain administrator will be able to enable a topology through Topology Builder.

In addition, you must be a local administrator on any computer where Skype for Business Server file shares are to be created; this is required in order to set the necessary security permissions on the shared folders.
Alternatively, you can run Enable-CsTopology if you have full control over the file share.
That enables the cmdlet to create the shared folders and set share-level security permissions.
However, a local administrator will then need to add the share-level security permissions.

To verify that setup permissions have been delegated, run the Test-CsSetupPermission cmdlet against any Active Directory containers containing computers running Skype for Business Server services.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsTopology
```

The command shown in Example 1 enables the most recently published topology.


## PARAMETERS

### -GlobalCatalog
Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsTopology cmdlet on a computer with an account in your domain.

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

### -SkipPrepareCheck
If set to True ($True) the Enable-CsTopology cmdlet will skip its initial preparation check.

```yaml
Type: Boolean
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
For example: 

`-Report "C:\Logs\Enable_Topology.html"`

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### None
Instead, the Enable-CsTopology cmdlet enables instances of the Microsoft.Rtc.Management.Deploy.Internal.DefaultTopology object.


## NOTES


## RELATED LINKS

[Get-CsTopology](Get-CsTopology.md)

[Grant-CsSetupPermission](Grant-CsSetupPermission.md)

[Publish-CsTopology](Publish-CsTopology.md)

[Test-CsSetupPermission](Test-CsSetupPermission.md)

[Test-CsTopology](Test-CsTopology.md)
