---
applicable: Exchange Server 2019, Exchange Server SE
author: lusassl-msft
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: lusassl
ms.reviewer: srvar
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-exchangefeature
schema: 2.0.0
title: Set-ExchangeFeature
---

# Set-ExchangeFeature

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ExchangeFeature cmdlet to approve or block features flighted via Feature Flighting on Exchange Server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExchangeFeature [-Identity] <ServerIdParameter>
 [-Approve]
 [-Block]
 [-Confirm]
 [-FeatureID <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-ExchangeFeature cmdlet lets you approve or block features flighted via Feature Flighting, a service introduced in the Exchange Server 2019 CU15 (2025H1) update.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ExchangeFeature -Identity ex01.contoso.com -FeatureID @("F1.1.1") -Approve
```

This example approves the feature F1.1.1 on the computer named ex01.contoso.com.

### Example 2
```powershell
Set-ExchangeFeature -Identity ex01.contoso.com -FeatureID @("F1.1.1", "F1.2.1", "F2.1.1") -Approve
```

This example approves the features F1.1.1, F1.2.1, and F2.1.1 on the computer named ex01.contoso.com.

### Example 3
```powershell
Set-ExchangeFeature -Identity ex01.contoso.com -FeatureID @("F1.1.1", "F1.2.1", "F2.1.1") -Block
```

This example blocks the features F1.1.1, F1.2.1, and F2.1.1 on the computer named ex01.contoso.com.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the Exchange server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Approve

> Applicable: Exchange Server 2019, Exchange Server SE

The Approve switch approves the feature specified by the FeatureID parameter. You don't need to specify a value with this switch.

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

### -Block

> Applicable: Exchange Server 2019, Exchange Server SE

The Block switch blocks the feature specified by the FeatureID parameter. You don't need to specify a value with this switch.

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

### -Confirm

> Applicable: Exchange Server 2019, Exchange Server SE

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

### -FeatureID

> Applicable: Exchange Server 2019, Exchange Server SE

The FeatureID parameter specifies the feature you want to control.

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

### -WhatIf

> Applicable: Exchange Server 2019, Exchange Server SE

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
