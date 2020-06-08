---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-compliancecase
applicable: Office 365 Security & Compliance Center
title: Get-ComplianceCase
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-ComplianceCase

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc-powershell).

Use the Get-ComplianceCase cmdlet to different types of compliance cases in the Security & Compliance Center and Microsoft 365 compliance center. See the CaseType parameter for a list of these case types.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceCase
```

This example returns a summary list of all core eDiscovery cases in the organization.

### Example 2
```powershell
Get-ComplianceCase -Identity "Contoso Legal" | Format-List
```

This example returns detailed information for the core eDiscovery case named Contoso Legal.


### Example 3
```powershell
Get-ComplianceCase -CaseType AdvancedEdiscovery
```

This example returns a summary list of all Advanced eDiscovery cases in the organization.

### Example 4
```powershell
Get-ComplianceCase -CaseType DSR -RoleGroup "DSR Administrators"
```

This example returns a summary list of all DSR cases that the custom role group "DSR Administrators" is a member of.

## PARAMETERS

### -CaseType
The CaseType parameter specifies the type of compliance case that you want to view. Valid values are:

- AdvancedEdiscovery: Advanced eDiscovery cases are used to manage legal or other types of investigations. In the Security & Compliance Center, Advanced eDiscovery cases are displayed under eDiscovery > Advanced eDiscovery.

- ComplianceClassifier: This type of case corresponds to a trainable classifier. In the Microsoft 365 compliance center, trainable classifiers are displayed under Data classification > Trainable classifiers.

- ComplianceWorkspace: This value is reserved for internal Microsoft use. 

- DataInvestigation: Data investigation cases are used to investigate data spillage incidents. In the Security & Compliance Center, Data investigation cases are displayed on the Data investigations page.

- DSR: Data Subject Request (DSR) cases are used to manage General Data Protection Regulation (GDPR) DSR investigations. In the Security & Compliance Center, DSR cases are displayed under Data privacy > Data subject requests.

- eDiscovery: eDiscovery (also called core eDiscovery) cases are used to manage legal or other types of investigations. In the Security & Compliance Center, core eDiscovery cases are displayed under eDiscovery > eDiscovery. This is the default value.

- InsiderRisk: Insider risk cases are use to manage insider risk management cases. In the Microsoft 365 compliance center, insider risk cases are displayed under Insider risk management > Cases. Typically, insider risk management cases are manually created in the compliance center to further investigate activity based on an risk alert.

- InternalInvestigation: This value is reserved for internal Microsoft use.

- SupervisionPolicy: This type of case corresponds to communication compliance policy. In the Microsoft 365 compliance center, communication compliance policies are displayed under Communication compliance > Policies.

```yaml
Type: ComplianceCaseType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: eDiscovery
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the compliance case that you want to view. You can use any value that uniquely identifies the case. For example:

- Name

- Identity (GUID value)

```yaml
Type: ComplianceCaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RecentOnly
The RecentOnly switch returns a list of the most recently modified cases of the specified case type. This switch is used to display data in the "Recently cases" widget that's displayed in the compliance centers for some of the features that use compliance case objects.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleGroup
The RoleGroup parameter returns a list of compliance cases that the specified role group is a member of. If you don't include the CaseType parameter, the cmdlet returns a list of core eDiscovery cases that the role group is a member of.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
