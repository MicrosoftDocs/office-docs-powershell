---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-sweeprule
schema: 2.0.0
title: Set-SweepRule
---

# Set-SweepRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-SweepRule cmdlet to modify Sweep rules in mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SweepRule [-Identity] <SweepRuleIdParameter>
 [-Confirm]
 [-DestinationFolder <MailboxFolderIdParameter>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-ExceptIfFlagged <Boolean>]
 [-ExceptIfPinned <Boolean>]
 [-KeepForDays <Int32>]
 [-KeepLatest <Int32>]
 [-Mailbox <MailboxIdParameter>]
 [-Name <String>]
 [-Provider <String>]
 [-Sender <RecipientIdParameter>]
 [-SourceFolder <MailboxFolderIdParameter>]
 [-SystemCategory <SystemCategoryType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SweepRule -Identity x2hlsdpGmUifjFgxxGIOJw== -KeepForDays 15 -ExceptIfPinned $true
```

This example modifies the existing rule that has the rule ID value x2hlsdpGmUifjFgxxGIOJw== with the specified value.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the Sweep rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- RuleId property (for example, x2hlsdpGmUifjFgxxGIOJw==).
- Exchange Online: `MailboxAlias\RuleID` (for example, `rzaher\2hlsdpGmUifjFgxxGIOJw==`).
- On-premises Exchange: `MailboxCanonicalName\RuleID` (for example, `contoso.com/Users/Rick Zaher\x2hlsdpGmUifjFgxxGIOJw==`).

You can get these identity values by using the Get-SweepRule cmdlet.

```yaml
Type: SweepRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DestinationFolder

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The DestinationFolder parameter specifies an action for the Sweep rule that moves messages to the specified folder. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

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

Example values for this parameter are `john@contoso.com:\Unimportant` or `John:\Inbox\Misc`. The default value is `MailboxID:\Deleted Items`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFlagged

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ExceptIfFlagged parameter specifies an exception for the Sweep rule that looks messages with a message flag applied. Valid values are:

- $true: The rule action isn't applied to messages that have a message flag applied.
- $false: The exception isn't used.

The typical message flag values are:

- Any
- Call
- DoNotForward
- FollowUp
- ForYourInformation
- Forward
- NoResponseNecessary
- Read
- Reply
- ReplyToAll
- Review

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfPinned

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The PinMessage parameter specifies an exception for the Sweep rule that looks for pinned messages. Valid values are:

- $true: The rule action isn't applied to messages that are pinned to the top of the Inbox.
- $false: The exception isn't used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepForDays

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The KeepForDays parameter specifies an action for the Sweep rule that specifies the number of days to keep messages that match the conditions of the rule. After the number of days have passed, the messages are moved to the location that's specified by the DestinationFolder parameter (by default, the Deleted Items folder).

You can't use this parameter with the KeepLatest parameter, and the Sweep rule must contain a KeepForDays or KeepLatest parameter value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepLatest

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The KeepLatest parameter specifies an action for the Sweep rule that specifies the number of messages to keep that match the conditions of the rule. After the number of messages is exceeded, the oldest messages are moved to the location that's specified by the DestinationFolder parameter (by default, the Deleted Items folder).

You can't use this parameter with the KeepForDays parameter, and the Sweep rule must contain a KeepForDays or KeepLatest parameter value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailbox parameter specifies the mailbox that contains the rule you want to modify. You can use any value that uniquely identifies the mailbox. For example:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the name of the Sweep rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Provider

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Provider parameter specifies the provider for the Sweep rule. If the value contains spaces, enclose the value in quotation marks.

For Sweep rules that you create in Outlook on the web, the default value is Exchange16.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Sender parameter specifies a condition for the Sweep rule that looks for the specified sender in messages. For internal senders, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

For external senders, use their email address.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFolder

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SourceFolder parameter specifies a condition for the Sweep rule that looks for messages in the specified folder. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

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

Example values for this parameter are `john@contoso.com:\Marketing` or `John:\Inbox\Reports`. The default value is `MailboxID:\Inbox`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemCategory

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SystemCategory parameter specifies a condition for the sweep rule that looks for messages with the specified system category. System categories are available to all mailboxes in the organization. Valid values are:

- NotDefined
- Bills
- Document
- DocumentPlus
- Event
- Family
- File
- Flight
- FromContact
- Important
- LiveView
- Lodging
- MailingList
- Newsletter
- Photo
- Purchase
- RentalCar
- RestaurantReservation
- RetiredPromotion
- ShippingNotification
- Shopping
- SocialUpdate
- Travel
- Video

```yaml
Type: SystemCategoryType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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

## OUTPUTS

## NOTES

## RELATED LINKS
