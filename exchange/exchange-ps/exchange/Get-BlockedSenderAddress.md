---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-blockedsenderaddress
applicable: Exchange Online, Exchange Online Protection
title: Get-BlockedSenderAddress
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-BlockedSenderAddress

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-BlockedSenderAddress cmdlet to view users in your Office 365 organization that are impacted by the protection system. These users sent multiple messages that were classified as spam, so they're blocked from sending messages.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-BlockedSenderAddress [-SenderAddress <SmtpAddress>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```powershell
Get-BlockedSenderAddress
```

This example returns information about all blocked senders.

### Example 2
```powershell
Get-BlockedSenderAddress -SenderAddress laura@contoso.com
```

This example returns information about the blocked sender laura@contoso.com.

## PARAMETERS

### -SenderAddress
The SenderAddress parameter filters the results by the email address of the blocked user.

```yaml
Type: SmtpAddress
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  


## OUTPUTS

###  

## NOTES

## RELATED LINKS
