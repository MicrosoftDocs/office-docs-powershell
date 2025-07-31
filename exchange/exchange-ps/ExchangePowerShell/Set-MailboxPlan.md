---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-mailboxplan
schema: 2.0.0
title: Set-MailboxPlan
---

# Set-MailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-MailboxPlan cmdlet to modify the settings of mailbox plans in the cloud-based service.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxPlan [-Identity] <MailboxPlanIdParameter>
 [-Confirm]
 [-Force]
 [-IsDefault]
 [-IssueWarningQuota <Unlimited>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-RecipientLimits <Unlimited>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
A mailbox plan is a template that automatically configures mailbox properties. Mailbox plans correspond to license types, and are applied when you license the user. The availability of a mailbox plan is determined by your selections when you enroll in the service and the age of your organization.

Modifying the settings in a mailbox plan doesn't affect existing mailboxes that were created using the mailbox plan. The only way to use a mailbox plan to modify the settings on an existing mailbox is to assign a different license to the user, which will apply the corresponding mailbox plan to the mailbox.

Each mailbox plan has a corresponding Client Access services (CAS) mailbox plan with the same name and display name value. You can use the Set-CasMailboxPlan cmdlet to enable or disable POP3, IMAP4 or Exchange ActiveSync (EAS) access to new or newly-enabled mailboxes, and you can specify the Outlook on the web (formerly known as Outlook Web App) mailbox policy for the mailboxes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxPlan -Identity ExchangeOnlineEnterprise -ProhibitSendReceiveQuota 40GB -ProhibitSendQuota 39.5GB -IssueWarningQuota 39GB
```

This example lowers the default mailbox quotas in the mailbox plan named ExchangeOnlineEnterprise.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the mailbox plan that you want to modify. You can use any value that uniquely identifies the mailbox plan. For example:

- Name
- Alias
- Display name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Exchange Online Protection

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

### -Force

> Applicable: Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -IsDefault

> Applicable: Exchange Online

The IsDefault switch specifies that the mailbox plan is the default mailbox plan. You don't need to specify a value with this switch.

New and newly-enabled mailboxes receive the settings in the default mailbox plan.

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

### -IssueWarningQuota

> Applicable: Exchange Online

The IssueWarningQuota parameter specifies the warning threshold for the size of the mailboxes that are created or enabled using the mailbox plan. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The IssueWarningQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

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

### -MaxReceiveSize

> Applicable: Exchange Online

The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to the mailbox. Messages larger than the maximum size are rejected.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 150 MB. The default value is 36 MB.

The maximum value is determined by the mailbox plan (subscriptions and licenses). You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

Use this parameter to change the MaxReceiveSize value for new mailboxes that you create. Use the MaxReceiveSize parameter on the Set-Mailbox cmdlet to configure the value on existing mailboxes.

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

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

### -MaxSendSize

> Applicable: Exchange Online

The MaxSendSize parameter specifies the maximum size of a message that can be sent by the mailbox.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 150 MB. The default value is 35 MB.

The maximum value is determined by the mailbox plan (subscriptions and licenses). You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

Use this parameter to change the MaxSendSize value for new mailboxes that you create. Use the MaxSendSize parameter on the Set-Mailbox cmdlet to configure the value on existing mailboxes.

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

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

### -ProhibitSendQuota

> Applicable: Exchange Online

The ProhibitSendQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send new messages, and the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The ProhibitSendQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

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

### -ProhibitSendReceiveQuota

> Applicable: Exchange Online

The ProhibitSendReceiveQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send or receive new messages. Messages sent to the mailbox are returned to the sender with a descriptive error message. This value effectively determines the maximum size of the mailbox.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value must be greater than or equal to the ProhibitSendQuota or IssueWarningQuota values.

The maximum value is determined by the mailbox plan. You can lower the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

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

### -RecipientLimits

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -RetainDeletedItemsFor

> Applicable: Exchange Online

The RetainDeletedItemsFor parameter specifies the length of time to keep soft-deleted items for the mailbox. Soft-deleted items are items that have been deleted by using any of these methods:

- Deleting items from the Deleted Items folder.
- Selecting the Empty Deleted Items Folder action.
- Deleting items using Shift + Delete.

These actions move the items to the Recoverable Items folder, into a subfolder named Deletions.

Before the deleted item retention period expires, users can recover soft-deleted items in Outlook and Outlook on the web by using the Recover Deleted Items feature. For more information, see [Recoverable Items folder in Exchange Online](https://learn.microsoft.com/Exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 14 days (14.00:00:00). In Exchange Online, you can increase the value to a maximum of 30 days.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy

> Applicable: Exchange Online

The RetentionPolicy parameter specifies the retention policy that's applied to new mailboxes that you create. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished Name (DN)
- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained. Use the Get-RetentionPolicy cmdlet to see the available retention policies.

By default, the value of this parameter is blank ($null), which means the default retention policy (the retention policy where the IsDefault property value is True) is assigned to new mailboxes. By default, the default retention policy is named Default MRM Policy.

If you don't set a value for this parameter, existing mailboxes are also updated if you change which retention policy is the default by using the IsDefault switch on the New-RetentionPolicy or Set-RetentionPolicy cmdlets.

**Note**: Specifying a value for this parameter has the following potential issues:

- If the value of this parameter is not blank ($null), then the specified retention policy must be the default Exchange retention policy that's configured for the organization. Otherwise, the experience might be inconsistent when creating new mailboxes, enabling disabled mailboxes, and changing licenses.
- If a mailbox is assigned an Exchange retention policy that's not the default policy, the RetentionPolicy value of the mailbox will be overwritten when changing licenses and will need to be manually reset to the original value.
- Changes to the default retention policy that affect existing mailboxes can potentially saturate the network if there are hundreds or thousands of mailboxes that require updates.

For more information, see [Mailbox plans in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/mailbox-plans).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy

> Applicable: Exchange Online

The RoleAssignmentPolicy parameter specifies the role assignment policy that's applied to the mailbox. You can use any value that uniquely identifies the role assignment policy. For example:

- Name
- Distinguished name (DN)
- GUID

The default value is Default Role Assignment Policy.

To see the available role assignment policies, use the Get-RoleAssignmentPolicy cmdlet.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
