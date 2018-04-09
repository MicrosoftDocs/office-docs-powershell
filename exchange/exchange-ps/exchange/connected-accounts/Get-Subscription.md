---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Get-Subscription
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-Subscription

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-Subscription cmdlet to view the properties of an existing subscription configured in a user's cloud-based mailbox. This cmdlet is used by Microsoft Outlook on the web Options to display the list of email subscriptions that the end user has, such as POP, IMAP, Facebook, and LinkedIn.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-Subscription [[-Identity] <AggregationSubscriptionIdParameter>]
 [-AggregationType <Aggregation | Mirrored | Migration | PeopleConnection | All>] [-Confirm] [-IncludeReport]
 [-Mailbox <MailboxIdParameter>] [-ResultSize <Unlimited>]
 [-SubscriptionType <Unknown | Pop | DeltaSyncMail | IMAP | AllEMail | Facebook | LinkedIn | SinaWeibo | Google | Yahoo | Twitter | Skype | AbchType | AllThatSupportSendAs | AllThatSupportPolicyInducedDeletion | AllThatSupportSendAsAndPeopleConnect | All>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can view the properties of the subscription, such as the remote server, authentication method, connection status, and the last time a successful synchronization occurred.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-Subscription -Mailbox "Ayla Kol"
```

This example lists all the subscriptions configured in the mailbox of the user Ayla Kol.

## PARAMETERS

### -AggregationType
The AggregationType parameter filters the results by type. The acceptable values for this parameter are:

- All

- Aggregation

- Migration

- Mirrored

- PeopleConnection

```yaml
Type: Aggregation | Mirrored | Migration | PeopleConnection | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the subscription. You can identify the subscription by using one of the following methods:

- Specify the globally unique identifier of the subscription, which is its canonical name (CN).

- Use the Mailbox parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription.

You can find the identifying values for a subscription, such as Identity and Name, by running this command: Get-Subscription -Mailbox \<mailbox\>.

```yaml
Type: AggregationSubscriptionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeReport
The IncludeReport switch specifies whether to return additional details, which can be used for troubleshooting.

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

### -Mailbox
The Mailbox parameter specifies the cloud-based mailbox that contains the subscription. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionType
The SubscriptionType parameter filters the results based on the type of subscription. Valid values for this parameter are:

- All

- AllEmail

- AllThatSupportPolicyInducedDeletion

- AllThatSupportSendAs

- AllThatSupportSendAsAndPeopleConnect

- DeltaSyncMail

- Facebook

- IMAP

- LinkedIn

- Pop

- Unknown

```yaml
Type: Unknown | Pop | DeltaSyncMail | IMAP | AllEMail | Facebook | LinkedIn | SinaWeibo | Google | Yahoo | Twitter | Skype | AbchType | AllThatSupportSendAs | AllThatSupportPolicyInducedDeletion | AllThatSupportSendAsAndPeopleConnect | All
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a9c74996-557b-4437-9aeb-658449d4d012.aspx)
