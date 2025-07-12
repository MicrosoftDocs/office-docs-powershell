---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-smtpdaneinboundstatus
applicable: Exchange Online
title: Get-SmtpDaneInboundStatus
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SmtpDaneInboundStatus

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SmtpDaneInboundStatus cmdlet to view information about SMTP DNS-based Authentication of Named Entities (DANE) for inbound mail to accepted domains in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SmtpDaneInboundStatus [-DomainName] <String> [<CommonParameters>]
```

## DESCRIPTION
For more information about debugging, enabling, and disabling SMTP DANE with DNSSEC, see [How SMTP DANE works](https://learn.microsoft.com/purview/how-smtp-dane-works).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SmtpDaneInboundStatus -DomainName contoso.com
```

This example checks the DANE status for the accepted domain contoso.com.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the accepted domain in the Exchange Online organization where you want to view information about DANE (for example, contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
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
