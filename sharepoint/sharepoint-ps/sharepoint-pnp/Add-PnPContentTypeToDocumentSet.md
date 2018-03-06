---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Add-PnPContentTypeToDocumentSet

## SYNOPSIS
Adds a content type to a document set

## SYNTAX 

```powershell
Add-PnPContentTypeToDocumentSet -ContentType <ContentTypePipeBind[]>
                                -DocumentSet <DocumentSetPipeBind>
                                [-Web <WebPipeBind>]
                                [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPContentTypeToDocumentSet -ContentType "Test CT" -DocumentSet "Test Document Set"
```

This will add the content type called 'Test CT' to the document set called ''Test Document Set'

### ------------------EXAMPLE 2------------------
```powershell
$docset = Get-PnPDocumentSetTemplate -Identity "Test Document Set"
$ct = Get-PnPContentType -Identity "Test CT"
Add-PnPContentTypeToDocumentSet -ContentType $ct -DocumentSet $docset
```

This will add the content type called 'Test CT' to the document set called ''Test Document Set'

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPContentTypeToDocumentSet -ContentType 0x0101001F1CEFF1D4126E4CAD10F00B6137E969 -DocumentSet 0x0120D520005DB65D094035A241BAC9AF083F825F3B
```

This will add the content type called 'Test CT' to the document set called ''Test Document Set'

## PARAMETERS

### -ContentType
The content type object, name or id to add. Either specify name, an id, or a content type object.

```yaml
Type: ContentTypePipeBind[]
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -DocumentSet
The document set object or id to add the content type to. Either specify a name, a document set template object, an id, or a content type object

```yaml
Type: DocumentSetPipeBind
Parameter Sets: (All)

Required: True
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