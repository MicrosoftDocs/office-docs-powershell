---
applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-compliancesearchaction
schema: 2.0.0
title: Set-ComplianceSearchAction
---

# Set-ComplianceSearchAction

## SYNOPSIS
> [!NOTE]
> After May 26, 2025, this cmdlet is no longer functional. For more information, see [Upcoming changes to Microsoft Purview eDiscovery](https://techcommunity.microsoft.com/blog/microsoft-security-blog/upcoming-changes-to-microsoft-purview-ediscovery/4405084).

This cmdlet is functional only in on-premises Exchange.

Use the Set-ComplianceSearchAction cmdlet to change the export key on export compliance search actions in on-premises Exchange.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ComplianceSearchAction [-Identity] <ComplianceSearchActionIdParameter>
 [-ChangeExportKey]
 [-DomainController <Fqdn>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group.

## EXAMPLES

### Example 1
```powershell
Set-ComplianceSearchAction -Identity "Project X_Export" -ChangeExportKey
```

This example changes the export key on the export compliance search action named Project X\_Export.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

The Identity parameter specifies the compliance search action that you want to modify. You can use any value that uniquely identifies the compliance search action. For example:

- Name: The compliance search action name uses the syntax `"Compliance Search Name_Action"` (for example, `"Case 1234_Preview`).
- JobRunId (GUID)

```yaml
Type: ComplianceSearchActionIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ChangeExportKey

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

The ChangeExportKey switch creates a new export key for the compliance search action. You don't need to specify a value with this switch.

This switch is meaningful only on export compliance search actions.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

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

### -DomainController

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2016, Exchange Server 2019, Security & Compliance

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
