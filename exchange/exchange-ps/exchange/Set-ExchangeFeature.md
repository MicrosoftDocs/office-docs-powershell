---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-exchangefeature
applicable: Exchange Server 2019
title: Set-ExchangeFeature
schema: 2.0.0
author: lusassl-msft
ms.author: lusassl
ms.reviewer: srvar
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
 [-FeatureID <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-ExchangeFeature cmdlet lets you approve or block features flighted via Feature Flighting, a service introduced in the Exchange Server 2019 CU15 (2025H1) update.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the Exchange server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Approve
The Approve parameter approves the feature specified by the FeatureID parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Block
he Block parameter blocks the feature specified by the FeatureID parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FeatureID
The FeatureID parameter specifies the feature you want to control.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

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
