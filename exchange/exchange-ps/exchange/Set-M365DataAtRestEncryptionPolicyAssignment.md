---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-m365dataatrestencryptionpolicyassignment
applicable: Exchange Online
title: Set-M365DataAtRestEncryptionPolicyAssignment
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-M365DataAtRestEncryptionPolicyAssignment

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-M365DataAtRestEncryptionPolicyAssignment cmdlet to assign a Microsoft 365 data-at-rest encryption policy at the tenant level.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy <DataEncryptionPolicyIdParameter> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-M365DataAtRestEncryptionPolicyAssignment -DataEncryptionPolicy "Contoso Corporate"
```

This example assigns the Microsoft 365 data-at-rest encryption policy named Contoso Corporate.

## PARAMETERS

### -DataEncryptionPolicy
The DataEncryptionPolicy parameter specifies the Microsoft 365 data-at-rest encryption policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
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
