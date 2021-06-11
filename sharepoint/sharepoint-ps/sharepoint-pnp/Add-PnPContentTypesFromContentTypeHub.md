---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Add-PnPContentTypesFromContentTypeHub.html
external help file: PnP.PowerShell.dll-Help.xml
title: Add-PnPContentTypesFromContentTypeHub
---
  
# Add-PnPContentTypesFromContentTypeHub

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Add-PnPContentTypesFromContentTypeHub.md to change this file.


**Required Permissions**

  * ManageLists permission on the current site or the content type hub site.

Adds published content types from content type hub site to current site. If the content type already exists on the current site then the latest published version of the content type will be synced to the site.

## SYNTAX

```powershell
Add-PnPContentTypesFromContentTypeHub -ContentTypes List<String>
 [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
 $list = New-Object Collections.Generic.List[string]
 $list.Add('0x0101')
 $list.Add('0x01')
Add-PnPContentTypesFromContentTypeHub -ContentTypes $list
```

This will add the content types with the ids '0x0101' and '0x01' to the current site. Latest published version of these content types will be synced if they were already present in the current site.

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

### -ContentTypes
The list of content type IDs present in the content type hub site that are required to be added/synced to the current site.

```yaml
Type: List<String>
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

