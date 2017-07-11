---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsReplica

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Adds the local computer to the Microsoft Lync Server 2010 replication path.

**Below Content Applies To:** Lync Server 2013

Adds the local computer to the Lync Server replication path.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Adds the local computer to the Skype for Business Server 2015 replication path.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Enable-CsReplica [-GlobalCatalog <Fqdn>] [-Report <String>] [-Force] [-WhatIf] [-Confirm]
 [-GlobalSettingsDomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When a service or server role is installed on a computer, that computer needs to be added to the replication path; doing so enables the computer to receive the topology and configuration files from the Central Management store.
The Enable-CsReplica cmdlet provides a way for you to manually add a computer to the replication path.
As a general rule, you will not need to manually add a computer to the replication path.
Instead, this will automatically take place when you install Lync Server 2010 on a computer.

Who can run this cmdlet: You must be a local administrator and a member of the domain in order to run the Enable-CsReplica cmdlet locally.

**Below Content Applies To:** Lync Server 2013

When a service or server role is installed on a computer, that computer needs to be added to the replication path; doing so enables the computer to receive the topology and configuration files from the Central Management store.
The Enable-CsReplica cmdlet provides a way for you to manually add a computer to the replication path.
As a general rule, you will not need to manually add a computer to the replication path.
Instead, this will automatically take place when you install Lync Server on a computer.

Who can run this cmdlet: You must be a local administrator and a member of the domain in order to run the Enable-CsReplica cmdlet locally.

**Below Content Applies To:** Skype for Business Server 2015

When a service or server role is installed on a computer, that computer needs to be added to the replication path; doing so enables the computer to receive the topology and configuration files from the Central Management store.
The Enable-CsReplica cmdlet provides a way for you to manually add a computer to the replication path.
As a general rule, you will not need to manually add a computer to the replication path.
Instead, this will automatically take place when you install Skype for Business Server 2015 on a computer.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Enable-CsReplica
```

The command shown in Example 1 adds the local computer to the Lync Server 2010 replication path.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 adds the local computer to the Lync Server replication path.

Enable-CsReplica

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 adds the local computer to the Skype for Business Server 2015 replication path.

Enable-CsReplica

## PARAMETERS

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Enable-CsReplica on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\EnableReplica.html"



**Below Content Applies To:** Skype for Business Server 2015

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\EnableReplica.html"



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
**Below Content Applies To:** Lync Server 2010

{{Fill GlobalSettingsDomainController Description}}



**Below Content Applies To:** Lync Server 2013

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Enable-CsReplica does not accept pipelined input.

###  
None.
The Enable-CsReplica cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Enable-CsReplica does not return any values or objects.

###  
None.
The Enable-CsReplica cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4a745da5-5b09-4b5a-8ab6-8b8b03d7afc6(OCS.14).aspx)

[Get-CsManagementStoreReplicationStatus]()

[Online Version](http://technet.microsoft.com/EN-US/library/4a745da5-5b09-4b5a-8ab6-8b8b03d7afc6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4a745da5-5b09-4b5a-8ab6-8b8b03d7afc6(OCS.16).aspx)

