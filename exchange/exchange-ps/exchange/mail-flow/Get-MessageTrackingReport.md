---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MessageTrackingReport
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-MessageTrackingReport

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MessageTrackingReport cmdlet to return data for a specific message tracking report. This cmdlet is used by the delivery reports feature.

In Exchange Online, delivery reports has been replaced by message trace (the Get-MessageTrace and Get-MessageTraceDetail cmdlets).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MessageTrackingReport [-Identity] <MessageTrackingReportId> [-BypassDelegateChecking]
 [-DetailLevel <Basic | Verbose>] [-DomainController <Fqdn>] [-DoNotResolve]
 [-RecipientPathFilter <SmtpAddress>] [-Recipients <String[]>] [-ReportTemplate <Summary | RecipientPath>]
 [-ResultSize <Unlimited>] [-Status <Unsuccessful | Pending | Delivered | Transferred | Read>]
 [-TraceLevel <Low | Medium | High>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the ID for the message tracking report that you want to view. Therefore, first you need to use the Search-MessageTrackingReport cmdlet to find the message tracking report ID for a specific message, and then pass the results to this cmdlet. For more information, see Search-MessageTrackingReport.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Temp = Search-MessageTrackingReport -Identity "David Jones" -Recipients "wendy@contoso.com"; Get-MessageTrackingReport -Identity $Temp.MessageTrackingReportID -ReportTemplate Summary
```

This example gets the message tracking report for messages sent from one user to another. This example returns the summary of the message tracking report for a message that David Jones sent to Wendy Richardson.

### -------------------------- Example 2 --------------------------
```
Search-MessageTrackingReport -Identity "Cigdem Akin" -Sender "joe@contoso.com" -ByPassDelegateChecking -DoNotResolve | ForEach-Object { Get-MessageTrackingReport -Identity $_.MessageTrackingReportID -DetailLevel Verbose -BypassDelegateChecking -DoNotResolve -RecipientPathFilter "cigdem@fabrikam.com" -ReportTemplate RecipientPath }
```

This example gets the message tracking report for the following scenario: The user Cigdem Akin was expecting an email message from joe@contoso.com that never arrived. She contacted the Help desk, which needs to generate the message tracking report on behalf of Cigdem and doesn't need to see the display names.

This example searches the message tracking data for the specific message tracking reports and then returns detailed troubleshooting information for the specific recipient path.

## PARAMETERS

### -Identity
The Identity parameter specifies the message tracking report ID that you want to view.

You need to run the Search-MessageTrackingReport cmdlet to find the message tracking report ID for the specific message that you're tracking, and then pass the value of the MessageTrackingReportID field to this parameter.

```yaml
Type: MessageTrackingReportId
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassDelegateChecking
The BypassDelegateChecking switch allows Help desk staff and administrators to retrieve message tracking reports for any user. You don't need to specify a value with this switch.

By default, each user can only see the message tracking reports for messages that they send or receive from their own mailbox. When you use this switch, you can view the message tracking reports for message exchanges among other users.

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

### -DetailLevel
The DetailLevel parameter specifies the amount of detail to return in the results. Valid values are:

- Basic: Simple delivery report information is returned, which is more appropriate for users.

- Verbose: Full report information is returned, including server names and physical topology information.

```yaml
Type: Basic | Verbose
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotResolve
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

### -RecipientPathFilter
The RecipientPathFilter parameter specifies the email address of the recipient when you use the ReportTemplate parameter with the value RecipientPath.

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

### -Recipients
The Recipients parameter specifies the email addresses of the recipients when you use the ReportTemplate parameter with the value Summary. You can specify multiple email addresses separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportTemplate
The ReportTemplate parameter specifies a predefined format for the output. Valid values are:

- RecipientPath: Returns a detailed tracking report for one recipient of the message. You specify the recipient by using the RecipientPathFilter parameter.

- Summary: Returns a summary for all recipients of the message. You specify the recipients by using the Recipients parameter.

```yaml
Type: Summary | RecipientPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter filters the results by the specified delivery status codes. Valid values are:

- Delivered

- Read

- Pending

- Transferred

- Unsuccessful

```yaml
Type: Unsuccessful | Pending | Delivered | Transferred | Read
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
The TraceLevel parameter specifies the details to include in the results. Valid values are:

- Low: Minimal additional data is returned, including servers that were accessed, timing, message tracking search result counts and any error information.

- Medium: In addition to the data returned for the Low setting, the actual message tracking search results are also returned.

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

[Online Version](https://technet.microsoft.com/library/b949297c-843b-4eb6-9e5e-378c84b841a3.aspx)
