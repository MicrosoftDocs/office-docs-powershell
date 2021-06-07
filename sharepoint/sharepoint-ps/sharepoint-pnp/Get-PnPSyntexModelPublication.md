---
Module Name: PnP.PowerShell
title: Get-PnPSyntexModelPublication
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPPage.html
---
 
# Get-PnPSyntexModelPublication

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPSyntexModelPublication.md to change this file.

Returns the libraries to which a SharePoint Syntex model was published.

This cmdlet only works when you've connected to a SharePoint Syntex Content Center site.

## SYNTAX

```powershell
Get-PnPSyntexModelPublications -Model <SyntexModelPipeBind> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

## DESCRIPTION
This command returns the libraries to which a SharePoint Syntex content understanding model defined in the connected SharePoint Syntex Content Center site was published.

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPSyntexModelPublication -Identity "Invoice model"
```

Gets the libraries to which the content understanding model named "Invoice model" was published.

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



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

