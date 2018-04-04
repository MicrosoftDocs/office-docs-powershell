---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-MessageTrackingLog
schema: 2.0.0
---

# Get-MessageTrackingLog

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MessageTrackingLog cmdlet to search for message delivery information stored in the message tracking log.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MessageTrackingLog [-DomainController <Fqdn>] [-End <DateTime>] [-EventId <String>]
 [-InternalMessageId <String>] [-MessageId <String>] [-MessageSubject <String>] [-Recipients <String[]>]
 [-Reference <String>] [-ResultSize <Unlimited>] [-Sender <String>] [-Server <ServerIdParameter>]
 [-Start <DateTime>] [-NetworkMessageId <String>] [-Source <String>] [-TransportTrafficType <String>]
 [<CommonParameters>]
```

## DESCRIPTION
A unique message tracking log exists for the Transport service on a Mailbox server, for the Mailbox Transport service on a Mailbox server, and on an Edge Transport server. The message tracking log is a comma-separated value (CSV) file that contains detailed information about the history of each email message as it travels through an Exchange server.

The field names displayed in the results from the Get-MessageTrackingLog cmdlet are similar to the actual field names used in the message tracking logs. The differences are:

- The dashes are removed from the field names. For example internal-message-id is displayed as InternalMessageId.

- The date-time field is displayed as Timestamp.

- The recipient-address field is displayed as Recipients.

- The sender-address field is displayed as Sender.

For more information about the message tracking log files, see Message tracking (https://technet.microsoft.com/library/bb124375.aspx).

The Get-MessageTrackingLog results are displayed on-screen. You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding "\> \<filename\>" to the command. For example:

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-MessageTrackingLog -Server Mailbox01 -Start "03/13/2015 09:00:00" -End "03/15/2015 17:00:00" -Sender "john@contoso.com"
```

This example searches the message tracking logs on the Mailbox server named Mailbox01 for information about all messages sent from March 13, 2015, 09:00 to March 15, 2015, 17:00 by the sender john@contoso.com.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -End
The End parameter specifies the end date and time of the date range. Message delivery information is returned up to, but not including, the specified date and time.

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

### -EventId
The EventId parameter filters the message tracking log entries by the value of the EventId field. The EventId value classifies classify each message event. Example values include DSN, Defer, Deliver, Send, or Receive.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMessageId
The InternalMessageId parameter filters the message tracking log entries by the value of the InternalMessageId field. The InternalMessageId value is a message identifier that's assigned by the Exchange server that's currently processing the message.

The value of the internal-message-id for a specific message is different in the message tracking log of every Exchange server that's involved in the delivery of the message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId
The MessageId parameter filters the message tracking log entries by the value of the MessageId field. The value of MessageId corresponds to the value of the Message-Id: header field in the message. If the Message-ID header field is blank or doesn't exist, an arbitrary value is assigned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageSubject
The MessageSubject parameter filters the message tracking log entries by the value of the message subject. The value of the MessageSubject parameter automatically supports partial matches without using wildcards or special characters. For example, if you specify the MessageSubject value sea, the results include messages with Seattle in the subject. By default, message subjects are stored in the message tracking logs.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recipients
The Recipients parameter filters the message tracking log entries by the SMTP email address of the message recipients. Multiple recipients in a single message are logged in a single message tracking log entry. Unexpanded distribution group recipients are logged by using the group's SMTP email address. You can specify multiple recipient email addresses separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reference
The Reference parameter filters the message tracking log entries by the value of the Reference field. The Reference field contains additional information for specific types of events. For example, the Reference field value for a DSN message tracking entry contains the InternalMessageId value of the message that caused the DSN. For many types of events, the value of Reference is blank.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender
The Sender parameter filters the message tracking log entries by the sender's SMTP email address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Start
The Start parameter specifies the start date and time of the date range.

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

### -NetworkMessageId
The NetworkMessageId parameter filters the message tracking log entries by the value of the NetworkMessageId field. This field contains a unique message ID value that persists across copies of the message that may be created due to bifurcation or distribution group expansion. An example value is 1341ac7b13fb42ab4d4408cf7f55890f.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
The Source parameter filters the message tracking log entries by the value of the Source field. These values indicate the transport component that's responsible for the message tracking event. For more information, see Source values in the message tracking log (https://technet.microsoft.com/library/bb124375.aspx#Source).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportTrafficType
The TransportTrafficType parameter filters the message tracking log entries by the value of the TransportTrafficType field. However, this field isn't interesting for on-premises Exchange organizations.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/3e0e270a-ba0b-4231-a289-9a940bb63761.aspx)
