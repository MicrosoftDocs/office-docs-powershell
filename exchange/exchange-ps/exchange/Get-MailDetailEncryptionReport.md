---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-maildetailencryptionreport
applicable: Exchange Online, Security & Compliance Center
title: Get-MailDetailEncryptionReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-MailDetailEncryptionReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailDetailEncryptionReport cmdlet to view the details of encryption in your cloud-based organization for the last 10 days.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailDetailEncryptionReport
 [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <System.DateTime>]
 [-EventType <MultiValuedProperty>]
 [-MessageId <MultiValuedProperty>]
 [-MessageTraceId <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <System.DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
For the reporting period you specify, the cmdlet returns the following default information:

- DateTime
- Message ID
- Message Trace ID

If you append the command with ` | Format-List`, the following additional information is returned:

- Domain
- Direction
- Recipient Address
- Sender IP
- Sender Address
- Message Size
- Subject

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailDetailEncryptionReport -StartDate 12/13/2021 -EndDate 12/15/2021
```

This example retrieves encryption details for messages between December 13, 2021 and December 15, 2021.

## PARAMETERS

### -AggregateBy
The AggregateBy parameter specifies the reporting period. Valid values are Hour, Day, or Summary. The default value is Day.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Direction
The Direction parameter filters the results by incoming or outgoing messages. Valid values are Inbound and Outbound.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType
The EventType parameter filters the report by the event type. Valid values are:

- EncryptionManual
- EncryptionPolicy

To view the potential list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type must correspond to the report.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId
The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTraceId
The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

You can specify ultiple values separate by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

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
Applicable: Exchange Online, Security & Compliance Center

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
Applicable: Exchange Online, Security & Compliance Center

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
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
