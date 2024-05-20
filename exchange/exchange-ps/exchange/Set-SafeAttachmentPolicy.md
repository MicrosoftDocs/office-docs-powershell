---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-safeattachmentpolicy
applicable: Exchange Online
title: Set-SafeAttachmentPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-SafeAttachmentPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-SafeAttachmentPolicy cmdlet to modify safe attachment policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SafeAttachmentPolicy [-Identity] <SafeAttachmentPolicyIdParameter>
 [-Action <SafeAttachmentAction>]
 [-AdminDisplayName <String>]
 [-Confirm]
 [-Enable <Boolean>]
 [-QuarantineTag <String>]
 [-Redirect <Boolean>]
 [-RedirectAddress <SmtpAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity. For more information, see [Safe Attachments in Defender for Office 365](https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-attachments-about).

A safe attachment policy can be assigned to only one safe attachment rule by using the SafeAttachmentPolicy parameter on the New-SafeAttachmentRule or Set-SafeAttachmentRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SafeAttachmentsPolicy -Identity "Engineering Block Attachments" -QuarantineTag ContosoLimitedAccess
```

This example modifies the existing safe attachment policy named Engineering Block Attachments to set the quarantine policy to ContosoLimitedAccess.

## PARAMETERS

### -Identity
The Identity parameter specifies the safe attachment policy that you want to modify.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action
The Action parameter specifies the action for the safe attachment policy. Valid values are:

- Allow: Deliver the message if malware is detected in the attachment and track scanning results. This value corresponds to **Monitor** for the **Safe Attachments unknown malware response** property of the policy in the admin center.
- Block: Block the email message that contains the malware attachment. This is the default value.
- DynamicDelivery: Deliver the email message with a placeholder for each email attachment. The placeholder remains until a copy of the attachment is scanned and determined to be safe. For more information, see [Dynamic Delivery in Safe Attachments policies](https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-attachments-about#dynamic-delivery-in-safe-attachments-policies).

The value of this parameter is meaningful only when the value of the Enable parameter is $true (the default value is $false).

To specify no action for the safe attachment policy (corresponds to the value **Off** for the **Safe Attachments unknown malware response** policy setting in the admin center), use the value $false for the Enable parameter.

The results of all actions are available in message trace.

```yaml
Type: SafeAttachmentAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
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

### -Enable
The Enable parameter works with the Action parameter to specify the action for the safe attachment policy. Valid values are:

- $true: The Action parameter specifies the action for the safe attachment policy.
- $false: This is the default value. Attachments are not scanned by Safe Attachments, regardless of the value of the Action parameter. $false corresponds to the value **Off** for the **Safe Attachments unknown malware response** setting of the complete Safe Attachments policy in the Microsoft Defender portal (the combination of the rule and the corresponding associated policy in PowerShell).

To enable or disable an existing Safe Attachments policy, use the Enable-SafeAttachmentRule or Disable-SafeAttachmentRule cmdlets.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineTag
The QuarantineTag parameter specifies the quarantine policy that's used on messages that are quarantined as malware by Safe Attachments. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/microsoft-365/security/office-365-security/quarantine-policies).

The default value for this parameter is the built-in quarantine policy named AdminOnlyAccessPolicy. This quarantine policy enforces the historical capabilities for messages that were quarantined as malware by Safe Attachments as described in the table [here](https://learn.microsoft.com/microsoft-365/security/office-365-security/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Redirect
The Redirect parameter specifies whether to deliver messages to an alternate email address if malware is detected in an attachment. Valid values are:

- $true: Messages that contain malware attachments are delivered to the email address specified by the RedirectAddress parameter.
- $false: Messages that contain malware attachments aren't delivered to another email address. This is the default value.

**Note**: Redirection will soon be available only for the Allow action. For more information, see [MC424899](https://admin.microsoft.com/AdminPortal/Home?#/MessageCenter/:/messages/MC424899).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectAddress
The RedirectAddress parameter specifies the destination email address to deliver messages if malware is detected in an attachment.

The value of this parameter is meaningful only when value of the Redirect parameter is $true and the value of the Action parameter is Allow.

**Note**: Redirection will soon be available only for the Allow action. For more information, see [MC424899](https://admin.microsoft.com/AdminPortal/Home?#/MessageCenter/:/messages/MC424899).

```yaml
Type: SmtpAddress
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

**Note**: Redirection will soon be available only for the Allow action. For more information, see [MC424899](https://admin.microsoft.com/AdminPortal/Home?#/MessageCenter/:/messages/MC424899).

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

## OUTPUTS

## NOTES

## RELATED LINKS
