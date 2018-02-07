---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Search-MessageTrackingReport

## SYNOPSIS
!!! Exchange Server 2010

Use the Search-MessageTrackingReport cmdlet to find the unique message tracking report based on the search criteria provided. You can then pass this message tracking report ID to the Get-MessageTrackingReport cmdlet to get full message tracking information. For more information, see Get-MessageTrackingReport. To learn more about message tracking, see Understanding Message Tracking.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Search-MessageTrackingReport cmdlet to find the unique message tracking report based on the search criteria provided. You can then pass this message tracking report ID to the Get-MessageTrackingReport cmdlet to get full message tracking information. For more information, see Get-MessageTrackingReport. The message tracking report cmdlets are used by the delivery reports feature.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available only in on-premises Exchange.

Use the Search-MessageTrackingReport cmdlet to find the unique message tracking report based on the search criteria provided. You can then pass this message tracking report ID to the Get-MessageTrackingReport cmdlet to get full message tracking information. For more information, see Get-MessageTrackingReport. The message tracking report cmdlets are used by the delivery reports feature.

In Exchange Online, delivery reports has been replaced by message trace (the Get-MessageTrace and Get-MessageTraceDetail cmdlets).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Search-MessageTrackingReport [-Identity] <MailboxIdParameter> -Sender <SmtpAddress> [-BypassDelegateChecking]
 [-Confirm] [-DomainController <Fqdn>] [-DoNotResolve] [-MessageEntryId <String>] [-MessageId <String>]
 [-ResultSize <Unlimited>] [-Subject <String>] [-TraceLevel <Low | Medium | High>] [-WhatIf]
 [<CommonParameters>]
```

### Set1
```
Search-MessageTrackingReport [-Identity] <MailboxIdParameter> [-BypassDelegateChecking] [-Confirm]
 [-DomainController <Fqdn>] [-DoNotResolve] [-MessageEntryId <String>] [-MessageId <String>]
 [-Recipients <SmtpAddress[]>] [-ResultSize <Unlimited>] [-Subject <String>]
 [-TraceLevel <Low | Medium | High>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Message tracking" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Message tracking" entry in the Mail flow permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"
```

This example searches the message tracking report for messages sent from one user to another. This example returns the message tracking report for a message that David Jones sent to Wendy Richardson.

### Example 1 -------------------------- (Exchange Server 2013)
```
Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"
```

This example searches the message tracking report for messages sent from one user to another. This example returns the message tracking report for a message that David Jones sent to Wendy Richardson.

### Example 1 -------------------------- (Exchange Server 2016)
```
Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"
```

This example searches the message tracking report for messages sent from one user to another. This example returns the message tracking report for a message that David Jones sent to Wendy Richardson.

### Example 1 -------------------------- (Exchange Online)
```
Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"
```

This example searches the message tracking report for messages sent from one user to another. This example returns the message tracking report for a message that David Jones sent to Wendy Richardson.

### Example 2 -------------------------- (Exchange Server 2010)
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -BypassDelegateChecking -DoNotResolve
```

This example searches the message tracking report for the following scenario: The user Cigdem Akin was expecting an e-mail message from joe@contoso.com which never arrived. She contacted the Helpdesk, which needs to determine what happened. They need to generate the message tracking report on behalf of Cigdem, and they don't need to see the display names.


This example returns the message tracking reports that the Helpdesk can analyze to resolve the issue.

### Example 2 -------------------------- (Exchange Server 2013)
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -BypassDelegateChecking -DoNotResolve
```

This example searches the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.


This example returns the message tracking reports that the Help desk can analyze to resolve the issue.

### Example 2 -------------------------- (Exchange Server 2016)
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -BypassDelegateChecking -DoNotResolve
```

This example searches the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.


This example returns the message tracking reports that the Help desk can analyze to resolve the issue.

### Example 2 -------------------------- (Exchange Online)
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -BypassDelegateChecking -DoNotResolve
```

This example searches the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.


This example returns the message tracking reports that the Help desk can analyze to resolve the issue.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the name of the mailbox for whom the message tracking report is being searched. The message tracking report only contains the tracking events related to the specified mailbox.

You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the name of the mailbox for whom the message tracking report is being searched. The message tracking report only contains the tracking events related to the specified mailbox.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

The Identity parameter scopes the search to the specified mailbox. You can use any value that uniquely identifies the mailbox.

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

When you use this parameter without the Sender parameter, the specified mailbox is the message sender that's used in the search. You can specify the recipients by using the Recipients parameter.

When you use this parameter with the Sender parameter, the specified mailbox is message recipient that's used in the search.



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

### -Sender
!!! Exchange Server 2010

The Sender parameter specifies the e-mail address of the message sender.

By default, this command searches for messages sent by the user specified in the Identity parameter. If you want to search the message tracking report for a message sent to the user, you must specify the e-mail address of the sender of that message using this parameter.



!!! Exchange Server 2013

The Sender parameter specifies the email address of the message sender.

By default, this command searches for messages sent by the user specified in the Identity parameter. If you want to search the message tracking report for a message sent to the user, you must specify the email address of the sender of that message using this parameter.



!!! Exchange Server 2016, Exchange Online

The Sender parameter specifies the email address of the message sender for messages that are sent to the mailbox that's specified by the Identity parameter.

You need to use this parameter with the Identity parameter.



```yaml
Type: SmtpAddress
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDelegateChecking
!!! Exchange Server 2010

The BypassDelegateChecking parameter allows Help desk staff and administrators to track messages for any user. End-users can only track messages that they send or receive.



!!! Exchange Server 2013

The BypassDelegateChecking switch allows Help desk staff and administrators to track messages for any user. End-users can only track messages that they send or receive. You don't have to specify a value with this switch.



!!! Exchange Server 2016, Exchange Online

The BypassDelegateChecking switch allows Help desk staff and administrators to track messages for any user. You don't need to specify a value with this switch.

By default, users can only track messages that they send or receive from their own mailbox.



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
!!! Exchange Server 2010, Exchange Server 2016, Exchange Online

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013

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

### -DoNotResolve
!!! Exchange Server 2010

The DoNotResolve parameter prevents the resolution of e-mail addresses to display names. This improves performance, but the end result may not be as easy to interpret because it's missing the display names.



!!! Exchange Server 2013

The DoNotResolve switch prevents the resolution of email addresses to display names. This improves performance, but the end result may not be as easy to interpret because it's missing the display names. You don't have to specify a value with this switch.



!!! Exchange Server 2016, Exchange Online

The DoNotResolve switch specifies whether to prevent the resolution of email addresses to display names. You don't need to specify a value with this switch.

Using this switch improves performance, but the lack of display names might make the results more difficult to interpret.



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

### -MessageEntryId
!!! Exchange Server 2010

The MessageEntryId parameter is reserved for internal Microsoft use.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is reserved for internal Microsoft use.



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

### -MessageId
!!! Exchange Server 2010, Exchange Server 2013

The MessageId parameter specifies the Internet message ID of the message for which you want to get the tracking report.



!!! Exchange Server 2016, Exchange Online

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string. This may include angle brackets.



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

### -Recipients
!!! Exchange Server 2010, Exchange Server 2013

The Recipients parameter specifies the recipients for whom you want to get the tracking report.



!!! Exchange Server 2016, Exchange Online

The Recipients parameter filters the results by the email addresses of the specified recipients. You can specify multiple email addresses separated by commas.

You can't use this parameter with the Sender parameter.



```yaml
Type: SmtpAddress[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the maximum number of results to return. If you want to return all messages that match the search criteria, use unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject
!!! Exchange Server 2010, Exchange Server 2013

The Subject parameter specifies text to be used to track messages that have the specified text in their subject lines.



!!! Exchange Server 2016, Exchange Online

The Subject parameter searches for messages with the specified Subject field value. If the value contains spaces, enclosed the value in quotation marks.



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

### -TraceLevel
!!! Exchange Server 2010

The TraceLevel parameter specifies whether additional trace details will be included in the output of the message tracking report. This parameter is intended to be used when troubleshooting message tracking issues.

The acceptable values for the TraceLevel parameter are:

- Low Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts, and any error information.

- Medium In addition to all the data returned for the Low setting, the actual message tracking search results are also returned.

- High Full diagnostic data is returned.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The TraceLevel parameter specifies whether additional trace details will be included in the output of the message tracking report. This parameter is intended to be used when troubleshooting message tracking issues.

The acceptable values for the TraceLevel parameter are:

- Low Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts, and any error information.

- Medium In addition to all the data returned for the Low setting, the actual message tracking search results are also returned.

- High Full diagnostic data is returned.



!!! Exchange Server 2016, Exchange Online

The TraceLevel parameter specifies the details to include in the results. Valid values are:

- Low: Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts, and any error information.

- Medium: In addition to all the data returned for the Low setting, the actual message tracking search results are also returned.

- High: Full diagnostic data is returned.

You only need to use this parameter for troubleshooting message tracking issues.



```yaml
Type: Low | Medium | High
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

[Online Version](https://technet.microsoft.com/library/c7f17296-5489-4e93-ae15-743ba4644efd.aspx)

