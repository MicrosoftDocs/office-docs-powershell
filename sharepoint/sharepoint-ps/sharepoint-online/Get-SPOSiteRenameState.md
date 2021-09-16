---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositerenamestate
applicable: SharePoint Online
title: Get-SPOSiteRenameState
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPOSiteRenameState

## SYNOPSIS

Returns the current rename job state of a SharePoint Online Site.

## SYNTAX

### SourceSiteUrl

```powershell
Get-SPOSiteRenameState -Identity <SpoSitePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentId

```powershell
Get-SPOSiteRenameState -ParentOperationId <guid> [-State <RenameState>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### RenameReport

```powershell
Get-SPOSiteRenameState [-State <RenameState>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to return the current rename job state of a SharePoint Online Site.

## EXAMPLES

### Example 1

```powershell
Get-SPOSiteRenameState -Identity https://contoso.sharepoint.com/sites/ContosoWeb1
```

This example returns the rename job state of ContosoWeb1 Site.

### Example 2

```powershell
Get-SPOSiteRenameState -State InProgress
```

This example returns rename jobs that are in InProgress state.

### Example 3

```powershell
$tenantRenameJobId = (Get-SPOTenantRenameStatus).RenameJobId
Get-SPOSiteRenameState -ParentOperationId $tenantRenameJobId
```

This example returns rename jobs that were initiated by a tenant rename.

## PARAMETERS

### -Identity

The urls of the site to be renamed.

```yaml
Type: SpoSitePipeBind
Parameter Sets: SourceSiteUrl
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParentOperationId

The parent operation id that initiated the site to be renamed. For example, the tenant rename job id.

```yaml
Type: guid
Parameter Sets: ParentId
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State

The state of the rename job, possible values are

- Queued

- InProgress

- Success

- Failed

- Suspended

```yaml
Type: RenameState
Parameter Sets: RenameReport, ParentId
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

### -WhatIf

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
