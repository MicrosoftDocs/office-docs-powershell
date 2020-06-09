---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-hostedoutboundspamfilterpolicy
applicable: Exchange Online, Exchange Online Protection
title: New-HostedOutboundSpamFilterPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# New-HostedOutboundSpamFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-HostedOutboundSpamFilterPolicy cmdlet to create outbound spam filter policies in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HostedOutboundSpamFilterPolicy [-Name] <String>
 [-ActionWhenThresholdReached <OutboundRecipientLimitsExceededAction>]
 [-AdminDisplayName <String>]
 [-BccSuspiciousOutboundAdditionalRecipients <MultiValuedProperty>]
 [-BccSuspiciousOutboundMail <Boolean>]
 [-NotifyOutboundSpam <Boolean>]
 [-NotifyOutboundSpamRecipients <MultiValuedProperty>]
 [-RecipientLimitExternalPerHour <UInt32>]
 [-RecipientLimitInternalPerHour <UInt32>]
 [-RecipientLimitPerDay <UInt32>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Name parameter specifies a unique name for the outbound spam filter policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: False
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

### -NotifyOutboundSpam
**Note**: This setting has been replaced by the default alert policy named **User restricted from sending email**, which sends notification messages to admins. We recommend that you use the alert policy rather than this setting to notify admins and other users. For instructions, see [Verify the alert settings for restricted users](https://docs.microsoft.com/microsoft-365/security/office-365-security/removing-user-from-restricted-users-portal-after-spam.md#verify-the-alert-settings-for-restricted-users).

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
The RecipientLimitExternalPerHour parameter specifies the maximum number of external recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Office 365 options](https://docs.microsoft.com/microsoft-365/security/office-365-security/removing-user-from-restricted-users-portal-after-spam#verify-the-alert-settings-for-restricted-users).

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
The RecipientLimitInternalPerHour parameter specifies the maximum number of internal recipients that a user can send to within an hour. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Office 365 options](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-across-office-365-options).

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
The RecipientLimitInternalPerHour parameter specifies the maximum number of recipients that a user can send to within a day. A valid value is 0 to 10000. The default value is 0, which means the service defaults are used. For more information, see [Sending limits across Office 365 options](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#sending-limits-across-office-365-options).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
