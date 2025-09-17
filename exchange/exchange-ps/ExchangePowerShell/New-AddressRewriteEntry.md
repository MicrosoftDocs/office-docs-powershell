---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-addressrewriteentry
schema: 2.0.0
title: New-AddressRewriteEntry
---

# New-AddressRewriteEntry

## SYNOPSIS
This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the New-AddressRewriteEntry cmdlet to create an address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AddressRewriteEntry [-Name] <String> -ExternalAddress <String> -InternalAddress <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ExceptionList <MultiValuedProperty>]
 [-OutboundOnly <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1
```powershell
New-AddressRewriteEntry -Name "Address rewrite entry for david@contoso.com" -InternalAddress david@contoso.com -ExternalAddress david@northwindtraders.com
```

This example creates an address rewrite entry that rewrites the email address david@contoso.com to david@northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to david@northwindtraders.com is rewritten back to david@contoso.com.

### Example 2
```powershell
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com email addresses" -InternalAddress contoso.com -ExternalAddress northwindtraders.com
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain to northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to northwindtraders.com recipients is rewritten back to contoso.com.

### Example 3
```powershell
New-AddressRewriteEntry -Name "Address rewrite entry for contoso.com and all subdomain email addresses" -InternalAddress *.contoso.com -ExternalAddress northwindtraders.com -ExceptionList research.contoso.com,corp.contoso.com -OutboundOnly $true
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain and all subdomains to northwindtraders.com. However, email addresses in research.contoso.com and corp.contoso.com are not rewritten. Because this address rewrite entry affects a domain and all subdomains (\*.contoso.com), address rewriting occurs on outbound mail only.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Name parameter specifies a unique name for this address rewrite entry.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalAddress parameter specifies the final email addresses that you want. If the InternalAddress parameter specifies a single email address (chris@contoso.com), the ExternalAddress parameter must also specify a single email address (support@contoso.com). If the InternalAddress parameter specifies a single domain (contoso.com) or a domain and all subdomains (\*.contoso.com), the ExternalAddress parameter must specify a single domain (fabrikam.com).

You can't use the wildcard character (\*) with the ExternalAddress parameter.

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

### -InternalAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalAddress parameter specifies the original email addresses that you want to change. You can use the following values:

- Single email address: david@contoso.com
- Single domain: contoso.com or sales.contoso.com
- Domain and all subdomains: \*.contoso.com

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -ExceptionList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExceptionList parameter specifies the email address domains that shouldn't be rewritten when the InternalAddress parameter contains the wildcard character to rewrite addresses in a domain and all subdomains (\*.contoso.com). You can enter multiple domain values in the ExceptionList parameter separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The OutboundOnly parameter enables or disables outbound-only address rewriting. Valid input for this parameter is $true or $false. The value $true means address rewriting occurs in outbound mail only. The value $false means address rewriting occurs on outbound mail and also on inbound mail (rewritten email addresses are changed back to the original email addresses in inbound mail). The default value is $false.

You must set this parameter to $true if the InternalAddress parameter contains the wildcard character to rewrite addresses in a domain and all subdomains (\*.contoso.com).

Also, when you configure outbound-only address rewriting, you need to configure the rewritten email address as a proxy address on the affected recipients. For example, if laura@sales.contoso.com is rewritten to laura@contoso.com, the proxy address laura@contoso.com must be configured on Laura's mailbox. This allows replies and inbound messages to be delivered correctly.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
