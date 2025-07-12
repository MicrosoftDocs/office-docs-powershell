---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-rmstemplate
applicable: Exchange Online, Exchange Online Protection
title: Set-RMSTemplate
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-RMSTemplate

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

> [!NOTE]
> This cmdlet has been deprecated. If you use AD RMS with Exchange Online, you need to migrate to Azure Information Protection before you can use message encryption. For more information, see [Verify that Azure Rights Management is active](https://learn.microsoft.com/purview/set-up-new-message-encryption-capabilities#verify-that-azure-rights-management-is-active).

Use the Set-RMSTemplate cmdlet to modify the properties of an existing Active Directory Rights Management Services (AD RMS) template in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RMSTemplate [-Identity] <RmsTemplateIdParameter> -Type <RmsTemplateType>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
RMS templates exist in one or more trusted publishing domains (TPDs) that have been imported from an on-premises server running Active Directory Rights Management Services (AD RMS).

## EXAMPLES

### Example 1
```powershell
Set-RMSTemplate "Contoso Confidential" -Type Archived
```

This example changes the RMS template Contoso Confidential from Distributed to Archived. This prevents future use of Contoso Confidential for encryption, but allows access to existing content that's rights-protected by Contoso Confidential.

## PARAMETERS

### -Identity
The Identity parameter specifies the RMS template. You can use any value that uniquely identifies the RMS template, for example:

- Name
- GUID

You can use the Get-RMSTemplate cmdlet to view the RMS templates in your organization.

```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of RMS template. You can specify one of the following values:

- Archived
- Distributed
- All

The default type for imported RMS templates is Archived.

```yaml
Type: RmsTemplateType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
