---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/restore-spodataencryptionpolicy
applicable: SharePoint Online
title: Restore-SPODataEncryptionPolicy
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Restore-SPODataEncryptionPolicy

## SYNOPSIS

CmdLet to restore customer encryption status for your geo tenant when in recovery mode.
For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/microsoft-365/compliance/controlling-your-data-using-customer-key)

## SYNTAX

```powershell
Restore-SPODataEncryptionPolicy -PrimaryKeyVaultName <string>  -PrimaryKeyName <string> -PrimaryKeyVersion <guid> -SecondaryKeyVaultName <string> -SecondaryKeyName <string> -SecondaryKeyVersion <guid> [<CommonParameters>]
```

## DESCRIPTION

Use the cmdLet to restore customer encryption status for your geo tenant when in recovery mode.
For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/microsoft-365/compliance/controlling-your-data-using-customer-key)

## EXAMPLES

### Example 1

```powershell
Restore-SPODataEncryptionPolicy -PrimaryKeyVaultName 'PKVaultName1' -PrimaryKeyName 'PrimaryKey1' -PrimaryKeyVersion 'f635a23bd4a44b9996ff6aadd88d42ba' -SecondaryKeyVaultName 'SKVaultName1' -SecondaryKeyName 'SecondaryKey2' -SecondaryKeyVersion '2b3e8f1d754f438dacdec1f0945f251a’
```
This example restores the DEP used with SharePoint Online and OneDrive for Business to the given keys.

## PARAMETERS

### -PrimaryKeyVaultName

The name of the primary key vault.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryKeyName

The name of the primary key.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryKeyVersion

The version of the primary key.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryKeyVaultName

The name of the secondary key vault.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryKeyName

The name of the secondary key.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryKeyVersion

The version of the secondary key.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
