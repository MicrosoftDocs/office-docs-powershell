---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-ownerlessgrouppolicy
applicable: Exchange Online
title: Get-OwnerlessGroupPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Get-OwnerlessGroupPolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

**Note**: This cmdlet is available only in version 2.0.5-Preview1 or later of the EXO V2 module.

Use the Get-OwnerlessGroupPolicy cmdlet to view the ownerless group policy in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-OwnerlessGroupPolicy
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to verify if the ownerless group policy for Microsoft 365 Groups is enabled or disabled in your organization. You can also view additional parameters as part of the policy, including: sender email address, number of weeks you want to notify active members of ownerless groups, number of members within a ownerless group you want to notify, and specific groups within the tenant on which ownerless group policy is enabled. 

## EXAMPLES

### Example 1
```powershell
Get-OwnerlessGroupPolicy
```

This example returns the settings of the one and only ownerless group policy for Microsoft 365 Groups.

## PARAMETERS

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
