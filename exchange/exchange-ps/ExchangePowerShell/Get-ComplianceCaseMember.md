---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-compliancecasemember
schema: 2.0.0
title: Get-ComplianceCaseMember
---

# Get-ComplianceCaseMember

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceCaseMember cmdlet to view the members of eDiscovery cases in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ComplianceCaseMember -Case <String>
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [-ShowCaseAdmin]
 [<CommonParameters>]
```

### AllCases
```
Get-ComplianceCaseMember
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceCaseMember -Case "Fabrikam Litigation"
```

This examples shows the members of the eDiscovery case named Fabrikam Litigation.

## PARAMETERS

### -Case

> Applicable: Security & Compliance

The Case parameter specifies the name of the eDiscovery case that you want to view. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Security & Compliance

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowCaseAdmin

> Applicable: Security & Compliance

The ShowCaseAdmin switch specifies whether to return the eDiscovery case admin in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
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
