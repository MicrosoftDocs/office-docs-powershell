---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-content-search/get-compliancesecurityfilter
applicable: Office 365 Security & Compliance Center
title: Get-ComplianceSecurityFilter
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-ComplianceSecurityFilter

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-ComplianceSecurityFilter cmdlet to view compliance security filters in the Security & Compliance Center. These filters allow specified users to search only a subset of mailboxes and SharePoint Online or OneDrive for Business sites in your Office 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceSecurityFilter [-Action <ComplianceSecurityFilterActionType>] [-Confirm]
 [-FilterName <String>] [-User <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Compliance security filters work with compliance searches in the Security & Compliance Center (\*-ComplianceSearch cmdlets), not In-Place eDiscovery searches in Exchange Online (\*-MailboxSearch cmdlets).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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

- All

- Export

- Preview

- Purge

- Search

```yaml
Type: ComplianceSecurityFilterActionType
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

### -FilterName
The FilterName parameter specifies the name of the compliance security filter that you want to view. If the value contains spaces, enclose the value in quotation marks (").

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

### -User
The User parameter filters the results by the user who gets a filter applied to their searches. Valid values are:

- The alias or email address of a user.

- The value All.

- The name of a role group.

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
