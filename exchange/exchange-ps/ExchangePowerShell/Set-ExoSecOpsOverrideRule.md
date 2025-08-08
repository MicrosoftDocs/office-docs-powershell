---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exosecopsoverriderule
schema: 2.0.0
title: set-ExoSecOpsOverrideRule
---

# Set-ExoSecOpsOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ExoSecOpsOverrideRule cmdlet to modify SecOps mailbox override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

**Tip**: This cmdlet doesn't modify email addresses in the SecOps override rule. To modify the email addresses in the SecOps override rule, use the Set-SecOpsOverridePolicy cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExoSecOpsOverrideRule [-Identity] <ComplianceRuleIdParameter>
 [-Comment <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoSecOpsOverrideRule| Set-ExoSecOpsOverrideRule -Comment "Contact IT Management before modifying or removing this rule."
```

This example adds a comment to the (presumably only) SecOps mailbox override rule with the specified settings.

### Example 2
```powershell
Set-ExoSecOpsOverrideRule -Identity "_Exe:SecOpsOverrid:312c23cf-0377-4162-b93d-6548a9977efb" -Comment "Contact IT Management before modifying or removing this rule."
```

This example adds a comment to the specified SecOps mailbox override rule.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the SecOps override rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

Use the Get-ExoSecOpsMailboxRule cmdlet to find these values. The name of the rule uses the following syntax: `_Exe:SecOpsOverrid:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 312c23cf-0377-4162-b93d-6548a9977efb).

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Comment

> Applicable: Exchange Online

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Confirm

> Applicable: Exchange Online

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

> Applicable: Exchange Online

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

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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
