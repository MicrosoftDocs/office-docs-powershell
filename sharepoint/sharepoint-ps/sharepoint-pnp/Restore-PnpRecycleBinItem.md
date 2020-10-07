---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/restore-pnprecyclebinitem
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Restore-PnPRecycleBinItem
---

# Restore-PnPRecycleBinItem

## SYNOPSIS
Restores the provided recycle bin item to its original location

## SYNTAX 

### All
```powershell
Restore-PnPRecycleBinItem [-Force [<SwitchParameter>]]
                          [-RowLimit <Int>]
                          [-Connection <PnPConnection>]
```

### Identity
```powershell
Restore-PnPRecycleBinItem -Identity <RecycleBinItemPipeBind>
                          [-Force [<SwitchParameter>]]
                          [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Restore-PnpRecycleBinItem -Identity 72e4d749-d750-4989-b727-523d6726e442
```

Restores the recycle bin item with Id 72e4d749-d750-4989-b727-523d6726e442 to its original location

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPRecycleBinItem | ? -Property LeafName -like "*.docx" | Restore-PnpRecycleBinItem
```

Restores all the items in the first and second stage recycle bins to their original location of which the filename ends with the .docx extension

### ------------------EXAMPLE 3------------------
```powershell
Restore-PnPRecycleBinItem -All -RowLimit 10000
```

Permanently restores up to 10,000 items in the recycle bin

## PARAMETERS

### -Force
If provided, no confirmation will be asked to restore the recycle bin item

```yaml
Type: SwitchParameter
Parameter Sets: Identity, All

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Id of the recycle bin item or the recycle bin item object itself to restore

```yaml
Type: RecycleBinItemPipeBind
Parameter Sets: Identity

Required: True
Position: Named
Accept pipeline input: True
```

### -RowLimit
Limits restoration to specified number of items

Only applicable to: SharePoint Online, SharePoint Server 2019, SharePoint Server 2016

```yaml
Type: Int
Parameter Sets: All

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)