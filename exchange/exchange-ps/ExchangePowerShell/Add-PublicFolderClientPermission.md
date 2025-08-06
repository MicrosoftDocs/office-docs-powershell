---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-publicfolderclientpermission
schema: 2.0.0
title: Add-PublicFolderClientPermission
---

# Add-PublicFolderClientPermission

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Add-PublicFolderClientPermission cmdlet to add permissions to public folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-PublicFolderClientPermission [-Identity] <PublicFolderIdParameter> -AccessRights <MultiValuedProperty> -User <PublicFolderUserIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-PublicFolderClientPermission -Identity "\My Public Folder" -User Chris -AccessRights CreateItems -Server "My Server"
```

In Exchange 2010, this example adds permission for the user Chris to create items in the public folder My Public Folder on the server My Server.

### Example 2
```powershell
Add-PublicFolderClientPermission -Identity "\My Public Folder" -User Chris -AccessRights CreateItems
```

This example adds permission for the user Chris to create items in the public folder My Public Folder.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format TopLevelPublicFolder\\PublicFolder.

You can omit the parameter label so that only the public folder name or GUID is supplied.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AccessRights parameter specifies the rights that you want to add for the user on the public folder.

You can specify individual folder permissions or roles, which are combinations of permissions. You can specify multiple permissions and roles separated by commas.

The following individual permissions are available:

- CreateItems: The user has the right to create items within the specified public folder.
- CreateSubfolders: The user has the right to create subfolders in the specified public folder.
- DeleteAllItems: The user has the right to delete all items in the specified public folder.
- DeleteOwnedItems: The user has the right to delete items that the user owns in the specified public folder.
- EditAllItems: The user has the right to edit all items in the specified public folder.
- EditOwnedItems: The user has the right to edit the items that the user owns in the specified public folder.
- FolderContact: The user is the contact for the specified public folder.
- FolderOwner: The user is the owner of the specified public folder. The user has the right to view and move the public folder and create subfolders. The user can't read items, edit items, delete items, or create items.
- FolderVisible: The user can view the specified public folder, but can't read or edit items within the specified public folder.
- ReadItems: The user has the right to read items within the specified public folder.

In addition to access rights, you can create rights based upon roles, which includes multiple access rights. This parameter accepts the following values for roles:

- Author: CreateItems, DeleteOwnedItems, EditOwnedItems, FolderVisible, ReadItems
- Contributor: CreateItems, FolderVisible
- Editor: CreateItems, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderVisible, ReadItems
- None: FolderVisible
- NonEditingAuthor: CreateItems, DeleteOwnedItems, FolderVisible, ReadItems
- Owner: CreateItems, CreateSubfolders, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderContact, FolderOwner, FolderVisible, ReadItems
- PublishingAuthor: CreateItems, CreateSubfolders, DeleteOwnedItems, EditOwnedItems, FolderVisible, ReadItems
- PublishingEditor: CreateItems, CreateSubfolders, DeleteAllItems, DeleteOwnedItems, EditAllItems, EditOwnedItems, FolderVisible, ReadItems
- Reviewer: FolderVisible, ReadItems

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The User parameter specifies the user for whom rights are being added.

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

```yaml
Type: PublicFolderUserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
