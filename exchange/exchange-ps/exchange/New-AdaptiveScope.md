---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-adaptivescope
applicable: Security & Compliance
title: New-AdaptiveScope
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-AdaptiveScope

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-AdaptiveScope cmdlet to create adaptive scopes in your organization. Adaptive scopes (or static scopes) are used in retention policies and retention label policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
New-AdaptiveScope -Name <String> -FilterConditions <PswsHashtable> -LocationType <DynamicBoundaryLocationType>
 [-AdministrativeUnit <Guid>]
 [-Comment <String>]
 [<CommonParameters>]
```

### AdaptiveScopeRawQuery
```
New-AdaptiveScope -Name <String> -LocationType <DynamicBoundaryLocationType> -RawQuery <String>
 [-AdministrativeUnit <Guid>]
 [-Comment <String>]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about the properties to use in adaptive scopes, see [Configuration information for adaptive scopes](https://learn.microsoft.com/purview/retention-settings#configuration-information-for-adaptive-scopes).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-AdaptiveScope -Name "Project X" -LocationType User -FilterConditions @{"Conditions" = @(@{"Conditions" = @(@{"Value" = "US"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}, @{"Value" = "Canada"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}); "Conjunction" = "Or"}, @{"Value" = "Finance"; "Operator" = "Equals"; "Name" = "Department"}); "Conjunction" = "And"}
```

This example create an adaptive query scope named Project X with the following details:

- Scope: Users
- Query: "('Country or region' equals 'US' or 'Canada') and 'Department' equals 'Finance'".

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the adaptive scope. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterConditions
The FilterConditions parameter specifies the conditions that are included in the dynamic boundary. Valid syntax and values depend of the value of the LocationType parameter:

- User or Group: Active Directory attributes. For example, for the condition "('Country or region' equals 'US' or 'Canada') and 'Department' equals 'Finance'", use the following syntax: `@{"Conditions" = @(@{"Conditions" = @(@{"Value" = "US"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}, @{"Value" = "Canada"; "Operator" = "Equals"; "Name" = "CountryOrRegion"}); "Conjunction" = "Or"}, @{"Value" = "Finance"; "Operator" = "Equals"; "Name" = "Department"}); "Conjunction" = "And"}`
- Site: Indexed custom properties. For example, for the condition "'Refinable string 0' equals 'Human Resources', use the following syntax: `@{"Conditions" = @{"Value" = "Human Resources"; "Operator" = "Equals"; "Name" = "RefinableString00"}; "Conjunction" = "And"}`

You can't use this parameter with the RawQuery parameter.

```yaml
Type: PswsHashtable
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationType
The LocationType parameter specifies the location where the adaptive scope filter is defined. Valid values are:

- User
- Group (Microsoft 365 group)
- Site

```yaml
Type: DynamicBoundaryLocationType
Parameter Sets: (All)
Aliases:
Accepted values: Unknown, User, Group, Site
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RawQuery
The RawQuery parameter switches the scope to advanced query mode. You use OPATH filter syntax for advanced query mode.

You can't use this parameter with the FilterConditions parameter.

```yaml
Type: String
Parameter Sets: AdaptiveScopeRawQuery
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdministrativeUnit
{{ Fill AdministrativeUnit Description }}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
