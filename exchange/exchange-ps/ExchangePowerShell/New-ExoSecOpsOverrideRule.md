---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-exosecopsoverriderule
schema: 2.0.0
title: New-ExoSecOpsOverrideRule
---

# New-ExoSecOpsOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ExoSecOpsOverrideRule cmdlet to create SecOps mailbox override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
New-ExoSecOpsOverrideRule -Policy <PolicyIdParametert>
 [-Comment <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ExoSecOpsOverrideRule -Name SecOpsOverrideRule -Policy SecOpsOverridePolicy
```

This example creates the SecOps mailbox override rule with the specified settings. Regardless of the Name value specified, the rule name will be `_Exe:SecOpsOverrid:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 312c23cf-0377-4162-b93d-6548a9977efb).

## PARAMETERS

### -Policy

> Applicable: Exchange Online

The Policy parameter specifies the phishing simulation override policy that's associated with the rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: Default, PublishComplianceTag, ComplianceTag, SetRawXml
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Exchange Online

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -Name

> Applicable: Exchange Online

The Name parameter specifies the name for the policy. Regardless of the value you specify, the name will be `_Exe:SecOpsOverrid:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 312c23cf-0377-4162-b93d-6548a9977ef).

```yaml
Type: String
Parameter Sets: Default
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
