---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPClientSideWebPart

## SYNOPSIS
Adds a Client-Side Web Part to a client-side page

## SYNTAX 

### Default with built-in webpart
```powershell
Add-PnPClientSideWebPart -Page <ClientSidePagePipeBind>
                         -DefaultWebPartType <DefaultClientSideWebParts>
                         [-WebPartProperties <PropertyBagPipeBind>]
                         [-Order <Int>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

### Default with 3rd party webpart
```powershell
Add-PnPClientSideWebPart -Page <ClientSidePagePipeBind>
                         -Component <ClientSideComponentPipeBind>
                         [-WebPartProperties <PropertyBagPipeBind>]
                         [-Order <Int>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

### Positioned with built-in webpart
```powershell
Add-PnPClientSideWebPart -Page <ClientSidePagePipeBind>
                         -DefaultWebPartType <DefaultClientSideWebParts>
                         -Section <Int>
                         -Column <Int>
                         [-WebPartProperties <PropertyBagPipeBind>]
                         [-Order <Int>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

### Positioned with 3rd party webpart
```powershell
Add-PnPClientSideWebPart -Page <ClientSidePagePipeBind>
                         -Component <ClientSideComponentPipeBind>
                         -Section <Int>
                         -Column <Int>
                         [-WebPartProperties <PropertyBagPipeBind>]
                         [-Order <Int>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Adds a client-side web part to an existing client-side page.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPClientSideWebPart -Page "MyPage" -DefaultWebPartType BingMap
```

Adds a built-in Client-Side component 'BingMap' to the page called 'MyPage'

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPClientSideWebPart -Page "MyPage" -Component "HelloWorld"
```

Adds a Client-Side component 'HelloWorld' to the page called 'MyPage'

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPClientSideWebPart  -Page "MyPage" -Component "HelloWorld" -Section 1 -Column 2
```

Adds a Client-Side component 'HelloWorld' to the page called 'MyPage' in section 1 and column 2

## PARAMETERS

### -Column
Sets the column where to insert the WebPart control.

```yaml
Type: Int
Parameter Sets: Positioned with built-in webpart, Positioned with 3rd party webpart

Required: True
Position: Named
Accept pipeline input: False
```

### -Component
Specifies the component instance or Id to add.

```yaml
Type: ClientSideComponentPipeBind
Parameter Sets: Default with 3rd party webpart, Positioned with 3rd party webpart

Required: True
Position: Named
Accept pipeline input: False
```

### -DefaultWebPartType
Defines a default WebPart type to insert.

```yaml
Type: DefaultClientSideWebParts
Parameter Sets: Default with built-in webpart, Positioned with built-in webpart

Required: True
Position: Named
Accept pipeline input: False
```

### -Order
Sets the order of the WebPart control. (Default = 1)

```yaml
Type: Int
Parameter Sets: Default with built-in webpart, Default with 3rd party webpart, Positioned with built-in webpart, Positioned with 3rd party webpart

Required: False
Position: Named
Accept pipeline input: False
```

### -Page
The name of the page.

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: Default with built-in webpart, Default with 3rd party webpart, Positioned with built-in webpart, Positioned with 3rd party webpart

Required: True
Position: 0
Accept pipeline input: True
```

### -Section
Sets the section where to insert the WebPart control.

```yaml
Type: Int
Parameter Sets: Positioned with built-in webpart, Positioned with 3rd party webpart

Required: True
Position: Named
Accept pipeline input: False
```

### -WebPartProperties
The properties of the WebPart

```yaml
Type: PropertyBagPipeBind
Parameter Sets: Default with built-in webpart, Default with 3rd party webpart, Positioned with built-in webpart, Positioned with 3rd party webpart

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