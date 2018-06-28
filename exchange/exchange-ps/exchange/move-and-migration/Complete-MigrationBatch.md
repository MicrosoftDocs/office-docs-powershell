---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Complete-MigrationBatch
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Complete-MigrationBatch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Complete-MigrationBatch cmdlet to finalize a migration batch for a local move, cross-forest move, or remote move migration that has successfully finished initial synchronization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Complete-MigrationBatch [[-Identity] <MigrationBatchIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-NotificationEmails <MultiValuedProperty>] [-WhatIf] [-Partition <MailboxIdParameter>] [-SyncAndComplete]
 [<CommonParameters>]
```

## DESCRIPTION
After a migration batch for a local or cross-forest move has successfully run and has a status state of Synced, use the Complete-MigrationBatch cmdlet to finalize the migration batch. Finalization is the last phase performed during a local or cross-forest move. When you finalize a migration batch, the cmdlet does the following for each mailbox in the migration batch:

- Runs a final incremental synchronization.

- Configures the user's Microsoft Outlook profile to point to the new target domain.

- Converts the source mailbox to a mail-enabled user in the source domain.

In the cloud-based service, this cmdlet sets the value of CompleteAfter to the current time.  It is important to remember that any CompleteAfter setting that has been applied to the individual users within the batch will override the setting on the batch, so the completion for some users may be delayed until their configured time.

When the finalization process is complete, you can remove the batch by using the Remove-MigrationBatch cmdlet.

If a migration batch has a status of Completed with Errors, you can re-attempt to finalize the failed users. In Exchange Online, use the Start-MigrationBatch cmdlet to retry migration for failed users. In Exchange 2013 or Exchange 2016, use the Complete-MigrationBatch to retry these failed users.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Complete-MigrationBatch -Identity LocalMove1 -NotificationEmails admin@contoso.com,lucio@contoso.com
```

This example completes the migration batch LocalMove1 and sends a notification email message to the specified users.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the migration batch that you want to complete. The value for this parameter is specified by the Name parameter for the New-MigrationBatch cmdlet. Use the Get-MigrationBatch cmdlet to determine the value of this parameter for the migration batch.

```yaml
Type: MigrationBatchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -NotificationEmails
This parameter is available only in on-premises Exchange.

The NotificationEmails parameter specifies one or more email addresses that status reports are sent to after the migration batch is completed. You can specify multiple email addresses separated by commas.

If you don't use this parameter, the final status report is sent to the administrator who runs the Complete-MigrationBatch cmdlet.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncAndComplete
The SyncAndComplete switch specifies whether to trigger a synchronization immediately followed by a completion of the migration batch if the synchronization was successful. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/572077f0-5457-48ad-b78a-7bd945997300.aspx)
