---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/enable-smtpdaneinbound
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Enable-SmtpDaneInbound
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Enable-SmtpDaneInbound

## SYNOPSIS

This cmdlet is available only in the cloud-based service. This cmdlet is in Preview, as is Inbound SMTP DANE with DNSSEC.

Enable-SmtpDaneInbound allows Exchange Online users to enable SMTP DANE for mail flowing to an Exchange Online Accepted Domain.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](../../docs-conceptual/exchange-cmdlet-syntax.md)

## SYNTAX

```
Enable-SmtpDaneInbound
[-DomainName]
```

## DESCRIPTION

Enable-SmtpDaneInbound allows Exchange Online users to enable SMTP DANE for inbound mail flowing to an Exchange Online Accepted Domain. Follow the [How SMTP DNS-based Authentication of Named Entities (DANE) secures email communications | Microsoft Learn](/purview/how-smtp-dane-works) documentation for configuring Inbound SMTP DANE with DNSSEC.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](../../docs-conceptual/find-exchange-cmdlet-permissions.md).


## Examples

### Example 1

```powershell
Enable-SmtpDaneInbound -DomainName contoso.com
```

This example enables SMTP DANE for mail sent to contoso.com.

## PARAMETERS

### - DomainName

The DomainName is the name of the domain that is being enabled with.

| Type: | String |
| --- | --- |
| Aliases: |     |
| Position: |     |
| Default value: | No default |
| Required: | Yes |
| Accept pipeline input: | No  |
| Accept wildcard characters: | No  |
| Applies to: |     |