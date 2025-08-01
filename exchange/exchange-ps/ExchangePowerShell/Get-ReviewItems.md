---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-reviewitems
schema: 2.0.0
title: Get-ReviewItems
---

# Get-ReviewItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ReviewItems to retrieve a list of disposition review items that are either pending review or already disposed for a specific retention label. It can also be used to retrieve a list of disposed items for a specific record label.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ReviewItems -TargetLabelId <String>
 [-Disposed <Boolean>]
 [-IncludeHeaders <Boolean>]
 [-PagingCookie <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

The `Get-ReviewItems` cmdlet can be used to export a list of pending or disposed items from disposition review. To learn more about disposition review, see [Disposition of content](https://learn.microsoft.com/purview/disposition).

## EXAMPLES

### Example 1

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true

$formattedExportItems = $itemsPendingDisposition.ExportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers

$formattedExportItems
```

This example retrieves the first page of items pending disposition for the label with the immutable ID value `a8cbeaac-e7aa-42ed-8dba-54200537c9c9`. The results are converted to PSObject types for each item and then output to the screen.

### Example 2

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true -Disposed $true

$formattedExportItems = $itemsPendingDisposition.ExportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers

$formattedExportItems | Select Subject,Location,ReviewAction,Comment,DeletedBy,DeletedDate
```

This example retrieves all disposed items for the label with an immutable ID of `a8cbeaac-e7aa-42ed-8dba-54200537c9c9` and selects specific columns to output to the screen.

### Example 3

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true

$exportItems = $itemsPendingDisposition.ExportItems

While (![string]::IsNullOrEmpty($itemsPendingDisposition.PaginationCookie))
{
    $itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true -PagingCookie $itemsPendingDisposition.PaginationCookie
    $exportItems += $itemsPendingDisposition.ExportItems
}

$exportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers | Export-Csv C:\temp\ItemsPendingDisposition.csv -NoTypeInformation
```

This example retrieves all items pending disposition for the label with the immutable ID value `a8cbeaac-e7aa-42ed-8dba-54200537c9c9`. If multiple pages of items exist, the command continues until no more pages exist. The results are exported to the specified CSV file.

**Note**: Although this cmdlet doesn't limit the number of items/pages that can be retrieved, other throttling might occur. To prevent throttling while retrieving a large number of items, we recommended including breaks in your script. You can use the PagingCookie parameter to pick up where the script left off after a break.

## PARAMETERS

### -TargetLabelId

> Applicable: Exchange Online

The TargetLabelId parameter specifies the label that you want to retrieve review items for. A valid value for this parameter is the immutable ID of the label.

To get the immutable ID value of a label, replace \<RetentionLabelName\> with the name of the label, and then run the following command in Exchange Online PowerShell: `Get-ComplianceTag -Identity "<RetentionLabelName>" | select ImmutableId`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disposed

> Applicable: Exchange Online

The Disposed parameter specifies whether to return disposed items instead of items pending disposition. Valid values are:

- $true: Return disposed items.
- $false: Return items pending disposition. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeHeaders

> Applicable: Exchange Online

The IncludeHeaders parameter specifies whether headers are returned as a property with the review items. Valid values are:

- $true: Headers are returned as a property with the review items. This option is useful when converting the output to a PSObject in PowerShell or when exporting to CSV.
- $false: Headers are not returned as a property with the review items. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PagingCookie

> Applicable: Exchange Online

The PagingCookie parameter identifies the page to retrieve. This parameter is useful in the following scenarios:

- To avoid throttling while retrieving a large number of items.
- As a method of starting where the last operation left off.

The PagingCookie value is returned in the PaginationCookie property each time the cmdlet is successfully run. If the PaginationCookie is blank (null), there are no more items to retrieve.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
