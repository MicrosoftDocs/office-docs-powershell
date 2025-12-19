---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-applicationaccesspolicy
schema: 2.0.0
title: Set-ApplicationAccessPolicy
---

# Set-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ApplicationAccessPolicy cmdlet to modify the description of an application access policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ApplicationAccessPolicy [-Identity] <ApplicationAccessPolicyIdParameter>
 [-Description <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This feature applies only to apps connecting to the Microsoft Graph API for Outlook resources.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ApplicationAccessPolicy -Identity "596ade3a-1abe-4c5b-b7d5-a169c4b05d4a\7a774f0c-7a6f-11e0-85ad-07fb4824019b:S-1-5-21-724521725-2336880675-2689004279-1821338;8b6ce428-cca2-459a-ac50-d38bcc932258" -Description "Executive Assistant Policy"
```

This example modifies the description of the specified policy.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the application access policy that you want to modify. To find the Identity value for the policy, run the command Get-ApplicationAccessPolicy | Format-List Identity,Description,ScopeName,AccessRight,AppID.

```yaml
Type: ApplicationAccessPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Description

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Description parameter modifies the description of the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The WhatIf switch doesn't work on this cmdlet.

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
