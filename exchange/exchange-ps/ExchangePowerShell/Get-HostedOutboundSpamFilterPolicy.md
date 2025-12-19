---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-hostedoutboundspamfilterpolicy
schema: 2.0.0
title: Get-HostedOutboundSpamFilterPolicy
---

# Get-HostedOutboundSpamFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HostedOutboundSpamFilterPolicy cmdlet to view outbound spam filter policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HostedOutboundSpamFilterPolicy [-Identity] <HostedOutboundSpamFilterPolicyIdParameter>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HostedOutboundSpamFilterPolicy | Format-Table Name,Enabled,IsDefault,Action*
```

This example returns a summary list of all outbound spam filter policies.

### Example 2
```powershell
Get-HostedOutboundSpamFilterPolicy -Identity "Contoso Executives"
```

This example returns detailed information about the outbound spam filter policy named Contoso Executives.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the outbound spam filter policy you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: HostedOutboundSpamFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
