---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/reset-pnplabel
applicable: SharePoint Online
schema: 2.0.0
title: Reset-PnPLabel
---

# Reset-PnPLabel

## SYNOPSIS
Resets a retention label on the specified list or library to None

## SYNTAX 

```powershell
Reset-PnPLabel -List <ListPipeBind>
               [-SyncToItems <Boolean>]
               [-Web <WebPipeBind>]
               [-Connection <PnPConnection>]
```

## DESCRIPTION
Removes the retention label on a list or library and its items. Does not work for sensitivity labels.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Reset-PnPLabel -List "Demo List"
```

This resets an O365 label on the specified list or library to None

### ------------------EXAMPLE 2------------------
```powershell
Reset-PnPLabel -List "Demo List" -SyncToItems $true
```

This resets an O365 label on the specified list or library to None and resets the label on all the items in the list and library except Folders and where the label has been manually or previously automatically assigned

## PARAMETERS

### -List
The ID or Url of the list

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -SyncToItems
Reset label on existing items in the library

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