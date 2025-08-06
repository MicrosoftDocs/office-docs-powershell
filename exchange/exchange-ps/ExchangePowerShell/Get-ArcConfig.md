---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-arcconfig
schema: 2.0.0
title: Get-ArcConfig
---

# Get-ArcConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ArcConfig cmdlet to view the list of trusted Authenticated Received Chain (ARC) sealers that are configured in the cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ArcConfig [<CommonParameters>]
```

## DESCRIPTION
Services that modify message content in transit before delivery can invalidate DKIM email signatures and affect the authentication of the message. These services can use ARC to provide details of the original authentication before the modifications occurred. Your organization can then trust these details to help authenticate the message.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ArcConfig
```

This example returns the trusted ARC sealers that are configured for the organization

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
