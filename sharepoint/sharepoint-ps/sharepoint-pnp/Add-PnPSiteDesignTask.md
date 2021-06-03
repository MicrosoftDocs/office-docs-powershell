---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Add-PnPSiteDesignTask.html
external help file: PnP.PowerShell.dll-Help.xml
title: Add-PnPSiteDesignTask
---
  
# Add-PnPSiteDesignTask

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Add-PnPSiteDesignTask.md to change this file.

This command is used to apply a published site design to a specified site collection target. It schedules the operation, allowing for the application of larger site scripts (Invoke-PnPSiteDesign is limited to 30 actions and subactions).
This command is intended to replace Invoke-PnPSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.

## SYNTAX

```powershell
Add-PnPSiteDesignTask -SiteDesignId <Guid> [-WebUrl <String>] [-Connection <PnPConnection>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Add-PnPSiteDesignTask -SiteDesignId 501z8c32-4147-44d4-8607-26c2f67cae82
```

This example applies a site design the currently connected to site. Executing the commands will schedule the site design to be queued and run against the designated site collection.

### EXAMPLE 2
```powershell
Add-PnPSiteDesignTask -SiteDesignId 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/project"
```

This example applies a site design to the designated site. Executing the commands will schedule the site design to be queued and run against the designated site collection.

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

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteDesignId
The ID of the site design to apply.

```yaml
Type: Guid
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



### -WebUrl
The URL of the site collection where the site design will be applied. If not specified the design will be applied to the site you connected to with Connect-PnPOnline.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


