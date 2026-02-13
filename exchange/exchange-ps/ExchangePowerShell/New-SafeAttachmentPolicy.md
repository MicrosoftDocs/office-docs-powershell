---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-safeattachmentpolicy
schema: 2.0.0
title: New-SafeAttachmentPolicy
---

# New-SafeAttachmentPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-SafeAttachmentPolicy cmdlet to create safe attachment policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SafeAttachmentPolicy [-Name] <String>
 [-Action <SafeAttachmentAction>]
 [-AdminDisplayName <String>]
 [-Confirm]
 [-Enable <Boolean>]
 [-EnableBlockingEncryptedAttachments <Boolean>]
 [-ExcludedTypesFromBlockingEncryptedAttachments <MultiValuedProperty>]
 [-MakeBuiltInProtection]
 [-QuarantineTag <String>]
 [-QuarantineTagForBlockingEncryptedAttachments <String>]
 [-RecommendedPolicyType <RecommendedPolicyType>]
 [-Redirect <Boolean>]
 [-RedirectAddress <SmtpAddress>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity. For more information, see [Safe Attachments in Defender for Office 365](https://learn.microsoft.com/defender-office-365/safe-attachments-about).

New safe attachment policies that you create using this cmdlet aren't applied to users and aren't visible in the Microsoft Defender portal. You need to use the SafeAttachmentPolicy parameter on the New-SafeAttachmentRule or Set-SafeAttachmentRule cmdlets to associate the policy with a rule to create a complete Safe Attachments policy that's visible in the Defender portal.

A safe attachment policy can be assigned to only one safe attachment rule.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-SafeAttachmentPolicy -Name "Marketing Block Attachments" -Enable $true -Redirect $true -RedirectAddress admin@contoso.com
```

This example creates a new safe attachment policy named Marketing Block Attachments with the following options:

- The action is Block. This value is the default of the Action parameter, so you don't need to specify it.
- The value $true for the Enable parameter is required so the policy actually uses the default Action parameter value of Block (or any other Action parameter value).
- Enable redirection for detected malware attachments and send the messages to `admin@contoso.com`.
- If Safe Attachments scanning isn't available or encounters errors, don't deliver the message as normal. The default value of the ActionOnError parameter is $true, so you don't need to specify it.

## PARAMETERS

### -Name

> Applicable: Exchange Online

The Name parameter specifies a unique name for the safe attachment policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action

> Applicable: Exchange Online

The Action parameter specifies the action for the safe attachment policy. Valid values are:

- Allow: Deliver the message even if Safe Attachments detects malware or phishing in an attachment. Scanning results are tracked. This value corresponds to **Monitor** for the **Safe Attachments unknown malware response** property of the policy in the Microsoft Defender portal.
- Block: Quarantine the message if Safe Attachments detects malware or phishing in an attachment. This value is the default.
- DynamicDelivery: Deliver the message prior to Safe Attachments scanning with a replacement placeholder file for each attachment. After Safe Links scan the attachment, the attachment is restored in the message or quarantined as malicious. For more information, see [Dynamic Delivery in Safe Attachments policies](https://learn.microsoft.com/defender-office-365/safe-attachments-about#dynamic-delivery-in-safe-attachments-policies).

The value of this parameter is meaningful only when the value of the Enable parameter is $true (the default value is $false).

To specify no action for the safe attachment policy (corresponds to the value **Off** for the **Safe Attachments unknown malware response** policy setting in the Defender portal), use the value $false for the Enable parameter.

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

- $true: The Action parameter specifies the action for the Safe Attachment policy.
- $false: This value is the default. Attachments are not scanned by Safe Attachments, regardless of the value of the Action parameter. This value corresponds to the **Off** selection for the **Safe Attachments unknown malware response** setting of the policy in the Microsoft Defender portal.

To enable or disable a complete Safe Attachments policy in the Microsoft Defender portal (the combination of the rule and the corresponding associated policy in PowerShell), use the Enable-SafeAttachmentRule or Disable-SafeAttachmentRule cmdlets.

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

### -EnableBlockingEncryptedAttachments

> Applicable: Exchange Online

The EnableBlockingEncryptedAttachments parameter specifies whether to messages that contain encrypted attachments that Safe Attachments can't scan. Valid values are:

- $true: Quarantine messages that contain uscannable encrypted attachments.
- $false: Deliver (don't quarantine) message that contain uscannable encrypted attachments. This value is the default.

The value of this parameter is meaningful only with the following policy configuration:

- Enable: $true
- Action: Block

Use the ExcludedTypesFromBlockingEncryptedAttachments parameter to specify file types that allow messages to be delivered (not quarantined) when Safe Attachments can't scan encrypted attachments.

Use the QuarantineTagForBlockingEncryptedAttachments parameter to specify what recipients can do to messages quarantined by Safe Attachments due to encrypted attachments that can't be scanned.

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

### -ExcludedTypesFromBlockingEncryptedAttachments

> Applicable: Exchange Online

The ExcludedTypesFromBlockingEncryptedAttachments parameter specifies the attachment file types that allow messages to be delivered (not quarantined) when Safe Attachments can't scan the encrypted attachments. Valid values are:

- Acrobat (pdf)
- Archive (zip, gzip, 7z, rar, tar only)
- Office (doc, docx, xls, xlsx, ppt, pptx only)
- Others

You can specify multiple values separated by commas.

The value of this parameter is meaningful only with the following policy configuration:

- Enable: $true
- EnableBlockingEncryptedAttachments: $true
- Action: Block

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

### -MakeBuiltInProtection

> Applicable: Exchange Online

The MakeBuiltInProtection switch is used for Built-in protection policy creation as part of [Preset security policies](https://learn.microsoft.com/defender-office-365/preset-security-policies). Don't use this switch yourself.

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

### -QuarantineTag

> Applicable: Exchange Online

The QuarantineTag parameter specifies the quarantine policy that's used on messages that are quarantined as malware or phishing by Safe Attachments. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

The default value is AdminOnlyAccessPolicy. Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about this quarantine policy, see [Anatomy of a quarantine policy](https://learn.microsoft.com/defender-office-365/quarantine-policies#anatomy-of-a-quarantine-policy).

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

### -QuarantineTagForBlockingEncryptedAttachments

> Applicable: Exchange Online

The QuarantineTagForBlockingEncryptedAttachments parameter specifies the quarantine policy that's used on messages that are quarantined because they contain encrypted attachments that Safe Attachments can't scan. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

The value of this parameter is meaningful only with the following policy configuration:

- Enable: $true
- EnableBlockingEncryptedAttachments: $true
- Action: Block

The default value is DefaultFullAccessWithNotificationPolicy. Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about this quarantine policy, see [Anatomy of a quarantine policy](https://learn.microsoft.com/defender-office-365/quarantine-policies#anatomy-of-a-quarantine-policy).

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

### -RecommendedPolicyType

> Applicable: Exchange Online

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

### -Redirect

> Applicable: Exchange Online

The Redirect parameter specifies whether to deliver messages to an alternate email address if malware is detected in an attachment. Valid values are:

- $true: Messages that contain malware attachments are delivered to the email address specified by the RedirectAddress parameter. This value is meaningful only when the value of the Action parameter is Allow.
- $false: Messages that contain malware attachments aren't delivered to another email address. This value is the default.

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

The RedirectAddress parameter specifies the destination email address to deliver messages if malware is detected in an attachment.

The value of this parameter is meaningful only when value of the Redirect parameter is $true and the value of the Action parameter is Allow.

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
