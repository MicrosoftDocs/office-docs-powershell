---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-reviewitems
applicable: Exchange Online
title: Get-ReviewItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ReviewItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ReviewItems to retrieve a list of disposition review items that are either pending review or already disposed for a specific retention label.  It can also be used to retrieve a list of disposed items for a specific record label.

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

The `Get-ReviewItems` cmdlet can be used to export a list of pending or disposed items from disposition review.  To learn more about disposition review, see [Disposition of content](https://learn.microsoft.com/microsoft-365/compliance/disposition).

## EXAMPLES

### Example 1

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true
$formattedExportItems = $itemsPendingDisposition.ExportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers
$formattedExportItems
```

Retrieves the first page of items pending disposition for the label with an immutable ID of `a8cbeaac-e7aa-42ed-8dba-54200537c9c9`.  The results will be converted to PSObject types objects for each item, and then output to the screen.

### Example 2

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true -Disposed $true
$formattedExportItems = $itemsPendingDisposition.ExportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers
$formattedExportItems | Select Subject, Location, ReviewAction, Comment, DeletedBy, DeletedDate
```

Retrieves all disposed items for the label with an immutable ID of `a8cbeaac-e7aa-42ed-8dba-54200537c9c9` and selects specific columns to output to the screen.

### Example 3

```powershell
$itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true
$exportItems = $itemsPendingDisposition.ExportItems

While (![string]::IsNullOrEmpty($itemsPendingDisposition.PaginationCookie))
{
    $itemsPendingDisposition = $itemsPendingDisposition = Get-ReviewItems -TargetLabelId a8cbeaac-e7aa-42ed-8dba-54200537c9c9 -IncludeHeaders $true -PagingCookie $itemsPendingDisposition.PaginationCookie
    $exportItems += $itemsPendingDisposition.ExportItems
}

$exportItems | ConvertFrom-Csv -Header $itemsPendingDisposition.Headers | Export-Csv C:\temp\ItemsPendingDisposition.csv -NoTypeInformation
```

Retrieves all items pending disposition for the label with an immutable ID of `a8cbeaac-e7aa-42ed-8dba-54200537c9c9`.  If multiple pages of items exist, it will continue until no more pages exist.  The results will be exported to a CSV file.

> [!NOTE]
> While this cmdlet does not impose any limit to the number of items/pages that can be retrieved, other throttling may occur.  For retrieving a large number of items, it is recommended to include breaks in your script to prevent throttling.  The PagingCookie parameter can be used to pick up where the script left off after a break.

## PARAMETERS

### -TargetLabelId
The TargetLabelId parameter specifies the immutable ID of the label that you want to retrieve review items for.  

To get the immutable ID for a particular label, you can use Exchange Online PowerShell:

```powershell
Get-ComplianceTag <RetentionLabelName> | select ImmutableId
```

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disposed
Use the Disposed parameter to specify whether you want the cmdlet to return disposed items instead of items pending disposition.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeHeaders
Use the IncludeHeaders parameter to specify whether you want headers to be returned as a property with the review items.  These will be useful when converting to PSObject in PowerShell, or when exporting to CSV.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PagingCookie
Use the PagingCookie parameter to identify which page to retrieve.  This is useful when a large number of items must be retrieved or as a method of starting where the last operation left off.  The value for PagingCookie is returned in the PaginationCookie property each time the cmdlet is successfully run.  If the PaginationCookie is null, there are no more items to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

