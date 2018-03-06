---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Import-PnPAppPackage

## SYNOPSIS
Adds a SharePoint Addin to a site

## SYNTAX 

```powershell
Import-PnPAppPackage -Path <String>
                     [-Force [<SwitchParameter>]]
                     [-LoadOnly [<SwitchParameter>]]
                     [-Locale <Int>]
                     [-Web <WebPipeBind>]
                     [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
This commands requires that you have an addin package to deploy

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Import-PnPAppPackage -Path c:\files\demo.app -LoadOnly
```

This will load the addin in the demo.app package, but will not install it to the site.
 

### ------------------EXAMPLE 2------------------
```powershell
Import-PnPAppPackage -Path c:\files\demo.app -Force
```

This load first activate the addin sideloading feature, upload and install the addin, and deactivate the addin sideloading feature.
    

## PARAMETERS

### -Force
Will forcibly install the app by activating the addin sideloading feature, installing the addin, and deactivating the sideloading feature

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LoadOnly
Will only upload the addin, but not install it

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Locale
Will install the addin for the specified locale

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
Path pointing to the .app file

```yaml
Type: String
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

## OUTPUTS

### Microsoft.SharePoint.Client.AppInstance

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)