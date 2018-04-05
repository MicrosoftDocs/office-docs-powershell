---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: New-MailboxDatabase
schema: 2.0.0
---

# New-MailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-MailboxDatabase cmdlet to create a mailbox database, or a recovery database. Each database you create must have a unique name in the organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-MailboxDatabase [-Name] <String> -Server <ServerIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-EdbFilePath <EdbFilePath>] [-IsExcludedFromProvisioning <$true | $false>]
 [-IsSuspendedFromProvisioning <$true | $false>] [-LogFolderPath <NonRootLocalLongFullPath>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-PublicFolderDatabase <DatabaseIdParameter>] [-WhatIf]
 [-AutoDagExcludeFromMonitoring <$true | $false>] [-IsExcludedFromInitialProvisioning]
 [-MailboxProvisioningAttributes <MailboxProvisioningAttributes>] [-SkipDatabaseLogFolderCreation]
 [<CommonParameters>]
```

### Set2
```
New-MailboxDatabase [[-Name] <String>] [-Recovery] -Server <ServerIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-EdbFilePath <EdbFilePath>] [-LogFolderPath <NonRootLocalLongFullPath>] [-WhatIf]
 [-MailboxProvisioningAttributes <MailboxProvisioningAttributes>] [-SkipDatabaseLogFolderCreation]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MailboxDatabase -Name "DB1" -EdbFilePath D:\ExchangeDatabases\DB1\DB1.edb
```

This example creates the mailbox database DB1. This example also uses a non-default location for the database file.

## PARAMETERS

### -Name
The Name parameter specifies the name of the new mailbox database.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recovery
The Recovery parameter specifies that the new database is designated as a recovery database.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server on which you want to create the database.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdbFilePath
The EdbFilePath parameter specifies the path to the database files. The default value is %programfiles%\\Microsoft\\Exchange Server\\V15\\Mailbox\\\<Database name\>.edb.

```yaml
Type: EdbFilePath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromProvisioning
The IsExcludedFromProvisioning parameter specifies whether this database is considered by the mailbox provisioning load balancer. If the IsExcludedFromProvisioning parameter is set to $true, no new mailboxes are automatically added to this database.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsSuspendedFromProvisioning
The IsSuspendedFromProvisioning parameter specifies whether this database is temporarily considered by the mailbox provisioning load balancer.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFolderPath
The LogFolderPath parameter specifies the folder location for log files.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfflineAddressBook
The OfflineAddressBook parameter specifies the associated offline address book (OAB) for the new mailbox database.

```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDatabase
The PublicFolderDatabase parameter specifies the associated public folder database for the new mailbox database.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagExcludeFromMonitoring
The AutoDagExcludeFromMonitoring parameter specifies that the database being created should not be monitored by managed availability.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromInitialProvisioning
The IsExcludedFromInitialProvisioning parameter specifies that this database is temporarily not considered by the mailbox provisioning load balancer. If the IsExcludedFromInitialProvisioning parameter is enabled, new mailboxes aren't added automatically to this database.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxProvisioningAttributes
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxProvisioningAttributes
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDatabaseLogFolderCreation
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5008090b-e776-4ff6-807c-208e00f4daab.aspx)
