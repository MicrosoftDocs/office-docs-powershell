---
applicable: Exchange Online
author: chrisda
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-ipv6foraccepteddomain
schema: 2.0.0
title: Disable-IPv6ForAcceptedDomain
---

# Disable-IPv6ForAcceptedDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Disable-IPv6ForAcceptedDomain cmdlet to disable or opt-out of support for mail delivery to accepted domains in Exchange Online using IPv6.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Disable-IPv6ForAcceptedDomain [[-Domain] <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-AcceptedDomain cmdlet to return accepted domains in the Exchange Online organization to use with this cmdlet.

If IPv6 is enabled for an accepted domain in Exchange Online, IPv4 and IPv6 addresses are returned in DNS queries for mail flow records of the domain. If IPv6 is disabled, only IPv4 addresses are returned in DNS queries for mail flow records of the domain.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-IPv6ForAcceptedDomain -Domain contoso.com
```

This example disables IPv6 support for mail sent to contoso.com. Mail can be delivered to the domain using IPv4 only.

## PARAMETERS

### -Domain

> Applicable: Exchange Online

The Domain parameter specifies the accepted domain that you want to disable mail delivery using IPv6 for.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
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
