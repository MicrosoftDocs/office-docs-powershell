---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-hostedoutboundspamfilterpolicy
schema: 2.0.0
title: New-HostedOutboundSpamFilterPolicy
---

# New-HostedOutboundSpamFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-HostedOutboundSpamFilterPolicy cmdlet to create outbound spam filter policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HostedOutboundSpamFilterPolicy [-Name] <String>
 [-ActionWhenThresholdReached <OutboundRecipientLimitsExceededAction>]
 [-AdminDisplayName <String>]
 [-AutoForwardingMode <AutoForwardingMode>]
 [-BccSuspiciousOutboundAdditionalRecipients <MultiValuedProperty>]
 [-BccSuspiciousOutboundMail <Boolean>]
 [-NotifyOutboundSpam <Boolean>]
 [-NotifyOutboundSpamRecipients <MultiValuedProperty>]
 [-RecipientLimitExternalPerHour <UInt32>]
 [-RecipientLimitInternalPerHour <UInt32>]
 [-RecipientLimitPerDay <UInt32>]
 [-RecommendedPolicyType <RecommendedPolicyType>]
 [<CommonParameters>]
```

## DESCRIPTION
New policies that you create using this cmdlet aren't applied to users and aren't visible in admin centers. You need to use the HostedOutboundSpamFilterPolicy parameter on the New-HostedOutboundSpamFilterRule or Set-HostedOutboundSpamFilterRule cmdlets to associate the policy with a rule.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-HostedOutboundSpamFilterPolicy -Name "Contoso Executives" -RecipientLimitExternalPerHour 400 -RecipientLimitInternalPerHour 800 -RecipientLimitPerDay 800 -ActionWhenThresholdReached BlockUser
```

This example creates a new outbound spam filter policy named Contoso Executives with the following settings:

- The recipient rate limits are restricted to smaller values that the service defaults.
- After one of the limits is reached, the user is prevented from sending messages (added to the Restricted Users portal).

## PARAMETERS

### -Name

> Applicable: Exchange Online, Exchange Online Protection

The Name parameter specifies a unique name for the outbound spam filter policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActionWhenThresholdReached

> Applicable: Exchange Online, Exchange Online Protection

The ActionWhenThresholdReach parameter specifies the action to take when any of the limits specified in the policy are reached. Valid values are:

- Alert: No action, alert only.
- BlockUser: Prevent the user from sending email messages.
- BlockUserForToday: Prevent the user from sending email messages until the following day. This value is the default.

```yaml
Type: OutboundRecipientLimitsExceededAction
Parameter Sets: (All)
Aliases:
Accepted values: Alert, BlockUserForToday, BlockUser

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName

> Applicable: Exchange Online, Exchange Online Protection

The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoForwardingMode

> Applicable: Exchange Online, Exchange Online Protection

The AutoForwardingMode specifies how the policy controls automatic email forwarding to external recipients. Valid values are:

- Automatic: This value is the default. This value is now the same as Off. When this value was originally introduced, it was equivalent to On. Over time, thanks to the principles of [secure by default](https://learn.microsoft.com/defender-office-365/secure-by-default), the effect of this value was eventually changed to Off for all customers. For more information, see [this blog post](https://techcommunity.microsoft.com/t5/exchange-team-blog/all-you-need-to-know-about-automatic-email-forwarding-in/ba-p/2074888).
- On: Automatic external email forwarding isn't disabled by the policy.
- Off: Automatic external email forwarding is disabled by the policy and results in a non-delivery report (also known as an NDR or bounce message) to the sender.

This setting applies to cloud-based mailboxes only. Automatic forwarding to internal recipients isn't affected by this setting.

```yaml
Type: AutoForwardingMode
Parameter Sets: (All)
Aliases:
Accepted values: Automatic, Off, On

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccSuspiciousOutboundAdditionalRecipients

> Applicable: Exchange Online, Exchange Online Protection

The BccSuspiciousOutboundAdditionalRecipients parameter specifies an email address to add to the Bcc field of outgoing spam messages. You can specify multiple email addresses separated by commas.

The specified recipients are added to the Bcc field of outgoing spam messages when the value of the BccSuspiciousOutboundMail parameter is $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccSuspiciousOutboundMail

> Applicable: Exchange Online, Exchange Online Protection

The BccSuspiciousOutboundMail parameter specifies whether to add recipients to the Bcc field of outgoing spam messages. Valid values are:

- $true: The recipients specified by the BccSuspiciousOutboundAdditionalRecipients parameter are added to outgoing spam messages.
- $false: No additional messages are added to outgoing spam messages. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOutboundSpam

> Applicable: Exchange Online, Exchange Online Protection

**Note**: This setting is replaced by the default alert policy named **User restricted from sending email**, which sends notification messages to admins. We recommend that you use the alert policy rather than this setting to notify admins and other users. For instructions, see [Verify the alert settings for restricted users](https://learn.microsoft.com/defender-office-365/outbound-spam-restore-restricted-users#verify-the-alert-settings-for-restricted-users).

The NotifyOutboundSpam parameter specify whether to notify admins when outgoing spam is detected. Valid values are:

- $true: Notify the admins specified by the NotifyOutboundSpamRecipients parameter.
- $false: Don't send notifications. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOutboundSpamRecipients

> Applicable: Exchange Online, Exchange Online Protection

**Note**: This setting is replaced by the default alert policy named **User restricted from sending email**, which sends notification messages to admins. We recommend that you use the alert policy rather than this setting to notify admins and other users. For instructions, see [Verify the alert settings for restricted users](https://learn.microsoft.com/defender-office-365/outbound-spam-restore-restricted-users#verify-the-alert-settings-for-restricted-users).

The NotifyOutboundSpamRecipients parameter specifies the email addresses of admins to notify when an outgoing spam is detected. You can specify multiple email addresses separated by commas.

The specified recipients receive notifications when the value of the NotifyOutboundSpam parameter is $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitExternalPerHour

> Applicable: Exchange Online, Exchange Online Protection

The RecipientLimitExternalPerHour parameter specifies the maximum number of external recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Microsoft 365 options](https://learn.microsoft.com/defender-office-365/outbound-spam-restore-restricted-users#verify-the-alert-settings-for-restricted-users).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitInternalPerHour

> Applicable: Exchange Online, Exchange Online Protection

The RecipientLimitInternalPerHour parameter specifies the maximum number of internal recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Microsoft 365 options](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-across-office-365-options).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimitPerDay

> Applicable: Exchange Online, Exchange Online Protection

The RecipientLimitInternalPerHour parameter specifies the maximum number of recipients that a user can send to within a day. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Microsoft 365 options](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-across-office-365-options).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecommendedPolicyType

> Applicable: Exchange Online, Exchange Online Protection

The RecommendedPolicyType parameter is used for Standard and Strict policy creation as part of [Preset security policies](https://learn.microsoft.com/defender-office-365/preset-security-policies). Don't use this parameter yourself.

```yaml
Type: RecommendedPolicyType
Parameter Sets: (All)
Aliases:

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
