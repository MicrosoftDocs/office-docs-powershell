---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPDefaultPageLayout

## SYNOPSIS
Sets a specific page layout to be the default page layout for a publishing site

## SYNTAX 

### TITLE
```powershell
Set-PnPDefaultPageLayout -Title <String>
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

### INHERIT
```powershell
Set-PnPDefaultPageLayout -InheritFromParentSite [<SwitchParameter>]
                         [-Web <WebPipeBind>]
                         [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPDefaultPageLayout -Title projectpage.aspx
```

Sets projectpage.aspx to be the default page layout for the current web

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPDefaultPageLayout -Title test/testpage.aspx
```

Sets a page layout in a folder in the Master Page & Page Layout gallery, such as _catalog/masterpage/test/testpage.aspx, to be the default page layout for the current web

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPDefaultPageLayout -InheritFromParentSite
```

Sets the default page layout to be inherited from the parent site

## PARAMETERS

### -InheritFromParentSite
Set the default page layout to be inherited from the parent site.

```yaml
Type: SwitchParameter
Parameter Sets: INHERIT

Required: True
Position: Named
Accept pipeline input: False
```

### -Title
Title of the page layout

```yaml
Type: String
Parameter Sets: TITLE

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