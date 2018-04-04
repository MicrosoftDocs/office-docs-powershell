---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MailboxCalendarConfiguration
schema: 2.0.0
---

# Get-MailboxCalendarConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxCalendarConfiguration cmdlet to show the calendar settings for a specified mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxCalendarConfiguration [-Identity] <MailboxIdParameter> [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-MailboxCalendarConfiguration cmdlet returns settings for the calendar of the specified mailbox, including the following:

- Workdays: Days that appear in the calendar as work days in Outlook on the web

- WorkingHoursStartTime: Time that the calendar work day starts

- WorkingHoursEndTime: Time that the calendar work day ends

- WorkingHoursTimeZone: Time zone set on the mailbox for the working hours start and end times

- WeekStartDay: First day of the calendar work week

- ShowWeekNumbers: Number for each week ranging from 1 through 52 for the calendar while in month view in Outlook on the web

- TimeIncrement: Increments in minutes in which the calendar displays time in Outlook on the web

- RemindersEnabled: Whether Outlook on the web provides a visual cue when a calendar reminder is due

- ReminderSoundEnabled: Whether a sound is played when a calendar reminder is due

- DefaultReminderTime: Length of time before each meeting or appointment that the calendar in Outlook on the web shows the reminder

To see all of the settings returned, pipeline the command to the Format-List command. To view a code sample, see "Example 1."

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-MailboxCalendarConfiguration -Identity kai | Format-List
```

This example retrieves all the calendar settings for Kai's mailbox where the Identity parameter is specified in the alias format.

### Example 2
```
Get-MailboxCalendarConfiguration -Identity contoso\tony
```

This example uses the Identity parameter specified in the domain\\account format and returns the calendar settings for Tony's mailbox.

### Example 3
```
Get-MailboxCalendarConfiguration -Identity kai -DomainController DC1
```

This example requests that the domain controller DC1 retrieves calendar settings for Kai's mailbox from Active Directory.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

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

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/2a794a69-3029-49df-920c-5d91ecdb057e.aspx)
