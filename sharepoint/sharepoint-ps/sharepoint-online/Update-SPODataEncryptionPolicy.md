---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/update-spodataencryptionpolicy
applicable: SharePoint Online
title: Update-SPODataEncryptionPolicy
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Update-SPODataEncryptionPolicy

## SYNOPSIS

Updates customer encryption status for a geo tenant.

## SYNTAX

```powershell
Update-SPODataEncryptionPolicy [-Identity] <SpoSitePipeBind> [-KeyVaultName] <String> [-KeyName] <String> [-KeyVersion] <Guid> [-KeyType] <CustomerKeyVaultKeyType> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use the Update-DataEncryptionPolicy cmdlet to update customer encryption status for your geo tenant.
For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/en-us/microsoft-365/compliance/controlling-your-data-using-customer-key)

## EXAMPLES

### Example 1

```powershell
Update-SPODataEncryptionPolicy -Identity https://contoso-admin.sharepoint.com -KeyVaultName <ReplacementKeyVaultName> -KeyName <ReplacementKeyName> -KeyVersion <ReplacementKeyVersion> -KeyType Primary
```

This example updates the DEP used with SharePoint Online and OneDrive for Business to start using the new key

## PARAMETERS

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Specifies the URL of the admin site collection.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -KeyName

The name of the key

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

### -KeyType

The type of the key, possible values are

- Primary
- Secondary

```yaml
Type: CustomerKeyVaultKeyType
Parameter Sets: (All)
Aliases:
Accepted values: Primary, Secondary

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyVaultName

The name of the Azure Key Vault Name

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

### -KeyVersion

The version of the key

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
