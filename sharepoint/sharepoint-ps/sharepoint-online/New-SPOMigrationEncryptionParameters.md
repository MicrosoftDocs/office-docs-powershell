---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/new-spomigrationencryptionparameters
applicable: SharePoint Online
title: New-SPOMigrationEncryptionParameters
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# New-SPOMigrationEncryptionParameters

## SYNOPSIS

Creates a new random encryption key for a migration job or package.

## SYNTAX

```powershell
New-SPOMigrationEncryptionParameters [<CommonParameters>]
```

## DESCRIPTION

Creates a random encryption key for submission of a migration job or creation of a migration package. For use with [`Submit-SPOMigrationJob`](), [`ConvertTo-SPOMigrationEncryptedPackage`](ConvertTo-SPOMigrationEncryptedPackage.md), and [`Set-SPOMigrationPackageAzureSource`](Set-SPOMigrationPackageAzureSource.md) in the `-EncryptedParameter` parameter for each cmdlet.

## EXAMPLES

### EXAMPLE 1

```powershell
$o = New-SPOMigrationEncryptionParameters
```

Outputs a random encryption key and saves it in the `$o` variable.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## OUTPUTS

### System.Byte

EncryptionKey: The randomly generated encryption key using [System.Security.Cryptography.AesCryptoServiceProvider](https://docs.microsoft.com/dotnet/api/system.security.cryptography.aescryptoserviceprovider) class.

### Microsoft.Online.SharePoint.Migration.SPMigrationJobEncryptionMethod

EncryptionMethod: The encryption algorithm used to generate the EncryptionKey. Currently hardcoded to AES256BC.

## RELATED LINKS

[Submit-SPOMigrationjob](Submit-SPOMigrationJob.md)

[ConvertTo-SPOMigrationEncryptedPackage](ConvertTo-SPOMigrationEncryptedPackage.md)

[Set-SPOMigrationPackageAzureSource](Set-SPOMigrationPackageAzureSource.md)

[Introduction to the SharePoint Online management shell](https://support.office.com/en-us/article/introduction-to-the-sharepoint-online-management-shell-c16941c3-19b4-4710-8056-34c034493429)

[SharePoint Online Management Shell Download](https://www.microsoft.com/en-US/download/details.aspx?id=35588)

