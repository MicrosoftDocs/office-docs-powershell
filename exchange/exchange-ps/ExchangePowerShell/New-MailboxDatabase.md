---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-mailboxdatabase
schema: 2.0.0
title: New-MailboxDatabase
---

# New-MailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-MailboxDatabase cmdlet to create a mailbox database, or a recovery database. Each database you create must have a unique name in the organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### NonRecovery
```
New-MailboxDatabase [-Name] <String> -Server <ServerIdParameter>
 [-AutoDagExcludeFromMonitoring <Boolean>]
 [-IsExcludedFromProvisioning <Boolean>]
 [-IsExcludedFromInitialProvisioning]
 [-IsSuspendedFromProvisioning <Boolean>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>]
 [-PublicFolderDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EdbFilePath <EdbFilePath>]
 [-LogFolderPath <NonRootLocalLongFullPath>]
 [-SkipDatabaseLogFolderCreation]
 [-WhatIf]
 [<CommonParameters>]
```

### Recovery
```
New-MailboxDatabase [[-Name] <String>] -Server <ServerIdParameter>
 [-Recovery]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EdbFilePath <EdbFilePath>]
 [-LogFolderPath <NonRootLocalLongFullPath>]
 [-SkipDatabaseLogFolderCreation]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MailboxDatabase -Server Server1 -Name "DB1" -EdbFilePath D:\ExchangeDatabases\DB1\DB1.edb
```

This example creates the mailbox database DB1 on the Mailbox server named Server1. This example also uses a non-default location for the database file.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Name parameter specifies the name of the new mailbox database. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: NonRecovery, Recovery
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recovery

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Recovery switch specifies that the new database is designated as a recovery database. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Recovery
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AutoDagExcludeFromMonitoring

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagExcludeFromMonitoring parameter specifies that the database being created should not be monitored by managed availability.

```yaml
Type: Boolean
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdbFilePath

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EdbFilePath parameter specifies the path to the database files. The default location is `%ExchangeInstallPath%Mailbox\<Mailbox DB Name>\<Mailbox DB Name>.edb`.

```yaml
Type: EdbFilePath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromInitialProvisioning

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsExcludedFromInitialProvisioning switch specifies that this database is temporarily not considered by the mailbox provisioning load balancer. You don't need to specify a value with this switch.

If you use this switch, new mailboxes aren't added automatically to this database.

```yaml
Type: SwitchParameter
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromProvisioning

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsExcludedFromProvisioning parameter specifies whether this database is considered by the mailbox provisioning load balancer. If the IsExcludedFromProvisioning parameter is set to $true, no new mailboxes are automatically added to this database.

```yaml
Type: Boolean
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsSuspendedFromProvisioning

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsSuspendedFromProvisioning parameter specifies whether this database is temporarily considered by the mailbox provisioning load balancer.

```yaml
Type: Boolean
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFolderPath

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LogFolderPath parameter specifies the folder location for log files.The default location is `%ExchangeInstallPath%Mailbox\<Mailbox DB Name>`

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfflineAddressBook

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OfflineAddressBook parameter specifies the associated offline address book (OAB) for the new mailbox database.

```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The PublicFolderDatabase parameter specifies the associated public folder database for the new mailbox database. You can use any value that uniquely identifies the public folder database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: NonRecovery
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDatabaseLogFolderCreation

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
