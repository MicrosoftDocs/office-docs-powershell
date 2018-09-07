---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Online
title: Set-MailboxPlan
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-MailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-MailboxPlan cmdlet to modify the settings of mailbox plans in the cloud-based service.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxPlan [-Identity] <MailboxPlanIdParameter> [-Confirm] [-Force] [-IsDefault]
 [-IssueWarningQuota <Unlimited>] [-MaxReceiveSize <Unlimited>] [-MaxSendSize <Unlimited>]
 [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A mailbox plan is a template that automatically configures properties on new mailboxes. Mailbox plans correspond to Microsoft Office 365 license types. The availability of a mailbox plan is determined by the selections you make when you enroll your domain in Office 365.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxPlan -Identity ExchangeOnlineEnterprise -ProhibitSendReceiveQuota 40GB -ProhibitSendQuota 39.5GB -IssueWarningQuota 39GB
```

This example lowers the default mailbox quotas in the mailbox plan named ExchangeOnlineEnterprise.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox plan that you want to modify. You can use any value that uniquely identifies the mailbox plan. For example:

- Name

- Alias

- Display name

- Distinguished name (DN)

- GUID

- LegacyExchangeDN

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -IsDefault
The IsDefault switch specifies that the mailbox plan is the default mailbox plan. You don't need to specify a value with this switch.

New and enabled mailboxes receive the settings in the default mailbox plan.

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

### -IssueWarningQuota
The IssueWarningQuota parameter specifies the warning threshold for the size of the mailbox. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message.

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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReceiveSize
The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to created or enabled mailboxes that have the mailbox plan applied to them. Messages larger than the maximum size are rejected.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 150MB. The default value is 36MB.

The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.

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

### -MaxSendSize
The MaxSendSize parameter specifies the maximum size of a message that can be sent by created or enabled mailboxes that have the mailbox plan applied to them.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 150MB. The default value is 35MB.

The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan.

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.

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

### -ProhibitSendQuota
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitSendReceiveQuota
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsFor
The RetainDeletedItemsFor parameter specifies the length of time to keep soft-deleted items for the mailbox. Soft-deleted items are items that have been deleted by using any of these methods:

- Deleting items from the Deleted Items folder.

- Selecting the Empty Deleted Items Folder action.

- Deleting items using Shift + Delete.

These actions move the items to the Recoverable Items folder, into a subfolder named Deletions.

Before the deleted item retention period expires, users can recover soft-deleted items in Outlook and Outlook on the web by using the Recover Deleted Items feature. For more information, see Recoverable Items folder in Exchange 2016 (https://technet.microsoft.com/library/ee364755.aspx).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 14 days (14.00:00:00). In Office 365, you can increase the value to a maximum of 30 days.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy
The RetentionPolicy parameter specifies the retention policy that you want applied to mailboxes that have the mailbox plan applied to them. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished Name (DN)

- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.

Use the Get-RetentionPolicy cmdlet to see the available retention policies.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy
The RoleAssignmentPolicy parameter specifies the management role assignment policy that's associated with the mailbox plan. This role assignment policy is assigned to all created or enabled mailboxes that have the mailbox plan assigned to them.

The default value is blank ($null). This value means that new mailboxes receive the default role assignment policy that's configured for the organization. By default, the default role assignment policy is named Default Role Assignment Policy.

To associate a role assignment policy with the mailbox plan, you use any value that uniquely identifies the role assignment policy. For example:

- Name

- Distinguished name (DN)

- GUID

To see the available role assignment policies, use the Get-RoleAssignmentPolicy cmdlet.

```yaml
Type: MailboxPolicyIdParameter
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/16812582-1dba-4b58-8400-bda0dc730a04.aspx)
