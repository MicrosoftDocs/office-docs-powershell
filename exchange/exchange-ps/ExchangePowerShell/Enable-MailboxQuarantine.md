---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/enable-mailboxquarantine
schema: 2.0.0
title: Enable-MailboxQuarantine
---

# Enable-MailboxQuarantine

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Enable-MailboxQuarantine cmdlet to quarantine mailboxes that affect the availability of the mailbox database.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### MailboxIdentity
```
Enable-MailboxQuarantine [-Identity] <GeneralMailboxIdParameter>
 [-AllowMigration]
 [-Confirm]
 [-Duration <EnhancedTimeSpan>]
 [-WhatIf]
 [<CommonParameters>]
```

### MailboxOrMailUserIdentity
```
Enable-MailboxQuarantine [-Identity] <GeneralMailboxOrMailUserIdParameter>
 [-QuarantineReason <String>]
 [-AllowMigration]
 [-Confirm]
 [-Duration <EnhancedTimeSpan>]
 [-WhatIf]
 [<CommonParameters>]
```

### StoreMailboxIdentity
```
Enable-MailboxQuarantine -Database <DatabaseIdParameter> -StoreMailboxIdentity <StoreMailboxIdParameter>
 [-QuarantineReason <String>]
 [-AllowMigration]
 [-Confirm]
 [-Duration <EnhancedTimeSpan>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-MailboxQuarantine "Brian Johnson"
```

This example quarantines the mailbox for the user Brian Johnson.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013

The Identity parameter specifies the mailbox that you want to quarantine. You can use any value that uniquely identifies the mailbox. For example:

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

You can't use this parameter with the Database parameter.

```yaml
Type: GeneralMailboxIdParameter
Parameter Sets: MailboxIdentity, MailboxOrMailUserIdentity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Database

> Applicable: Exchange Server 2016, Exchange Server 2019

The Database parameter specifies the database that contains the mailboxes you want to quarantine. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You identify the mailbox by using the StoreMailboxIdentity parameter.

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: StoreMailboxIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailboxIdentity

> Applicable: Exchange Server 2016, Exchange Server 2019

The StoreMailboxIdentity parameter specifies the mailbox that you want to quarantine when you use the Database parameter.

You identify the mailbox by its GUID value. You can find the GUID value by using the Get-Mailbox or Get-MailboxStatistics cmdlets.

You can't use this parameter with the Identity parameter.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: StoreMailboxIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMigration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AllowMigration switch allows a quarantined mailbox to be moved to another mailbox database or to the cloud. You don't need to specify a value with this switch.

Moving a mailbox is one method of correcting data corruption that's required before releasing the mailbox from quarantine.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Duration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Duration parameter specifies how long the mailbox should remain quarantined. The default value is 24 hours.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineReason

> Applicable: Exchange Server 2016, Exchange Server 2019

The QuarantineReason parameter specifies why you quarantined the mailbox. The maximum length is 255 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: StoreMailboxIdentity, MailboxOrMailUserIdentity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
