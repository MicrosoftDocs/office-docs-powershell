---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/export-contentexplorerdata
applicable: Security & Compliance
title: Export-ContentExplorerData
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Export-ContentExplorerData

## SYNOPSIS
**Note**: This cmdlet is currently in Preview and is subject to change.

This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Export-ContentExplorerData cmdlet to export data classification file details in Microsoft Purview compliance.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Export-ContentExplorerData
 [[-PageCookie] <String>]
 [[-PageSize] <Int32>]
 [[-SiteUrl] <String>]
 [[-UserPrincipalName] <String>]
 [-TagName] <String>
 [-TagType] <String>
 [[-Workload] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet contains the following information:

- TotalCount: Aggregate count. If only the TagName and TagType parameters are used, the value is the total aggregate count for that tag. If the Workload parameter is also used, the value is the aggregate count in the workload for that tag. If the UserPrincipalName or SiteUrl parameters are used, the value is the count for that specific folder.
- MorePagesAvailable: Shows whether there are more records left to export. The value is True or False.
- RecordsReturned: The number of records returned in the query.
- PageCookie: Used to get the next set of records when MorePagesAvailable is True.

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

### -PageCookie
The PageCookie parameter specifies whether to get more data when the value of the MorePagesAvailable property in the command output is True. If you don't use the PageSize parameter, a maximum of 100 records are returned. If you use the PageSize parameter, a maximum of 10000 records can be returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of records to return in a single query. Valid input for this parameter is an integer between 1 and 10000. The default value is 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 2
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteUrl
The SiteUrl parameter specifies the site URL to export file details from.

You use this parameter for SharePoint and OneDrive workloads.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TagName
The TagName parameter specifies the name of the label to export file details from. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TagType
The TagType parameter specifies the type of label to export file details from. Valid values are:

- Retention
- SensitiveInformationType
- Sensitivity
- TrainableClassifier

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the user account in UPN format to export message details from. An example UPN value is erika@contoso.onmicrosoft.com.

You use this parameter for Exchange and Microsoft Teams workloads.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload
The Workload parameter specifies the location to export file details from. Valid values are:

- EXO or Exchange
- ODB or OneDrive
- SPO or SharePoint
- Teams

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
