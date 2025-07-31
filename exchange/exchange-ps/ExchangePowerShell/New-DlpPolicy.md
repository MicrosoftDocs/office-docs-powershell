---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-dlppolicy
schema: 2.0.0
title: New-DlpPolicy
---

# New-DlpPolicy

## SYNOPSIS
**Note**: This cmdlet has been retired from the cloud-based service. For more information, see [this blog post](https://techcommunity.microsoft.com/t5/exchange-team-blog/exchange-online-etrs-to-stop-supporting-dlp-policies/ba-p/3886713). Use the New-DlpCompliancePolicy and New-DlpComplianceRule cmdlets instead.

This cmdlet is functional only in on-premises Exchange.

Use the New-DlpPolicy cmdlet to create data loss prevention (DLP) policies that are based on transport rules (mail flow rules) in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DlpPolicy [[-Name] <String>]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Mode <RuleMode>]
 [-Parameters <Hashtable>]
 [-State <RuleState>]
 [-Template <String>]
 [-TemplateData <Byte[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-DlpPolicy -Name "Contoso PII" -Template "U.S. Personally Identifiable Information (PII) Data"
```

This example creates a new DLP policy named Contoso PII with the following values:

- The DLP policy is enabled and set to audit only.
- The DLP policy is based on the existing "U.S. Personally Identifiable Information (PII) Data" DLP policy template.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies a descriptive name for the DLP policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -Description

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Description parameter specifies an optional description for the DLP policy.

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

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -Mode

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mode parameter specifies the action and notification level of the DLP policy. Valid values for this parameter are:

- Audit: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, and the Policy Tip isn't displayed to the user.
- AuditAndNotify: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, but the Policy Tip is displayed to the user in a supported email client.
- Enforce: The actions specified by the DLP policy are enforced when a message matches the conditions specified by the policy, and the Policy Tip is displayed to the user in a supported email client.

By default, the value of this parameter is set to Audit when you create a new DLP policy. If the State parameter is set to Disabled, the value of the Mode parameter is irrelevant.

```yaml
Type: RuleMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Parameters parameter specifies the parameter values that are required by the DLP policy template that you specify using the Template or TemplateData parameters. DLP policy templates may contain parameters that need to be populated with values from your organization. For example, a DLP policy template may include an exception group that defines users who are exempt from the DLP policy.

This parameter uses the syntax: `@{Parameter1="Value1";Parameter2="Value2"...}`.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The State parameter enables or disables the DLP policy. Valid input for this parameter is Enabled or Disabled. By default, a new DLP policy that you create is enabled. If you want to create a disabled DLP policy, specify the value Disabled for this parameter.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Template parameter specifies the existing DLP policy template from which you can create a new DLP policy. You can't use the Template and TemplateData parameters in the same command.

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

### -TemplateData

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The TemplateData parameter specifies an external DLP policy template file from which you can create a new DLP policy. You can't use the TemplateData and Template parameters in the same command.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
