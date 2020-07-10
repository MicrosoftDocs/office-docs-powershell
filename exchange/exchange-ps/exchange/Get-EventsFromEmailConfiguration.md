---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-eventsfromemailconfiguration
applicable: Exchange Online
title: Get-EventsFromEmailConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EventsFromEmailConfiguration

## SYNOPSIS
This cmdlet is only available in the cloud-based service.

Use the Get-EventsFromEmailConfiguration cmdlet to view the events from email settings on a mailbox. These settings define whether Outlook or Outlook on the web (formerly known as Outlook Web App) automatically discovers events from email messages and adds them to the user's calendar.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EventsFromEmailConfiguration [-Identity] <RecipientIdParameter> [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-EventsFromEmailConfiguration –Identity peter@contoso.com
```

This example retrieves all events from email settings for peter@contoso.com’s mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You identify the mailbox by email address.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
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
