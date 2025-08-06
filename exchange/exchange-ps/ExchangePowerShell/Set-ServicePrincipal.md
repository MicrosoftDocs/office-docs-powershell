---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
ms.reviewer: bili1
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-serviceprincipal
schema: 2.0.0
title: Set-ServicePrincipal
---

# Set-ServicePrincipal

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ServicePrincipal cmdlet to change service principals in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ServicePrincipal [-Identity] <ServicePrincipalIdParameter>
 [-Confirm]
 [-DisplayName <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to change the DisplayName only. If AppId/ObjectId is wrong, delete the service principal and create a new one.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ServicePrincipal -Identity dc873ad4-0397-4d74-b5c0-897cd3a94731 -DisplayName "Another App Name"
```

This example sets the service principal in Exchange Online with the specified display name.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Identity parameter specifies the service principal that you want to modify. You can use any value that uniquely identifies the service principal. For example:

- Name
- Distinguished name (DN)
- GUID
- AppId
- ObjectId

```yaml
Type: ServicePrincipalIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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

### -DisplayName

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The DisplayName parameter specifies the friendly name of the service principal. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
