---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-advancedthreatprotectiondocumentdetail
applicable: Exchange Online, Exchange Online Protection
title: Get-AdvancedThreatProtectionDocumentDetail
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-AdvancedThreatProtectionDocumentDetail

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet will be deprecated. Use the [Get-ContentMalwareMdoDetailReport](https://learn.microsoft.com/powershell/module/exchange/get-contentmalwaremdodetailreport) cmdlet instead.

Use the Get-AdvancedThreatProtectionDocumentDetailReport cmdlet to view the detailed results of Safe Attachments for SharePoint, OneDrive, and Microsoft Teams in your Microsoft Defender for Office 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AdvancedThreatProtectionDocumentDetail [-Action <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
For the reporting period and organization you specify, the cmdlet returns the following information:

- Action
- Document Id
- Domain
- Event Type
- File Hash
- File Name
- File Path
- Size
- Timestamp
- Workload

For more information about this feature, see [Safe Attachments for SharePoint, OneDrive, and Microsoft Teams](https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-attachments-for-spo-odfb-teams-about).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AdvancedThreatProtectionDocumentDetail -Organization contoso.com -StartDate "4/26/2016" -EndDate "4/28/2016" | Format-Table
```

This example returns the detailed report of detections during the specified date range.

## PARAMETERS

### -Action
The Action parameter filters the results by the action taken on the attachment or link. Valid values are:

- Allow
- BlockAccess

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

### -Domain
The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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
The EventType parameter filters the report by the event type. Valid values are:

- Advanced Threat Protection
- Advanced Threat Protection clean
- Anti-malware engine
- Anti-malware engine clean

You can specify multiple values separated by commas.

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

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
