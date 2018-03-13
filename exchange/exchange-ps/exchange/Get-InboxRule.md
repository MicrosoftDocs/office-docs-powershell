---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-InboxRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-InboxRule cmdlet to view Inbox rule properties. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-InboxRule [[-Identity] <InboxRuleIdParameter>] [-DescriptionTimeFormat <String>]
 [-DescriptionTimeZone <ExTimeZoneValue>] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>]
 [-IncludeHidden] [-BypassScopeCheck] [-SweepRules] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-InboxRule -Mailbox Joe@Contoso.com
```

This example retrieves all Inbox rules for the mailbox Joe@Contoso.com.

### Example 2
```
Get-InboxRule "ReceivedLastYear" -Mailbox joe@contoso.com -DescriptionTimeFormat "mm/dd/yyyy" -DescriptionTimeZone "Pacific Standard Time"
```

This example retrieves the Inbox rule ReceivedLastYear from the mailbox joe@contoso.com on which the ReceivedBeforeDate parameter was set when the rule was created. The DescriptionTimeFormat and DescriptionTimeZone parameters are used in this example to specify formatting of the time and the time zone used in the rule's Description property.

## PARAMETERS

### -DescriptionTimeFormat
The DescriptionTimeFormat parameter specifies the format for time values in the rule description. For example:

mm/dd/yyyy, where mm is the 2-digit month, dd is the 2-digit day and yyyy is the 4-digit year.

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

### -DescriptionTimeZone
The DescriptionTimeZone parameter specifies time zone that's used for time values in the rule description.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: $TimeZone = Get-ChildItem "HKLM:\\Software\\Microsoft\\Windows NT\\CurrentVersion\\Time zones" | foreach {Get-ItemProperty $\_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.

```yaml
Type: ExTimeZoneValue
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
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the Inbox rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- RuleIdentity property (for example, 16752869479666417665).

- Exchange Online: \<mailbox alias\>\\\<RuleIdentity\> (for example, rzaher\\16752869479666417665.

- On-premises Exchange: \<mailbox canonical name\>\\\<RuleIdentity\> (for example, contoso.com/Users/Rick Zaher\\16752869479666417665.

```yaml
Type: InboxRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
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

### -IncludeHidden
This parameter is available only in on-premises Exchange.

The IncludeHidden switch specifies whether to include hidden Inbox rules in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassScopeCheck
The BypassScopeCheck switch specifies whether to bypass the scope check for the user that's running the command. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SweepRules
The SweepRules switch specifies whether to return only Sweep rules in the results. You don't need to specify a value with this switch.

Sweep rules run at regular intervals to help keep your Inbox clean.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b02ad57a-460a-4dc2-a521-788cd893c269.aspx)
