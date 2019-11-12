---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: New-SafeAttachmentPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# New-SafeAttachmentPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-SafeAttachmentPolicy cmdlet to create Safe Attachments policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
New-SafeAttachmentPolicy [-Name] <String> [-Action <Block | Replace | Allow | DynamicDelivery>]
 [-ActionOnError <$true | $false>] [-AdminDisplayName <String>] [-Confirm] [-Enable <$true | $false>]
 [-Redirect <$true | $false>] [-RedirectAddress <SmtpAddress>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
New Safe Attachments policies aren't valid and aren't applied until you add a Safe Attachments rule to the policy by using the New-SafeAttachmentRule cmdlet.

Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-SafeAttachmentPolicy -Name "Marketing Block Attachments" -Enable $true -Redirect $true -RedirectAddress admin@contoso.com
```

This example creates a new Safe Attachments policy named Marketing Block Attachments with the following options:

- The policy is enabled.

- The action is Block. This is the default value of the Action parameter, so you don't need to specify it.

- If Safe Attachments scanning isn't available or encounters errors, deliver the message as normal. The default value of the ActionOnError parameter is $false, so you don't need to specify it.

- Redirect detected malware messages to admin@contoso.com.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the Safe Attachments policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action
The Action parameter specifies the action for the Safe Attachments policy. Valid values are:

- Allow: Deliver the email message, including the malware attachment.

- Block: Block the email message that contains the malware attachment. This is the default value.

- Replace: Deliver the email message, but remove the malware attachment and replace it with warning text.

The results of all actions are available in message trace.

```yaml
Type: Block | Replace | Allow | DynamicDelivery
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
The ActionOnError parameter specifies the error handling option for Safe Attachments scanning (what to do if scanning times out or an error occurs). Valid values are:

- $true: The action specified by the Action parameter is applied to messages even when the attachments aren't successfully scanned.

- $false: The action specified by the Action parameter isn't applied to messages when the attachments aren't successfully scanned. This is the default value.

```yaml
Type: $true | $false
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
The Enable parameter specifies whether policy is enabled. Valid values are:

- $true: The rule or policy is enabled.

- $false: The rule or policy is disabled. This is the default value.

```yaml
Type: $true | $false
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
Type: $true | $false
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/advanced-threat-protection/new-safeattachmentpolicy)
