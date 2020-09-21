---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-hostedoutboundspamfilterpolicy
applicable: Exchange Online, Exchange Online Protection
title: Set-HostedOutboundSpamFilterPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-HostedOutboundSpamFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-HostedOutboundSpamFilterPolicy cmdlet to modify outbound spam filter policies in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-HostedOutboundSpamFilterPolicy [-Identity] <HostedOutboundSpamFilterPolicyIdParameter>
 [-ActionWhenThresholdReached <OutboundRecipientLimitsExceededAction>]
 [-AdminDisplayName <String>]
 [-AutoForwardingMode <AutoForwardingMode>]
 [-BccSuspiciousOutboundAdditionalRecipients <MultiValuedProperty>]
 [-BccSuspiciousOutboundMail <Boolean>]
 [-Confirm]
 [-NotifyOutboundSpam <Boolean>]
 [-NotifyOutboundSpamRecipients <MultiValuedProperty>]
 [-RecipientLimitExternalPerHour <UInt32>]
 [-RecipientLimitInternalPerHour <UInt32>]
 [-RecipientLimitPerDay <UInt32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-HostedOutboundSpamFilterPolicy -Identity Default -RecipientLimitExternalPerHour 500 -RecipientLimitInternalPerHour 1000 -RecipientLimitPerDay 1000 -ActionWhenThresholdReached BlockUser
```

This example configures the following settings in the outbound spam filter policy named Default:

- The recipient rate limits are restricted to smaller values that the service defaults.

- After one of the limits is reached, the user is prevented from sending messages (added to the Restricted Users portal).

## PARAMETERS

### -Identity
The Identity parameter specifies the outbound spam filter policy you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: HostedOutboundSpamFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActionWhenThresholdReached
The ActionWhenThresholdReach parameter specifies the action to take when any of the limits specified in the policy are reached. Valid values are:

- Alert: No action, alert only.

- BlockUser: Prevent the user from sending email messages.

- BlockUserForToday: Prevent the user from sending email messages until the following day. This is the default value.

```yaml
Type: OutboundRecipientLimitsExceededAction
Parameter Sets: (All)
Aliases:
Accepted values: Alert, BlockUserForToday, BlockUser
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoForwardingMode
**Note**: Before September 2020, this setting is available but not enforced.

The AutoForwardingMode specifies how the policy controls automatic email forwarding to outbound recipients. Valid values are:

- Automatic: Allows outbound spam filtering to control automatic external email forwarding. This is the default value.
- On: Automatic external email forwarding is not disabled by the policy.
- Off: All automatic external email forwarding is disabled by the policy.

This setting applies only to cloud-based mailboxes, and automatic forwarding to internal recipients is not affected by this setting.

```yaml
Type: AutoForwardingMode
Parameter Sets: (All)
Aliases:
Accepted values: Automatic, Off, On
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccSuspiciousOutboundAdditionalRecipients
The BccSuspiciousOutboundAdditionalRecipients parameter specifies an email address to add to the Bcc field of outgoing spam messages. You can specify multiple email addresses separated by commas.

The specified recipients are added to the Bcc field of outgoing spam messages when the value of the BccSuspiciousOutboundMail parameter is $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccSuspiciousOutboundMail
The BccSuspiciousOutboundMail parameter specifies whether to add recipients to the Bcc field of outgoing spam messages. Valid values are:

- $true: The recipients specified by the BccSuspiciousOutboundAdditionalRecipients parameter are added to outgoing spam messages.

- $false: No additional messages are added to outgoing spam messages. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOutboundSpam
**Note**: This setting has been replaced by the default alert policy named **User restricted from sending email**, which sends notification messages to admins. We recommend that you use the alert policy rather than this setting to notify admins and other users. For instructions, see [Verify the alert settings for restricted users](https://docs.microsoft.com/microsoft-365/security/office-365-security/removing-user-from-restricted-users-portal-after-spam#verify-the-alert-settings-for-restricted-users).

The NotifyOutboundSpam parameter specify whether to notify admins when outgoing spam is detected. Valid values are:

- $true: Notify the admins specified by the NotifyOutboundSpamRecipients parameter.

- $false: Don't send notifications. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOutboundSpamRecipients
**Note**: This setting has been replaced by the default alert policy named **User restricted from sending email**, which sends notification messages to admins. We recommend that you use the alert policy rather than this setting to notify admins and other users. For instructions, see [Verify the alert settings for restricted users](https://docs.microsoft.com/microsoft-365/security/office-365-security/removing-user-from-restricted-users-portal-after-spam#verify-the-alert-settings-for-restricted-users).

The NotifyOutboundSpamRecipients parameter specifies the email addresses of admins to notify when an outgoing spam is detected. You can specify multiple email addresses separated by commas.

The specified recipients receive notifications when the value of the NotifyOutboundSpam parameter is $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitExternalPerHour
The RecipientLimitExternalPerHour parameter specifies the maximum number of external recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-1).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitInternalPerHour
The RecipientLimitInternalPerHour parameter specifies the maximum number of internal recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-1).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitPerDay
The RecipientLimitInternalPerHour parameter specifies the maximum number of recipients that a user can send to within a day. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-1).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
