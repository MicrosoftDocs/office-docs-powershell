---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-hostedcontentfilterpolicy
schema: 2.0.0
title: Get-HostedContentFilterPolicy
---

# Get-HostedContentFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HostedContentFilterPolicy cmdlet to view the settings of spam filter policies (content filter policies) in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HostedContentFilterPolicy [[-Identity] <HostedContentFilterPolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HostedContentFilterPolicy
```

This example shows a summary list of all the spam filter policies in your cloud-based organization.

### Example 2
```powershell
Get-HostedContentFilterPolicy Default | Format-List
```

This example retrieves details about the spam filter policy named Default.

### Example 3
```powershell
$x = Get-HostedContentFilterPolicy

$x | foreach {write-host ("`r`n"*3)$_.Name,`r`n,("="*79),`r`n,"Allowed Senders"`r`n,("-"*79),`r`n,$_.AllowedSenders,("`r`n"*2),"Allowed Sender Domains",`r`n,("-"*79),`r`n,$_.AllowedSenderDomains,("`r`n"*2),"Blocked Senders"`r`n,("-"*79),`r`n,$_.BlockedSenders,("`r`n"*2),"Blocked Sender Domains",`r`n,("-"*79),`r`n,$_.BlockedSenderDomains}
```

This example shows the allowed and blocked senders and domains in all spam filter policies.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the spam filter policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: HostedContentFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
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
