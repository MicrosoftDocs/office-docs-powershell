---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPContentType

## SYNOPSIS
Retrieves a content type

## SYNTAX 

```powershell
Get-PnPContentType [-Identity <ContentTypePipeBind>]
                   [-List <ListPipeBind>]
                   [-InSiteHierarchy [<SwitchParameter>]]
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPContentType 
```

This will get a listing of all available content types within the current web

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPContentType -InSiteHierarchy
```

This will get a listing of all available content types within the site collection

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPContentType -Identity "Project Document"
```

This will get the content type with the name "Project Document" within the current context

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPContentType -List "Documents"
```

This will get a listing of all available content types within the list "Documents"

## PARAMETERS

### -Identity
Name or ID of the content type to retrieve

```yaml
Type: ContentTypePipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -InSiteHierarchy
Search site hierarchy for content types

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
List to query

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
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

## OUTPUTS

### Microsoft.SharePoint.Client.ContentType

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)