---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-blockedsenderaddress
schema: 2.0.0
title: Get-BlockedSenderAddress
---

# Get-BlockedSenderAddress

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-BlockedSenderAddress cmdlet to view users in your Microsoft 365 organization that are affected by the protection system. These users sent multiple messages that were classified as spam, so they're blocked from sending messages.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-BlockedSenderAddress [-SenderAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-BlockedSenderAddress
```

This example returns information about all blocked senders.

### Example 2
```powershell
Get-BlockedSenderAddress -SenderAddress laura@contoso.com
```

This example returns information about the blocked sender laura@contoso.com.

## PARAMETERS

### -SenderAddress

> Applicable: Exchange Online, Exchange Online Protection

The SenderAddress parameter filters the results by the email address of the blocked user.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Exchange Management Shell cmdlet input and output types](https://learn.microsoft.com/exchange/client-developer/management/exchange-management-shell-cmdlet-input-and-output-types). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Exchange Management Shell cmdlet input and output types](https://learn.microsoft.com/exchange/client-developer/management/exchange-management-shell-cmdlet-input-and-output-types). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
