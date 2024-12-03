---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/enable-dnssecforverifieddomain
applicable: Exchange Online
title: Enable-DnssecForVerifiedDomain
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Enable-DnssecForVerifiedDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Enable-DnssecForVerifiedDomain cmdlet to enable Domain Name System Security (DNSSEC) for inbound mail to accepted domains in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Enable-DnssecForVerifiedDomain [-DomainName] <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet is an MX record value that you need to add to DNS for the specified domain.

For more information about debugging, enabling, and disabling SMTP DANE with DNSSEC, see [How SMTP DANE works](https://learn.microsoft.com/purview/how-smtp-dane-works).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-DnssecForVerifiedDomain -DomainName contoso.com
```

This example enables DNSSEC for mail sent to contoso.com.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the accepted domain in the Exchange Online organization where you want to enable DNSSEC (for example, contoso.com). Use the Get-AcceptedDomain cmdlet to see the accepted domains in the organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
