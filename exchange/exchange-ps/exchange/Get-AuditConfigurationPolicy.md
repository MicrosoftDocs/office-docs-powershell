---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-auditconfigurationpolicy
applicable: Exchange Online, Security & Compliance Center
title: Get-AuditConfigurationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-AuditConfigurationPolicy

## SYNOPSIS
This cmdlet is available or functional only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-AuditConfigurationPolicy cmdlet to view audit configuration policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AuditConfigurationPolicy [[-Identity] <PolicyIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance Center PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft 365 compliance center](https://docs.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AuditConfigurationPolicy | Format-List Name,Enabled,Workload,Priority,*Location
```

This example lists summary information about all audit configuration policies.

### Example 2
```powershell
Get-AuditConfigurationPolicy -Identity 8d4d2060-ee8e-46a8-8d72-24922956fba5
```

This examples lists details about the audit configuration policy named 8d4d2060-ee8e-46a8-8d72-24922956fba5.

## PARAMETERS

### -Identity
The Identity parameter specifies the audit configuration policy that you want to view. The name of the policy is a GUID value. For example, 8d4d2060-ee8e-46a8-8d72-24922956fba5.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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
