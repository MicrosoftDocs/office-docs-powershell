---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-UMCallSummaryReport

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-UMCallSummaryReport cmdlet to return statistics about all calls received or placed by Unified Messaging (UM) servers in an organization.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMCallSummaryReport cmdlet to return statistics about all calls received or placed by Mailbox server running the Microsoft Exchange Unified Messaging service in an organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMCallSummaryReport cmdlet to return statistics about all calls received or placed by Mailbox servers running the Microsoft Exchange Unified Messaging service in an organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMCallSummaryReport -GroupBy <Day | Month | Total> [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [-UMDialPlan <UMDialPlanIdParameter>]
 [-UMIPGateway <UMIPGatewayIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-UMCallSummaryReport cmdlet displays the aggregated statistics about all calls received or placed by Unified Messaging servers in an organization including voice messages, missed calls, subscriber access, auto attendant, or fax calls. The data returned by running this cmdlet includes audio quality metrics for the sample calls such as the following:

- Date: Date in which all calls associated with the selected UM IP gateway and UM dial plan have been grouped based on the value of the GroupBy parameter: Total has the value ---, Month has the value MMM/YY, and Day has the value MM/DD/YY, where MMM is the first three letters of the month and YY is the last two digits of the year.

- Voice Message: Percentage of incoming calls answered by Unified Messaging on behalf of users in which callers left a voice message.

- Missed Calls: Percentage of incoming calls answered by Unified Messaging on behalf of users in which the callers didn't leave a voice message resulting in a missed call notification.

- Outlook Voice Access: Percentage of incoming calls in which users authenticate to Unified Messaging to access their email, calendars, and voice messages.

- Outbound: Percentage of calls placed or transferred by Unified Messaging on behalf of authenticated or unauthenticated users. This property can have the value Find Me, Play On Phone, or Play On Phone Greetings.

- Automated Attendant: Percentage of incoming calls that were answered by auto attendants.

- Fax: Percentage of incoming calls that were redirected to a fax partner.

- Other: Percentage of any other incoming or placed calls that don't fall in any of the previous categories. This is provided to allow different types of calls that might be provided in the future to be accounted for as well. This category includes unauthenticated calls made to pilot numbers.

- Failed Or Rejected: Percentage of calls that either failed or were rejected by the Unified Messaging server for that organization.

- Audio Quality: Overall audio quality for the selected period of time for the organization/user. 4.50 or higher = Excellent, 3.5 to 4.49 = Good, 2.5 to 3.49 = Average, 1.50 to 2.49 =Poor, and 1.49 or lower = Bad.

- Total Calls: If the UM IP gateway is selected, this is the total number of calls grouped for the selected UM IP gateway for the corresponding date, If the UM dial plan control is selected, this is the total number of calls grouped for the selected UM dial plan for the corresponding date, and If the user is selected, this column has the total number of calls for the user.

- Network MOS (NMOS): Average NMOS for the specific UM dial plan or UM IP gateway.

- NMOS Degradation:

- NMOS degradation for the specific UM dial plan or UM IP gateway.:

- Jitter: Average jitter for the specific UM dial plan or UM IP gateway.

- Packet loss: Average packet loss for the specific UM dial plan or UM IP gateway.

- Round Trip: Round trip time (in milliseconds) for the selected UM dial plan or UM IP gateway.

- Burst loss Duration: Average duration of packet loss during bursts of losses for the selected UM dial plan or UM IP gateway.

- Number of samples: Number of calls sampled, when calculating the averages. A sample refers to any call data record that contains at least one of the audio quality metrics.

After this task is completed, a summary report will be displayed for all calls that are processed by Unified Messaging servers in your organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM call data and summary reports" entry in the Unified Messaging Permissions topic.

!!! Exchange Server 2013

The Get-UMCallSummaryReport cmdlet displays the aggregated statistics about all calls received or placed by Mailbox servers running the Microsoft Exchange Unified Messaging service in an organization including voice messages, missed calls, subscriber access, auto attendant, or fax calls. The data returned by running this cmdlet includes audio quality metrics for the sample calls such as the following:

- Date: Date in which all calls associated with the selected UM IP gateway and UM dial plan have been grouped based on the value of the GroupBy parameter: Total has the value ---, Month has the value MMM/YY, and Day has the value MM/DD/YY, where MMM is the first three letters of the month and YY is the last two digits of the year.

- Voice Message: Percentage of incoming calls answered by Unified Messaging on behalf of users in which callers left a voice message.

- Missed Calls: Percentage of incoming calls answered by Unified Messaging on behalf of users in which the callers didn't leave a voice message resulting in a missed call notification.

- Outlook Voice Access: Percentage of incoming calls in which users authenticate to Unified Messaging to access their email, calendars, and voice messages.

- Outbound: Percentage of calls placed or transferred by Unified Messaging on behalf of authenticated or unauthenticated users. This property can have the value Find Me, Play On Phone, or Play On Phone Greetings.

- Automated Attendant: Percentage of incoming calls that were answered by auto attendants.

- Fax: Percentage of incoming calls that were redirected to a fax partner.

- Other: Percentage of any other incoming or placed calls that don't fall in any of the previous categories. This is provided to allow different types of calls that might be provided in the future to be accounted for as well. This category includes unauthenticated calls made to pilot numbers.

- Failed Or Rejected: Percentage of calls that either failed or were rejected by the Mailbox server for that organization.

- Audio Quality: Overall audio quality for the selected period of time for the organization/user. 4.50 or higher = Excellent, 3.5 to 4.49 = Good, 2.5 to 3.49 = Average, 1.50 to 2.49 =Poor, and 1.49 or lower = Bad.

- Total Calls: If the UM IP gateway is selected, this is the total number of calls grouped for the selected UM IP gateway for the corresponding date, If the UM dial plan control is selected, this is the total number of calls grouped for the selected UM dial plan for the corresponding date, and If the user is selected, this column has the total number of calls for the user.

- Network MOS (NMOS): Average NMOS for the specific UM dial plan or UM IP gateway.

- NMOS Degradation:

- NMOS degradation for the specific UM dial plan or UM IP gateway.:

- Jitter: Average jitter for the specific UM dial plan or UM IP gateway.

- Packet loss: Average packet loss for the specific UM dial plan or UM IP gateway.

- Round Trip: Round trip time (in milliseconds) for the selected UM dial plan or UM IP gateway.

- Burst loss Duration: Average duration of packet loss during bursts of losses for the selected UM dial plan or UM IP gateway.

- Number of samples: Number of calls sampled, when calculating the averages. A sample refers to any call data record that contains at least one of the audio quality metrics.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM call data and summary reports" entry in the Unified Messaging permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-UMCallSummaryReport cmdlet displays the aggregated statistics about all calls received or placed by Mailbox servers running the Microsoft Exchange Unified Messaging service in an organization including voice messages, missed calls, subscriber access, auto attendant, or fax calls. The data returned by running this cmdlet includes audio quality metrics for the sample calls such as the following:

- Date: Date in which all calls associated with the selected UM IP gateway and UM dial plan have been grouped based on the value of the GroupBy parameter: Total has the value ---, Month has the value MMM/YY, and Day has the value MM/DD/YY, where MMM is the first three letters of the month and YY is the last two digits of the year.

- Voice Message: Percentage of incoming calls answered by Unified Messaging on behalf of users in which callers left a voice message.

- Missed Calls: Percentage of incoming calls answered by Unified Messaging on behalf of users in which the callers didn't leave a voice message resulting in a missed call notification.

- Outlook Voice Access: Percentage of incoming calls in which users authenticate to Unified Messaging to access their email, calendars, and voice messages.

- Outbound: Percentage of calls placed or transferred by Unified Messaging on behalf of authenticated or unauthenticated users. This property can have the value Find Me, Play On Phone, or Play On Phone Greetings.

- Automated Attendant: Percentage of incoming calls that were answered by auto attendants.

- Fax: Percentage of incoming calls that were redirected to a fax partner.

- Other: Percentage of any other incoming or placed calls that don't fall in any of the previous categories. This is provided to allow different types of calls that might be provided in the future to be accounted for as well. This category includes unauthenticated calls made to pilot numbers.

- Failed Or Rejected: Percentage of calls that either failed or were rejected by the Mailbox server for that organization.

- Audio Quality: Overall audio quality for the selected period of time for the organization/user. 4.50 or higher = Excellent, 3.5 to 4.49 = Good, 2.5 to 3.49 = Average, 1.50 to 2.49 =Poor, and 1.49 or lower = Bad.

- Total Calls: If the UM IP gateway is selected, this is the total number of calls grouped for the selected UM IP gateway for the corresponding date, If the UM dial plan control is selected, this is the total number of calls grouped for the selected UM dial plan for the corresponding date, and If the user is selected, this column has the total number of calls for the user.

- Network MOS (NMOS): Average NMOS for the specific UM dial plan or UM IP gateway.

- NMOS Degradation:

- NMOS degradation for the specific UM dial plan or UM IP gateway.:

- Jitter: Average jitter for the specific UM dial plan or UM IP gateway.

- Packet loss: Average packet loss for the specific UM dial plan or UM IP gateway.

- Round Trip: Round trip time (in milliseconds) for the selected UM dial plan or UM IP gateway.

- Burst loss Duration: Average duration of packet loss during bursts of losses for the selected UM dial plan or UM IP gateway.

- Number of samples: Number of calls sampled, when calculating the averages. A sample refers to any call data record that contains at least one of the audio quality metrics.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-UMCallSummaryReport -GroupBy Total
```

This example displays the statistics for all calls received or placed by Unified Messaging servers in the organization.

### EXAMPLE 1 -------------------------- (Exchange Server 2013)
```
Get-UMCallSummaryReport -GroupBy Total
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-UMCallSummaryReport -GroupBy Total
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-UMCallSummaryReport -GroupBy Total
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-UMCallSummaryReport -GroupBy Month
```

This example displays the statistics for all calls received or placed by Unified Messaging servers in the organization over the last 12 months.

### EXAMPLE 2 -------------------------- (Exchange Server 2013)
```
Get-UMCallSummaryReport -GroupBy Month
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 12 months.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-UMCallSummaryReport -GroupBy Month
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 12 months.

### Example 2 -------------------------- (Exchange Online)
```
Get-UMCallSummaryReport -GroupBy Month
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 12 months.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-UMCallSummaryReport -GroupBy Day
```

This example displays the statistics for all calls received or placed by Unified Messaging servers in the organization over the last 90 days.

### EXAMPLE 3 -------------------------- (Exchange Server 2013)
```
Get-UMCallSummaryReport -GroupBy Day
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 90 days.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-UMCallSummaryReport -GroupBy Day
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 90 days.

### Example 3 -------------------------- (Exchange Online)
```
Get-UMCallSummaryReport -GroupBy Day
```

This example displays the statistics for all calls received or placed by Mailbox servers in the organization over the last 90 days.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-UMCallSummaryReport -GroupBy Month -UMDialplan MyUMDialPlan
```

This example displays the statistics for calls received or placed by Unified Messaging servers for the UM dial plan MyUMDialPlan.

### EXAMPLE 4 -------------------------- (Exchange Server 2013)
```
Get-UMCallSummaryReport -GroupBy Month -UMDialplan MyUMDialPlan
```

This example displays the statistics for calls received or placed by Mailbox servers for the UM dial plan MyUMDialPlan.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-UMCallSummaryReport -GroupBy Month -UMDialplan MyUMDialPlan
```

This example displays the statistics for calls received or placed by Mailbox servers for the UM dial plan MyUMDialPlan.

### Example 4 -------------------------- (Exchange Online)
```
Get-UMCallSummaryReport -GroupBy Month -UMDialplan MyUMDialPlan
```

This example displays the statistics for calls received or placed by Mailbox servers for the UM dial plan MyUMDialPlan.

## PARAMETERS

### -GroupBy
!!! Exchange Server 2010

The GroupBy parameter displays the daily statistics for the last 90 days, monthly statistics for the last 12 months, or a summary of all call statistics for your Unified Messaging servers in your organization.



!!! Exchange Server 2013

The GroupBy parameter displays the daily statistics for the last 90 days, monthly statistics for the last 12 months, or a summary of all call statistics for your Mailbox servers running the Microsoft Exchange Unified Messaging service in your organization.



!!! Exchange Server 2016, Exchange Online

The GroupBy parameter specifies how to return the results. Valid values are:

- Day: Daily statistics for the last 90 days.

- Month: Monthly statistics for the last 12 months.

- Total: A summary of all call statistics for your Mailbox servers running the Microsoft Exchange Unified Messaging service in your organization.



```yaml
Type: Day | Month | Total
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
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

### -Organization
The Organization parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the Unified Messaging (UM) dial plan to show statistics for. If you don't specify a dial plan, statistics are included for all dial plans in the organization.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIPGateway
The UMIPGateway parameter specifies the UM IP gateway to show statistics for. If you don't specify a UM IP gateway, statistics are included for all UM IP gateways for a selected dial plan, or, if no dial plan is selected, results will be returned for all UM IP gateways in the organization.

```yaml
Type: UMIPGatewayIdParameter
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

[Online Version](https://technet.microsoft.com/library/fb22cc49-03b7-47f1-9cfb-e05acdcc93d6.aspx)

