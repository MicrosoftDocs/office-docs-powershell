---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/remove-dlpsensitiveinformationtype
applicable: Office 365 Security & Compliance Center
title: Remove-DlpSensitiveInformationType
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Remove-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Remove-DlpSensitiveInformationType cmdlet to remove sensitive information type rules that use document fingerprints. You can't use this cmdlet to remove built-in sensitive information type rules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-DlpSensitiveInformationType [-Identity] <DataClassificationIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

**Note**: A "ManagementObjectNotFoundException" error means there was a synchronization problem between the Security & Compliance Center and Exchange Online. This happens when you try to remove data classifications that are being used in mail flow rules (also known as transport rules). You can remove the mail flow rule, wait for synchronization to finish, and then add the rule back.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Remove-DlpSensitiveInformationType "Contoso Confidential"
```

This example removes the sensitive information type rule named "Contoso Confidential".

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type rule that you want to remove. You can use any value that uniquely identifies the sensitive information type rule. For example:

- Name

- LocalizedName

- Identity GUID value

```yaml
Type: DataClassificationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center

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
