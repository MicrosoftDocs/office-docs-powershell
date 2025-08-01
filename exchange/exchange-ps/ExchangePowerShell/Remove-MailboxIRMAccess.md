---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-mailboxirmaccess
schema: 2.0.0
title: Remove-MailboxIRMAccess
---

# Remove-MailboxIRMAccess

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-MailboxIRMAccess cmdlet to allow (unblock) delegate access to IRM-protected messages in other mailboxes (shared mailboxes or user mailboxes where delegates have Full Access permission).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-MailboxIRMAccess [-Identity] <MailboxIdParameter> -User <SecurityPrincipalIdParameter>
 [<CommonParameters>]
```

## DESCRIPTION
> [!NOTE]
> This cmdlet works only for delegates who already have Full Access permission to the mailbox. For more information, see [Manage permissions for recipients in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MailboxIRMAccess -Identity lynette@contoso.onmicrosoft.com -User chris@contoso.onmicrosoft.com
```

This example removes the restriction from IRM-protected messages in Lynette's mailbox for delegate Chris. In other words, delegate Chris can now access IRM-protected messages in Lynette's mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Online

**Note**: Delegates that you specify with this parameter must already have Full Access permission to the mailbox. For more information, see [Manage permissions for recipients in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).

The User parameter specifies the delegate who is no longer blocked from reading IRM-protected messages in the mailbox. The delegate must be a user mailbox or a mail user. You can use any value that uniquely identifies the delegate. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
