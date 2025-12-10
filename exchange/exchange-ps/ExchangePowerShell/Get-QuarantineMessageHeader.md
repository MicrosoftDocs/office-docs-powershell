---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-quarantinemessageheader
schema: 2.0.0
title: Get-QuarantineMessageHeader
---

# Get-QuarantineMessageHeader

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-QuarantineMessageHeader cmdlet to view the message header of a quarantined message. The command fails if the specified message is not in quarantine.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-QuarantineMessageHeader -Identity <QuarantineMessageIdentity>
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-RecipientAddress <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Standard SMTP message header syntax is described in RFC 5322. This cmdlet displays the message header exactly as it appears in the message. Individual header fields are not unfolded.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantineMessageHeader 65ab8c7d-dcd3-4067-7c60-08d116c001c3\8b677327-0ef3-166b-e108-ff6cb380d191
```

This example displays the message header of the quarantined message that has the specified Identity value.

### Example 2
```powershell
$qMessages = Get-QuarantineMessage

Get-QuarantineMessageHeader $qMessages[0].Identity
```

This example displays the message header of the first message that's returned by Get-QuarantineMessage cmdlet.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Identity parameter specifies the quarantined message that you want to view the header for. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EntityType

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The EntityType parameter filters the results by EntityType. Valid values are:

- Email
- SharePointOnline
- Teams (currently in Preview)
- DataLossPrevention

```yaml
Type: Microsoft.Exchange.Management.FfoQuarantine.EntityType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
