---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-migrationuser
applicable: Exchange Online
title: Set-MigrationUser
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-MigrationUser

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-MigrationUser cmdlet to modify the migration settings of a user in an existing migration batch.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MigrationUser [-Identity] <MigrationUserIdParameter>
 [-ApproveSkippedItems]
 [-BadItemLimit <Unlimited>]
 [-CompleteAfter <DateTime>]
 [-Confirm]
 [-LargeItemLimit <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-StartAfter <DateTime>]
 [-SyncNow]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Some settings can be applied both to the batch as well as to individual users within the batch. It is important to note that when a setting is applied to a user it will override any corresponding setting on the batch.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the email address of the user that's being migrated.

You can also identify the user by the GUID value in the MigrationUser property from the output of the Get-MigrationUser cmdlet. This identification method is useful if you accidentally submitted the same user in multiple batches.

```yaml
Type: MigrationUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApproveSkippedItems
This parameter is available only in the cloud-based service.

The ApproveSkippedItems switch marks all of the skipped items discovered prior to the current time as approved. If the data loss that was detected during this migration is significant, the migration will not be able to complete without approving skipped items. Items may have been skipped because they are corrupted in the source mailbox and can't be copied to the target mailbox, they are larger than the max allowable message size configured for the tenant, or they were detected as missing from the target mailbox when the migration is ready to complete.

For more information about maximum message size values, see the following topic [Exchange Online Limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits).

You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the migration request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the migration request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the migration request again.

**Note**: This parameter is being deprecated. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompleteAfter
The CompleteAfter parameter specifies a delay before the user is completed. Data migration for the user will start, but won't complete until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2016 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://docs.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the migration request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://docs.microsoft.com/Exchange/mail-flow/message-size-limits)

- Exchange Online: [Exchange Online Limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the migration request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the migration request can proceed.

**Note**: This parameter is being deprecated. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartAfter
The StartAfter parameter specifies a delay before the data migration for the user is started. The migration will be prepared, but the actual data migration for the user won't start until the date/time you specify with this parameter.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

In Exchange Online PowerShell, if you specify a date/time value without a time zone, the value is in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2016 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://docs.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncNow
The SyncNow switch specifies whether to trigger an incremental sync for the migrated user. You don't need to specify a value with this switch.

An incremental sync copies any recent changes from the source mailbox to the target mailbox. You can perform an incremental sync before you complete the migration batch to reduce the time that's required for the completion.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
