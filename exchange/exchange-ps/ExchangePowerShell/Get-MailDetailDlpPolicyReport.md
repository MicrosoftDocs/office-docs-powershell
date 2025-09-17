---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-maildetaildlppolicyreport
schema: 2.0.0
title: Get-MailDetailDlpPolicyReport
---

# Get-MailDetailDlpPolicyReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailDetailDlpPolicyReport cmdlet to view the details of messages that matched the conditions defined by any data loss prevention (DLP) policies. This cmdlet works on messages that were sent within the last seven days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailDetailDlpPolicyReport [-Action <MultiValuedProperty>]
 [-Direction <MultiValuedProperty>]
 [-DlpPolicy <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-MessageId <MultiValuedProperty>]
 [-MessageTraceId <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-RecipientAddress <MultiValuedProperty>]
 [-SenderAddress <MultiValuedProperty>]
 [-StartDate <DateTime>]
 [-TransportRule <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailDetailDlpPolicyReport -StartDate 06/13/2015 -EndDate 06/15/2015 -SenderAddress john@contoso.com
```

This example retrieves the details of messages sent by john@contoso.com that matched the conditions defined by a DLP policy between June 13, 2015 and June 15, 2015.

## PARAMETERS

### -Action

> Applicable: Exchange Online

The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Direction

> Applicable: Exchange Online

The Direction parameter filters the results by incoming or outgoing messages. Valid values are:

- Inbound
- Outbound

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpPolicy

> Applicable: Exchange Online

The DlpPolicy parameter filters the report by the name of the DLP policy. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Exchange Online

The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType

> Applicable: Exchange Online

The EventType parameter filters the report by the event type. Valid values are:

- DLPActionHits
- DLPPolicyFalsePositive
- DLPPolicyHits
- DLPPolicyOverride
- DLPRuleHits

To view the potential list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify DLP event types for DLP reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId

> Applicable: Exchange Online

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTraceId

> Applicable: Exchange Online

The MessageTraceId parameter filters the results by the message trace ID value of the message. This GUID value is generated for every message that's processed by the system (for example, c20e0f7a-f06b-41df-fe33-08d9da155ac1).

You can specify multiple values separated by commas.

The MessageTraceId value is also available in the output of the following cmdlets:

- Get-MailDetailATPReport
- Get-MailDetailEncryptionReport
- Get-MailDetailTransportRuleReport
- Get-MessageTraceV2
- Get-MessageTraceDetailV2

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online

The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeTag

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddress

> Applicable: Exchange Online

The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportRule

> Applicable: Exchange Online

The TransportRule parameter filters the report by the name of the transport rule. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
