---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/start-compliancesearch
schema: 2.0.0
title: Start-ComplianceSearch
---

# Start-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Start-ComplianceSearch cmdlet to start stopped, completed or not started compliance searches in Exchange Server 2016 or later and in the Microsoft Purview compliance portal.

> [!NOTE]
> In the cloud, this cmdlet has the following requirements:
>
> - Version 3.9.0 or later of the Exchange Online PowerShell module (August 2025).
> - Use the _EnableSearchOnlySession_ parameter when you run the **Connect-IPPSSession** command to connect to Security & Compliance PowerShell.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Start-ComplianceSearch [-Identity] <ComplianceSearchIdParameter>
 [-Confirm]
 [-Force]
 [-RetryOnError]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In on-premises Exchange, this cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Start-ComplianceSearch -Identity "Case 1234"
```

This example starts the compliance search named Case 1234

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance

The Identity parameter specifies the compliance search that you want to start.

You can use any value that uniquely identifies the compliance search. For example:

- Name
- JobRunId (GUID)

You can find these values by running the command Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status

```yaml
Type: ComplianceSearchIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance

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

### -Force

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -RetryOnError

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance

The RetryOnError switch specifies whether to retry the search on any items that failed without re-running the entire search all over again. You don't need to specify a value with this switch.

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

### -WhatIf

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Security & Compliance

The WhatIf parameter doesn't work in the Microsoft Purview compliance portal.

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
