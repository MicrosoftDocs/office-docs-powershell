---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsReplica

## SYNOPSIS
Adds the local computer to the Skype for Business Server replication path.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Enable-CsReplica [-GlobalCatalog <Fqdn>] [-Report <String>] [-Force] [-WhatIf] [-Confirm]
 [-GlobalSettingsDomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
When a service or server role is installed on a computer, that computer needs to be added to the replication path; doing so enables the computer to receive the topology and configuration files from the Central Management store.
The Enable-CsReplica cmdlet provides a way for you to manually add a computer to the replication path.
As a general rule, you will not need to manually add a computer to the replication path.
Instead, this will automatically take place when you install Skype for Business Server 2015 on a computer.


## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```
Enable-CsReplica
```

The command shown in Example 1 adds the local computer to the Skype for Business Server replication path.


## PARAMETERS

### -GlobalCatalog
Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Enable-CsReplica cmdlet on a computer with an account in your domain.

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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\EnableReplica.html"`

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None


## NOTES


## RELATED LINKS

[Get-CsManagementStoreReplicationStatus]()