---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Add-PnPJavaScriptBlock

## SYNOPSIS
Adds a link to a JavaScript snippet/block to a web or site collection

## SYNTAX 

```powershell
Add-PnPJavaScriptBlock -Name <String>
                       -Script <String>
                       [-Sequence <Int>]
                       [-Scope <CustomActionScope>]
                       [-Web <WebPipeBind>]
                       [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Specify a scope as 'Site' to add the custom action to all sites in a site collection.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPJavaScriptBlock -Name myAction -script '<script>Alert("This is my Script block");</script>' -Sequence 9999 -Scope Site
```

Add a JavaScript code block  to all pages within the current site collection under the name myAction and at order 9999

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPJavaScriptBlock -Name myAction -script '<script>Alert("This is my Script block");</script>'
```

Add a JavaScript code block  to all pages within the current web under the name myAction

## PARAMETERS

### -Name
The name of the script block. Can be used to identify the script with other cmdlets or coded solutions

```yaml
Type: String
Parameter Sets: (All)
Aliases: Key

Required: True
Position: Named
Accept pipeline input: False
```

### -Scope
The scope of the script to add to. Either Web or Site, defaults to Web. 'All' is not valid for this command.

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Script
The javascript block to add to the specified scope

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Sequence
A sequence number that defines the order on the page

```yaml
Type: Int
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