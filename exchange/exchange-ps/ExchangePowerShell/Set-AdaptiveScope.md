---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-adaptivescope
schema: 2.0.0
title: Set-AdaptiveScope
---

# Set-AdaptiveScope

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-AdaptiveScope cmdlet to modify adaptive scopes in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Set-AdaptiveScope [-Identity] <ComplianceRuleIdParameter> -FilterConditions <PswsHashtable>
 [-AdministrativeUnit <Guid>]
 [-Comment <String>]
 [<CommonParameters>]
```

### AdaptiveScopeRawQuery
```
Set-AdaptiveScope [-Identity] <ComplianceRuleIdParameter> -RawQuery <String>
 [-AdministrativeUnit <Guid>]
 [-Comment <String>]
 [<CommonParameters>]
```

### AdministrativeUnit
```
Set-AdaptiveScope [-Identity] <ComplianceRuleIdParameter> -AdministrativeUnit <Guid>
 [-Comment <String>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AdaptiveScope -Identity "Project X" -FilterConditions @{"Conditions" = @{"Value" = "Redmond"; "Operator" = "Equals"; "Name" = "City"}; "Conjunction" = "And"}
```

This example modifies the filter in exiting adaptive scope named Project X. The new filter looks for all users in the city of Redmond.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the adaptive scope that you want to modify. You can use any value that uniquely identifies the adaptive scope. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdministrativeUnit

> Applicable: Security & Compliance

{{ Fill AdministrativeUnit Description }}

```yaml
Type: Guid
Parameter Sets: Default, AdaptiveScopeRawQuery, AdministrativeUnit
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterConditions

> Applicable: Security & Compliance

The FilterConditions parameter specifies the conditions that are included in the dynamic boundary. Valid syntax and values depend of the value of the LocationType parameter:

- User or Group: Active Directory attributes. For example, for the condition "('Country or region' equals 'US' or 'Canada') and 'Department' equals 'Finance'", use the following syntax: `@{"Conditions" = @(@{"Conditions" = @(@{"Value" = "US"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}, @{"Value" = "Canada"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}); "Conjunction" = "Or"}, @{"Value" = "Finance"; "Operator" = "Equals"; "Name" = "Department"}); "Conjunction" = "And"}`
- Site: Indexed custom properties. For example, for the condition "'Refinable string 0' equals 'Human Resources', use the following syntax: `@{"Conditions" = @{"Value" = "Human Resources"; "Operator" = "Equals"; "Name" = "RefinableString00"}; "Conjunction" = "And"}`

You can't use this parameter with the RawQuery parameter.

```yaml
Type: PswsHashtable
Parameter Sets: Default
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RawQuery

> Applicable: Security & Compliance

The RawQuery parameter switches the scope to advanced query mode. You use OPATH filter syntax for advanced query mode.

You can't use this parameter with the FilterConditions parameter.

```yaml
Type: String
Parameter Sets: AdaptiveScopeRawQuery
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
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
