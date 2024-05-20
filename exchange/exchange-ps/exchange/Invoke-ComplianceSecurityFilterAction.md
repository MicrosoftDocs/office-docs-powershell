---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/invoke-compliancesecurityfilteraction
applicable: Security & Compliance
title: Invoke-ComplianceSecurityFilterAction
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Invoke-ComplianceSecurityFilterAction

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Invoke-ComplianceSecurityFilterAction cmdlet to view and set compliance boundaries for Microsoft OneDrive sites in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Invoke-ComplianceSecurityFilterAction [-Action] <String> [-PropertyName] <String> [[-PropertyValue] <String>] [-SiteUrl] <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is useful in scenarios where the OneDrive site has fallen out of the compliance boundary due to a departed user and a corresponding inactive mailbox.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-ComplianceSecurityFilterAction -Action GetStatus -PropertyName Department -SiteUrl https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx
```

This example returns the status of a OneDrive site that's bound by the Department property on the user's mailbox.

### Example 2
```powershell
Invoke-ComplianceSecurityFilterAction -Action Set -PropertyName Department -PropertyValue "Research and Development" -SiteUrl https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx
```

This example sets the boundary of the specified OneDrive site for a user who left the company.

## PARAMETERS

### -Action
The Action parameter specifies the action for the command. Valid values are:

- GetStatus
- Set

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
The PropertyName parameter specifies the name of the property of the compliance boundary for the OneDrive site that you want to view or modify. Valid values are:

- Alias
- Company
- CountryOrRegion
- CustomAttribute1 to CustomAttribute15
- Department
- PostalCode

Use the PropertyValue parameter to set the compliance boundary.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
The PropertyValue parameter specifies the value of the PropertyName value when you use the Action parameter value Set to set the compliance boundary of a OneDrive site. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl
The SiteUrl parameter specifies the OneDrive site that you want to view or modify. This parameter uses the syntax `https://<domain>-my.sharepoint.com/personal/<user>_<domain>_onmicrosoft_com/_layouts/15/onedrive.aspx`. For example: `https://contoso-my.sharepoint.com/personal/lila_contoso_onmicrosoft_com/_layouts/15/onedrive.aspx`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 4
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
Applicable: Security & Compliance

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
