---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/export-activityexplorerdata
applicable: Security & Compliance
title: Export-ActivityExplorerData
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Export-ActivityExplorerData

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Export-ActivityExplorerData cmdlet to export activities from Data classification \> Activity Explorer in the Microsoft 365 Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-ActivityExplorerData -EndTime <DateTime> -OutputFormat <String> -StartTime <DateTime>
 [-Filter1 <String[]>]
 [-Filter2 <String[]>]
 [-Filter3 <String[]>]
 [-Filter4 <String[]>]
 [-Filter5 <String[]>]
 [-PageCookie <String>]
 [-PageSize <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports following filters:

- Activity
- Application
- ArtifactType
- ClientIP
- ColdScanPolicyId
- CopilotAppHost
- CopilotThreadId
- CopilotType
- CreationTime
- DataState
- DestinationFilePath
- DestinationLocationType
- DeviceName
- DLPPolicyId
- DLPPolicyRuleId
- EmailReceiver
- EmailSender
- EndpointOperation
- EnforcementMode
- FalsePositive
- FileExtension
- GeneralPurposeComparison
- HowApplied
- HowAppliedDetail
- IrmUrlCategory
- IsProtected
- IsProtectedBefore
- ItemName
- LabelEventType
- Location
- MDATPDeviceId
- OriginatingDomain
- PageSize
- ParentArchiveHash
- Platform
- PolicyId
- PolicyMode
- PolicyName
- PolicyRuleAction
- PolicyRuleId
- PolicyRuleName
- PreviousFileName
- PreviousProtectionOwner
- ProtectionEventType
- ProtectionOwner
- RemovableMediaDeviceManufacturer
- RemovableMediaDeviceModel
- RemovableMediaDeviceSerialNumber
- RetentionLabel
- RMSEncrypted
- SensitiveInfoTypeClassifierType
- SensitiveInfoTypeConfidence
- SensitiveInfoTypeCount
- SensitiveInfoTypeId
- SensitivityLabel
- SensitivityLabelPolicy
- Sha1
- Sha256
- SourceLocationType
- TargetDomain
- TargetPrinterName
- User
- UsersPerDay
- Workload

Valid workload filters include the following values:

- Copilot
- Endpoint
- Exchange
- OnPremisesFileShareScanner
- OnPremisesSharePointScanner
- OneDrive
- PowerBI
- PurviewDataMap
- SharePoint

Valid activity filters include the following values:

- AIAppInteraction
- ArchiveCreated
- AutoLabelingSimulation
- BrowseToUrl
- ChangeProtection
- ClassificationAdded
- ClassificationDeleted
- ClassificationUpdated
- CopilotInteraction
- DLPInfo
- DLPRuleEnforce
- DLPRuleMatch
- DLPRuleUndo
- DlpClassification
- DownloadFile
- DownloadText
- FileAccessedByUnallowedApp
- FileArchived
- FileCopiedToClipboard
- FileCopiedToNetworkShare
- FileCopiedToRemoteDesktopSession
- FileCopiedToRemovableMedia
- FileCreated
- FileCreatedOnNetworkShare
- FileCreatedOnRemovableMedia
- FileDeleted
- FileDiscovered
- FileModified
- FilePrinted
- FileRead
- FileRenamed
- FileTransferredByBluetooth
- FileUploadedToCloud
- LabelApplied
- LabelChanged
- LabelRecommended
- LabelRecommendedAndDismissed
- LabelRemoved
- NewProtection
- PastedToBrowser
- RemoveProtection
- ScreenCapture
- UploadFile
- UploadText
- WebpageCopiedToClipboard
- WebpagePrinted
- WebpageSavedToLocal

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Export-ActivityExplorerData -StartTime "07/08/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -PageSize 5000 -OutputFormat Json
```

This example exports a maximum of 5000 records for the specified date range in JSON format.

### Example 2
```powershell
Export-ActivityExplorerData -StartTime "07/08/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -OutputFormat Json
```

This example exports up to 100 records for the specified date range in Json format. If more than 100 records are available, the value of the LastPage property in the command output will be False. Use the value of the Watermark property as the value of the PageCookie parameter in a new query to get the next set of records.

### Example 3
```powershell
$res = Export-ActivityExplorerData -StartTime "07/08/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -PageSize 5000 -OutputFormat Json

#Run the following steps in loop until all results are fetched

while ($res.LastPage -ne $true)
{
  $pageCookie = $res.WaterMark
  $res = Export-ActivityExplorerData -StartTime "07/08/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -PageSize 5000 -OutputFormat Json -PageCookie $pageCookie
}
```

This example is related to the previous example where more than 100 records were available (the value of the LastPage property from that command was False). We're using the same date range, but this time we're using the value of the Watermark property from the previous command for the PageCookie parameter in this command to get the remaining results in a loop. ResultData from each iteration can be used as needed.

### Example 4
```powershell
Export-ActivityExplorerData -StartTime "07/06/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -Filter1 @("Activity", "FileArchived") -OutputFormat Csv
```

This example exports up to 100 records for the specified date range in CSV format, and filters the output by the Activity value FileArchived.

### Example 5
```powershell
Export-ActivityExplorerData -StartTime "07/06/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -Filter1 @("Activity", "FileArchived", "ArchiveCreated") -OutputFormat Json
```

This example exports up to 100 records for the specified date range in JSON format, and filters the output by the Activity value FileArchived or ArchiveCreated.

### Example 6
```powershell
Export-ActivityExplorerData -StartTime "07/06/2022 07:15 AM" -EndTime "07/08/2022 11:08 AM" -Filter1 @("Activity", "FileArchived", "ArchiveCreated") -Filter2 @("Workload","Endpoint") -OutputFormat Json
```

This example exports up to 100 records for the specified date range in JSON format, and filters the output by the Workload value Endpoint for FileArchived or ArchiveCreated activities.

## PARAMETERS

### -EndTime
The EndTime parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFormat
The OutputFormat parameter specifies the output format. Valid values are:

- Csv
- Json

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: csv, json
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
The StartTime parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter1
The Filter1 parameter filters the data to export. This parameter takes a minimum of two values as input: a filter name and at least one filter value. For example, `@("Activity", "LabelApplied")` returns records with the activity value `LabelApplied`.

If you specify multiple filter values for the same parameter, OR behavior is used. For example, `@("Activity", "LabelApplied", "LabelRemoved")` returns records with the activity values `LabelApplied` or `LabelRemoved`.

If you use this parameter with other filter parameters, AND behavior is used across parameters. For example:

`-Filter1 @("Activity", "LabelApplied", "LabelRemoved") -Filter2 = @("Workload", "Exchange")` returns records with the activity values `LabelApplied` or `LabelRemoved` for the `Exchange` workload. In other words, ((`Activity eq LabelApplied`) OR (`Activity eq LabelRemoved`)) AND (`Workload eq Exchange`).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter2
The Filter2 parameter filters the data to export. This parameter has the same syntax requirements as the Filter1 parameter, the same OR behavior for multiple values in the same parameter, and the same AND behavior for multiple filter parameters.

Use this parameter only if you're also using the Filter1 parameter in the same command.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter3
The Filter3 parameter filters the data to export. This parameter has the same syntax requirements as the Filter1 parameter, the same OR behavior for multiple values in the same parameter, and the same AND behavior for multiple filter parameters.

Use this parameter only if you're also using the Filter2 and Filter1 parameters in the same command.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter4
The Filter4 parameter filters the data to export. This parameter has the same syntax requirements as the Filter1 parameter, the same OR behavior for multiple values in the same parameter, and the same AND behavior for multiple filter parameters.

Use this parameter only if you're also using the Filter3, Filter2, and Filter1 parameters in the same command.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter5
The Filter5 parameter filters the data to export. This parameter has the same syntax requirements as the Filter1 parameter, the same OR behavior for multiple values in the same parameter, and the same AND behavior for multiple filter parameters.

Use this parameter only if you're also using the Filter4, Filter3, Filter2, and Filter1 parameters in the same command.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageCookie
The PageCookie parameter specifies whether to get more data when the value of the LastPage property in the command output is False. If you don't use the PageSize parameter, a maximum of 100 records are returned. If you use the PageSize parameter, a maximum of 5000 records can be returned. To get more records than what as returned in the current command, use the value of the Watermark property from the output of the current command as the value for the PageCookie parameter in a new command with the same date range and filters. The PageCookie value is valid for 120 seconds to fetch the next set of records for same query.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 100. Consider using a smaller PageSize value to avoid PageCookie expiry when exporting large datasets.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
The date-time field exported via this cmdlet is in Coordinated Universal Time (UTC).

## RELATED LINKS
