---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/remove-ediscoverycaseadmin
applicable: Office 365 Security & Compliance Center
title: Remove-eDiscoveryCaseAdmin
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-eDiscoveryCaseAdmin

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Remove-eDiscoveryCaseAdmin cmdlet to remove an eDiscovery Administrator from the Security & Compliance Center. To replace all eDiscovery Administrators, use the Update-eDiscoveryCaseAdmin cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-eDiscoveryCaseAdmin -User <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
An eDiscovery Administrator is member of the eDiscovery Manager role group who can also view and access all eDiscovery cases in your organization.

When you remove an eDiscovery Administrator, the user isn't removed from the eDiscovery Manager role group.

You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Remove-eDiscoveryCaseAdmin -User chris@contoso.com
```

This example removes an eDiscovery Administrator.

## PARAMETERS

### -User
The User parameter specifies the user that you want to remove from the list of eDiscovery Administrators. You can use any value that uniquely identifies the user. For example:

- Name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
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

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance Center PowerShell.

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
