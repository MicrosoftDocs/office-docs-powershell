---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spoexternaluser
applicable: SharePoint Online
title: Remove-SPOExternalUser
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOExternalUser

## SYNOPSIS

Removes a collection of external users from the tenancy's folder.

## SYNTAX

```powershell
Remove-SPOExternalUser [-Confirm] -UniqueIDs <String[]> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The `Remove-SPOExternalUser` cmdlet permanently removes a collection of external users from the tenancy's folder.

Users who are removed lose access to all tenant resources.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### -----------------------EXAMPLE-----------------------------

```powershell
$user = Get-SPOExternalUser -Filter someone@example.com
Remove-SPOExternalUser -UniqueIDs @($user.UniqueId)
```

This example removes a specific external user who has the address "someone@example.com". Organization members may still see the external user name displayed in the Shared With dialog, but the external user will not be able to sign in and will not be able to access any tenant resources.

## PARAMETERS

### -Confirm

Prompts you for confirmation before running the cmdlet.

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

### -UniqueIDs

Specifies an ID that can be used to identify an external user based on their Windows Live ID.

```yaml
Type: String[]
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

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOExternalUser](Get-SPOExternalUser.md)
