---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-administrativeunit
schema: 2.0.0
title: Get-AdministrativeUnit
---

# Get-AdministrativeUnit

## SYNOPSIS
This cmdlet is functional only in the cloud-based service.

Use the Get-AdministrativeUnit cmdlet to view administrative units, which are Microsoft Entra containers of resources. You can use administrative units to delegate administrative permissions and apply policies to different groups of users.

**Note**: Administrative units are available only in Microsoft Entra ID P1 or P2. You create and manage administrative units in Microsoft Graph PowerShell.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AdministrativeUnit [[-Identity] <AdministrativeUnitIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AdministrativeUnit
```

This example returns a summary list of all Microsoft Entra administrative units.

### Example 2
```powershell
Get-AdministrativeUnit -Identity "West Coast" | Format-List
```

This example returns detailed information about the administrative unit with the display name West Coast.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the administrative unit that you want to view. You can use any value that uniquely identifies the administrative unit. For example:

- Display name (this value is the same in Microsoft Graph PowerShell)
- ExternalDirectoryObjectId (this GUID value is the same as the ObjectId property in Microsoft Graph PowerShell)
- Name (GUID value)
- Distinguished name (DN)
- GUID (different value than Name)

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

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

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
