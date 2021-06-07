---
Module Name: PnP.PowerShell
title: Unpublish-PnPSyntexModel
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPPage.html
---
 
# Unpublish-PnPSyntexModel

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Unpublish-PnPSyntexModel.md to change this file.

Unpublishes a SharePoint Syntex model from a list.

This cmdlet only works when you've connected to a SharePoint Syntex Content Center site.

## SYNTAX

### Single
```powershell
Unpublish-PnPSyntexModel -Model <SyntexModelPipeBind> -ListWebUrl <string> -List <ListPipeBind> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

### Batched
```powershell
Unpublish-PnPSyntexModel -Model <SyntexModelPipeBind> -TargetSiteUrl <string> -TargetWebServerRelativeUrl <string> -TargetLibraryServerRelativeUrl <string> -Batch <PnPBatch>  [-Connection <PnPConnection>]
 [<CommonParameters>]
```

## DESCRIPTION
This command unpublishes a SharePoint Syntex content understanding models from a list.

## EXAMPLES

### EXAMPLE 1
```powershell
Unpublish-PnPSyntexModel -Model "Invoice model" -ListWebUrl "https://contoso.sharepoint.com/sites/finance" -List "Documents"
```

Unpublishes the content understanding model named "Invoice model" from the list named "Documents" in the /sites/finance web.

### EXAMPLE 2
```powershell
Unpublish-PnPSyntexModel -Model "Invoice model" -TargetSiteUrl "https://contoso.sharepoint.com/sites/finance" -TargetWebServerRelativeUrl "/sites/finance" -TargetLibraryServerRelativeUrl "/sites/finance/shared%20documents" -Batch $batch
```

Adds the unpublishing of the content understanding model named "Invoice model" from the "Shared Documents" library into the PnPBatch $batch. Use `Invoke-PnPBatch -Batch $batch` to execute the batch, use `$batch = New-PnPBatch` to create a batch.

## PARAMETERS

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

### -Model
The name or id of the SharePoint Syntex model.

```yaml
Type: SyntexModelPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ListWebUrl
Url of the web hosting the list to unpublish the model from.

```yaml
Type: String
Parameter Sets: Single
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -List
The name or id of the list to unpublish the model from.

```yaml
Type: ListPipeBind
Parameter Sets: Single

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TargetSiteUrl
The fully qualified URL of the site collection hosting the library to unpublish the model from.

```yaml
Type: String
Parameter Sets: Batched
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TargetWebServerRelativeUrl
The server relative url of the web hosting the library to unpublish the model from.

```yaml
Type: String
Parameter Sets: Batched
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TargetLibraryServerRelativeUrl
The server relative url of the library to unpublish the model from.

```yaml
Type: String
Parameter Sets: Batched
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Batch
The batch to add this unpublish request to.

```yaml
Type: PnPBatch
Parameter Sets: Batched
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)
