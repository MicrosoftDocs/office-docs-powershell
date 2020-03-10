---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpclientsidewebpart
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Set-PnPClientSideWebPart

## SYNOPSIS
Set Client-Side Web Part properties

## SYNTAX 

```powershell
Set-PnPClientSideWebPart -Page <ClientSidePagePipeBind>
                         -Identity <ClientSideWebPartPipeBind>
                         [-Title <String>]
                         [-PropertiesJson <String>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets specific client side web part properties. Notice that the title parameter will only set the -internal- title of web part. The title which is shown in the UI will, if possible, have to be set using the PropertiesJson parameter. Use Get-PnPClientSideComponent to retrieve the instance id and properties of a web part.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPClientSideWebPart -Page Home -Identity a2875399-d6ff-43a0-96da-be6ae5875f82 -PropertiesJson $myproperties
```

Sets the properties of the client side web part given in the $myproperties variable.

## PARAMETERS

### -Identity
The identity of the web part. This can be the web part instance id or the title of a web part

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSideWebPartPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Page
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -PropertiesJson
Sets the properties as a JSON string.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -Title
Sets the internal title of the web part. Notice that this will NOT set a visible title.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)