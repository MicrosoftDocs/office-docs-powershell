---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxirmaccess
schema: 2.0.0
title: Get-MailboxIRMAccess
---

# Get-MailboxIRMAccess

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailboxIRMAccess cmdlet to view delegate access to IRM-protected messages in other mailboxes (shared mailboxes or user mailboxes where delegates have Full Access permission).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailboxIRMAccess [[-Identity] <MailboxIdParameter>]
 [-User <SecurityPrincipalIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
> [!NOTE]
> This cmdlet works only for delegates who already have Full Access permission to the mailbox. For more information, see [Manage permissions for recipients in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).
>
> Delegates with Full Access permission to the mailbox who don't appear in the results of this cmdlet have access to IRM-protected messages. Only Full Access delegates who are blocked from reading IRM-protected messages in the mailbox appear in the results.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxIRMAccess -Identity lynette@contoso.onmicrosoft.com
```

This example returns information about delegate access to IRM-protected messages in Lynette's mailbox:

- Full Access delegates who appear in the results are blocked from reading IRM-protected messages in the mailbox.
- Full Access delegates who don't appear in the results can read IRM-protected messages in the mailbox.

### Example 2
```powershell
Get-MailboxIRMAccess -Identity lynette@contoso.onmicrosoft.com -User chris@contoso.onmicrosoft.com
```

This example returns information about delegate Chris' access to IRM-protected messages in Lynette's mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox where you want to view delegate access to IRM-protected messages. You can use any value that uniquely identifies the mailbox. For example

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

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Online

The User parameter filters the results in the mailbox by the specified delegate. The delegate must be a user mailbox or a mail user. You can use any value that uniquely identifies the delegate. For example:

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

Required: False
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
