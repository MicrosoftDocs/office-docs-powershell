---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Update-MailboxDatabaseCopy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Update-MailboxDatabaseCopy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Update-MailboxDatabaseCopy cmdlet to seed or reseed a mailbox database copy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Update-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-CatalogOnly] [-Confirm] [-DatabaseOnly]
 [-DeleteExistingFiles] [-DomainController <Fqdn>] [-Force] [-ManualResume]
 [-Network <DatabaseAvailabilityGroupNetworkIdParameter>]
 [-NetworkCompressionOverride <UseDagDefault | Off | On>]
 [-NetworkEncryptionOverride <UseDagDefault | Off | On>] [-WhatIf] [-SourceServer <ServerIdParameter>]
 [<CommonParameters>]
```

### Set2
```
Update-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-CancelSeed] [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Update-MailboxDatabaseCopy [-Identity] <DatabaseCopyIdParameter> [-BeginSeed] [-CatalogOnly] [-Confirm]
 [-DatabaseOnly] [-DeleteExistingFiles] [-DomainController <Fqdn>] [-Force] [-ManualResume]
 [-Network <DatabaseAvailabilityGroupNetworkIdParameter>]
 [-NetworkCompressionOverride <UseDagDefault | Off | On>]
 [-NetworkEncryptionOverride <UseDagDefault | Off | On>] [-SafeDeleteExistingFiles]
 [-SourceServer <ServerIdParameter>] [-WhatIf] [-NoThrottle] [-PrimaryDatabasePartitionOnly]
 [-SecondaryDatabasePartitionOnly] [<CommonParameters>]
```

### Set3
```
Update-MailboxDatabaseCopy -Server <MailboxServerIdParameter> [-CatalogOnly] [-Confirm] [-DatabaseOnly]
 [-DeleteExistingFiles] [-DomainController <Fqdn>] [-ManualResume] [-MaximumSeedsInParallel <Int32>]
 [-NetworkCompressionOverride <UseDagDefault | Off | On>]
 [-NetworkEncryptionOverride <UseDagDefault | Off | On>] [-SafeDeleteExistingFiles] [-WhatIf] [-NoThrottle]
 [-PrimaryDatabasePartitionOnly] [<CommonParameters>]
```

## DESCRIPTION
Seeding is the process in which a copy of a mailbox database is added to another Mailbox server. This becomes the database copy into which copied log files and data are replayed.

The Update-MailboxDatabaseCopy cmdlet can also be used to seed a content index catalog for a mailbox database copy. When you do this, the MAPI network is used, regardless of the value you specify with the Network parameter.

You must suspend a database copy before you can update it using the Update-MailboxDatabaseCopy cmdlet. For detailed steps about how to suspend a database copy, see Suspend or resume a mailbox database copy (https://technet.microsoft.com/library/dd298159.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1
```

This example seeds a copy of the database DB1 on the Mailbox server MBX1.

### -------------------------- Example 2 --------------------------
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -SourceServer MBX2
```

This example seeds a copy of the database DB1 on the Mailbox server MBX1 using MBX2 as the source Mailbox server for the seed.

### -------------------------- Example 3 --------------------------
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -DatabaseOnly
```

This example seeds a copy of the database DB1 on the Mailbox server MBX1 without seeding the content index catalog.

### -------------------------- Example 4 --------------------------
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -CatalogOnly
```

This example seeds the content index catalog for the copy of the database DB1 on the Mailbox server MBX1 without seeding the database file. The content index catalog seeding occurs over the MAPI network.

### -------------------------- Example 5 --------------------------
```
Update-MailboxDatabaseCopy -Server MBX1
```

This example performs a full server reseed of all of the databases on the Mailbox server MBX1.

## PARAMETERS

### -Identity
The Identity parameter specifies the name or GUID of the mailbox database whose copy is being seeded.

```yaml
Type: DatabaseCopyIdParameter
Parameter Sets: (All), Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CatalogOnly
The CatalogOnlyswitch specifies that only the content index catalog for the database copy should be seeded. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -DatabaseOnly
The DatabaseOnlyswitch specifies that only the database copy should be seeded. The content index catalog isn't seeded. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteExistingFiles
The DeleteExistingFiles switch specifies whether to remove the existing log files at the target location. You don't need to specify a value with this switch.

This switch removes only the files that it checks for and fails if other files are present. No action is taken on other files at the target location. Therefore, if database-related files are present, you must manually remove them.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1, Set3
Aliases:
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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManualResume
The ManualResume switch specifies whether to automatically resume replication on the database copy. You don't need to specify a value with this switch.

With this switch, you can manually resume replication to the database copy.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Network
The Network parameter specifies which DAG network should be used for seeding. Note that content index catalog seeding always occurs over the MAPI network, even if you use this parameter to specify the DAG network.

```yaml
Type: DatabaseAvailabilityGroupNetworkIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkCompressionOverride
The NetworkCompressionOverride parameter specifies whether to override the current DAG network compression settings.

```yaml
Type: UseDagDefault | Off | On
Parameter Sets: (All), Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkEncryptionOverride
The NetworkEncryptionOverride parameter specifies whether to override the current DAG encryption settings.

```yaml
Type: UseDagDefault | Off | On
Parameter Sets: (All), Set1, Set3
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

### -SourceServer
The SourceServer parameter specifies the name of a Mailbox server with a passive copy of the mailbox database to be used as the source for the seed operation.

```yaml
Type: ServerIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CancelSeed
The CancelSeed switch specifies whether to cancel an in-progress seeding operation. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter is used as part of a full server reseed operation. It can be used with the MaximumSeedsInParallel parameter to start reseeds of database copies in parallel across the specified server in batches of up to the value of the MaximumSeedsInParallel parameter copies at a time.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BeginSeed
The BeginSeed switch asynchronously starts the seeding operation and then exits the cmdlet. You don't need to specify a value with this switch.

This switch is useful for scripting reseeds.

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

### -MaximumSeedsInParallel
The MaximumSeedsInParallel parameter is used with the Server parameter to specify the maximum number of parallel seeding operations that should occur across the specified server during a full server reseed operation. The default value is 10.

```yaml
Type: Int32
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeDeleteExistingFiles
The SafeDeleteExistingFilesswitch specifies a seeding operation with a single copy redundancy pre-check prior to the seed. You don't need to specify a value with this switch.

Because this switch includes the redundancy safety check, it requires a lower level of permissions than the DeleteExistingFiles parameter. Limited permission administrators can perform the seeding operation by using this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoThrottle
The NoThrottle switch prevents the seeding operation from being throttled. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryDatabasePartitionOnly
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryDatabasePartitionOnly
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/37ebb66a-382e-4fd9-81f8-795f776a87b1.aspx)
