---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/remove-blockedsenderaddress
applicable: Exchange Online, Exchange Online Protection
title: Remove-BlockedSenderAddress
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-BlockedSenderAddress

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-BlockedSenderAddress cmdlet to unblock users in your Microsoft 365 organization that were impacted by the protection system. These users sent multiple messages that were classified as spam, so they were blocked from sending messages.

**Note**: There's a limit to the number of times you can unblock a Microsoft 365 account. If you exceed the unblock limit for a user, you'll receive an error, and you'll need to contact support to unblock the user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-BlockedSenderAddress -SenderAddress <SmtpAddress>
 [-Reason <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-BlockedSenderAddress -SenderAddress julia@contoso.com
```

This example unblocks the user julia@contoso.com.

## PARAMETERS

### -SenderAddress
The SenderAddress parameter specifies the email address of the user that you want to unblock.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reason
The Reason parameter specifies the reason the user was blocked (the Reason property value). If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
