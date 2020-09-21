---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-omemessagestatus
applicable: Exchange Online
title: Get-OMEMessageStatus
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-OMEMessageStatus

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OMEMessageStatus cmdlet to view the Microsoft 365 Message Encryption (OME) revocation status for a specific message.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-OMEMessageStatus -MessageId <String> [<CommonParameters>]
```

## DESCRIPTION
If encryption for the message was successfully revoked, the command will return the message: The encrypted email with the subject "\<subject\>" and Message ID "\<messageId>\" was successfully revoked.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OMEMessageStatus -MessageId "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>"
```

This example returns the encryption revocation status for the specified message.

## PARAMETERS

### -MessageId
The MessageId parameter specifies the message based on the value the Message-ID header field. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

You can find the Message ID for a message in Message Trace or the Message Encryption Report in the Security & Compliance Center.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
