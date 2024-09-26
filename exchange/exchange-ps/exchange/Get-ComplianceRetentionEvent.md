---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-complianceretentionevent
applicable: Security & Compliance
title: Get-ComplianceRetentionEvent
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ComplianceRetentionEvent

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceRetentionEvent cmdlet to view compliance retention events in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceRetentionEvent [-Identity <PolicyIdParameter>]
 [-BeginDateTime <System.DateTime>]
 [-DomainController <Fqdn>]
 [-EndDateTime <System.DateTime>]
 [-PreviewOnly]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceRetentionEvent | Format-Table Name,Description
```

The example returns a summary list of all compliance retention events.

### Example 2
```powershell
Get-ComplianceRetentionEvent -Identity "Case 1234"
```

This example returns detailed information about the compliance retention event named Case 1234.

## PARAMETERS

### -Identity
The Identity parameter specifies the compliance retention event that you want to view. You can use any value that uniquely identifies the event. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BeginDateTime
{{ Fill BeginDateTime Description }}

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDateTime
{{ Fill EndDateTime Description }}

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewOnly
{{ Fill PreviewOnly Description }}

```yaml
Type: SwitchParameter
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
