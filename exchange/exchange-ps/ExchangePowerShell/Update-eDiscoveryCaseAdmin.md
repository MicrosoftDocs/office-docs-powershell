---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/update-ediscoverycaseadmin
schema: 2.0.0
title: Update-eDiscoveryCaseAdmin
---

# Update-eDiscoveryCaseAdmin

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Update-eDiscoveryCaseAdmin cmdlet to replace all existing eDiscovery Administrators in the Microsoft Purview compliance portal. To add or remove individual eDiscovery Administrators, use the Add-eDiscoveryCaseAdmin and Remove-eDiscoveryCaseAdmin cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-eDiscoveryCaseAdmin -Users <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
An eDiscovery Administrator is a member of the eDiscovery Manager role group who can view and access all eDiscovery cases in the organization. To make a user an eDiscovery Administrator, add them to the eDiscovery Manager role group by running the following command in Security & Compliance PowerShell: `Add-RoleGroupMember -Identity "eDiscovery Manager" -Member "<UserIdentity>"`.

After the user is a member of the eDiscovery Manager role group, you can then use this cmdlet to add them to the list of eDiscovery Administrators.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Update-eDiscoveryCaseAdmin -Users laura@contoso.com,julia@contoso.com
```

This example replaces the existing eDiscovery Administrators with new users.

## PARAMETERS

### -Users

> Applicable: Security & Compliance

The Users parameter specifies the users that will replace the current eDiscovery Administrators. You can use any value that uniquely identifies the user. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
