---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-exoinformationbarrierrelationship
applicable: Exchange Online
title: Get-ExoInformationBarrierRelationship
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ExoInformationBarrierRelationship

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ExoInformationBarrierRelationship cmdlet to view information barrier relationships in your Exchange Online organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExoInformationBarrierRelationship -RecipientId1 <RecipientIdParameter> -RecipientId2 <RecipientIdParameter>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoInformationBarrierRelationship -RecipientId1 "Akia Al-Zuhairi" -RecipientId2 "Gabriela Laureano"
```

This example shows the Exchange Online information barrier relationship between the two specified recipients.

## PARAMETERS

### -RecipientId1
The RecipientId1 parameter specifies the first recipient in the Exchange Online barrier relationship. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientId2
The RecipientId2 parameter specifies the second recipient in the Exchange Online barrier relationship. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
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
