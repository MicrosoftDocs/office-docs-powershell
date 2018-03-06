---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Clear-PnPRecycleBinItem

## SYNOPSIS
Permanently deletes all or a specific recycle bin item

## SYNTAX 

### All
```powershell
Clear-PnPRecycleBinItem [-All [<SwitchParameter>]]
                        [-SecondStageOnly [<SwitchParameter>]]
                        [-Force [<SwitchParameter>]]
                        [-Connection <SPOnlineConnection>]
```

### Identity
```powershell
Clear-PnPRecycleBinItem -Identity <RecycleBinItemPipeBind>
                        [-Force [<SwitchParameter>]]
                        [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPRecycleBinItems | ? FileLeafName -like "*.docx" | Clear-PnpRecycleBinItem
```

Permanently deletes all the items in the first and second stage recycle bins of which the file names have the .docx extension

### ------------------EXAMPLE 2------------------
```powershell
Clear-PnpRecycleBinItem -Identity 72e4d749-d750-4989-b727-523d6726e442
```

Permanently deletes the recycle bin item with Id 72e4d749-d750-4989-b727-523d6726e442 from the recycle bin

### ------------------EXAMPLE 3------------------
```powershell
Clear-PnpRecycleBinItem -Identity $item -Force
```

Permanently deletes the recycle bin item stored under variable $item from the recycle bin without asking for confirmation from the end user first

## PARAMETERS

### -All
Clears all items

```yaml
Type: SwitchParameter
Parameter Sets: All

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
If provided, no confirmation will be asked to permanently delete the recycle bin item

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Id of the recycle bin item or the recycle bin item itself to permanently delete

```yaml
Type: RecycleBinItemPipeBind
Parameter Sets: Identity

Required: True
Position: Named
Accept pipeline input: True
```

### -SecondStageOnly
If provided, only all the items in the second stage recycle bin will be cleared

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: All

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)