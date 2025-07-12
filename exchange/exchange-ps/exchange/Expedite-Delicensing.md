---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/expedite-delicensing
applicable: Exchange Online
title: Expedite-Delicensing
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Expedite-Delicensing

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Expedite-Delicensing cmdlet to end the delay for removing mailbox licenses from users. After you remove the delay, the licenses are removed from mailboxes within 24 hours. You configure delayed mailbox license removal using the DelayedDelicensingEnabled parameter on the Set-OrganizationConfig cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Expedite-Delicensing [-Identity] <RecipientIdParameter>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Expedite-Delicensing -Identity yajvendra@contoso.onmicrosoft.com
```

This example ends the delay for the mailbox license removal request on the specified mailbox. Typically, the mailbox license is removed from the mailbox within 30 minutes after running the command, but it might take up to 24 hours.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox with a pending mailbox license removal request.

You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Email address
- GUID
- LegacyExchangeDN
- User ID or user principal name (UPN)

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
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
