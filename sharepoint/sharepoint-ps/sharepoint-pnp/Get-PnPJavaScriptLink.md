---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPJavaScriptLink

## SYNOPSIS
Returns all or a specific custom action(s) with location type ScriptLink

## SYNTAX 

```powershell
Get-PnPJavaScriptLink [-Name <String>]
                      [-Scope <CustomActionScope>]
                      [-ThrowExceptionIfJavaScriptLinkNotFound [<SwitchParameter>]]
                      [-Web <WebPipeBind>]
                      [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPJavaScriptLink
```

Returns all web scoped JavaScript links

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPJavaScriptLink -Scope All
```

Returns all web and site scoped JavaScript links

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPJavaScriptLink -Scope Web
```

Returns all Web scoped JavaScript links

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPJavaScriptLink -Scope Site
```

Returns all Site scoped JavaScript links

### ------------------EXAMPLE 5------------------
```powershell
Get-PnPJavaScriptLink -Name Test
```

Returns the web scoped JavaScript link named Test

## PARAMETERS

### -Name
Name of the Javascript link. Omit this parameter to retrieve all script links

```yaml
Type: String
Parameter Sets: (All)
Aliases: Key

Required: False
Position: 0
Accept pipeline input: True
```

### -Scope
Scope of the action, either Web, Site or All to return both, defaults to Web

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ThrowExceptionIfJavaScriptLinkNotFound
Switch parameter if an exception should be thrown if the requested JavaScriptLink does not exist (true) or if omitted, nothing will be returned in case the JavaScriptLink does not exist

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

## OUTPUTS

### Microsoft.SharePoint.Client.UserCustomAction

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)