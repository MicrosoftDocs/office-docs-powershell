---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-adaptivescope
applicable: Security & Compliance Center
title: New-AdaptiveScope
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-AdaptiveScope

## SYNOPSIS

## SYNTAX
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the New-AdaptiveScope cmdlet to create adaptive scopes in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

### Default
```
New-AdaptiveScope -Name <String> -FilterConditions <PswsHashtable> -LocationType <DynamicBoundaryLocationType>
 [-Comment <String>]
 [<CommonParameters>]
```

### AdaptiveScopeRawQuery
```
New-AdaptiveScope -Name <String> -LocationType <DynamicBoundaryLocationType> -RawQuery <String>
 [-Comment <String>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance Center PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft 365 compliance center](https://docs.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the adaptive scope. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterConditions
The FilterConditions parameter specifies the conditions that are included in the dynamic boundary. Valid syntax and values depend of the value of the LocationType parameter:

- User or Group: Active Directory attributes. For example, `@(@{Name="Country”; Operator="Equals"; Values="USA","Canada"},@{Name="Department"; Operator="NotEquals"; Values="Finance"})`
- Site: Indexed custom properties. For example, `@(@{Name=" RefinableString00"; Operator="Equals"; Values="Human Resource"})`

```yaml
Type: PswsHashtable
Parameter Sets: Default
Aliases:
Applicable: Security & Compliance Center

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
Applicable: Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RawQuery
{{ Fill RawQuery Description }}

```yaml
Type: String
Parameter Sets: AdaptiveScopeRawQuery
Aliases:
Applicable: Security & Compliance Center

Required: True
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
Applicable: Security & Compliance Center

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
