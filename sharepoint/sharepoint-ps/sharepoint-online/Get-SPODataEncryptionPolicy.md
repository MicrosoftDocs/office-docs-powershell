---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spodataencryptionpolicy
applicable: SharePoint Online
title: Get-SPODataEncryptionPolicy
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPODataEncryptionPolicy

## SYNOPSIS

.

## SYNTAX

```powershell
Get-SPODataEncryptionPolicy [-Identity] <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use the Get-DataEncryptionPolicy cmdlet to view customer encryption status for your geo tenant.

For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/en-us/microsoft-365/compliance/controlling-your-data-using-customer-key)

## EXAMPLES

### Example 1

```powershell
Get-SPODataEncryptionPolicy -Identity https://contoso-admin.sharepoint.com
```

The output from this cmdlet includes:
  
- The URI of the primary key.

- The URI of the secondary key.

- The encryption status for the geo. Possible states include:

  - **Unregistered:** Customer Key encryption has not yet been applied.

  - **Registering:** Customer Key encryption has been applied and your files are in the process of being encrypted. If your geo is in this state, you'll also be shown information on what percentage of sites in the geo are complete so that you can monitor encryption progress.

  - **Registered:** Customer Key encryption has been applied, and all files in all sites have been encrypted.

  - **Rolling:** A key roll is in progress. If your geo is in this state, you'll also be shown information on what percentage of sites have completed the key roll operation so that you can monitor progress.

## PARAMETERS

### -Identity

Specifies the URL of the admin site collection.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
