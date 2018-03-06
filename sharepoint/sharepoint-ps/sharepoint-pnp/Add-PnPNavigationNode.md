---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Add-PnPNavigationNode

## SYNOPSIS
Adds an item to a navigation element

## SYNTAX 

```powershell
Add-PnPNavigationNode -Location <NavigationType>
                      -Title <String>
                      [-Url <String>]
                      [-Header <String>]
                      [-First [<SwitchParameter>]]
                      [-External [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Adds a menu item to either the quicklaunch or top navigation

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPNavigationNode -Title "Contoso" -Url "http://contoso.sharepoint.com/sites/contoso/" -Location "QuickLaunch"
```

Adds a navigation node to the quicklaunch. The navigation node will have the title "Contoso" and will link to the url "http://contoso.sharepoint.com/sites/contoso/"

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPNavigationNode -Title "Contoso USA" -Url "http://contoso.sharepoint.com/sites/contoso/usa/" -Location "QuickLaunch" -Header "Contoso"
```

Adds a navigation node to the quicklaunch. The navigation node will have the title "Contoso USA", will link to the url "http://contoso.sharepoint.com/sites/contoso/usa/" and will have "Contoso" as a parent navigation node.

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPNavigationNode -Title "Contoso" -Url "http://contoso.sharepoint.com/sites/contoso/" -Location "QuickLaunch" -First
```

Adds a navigation node to the quicklaunch, as the first item. The navigation node will have the title "Contoso" and will link to the url "http://contoso.sharepoint.com/sites/contoso/"

### ------------------EXAMPLE 4------------------
```powershell
Add-PnPNavigationNode -Title "Contoso Pharmaceuticals" -Url "http://contoso.sharepoint.com/sites/contosopharma/" -Location "QuickLaunch" -External
```

Adds a navigation node to the quicklaunch. The navigation node will have the title "Contoso Pharmaceuticals" and will link to the external url "http://contoso.sharepoint.com/sites/contosopharma/"

### ------------------EXAMPLE 5------------------
```powershell
Add-PnPNavigationNode -Title "Wiki" -Location "QuickLaunch" -Url "wiki/"
```

Adds a navigation node to the quicklaunch. The navigation node will have the title "Wiki" and will link to Wiki library on the selected Web.

## PARAMETERS

### -External
Indicates the destination URL is outside of the site collection.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -First
Add the new menu item to beginning of the collection.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Header
Optionally value of a header entry to add the menu item to.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Location
The location of the node to add. Either TopNavigationBar, QuickLaunch or SearchNav

```yaml
Type: NavigationType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Title
The title of the node to add

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Url
The url to navigate to when clicking the new menu item. This can either be absolute or relative to the Web. Fragments are not supported.

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

## OUTPUTS

### Microsoft.SharePoint.Client.NavigationNode

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)