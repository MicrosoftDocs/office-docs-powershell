---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
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
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Get-ComplianceCase cmdlet to view eDiscovery cases and DSR (data subject request) cases in the Security & Compliance Center. You use eDiscovery cases to control who can create, access, and manage compliance searches in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ComplianceCase [-Identity] <ComplianceCaseIdParameter>] [-CaseType <eDiscovery | DSR>] [-DomainController <Fqdn>] [-RoleGroup <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ComplianceCase
```

This example returns a summary list of all eDiscovery cases in the organization.

### -------------------------- Example 2 --------------------------
```
Get-ComplianceCase -Identity "Contoso Legal" | Format-List
```

This example returns detailed information for the eDiscovery case named Contoso Legal.

## PARAMETERS

### -CaseType
The CaseType parameter specifies the type of eDiscovery case that you want to view. Valid values are:

- eDiscovery: eDiscovery cases are used to manage legal or other types of investigations. In the Security & Compliance Center, eDiscovery cases are displayed under Search & investigation \> eDiscovery. This is the default value.

- DSR: Data Subject Request (DSR) cases are used to manage General Data Protection Regulation (GDPR) DSR investigations. In the Security & Compliance Center, DSR cases are displayed under Data privacy \> DSR cases.

```yaml
Type: eDiscovery | DSR
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
The Identity parameter specifies the eDiscovery case that you want to view. You can use any value that uniquely identifies the eDiscovery case. For example:

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

### -RoleGroup
PARAMVALUE: String

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/899cba6c-7709-4861-8f5f-e1c9d614d5c5.aspx)
