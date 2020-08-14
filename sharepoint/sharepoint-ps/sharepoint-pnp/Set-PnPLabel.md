---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnplabel
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPLabel
---

# Set-PnPLabel

## SYNOPSIS
Sets a retention label on the specified list or library. Use Reset-PnPLabel to remove the label again.

## SYNTAX 

```powershell
Set-PnPLabel -List <ListPipeBind>
             -Label <String>
             [-SyncToItems <Boolean>]
             [-BlockDeletion <Boolean>]
             [-BlockEdit <Boolean>]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

## DESCRIPTION
Allows setting a retention label on a list or library and its items. Does not work for sensitivity labels.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPLabel -List "Demo List" -Label "Project Documentation"
```

This sets an O365 label on the specified list or library. 

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPLabel -List "Demo List" -Label "Project Documentation" -SyncToItems $true
```

This sets an O365 label on the specified list or library and sets the label to all the items in the list and library as well.

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPLabel -List "Demo List" -Label "Project Documentation" -BlockDelete $true -BlockEdit $true
```

This sets an O365 label on the specified list or library. Next, it also blocks the ability to either edit or delete the item. 

## PARAMETERS

### -BlockDeletion
Block deletion of items in the library

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -BlockEdit
Block editing of items in the library

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Label
The name of the retention label

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -List
The ID or Url of the list.

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -SyncToItems
Apply label to existing items in the library

```yaml
Type: Boolean
Parameter Sets: (All)

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

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)