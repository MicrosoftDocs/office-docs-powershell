---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-AgentLog

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AgentLog cmdlet to parse log files that you specify as parameters and collect raw statistics from the filtering that anti-spam agents apply during a time period that you specify.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-AgentLog cmdlet to parse log files that you specify as parameters and collect raw statistics from the filtering that anti-spam agents apply during a time period that you specify.

## SYNTAX

```
Get-AgentLog [-EndDate <DateTime>] [-Location <LocalLongFullPath>] [-StartDate <DateTime>]
 [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AgentLog -StartDate "01/04/2010 9:00:00 AM" -EndDate "01/08/2010 6:00:00 PM"
```

This example returns a report that has statistics collected between 09:00 (9 A.M.), January 4, 2010 and 18:00 (6 P.M.), January 8, 2010.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AgentLog -StartDate "01/04/2010 9:00:00 AM" -EndDate "01/08/2010 6:00:00 PM" -TransportService FrontEnd
```

This example returns a report that has statistics collected between 09:00 (9 A.M.), January 4, 2010 and 18:00 (6 P.M.), January 8, 2010 in the Front End Transport service on a Client Access server.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AgentLog -StartDate "01/04/2015 9:00:00 AM" -EndDate "01/08/2015 6:00:00 PM" -TransportService FrontEnd
```

This example returns a report that has statistics collected between 09:00 (9 A.M.), January 4, 2015 and 18:00 (6 P.M.), January 8, 2015 in the Front End Transport service.

## PARAMETERS

### -EndDate
!!! Exchange Server 2010, Exchange Server 2013

The EndDate parameter specifies the date and time that you want to stop collecting statistics. The default time is the current time. When you enter a specific date, use the short date format defined in the Regional Options settings configured on the local computer. For example, if your computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, for example, 10/05/2010. Or you can enter the date and time of day. If you enter a time of day and date, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00:00 PM".



!!! Exchange Server 2016

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Location
!!! Exchange Server 2010

The Location parameter specifies the directory that contains the log files that you can use to build usage reports. The default path is C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\AgentLog. You must enter the file path in quotation marks ("), for example, "C:\\Program Files\\Microsoft\\Exchange Server\\V14\\TransportRoles\\Logs\\AgentLog".



!!! Exchange Server 2013

The Location parameter specifies the directory that contains the log files that you can use to build usage reports. The default path is %ExchangeInstallPath%TransportRoles\\Logs\\AgentLog. You must enclose the file path in quotation marks (").



!!! Exchange Server 2016

The Location parameter specifies the directory that contains the log files that you can use to build usage reports. The default path is %ExchangeInstallPath%TransportRoles\\Logs\\AgentLog. You need to enclose the file path in quotation marks (").



```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
!!! Exchange Server 2010, Exchange Server 2013

The StartDate parameter specifies the date and time that the collection of statistics starts. The default time is the current time. When you enter a specific date, use the short date format defined in the Regional Options settings configured on the local computer. For example, if your computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, for example, 10/05/2010, or you can enter the date and time of day. If you enter a time of day and date, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00:00 PM".



!!! Exchange Server 2016

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportService
!!! Exchange Server 2013

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Client Access servers.

- Edge on Edge Transport servers.



!!! Exchange Server 2016

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Mailbox servers.

- Edge on Edge Transport servers.



```yaml
Type: Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/0e3fcbd0-8f76-44e0-91ce-788a224e1e82.aspx)

