---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/Get-FileSensitivityLabelInfo
applicable: SharePoint Online
title: Get-FileSensitivityLabelInfo
schema: 2.0.0
author: Sanjoyanm
ms.author: samust
ms.reviewer:
---

# Get-FileSensitivityLabelInfo

## SYNOPSIS

Extracts and displays the sensitivity label related information attached to an office file stored in SharePoint.

## SYNTAX

```powershell
Get-FileSensitivityLabelInfo -FileUrl <String> [<CommonParameters>]
```

## DESCRIPTION

The `Get-FileSensitivityLabelInfo` cmdlet runs on a single office online file. If the file has a sensitivity label attached then it returns the id, displayname, isProtectionEnabled flag and id of the parent label (if applicable). You must be a SharePoint Online administrator or Global Administrator to run the `GetFileSensitivityLabelInfo` cmdlet. Note that this cmdlet does not work on files that have labels with custom permission or user defined permission or double key encryption.
For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell).

## EXAMPLES

### EXAMPLE 1

```powershell
 Get-FileSensitivityLabelInfo -FileUrl "https://contoso.com/sites/Marketing/Shared Documents/Doc1.docx"
```

## PARAMETERS

### -FileUrl

Full URL for the file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
