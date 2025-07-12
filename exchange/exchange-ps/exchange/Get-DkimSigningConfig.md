---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dkimsigningconfig
applicable: Exchange Online, Exchange Online Protection
title: Get-DkimSigningConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DkimSigningConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-DkimSigningConfig cmdlet to view the DomainKeys Identified Mail (DKIM) signing policy settings for domains in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DkimSigningConfig [[-Identity] <DkimSigningConfigIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
DKIM in Microsoft 365 is an email authentication method that uses a public key infrastructure (PKI), message headers and CNAME records in DNS to authenticate the message sender, which is stamped in the DKIM-Signature header field. DKIM helps prevent forged sender email addresses (also known as spoofing) by verifying that the domain in the From address matches the domain in the DKIM-Signature header field.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DkimSigningConfig
```

This example shows a summary list of all DKIM signing policies in your organization.

### Example 2
```powershell
Get-DkimSigningConfig -Identity contoso.com | Format-List
```

This example shows detailed information for the DKIM signing policy for contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the DKIM signing policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name: The domain name (for example, contoso.com).
- Distinguished name (DN)
- GUID

```yaml
Type: DkimSigningConfigIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
