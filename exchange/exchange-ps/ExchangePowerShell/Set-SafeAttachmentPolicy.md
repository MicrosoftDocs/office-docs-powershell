---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-safeattachmentpolicy
schema: 2.0.0
title: Set-SafeAttachmentPolicy
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
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity. For more information, see [Safe Attachments in Defender for Office 365](https://learn.microsoft.com/defender-office-365/safe-attachments-about).

A safe attachment policy can be assigned to only one safe attachment rule by using the SafeAttachmentPolicy parameter on the New-SafeAttachmentRule or Set-SafeAttachmentRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SafeAttachmentsPolicy -Identity "Engineering Block Attachments" -QuarantineTag ContosoLimitedAccess
```

This example modifies the existing safe attachment policy named Engineering Block Attachments to set the quarantine policy to ContosoLimitedAccess.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the safe attachment policy that you want to modify.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action

> Applicable: Exchange Online

The Action parameter specifies the action for the safe attachment policy. Valid values are:

- Block: Block the email message that contains the malware attachment. This is the default value.
- DynamicDelivery: Deliver the email message with a placeholder for each email attachment. The placeholder remains until a copy of the attachment is scanned and determined to be safe. For more information, see [Dynamic Delivery in Safe Attachments policies](https://learn.microsoft.com/defender-office-365/safe-attachments-about#dynamic-delivery-in-safe-attachments-policies).

The value of this parameter is meaningful only when the value of the Enable parameter is $true (the default value is $false).

To specify no action for the safe attachment policy (corresponds to the value **Off** for the **Safe Attachments unknown malware response** policy setting in the Microsoft Defender portal), use the value $false for the Enable parameter.

The results of all actions are available in message trace.

```yaml
Type: SafeAttachmentAction
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName

> Applicable: Exchange Online

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

### -Confirm

> Applicable: Exchange Online

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

### -Enable

> Applicable: Exchange Online

The Enable parameter works with the Action parameter to specify the action for the safe attachment policy. Valid values are:

- $true: The Action parameter specifies the action for the safe attachment policy.
- $false: This value is the default. Attachments are not scanned by Safe Attachments, regardless of the value of the Action parameter. $false corresponds to the value **Off** for the **Safe Attachments unknown malware response** setting of the complete Safe Attachments policy in the Microsoft Defender portal (the combination of the rule and the corresponding associated policy in PowerShell).

To enable or disable an existing Safe Attachments policy, use the Enable-SafeAttachmentRule or Disable-SafeAttachmentRule cmdlets.

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

### -QuarantineTag

> Applicable: Exchange Online

The QuarantineTag parameter specifies the quarantine policy that's used on messages that are quarantined as malware by Safe Attachments. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

The default value for this parameter is the built-in quarantine policy named AdminOnlyAccessPolicy. This quarantine policy enforces the historical capabilities for messages that were quarantined as malware by Safe Attachments as described in the table [here](https://learn.microsoft.com/defender-office-365/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

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

### -Redirect

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -RedirectAddress

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

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
