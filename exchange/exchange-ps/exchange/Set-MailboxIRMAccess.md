---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-mailboxirmaccess
applicable: Exchange Online
title: Set-MailboxIRMAccess
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-MailboxIRMAccess

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-MailboxIRMAccess cmdlet to block delegate access to IRM-protected messages in other mailboxes (shared mailboxes or user mailboxes where delegates have Full Access permission).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxIRMAccess -AccessLevel <IRMAccessLevel> [-Identity] <MailboxIdParameter> -User <SecurityPrincipalIdParameter> [<CommonParameters>]
```

## DESCRIPTION
> [!NOTE]
> This cmdlet works only for delegates who already have Full Access permission to the mailbox. For more information, see [Manage permissions for recipients in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxIRMAccess -Identity lynette@contoso.onmicrosoft.com -User chris@contoso.onmicrosoft.com -AccessLevel Block
```

This example prevents delegate Chris from reading IRM-protected messages in Lynette's mailbox.

## PARAMETERS

### -Identity
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
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AccessLevel
The AccessLevel parameter specifies what delegates can do to IRM-protected messages in the mailbox that's specified by the Identity parameter.

The only value for this parameter is Block, which means you can only use this cmdlet to block delegate access to IRM-protected messages in the mailbox.

To allow access to IRM-protected messages in the mailbox, use the Remove-MailboxIRMAccess cmdlet.

```yaml
Type: IRMAccessLevel
Parameter Sets: (All)
Aliases:
Accepted values: Block
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
**Note**: Delegates that you specify with this parameter must already have Full Access permission to the mailbox. For more information, see [Manage permissions for recipients in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).

The User parameter specifies the delegate who is blocked from reading IRM-protected messages in the mailbox. The delegate must be a user mailbox or a mail user. You can use any value that uniquely identifies the delegate. For example:

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
Applicable: Exchange Online

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
