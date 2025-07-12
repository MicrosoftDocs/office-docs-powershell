---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-safelinkspolicy
applicable: Exchange Online
title: Get-SafeLinksPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SafeLinksPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeLinksPolicy cmdlet to view Safe Links policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SafeLinksPolicy [[-Identity] <SafeLinksPolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SafeLinksPolicy | Format-Table Name,EnableSafe*
```

This example shows a summary list of all Safe Links policies.

### Example 2
```powershell
Get-SafeLinksPolicy -Identity "Contoso All"
```

This example shows detailed information about the Safe Links policy named Contoso All.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Links policy that you want to view.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
