---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/Unlock-SPOSensitivityLabelEncryptedFile
applicable: SharePoint Online
title: Unlock-SensitivityLabelEncryptedFile
schema: 2.0.0
author: Sanjoyan
ms.author: samust
ms.reviewer:
---

# Unlock-SPOSensitivityLabelEncryptedFile

## SYNOPSIS

It removes encryption on a Sensitivity label encrypted file in SharePoint Online. No need to download the file. 

## SYNTAX

```powershell
Unlock-SPOSensitivityLabelEncryptedFile -FileUrl <absolute path for file> -JustificationText <needed for auditing>
```

## DESCRIPTION

The `Unlock-SPOSensitivityLabelEncryptedFile` cmdlet runs on a single office online file that is encrypted via sensitivity label. It decrypts the file and removes the label from the file.

You must be a SharePoint Online administrator or Global Administrator to run the `Unlock-SPOSensitivityLabelEncryptedFile` cmdlet. Note, this cmdlet do not work on files that have labels with custom permission or user defined permission or double key encryption.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
 Unlock-SPOSensitivityLabelEncryptedFile -FileUrl "https://contoso.com/sites/Marketing/Shared Documents/Doc1.docx" -JustificationText "Need to recover this file"
```

This example will remove a regular label with admin dedined encryption from the file Doc1.docx and also make an entry in audit logs. 

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

### -JustificationText

Text that explains the reason to run this cmdlet on the given file. 

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

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
