---
applicable: Exchange Online
author: chrisda
external help file:
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxextendedproperty
schema: 2.0.0
title: Get-MailboxExtendedProperty
---

# Get-MailboxExtendedProperty

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailboxExtendedProperty cmdlet to view extended mailbox properties in cloud-based mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailboxExtendedProperty [[-Identity] <MailboxExtendedPropertyId>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxExtendedProperty -Identity chris@contoso.onmicrosoft.com
```

This example returns all extended mailbox properties in the specified mailbox.

### Example 1
```powershell
Get-MailboxExtendedProperty -Identity 665ea11f-b2af-5751-b04c-9848e903ce47\fb59ba52-663f-4d02-9b34-2e733c53fbd4:00062008-0000-0000-c000-000000000046\OfficeGraphSharingActivityUserOptoutModifiedDate
```

This example uses the output of the first example to return information about the OfficeGraphSharingActivityUserOptoutModifiedDate extended property in the mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox extended property that you want to view.

To view all available extended properties in a mailbox, specify a unique identifier for the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Email address
- GUID
- User ID or user principal name (UPN)

To view a specific extended property in a mailbox, use the following syntax: `<MailboxLocation>:<PropertyNamespace>\<PropertyName | PropertyId>`:

- \<MailboxLocation\>: The value is available in the MailboxLocation property in the output of the Get-MailboxExtendedProperty cmdlet, is the same for all properties in the mailbox, and uses the syntax `<GUID1>\\<GUID2>`. For example, `665ea11f-b2af-5751-b04c-9848e903ce47\fb59ba52-663f-4d02-9b34-2e733c53fbd4`.
- \<PropertyNameSpace\>: The GUID value is available in the PropertyNamespace property in the output of the Get-MailboxExtendedProperty cmdlet. For example `00062008-0000-0000-c000-000000000046`.
- \<PropertyName \| PropertyId\>: The value is available in the PropertyName or PropertyId property in the output of the Get-MailboxExtendedProperty cmdlet. Only PropertyName or PropertyId is available on an extended property (one or the other, not both). For example, `OfficeGraphSharingActivityUserOptoutModifiedDate` or `33324`. In the output of the Identity property, the PropertyId value is shown in hexadecimal. For example, the PropertyId value 33324 is shown as 0x822c in the Identity property.

For example:

`665ea11f-b2af-5751-b04c-9848e903ce47\fb59ba52-663f-4d02-9b34-2e733c53fbd4:00062008-0000-0000-c000-000000000046\OfficeGraphSharingActivityUserOptoutModifiedDate`

`665ea11f-b2af-5751-b04c-9848e903ce47\fb59ba52-663f-4d02-9b34-2e733c53fbd4:00062008-0000-0000-c000-000000000046\33324`

`665ea11f-b2af-5751-b04c-9848e903ce47\fb59ba52-663f-4d02-9b34-2e733c53fbd4:00062008-0000-0000-c000-000000000046\0x822c`

```yaml
Type: MailboxExtendedPropertyId
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
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
