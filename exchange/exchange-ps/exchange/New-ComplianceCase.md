---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-compliancecase
applicable: Office 365 Security & Compliance Center
title: New-ComplianceCase
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-ComplianceCase

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc-powershell).

Use the New-ComplianceCase cmdlet to create eDiscovery cases in the Security & Compliance Center. You use eDiscovery cases to place content locations on hold, perform Content Searches associated with the case, and export search results.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ComplianceCase [-Name] <String>
 [-CaseType <ComplianceCaseType>]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-ExternalId <String>]
 [-SecondaryCaseType <String>]
 [-SourceCaseType <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-ComplianceCase -Name "Fabrikam Litigation"
```

This example creates a new core eDiscovery case named Fabrikam Litigation.

### Example 2
```powershell
New-ComplianceCase -Name "Coho Case 03082020" -CaseType AdvancedEdiscovery -ExternalId "SaraDavis v. Coho Winery"
```

This example creates a new Advanced eDiscovery case named Coho Case 03082020 and specifies an optional case Id of "SaraDavis v. Coho Winery".

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the compliance case. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaseType
The CaseType parameter specifies the type of compliance case that you want to create. Valid values are:

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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the compliance case. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -ExternalId
The ExternalId parameter specifies an optional ID or external case number that you can associate with the new compliance case.

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

### -SecondaryCaseType
This parameter is reserved for internal Microsoft use.

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

### -SourceCaseType
This parameter is reserved for internal Microsoft use.

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

### -WhatIf
The WhatIf switch doesn't work in Office 365 Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
