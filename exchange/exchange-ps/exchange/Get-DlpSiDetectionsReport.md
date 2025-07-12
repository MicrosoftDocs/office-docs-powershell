---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpsidetectionsreport
applicable: Exchange Online, Security & Compliance
title: Get-DlpSiDetectionsReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DlpSiDetectionsReport

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

**Note**: This cmdlet will be retired. Use the [Export-ActivityExplorerData](https://learn.microsoft.com/powershell/module/exchange/export-activityexplorerdata) cmdlet to view DLP information. Data from Export-ActivityExplorerData is the same as the retired Get-DlpIncidentDetailReport cmdlet.

Use the Get-DlpSiDetectionsReport cmdlet to view information about data loss prevention (DLP) sensitive information type detections in the Microsoft Purview compliance portal for the last 90 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpSiDetectionsReport [-EndDate <DateTime>]
 [-SensitiveType <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
For the reporting period you specify, the cmdlet returns the following information:

- Organization
- Date
- SensitiveType: The GUID value of the DLP sensitive information type. To match the GUID value to the name of the sensitive information type, replace `<GUID>` with the GUID value and run this command: `Get-DlpSensitiveInformationType -Identity <GUID>`.
- DocumentCount: The number of documents that contain the detected sensitive information type.
- ProtectionStatus: Values are Unprotected (the sensitive information type is not defined in any DLP policy) or Protected (the sensitive information type is defined in a DLP policy).
- DlpComplianceRuleIds: The GUID value of the DLP compliance rule that detected the sensitive information type (for ProtectionStatus values of Protected). To match the GUID value to the name of the DLP compliance rule, replace `<GUID>` with the GUID value and run this command: `Get-DlpComplianceRule -Identity <GUID>`.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DLPSiDetectionsReport
```

This example returns all DLP sensitive information type detections.

### Example 2
```powershell
Get-DLPSiDetectionsReport -SensitiveType 0e9b3178-9678-47dd-a509-37222ca96b42 -EndDate 4/8/2019
```

This example returns detections for the sensitive information type 0e9b3178-9678-47dd-a509-37222ca96b42 (EU Debit Card Number) during the specified date range.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SensitiveType
The SensitiveType parameter filters the results by the specified sensitive information type. A valid value is the GUID of the sensitive information type (for example, 0e9b3178-9678-47dd-a509-37222ca96b42). To find the GUID value of a sensitive information type, run this command: Get-DlpSensitiveInformationType.

You can enter multiple values separated by commas: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

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
