---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/export-contentexplorerdata
schema: 2.0.0
title: Export-ContentExplorerData
---

# Export-ContentExplorerData

## SYNOPSIS
**Note**: This cmdlet is currently in Preview and is subject to change.

This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Export-ContentExplorerData cmdlet to export data classification file details in Microsoft Purview compliance.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-ContentExplorerData [-TagName] <String> [-TagType] <String>
 [-Aggregate]
 [[-ConfidenceLevel] <String>]
 [[-PageCookie] <String>]
 [[-PageSize] <Int32>]
 [[-SiteUrl] <String>]
 [[-UserPrincipalName] <String>]
 [[-Workload] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet contains the following information:

- TotalCount: Aggregate count. If only the TagName and TagType parameters are used, the value is the total aggregate count for that tag. If the Workload parameter is also used, the value is the aggregate count in the workload for that tag. If the UserPrincipalName or SiteUrl parameters are used, the value is the count for that specific folder.
- MorePagesAvailable: Shows whether there are more records left to export. The value is True or False.
- RecordsReturned: The number of records returned in the query.
- PageCookie: Used to get the next set of records when MorePagesAvailable is True.

The following list describes best practices for scripts using this cmdlet:

- We recommend not using a single script to export multiple SITs/Labels. Instead, create a script for one SIT/Label, and then re-use the same script for each SIT/Label in each workload as required.
- When retrying the script, make sure to reconnect to the session first. The session's token expires after about an hour, which can cause the cmdlet to fail. To fix this issue, reconnect to the session before retrying the script. If the script fails, restart it using the last page cookie returned to continue the export from where it left off.

  > [!TIP]
  > To support unattended scripts that run for a long time, you can use [certificate-based authentication (CBA)](https://learn.microsoft.com/powershell/exchange/app-only-auth-powershell-v2).
  >
  > To use the Azure app, add the Content Explorer List Viewer` role group to the Service Principal Identity.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Export-ContentExplorerData -TagType SensitiveInformationType -TagName "Credit Card Number" -Workload EXO -UserPrincipalName erika@contoso.onmicrosoft.com
```

This example exports records for the specified sensitive info type from Erika's mailbox.

### Example 2
```powershell
Export-ContentExplorerData -TagType SensitiveInformationType -TagName "Credit Card Number" -Workload ODB -SiteUrl https://contoso-my.sharepoint.com/personal/erika_contoso_onmicrosoft_com
```

This example exports records for the specified sensitive info type in Erika's OneDrive site.

### Example 3
```powershell
Export-ContentExplorerData -TagType SensitiveInformationType -TagName "All Full Names"
```

This example exports records for the specified sensitive info type for all workloads.

## PARAMETERS

### -TagType

> Applicable: Security & Compliance

The TagType parameter specifies the type of label to export file details from. Valid values are:

- Retention
- SensitiveInformationType
- Sensitivity
- TrainableClassifier

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Aggregate

> Applicable: Security & Compliance

**Note:** This parameter is currently in Private Preview, isn't available in all organizations, and is subject to change.

The Aggregate parameter switch returns the folder level aggregated numbers instead of returning details at the item level. You don't need to specify a value with this switch.

Using this switch significantly reduces the export time. To download the items in a folder, run this cmdlet for specific folders.

When you use this switch with the TagName, TagType, and Workload parameters, the command returns the following information:

- SharePoint and OneDrive: The list of SiteUlrs.
- Exchange Online and Microsoft Teams: The list of UPNs.
- The count of items in the folders stamped with relevant tag.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfidenceLevel

> Applicable: Security & Compliance

The ConfidenceLevel parameter specifies the confidence level of the match for the file details to export. Valid values are:

- low
- medium
- high

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: high, medium, low

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageCookie

> Applicable: Security & Compliance

The PageCookie parameter specifies whether to get more data when the value of the MorePagesAvailable property in the command output is True. If you don't use the PageSize parameter, a maximum of 100 records are returned. If you use the PageSize parameter, a maximum of 10000 records can be returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Security & Compliance

The PageSize parameter specifies the maximum number of records to return in a single query. Valid input for this parameter is an integer between 1 and 10000. The default value is 100.

**Note**: In empty folders or folders with few files, this parameter can cause the command to run for a long time as it tries to get the PageSize count of the results. To prevent this issue, the command returns data from 5 folders or the number of records specified by the PageSize parameter, whichever completes first. For example, if there are 10 folders with 1 record each, the command returns 5 records of the top 5 folders. In the next execution using page cookie, it returns 5 records from the remaining 5 folders, even if the PageSize value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl

> Applicable: Security & Compliance

The SiteUrl parameter specifies the site URL to export file details from.

You use this parameter for SharePoint and OneDrive workloads.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TagName

> Applicable: Security & Compliance

The TagName parameter specifies the name of the label to export file details from. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Security & Compliance

The UserPrincipalName parameter specifies the user account in UPN format to export message details from. An example UPN value is erika@contoso.onmicrosoft.com.

You use this parameter for Exchange and Microsoft Teams workloads.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload

> Applicable: Security & Compliance

The Workload parameter specifies the location to export file details from. Valid values are:

- EXO or Exchange
- ODB or OneDrive
- SPO or SharePoint
- Teams

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
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
