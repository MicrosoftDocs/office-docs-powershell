---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/advanced-threat-protection/set-safeattachmentpolicy
applicable: Exchange Online, Exchange Online Protection
title: Set-SafeAttachmentPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Set-SafeAttachmentPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-SafeAttachmentPolicy cmdlet to modify Safe Attachments policies in your cloud-based organization.

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SafeAttachmentPolicy [-Identity] <SafeAttachmentPolicyIdParameter>
 [-Action <SafeAttachmentAction>] [-ActionOnError <Boolean>]
 [-AdminDisplayName <String>] [-Confirm] [-Enable <Boolean>] [-Redirect <Boolean>]
 [-RedirectAddress <SmtpAddress>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SafeAttachmentsPolicy -Identity "Engineering Block Attachments" -Redirect $true -RedirectAddress admin@contoso.com
```

This example modifies the existing Safe Attachments policy named Engineering Block Attachments to redirect detected malware attachments to admin@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Attachments policy that you want to modify.

You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action
The Action parameter specifies the action for the Safe Attachments policy. Valid values are:

- Allow: Deliver the email message, including the malware attachment.

- Block: Block the email message that contains the malware attachment. This is the default value.

- Replace: Deliver the email message, but remove the malware attachment and replace it with warning text.

- DynamicDelivery: Deliver the email message with a placeholder for each email attachment. The placeholder remains until a copy of the attachment is scanned and determined to be safe. For more information, see [How Dynamic Delivery works](https://docs.microsoft.com/microsoft-365/security/office-365-security/dynamic-delivery-and-previewing#how-dynamic-delivery-works).

The results of all actions are available in message trace.

```yaml
Type: SafeAttachmentAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActionOnError
The ActionOnError parameter specifies the error handling option for Safe Attachments scanning (what to do if attachment scanning times out or an error occurs). Valid values are:

- $true: The action specified by the Action parameter is applied to messages even when the attachments aren't successfully scanned.

- $false: The action specified by the Action parameter isn't applied to messages when the attachments aren't successfully scanned. This is the default value.

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

### -Enable
The Enable parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled.

- $false: The policy is disabled. This is the default value.

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

### -Redirect
The Redirect parameter specifies whether to send detected malware attachments to another email address. Valid values are:

- $true: Malware attachments are sent to the email address specified by the RedirectAddress parameter.

- $false: Malware attachments aren't sent to another email address. This is the default value.

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

### -RedirectAddress
The RedirectAddress parameter specifies the email address where detected malware attachments are sent when the Redirect parameter is set to the value $true.

```yaml
Type: SmtpAddress
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
