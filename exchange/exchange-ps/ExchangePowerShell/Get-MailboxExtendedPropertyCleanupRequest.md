---
applicable: Exchange Online
author: chrisda
external help file:
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxextendedpropertycleanuprequest
schema: 2.0.0
title: Get-MailboxExtendedPropertyCleanupRequest
---

# Get-MailboxExtendedPropertyCleanupRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailboxExtendedPropertyCleanupRequest cmdlet to view extended mailbox property clean-up requests in cloud-based mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailboxExtendedPropertyCleanupRequest [-Identity] <StoreIntegrityCheckIdParameter> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity

The Identity parameter specifies the mailbox extended property clean-up request that you want to view.

Identity returned by the New-MailboxExtendedPropertyCleanupRequest with the format SOMETHING\SOMETHING\SOMETHING

```yaml
Type: StoreIntegrityCheckIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
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
