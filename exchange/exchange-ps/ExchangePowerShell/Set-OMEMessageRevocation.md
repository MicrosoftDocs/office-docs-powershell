---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-omemessagerevocation
schema: 2.0.0
title: Set-OMEMessageRevocation
---

# Set-OMEMessageRevocation

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-OMEMessageRevocation cmdlet to revoke Microsoft Purview Message Encryption for a message. Revoking encryption prevents the recipient from viewing the message in the OME portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OMEMessageRevocation -MessageId <String> -Revoke <Boolean>
 [<CommonParameters>]
```

## DESCRIPTION
When an email is revoked, the recipient gets the following error when they try to view the encrypted message in the OME portal: "The message is revoked by the sender".

You can revoke encrypted messages if the recipient received a link-based, branded encrypted email message. If the recipient received a native inline experience in a supported Outlook client, then you can't revoke encryption for the message.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OMEMessageRevocation -MessageId "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>" -Revoke $true
```

This example revokes encryption for the specified message.

## PARAMETERS

### -MessageId

> Applicable: Exchange Online

The MessageId parameter specifies the message based on the value the Message-ID header field. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

You can find the Message ID for a message in Message Trace or the Message Encryption Report in the Microsoft Purview compliance portal.

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

### -Revoke

> Applicable: Exchange Online

The Revoke parameter specifies whether to revoke encryption for the message. Valid values are:

- $true: Encryption for the specified message is revoked. The recipient gets an error when they try to view the encrypted message in the OME portal
- $false: Encryption for the specified message isn't revoked. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
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
