---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-migrationuser
schema: 2.0.0
title: Set-MigrationUser
---

# Set-MigrationUser

## SYNOPSIS
This cmdlet is functional only in the cloud-based service.

Use the Set-MigrationUser cmdlet to modify the migration settings of a user in an existing migration batch.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MigrationUser [-Identity] <MigrationUserIdParameter>
 [-ApproveSkippedItems]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-LargeItemLimit <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-StartAfter <DateTime>]
 [-SyncNow]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Some settings can be applied both to the batch as well as to individual users within the batch. A setting applied to a user overrides any corresponding setting on the batch.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MigrationUser -Identity laura@contoso.com -LargeItemLimit 15 -BadItemLimit 15
```

This example changes the large item limit and bad item limit for the user laura@contoso.com in an existing migration batch.

### Example 2
```powershell
Set-MigrationUser -Identity laura@contoso.com -ApproveSkippedItems
```

This example approves all of the skipped items encountered for the user laura@contoso.com in an existing migration batch.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the email address of the user that's being migrated.

You can also identify the user by the GUID value in the MigrationUser property from the output of the Get-MigrationUser cmdlet. This identification method is useful if you accidentally submitted the same user in multiple batches.

```yaml
Type: MigrationUserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApproveSkippedItems

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ApproveSkippedItems switch marks all of the skipped items that were discovered prior to the current time as approved. You don't need to specify a value with this switch.

If the data loss that was detected during this migration is significant, the migration can't complete without approving skipped items. Items might have been skipped because they are corrupted in the source mailbox and can't be copied to the target mailbox, they are larger than the max allowable message size configured for the tenant, or they were detected as missing from the target mailbox when the migration is ready to complete.

For more information about maximum message size values, see the following topic [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits).

You don't need to specify a value with this switch.

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

### -BadItemLimit

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

**Note**: This parameter is deprecated from the cloud-based service. Admins must review the [Data Consistency Score](https://learn.microsoft.com/exchange/mailbox-migration/track-prevent-data-loss-dcs) and any skipped items before the migration completes.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The CompleteAfter parameter specifies a delay before the user is completed. Data migration for the user starts but doesn't complete until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

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

### -LargeItemLimit

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

**Note**: This parameter is deprecated from the cloud-based service. Admins must review the [Data Consistency Score](https://learn.microsoft.com/exchange/mailbox-migration/track-prevent-data-loss-dcs) and any skipped items before the migration completes.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The StartAfter parameter specifies a delay before the data migration for the user is started. The migration is prepared, but the actual data migration for the user doesn't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncNow

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SyncNow switch specifies whether to trigger an incremental sync for the migrated user. You don't need to specify a value with this switch.

An incremental sync copies any recent changes from the source mailbox to the target mailbox. You can perform an incremental sync before you complete the migration batch to reduce the time that's required for the completion.

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

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

## OUTPUTS

## NOTES

## RELATED LINKS
