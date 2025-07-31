---
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/preview-quarantinemessage
schema: 2.0.0
title: Preview-QuarantineMessage
---

# Preview-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Preview-QuarantineMessage cmdlet to preview the contents of quarantined messages in your cloud-based organization. This cmdlet doesn't work on files that were quarantined by Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Preview-QuarantineMessage -Identity <QuarantineMessageIdentity>
 [-EntityType <Microsoft.Exchange.Management.FfoQuarantine.EntityType>]
 [-RecipientAddress <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantineMessage -MessageID <5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com> | Preview-QuarantineMessage
```

This example previews the quarantined message with the Message-ID value `<5c695d7e-6642-4681-a4b0-9e7a86613cb7@contoso.com>`.

### Example 2
```powershell
Preview-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7
```

This example previews the quarantined message that has the specified Identity value.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

The Identity parameter specifies the quarantined message that you want to preview. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

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
