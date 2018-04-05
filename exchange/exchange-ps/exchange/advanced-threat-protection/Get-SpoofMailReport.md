---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-SpoofMailReport
schema: 2.0.0
---

# Get-SpoofMailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SpoofMailReport cmdlet to view information about insider spoofing in your cloud-based organization. Insider spoofing is where the sender's email address in an inbound message appears to represent your organization, but the actual identity of the sender is different. Insider spoofing is a common tactic that's used in phishing messages to obtain user credentials or steal money.

This cmdlet is only available in Office 365 Enterprise E5, or with Advanced Threat Protection licenses.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SpoofMailReport [-Action <MultiValuedProperty>] [-Direction <MultiValuedProperty>] [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>]
 [-ProbeTag <String>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The spoof mail report is a feature in Advanced Threat Protection that you can use to query information about insider spoofing detections in the last 30 days. For the reporting period you specify, the Get-SpoofMailReport cmdlet returns the following information:

- Date: Date the message was sent.

- Event Type: Typically, this value is SpoofMail.

- Direction: This value is Inbound.

- Domain: The sender domain. This corresponds to one of your organization's accepted domains.

- Action: Typically, this value is GoodMail or CaughtAsSpam.

- Spoofed Sender: The spoofed email address or domain in your organization from which the messages appear to be coming.

- True Sender: The organizational domain of the PTR record, or pointer record, of the sending IP address, also known as the reverse DNS address. If the sending IP address does not have a PTR record, this field will be blank and the Sender IP column will be filled in. Both columns will not be filled in at the same time.

- Sender IP: The IP address or address range of the source messaging server. If the sending IP address does have a PTR record, this field will be blank and the True Sender column will be filled in. Both columns will not be filled in at the same time.

- Count: The number of spoofed messages that were sent to your organization from the source messaging server during the specified time period.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SpoofMailReport -StartDate 03/01/2016 -EndDate 03/31/2016
```

This example shows the insider spoofing detections in your organization during the month of March 2016.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken by DLP policies, transport rules, malware filtering, or spam filtering. To view the complete list of valid values for this parameter, run the command Get-MailFilterListReport -SelectionTarget Actions. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

Common values for this report are GoodMail and CaughtAsSpam.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Direction
The Direction parameter filters the results by incoming messages. The valid value for this parameter is Inbound.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType
The EventType parameter filters the report by the event type. To view the complete list of valid values for this parameter, run the command Get-MailFilterListReport -SelectionTarget EventTypes. The event type you specify must correspond to the report. For example, you can only specify malware filter events for malware reports.

You can specify multiple values separated by commas.

The common value for this report is SpoofMail.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Expression
This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page
The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/bda4c4d6-d28d-4741-a13b-63c95e183340.aspx)
