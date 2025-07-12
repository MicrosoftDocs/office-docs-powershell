---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-quarantinepolicy
applicable: Exchange Online, Exchange Online Protection
title: Remove-QuarantinePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Remove-QuarantinePolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-QuarantinePolicy cmdlet to remove quarantine policies from your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-QuarantinePolicy [-Identity] <QuarantineTagIdParameter>
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
You can't remove the built-in quarantine policies named AdminOnlyAccessPolicy or DefaultFullAccessPolicy.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-QuarantinePolicy -Identity "Contoso Engineering"
```

This example removes the quarantine policy named Contoso Engineering.

## PARAMETERS

### -Identity
The Identity parameter specifies the quarantine policy you want to remove. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: QuarantineTagIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
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

## OUTPUTS

## NOTES

## RELATED LINKS
