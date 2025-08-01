---
applicable: Exchange Server 2019
author: lusassl-msft
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: lusassl
ms.reviewer: srvar
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exchangefeature
schema: 2.0.0
title: Get-ExchangeFeature
---

# Get-ExchangeFeature

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeFeature cmdlet to return information about features that are flighted on Exchange servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExchangeFeature [-Identity <ServerIdParameter>]
 [-FeatureID <MultiValuedProperty>]
 [-RingLevel <String>]
 [-Status <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExchangeFeature -Status "Enabled"
```

This example returns all enabled features.

### Example 2
```powershell
Get-ExchangeFeature -FeatureID "PING.1.0"
```

This example returns information about the feature with the feature id PING.1.0.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019

The Identity parameter specifies the Exchange server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command returns information for all Exchange servers.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -FeatureID

> Applicable: Exchange Server 2019

The FeatureID parameter specifies the feature you want to query information about.

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

### -RingLevel

> Applicable: Exchange Server 2019

The RingLevel parameter specifies the ring level you want to query information about.

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

### -Status

> Applicable: Exchange Server 2019

The Status parameter specifies the status you want to query information about.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
