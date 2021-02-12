---
Module Name: PnP.PowerShell
title: Restore-PnPRecycleBinItem
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Restore-PnPRecycleBinItem.html
---
 
# Restore-PnPRecycleBinItem

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Restore-PnPRecycleBinItem.md to change this file.

Restores the provided recycle bin item to its original location

## SYNTAX

```powershell
Restore-PnPRecycleBinItem -Identity <RecycleBinItemPipeBind> [-Force] [-RowLimit <Int32>]
 [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Restore-PnpRecycleBinItem -Identity 72e4d749-d750-4989-b727-523d6726e442
```

Restores the recycle bin item with Id 72e4d749-d750-4989-b727-523d6726e442 to its original location

### EXAMPLE 2
```powershell
Get-PnPRecycleBinItem | ? -Property LeafName -like "*.docx" | Restore-PnpRecycleBinItem
```

Restores all the items in the first and second stage recycle bins to their original location of which the filename ends with the .docx extension

### EXAMPLE 3
```powershell
Restore-PnPRecycleBinItem -All -RowLimit 10000
```

Permanently restores up to 10,000 items in the recycle bin

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

### -Force
If provided, no confirmation will be asked to restore the recycle bin item

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Id of the recycle bin item or the recycle bin item object itself to restore

```yaml
Type: RecycleBinItemPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RowLimit
Limits restoration to specified number of items

```yaml
Type: Int32
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

