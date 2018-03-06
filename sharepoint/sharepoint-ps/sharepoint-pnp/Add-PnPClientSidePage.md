---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Add-PnPClientSidePage

## SYNOPSIS
Adds a Client-Side Page

## SYNTAX 

```powershell
Add-PnPClientSidePage -Name <String>
                      [-LayoutType <ClientSidePageLayoutType>]
                      [-PromoteAs <ClientSidePagePromoteType>]
                      [-CommentsEnabled [<SwitchParameter>]]
                      [-Publish [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPClientSidePage -Name "NewPage"
```

Creates a new Client-Side page named 'NewPage'

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPClientSidePage "NewPage"
```

Creates a new Client-Side page named 'NewPage'

## PARAMETERS

### -CommentsEnabled
Enables or Disables the comments on the page

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LayoutType
Specifies the layout type of the page.

```yaml
Type: ClientSidePageLayoutType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Name
Specifies the name of the page.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -PromoteAs
Allows to promote the page for a specific purpose (HomePage | NewsPage)

```yaml
Type: ClientSidePagePromoteType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Publish
Publishes the page once it is saved. Applicable to libraries set to create major and minor versions.

```yaml
Type: SwitchParameter
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