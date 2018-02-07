---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Enable-InboxRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Enable-InboxRule cmdlet to enable an Inbox rule. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-InboxRule cmdlet to enable an Inbox rule. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Enable-InboxRule [-Identity] <InboxRuleIdParameter> [-AlwaysDeleteOutlookRulesBlob] [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-Mailbox <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

When you create, modify, remove, enable, or disable an Inbox rule on Microsoft Exchange Server 2010, any client-side rules created by Microsoft Outlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Inbox rules" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

When you create, modify, remove, enable, or disable an Inbox rule on Microsoft Exchange Server 2013, any client-side rules created by Microsoft Outlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Inbox rules" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

When you create, modify, remove, enable, or disable an Inbox rule in Exchange PowerShell, any client-side rules created by MicrosoftOutlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Enable-InboxRule "MoveToJunkMail" -Mailbox "User1"
```

This example enables the Inbox rule MoveToJunkMail for User1. Enclose parameter values, such as Mailbox or InboxRule names that contain spaces, in quotation marks (").

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-InboxRule "Move To Junk Mail" -Mailbox "User 1"
```

This example enables the Inbox rule Move To Junk Mail for User 1. Values for parameters such as the Mailbox or InboxRule parameter that contain spaces must be enclosed in quotation marks (").

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-InboxRule "Move To Junk Mail" -Mailbox "User 1"
```

This example enables the Inbox rule named Move To Junk Mail in the mailbox that belongs to User 1.

### Example 1 -------------------------- (Exchange Online)
```
Enable-InboxRule "Move To Junk Mail" -Mailbox "User 1"
```

This example enables the Inbox rule named Move To Junk Mail in the mailbox that belongs to User 1.

## PARAMETERS

### -Identity
The Identity parameter specifies the display name or GUID of the Inbox rule.

```yaml
Type: InboxRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlwaysDeleteOutlookRulesBlob
The AlwaysDeleteOutlookRulesBlob parameter suppresses a warning that end users or administrators get if they use Outlook Web App or Windows PowerShell to modify Inbox rules.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
!!! Exchange Server 2010

The Force switch specifies whether to suppress the confirmation prompt produced if rules created by Outlook exist on the mailbox. When taking an action using Inbox rules on Exchange 2010, any client-side rules are removed.



!!! Exchange Server 2013

The Force switch specifies whether to suppress the confirmation prompt produced if rules created by Outlook exist on the mailbox. When taking an action using Inbox rules on Exchange 2013, any client-side rules are removed.



!!! Exchange Server 2016, Exchange Online

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

A confirmation prompt warns you if the mailbox contains rules that were created by Outlook, because any client-side rules will be removed by the actions of this cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
!!! Exchange Server 2010, Exchange Server 2013

The Mailbox parameter specifies the identity of the mailbox where the Inbox rule is located. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Mailbox parameter specifies the mailbox that contains the Inbox rule. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e5c09ede-71eb-42d1-9767-c572d6839c47.aspx)

