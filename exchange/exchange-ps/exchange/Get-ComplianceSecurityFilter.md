---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-compliancesecurityfilter
applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance
title: Get-ComplianceSecurityFilter
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ComplianceSecurityFilter

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceSecurityFilter cmdlet to view compliance security filters in the Microsoft Purview compliance portal. These filters allow specified users to search only a subset of mailboxes and SharePoint Online or OneDrive for Business sites in your Microsoft 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceSecurityFilter [-Action <ComplianceSecurityFilterActionType>]
 [-Confirm]
 [-FilterName <String>]
 [-User <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Compliance security filters work with compliance searches in the Microsoft Purview compliance portal (\*-ComplianceSearch cmdlets), not In-Place eDiscovery searches in Exchange Online (\*-MailboxSearch cmdlets).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceSecurityFilter | Format-Table -Auto FilterName,Action
```

This example returns a summary list of all compliance security filters.

### Example 2
```powershell
Get-ComplianceSecurityFilter -FilterName "HR Filter"
```

This example returns detailed information about the compliance security filter named HR Filter.

## PARAMETERS

### -Action
The Action parameter filters the results by the type of search action that a filter is applied to. Valid values are:

- Export: The filter is applied when exporting search results, or preparing them for analysis in eDiscovery Premium.
- Preview: The filter is applied when previewing search results.
- Purge: The filter is applied when purging search results. How the items are deleted is controlled by the PurgeType parameter value on the New-ComplianceSearchAction cmdlet. The default value is SoftDelete, which means the purged items are recoverable by users until the deleted items retention period expires.
- Search: The filter is applied when running a search.
- All: The filter is applied to all search actions.

```yaml
Type: ComplianceSecurityFilterActionType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterName
The FilterName parameter specifies the name of the compliance security filter that you want to view. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter filters the results by the user who gets a filter applied to their searches. Valid values are:

- The alias or email address of a user.
- The value All.
- The name of a role group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

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
