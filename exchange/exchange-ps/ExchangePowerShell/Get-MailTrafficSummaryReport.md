---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailtrafficsummaryreport
schema: 2.0.0
title: Get-MailTrafficSummaryReport
---

# Get-MailTrafficSummaryReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficSummaryReport cmdlet to view summary information about message traffic in your organization for the last 90 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailTrafficSummaryReport [-Category <String>]
 [-DlpPolicy <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [-TransportRule <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet has C1, C2 and C3 as header names and the meaning of them depends on the category you choose. Next you can see an explanation about each category:

- InboundTransportRuleHits and OutboundTransportRuleHits: C1 is the transport rule name, C2 the audit level and C3 the hits.
- TopSpamRecipient, TopMailSender, TopMailRecipient and TopMalwareRecipient: C1 is the recipient or sender and C2 the quantity of email messages.
- TopMalware: C1 is the malware name and C2 the quantity of appearances.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailTrafficSummaryReport -Category TopSpamRecipient -StartDate 06/13/2015 -EndDate 06/15/2015
```

This example shows the top spam recipient statistics between June 13, 2015 and June 15, 2015.

## PARAMETERS

### -Category

> Applicable: Exchange Online, Exchange Online Protection

The Category parameter filters the report by category. Valid values are:

- InboundDLPHits
- OutboundDLPHits
- InboundTransportRuleHits
- OutboundTransportRuleHits
- InboundDLPPolicyRuleHits
- OutboundDLPPolicyRuleHits
- TopSpamRecipient
- TopMailSender
- TopMailRecipient
- TopMalwareRecipient
- TopMalwareAtpRecipient
- TopMalware
- TopPhishRecipient
- TopPhishAtpRecipient
- TopIntraOrgRecipient
- TopIntraOrgSender
- TopIntraOrgSpamRecipient
- TopIntraOrgMalwareRecipient
- TopIntraOrgPhishRecipient
- TopIntraOrgPhishAtpRecipient
- TopIntraOrgMalwareAtpRecipient
- TopComplianceTagActivityCount
- TopComplianceTagActivityCountByDay

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

### -DlpPolicy

> Applicable: Exchange Online, Exchange Online Protection

The DlpPolicy parameter filters the report by the name of the data loss prevention (DLP) policy. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

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

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

### -Page

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

### -StartDate

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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
