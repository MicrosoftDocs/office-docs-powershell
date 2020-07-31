---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/register-spodataencryptionpolicy
applicable: SharePoint Online
title: Register-SPODataEncryptionPolicy
schema: 2.0.0
author:
ms.author:
ms.reviewer:
---

# Register-SPODataEncryptionPolicy

## SYNOPSIS

Cmdlet to register customer encryption status for your geo tenant.
For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/microsoft-365/compliance/controlling-your-data-using-customer-key)

## SYNTAX

```powershell
Register-SPODataEncryptionPolicy [-Identity] <SpoSitePipeBind> -PrimaryKeyVaultName <string> -PrimaryKeyName <string> -PrimaryKeyVersion <guid> -SecondaryKeyVaultName <string>  -SecondaryKeyName <string> -SecondaryKeyVersion <guid> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use the Update-DataEncryptionPolicy cmdlet to register customer encryption status for your geo tenant.
For more information, see [Controlling your data in Office 365 using Customer Key](https://docs.microsoft.com/microsoft-365/compliance/controlling-your-data-using-customer-key)

## EXAMPLES

### Example 1

```powershell
Register-SPODataEncryptionPolicy -Identity https://contoso.sharepoint.com -PrimaryKeyVaultName <string> -PrimaryKeyName <string> -PrimaryKeyVersion <KeyVersion>
```

This example registers the DEP used with SharePoint Online and OneDrive for Business to start using the given primary key.

### Example 2

```powershell
Register-SPODataEncryptionPolicy -Identity https://contoso.sharepoint.com -PrimaryKeyVaultName 'PKVaultName1' -PrimaryKeyName 'PrimaryKey1' -PrimaryKeyVersion 'f635a23bd4a44b9996ff6aadd88d42ba' -SecondaryKeyVaultName 'SKVaultName1' -SecondaryKeyName 'SecondaryKey2' -SecondaryKeyVersion '2b3e8f1d754f438dacdec1f0945f251a’
```
This example registers the DEP used with SharePoint Online and OneDrive for Business to start using the given primary key stageRG3vault.

## PARAMETERS

### -Identity

Specifies the URL of the admin site collection.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryKeyVaultName

The name of the primary key vault

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

The name of the primary key

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

The version of the primary key

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

The name of the secondary key vault

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

The name of the secondary key

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

The version of the secondary key

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

### -WhatIf

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
