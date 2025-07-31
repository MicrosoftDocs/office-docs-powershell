---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-m365dataatrestencryptionpolicyassignment
schema: 2.0.0
title: Get-M365DataAtRestEncryptionPolicyAssignment
---

# Get-M365DataAtRestEncryptionPolicyAssignment

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-M365DataAtRestEncryptionPolicyAssignment cmdlet to view the currently assigned Microsoft 365 data-at-rest encryption policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-M365DataAtRestEncryptionPolicyAssignment [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lists the Microsoft 365 data-at-rest encryption policy that's currently assigned to the tenant.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-M365DataAtRestEncryptionPolicyAssignment
```

This example returns a summary list of all Microsoft 365 data-at-rest encryption policy assignments.

### Example 2
```powershell
Get-M365DataAtRestEncryptionPolicyAssignment | Format-List
```

This example returns detailed information for all Microsoft 365 data-at-rest encryption policy assignments.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
