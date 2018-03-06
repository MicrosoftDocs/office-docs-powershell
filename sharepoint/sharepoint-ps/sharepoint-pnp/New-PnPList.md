---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# New-PnPList

## SYNOPSIS
Creates a new list

## SYNTAX 

```powershell
New-PnPList -Title <String>
            -Template <ListTemplateType>
            [-Url <String>]
            [-Hidden [<SwitchParameter>]]
            [-EnableVersioning [<SwitchParameter>]]
            [-EnableContentTypes [<SwitchParameter>]]
            [-OnQuickLaunch [<SwitchParameter>]]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
New-PnPList -Title Announcements -Template Announcements
```

Create a new announcements list

### ------------------EXAMPLE 2------------------
```powershell
New-PnPList -Title "Demo List" -Url "DemoList" -Template Announcements
```

Create a list with a title that is different from the url

### ------------------EXAMPLE 3------------------
```powershell
New-PnPList -Title HiddenList -Template GenericList -Hidden
```

Create a new custom list and hides it from the SharePoint UI.

## PARAMETERS

### -EnableContentTypes
Switch parameter if content types should be enabled on this list

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableVersioning
Switch parameter if versioning should be enabled

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Hidden
Switch parameter if list should be hidden from the SharePoint UI

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -OnQuickLaunch
Switch parameter if this list should be visible on the QuickLaunch

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Template
The type of list to create.

```yaml
Type: ListTemplateType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Title
The Title of the list

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Url
If set, will override the url of the list.

```yaml
Type: String
Parameter Sets: (All)

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

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)