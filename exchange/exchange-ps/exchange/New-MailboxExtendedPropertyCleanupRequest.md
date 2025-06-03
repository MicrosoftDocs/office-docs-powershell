---
external help file:
online version: https://learn.microsoft.com/powershell/module/exchange/new-mailboxextendedpropertycleanuprequest
applicable: Exchange Online
title: New-MailboxExtendedPropertyCleanupRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-MailboxExtendedPropertyCleanupRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-MailboxExtendedPropertyCleanupRequest cmdlet to create extended mailbox property clean-up requests in cloud-based mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-MailboxExtendedPropertyCleanupRequest [[-Identity] <MailboxExtendedPropertyId>] -Properties <String>
 [-Confirm]
 [-DetectOnly]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox extended property request that you want to create.

```yaml
Type: MailboxExtendedPropertyId
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies the mailbox property to inspect or remove.

You can specify a comma separated list of properties without spaces.

If a named property has a namespace GUID, a string name that doesn't contain `#`, and an integer type, use the following syntax

`s#GUID#Name#Type`

Specify the property type with the corresponding integer value:

- 0: Unspecified
- 1: Null
- 2: Short
- 3: Int16
- 3: Int32
- 4: Float
- 5: Double
- 5: Real64
- 6: Currency
- 7: AppTime
- 10: Error
- 11: Boolean
- 13: Object
- 20: Long
- 20: Int64
- 30: AnsiString
- 30: String8
- 31: String
- 31: Unicode
- 64: SysTime
- 72: Guid
- 258: Binary
- 4098: ShortArray
- 4099: IntArray
- 4100: FloatArray
- 4101: DoubleArray
- 4102: CurrencyArray
- 4103: AppTimeArray
- 4109: ObjectArray
- 4116: LongArray
- 4126: AnsiStringArray
- 4127: StringArray
- 4160: SysTimeArray
- 4168: GuidArray
- 4354: BinaryArray

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetectOnly
When enabled, we just search these properties and report any corruptions found.

When disabled properties are removed from the elements they are found in.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

## OUTPUTS

## NOTES

## RELATED LINKS
