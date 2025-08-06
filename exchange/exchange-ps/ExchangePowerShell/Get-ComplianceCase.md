---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-compliancecase
schema: 2.0.0
title: Get-ComplianceCase
---

# Get-ComplianceCase

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceCase cmdlet to different types of compliance cases in the Microsoft Purview compliance portal. See the CaseType parameter for a list of these case types.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceCase [-Identity] <ComplianceCaseIdParameter>]
 [-CaseType <ComplianceCaseType>]
 [-DomainController <Fqdn>]
 [-RecentOnly]
 [-RoleGroup <String>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceCase
```

This example returns a summary list of all eDiscovery Standard cases in the organization.

### Example 2
```powershell
Get-ComplianceCase -Identity "Contoso Legal" | Format-List
```

This example returns detailed information for the eDiscovery Standard case named Contoso Legal.

### Example 3
```powershell
Get-ComplianceCase -CaseType AdvancedEdiscovery
```

This example returns a summary list of all eDiscovery Premium cases in the organization.

### Example 4
```powershell
Get-ComplianceCase -CaseType DSR -RoleGroup "DSR Administrators"
```

This example returns a summary list of all DSR cases that the custom role group "DSR Administrators" is a member of.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the compliance case that you want to view. You can use any value that uniquely identifies the case. For example:

- Name
- Identity (GUID value)

```yaml
Type: ComplianceCaseIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CaseType

> Applicable: Security & Compliance

The CaseType parameter specifies the type of compliance case that you want to view. Valid values are:

- AdvancedEdiscovery: eDiscovery Premium cases are used to manage legal or other types of investigations. In the Microsoft Purview compliance portal, eDiscovery Premium cases are displayed under **eDiscovery** \> **Premium**.
- ComplianceClassifier: This type of case corresponds to a trainable classifier. In the Microsoft Purview compliance portal, trainable classifiers are displayed under **Data classification** \> **Trainable classifiers**.
- ComplianceWorkspace: This value is reserved for internal Microsoft use.
- DataInvestigation: Data investigation cases are used to investigate data spillage incidents. In the Microsoft Purview compliance portal, Data investigation cases are displayed on the **Data investigations** page.
- DSR: Data Subject Request (DSR) cases are used to manage General Data Protection Regulation (GDPR) DSR investigations. In the Microsoft Purview compliance portal, DSR cases are displayed under **Data privacy** \> **Data subject requests**.
- eDiscovery: eDiscovery (also called eDiscovery Standard) cases are used to manage legal or other types of investigations. In the Microsoft Purview compliance portal, eDiscovery Standard cases are displayed under **eDiscovery** \> **Standard**. This value is the default.
- InsiderRisk: Insider risk cases are used to manage insider risk management cases. In the Microsoft Purview compliance portal, insider risk cases are displayed under **Insider risk management** \> **Cases**. Typically, insider risk management cases are manually created in the Microsoft Purview compliance portal to further investigate activity based on a risk alert.
- InternalInvestigation: This value is reserved for internal Microsoft use.
- SupervisionPolicy: This type of case corresponds to communication compliance policy. In the Microsoft Purview compliance portal, communication compliance policies are displayed under **Communication compliance** \> **Policies**.

```yaml
Type: ComplianceCaseType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: eDiscovery
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

### -RecentOnly

> Applicable: Security & Compliance

The RecentOnly switch returns a list of the most recently modified cases of the specified case type. You don't need to specify a value with this switch.

This switch is used to display data in the "Recent cases" widget in the Microsoft Purview compliance portal for some features that use compliance case objects.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleGroup

> Applicable: Security & Compliance

The RoleGroup parameter returns a list of compliance cases that the specified role group is a member of. If you don't include the CaseType parameter, the cmdlet returns a list of eDiscovery Standard cases that the role group is a member of.

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
