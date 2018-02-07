---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-JournalRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-JournalRule cmdlet to modify an existing journal rule on a Hub Transport server.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-JournalRule cmdlet to modify an existing journal rule in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-JournalRule [-Identity] <RuleIdParameter> [-Confirm] [-DomainController <Fqdn>] [-ExpiryDate <DateTime>]
 [-FullReport <$true | $false>] [-JournalEmailAddress <RecipientIdParameter>] [-LawfulInterception]
 [-Name <String>] [-Recipient <SmtpAddress>] [-Scope <Internal | External | Global>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-JournalRule cmdlet modifies an existing journal rule used by the Journaling agent on Hub Transport servers.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Journaling" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

The Set-JournalRule cmdlet modifies an existing journal rule used in your organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Journaling" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

The Set-JournalRule cmdlet modifies an existing journal rule used in your organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-JournalRule "Consolidated Messenger" -JournalEmailAddress "ArchiveMailbox@contoso.com"
```

This example modifies the journal e-mail address to which journal reports are sent by the existing journal rule Consolidated Messenger.


The Identity parameter is a positional parameter. When using positional parameters in a command, you can omit the parameter label. For more information about parameters, see Parameters.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-JournalRule "Consolidated Messenger" -JournalEmailAddress "ArchiveMailbox@contoso.com"
```

This example modifies the journal email address to which journal reports are sent by the existing journal rule Consolidated Messenger.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-JournalRule "Consolidated Messenger" -JournalEmailAddress "ArchiveMailbox@contoso.com"
```

This example modifies the journal email address to which journal reports are sent by the existing journal rule Consolidated Messenger.

### Example 1 -------------------------- (Exchange Online)
```
Set-JournalRule "Consolidated Messenger" -JournalEmailAddress "ArchiveMailbox@contoso.com"
```

This example modifies the journal email address to which journal reports are sent by the existing journal rule Consolidated Messenger.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-JournalRule | Set-JournalRule -JournalEmailAddress "Archive Mailbox"
```

This example modifies the journal e-mail address for all journal rules. The Get-JournalRule cmdlet is used to retrieve all journal rules. The results are piped to the Set-JournalRule cmdlet to modify the journal recipient.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-JournalRule | Set-JournalRule -JournalEmailAddress "Archive Mailbox"
```

This example modifies the journal email address for all journal rules. The Get-JournalRule cmdlet is used to retrieve all journal rules. The results are piped to the Set-JournalRule cmdlet to modify the journal recipient.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-JournalRule | Set-JournalRule -JournalEmailAddress "Archive Mailbox"
```

This example modifies the journal email address for all journal rules. The Get-JournalRule cmdlet is used to retrieve all journal rules. The results are piped to the Set-JournalRule cmdlet to modify the journal recipient.

### Example 2 -------------------------- (Exchange Online)
```
Get-JournalRule | Set-JournalRule -JournalEmailAddress "Archive Mailbox"
```

This example modifies the journal email address for all journal rules. The Get-JournalRule cmdlet is used to retrieve all journal rules. The results are piped to the Set-JournalRule cmdlet to modify the journal recipient.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the GUID or name of the rule to be modified.

The Identity parameter is a positional parameter. When using positional parameters in a command, you can omit the parameter label.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Identity parameter specifies the name or GUID of the rule you want to modify.

The Identity parameter is a positional parameter. When using positional parameters in a command, you can omit the parameter label.



```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -ExpiryDate
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The ExpiryDate parameter specifies when a journal rule that has lawful interception enabled should expire.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullReport
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The FullReport parameter specifies that if the LawfulInterception parameter is enabled, e-mail message content is journaled. If you don't specify this parameter, only the message header is journaled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalEmailAddress
The JournalEmailAddress parameter specifies a journal recipient. Journal reports for the specified rule are sent to the journal recipient.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LawfulInterception
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The LawfulInterception parameter specifies that this journal rule is being used to conduct interception for a legal purpose, such as a search warrant. To use this parameter, you must also specify the Recipient parameter. Journal rules that have lawful interception enabled aren't written to the organization container of the tenant organization. Instead, they're written to the organization container of the hosting organization and therefore aren't viewable by the tenant organization.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the journal rule. The name of the rule can be up to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recipient
The Recipient parameter specifies the SMTP address of a mailbox, contact, or distribution group to journal. If you specify a distribution group, all recipients in that distribution group are journaled. All messages sent to or received from a recipient are journaled.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
!!! Exchange Server 2010

The Scope parameter specifies the scope of e-mail messages to which the journal rule is applied. You can use the following values:

- Global Global rules process all e-mail messages that pass through a Hub Transport server. This includes e-mail messages that were already processed by the external and internal rules. The default value is Global.

- Internal Internal rules process e-mail messages sent to and received by recipients in the Microsoft Exchange Server 2010 organization.

- External External rules process e-mail messages sent to recipients or from senders outside the Exchange 2010 organization.



!!! Exchange Server 2013

The Scope parameter specifies the scope of email messages to which the journal rule is applied. You can use the following values:

- Global Global rules process all email messages that pass through a Transport service. This includes email messages that were already processed by the external and internal rules.

- Internal Internal rules process email messages sent to and received by recipients in your organization.

- External External rules process email messages sent to recipients or from senders outside your organization.



!!! Exchange Server 2016, Exchange Online

The Scope parameter specifies the scope of email messages to which the journal rule is applied. You can use the following values:

- Global: Global rules process all email messages that pass through a Transport service. This includes email messages that were already processed by the external and internal rules.

- Internal: Internal rules process email messages sent to and received by recipients in your organization.

- External: External rules process email messages sent to recipients or from senders outside your organization.



```yaml
Type: Internal | External | Global
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

[Online Version](https://technet.microsoft.com/library/e72562c6-64d2-43c3-81b0-062e7d7b28c9.aspx)

