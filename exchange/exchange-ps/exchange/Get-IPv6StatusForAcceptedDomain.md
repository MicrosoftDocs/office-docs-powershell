---
external help file:
online version: https://learn.microsoft.com/powershell/module/exchange/get-ipv6statusforaccepteddomain
applicable: Exchange Online
title: Get-IPv6StatusForAcceptedDomain
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-IPv6StatusForAcceptedDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-IPv6StatusForAcceptedDomain cmdlet to view the status of support for mail delivery to accepted domains in Exchange Online using IPv6.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-IPv6StatusForAcceptedDomain [[-Domain] <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-AcceptedDomain cmdlet to return accepted domains in the Exchange Online organization to use with this cmdlet

If IPv6 is enabled for an accepted domain in Exchange Online, IPv4 and IPv6 addresses are returned in DNS queries for mail flow records of the domain. If IPv6 is disabled, only IPv4 addresses are returned in DNS queries for mail flow records of the domain.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

> [!NOTE]
>
> - When you use the Enable-IPv6ForAcceptedDomain or Disable-IPv6ForAcceptedDomain cmdlets to update the IPv6 setting for an accepted domain, the updated status can take up to an hour to be visible using Get-IPv6StatusForAcceptedDomain due to caching.
>
>   For example, Get-IPv6StatusForAcceptedDomain shows the status value Enabled for a domain. You run Disable-IPv6ForAcceptedDomain to disable IPv6 for the domain, you immediately run Get-IPv6StatusForAcceptedDomain to check the status of the domain, and the command erroneously returns the value Enabled. It might take up to an hour before Get-IPv6StatusForAcceptedDomain shows the correct value Disabled for the domain.
>
> - If you receive the following error when running Get-Ipv6StatusForAcceptedDomain:
>
>   WARNING: DNS record has unexpected value...
>
>   Explicitly enable or disable IPv6 using the Enable-Ipv6ForAcceptedDomain or Disable-Ipv6ForAcceptedDomain cmdlets.

## EXAMPLES

### Example 1
```powershell
Get-IPv6StatusForAcceptedDomain -Domain contoso.com
```

This example returns the status of IPv6 support for mail sent to contoso.com.

## PARAMETERS

### -Domain
The Domain parameter specifies the accepted domain that you want to view IPv6 status for.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online

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
