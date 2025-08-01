---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/rotate-dkimsigningconfig
applicable: Exchange Online, Exchange Online Protection
title: Rotate-DkimSigningConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Rotate-DkimSigningConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Rotate-DkimSigningConfig cmdlet to rotate the public and private DomainKeys Identified Mail (DKIM) signing policy keys for domains in a cloud-based organization. This cmdlet creates new DKIM keys and uses the alternate DKIM selector.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Rotate-DkimSigningConfig [-Identity] <DkimSigningConfigIdParameter>
 [-Confirm]
 [-KeySize <UInt16>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Rotate-DkimSigningConfig -Identity contoso.com
```

This example rotates the DKIM signing policy for the contoso.com domain.

## PARAMETERS

### -Identity
The Identity parameter specifies the DKIM signing policy that you want to rotate. You can use any value that uniquely identifies the policy. For example:

- Name: The domain name (for example, contoso.com).
- Distinguished name (DN)
- GUID

```yaml
Type: DkimSigningConfigIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeySize
The KeySize parameter specifies the size in bits of the public key that's used in the DKIM signing policy. Valid values are:

- 1024
- 2048

RSA keys are supported. Ed25519 keys aren't supported.

**Note**: Upgrading the key size to 2048 only upgrades the selector that isn't currently active. After key rotation has taken place, you need to run the command again to upgrade the key size of the other selector.

```yaml
Type: UInt16
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

## OUTPUTS

## NOTES

## RELATED LINKS
