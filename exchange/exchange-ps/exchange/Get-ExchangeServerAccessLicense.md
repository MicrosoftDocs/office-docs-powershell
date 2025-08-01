---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-exchangeserveraccesslicense
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-ExchangeServerAccessLicense
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ExchangeServerAccessLicense

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeServerAccessLicense cmdlet to return a list of licenses in use in your Exchange organization. This refers to the specific legal name of the license, as defined in the Microsoft Product List and is representative of your licenses when you run this cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExchangeServerAccessLicense [<CommonParameters>]
```

## DESCRIPTION
The Get-ExchangeServerAccessLicense cmdlet returns a collection of these license names:

- Exchange Server Standard CAL
- Exchange Server Enterprise CAL
- Exchange Server Standard Edition
- Exchange Server Enterprise Edition

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExchangeServerAccessLicense
```

This example retrieves a list of Exchange licenses in your organization.

## PARAMETERS

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
