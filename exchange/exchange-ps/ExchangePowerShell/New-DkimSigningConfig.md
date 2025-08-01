---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dkimsigningconfig
schema: 2.0.0
title: New-DkimSigningConfig
---

# New-DkimSigningConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-DkimSigningConfig cmdlet to create the DomainKeys Identified Mail (DKIM) signing policy settings for domains in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DkimSigningConfig [-DomainName] <SmtpDomainWithSubdomains> [-Enabled] <Boolean>
 [-AdminDisplayName <String>]
 [-BodyCanonicalization <CanonicalizationType>]
 [-Confirm]
 [-HeaderCanonicalization <CanonicalizationType>]
 [-KeySize <UInt16>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
DKIM in Microsoft 365 is an email authentication method that uses a public key infrastructure (PKI), message headers, and CNAME records in DNS to authenticate the message sender, which is stamped in the DKIM-Signature header field. DKIM helps prevent forged sender email addresses (also known as spoofing) by verifying that the domain in the From address matches the domain in the DKIM-Signature header field.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-DkimSigningConfig -DomainName contoso.com -Enabled $true
```

This example enables DKIM message signing for the contoso.com domain.

## PARAMETERS

### -DomainName

> Applicable: Exchange Online, Exchange Online Protection

The DomainName parameter specifies the domain in your organization that you want to enable DKIM message signing for.

By default, DKIM message signing is enabled for the initial \*.onmicrosoft.com domain in the organization (for example, contoso.onmicrosoft.com).

For custom domains that don't have DKIM messaging signing enabled, the DKIM signatures for the \*.onmicrosoft.com domain are added to messages.

```yaml
Type: SmtpDomainWithSubdomains
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Online, Exchange Online Protection

The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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

### -BodyCanonicalization

> Applicable: Exchange Online, Exchange Online Protection

The BodyCanonicalization parameter specifies the canonicalization algorithm that's used to create and verify the message body part of the DKIM signature. This value effectively controls the sensitivity of DKIM to changes to the message body in transit. Valid values are:

- Relaxed: Changes in whitespace and changes in empty lines at the end of the message body are tolerated. This is the default value.
- Simple: Only changes in empty lines at the end of the message body are tolerated.

```yaml
Type: CanonicalizationType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -HeaderCanonicalization

> Applicable: Exchange Online, Exchange Online Protection

The HeaderCanonicalization parameter specifies the canonicalization algorithm that's used to create and verify the message header part of the DKIM signature. This value effectively controls the sensitivity of DKIM to changes to the message headers in transit. Valid values are:

- Relaxed: Common modifications to the message header are tolerated (for example, Header field line rewrapping, changes in unnecessary whitespace or empty lines, and changes in case for header fields). This is the default value.
- Simple: No changes to the header fields are tolerated.

```yaml
Type: CanonicalizationType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeySize

> Applicable: Exchange Online, Exchange Online Protection

The KeySize parameter specifies the size in bits of the public key that's used in the DKIM signing policy. Valid values are:

- 1024 (this is the default value)
- 2048

RSA keys are supported. Ed25519 keys aren't supported.

```yaml
Type: UInt16
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

## OUTPUTS

## NOTES

## RELATED LINKS
