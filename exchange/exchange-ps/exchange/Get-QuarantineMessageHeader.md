---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-quarantinemessageheader
applicable: Exchange Online, Exchange Online Protection
title: Get-QuarantineMessageHeader
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-QuarantineMessageHeader

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-QuarantineMessageHeader cmdlet to view the message header of a quarantined message. The command will fail if the specified message is not in quarantine.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-QuarantineMessageHeader -Identity <QuarantineMessageIdentity> [<CommonParameters>]
```

## DESCRIPTION
Standard SMTP message header syntax is described in RFC 5322. This cmdlet displays the message header exactly as it appears in the message. Individual header fields are not unfolded.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantineMessageHeader 65ab8c7d-dcd3-4067-7c60-08d116c001c3\8b677327-0ef3-166b-e108-ff6cb380d191
```

This example displays the message header of the quarantined message that has the specified Identity value.

### Example 2
```powershell
$qMessages = Get-QuarantineMessage; Get-QuarantineMessageHeader $qMessages[0].Identity
```

This example displays the message header of the first message that's returned by Get-QuarantineMessage cmdlet.

## PARAMETERS

### -Identity
The Identity parameter specifies the quarantined message that you want to view the header for. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`).

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
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
