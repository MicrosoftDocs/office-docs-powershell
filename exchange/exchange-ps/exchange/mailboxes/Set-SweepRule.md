---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2016, Exchange Online
title: Set-SweepRule
schema: 2.0.0
---

# Set-SweepRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-SweepRule cmdlet to modify Sweep rules in mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-SweepRule [-Identity] <SweepRuleIdParameter> [-Confirm] [-DestinationFolder <MailboxFolderIdParameter>]
 [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-ExceptIfFlagged <$true | $false>]
 [-ExceptIfPinned <$true | $false>] [-KeepForDays <Int32>] [-KeepLatest <Int32>]
 [-Mailbox <MailboxIdParameter>] [-Name <String>] [-Provider <String>] [-Sender <RecipientIdParameter>]
 [-SourceFolder <MailboxFolderIdParameter>]
 [-SystemCategory <NotDefined | FromContact | Newsletter | Photo | SocialUpdate | Video | Document | File | MailingList | ShippingNotification | LiveView | DocumentPlus | Important | Family | Bills | Shopping | Travel | Flight | RestaurantReservation | Lodging | RentalCar | Purchase | Event | RetiredPromotion>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-SweepRule -Identity x2hlsdpGmUifjFgxxGIOJw== -KeepForDays 15 -ExceptIfPinned $true
```

This example modifies the existing rule that has the rule ID value x2hlsdpGmUifjFgxxGIOJw== with the specified value.

## PARAMETERS

### -Identity
The Identity parameter specifies the Sweep rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- RuleId property (for example, x2hlsdpGmUifjFgxxGIOJw==).

- Exchange Online: \<mailbox alias\>\\\<RuleId\> (for example, rzaher\\x2hlsdpGmUifjFgxxGIOJw==.

- On-premises Exchange: \<mailbox canonical name\>\\\<RuleId\> (for example, contoso.com/Users/Rick Zaher\\x2hlsdpGmUifjFgxxGIOJw==.

You can get these identity values by using the Get-SweepRule cmdlet.

```yaml
Type: SweepRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DestinationFolder
The DestinationFolder parameter specifies an action for the Sweep rule that moves messages to the specified folder based on the conditions of the rule.

The default value is Deleted Items.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFlagged
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfPinned
The PinMessage parameter specifies an exception for the Sweep rule that looks for pinned messages. Valid values are:

- $true: The rule action isn't applied to messages that are pinned to the top of the Inbox.

- $false: The exception isn't used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepForDays
The KeepForDays parameter specifies an action for the Sweep rule that specifies the number of days to keep messages that match the conditions of the rule. After the number of days have passed, the messages are moved to the location that's specified by the DestinationFolder parameter (by default, the Deleted Items folder).

You can't use this parameter with the KeepLatest parameter, and the Sweep rule must contain a KeepForDays or KeepLatest parameter value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepLatest
The KeepLatest parameter specifies an action for the Sweep rule that specifies the number of messages to keep that match the conditions of the rule. After the number of messages is exceeded, the oldest messages are moved to the location that's specified by the DestinationFolder parameter (by default, the Deleted Items folder).

You can't use this parameter with the KeepForDays parameter, and the Sweep rule must contain a KeepForDays or KeepLatest parameter value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox that contains the rule you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the Sweep rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Provider
The Provider parameter specifies the provider for the Sweep rule. If the value contains spaces, enclose the value in quotation marks.

For Sweep rules that you create in Outlook on the web, the default value is Exchange16.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender
The Sender parameter specifies a condition for the Sweep rule that looks for the specified sender in messages. For internal senders, you can use any value that uniquely identifies the sender.

For example:

- Name

- Display name

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
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFolder
The SourceFolder parameter specifies a condition for the Sweep rule that looks for messages in the specified folder.

The default value is Inbox.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemCategory
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
Type: NotDefined | FromContact | Newsletter | Photo | SocialUpdate | Video | Document | File | MailingList | ShippingNotification | LiveView | DocumentPlus | Important | Family | Bills | Shopping | Travel | Flight | RestaurantReservation | Lodging | RentalCar | Purchase | Event | RetiredPromotion
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/d8c929db-9ec4-4f75-b79d-f5297bf9e8e1.aspx)
