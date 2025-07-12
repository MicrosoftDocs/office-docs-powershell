---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-ediscoverycaseadmin
applicable: Security & Compliance
title: Get-eDiscoveryCaseAdmin
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-eDiscoveryCaseAdmin

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-eDiscoveryCaseAdmin cmdlet to view eDiscovery Administrators in the Microsoft Purview compliance portal. An eDiscovery Administrator is member of the eDiscovery Manager role group who can also view and access all eDiscovery cases in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-eDiscoveryCaseAdmin [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
To add or remove individual eDiscovery Administrators, use the Add-eDiscoveryCaseAdmin and Remove-eDiscoveryCaseAdmin cmdlets. To replace all existing eDiscovery Administrators, use the Update-eDiscoveryCaseAdmin cmdlet.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-eDiscoveryCaseAdmin
```

This example returns a summary list of all eDiscovery Administrators.

## PARAMETERS

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

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
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
