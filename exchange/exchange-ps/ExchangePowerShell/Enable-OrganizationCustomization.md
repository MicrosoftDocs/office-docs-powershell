---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/enable-organizationcustomization
schema: 2.0.0
title: Enable-OrganizationCustomization
---

# Enable-OrganizationCustomization

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

You might be prompted to run the EnableOrganizationCustomization cmdlet before you create or modify objects in your Exchange Online organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Enable-OrganizationCustomization [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In the Microsoft datacenters, certain objects are consolidated to save space. When you use Exchange Online PowerShell or the Exchange admin center to modify one of these objects for the first time, you might encounter an error message that tells you to run the Enable-OrganizationCustomization cmdlet.

Here are some examples of when you might see this:

- Creating a new role group or creating a new management role assignment.
- Creating a new role assignment policy or modifying a built-in role assignment policy.
- Creating a new Outlook on the web mailbox policy or modifying a built-in Outlook on the web mailbox policy.
- Creating a new sharing policy or modifying a built-in sharing policy.
- Creating a new retention policy or modifying a built-in retention policy.
- Enabling preset security policies in the Microsoft Defender portal.

You are only required to run the Enable-OrganizationCustomization cmdlet once in your Exchange Online organization. If you attempt to run the cmdlet again, you get an error.

Whether or not this command is previously run in an organization is available in the IsDehydrated property of the Get-OrganizationConfig cmdlet: False ($false) = the command has already been run; True ($true) = the command has never been run.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-OrganizationCustomization
```

This example runs the command as required.

## PARAMETERS

### -Confirm

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
